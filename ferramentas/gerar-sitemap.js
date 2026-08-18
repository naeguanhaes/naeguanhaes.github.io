/* ═══════════════════════════════════════════════════════
   NAE Guanhães · gerador do sitemap e do robots.txt
   ───────────────────────────────────────────────────────
   Rode depois de criar, renomear ou publicar uma página:

       node ferramentas/gerar-sitemap.js

   O sitemap.xml conta ao Google quais endereços existem e
   quando cada um mudou. O robots.txt aponta para ele.

   Entram as páginas que estão no menu do site. Ficam de fora:
   as ocultas (as que trazem <meta name="robots" content="noindex">),
   a 404 e a offline, que são páginas de serviço.

   As ocultas NÃO entram no robots.txt como proibidas de propósito:
   um endereço bloqueado ali nunca é lido, e então o "noindex" da
   própria página jamais é visto pelo buscador.
   ═══════════════════════════════════════════════════════ */
'use strict';

const fs = require('fs');
const path = require('path');
const { ehCopiaDeConflito } = require('./conflitos.js');

const RAIZ = path.join(__dirname, '..');
const SITE = 'https://naeguanhaes.github.io/';
const FORA = ['404.html', 'offline.html'];

const paginas = fs.readdirSync(RAIZ)
  .filter(f => f.endsWith('.html') && !ehCopiaDeConflito(f)).sort();

/* data local do arquivo. Nada de toISOString aqui: quem edita à noite
   no horário de Brasília veria a data do dia seguinte, em UTC */
function data(arquivo) {
  const d = fs.statSync(path.join(RAIZ, arquivo)).mtime;
  const mes = String(d.getMonth() + 1).padStart(2, '0');
  const dia = String(d.getDate()).padStart(2, '0');
  return d.getFullYear() + '-' + mes + '-' + dia;
}

const entram = paginas.filter(p => {
  const t = fs.readFileSync(path.join(RAIZ, p), 'utf8');
  if (FORA.indexOf(p) !== -1) return false;
  if (/<meta name="robots" content="noindex"/.test(t)) return false;
  return /<nav class="nav"/.test(t);
});

/* a inicial responde na raiz, e é ela que deve aparecer no sitemap */
const linhas = entram.map(p => {
  const endereco = p === 'index.html' ? SITE : SITE + p;
  return '  <url>\n' +
         '    <loc>' + endereco + '</loc>\n' +
         '    <lastmod>' + data(p) + '</lastmod>\n' +
         '  </url>';
});

const mapa =
  '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  linhas.join('\n') + '\n' +
  '</urlset>\n';

fs.writeFileSync(path.join(RAIZ, 'sitemap.xml'), mapa);

const robots =
  '# Site do NAE · Núcleo de Apoio ao Estudante · UEMG Unidade Guanhães\n' +
  'User-agent: *\n' +
  'Allow: /\n' +
  '\n' +
  'Sitemap: ' + SITE + 'sitemap.xml\n';

fs.writeFileSync(path.join(RAIZ, 'robots.txt'), robots);

console.log('');
console.log('  sitemap.xml gerado com ' + entram.length + ' endereços:');
entram.forEach(p => console.log('    ' + (p === 'index.html' ? '/ (inicial)' : p) + '  ·  ' + data(p)));
console.log('  robots.txt gerado apontando para o sitemap.');
console.log('');
