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
  atualizadoEm: '2026-09-09',
  itens: [
    {
      titulo: '28º Seminário de Pesquisa e Extensão · apresentação de trabalho',
      resumo: 'Inscrição com apresentação e submissão do resumo. É o prazo mais curto do Seminário e não se repete. Lembre: antes disso, é preciso estar inscrito como ouvinte.',
      tipo: 'pesquisa',
      abre: '2026-08-28',
      encerra: '2026-09-15',
      link: 'seminario.html',

      /* Como aparece no retângulo do topo da página inicial.
         Para tirar da vitrine sem tirar da lista, use naInicial: false.
         ATENÇÃO: o campo texto entra como HTML, para permitir o negrito.
         Só escreva aqui conteúdo do próprio repositório. */
      destaque: {
        tema: 'roxo',
        eyebrow: 'Pesquisa e extensão · UEMG',
        titulo: '28º Seminário de Pesquisa e Extensão',
        texto: 'Na Unidade Guanhães, a programação acontece de <b>09 a 13 de novembro</b>. As inscrições já estão abertas, e há <b>quatro prazos diferentes</b>. O mais curto é o da submissão de resumo.',
        numeros: [
          { n: '09 a 13/11', r: 'na Unidade' },
          { n: '4', r: 'prazos distintos' },
          { n: '15/09', r: 'prazo do resumo' }
        ],
        acao: 'Ver todos os prazos',
        extraTexto: 'Página de inscrições',
        extraLink: 'https://www.uemg.br/28ed-seminario-pe-inscricao'
      }
    },
    {
      titulo: '28º Seminário de Pesquisa e Extensão · inscrição como ouvinte',
      resumo: 'Obrigatória para TODOS que forem participar, inclusive quem vai apresentar trabalho. Faça esta primeiro, antes de qualquer outra inscrição do Seminário.',
      tipo: 'pesquisa',
      abre: '2026-08-28',
      encerra: '2026-11-10',
      link: 'seminario.html',
      naInicial: false
    }
  ]
};
