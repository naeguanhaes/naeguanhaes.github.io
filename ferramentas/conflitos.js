/* ═══════════════════════════════════════════════════════
   FERRAMENTA · Cópias de conflito do OneDrive
   ───────────────────────────────────────────────────────
   Quando o mesmo arquivo é editado em dois computadores
   antes de a pasta sincronizar, o OneDrive não escolhe um
   lado: ele guarda os dois e batiza o segundo com o nome
   da máquina, virando "index-MacBook Air de Jonatan.html".

   Essas cópias nunca são trabalho novo, são duplicatas do
   que já está no histórico do git. Só que, para quem varre
   a pasta atrás de .html, elas parecem páginas de verdade,
   e aí o inspetor cobra menu, busca e sitemap de uma
   página que não existe, bloqueando a publicação à toa.

   Todo inspetor que lê a pasta filtra por aqui.
   ═══════════════════════════════════════════════════════ */
'use strict';

const PADRAO = /-(MacBook|iMac|Mac ?mini|DESKTOP-|LAPTOP-)|conflicted copy|c[óo]pia em conflito/i;

/* true quando o arquivo é cópia de conflito e deve ser ignorado */
function ehCopiaDeConflito(nome) {
  return PADRAO.test(nome);
}

module.exports = { ehCopiaDeConflito, PADRAO };
