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

   publicado: dia em que o aviso entrou no site (AAAA-MM-DD). Nos 10 dias
             seguintes ele abre o painel da página inicial, na frente de
             todos; depois volta para o seu lugar pelo prazo. Ao publicar
             um aviso novo, preencha com a data de hoje.

   O selo (em breve, aberto, encerra em X dias, encerrado)
   é calculado sozinho a partir das datas. Editais encerrados
   continuam na página por 30 dias, depois somem.
   ═══════════════════════════════════════════════════════ */

window.DADOS_EDITAIS = {
  atualizadoEm: '2026-10-09',
  itens: [
    {
      titulo: 'Assembleia Geral do Diretório Acadêmico · Estatuto Social',
      resumo: 'O Diretório Acadêmico Sapientia et Justitia convoca todos os estudantes para apresentar, discutir e votar o Estatuto Social. Sexta, 9 de outubro, às 19h, na Unidade.',
      tipo: 'outro',
      abre: '2026-10-07',
      encerra: '2026-10-09',
      link: 'index.html#assembleia-da',
      publicado: '2026-10-07',
      /* e convocacao, nao edital: so no painel da inicial */
      naLista: false,

      destaque: {
        tema: 'coral',
        eyebrow: 'Diretório Acadêmico · convocação',
        titulo: 'Assembleia Geral: vamos votar o Estatuto do DA',
        texto: 'Todos os estudantes da UEMG Guanhães estão convocados. Pauta única: <b>apresentação, discussão e votação do Estatuto Social</b> do Diretório Acadêmico Sapientia et Justitia.',
        numeros: [
          { n: '09/10', r: 'sexta-feira' },
          { n: '19h', r: 'início' },
          { n: 'UEMG', r: 'Unidade Guanhães' }
        ],
        semContagem: true,
        acao: 'Ver o edital e o Estatuto',
        extraTexto: 'Compartilhar no WhatsApp',
        extraLink: 'https://wa.me/?text=%2AAssembleia%20Geral%20do%20Diret%C3%B3rio%20Acad%C3%AAmico%20Sapientia%20et%20Justitia%2A%0ATodos%20os%20estudantes%20da%20UEMG%20Unidade%20Guanh%C3%A3es%20est%C3%A3o%20convocados.%0A%0APauta%20%C3%BAnica:%20o%20Estatuto%20Social%20do%20Diret%C3%B3rio%20Acad%C3%AAmico%0A%E2%80%A2%20Apresenta%C3%A7%C3%A3o%20do%20Estatuto%0A%E2%80%A2%20Discuss%C3%A3o%20e%20sugest%C3%B5es%20de%20altera%C3%A7%C3%A3o%0A%E2%80%A2%20Vota%C3%A7%C3%A3o%20para%20aprova%C3%A7%C3%A3o%0A%0A%E2%80%A2%20Sexta%2C%209%20de%20outubro%20de%202026%2C%20%C3%A0s%2019h%0A%E2%80%A2%20UEMG%20Unidade%20Guanh%C3%A3es%0A%0ASua%20participa%C3%A7%C3%A3o%20garante%20legitimidade%20e%20transpar%C3%AAncia%20%C3%A0s%20regras%20da%20entidade%20que%20representa%20os%20estudantes.%0A%0A%2AEdital%20e%20link%20do%20Estatuto%20no%20site%20do%20NAE:%2A%0Ahttps://naeguanhaes.github.io/%3Futm_source%3Dwhatsapp%26utm_campaign%3Dassembleia-da%23assembleia-da'
      }
    },
    {
      titulo: 'Audiência Pública sobre o Plano Diretor de Guanhães',
      resumo: 'O Diretório Acadêmico leva 15 alunos, com participação certificada, à audiência sobre o Plano Diretor do Município. Segunda, 19 de outubro, às 14h, no Fórum da Comarca de Guanhães.',
      tipo: 'outro',
      abre: '2026-10-06',
      encerra: '2026-10-19',
      link: 'index.html#plano-diretor',
      publicado: '2026-10-06',
      /* e evento, nao edital: so no painel da inicial */
      naLista: false,

      destaque: {
        tema: 'forum',
        eyebrow: 'Diretório Acadêmico · participação certificada',
        titulo: 'Audiência Pública sobre o Plano Diretor de Guanhães',
        texto: 'O Diretório Acadêmico da UEMG Guanhães levará <b>15 alunos</b> para debater o planejamento e o futuro da cidade. A participação será <b>certificada</b>, conforme as regras da instituição.',
        numeros: [
          { n: '19/10', r: 'segunda-feira' },
          { n: '14h', r: 'início' },
          { n: '15', r: 'alunos com certificado' }
        ],
        semContagem: true,
        acao: 'Ver local e detalhes',
        extraTexto: 'Compartilhar no WhatsApp',
        extraLink: 'https://wa.me/?text=%2AAudi%C3%AAncia%20P%C3%BAblica%20sobre%20o%20Plano%20Diretor%20de%20Guanh%C3%A3es%2A%0AO%20Diret%C3%B3rio%20Acad%C3%AAmico%20da%20UEMG%20Unidade%20Guanh%C3%A3es%20vai%20participar%20e%20levar%C3%A1%2015%20alunos%2C%20com%20participa%C3%A7%C3%A3o%20certificada.%0A%0A%E2%80%A2%20Segunda%2C%2019%20de%20outubro%20de%202026%2C%20%C3%A0s%2014h%0A%E2%80%A2%20Sal%C3%A3o%20do%20Tribunal%20do%20J%C3%BAri%20do%20F%C3%B3rum%20da%20Comarca%20de%20Guanh%C3%A3es%0A%E2%80%A2%20Rua%20Artur%20Luiz%20de%20Aguiar%2C%20n%C2%BA%20100%2C%20Bairro%20Acr%C3%B3pole%0A%0AParticipar%20tamb%C3%A9m%20%C3%A9%20construir%20a%20cidade%20que%20queremos.%0A%0A%2AInforma%C3%A7%C3%B5es%20no%20site%20do%20NAE:%2A%0Ahttps://naeguanhaes.github.io/%3Futm_source%3Dwhatsapp%26utm_campaign%3Dplano-diretor%23plano-diretor'
      }
    },
    {
      titulo: 'ENADE 2026 · Engenharia Civil',
      resumo: 'Formandos de Engenharia Civil precisam do Questionário do Estudante e da prova, em 29/11, para colar grau. Ingressantes preenchem o questionário de 01/10 a 18/12.',
      tipo: 'outro',
      abre: '2026-09-30',
      encerra: '2026-12-18',
      link: 'enade.html',
      publicado: '2026-09-30',
      /* e obrigacao do curso, nao edital: so no painel da inicial */
      naLista: false,

      destaque: {
        tema: 'enade',
        eyebrow: 'Engenharia Civil · formandos e ingressantes',
        titulo: 'ENADE 2026: sem ele, não tem colação de grau',
        texto: 'Formando de Engenharia Civil: preencha o <b>Questionário do Estudante</b> no Sistema Enade <b>até 29/11</b> e faça a <b>prova em 29 de novembro</b>. Ingressantes preenchem o questionário de <b>01/10 a 18/12</b>.',
        numeros: [
          { n: '29/11', r: 'dia da prova' },
          { n: '09/11', r: 'local da prova' },
          { n: '18/12', r: 'questionário dos ingressantes' }
        ],
        semContagem: true,
        acao: 'Ver o passo a passo',
        extraTexto: 'Compartilhar no WhatsApp',
        extraLink: 'https://wa.me/?text=%2AENADE%202026:%20Engenharia%20Civil%2A%0A%0AFormando:%20sem%20o%20Question%C3%A1rio%20do%20Estudante%20e%20sem%20a%20prova%2C%20n%C3%A3o%20tem%20cola%C3%A7%C3%A3o%20de%20grau.%0A%0A%E2%80%A2%20Concluintes:%20question%C3%A1rio%20no%20Sistema%20Enade%20at%C3%A9%2029/11%20e%20prova%20em%2029/11/2026%0A%E2%80%A2%20Local%20da%20prova:%20no%20Cart%C3%A3o%20de%20Confirma%C3%A7%C3%A3o%2C%20a%20partir%20de%2009/11%0A%E2%80%A2%20Ingressantes:%20question%C3%A1rio%20de%2001/10%20a%2018/12/2026%0A%0A%2APasso%20a%20passo%20no%20site%20do%20NAE:%2A%0Ahttps://naeguanhaes.github.io/enade.html%3Futm_source%3Dwhatsapp%26utm_campaign%3Denade'
      }
    },
    {
      titulo: 'Yoga na ESMU · Pausa no dia para reconectar',
      resumo: 'Aulas de yoga na Escola de Música da UEMG (ESMU), às quintas, das 11h20 às 12h10, com a professora Sônia Assis. Ação em parceria com o NAE-ESMU. Início em outubro.',
      tipo: 'outro',
      abre: '2026-09-30',
      encerra: '2026-10-31',
      link: 'apoio.html#yoga-esmu',
      publicado: '2026-09-30',
      /* e atividade, nao edital: aparece no painel da inicial, nao na lista */
      naLista: false,

      destaque: {
        tema: 'salvia',
        eyebrow: 'Na Escola de Música da UEMG · parceria com o NAE-ESMU',
        titulo: 'Yoga na ESMU: pausa no dia para reconectar',
        texto: 'Um convite para <b>equilibrar corpo e mente</b>, relaxar e renovar as energias. Na <b>Escola de Música da UEMG (ESMU)</b>, às <b>quintas, das 11h20 às 12h10</b>, com a professora <b>Sônia Assis</b>. Para discentes, docentes, técnicos e servidores.',
        numeros: [
          { n: 'ESMU', r: 'Escola de Música' },
          { n: 'Quintas', r: '11h20 às 12h10' },
          { n: 'Outubro', r: 'início da turma' }
        ],
        semContagem: true,
        acao: 'Garanta sua vaga',
        acaoLink: 'https://forms.gle/ar9BFpTNwtG3p79fA',
        extraTexto: 'Compartilhar no WhatsApp',
        extraLink: 'https://wa.me/?text=%2AYoga%20na%20ESMU%2A%0APausa%20no%20dia%20para%20reconectar.%20Uma%20a%C3%A7%C3%A3o%20em%20parceria%20com%20o%20NAE-ESMU.%0A%0AUm%20convite%20para%20equilibrar%20corpo%20e%20mente%2C%20relaxar%20e%20renovar%20as%20energias.%0A%0A%E2%80%A2%20Onde:%20Escola%20de%20M%C3%BAsica%20da%20UEMG%20%28ESMU%29%0A%E2%80%A2%20Quintas-feiras%2C%20das%2011h20%20%C3%A0s%2012h10%0A%E2%80%A2%20Professora%20S%C3%B4nia%20Assis%0A%E2%80%A2%20In%C3%ADcio%20em%20outubro%0A%0APara%20discentes%2C%20docentes%2C%20t%C3%A9cnicos%20e%20servidores.%0A%0A%2AInforma%C3%A7%C3%B5es%20e%20inscri%C3%A7%C3%A3o%20no%20site%20do%20NAE:%2A%0Ahttps://naeguanhaes.github.io/apoio.html%3Futm_source%3Dwhatsapp%26utm_campaign%3Dyoga-esmu%23yoga-esmu',
        imagem: 'assets/eventos/yoga-esmu.webp',
        imagemAlt: 'Cartaz do Yoga na ESMU: uma tigela tibetana e uma mão em gesto de meditação. Quintas às 11h20, inscrição pelo link.'
      }
    },
    {
      titulo: 'Wi-Fi da Unidade de volta · redes e senha',
      resumo: 'A internet da Unidade voltou com novas credenciais: três redes, a mesma senha para todas. O laboratório de informática também está disponível.',
      tipo: 'outro',
      abre: '2026-09-26',
      encerra: '2026-10-09',
      link: 'wifi.html',
      publicado: '2026-09-26',
      /* e aviso, nao edital: aparece no painel da inicial, nao na lista */
      naLista: false,

      destaque: {
        tema: 'wifi',
        eyebrow: 'Internet na Unidade',
        titulo: 'O Wi-Fi da Unidade voltou',
        texto: 'São <b>três redes</b> pelo prédio, perto da cantina, do auditório e das salas do fundo, e <b>a mesma senha para todas</b>. O <b>laboratório de informática</b> também está disponível.',
        numeros: [
          { n: '3', r: 'redes' },
          { n: '1', r: 'senha para todas' }
        ],
        semContagem: true,
        acao: 'Ver as redes e a senha',
        imagem: 'assets/eventos/wifi-quadrado.webp',
        imagemAlt: 'O Wi-Fi da Unidade voltou. Três redes, a mesma senha para todas: Guanhaes@2026. UEMG - AP 01 perto da cantina, UEMG - AP 02 perto do auditório, UEMG - AP 03 perto das salas do fundo.'
      }
    },
    {
      titulo: 'PILA Presencial 2027-1 · intercâmbio na América Latina',
      resumo: 'Um semestre de graduação em universidades da Argentina, Colômbia, México e Paraguai, com alojamento e alimentação pela universidade de destino. 11 vagas. Exige de 40% a 90% do curso feito e coeficiente de 70. Inscrição até 01/10.',
      tipo: 'outro',
      abre: '2026-09-17',
      encerra: '2026-10-01',
      link: 'pila.html',
      publicado: '2026-09-24',

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
      publicado: '2026-09-21',

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
      publicado: '2026-09-21',
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
      publicado: '2026-08-28',

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
      titulo: '28º Seminário de Pesquisa e Extensão · escolha das atividades',
      grupo: 'seminario-28',
      resumo: 'Inscrição nas atividades da programação de Guanhães, pela página de inscrições do Seminário. Quem ainda não fez a inscrição como ouvinte precisa fazer também.',
      tipo: 'pesquisa',
      abre: '2026-10-13',
      encerra: '2026-10-30',
      link: 'seminario.html',
      publicado: '2026-10-09',

      destaque: {
        tema: 'roxo',
        eyebrow: 'Pesquisa e extensão · UEMG',
        titulo: '28º Seminário: escolha as suas atividades',
        texto: 'De <b>13 a 30 de outubro</b>, a página de inscrições abre a escolha das atividades da programação em Guanhães, de 09 a 13 de novembro. A inscrição <b>como ouvinte</b> continua obrigatória para todos.',
        numeros: [
          { n: '13 a 30/10', r: 'escolha das atividades' },
          { n: '10/11', r: 'prazo do ouvinte' },
          { n: '09 a 13/11', r: 'na Unidade' }
        ],
        acao: 'Ver o passo a passo',
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
      publicado: '2026-08-28',

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
      publicado: '2026-08-28',

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
