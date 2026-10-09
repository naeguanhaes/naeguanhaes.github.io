/* ═══════════════════════════════════════════════════════
   NAE Guanhães · inspetor dos eventos e prazos
   ───────────────────────────────────────────────────────
   Roda a cada publicação (workflow publicar.yml, bloqueia) e
   todo dia de manhã (workflow eventos.yml, abre tarefa):

       node ferramentas/checar-eventos.js

   Divulgação de evento envelhece sozinha: a inscrição fecha, o
   dia passa, e o site continua dizendo "inscreva-se". Este
   inspetor garante que tudo o que tem data saiba sair, ou mudar,
   na hora certa, sem depender de alguém lembrar.

   As ferramentas que o site já tem para isso:
   · data-ate="AAAA-MM-DD"   o elemento some depois desse dia
   · data-desde="AAAA-MM-DD" o elemento só aparece a partir desse dia
     (com os dois, um bloco "inscrições abertas" dá lugar a um
     "inscrições encerradas" sozinho)
   · em dados-editais.js, "abre", "encerra" e "publicado" mandam no
     painel da página inicial e na lista de editais
   · em dados-avisos.js, "de" e "ate" mandam na faixa de avisos
   · <meta name="nae:revisar-em" content="AAAA-MM-DD ...">: dias em
     que o texto da página precisa ser relido por alguém. Depois de
     reler e acertar, tire a data da lista.

   ERRO (bloqueia a publicação):
   1. data inválida em data-ate, data-desde, data-inicio, data-fim
   2. quadro de evento (.evento-cartaz) sem data-ate
   3. botão ou link de inscrição, cadastro ou formulário que não
      some sozinho (nenhum data-ate nele ou em volta)
   4. mensagem de compartilhar que só fala de datas que já passaram
      e ainda aparece na página
   5. botão "Adicionar à agenda" sem data (o site tira sozinho os
      botões de evento que já terminou)
   6. página ligada a um edital ou evento (link em dados-editais.js)
      sem a meta nae:revisar-em
   7. data de nae:revisar-em que já chegou: a página precisa ser relida
   8. item de dados-editais com destaque sem "publicado", ou com
      "encerra" antes de "abre"

   AVISO (não bloqueia, só lembra da faxina):
   · trecho com data-ate vencido há mais de 15 dias, que já pode
     ser apagado do HTML
   ═══════════════════════════════════════════════════════ */
'use strict';

const fs = require('fs');
const path = require('path');

const RAIZ = path.join(__dirname, '..');
const SAIDA_TXT = path.join(RAIZ, 'eventos.txt');

/* "hoje" em Brasília, mesmo quando o servidor roda em UTC.
   NAE_HOJE=AAAA-MM-DD simula outro dia, para testar. */
const HOJE = process.env.NAE_HOJE ||
  new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Sao_Paulo' }).format(new Date());

const ISO = /^\d{4}-\d{2}-\d{2}$/;
const MESES = { janeiro: 1, fevereiro: 2, 'março': 3, marco: 3, abril: 4, maio: 5, junho: 6, julho: 7,
                agosto: 8, setembro: 9, outubro: 10, novembro: 11, dezembro: 12 };

const erros = [];
const avisos = [];

function valida(iso) {
  if (!ISO.test(iso)) return false;
  const d = new Date(iso + 'T12:00:00Z');
  return !isNaN(d) && d.toISOString().slice(0, 10) === iso;
}
function dias(de, ate) {
  return Math.round((new Date(ate + 'T12:00:00Z') - new Date(de + 'T12:00:00Z')) / 86400000);
}
function br(iso) { return iso.slice(8, 10) + '/' + iso.slice(5, 7) + '/' + iso.slice(0, 4); }

/* Datas citadas num texto em português: 19/10, 19/10/2026,
   19 de outubro, 19 de outubro de 2026. Sem ano, vale o ano
   mais próximo de hoje (o site fala do semestre corrente). */
function datasNoTexto(t) {
  const anoHoje = +HOJE.slice(0, 4);
  const achadas = [];
  function junta(d, m, a) {
    if (d < 1 || d > 31 || m < 1 || m > 12) return;
    let ano = a ? +a : anoHoje;
    if (a && a.length === 2) ano = 2000 + +a;
    let iso = ano + '-' + String(m).padStart(2, '0') + '-' + String(d).padStart(2, '0');
    if (!a) {
      /* 05/01 escrito em dezembro fala do ano que vem */
      const prox = (anoHoje + 1) + iso.slice(4);
      if (Math.abs(dias(HOJE, prox)) < Math.abs(dias(HOJE, iso))) iso = prox;
    }
    if (valida(iso)) achadas.push(iso);
  }
  t.replace(/\b(\d{1,2})\/(\d{1,2})(?:\/(\d{4}|\d{2}))?\b/g, (_, d, m, a) => junta(+d, +m, a));
  t.replace(/\b(\d{1,2})º? de (janeiro|fevereiro|março|marco|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)(?: de (\d{4}))?/gi,
    (_, d, m, a) => junta(+d, MESES[m.toLowerCase()], a));
  return achadas;
}

/* ── leitura do HTML com a pilha de elementos abertos ──
   Basta para o que importa aqui: saber, para cada link e botão,
   que data-ate e data-desde valem nele ou em volta dele. */
const VAZIOS = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'source', 'track', 'wbr']);

function atributos(s) {
  const a = {};
  s.replace(/([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*("([^"]*)"|'([^']*)'|([^\s>]+)))?/g, (_, nome, __, d1, d2, d3) => {
    a[nome.toLowerCase()] = d1 !== undefined ? d1 : d2 !== undefined ? d2 : d3 !== undefined ? d3 : '';
  });
  return a;
}

function decodificar(t) {
  return t.replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&rarr;/g, '→').replace(/&#(\d+);/g, (_, n) => String.fromCharCode(+n));
}

function lerPagina(arquivo) {
  const html = fs.readFileSync(path.join(RAIZ, arquivo), 'utf8')
    .replace(/<!--[\s\S]*?-->/g, m => ' '.repeat(m.length))          /* comentários não contam */
    .replace(/<(script|style)\b[\s\S]*?<\/\1>/gi, m => ' '.repeat(m.length));
  const pilha = [];
  const achados = [];          /* elementos interessantes, com o contexto de datas */
  const re = /<(\/?)([a-zA-Z][a-zA-Z0-9-]*)([^>]*)>/g;
  let m;
  while ((m = re.exec(html))) {
    const fecha = m[1] === '/';
    const nome = m[2].toLowerCase();
    if (fecha) {
      for (let i = pilha.length - 1; i >= 0; i--) {
        if (pilha[i].nome === nome) {
          const el = pilha[i];
          pilha.length = i;
          if (el.guardar) {
            el.texto = decodificar(html.slice(el.fimAbertura, m.index).replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
            achados.push(el);
          }
          break;
        }
      }
      continue;
    }
    const a = atributos(m[3]);
    const linha = html.slice(0, m.index).split('\n').length;
    /* o que vale em volta: o data-ate mais cedo e o data-desde mais tarde */
    let ate = null, desde = null;
    for (const p of pilha) {
      if (p.a['data-ate'] && (!ate || p.a['data-ate'] < ate)) ate = p.a['data-ate'];
      if (p.a['data-desde'] && (!desde || p.a['data-desde'] > desde)) desde = p.a['data-desde'];
    }
    if (a['data-ate'] && (!ate || a['data-ate'] < ate)) ate = a['data-ate'];
    if (a['data-desde'] && (!desde || a['data-desde'] > desde)) desde = a['data-desde'];
    const el = { nome, a, linha, ate, desde, fimAbertura: m.index + m[0].length,
                 guardar: nome === 'a' || nome === 'button' || nome === 'section' || nome === 'meta' };
    if (VAZIOS.has(nome) || /\/\s*$/.test(m[3])) {
      if (el.guardar) { el.texto = ''; achados.push(el); }
    } else {
      pilha.push(el);
    }
  }
  return { html, achados };
}

/* aparece hoje? some com data-ate passado, espera data-desde futuro */
function visivelHoje(el) {
  if (el.ate && el.ate < HOJE) return false;
  if (el.desde && el.desde > HOJE) return false;
  return true;
}

/* ── 1 a 7: as páginas ───────────────────────────────── */
const janela = {};
global.window = janela;
eval(fs.readFileSync(path.join(RAIZ, 'assets/dados-editais.js'), 'utf8'));
const EDITAIS = (janela.DADOS_EDITAIS && janela.DADOS_EDITAIS.itens) || [];

/* páginas do próprio site que algum edital ou evento divulga */
const paginasDeEvento = new Set();
EDITAIS.forEach(e => {
  const pg = (e.link || '').split('#')[0];
  if (pg && /\.html$/.test(pg) && !/^https?:/.test(pg) && pg !== 'index.html' && pg !== 'apoio.html') paginasDeEvento.add(pg);
});

const INSCRICAO_TEXTO = /inscri|inscrev|cadastr|formul[aá]rio/i;
const INSCRICAO_LINK = /forms\.gle|forms\.cloud|docs\.google\.com\/forms|lets\.events|sympla|even3|doity|inscric|inscreva/i;

const paginas = fs.readdirSync(RAIZ).filter(f => f.endsWith('.html')).sort();

paginas.forEach(arquivo => {
  const { html, achados } = lerPagina(arquivo);
  /* páginas ocultas (noindex) são rascunho guardado: o que estiver
     velho nelas vira aviso, não erro, porque ninguém chega lá pelo menu */
  const oculta = /<meta name="robots" content="noindex/.test(html);
  const falha = msg => (oculta ? avisos : erros).push(msg + (oculta ? '  [página oculta]' : ''));

  achados.forEach(el => {
    const onde = arquivo + ':' + el.linha;

    /* 1. datas válidas */
    ['data-ate', 'data-desde'].forEach(k => {
      if (el.a[k] !== undefined && !valida(el.a[k])) erros.push(`${onde}  ${k}="${el.a[k]}" não é uma data AAAA-MM-DD válida`);
    });
    if (el.a['data-agenda'] !== undefined) {
      ['data-inicio', 'data-fim'].forEach(k => {
        if (el.a[k] !== undefined && !valida(el.a[k].slice(0, 10))) erros.push(`${onde}  ${k}="${el.a[k]}" não é uma data válida`);
      });
    }

    /* aviso de faxina: venceu há mais de 15 dias */
    if (el.a['data-ate'] && valida(el.a['data-ate']) && dias(el.a['data-ate'], HOJE) > 15) {
      avisos.push(`${onde}  trecho com data-ate="${el.a['data-ate']}" vencido há ${dias(el.a['data-ate'], HOJE)} dias: já pode ser apagado do HTML`);
    }

    /* 2. quadro de evento sem prazo de saída */
    if (el.nome === 'section' && /\bevento-cartaz\b/.test(el.a.class || '') && !el.ate) {
      erros.push(`${onde}  quadro de evento (#${el.a.id || 'sem id'}) sem data-ate: ele ficaria no ar depois do evento`);
    }

    if (!visivelHoje(el)) return;

    /* 3. botão de inscrição que não sabe sair */
    if (el.nome === 'a' && !el.ate) {
      const href = el.a.href || '';
      const externo = /^https?:/.test(href) && !/naeguanhaes\.github\.io/.test(href);
      /* pelo texto, só botão curto: cartão grande que cita "matrícula" não é inscrição */
      const ehInscricao = INSCRICAO_LINK.test(href) || (externo && el.texto.length <= 60 && INSCRICAO_TEXTO.test(el.texto));
      if (ehInscricao && !/wa\.me/.test(href)) {
        falha(`${onde}  link de inscrição "${el.texto.slice(0, 50)}" sem data-ate: ponha a data em que a inscrição fecha nele ou no bloco em volta`);
      }
    }

    /* 4. compartilhar que só fala do passado */
    if (el.nome === 'a' && /^https:\/\/wa\.me\/\?text=/.test(el.a.href || '')) {
      let texto = '';
      try { texto = decodeURIComponent(el.a.href.slice('https://wa.me/?text='.length)); } catch (e) { texto = el.a.href; }
      const ds = datasNoTexto(texto);
      if (ds.length) {
        const ultima = ds.sort().pop();
        if (ultima < HOJE) falha(`${onde}  mensagem de WhatsApp só cita datas que já passaram (a última é ${br(ultima)}) e ainda aparece: atualize o texto ou ponha data-ate`);
      }
    }

    /* 5. agenda: o site.js tira o botão sozinho depois do último dia;
       aqui só cobra que o botão tenha data, senão ele nunca sairia */
    if (el.a['data-agenda'] !== undefined && !el.a['data-inicio']) {
      falha(`${onde}  botão "Adicionar à agenda" sem data-inicio`);
    }
  });

  /* 6 e 7. páginas com revisão marcada */
  const meta = achados.find(el => el.nome === 'meta' && el.a.name === 'nae:revisar-em');
  if (paginasDeEvento.has(arquivo) && !meta) {
    erros.push(`${arquivo}  é página de edital ou evento e não tem <meta name="nae:revisar-em" content="AAAA-MM-DD ...">`);
  }
  if (meta) {
    (meta.a.content || '').split(/[\s,]+/).filter(Boolean).forEach(d => {
      if (!valida(d)) erros.push(`${arquivo}  nae:revisar-em tem "${d}", que não é data AAAA-MM-DD`);
      else if (d < HOJE) erros.push(`${arquivo}  chegou o dia de reler a página (${br(d)}): confira se o texto ainda está certo e tire essa data de nae:revisar-em`);
    });
  }
});

/* ── 8. dados dos editais ────────────────────────────── */
EDITAIS.forEach(e => {
  const nome = '"' + (e.titulo || '?') + '"';
  ['abre', 'encerra', 'publicado'].forEach(k => {
    if (e[k] && !valida(e[k])) erros.push(`dados-editais.js  ${nome}: ${k}="${e[k]}" não é data AAAA-MM-DD`);
  });
  if (e.destaque && !e.publicado) erros.push(`dados-editais.js  ${nome} tem destaque mas não tem "publicado" (a data em que entrou no site)`);
  if (e.abre && e.encerra && e.encerra < e.abre) erros.push(`dados-editais.js  ${nome}: encerra (${br(e.encerra)}) antes de abre (${br(e.abre)})`);
  if (e.encerra && valida(e.encerra) && dias(e.encerra, HOJE) > 45) {
    avisos.push(`dados-editais.js  ${nome} encerrou há ${dias(e.encerra, HOJE)} dias: já pode sair da lista`);
  }
});

/* ── resultado ───────────────────────────────────────── */
const linhas = [];
linhas.push('Inspeção dos eventos e prazos, com a data de hoje em Brasília: ' + br(HOJE));
if (erros.length) {
  linhas.push('', 'Para corrigir (' + erros.length + '):');
  erros.forEach(e => linhas.push('  ✗ ' + e));
}
if (avisos.length) {
  linhas.push('', 'Faxina, quando der (' + avisos.length + '):');
  avisos.forEach(a => linhas.push('  · ' + a));
}
if (!erros.length) linhas.push('', '✓ Nenhum evento ou prazo vencido aparecendo no site.');
const texto = linhas.join('\n');
console.log(texto);
try { fs.writeFileSync(SAIDA_TXT, texto + '\n'); } catch (e) { /* sem permissão de escrita, só mostra */ }
process.exit(erros.length ? 1 : 0);
