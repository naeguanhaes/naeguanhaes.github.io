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

   de:    primeiro dia em que o aviso aparece (AAAA-MM-DD, opcional).
          Sem esse campo, entra no ar assim que você publicar.
          COM esse campo, o aviso fica agendado e aparece sozinho no dia.
   ate:   último dia em que o aviso aparece (AAAA-MM-DD)
   link / textoLink: opcionais

   Nada é apagado desta lista: os avisos vencidos saem da faixa do topo
   mas continuam no mural (avisos.html), virando o registro do que o
   NAE comunicou. Só apague um item se ele foi publicado por engano.

   Exemplo de aviso agendado:
     { tipo: 'atencao', de: '2026-09-20', ate: '2026-09-25',
       texto: 'Última semana para o ajuste de matrícula.',
       link: 'calendario.html', textoLink: 'ver o calendário' }
   ═══════════════════════════════════════════════════════ */

window.DADOS_AVISOS = {
  atualizadoEm: '2026-08-06',
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
