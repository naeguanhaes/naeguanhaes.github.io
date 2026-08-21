/* ═══════════════════════════════════════════════════════
   DADOS · Editais e bolsas
   ───────────────────────────────────────────────────────
   A página editais.html é montada a partir desta lista.
   Enquanto a lista estiver vazia, a página mostra uma
   mensagem simpática de "nenhum edital aberto".

   Para publicar um edital, acrescente um item no TOPO:

   {
     titulo:   'Edital 01/2026 · Bolsa de Assistência Estudantil',
     resumo:   'Auxílio mensal para estudantes em vulnerabilidade. Uma ou duas linhas.',
     tipo:     'assistencia',            // assistencia | monitoria | extensao | pesquisa | outro
     abre:     '2026-09-01',             // quando as inscrições abrem (AAAA-MM-DD)
     encerra:  '2026-09-20',             // último dia de inscrição
     link:     'https://www.uemg.br/...' // página oficial do edital
   },

   O selo (em breve, aberto, encerra em X dias, encerrado)
   é calculado sozinho a partir das datas. Editais encerrados
   continuam na página por 30 dias, depois somem.
   ═══════════════════════════════════════════════════════ */

window.DADOS_EDITAIS = {
  atualizadoEm: '2026-08-18',
  itens: [
    {
      titulo: 'Edital NAE 01/2026 · Rodas de Conversa sobre Inteligência Artificial',
      resumo: '17 vagas de extensionista voluntário para o ciclo "Inteligência Artificial: limites éticos, jurídicos e técnicos", que junta Direito e Engenharia Civil. Sem bolsa, com certificação de atividade de extensão.',
      tipo: 'extensao',
      abre: '2026-08-19',
      encerra: '2026-08-31',
      link: 'extensao.html',

      /* Como este edital aparece no bloco de cima da pagina inicial.
         E o mesmo hero da pagina do projeto, repetido ali, porque o
         titulo e o resumo acima sao secos demais para uma vitrine.
         Sem este bloco, a chamada cai no titulo e no resumo.
         ATENCAO: o campo texto entra como HTML, para permitir o negrito.
         So escreva aqui conteudo do proprio repositorio. */
      destaque: {
        eyebrow: 'Conexão Universitária · NAE e Diretório Acadêmico',
        titulo: 'Inteligência Artificial: limites éticos, jurídicos e técnicos',
        texto: 'Um ciclo de Rodas de Conversa que junta <b>Direito e Engenharia Civil</b> na mesma mesa para discutir quem responde quando a inteligência artificial erra, e o que ainda é insubstituível no trabalho humano.',
        numeros: [
          { n: '17', r: 'vagas' },
          { n: '2', r: 'cursos juntos' },
          { n: '3', r: 'encontros online' },
          { n: '1', r: 'roda em escola' }
        ],
        acao: 'Quero me inscrever',
        extraTexto: 'Ler o edital completo',
        extraLink: 'documentos/edital-nae-01-2026-rodas-de-conversa-ia.pdf'
      }
    }
  ]
};
