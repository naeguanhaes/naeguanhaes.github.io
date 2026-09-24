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
  atualizadoEm: '2026-09-24',
  itens: [
    {
      titulo: 'PILA Presencial 2027-1 · intercâmbio na América Latina',
      resumo: 'Um semestre de graduação em universidades da Argentina, Colômbia, México e Paraguai, com alojamento e alimentação pela universidade de destino. 11 vagas. Exige de 40% a 90% do curso feito e coeficiente de 70. Inscrição até 01/10.',
      tipo: 'outro',
      abre: '2026-09-17',
      encerra: '2026-10-01',
      link: 'pila.html',

      destaque: {
        tema: 'musgo',
        eyebrow: 'Intercâmbio · Edital AICI/UEMG nº 02/2026',
        titulo: 'PILA 2027-1: um semestre na América Latina',
        texto: 'São <b>11 vagas de graduação</b> na Argentina, Colômbia, México e Paraguai, com <b>alojamento e alimentação</b> pela universidade que recebe. Há opções para <b>Direito e Engenharia Civil</b>. Peça já a assinatura da coordenação e o histórico assinado pela secretaria.',
        numeros: [
          { n: '11', r: 'vagas na graduação' },
          { n: '40% a 90%', r: 'do curso feito' },
          { n: '01/10', r: 'fim da inscrição' }
        ],
        acao: 'Ver vagas e documentos',
        extraTexto: 'Formulário de inscrição',
        extraLink: 'https://forms.cloud.microsoft/r/FKVFxVyM8T'
      }
    },
    {
      titulo: 'PROPCTs · Bolsa para Povos e Comunidades Tradicionais',
      resumo: 'Bolsa de R$ 1.400 por mês para estudantes pertencentes a povos e comunidades tradicionais, com a Unidade Guanhães incluída no edital. Cadastro de 21/09 a 05/10, pelo sistema do programa.',
      tipo: 'assistencia',
      abre: '2026-09-21',
      encerra: '2026-10-05',
      link: 'propcts.html',

      destaque: {
        tema: 'coral',
        eyebrow: 'Assistência estudantil · Edital PROEX/COAC nº 05/2026',
        titulo: 'Bolsa para Povos e Comunidades Tradicionais',
        texto: 'Bolsa de <b>R$ 1.400 por mês</b> para estudantes indígenas, quilombolas, ciganos e de outros povos e comunidades tradicionais. O cadastro vai de <b>21 de setembro a 5 de outubro</b>, e a Unidade Guanhães está no edital.',
        numeros: [
          { n: 'R$ 1.400', r: 'por mês' },
          { n: '05/10', r: 'fim do cadastro' },
          { n: 'Guanhães', r: 'incluída' }
        ],
        acao: 'Ver quem pode e como se cadastrar',
        extraTexto: 'Ir para o cadastro',
        extraLink: 'http://propcts.uemg.br'
      }
    },
    {
      titulo: 'V Conecta Mente · Procrastinação Acadêmica',
      resumo: 'Webinário sobre saúde mental e cuidado acadêmico, com a psicóloga Giselli Oliveira. Sexta, 06/11, das 17h às 18h30, ao vivo pela TV UEMG.',
      tipo: 'outro',
      abre: '2026-09-18',
      encerra: '2026-11-06',
      link: 'apoio.html#conecta-mente',
      grupo: 'conecta-mente-v',
      /* e evento, nao edital: aparece no painel da inicial, nao na lista */
      naLista: false,

      destaque: {
        tema: 'vinho',
        eyebrow: 'Webinário sobre Saúde Mental e Cuidado Acadêmico',
        titulo: 'V Conecta Mente: Procrastinação Acadêmica',
        texto: 'Por que adiamos aquilo que sabemos que precisamos fazer? Com a psicóloga <b>Giselli Oliveira</b>, ao vivo pela <b>TV UEMG</b>, na <b>sexta, 6 de novembro, das 17h às 18h30</b>.',
        numeros: [
          { n: '06/11', r: 'sexta-feira' },
          { n: '17h', r: 'às 18h30' },
          { n: 'TV UEMG', r: 'ao vivo' }
        ],
        rotuloPrazo: 'para o webinário',
        textoLonge: 'Ao vivo em 06/11, às 17h',
        textoUltimoDia: 'É hoje, às 17h, na TV UEMG',
        acao: 'Inscreva-se',
        acaoLink: 'https://lets.events/e/v-conecta-mente-webinario-sobre-saude-mental-e-cuidado-academico-2/',
        extraTexto: 'Ver o cartaz',
        extraLink: 'apoio.html#conecta-mente',
        imagem: 'assets/eventos/conecta-mente-v.webp',
        imagemAlt: 'Cartaz do V Conecta Mente, com a psicóloga Giselli Oliveira: Procrastinação Acadêmica, em 6 de novembro de 2026, das 17h às 18h30, ao vivo pela TV UEMG.'
      }
    },
    {
      titulo: '28º Seminário de Pesquisa e Extensão · apresentação de trabalho',
      grupo: 'seminario-28',
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
      grupo: 'seminario-28',
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
      grupo: 'seminario-28',
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
