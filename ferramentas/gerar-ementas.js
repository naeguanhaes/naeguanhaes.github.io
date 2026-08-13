/* ═══════════════════════════════════════════════════════
   Gera assets/dados-ementas.js a partir dos PPCs em fontes/
   ───────────────────────────────────────────────────────
   Rode assim, da raiz do repositório:

       node ferramentas/gerar-ementas.js

   Ele lê fontes/ppc-direito.txt e fontes/ppc-eng.txt (o texto
   puro dos dois PPCs, extraído com "pdftotext -layout"), casa
   cada ementa com a disciplina cadastrada em dados-curso.js e
   reescreve assets/dados-ementas.js do zero.

   Depois de rodar, rode SEMPRE:

       node ferramentas/checar-ementas.js

   que confere letra por letra se tudo o que saiu daqui existe
   mesmo no PPC. Um não substitui o outro: este monta, aquele
   desconfia.

   Os dois PPCs têm formatos diferentes:
     · Direito    : o nome da disciplina vem centralizado, sozinho
                    na linha, e a ementa começa com "Ementa:"
     · Engenharia : o nome vem marcado com "DISCIPLINA:" e a
                    ementa começa com "EMENTA:"

   Travas para não colar a ementa errada em uma disciplina:
     · o número romano ou arábico precisa bater (Civil I nunca
       vira Civil II)
     · semelhança mínima de 0,72 entre os nomes
     · a palavra "Ementa" precisa aparecer no COMEÇO de uma linha
       logo abaixo do título. Sem isso, qualquer frase corrida do
       regulamento virava título de disciplina, e a ementa saía
       de dentro da palavra "compl-EMENTA-r"
     · a ementa termina na bibliografia OU no próximo título de
       seção numerada. Sem esse segundo corte, uma optativa sem
       bibliografia engolia trinta páginas do PPC
   ═══════════════════════════════════════════════════════ */
'use strict';
const fs = require('fs');
const path = require('path');

const RAIZ = path.join(__dirname, '..');
const FONTES = path.join(RAIZ, 'fontes');

/* Os dois travessões do PPC, escritos por código: o site não aceita
   esses caracteres em arquivo nenhum, mas as expressões abaixo
   precisam reconhecê-los para limpar o texto vindo do PDF. */
const EN = String.fromCharCode(0x2013);
const EM = String.fromCharCode(0x2014);
const RE_PREFIXO_OPTATIVA = new RegExp('^[\\s\\S]*?OPTATIVA\\s*[-' + EN + ':]\\s*', 'i');
const RE_LINHA_OPTATIVA = new RegExp('OPTATIVA\\s*[-' + EN + ':]', 'i');
const RE_TRAVESSAO = new RegExp('\\s*[' + EN + EM + ']\\s*', 'g');
const RE_TRAVESSAO_SO = new RegExp('[' + EN + EM + ']', 'g');

const ROMANOS = { i: '1', ii: '2', iii: '3', iv: '4', v: '5', vi: '6', vii: '7', viii: '8' };
const VAZIAS = ['de', 'do', 'da', 'dos', 'das', 'e', 'em', 'a', 'o', 'ao', 'as', 'os', 'optativa'];

/* Nomes que o próprio PPC escreve de dois jeitos, no quadro de
   disciplinas e no ementário. Cada par foi conferido à mão. */
const APELIDOS = {
  'metodologia da pesquisa em direito': 'Metodologia da Pesquisa Científica'
};

function tokens(s) {
  return String(s).toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, ' ').trim().split(/\s+/)
    .map(t => ROMANOS[t] || t)
    .filter(t => t && !VAZIAS.includes(t))
    /* singular e plural contam como a mesma palavra: o ementário
       escreve "Tópicos em Direito Civil" onde o quadro escreve "Tópico" */
    .map(t => (t.length > 4 && t.endsWith('s')) ? t.slice(0, -1) : t);
}
function numeros(t) { return t.filter(x => /^[1-8]$/.test(x)).join(','); }
function semelhanca(a, b) {
  const A = new Set(a), B = new Set(b);
  let i = 0; A.forEach(x => { if (B.has(x)) i++; });
  return (2 * i) / (A.size + B.size);
}
function junta(l) { return l.join(' ').replace(/\s+/g, ' ').replace(/\s([,.;:])/g, '$1').trim(); }
function limpaBloco(s) {
  return junta(String(s || '').split('\n')
    .filter(x => !/^\s*\d{1,3}\s*$/.test(x))   /* número de página solto */
    .filter(x => x.trim()));
}

/* Uma referência nova só começa DEPOIS QUE A ANTERIOR TERMINOU, ou
   seja, depois de um ponto final. Exigir isso resolve dois enganos:

   · "HULSMAN, L. H. C; BERNAT DE CELIS, Jacqueline." é UMA referência
     de dois autores. Cortar no segundo sobrenome partia a obra ao meio.
   · sobrenomes de duas letras, como "SÁ,", não eram reconhecidos e a
     obra ficava colada na anterior. */
function referencias(t) {
  if (!t) return [];
  return t.split(/(?<=^|\.\s|\]\s)(?=[A-ZÀ-Ú][A-ZÀ-Ú'\-. ]*[A-ZÀ-Ú],\s)/g)
    .map(p => p.replace(/\s+/g, ' ').trim()).filter(p => p.length > 22);
}

/* O PPC de Direito escorrega no título: 60 vezes escreve "Bibliografia
   básica", mas 3 vezes escreve "Referência básica". Sem prever as duas
   formas, a bibliografia inteira ficava dentro da ementa. */
const T_BASICA = '(?:Bibliografia|Refer[êe]ncias?)\\s+b[áa]sicas?';
const T_COMPL = '(?:Bibliografia|Refer[êe]ncias?)\\s+complementar(?:es)?';

/* Onde a ementa acaba, quando não vem bibliografia depois dela:
   um título de seção numerada ("3.4 Abordagem dos temas transversais"),
   um cabeçalho de período ("9° Período") ou um título todo em
   maiúsculas sozinho na linha. */
const FIM_SEM_BIBLIOGRAFIA = /\n\s*(?:\d+(?:\.\d+)*\s+[A-ZÀ-Ú][a-zà-ú]|\d+\s*[°º]?\s*Per[íi]odo\b|[A-ZÀ-Ú][A-ZÀ-Ú\s,'\-]{14,}\s*$)/m;

/* "Ementa" tem de estar no começo de uma linha. Sem essa âncora, a busca
   casava dentro de "Lei Complementar", e a ementa da disciplina virava um
   pedaço do regulamento do Núcleo de Práticas. O \f é a marca de quebra de
   página que o pdftotext deixa: em nove disciplinas ela cai bem na frente
   da palavra "Ementa", e sem prever isso a disciplina ficava sem ementa. */
const MARCA_EMENTA = /^[ \t\f]*EMENTA\b[ \t]*:?[ \t]*/im;

function partes(corpo) {
  const mEm = corpo.match(MARCA_EMENTA);
  if (!mEm) return null;

  let resto = corpo.slice(mEm.index + mEm[0].length);
  let temBibliografia = true;
  const iBas = resto.search(new RegExp(T_BASICA, 'i'));
  if (iBas !== -1) {
    resto = resto.slice(0, iBas);
  } else {
    temBibliografia = false;
    const secao = resto.match(FIM_SEM_BIBLIOGRAFIA);
    if (secao) resto = resto.slice(0, secao.index);
  }

  const mBas = corpo.match(new RegExp(T_BASICA + '\\s*:?\\s*([\\s\\S]*?)(?=' + T_COMPL + '|$)', 'i'));
  const mCom = corpo.match(new RegExp(T_COMPL + '\\s*:?\\s*([\\s\\S]*)', 'i'));

  return {
    ementa: limpaBloco(resto).replace(/\s*\d{1,3}\s*$/, '').replace(/\s*CARGA HOR[ÁA]RIA.*$/i, '').trim(),
    basica: temBibliografia ? referencias(limpaBloco(mBas && mBas[1])) : [],
    complementar: temBibliografia ? referencias(limpaBloco(mCom && mCom[1])) : [],
    temBibliografia: temBibliografia
  };
}

/* ── disciplinas cadastradas no site ── */
global.window = {};
require(path.join(RAIZ, 'assets/dados-curso.js'));
const CURSOS = global.window.DADOS_CURSO.cursos;

function disciplinasDe(curso) {
  const lista = [], vistos = {};
  (curso.periodos || []).forEach(p => (p.disciplinas || []).forEach(d => {
    if (/^Optativa \d/.test(d.nome)) return;
    const chave = d.cod || d.nome;
    if (vistos[chave]) return;
    vistos[chave] = 1;
    lista.push({ chave: chave, nome: d.nome });
  }));
  (curso.optativas || []).forEach(o => {
    if (typeof o === 'string' && !vistos['OPT:' + o]) {
      vistos['OPT:' + o] = 1;
      lista.push({ chave: 'OPT:' + o, nome: o, optativa: true });
    }
  });
  return lista;
}

/* ── acha o melhor alvo para um nome vindo do PPC ── */
function casa(nomePPC, alvos, minimo) {
  /* o extrator às vezes cola o título da seção antes do nome:
     "Tópicos e Optativas OPTATIVA - Bioética e Biodireito" */
  let limpo = nomePPC.replace(RE_PREFIXO_OPTATIVA, '').replace(/^\s*DISCIPLINA\s*:\s*/i, '');
  const apelido = APELIDOS[limpo.trim().toLowerCase()];
  if (apelido) limpo = apelido;
  const tk = tokens(limpo);
  if (!tk.length) return null;
  const num = numeros(tk);
  let melhor = null, s = 0;
  alvos.forEach(a => {
    if (a.num !== num) return;
    const x = semelhanca(tk, a.tk);
    if (x > s) { s = x; melhor = a; }
  });
  return (melhor && s >= minimo) ? { alvo: melhor, score: s, titulo: limpo.trim() } : null;
}

function ehTituloDireito(linha) {
  const t = linha.trim();
  /* linha de optativa pode vir colada ao título da seção */
  if (RE_LINHA_OPTATIVA.test(t) && t.length < 110) return true;
  if (t.length < 4 || t.length > 80) return false;
  if (!/^\s{6,}/.test(linha)) return false;
  if (/^[a-z]\)/.test(t)) return false;
  if (/ementa|bibliografia|isbn|―|‖|“|”/i.test(t)) return false;
  if ((t.match(/\./g) || []).length >= 2) return false;
  if (/\d{4}/.test(t)) return false;
  return true;
}

/* O título só vale se a palavra "Ementa" aparecer no começo de uma linha
   logo abaixo dele. É o que separa o ementário de verdade das frases
   soltas do regulamento que por acaso repetem o nome da disciplina. */
const JANELA_EMENTA = 6;
function ehLinhaDeEmenta(l) { return /^[ \t\f]*EMENTA\b[ \t]*:/i.test(l); }
function ementaLogoAbaixo(linhas, i) {
  for (let k = i + 1; k <= i + JANELA_EMENTA && k < linhas.length; k++) {
    if (ehLinhaDeEmenta(linhas[k])) return k;
  }
  return -1;
}

/* Linhas de cabeçalho que ficam grudadas em cima da próxima "Ementa:":
   o nome da próxima disciplina, o "5° Período" que abre a lista, o
   "DISCIPLINA:" e o "CARGA HORÁRIA:" do PPC de Engenharia, além de
   linhas em branco e números de página soltos. Elas precisam sair do
   FIM do bloco anterior, senão entram na bibliografia da disciplina de
   cima como se fossem mais um livro. */
const LIMITE_SOBRA = 10;
function ehSobraDeCabecalho(l, cursoId) {
  const t = l.trim();
  if (!t) return true;
  if (/^[\f\s]*$/.test(l)) return true;
  if (/^\d{1,3}$/.test(t)) return true;                          /* número de página */
  if (/^\d+\s*[°ºo]?\s*Per[íi]odo\s*$/i.test(t)) return true;    /* "5° Período" */
  if (/^(DISCIPLINA|CARGA HOR[ÁA]RIA)\s*:/i.test(t)) return true;
  if (cursoId === 'direito' && ehTituloDireito(l)) return true;
  /* linha só em maiúsculas, com pelo menos três letras e nenhum número:
     título de disciplina. As duas travas evitam comer "8520317960." e
     "LTC, 2014.", que são fim de referência, não cabeçalho. */
  if (t.length <= 90 && /[A-ZÀ-Ú]{3}/.test(t) && !/[a-zà-ú]/.test(t) && !/\d/.test(t)) return true;
  return false;
}

const saida = {}, relatorio = [];

CURSOS.forEach(c => {
  const arq = c.id === 'direito' ? 'ppc-direito.txt' : 'ppc-eng.txt';
  /* o pdftotext deixa \r no fim de cada linha, o que quebra a âncora $ */
  const texto = fs.readFileSync(path.join(FONTES, arq), 'utf8').replace(/\r/g, '');
  const linhas = texto.split('\n');
  const disc = disciplinasDe(c);
  const alvos = disc.map(d => { const tk = tokens(d.nome); return { ...d, tk, num: numeros(tk) }; });

  /* toda linha que abre uma ementa, em ordem: é a régua que fecha os blocos */
  const aberturas = [];
  linhas.forEach((l, i) => { if (ehLinhaDeEmenta(l)) aberturas.push(i); });

  const marcos = [];
  const naoCasou = [];
  linhas.forEach((l, i) => {
    let bruto = null;
    if (c.id === 'direito') {
      if (!ehTituloDireito(l)) return;
      bruto = l;
    } else {
      const m0 = l.match(/^\s*DISCIPLINA\s*:\s*(.+)$/i);
      if (!m0) return;
      bruto = m0[1];
    }
    const linhaEmenta = ementaLogoAbaixo(linhas, i);
    if (linhaEmenta === -1) return;
    const m = casa(bruto, alvos, 0.72);
    if (m) marcos.push({ linha: i, linhaEmenta: linhaEmenta, ...m });
    else naoCasou.push(String(bruto).trim());
  });

  const blocos = [];
  marcos.forEach(m => {
    /* O bloco vai do título até a ementa SEGUINTE do documento. Não até o
       próximo título: no PPC de Direito uma referência bibliográfica às
       vezes se parece com um título, e usar isso como fronteira cortava a
       bibliografia no meio. A próxima "Ementa:" nunca engana. */
    let fim = aberturas.filter(x => x > m.linhaEmenta)[0];
    if (fim === undefined) fim = linhas.length;
    const piso = Math.max(m.linhaEmenta + 1, fim - LIMITE_SOBRA);
    while (fim > piso && ehSobraDeCabecalho(linhas[fim - 1], c.id)) fim--;

    const p = partes(linhas.slice(m.linha + 1, fim).join('\n'));
    if (!p || !p.ementa) return;
    blocos.push({ chave: m.alvo.chave, nome: m.alvo.nome, titulo: m.titulo, score: m.score, linha: m.linha, ...p });
  });

  /* Quando duas entradas do PPC apontam para a mesma disciplina do site,
     vence primeiro a que tem bibliografia, depois a de maior semelhança
     de nome, e por último a que aparece antes no documento. Nunca a
     ementa mais longa: comprimento premia justamente o erro de um bloco
     que escorreu para dentro do outro. */
  const porChave = {};
  blocos.forEach(b => {
    const a = porChave[b.chave];
    if (!a ||
        (b.temBibliografia && !a.temBibliografia) ||
        (b.temBibliografia === a.temBibliografia && b.score > a.score) ||
        (b.temBibliografia === a.temBibliografia && b.score === a.score && b.linha < a.linha)) {
      porChave[b.chave] = b;
    }
  });

  const casados = {};
  Object.keys(porChave).forEach(k => {
    const b = porChave[k];
    casados[k] = { ementa: b.ementa, basica: b.basica, complementar: b.complementar };
  });
  saida[c.id] = casados;

  const faltam = disc.filter(d => !casados[d.chave]).map(d => d.nome);
  const semBib = Object.values(porChave).filter(b => !b.temBibliografia).map(b => '      ' + b.nome);
  const conferir = Object.values(porChave).filter(b => b.score < 0.9)
    .map(b => '      ' + b.score.toFixed(2) + '  PPC "' + b.titulo + '"  =>  site "' + b.nome + '"');

  relatorio.push(
    '\n══ ' + c.nome + ' ══' +
    '\n  disciplinas no site: ' + disc.length +
    '\n  com ementa: ' + Object.keys(casados).length +
    '\n  sem ementa: ' + faltam.length +
    (conferir.length ? '\n  CONFERIR O CASAMENTO (' + conferir.length + '):\n' + conferir.join('\n') : '') +
    (semBib.length ? '\n  SEM BIBLIOGRAFIA NO PPC (' + semBib.length + '):\n' + semBib.join('\n') : '') +
    (naoCasou.length ? '\n  NO PPC MAS NAO NO SITE (' + naoCasou.length + '):\n    ' + naoCasou.join('\n    ') : '') +
    (faltam.length ? '\n  SEM EMENTA (' + faltam.length + '):\n    ' + faltam.join('\n    ') : '')
  );
});

/* ═══ escrita do arquivo de dados ═══ */

/* O site não usa travessões em lugar nenhum. O PPC usa, então aqui
   eles viram hífen comum, que mantém o sentido em títulos e faixas. */
function semTravessao(s) {
  return String(s).replace(RE_TRAVESSAO, ' - ').replace(/\s+/g, ' ');
}
/* limpezas finais de sujeira típica de PDF */
function limpa(s) {
  return semTravessao(s)
    .replace(/\s+/g, ' ')
    .replace(/([a-zà-ú])([A-ZÀ-Ú])/g, '$1 $2')   /* palavras coladas: "São Paulo:Manole" */
    .replace(/:\s*/g, ': ')
    .replace(/\s+([,.;])/g, '$1')
    .replace(/\.{2,}/g, '.')
    .replace(/\s+/g, ' ')
    .trim();
}
/* nas referências, não separar iniciais coladas do tipo "J.A." */
function limpaRef(s) {
  return semTravessao(s)
    .replace(/\s+/g, ' ')
    /* o PDF cola o que vinha em linhas diferentes: "decisão,dominação" */
    .replace(/(?<!\d),(?=\S)/g, ', ')
    .replace(/:(?=\S)/g, ': ')
    .replace(/([a-zà-ú,])([A-ZÀ-Ú][a-zà-ú])/g, '$1 $2')
    .replace(/(\d)([A-ZÀ-Ú])/g, '$1 $2')
    .replace(/([a-zà-ú])(\d{4})/g, '$1 $2')
    .replace(/ISBN\s*/g, 'ISBN ')
    .replace(/\s+([,.;])/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();
}

const hoje = new Date().toISOString().slice(0, 10);
const linhasSaida = [];
linhasSaida.push(`/* ═══════════════════════════════════════════════════════
   DADOS · Ementas e bibliografias das disciplinas
   ───────────────────────────────────────────────────────
   GERADO POR FERRAMENTA. Não edite à mão: rode
   "node ferramentas/gerar-ementas.js" e depois
   "node ferramentas/checar-ementas.js".

   Transcrito dos ementários dos dois Projetos Pedagógicos,
   cujo texto puro está guardado em fontes/:

   · Direito: PPC aprovado pela Resolução COEPE/UEMG nº 458,
     de 06/03/2024, seção 4.3 "Ementas e bibliografias".
   · Engenharia Civil: PPC da Unidade Guanhães, 2024,
     seções 5.1.5 "Ementário das Disciplinas Obrigatórias"
     e "Ementário das Disciplinas Optativas".

   A chave de cada disciplina é o código dela em
   assets/dados-curso.js. As optativas usam "OPT:" mais o nome.

   REGRA DE OURO, a mesma de dados-curso.js: nada aqui é chute.
   Onde o PPC não traz bibliografia, o campo vem vazio, e a
   página simplesmente não mostra a seção.

   Usado por: matriz.html, busca.js
   ═══════════════════════════════════════════════════════ */

window.DADOS_EMENTAS = {
  atualizadoEm: '${hoje}',
  fonte: 'Ementários dos PPCs de Direito (Resolução COEPE/UEMG nº 458/2024) e de Engenharia Civil (Unidade Guanhães, 2024)',
`);

Object.keys(saida).forEach((curso, iCurso, todos) => {
  linhasSaida.push('  ' + curso + ': {');
  const chaves = Object.keys(saida[curso]).sort();
  chaves.forEach((k, i) => {
    const d = saida[curso][k];
    const ementa = limpa(d.ementa);
    const bas = d.basica.map(limpaRef);
    const com = d.complementar.map(limpaRef);
    const virg = i === chaves.length - 1 ? '' : ',';

    linhasSaida.push('    ' + JSON.stringify(k) + ': {');
    linhasSaida.push('      ementa: ' + JSON.stringify(ementa) + ',');
    linhasSaida.push('      basica: [' + (bas.length ? '\n        ' + bas.map(r => JSON.stringify(r)).join(',\n        ') + '\n      ' : '') + '],');
    linhasSaida.push('      complementar: [' + (com.length ? '\n        ' + com.map(r => JSON.stringify(r)).join(',\n        ') + '\n      ' : '') + ']');
    linhasSaida.push('    }' + virg);
  });
  linhasSaida.push('  }' + (iCurso === todos.length - 1 ? '' : ','));
});
linhasSaida.push('};');

const texto = linhasSaida.join('\n') + '\n';
const destino = path.join(RAIZ, 'assets/dados-ementas.js');
fs.writeFileSync(destino, texto, 'utf8');

console.log(relatorio.join('\n'));
console.log('\n  assets/dados-ementas.js reescrito: ' + Math.round(texto.length / 1024) + ' KB');
console.log('  travessões: ' + (texto.match(RE_TRAVESSAO_SO) || []).length);
console.log('\n  Agora rode: node ferramentas/checar-ementas.js\n');
