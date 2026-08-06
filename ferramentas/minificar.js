/* ═══════════════════════════════════════════════════════
   NAE Guanhães · compactador de CSS e JS
   ───────────────────────────────────────────────────────
   As páginas usam as versões compactadas em assets/min/.
   Depois de editar qualquer arquivo de assets/, rode:

       node ferramentas/minificar.js

   Os arquivos dados-*.js NÃO passam por aqui de propósito:
   eles são referenciados direto, para que uma atualização
   de horários ou avisos não dependa desta etapa.

   Requisitos (uma vez só): npm i -g terser clean-css-cli
   ═══════════════════════════════════════════════════════ */
'use strict';

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const RAIZ = path.join(__dirname, '..');
const ORIGEM = path.join(RAIZ, 'assets');
const DESTINO = path.join(ORIGEM, 'min');

const JS = ['site.js', 'busca.js', 'horarios.js', 'calendario.js', 'mapa.js'];
const CSS = ['estilo.css'];

if (!fs.existsSync(DESTINO)) fs.mkdirSync(DESTINO);

function kb(f) { return (fs.statSync(f).size / 1024).toFixed(1) + ' KB'; }

let erro = false;

JS.forEach(nome => {
  const de = path.join(ORIGEM, nome);
  const para = path.join(DESTINO, nome.replace('.js', '.min.js'));
  try {
    execSync(`terser "${de}" --compress --mangle -o "${para}"`, { stdio: 'pipe' });
    console.log(nome.padEnd(15) + kb(de).padStart(9) + ' > ' + kb(para));
  } catch (e) {
    erro = true;
    console.error('FALHOU: ' + nome + '\n' + e.stderr);
  }
});

CSS.forEach(nome => {
  const de = path.join(ORIGEM, nome);
  const para = path.join(DESTINO, nome.replace('.css', '.min.css'));
  try {
    execSync(`cleancss -O1 -o "${para}" "${de}"`, { stdio: 'pipe' });
    console.log(nome.padEnd(15) + kb(de).padStart(9) + ' > ' + kb(para));
  } catch (e) {
    erro = true;
    console.error('FALHOU: ' + nome + '\n' + e.stderr);
  }
});

process.exit(erro ? 1 : 0);
