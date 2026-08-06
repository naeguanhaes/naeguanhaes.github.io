/* ═══════════════════════════════════════════════════════
   NAE Guanhães · inspetor do site
   ───────────────────────────────────────────────────────
   Roda sozinho antes de cada publicação (no workflow) e
   pode ser rodado à mão:  node ferramentas/checar-site.js

   O que ele fiscaliza:
   1. Travessões: a regra do site é nunca usar. Zero tolerância.
   2. Links internos quebrados: href/src apontando para arquivo
      que não existe no repositório.
   3. Arquivos do cache offline (sw.js ESSENCIAIS) que não existem.
   4. Divs desequilibradas em cada página.

   Encontrou problema? Sai com erro e a publicação NÃO acontece.
   ═══════════════════════════════════════════════════════ */
'use strict';

const fs = require('fs');
const path = require('path');

const RAIZ = path.join(__dirname, '..');
const erros = [];

function arquivosTexto(dir, lista) {
  lista = lista || [];
  fs.readdirSync(dir).forEach(nome => {
    const p = path.join(dir, nome);
    if (fs.statSync(p).isDirectory()) {
      if (!/\.git$|node_modules/.test(nome)) arquivosTexto(p, lista);
      return;
    }
    if (/\.(html|js|css|md|webmanifest|yml)$/.test(nome)) lista.push(p);
  });
  return lista;
}

const arquivos = arquivosTexto(RAIZ);
const rel = p => path.relative(RAIZ, p).replace(/\\/g, '/');

/* ── 1. travessões ────────────────────────────────────── */
/* os dois caracteres proibidos, escritos por código para
   este arquivo não se autodenunciar */
const TRACO_LONGO = new RegExp('[\\u2013\\u2014]');
arquivos.forEach(arq => {
  if (rel(arq) === 'ferramentas/checar-site.js') return;
  const texto = fs.readFileSync(arq, 'utf8');
  texto.split('\n').forEach((linha, i) => {
    if (TRACO_LONGO.test(linha)) {
      erros.push('TRAVESSÃO em ' + rel(arq) + ':' + (i + 1) + '  ' + linha.trim().slice(0, 80));
    }
  });
});

/* ── 2. links internos ────────────────────────────────── */
arquivos.filter(a => a.endsWith('.html')).forEach(arq => {
  const texto = fs.readFileSync(arq, 'utf8');
  const padrao = /(?:href|src)="([^"#]+?)(?:[#?][^"]*)?"/g;
  let m;
  while ((m = padrao.exec(texto)) !== null) {
    const alvo = m[1];
    if (/^(https?:|mailto:|tel:|data:|\/\/)/.test(alvo)) continue;
    if (alvo === '' || alvo.startsWith('#')) continue;
    /* endereços montados por JavaScript dentro da página não são links reais */
    if (/['+${}()]/.test(alvo)) continue;
    const destino = path.join(path.dirname(arq), alvo);
    if (!fs.existsSync(destino)) {
      erros.push('LINK QUEBRADO em ' + rel(arq) + ': "' + alvo + '" não existe');
    }
  }
});

/* ── 3. cache offline ─────────────────────────────────── */
const sw = fs.readFileSync(path.join(RAIZ, 'sw.js'), 'utf8');
const listaCache = sw.match(/'\.\/[^']+'/g) || [];
listaCache.forEach(item => {
  const alvo = item.replace(/'/g, '').replace('./', '');
  if (alvo && !fs.existsSync(path.join(RAIZ, alvo))) {
    erros.push('CACHE OFFLINE: sw.js lista "' + alvo + '", que não existe');
  }
});

/* ── 4. divs equilibradas ─────────────────────────────── */
arquivos.filter(a => a.endsWith('.html')).forEach(arq => {
  const texto = fs.readFileSync(arq, 'utf8');
  const abre = (texto.match(/<div\b/g) || []).length;
  const fecha = (texto.match(/<\/div>/g) || []).length;
  if (abre !== fecha) {
    erros.push('DIVS em ' + rel(arq) + ': ' + abre + ' abrem, ' + fecha + ' fecham');
  }
});

/* ── veredito ─────────────────────────────────────────── */
console.log('');
if (erros.length) {
  console.log('  O inspetor encontrou ' + erros.length + ' problema(s):\n');
  erros.forEach(e => console.log('  ✗ ' + e));
  console.log('\n  Corrija antes de publicar.\n');
  process.exit(1);
}
console.log('  Inspetor do site: nenhum problema encontrado.');
console.log('  (' + arquivos.length + ' arquivos verificados: travessões, links, cache e divs)\n');
