/* ═══════════════════════════════════════════════════════
   DADOS · Avisos do NAE
   ───────────────────────────────────────────────────────
   A faixa de aviso aparece no topo de todas as páginas.
   Para publicar um aviso, acrescente um item na lista abaixo.
   Para tirar do ar, apague o item (ou deixe a data 'ate' passar:
   avisos vencidos somem sozinhos).

   tipo:  'urgente'  → vermelho (aula suspensa, mudança de última hora)
          'atencao'  → âmbar    (prazo terminando, lembrete)
          'novidade' → turquesa (algo novo no site, evento)

   ate:   último dia em que o aviso aparece (AAAA-MM-DD)
   link / textoLink: opcionais

   Exemplo:
     { tipo: 'urgente', ate: '2026-08-12',
       texto: 'As aulas do 6º período de Direito estão suspensas nesta quinta.',
       link: 'horarios.html', textoLink: 'ver horários' }
   ═══════════════════════════════════════════════════════ */

window.DADOS_AVISOS = {
  atualizadoEm: '2026-08-05',
  avisos: [
    {
      tipo: 'novidade',
      ate: '2026-09-15',
      texto: 'Novo no site: como entrar no AVA Moodle e no Lyceum, com passo a passo do primeiro acesso e da recuperação de senha.',
      link: 'sistemas.html',
      textoLink: 'ver o passo a passo'
    }
  ]
};
