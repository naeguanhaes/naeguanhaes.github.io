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
  atualizadoEm: '2026-09-26',
  avisos: [
    {
      tipo: 'novidade',
      de: '2026-09-26',
      ate: '2026-10-09',
      texto: 'A internet da Unidade voltou, com novas credenciais: três redes, a mesma senha para todas. O laboratório de informática também está disponível.',
      link: 'sistemas.html#wifi',
      textoLink: 'ver as redes e a senha'
    },
    {
      tipo: 'atencao',
      de: '2026-09-15',
      ate: '2026-09-21',
      texto: 'Prazo prorrogado: a submissão de trabalhos do 28º Seminário de Pesquisa e Extensão vai até 21 de setembro. Lembre que é preciso ter Currículo Lattes.',
      link: 'seminario.html',
      textoLink: 'ver os prazos'
    },
    {
      tipo: 'novidade',
      ate: '2026-09-15',
      texto: 'Novo no site: como entrar no AVA Moodle e no Lyceum, com passo a passo do primeiro acesso e da recuperação de senha.',
      link: 'sistemas.html',
      textoLink: 'ver o passo a passo'
    }
  ]
};
