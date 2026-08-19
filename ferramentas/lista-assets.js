/* ═══════════════════════════════════════════════════════
   A lista dos arquivos que são compactados para assets/min/
   ───────────────────────────────────────────────────────
   Mora aqui, e em um lugar só, porque duas ferramentas
   precisam dela: o minificar.js, que compacta, e o
   checar-minificados.js, que confere se o compactado está
   em dia. Enquanto a lista era repetida nos dois, acrescentar
   um arquivo em um e esquecer o outro fazia a inspeção
   reprovar a publicação sem motivo real. Aconteceu com o
   qr.js em 13/08/2026.

   Ao criar um .js ou .css novo em assets/, acrescente aqui.
   ═══════════════════════════════════════════════════════ */
'use strict';

module.exports = {
  JS: [
    'site.js',
    'busca.js',
    'qr.js',
    'horarios.js',
    'calendario.js',
    'mapa.js',
    'planner.js',
    'curso.js',
    'requerimentos.js',
    'edital-hero.js'
  ],
  CSS: ['estilo.css']
};
