/* ═══════════════════════════════════════════════════════
   NAE Guanhães · inspetor da VERSAO do cache offline
   ───────────────────────────────────────────────────────
   Roda no workflow antes de publicar e pode ser rodado à mão:

       node ferramentas/checar-versao.js

   O sw.js guarda o site no aparelho do estudante. Enquanto a
   constante VERSAO não muda, quem já visitou continua vendo a
   versão antiga das páginas, do CSS e dos scripts. Trocar esse
   número é o item de checklist mais fácil de esquecer.

   Este inspetor olha o que mudou desde o último commit (ou, se
   não houver mudança solta, o que o último commit alterou) e
   cobra a troca da VERSAO quando algum arquivo servido ao
   estudante mudou.

   Os assets/dados-*.js ficam DE FORA da cobrança de propósito:
   desde a versão nae-v14 eles vão pela rede primeiro, então um
   aviso novo chega sem depender da troca da VERSAO.

   Encontrou problema? Sai com erro e a publicação NÃO acontece.
   ═══════════════════════════════════════════════════════ */
'use strict';

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const RAIZ = path.join(__dirname, '..');

function git(comando) {
  return execSync('git ' + comando, { cwd: RAIZ, stdio: ['ignore', 'pipe', 'ignore'] })
    .toString().trim();
}

function versaoDe(texto) {
  const m = texto.match(/var VERSAO = '([^']+)'/);
  return m ? m[1] : null;
}

/* arquivo que o estudante baixa e que fica preso no cache */
function servido(caminho) {
  if (/^assets\/dados-[a-z-]+\.js$/.test(caminho)) return false;   /* vão pela rede */
  if (caminho === 'sw.js') return false;                            /* é o próprio */
  return /\.html$/.test(caminho) ||
         caminho === 'manifest.webmanifest' ||
         /^assets\//.test(caminho) ||
         /^historico\/semestres\//.test(caminho);
}

console.log('');

let solto = '';
try {
  solto = git('status --porcelain');
} catch (e) {
  console.log('  Sem git por aqui, não dá para conferir a VERSAO. Seguindo.\n');
  process.exit(0);
}

let mudados, base;
try {
  if (solto) {
    base = 'HEAD';
    mudados = git('diff --name-only HEAD');
  } else {
    base = 'HEAD~1';
    mudados = git('diff --name-only HEAD~1 HEAD');
  }
} catch (e) {
  console.log('  Histórico curto demais para comparar. Seguindo.\n');
  process.exit(0);
}

const lista = mudados.split('\n').map(s => s.trim()).filter(Boolean);
const servidos = lista.filter(servido);

if (!servidos.length) {
  console.log('  VERSAO: nada que o estudante baixa mudou, nada a cobrar.\n');
  process.exit(0);
}

const agora = versaoDe(fs.readFileSync(path.join(RAIZ, 'sw.js'), 'utf8'));
let antes = null;
try {
  antes = versaoDe(git('show ' + base + ':sw.js'));
} catch (e) {
  console.log('  Não achei o sw.js anterior para comparar. Seguindo.\n');
  process.exit(0);
}

if (!agora) {
  console.log('  Não encontrei a linha da VERSAO no sw.js. Confira o arquivo.\n');
  process.exit(1);
}

if (agora === antes) {
  console.log('  VERSAO do sw.js parada em "' + agora + '", mas ' + servidos.length +
              ' arquivo(s) que o estudante baixa mudaram:\n');
  servidos.slice(0, 12).forEach(f => console.log('  ✗ ' + f));
  if (servidos.length > 12) console.log('  ... e mais ' + (servidos.length - 12) + '.');
  console.log('\n  Suba o número no topo do sw.js (por exemplo, ' +
              agora.replace(/(\d+)$/, (n) => Number(n) + 1) + ') e publique de novo.');
  console.log('  Sem isso, quem já visitou o site continua na versão antiga.\n');
  process.exit(1);
}

console.log('  VERSAO: subiu de "' + antes + '" para "' + agora + '".');
console.log('  (' + servidos.length + ' arquivo(s) servidos ao estudante mudaram)\n');
