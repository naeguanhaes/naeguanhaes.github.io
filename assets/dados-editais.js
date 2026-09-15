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
  atualizadoEm: '2026-09-15',
  itens: [
    {
      titulo: '28º Seminário de Pesquisa e Extensão · apresentação de trabalho',
      resumo: 'Prazo prorrogado de 15 para 21 de setembro. Inscrição com apresentação e submissão do resumo. Exige Currículo Lattes, que leva até 24 horas para ser gerado. É o prazo mais curto do Seminário e não se repete.',
      tipo: 'pesquisa',
      abre: '2026-08-28',
      encerra: '2026-09-21',
      link: 'seminario.html',

      /* Como aparece no retângulo do topo da página inicial.
         Para tirar da vitrine sem tirar da lista, use naInicial: false.
         ATENÇÃO: o campo texto entra como HTML, para permitir o negrito.
         Só escreva aqui conteúdo do próprio repositório. */
      destaque: {
        tema: 'roxo',
        eyebrow: 'Prazo prorrogado · submissão até 21/09',
        titulo: '28º Seminário de Pesquisa e Extensão',
        texto: 'Na Unidade Guanhães, a programação acontece de <b>09 a 13 de novembro</b>. Para submeter resumo é preciso ter <b>Currículo Lattes</b>, e ele pode levar <b>até 24 horas</b> para ficar pronto: se ainda não tem, faça hoje.',
        numeros: [
          { n: '09 a 13/11', r: 'na Unidade' },
          { n: '21/09', r: 'resumo, prorrogado' },
          { n: 'Lattes', r: 'exigido no resumo' }
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

      destaque: {
        tema: 'roxo',
        eyebrow: 'Pesquisa e extensão · UEMG',
        titulo: '28º Seminário de Pesquisa e Extensão',
        texto: 'A programação em Guanhães é de <b>09 a 13 de novembro</b>. Ainda dá tempo: a inscrição <b>como ouvinte</b> vai até 10 de novembro e é obrigatória para todos que forem participar.',
        numeros: [
          { n: '09 a 13/11', r: 'na Unidade' },
          { n: '10/11', r: 'prazo do ouvinte' },
          { n: 'Livre', r: 'para toda a Unidade' }
        ],
        acao: 'Ver todos os prazos',
        extraTexto: 'Página de inscrições',
        extraLink: 'https://www.uemg.br/28ed-seminario-pe-inscricao'
      }
    },
    {
      titulo: '28º Seminário de Pesquisa e Extensão · programação em Guanhães',
      resumo: 'A semana do Seminário na Unidade Guanhães. Quem se inscreveu participa das atividades da programação.',
      tipo: 'pesquisa',
      abre: '2026-11-09',
      encerra: '2026-11-13',
      link: 'seminario.html',

      destaque: {
        tema: 'roxo',
        eyebrow: 'Pesquisa e extensão · UEMG',
        titulo: 'É esta semana: 28º Seminário de Pesquisa e Extensão',
        texto: 'A programação da Unidade Guanhães acontece de <b>09 a 13 de novembro</b>. Confira os horários e participe.',
        numeros: [
          { n: '09 a 13/11', r: 'esta semana' },
          { n: 'Guanhães', r: 'na Unidade' }
        ],
        acao: 'Ver a página do Seminário',
        extraTexto: 'Regulamento',
        extraLink: 'https://www.uemg.br/normas/regulamento'
      }
    }
  ]
};
