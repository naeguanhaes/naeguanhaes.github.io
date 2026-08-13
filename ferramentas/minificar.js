/* ═══════════════════════════════════════════════════════
   NAE Guanhães · compactador de CSS e JS
   ───────────────────────────────────────────────────────
   As páginas usam as versões compactadas em assets/min/.
   Depois de editar qualquer arquivo de assets/, rode:

       node ferramentas/minificar.js

   Os arquivos dados-*.js NÃO passam por aqui de propósito:
   eles são referenciados direto, para que uma atualização
   de horários ou avisos não dependa desta etapa.

   Requisitos: terser e clean-css-cli. Se não estiverem
   instalados no computador, esta ferramenta chama os dois
   pelo npx sozinha (mais lento, porém sem instalar nada).
   Para deixar rápido: npm i -g terser clean-css-cli

   Ao terminar, grava assets/min/origem.json com a impressão
   digital de cada arquivo de origem. É esse arquivo que o
   inspetor checar-minificados.js usa para saber se alguém
   editou um .js ou .css e esqueceu de recompactar.
   ═══════════════════════════════════════════════════════ */
'use strict';

const { execSync } = require('child_process');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const RAIZ = path.join(__dirname, '..');
const ORIGEM = path.join(RAIZ, 'assets');
const DESTINO = path.join(ORIGEM, 'min');

/* a lista mora em um arquivo só, compartilhada com o checar-minificados */
const LISTA = require('./lista-assets.js');
const JS = LISTA.JS;
const CSS = LISTA.CSS;

if (!fs.existsSync(DESTINO)) fs.mkdirSync(DESTINO);

function kb(f) { return (fs.statSync(f).size / 1024).toFixed(1) + ' KB'; }

/* usa o programa instalado no computador; se não houver, cai no npx */
function achar(programa, pacote) {
  try {
    execSync(programa + ' --version', { stdio: 'ignore' });
    return programa;
  } catch (e) {
    return 'npx --yes ' + pacote;
  }
}
const TERSER = achar('terser', 'terser');
const CLEANCSS = achar('cleancss', 'clean-css-cli');

let erro = false;

JS.forEach(nome => {
  const de = path.join(ORIGEM, nome);
  const para = path.join(DESTINO, nome.replace('.js', '.min.js'));
  try {
    execSync(`${TERSER} "${de}" --compress --mangle -o "${para}"`, { stdio: 'pipe' });
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
    execSync(`${CLEANCSS} -O1 -o "${para}" "${de}"`, { stdio: 'pipe' });
    console.log(nome.padEnd(15) + kb(de).padStart(9) + ' > ' + kb(para));
  } catch (e) {
    erro = true;
    console.error('FALHOU: ' + nome + '\n' + e.stderr);
  }
});

/* Impressão digital das origens, para o inspetor conferir depois.
   O fim de linha é normalizado antes de calcular, senão o mesmo arquivo
   teria uma impressão no Windows (CR LF) e outra no servidor (LF).
   O checar-minificados.js calcula do mesmo jeito. */
if (!erro) {
  const digitais = {};
  JS.concat(CSS).forEach(nome => {
    const conteudo = fs.readFileSync(path.join(ORIGEM, nome), 'utf8').replace(/\r\n/g, '\n');
    digitais[nome] = crypto.createHash('sha256').update(conteudo, 'utf8').digest('hex');
  });
  fs.writeFileSync(path.join(DESTINO, 'origem.json'),
    JSON.stringify(digitais, null, 2) + '\n');
  console.log('\nassets/min/origem.json atualizado.');
}

process.exit(erro ? 1 : 0);
