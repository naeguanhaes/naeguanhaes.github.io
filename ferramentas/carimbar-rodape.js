#!/usr/bin/env node
/* ═══════════════════════════════════════════════════════
   Carimba a data do rodapé "Site conferido e atualizado em ..."
   em todas as páginas, com o dia de hoje (horário de Brasília).

   Pedido do coordenador em 18/11/2026: a data ficava parada
   porque dependia de troca à mão. Agora:
   · o workflow de publicação roda este script antes de empacotar
     o site, então o que vai ao ar tem sempre a data do envio;
   · rodar à mão (node ferramentas/carimbar-rodape.js) deixa o
     repositório igual ao que está no ar. Aceita uma data:
     node ferramentas/carimbar-rodape.js 2026-11-18
   ═══════════════════════════════════════════════════════ */
const fs = require('fs');
const path = require('path');
const { ehCopiaDeConflito } = require('./conflitos.js');

const RAIZ = path.join(__dirname, '..');
const MESES = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho',
  'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

function hojeBrasilia() {
  const p = new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Sao_Paulo', year: 'numeric', month: '2-digit', day: '2-digit' })
    .formatToParts(new Date());
  const v = t => p.find(x => x.type === t).value;
  return v('year') + '-' + v('month') + '-' + v('day');
}

const iso = process.argv[2] || hojeBrasilia();
const m = iso.match(/^(\d{4})-(\d{2})-(\d{2})$/);
if (!m) { console.error('Data inválida: use AAAA-MM-DD'); process.exit(1); }
const texto = Number(m[3]) + ' de ' + MESES[Number(m[2]) - 1] + ' de ' + m[1];

let mudou = 0;
for (const nome of fs.readdirSync(RAIZ)) {
  if (!nome.endsWith('.html') || ehCopiaDeConflito(nome)) continue;
  const arq = path.join(RAIZ, nome);
  const antes = fs.readFileSync(arq, 'utf8');
  const depois = antes.replace(/Site conferido e atualizado em [^<]+/g, 'Site conferido e atualizado em ' + texto);
  if (depois !== antes) { fs.writeFileSync(arq, depois); mudou++; }
}
console.log('Rodapé: "Site conferido e atualizado em ' + texto + '" (' + mudou + ' página(s) alteradas).');
