/* ═══════════════════════════════════════════════════════
   NAE Guanhães · inspetor de consistência
   ───────────────────────────────────────────────────────
   Roda no workflow antes de publicar e pode ser rodado à mão:

       node ferramentas/checar-consistencia.js

   O menu, o rodapé e o índice da busca são repetidos em
   dezenas de arquivos. Página nova ou item novo obriga a
   editar tudo à mão, e esquecer um é o erro mais provável
   do projeto. Este inspetor confere:

   1. Sintaxe dos scripts escritos dentro das páginas.
   2. Menu igual em todas as páginas que têm menu.
   3. Rodapé "Site conferido e atualizado em" com a mesma data.
   4. Toda página visível está no índice da busca.
   5. Toda página está na lista do cache offline (sw.js).
   6. Toda página visível está no sitemap, e nenhuma oculta está.

   Encontrou problema? Sai com erro e a publicação NÃO acontece.
   ═══════════════════════════════════════════════════════ */
'use strict';

const fs = require('fs');
const path = require('path');

const RAIZ = path.join(__dirname, '..');
const problemas = [];

const paginas = fs.readdirSync(RAIZ).filter(f => f.endsWith('.html')).sort();
const texto = {};
paginas.forEach(p => { texto[p] = fs.readFileSync(path.join(RAIZ, p), 'utf8'); });

/* página oculta é a que pede para não ser indexada */
const oculta = p => /<meta name="robots" content="noindex"/.test(texto[p]);
const temMenu = p => /<nav class="nav"/.test(texto[p]);

/* ── 1. sintaxe dos scripts soltos ────────────────────── */
paginas.forEach(p => {
  const blocos = texto[p].match(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/g) || [];
  blocos.forEach((bruto, i) => {
    const abertura = bruto.match(/^<script[^>]*>/)[0];
    /* ld+json não é código: é dado, e vai conferido lá embaixo */
    if (/type="(?!text\/javascript)[^"]+"/.test(abertura)) return;
    const corpo = bruto.replace(/^<script[^>]*>/, '').replace(/<\/script>$/, '');
    if (!corpo.trim()) return;
    try {
      new Function(corpo);
    } catch (e) {
      problemas.push('SINTAXE em ' + p + ', script solto ' + (i + 1) + ': ' + e.message);
    }
  });
});

/* ── 2. menu igual em todas as páginas ────────────────── */
function menuDe(p) {
  const m = texto[p].match(/<nav class="nav"[\s\S]*?<\/nav>/);
  if (!m) return null;
  /* a página atual marca o próprio item, e só isso pode variar */
  return m[0].replace(/\s+aria-current="page"/g, '').replace(/\s+/g, ' ').trim();
}
const comMenu = paginas.filter(temMenu);
if (comMenu.length) {
  const referencia = menuDe(comMenu[0]);
  comMenu.slice(1).forEach(p => {
    if (menuDe(p) !== referencia) {
      problemas.push('MENU diferente em ' + p + ' (a referência é ' + comMenu[0] + ')');
    }
  });
}

/* ── 3. data do rodapé ────────────────────────────────── */
const datas = {};
paginas.forEach(p => {
  const m = texto[p].match(/Site conferido e atualizado em ([^<]+)/);
  if (m) datas[p] = m[1].trim();
});
const valores = Object.keys(datas).map(p => datas[p]);
const maisComum = valores.sort((a, b) =>
  valores.filter(v => v === b).length - valores.filter(v => v === a).length)[0];
Object.keys(datas).forEach(p => {
  if (datas[p] !== maisComum) {
    problemas.push('RODAPÉ em ' + p + ': data "' + datas[p] + '", diferente de "' + maisComum + '"');
  }
});

/* ── 4. índice da busca ───────────────────────────────── */
const busca = fs.readFileSync(path.join(RAIZ, 'assets/dados-busca.js'), 'utf8');
paginas.filter(p => temMenu(p) && !oculta(p)).forEach(p => {
  if (busca.indexOf(p) === -1) {
    problemas.push('BUSCA: ' + p + ' está no menu mas não aparece em assets/dados-busca.js');
  }
});

/* ── 5. cache offline ─────────────────────────────────── */
const sw = fs.readFileSync(path.join(RAIZ, 'sw.js'), 'utf8');
paginas.forEach(p => {
  if (sw.indexOf("'./" + p + "'") === -1) {
    problemas.push('CACHE: ' + p + ' não está na lista ESSENCIAIS do sw.js');
  }
});

/* ── 6. sitemap ───────────────────────────────────────── */
const caminhoMapa = path.join(RAIZ, 'sitemap.xml');
if (fs.existsSync(caminhoMapa)) {
  const mapa = fs.readFileSync(caminhoMapa, 'utf8');
  const naoEntram = ['404.html', 'offline.html'];
  paginas.forEach(p => {
    const dentro = mapa.indexOf('/' + p) !== -1 ||
                   (p === 'index.html' && /<loc>[^<]+\/<\/loc>/.test(mapa));
    if (oculta(p) || naoEntram.indexOf(p) !== -1) {
      if (dentro) problemas.push('SITEMAP: ' + p + ' é oculta ou de serviço e não deveria estar no sitemap.xml');
    } else if (temMenu(p) && !dentro) {
      problemas.push('SITEMAP: ' + p + ' está faltando no sitemap.xml (rode node ferramentas/gerar-sitemap.js)');
    }
  });
}

/* ── 7. dados estruturados batendo com a página ───────── */
paginas.forEach(p => {
  const blocos = texto[p].match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g) || [];
  blocos.forEach(bruto => {
    const corpo = bruto.replace(/^<script[^>]*>/, '').replace(/<\/script>$/, '');
    let dado;
    try {
      dado = JSON.parse(corpo);
    } catch (e) {
      problemas.push('DADOS ESTRUTURADOS em ' + p + ': JSON inválido, ' + e.message);
      return;
    }
    if (dado['@type'] !== 'FAQPage') return;

    const naPagina = (texto[p].match(/<details class="faq">/g) || []).length;
    const noJson = (dado.mainEntity || []).length;
    if (naPagina !== noJson) {
      problemas.push('DADOS ESTRUTURADOS em ' + p + ': ' + noJson + ' perguntas declaradas ao ' +
        'buscador, ' + naPagina + ' na página (rode node ferramentas/gerar-dados-estruturados.js)');
    }
    (dado.mainEntity || []).forEach(q => {
      /* a pergunta anunciada precisa estar escrita na tela, senão é promessa falsa */
      const limpa = String(q.name).replace(/\s+/g, ' ').trim();
      const naTela = texto[p].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
      if (naTela.indexOf(limpa) === -1) {
        problemas.push('DADOS ESTRUTURADOS em ' + p + ': a pergunta "' + limpa.slice(0, 50) +
          '..." não aparece na página (rode node ferramentas/gerar-dados-estruturados.js)');
      }
    });
  });
});

/* ── veredito ─────────────────────────────────────────── */
console.log('');
if (problemas.length) {
  console.log('  Consistência: ' + problemas.length + ' problema(s) encontrado(s):\n');
  problemas.forEach(p => console.log('  ✗ ' + p));
  console.log('\n  Corrija antes de publicar.\n');
  process.exit(1);
}
console.log('  Consistência: nenhum problema encontrado.');
console.log('  (' + paginas.length + ' páginas: sintaxe dos scripts, menu, rodapé,');
console.log('   índice da busca, cache offline e sitemap)\n');
