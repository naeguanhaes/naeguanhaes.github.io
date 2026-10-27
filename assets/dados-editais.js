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
  atualizadoEm: '2026-10-27',
  itens: [
    {
      titulo: 'Estágio Institucional na UEMG · Seleção 2027',
      resumo: 'Estágio remunerado dentro da UEMG, com bolsa de R$ 910,59 e R$ 275,00 de auxílio-transporte, 20 horas por semana. Cadastro de reserva, com seleção por prova escrita. Inscrição até 09/11, às 23h30. A Monitoria INCLUA tem edital em breve.',
      tipo: 'outro',
      abre: '2026-10-23',
      encerra: '2026-11-09',
      link: 'estagio-inclua.html',
      publicado: '2026-10-27',

      destaque: {
        tema: 'selecao',
        imagem: 'assets/eventos/selecao-estagio-inclua-2027-pessoas.webp',
        imagemAlt: 'Ilustração de três estudantes conversando em volta de uma mesa com papéis e um notebook',
        eyebrow: 'Edital PROEX/COAC nº 07/2026',
        titulo: 'Estágio na UEMG: inscrições até 09/11',
        texto: 'Estágio remunerado <b>dentro da universidade</b>, 20 horas por semana, com seleção por prova escrita. A PROEX não prevê novo edital em 2027. Veja quem pode, o passo a passo e a Monitoria INCLUA, que sai em breve.',
        numeros: [
          { n: '09/11', r: 'fim das inscrições' },
          { n: 'R$ 1.185', r: 'por mês, com transporte' },
          { n: '20 h', r: 'por semana' }
        ],
        acao: 'Ver como se inscrever',
        extraTexto: 'Compartilhar no WhatsApp',
        extraLink: 'https://wa.me/?text=%2AEst%C3%A1gio%20Institucional%20na%20UEMG%20%C2%B7%20Sele%C3%A7%C3%A3o%202027%2A%0AEst%C3%A1gio%20remunerado%20dentro%20da%20UEMG%2C%20na%20Unidade%20Guanh%C3%A3es.%0A%0A%E2%80%A2%20Bolsa%20de%20R%24%20910%2C59%20%2B%20R%24%20275%2C00%20de%20aux%C3%ADlio-transporte%0A%E2%80%A2%2020%20horas%20por%20semana%0A%E2%80%A2%20Inscri%C3%A7%C3%B5es%20at%C3%A9%2009%2F11%2C%20%C3%A0s%2023h30%2C%20pelo%20formul%C3%A1rio%20do%20edital%0A%E2%80%A2%20Sele%C3%A7%C3%A3o%20por%20prova%20escrita%2C%20de%2023%20a%2027%2F11%0A%0A%2APasso%20a%20passo%20e%20edital%20no%20site%20do%20NAE%3A%2A%0Ahttps%3A%2F%2Fnaeguanhaes.github.io%2Festagio-inclua.html'
      }
    },
    {
      titulo: 'PEAES Veteranos 2027 · auxílios de assistência estudantil',
      resumo: 'Moradia, transporte, alimentação, inclusão digital, creche, saúde, cultura, esporte e mais, para estudantes de baixa renda de todos os períodos. Inscrição pelo Sistema PEAES até 16/11, às 23h59.',
      tipo: 'assistencia',
      abre: '2026-10-23',
      encerra: '2026-11-16',
      link: 'peaes.html',
      publicado: '2026-10-27',

      destaque: {
        tema: 'peaes',
        imagem: 'assets/eventos/peaes-veteranos-2027.webp',
        imagemAlt: 'Arte do PEAES Veteranos: três estudantes sorrindo em volta de uma mesa com livros e notebook, com o texto Apoio para você permanecer na universidade',
        eyebrow: 'Edital PROEX/COAC nº 06/2026',
        titulo: 'PEAES Veteranos 2027: inscrições até 16/11',
        texto: 'Auxílio em dinheiro para você <b>permanecer na universidade</b>, em todos os períodos. Quem já recebeu antes precisa <b>se inscrever de novo</b>. Veja o passo a passo, os documentos e os modelos de declaração.',
        numeros: [
          { n: '16/11', r: 'fim das inscrições' },
          { n: 'até 3', r: 'auxílios por estudante' },
          { n: '1,5', r: 'salário mínimo por pessoa' }
        ],
        acao: 'Ver o passo a passo',
        extraTexto: 'Compartilhar no WhatsApp',
        extraLink: 'https://wa.me/?text=%2APEAES%20Veteranos%202027%20%C2%B7%20UEMG%2A%0AAux%C3%ADlio%20para%20voc%C3%AA%20permanecer%20na%20universidade%3A%20moradia%2C%20transporte%2C%20alimenta%C3%A7%C3%A3o%2C%20inclus%C3%A3o%20digital%20e%20mais.%0A%0A%E2%80%A2%20Inscri%C3%A7%C3%B5es%20de%2023%2F10%20a%2016%2F11%2C%20at%C3%A9%2023h59%2C%20no%20Sistema%20PEAES%0A%E2%80%A2%20Para%20todos%20os%20per%C3%ADodos%20da%20gradua%C3%A7%C3%A3o%2C%20com%20renda%20de%20at%C3%A9%201%2C5%20sal%C3%A1rio%20m%C3%ADnimo%20por%20pessoa%0A%E2%80%A2%20J%C3%A1%20recebeu%20antes%3F%20Precisa%20se%20inscrever%20de%20novo%0A%0A%2APasso%20a%20passo%2C%20documentos%20e%20modelos%20no%20site%20do%20NAE%3A%2A%0Ahttps%3A%2F%2Fnaeguanhaes.github.io%2Fpeaes.html'
      }
    },
    {
      titulo: '1ª Mostra de Profissões · voluntários',
      org: 'da',
      resumo: 'O Diretório Acadêmico convida estudantes para serem voluntários na 1ª Mostra de Profissões, que apresenta os cursos de Direito e Engenharia Civil. Sexta, 13 de novembro, a partir das 13h, na Unidade.',
      tipo: 'outro',
      abre: '2026-10-21',
      encerra: '2026-11-13',
      link: 'mostra-profissoes.html',
      publicado: '2026-10-21',
      /* e evento, nao edital: so no painel da inicial */
      naLista: false,

      destaque: {
        tema: 'mostra',
        eyebrow: 'Diretório Acadêmico · chamada de voluntários',
        titulo: '1ª Mostra de Profissões: seja voluntário',
        texto: 'A Mostra apresenta os cursos de <b>Direito e Engenharia Civil</b>: áreas de atuação, atividades práticas e espaço para perguntas. O Diretório Acadêmico convida estudantes da Unidade para serem <b>voluntários</b>.',
        numeros: [
          { n: '13/11', r: 'sexta-feira' },
          { n: '13h', r: 'a partir das' },
          { n: 'UEMG', r: 'Unidade Guanhães' }
        ],
        semContagem: true,
        acao: 'Quero ser voluntário',
        acaoLink: 'https://forms.gle/DXUdKstRHQMz7xhm7',
        extraTexto: 'Compartilhar no WhatsApp',
        extraLink: 'https://wa.me/?text=%2A1%C2%AA%20Mostra%20de%20Profiss%C3%B5es%20UEMG%2A%0AO%20Diret%C3%B3rio%20Acad%C3%AAmico%20est%C3%A1%20formando%20uma%20equipe%20de%20estudantes%20volunt%C3%A1rios%20para%20organizar%20a%20Mostra%2C%20que%20apresenta%20os%20cursos%20de%20Direito%20e%20Engenharia%20Civil%20para%20estudantes%20do%20Ensino%20M%C3%A9dio.%0A%0A%E2%80%A2%20Sexta%2C%2013%20de%20novembro%20de%202026%2C%20a%20partir%20das%2013h%0A%E2%80%A2%20UEMG%20Unidade%20Guanh%C3%A3es%0A%0AD%C3%A1%20para%20ajudar%20na%20recep%C3%A7%C3%A3o%2C%20nas%20oficinas%20e%20apresenta%C3%A7%C3%B5es%2C%20nos%20stands%2C%20no%20tour%20pela%20universidade%2C%20no%20coffee%20break%20e%20mais.%0A%0A%2AFa%C3%A7a%20parte%20da%20equipe.%20Informa%C3%A7%C3%B5es%20e%20inscri%C3%A7%C3%A3o%20no%20site%20do%20NAE:%2A%0Ahttps://naeguanhaes.github.io/mostra-profissoes.html%3Futm_source%3Dwhatsapp%26utm_campaign%3Dmostra-profissoes',
        imagem: 'assets/eventos/mostra-profissoes-2026.webp',
        imagemAlt: 'Cartaz da 1ª Mostra de Profissões da UEMG Unidade Guanhães, Direito e Engenharia Civil: 13 de novembro de 2026, a partir das 13h, realização do Diretório Acadêmico.'
      }
    },
    {
      titulo: 'Assembleia Geral do Diretório Acadêmico · votação do Estatuto',
      org: 'da',
      resumo: 'O Diretório Acadêmico Sapientia et Justitia convoca todos os estudantes para apresentar, discutir e votar o Estatuto Social. Quarta, 28 de outubro, às 19h, no Auditório da Unidade.',
      tipo: 'outro',
      abre: '2026-10-21',
      encerra: '2026-10-28',
      link: 'diretorio-academico.html#assembleia',
      publicado: '2026-10-21',
      /* e convocacao, nao edital: so no painel da inicial */
      naLista: false,

      destaque: {
        tema: 'da',
        imagem: 'assets/da/logo.webp',
        imagemLogo: true,
        imagemAlt: 'Brasão do Diretório Acadêmico Sapientia et Justitia',
        eyebrow: 'Diretório Acadêmico · convocação',
        titulo: 'Assembleia Geral: vamos votar o Estatuto do DA',
        texto: 'Todos os estudantes da UEMG Guanhães estão convocados. Pauta única: <b>apresentação, discussão e votação do Estatuto Social</b> do Diretório Acadêmico Sapientia et Justitia. Leia a proposta antes de ir.',
        numeros: [
          { n: '28/10', r: 'quarta-feira' },
          { n: '19h', r: 'início' },
          { n: 'Auditório', r: 'da Unidade' }
        ],
        semContagem: true,
        acao: 'Ver a convocação e o Estatuto',
        extraTexto: 'Compartilhar no WhatsApp',
        extraLink: 'https://wa.me/?text=%2AAssembleia%20Geral%20do%20Diret%C3%B3rio%20Acad%C3%AAmico%20Sapientia%20et%20Justitia%2A%0ATodos%20os%20estudantes%20da%20UEMG%20Unidade%20Guanh%C3%A3es%20est%C3%A3o%20convocados.%0A%0APauta%20%C3%BAnica:%20o%20Estatuto%20Social%20do%20Diret%C3%B3rio%20Acad%C3%AAmico%0A%E2%80%A2%20Apresenta%C3%A7%C3%A3o%20do%20Estatuto%0A%E2%80%A2%20Discuss%C3%A3o%20e%20sugest%C3%B5es%20de%20altera%C3%A7%C3%A3o%0A%E2%80%A2%20Vota%C3%A7%C3%A3o%20para%20aprova%C3%A7%C3%A3o%0A%0A%E2%80%A2%20Quarta%2C%2028%20de%20outubro%20de%202026%2C%20%C3%A0s%2019h%0A%E2%80%A2%20Audit%C3%B3rio%20da%20UEMG%20Unidade%20Guanh%C3%A3es%0A%0ASua%20participa%C3%A7%C3%A3o%20garante%20legitimidade%20e%20transpar%C3%AAncia%20%C3%A0s%20regras%20da%20entidade%20que%20representa%20os%20estudantes.%0A%0A%2AConvoca%C3%A7%C3%A3o%20e%20link%20do%20Estatuto%20no%20site%20do%20NAE:%2A%0Ahttps://naeguanhaes.github.io/diretorio-academico.html%3Futm_source%3Dwhatsapp%26utm_campaign%3Dassembleia-da%23assembleia'
      }
    },
    {
      titulo: 'Assembleia Geral do Diretório Acadêmico · Estatuto Social',
      org: 'da',
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
      org: 'da',
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
      logo: 'assets/seminario/logo.webp',
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
        imagem: 'assets/seminario/logo-branca-arabesco.webp',
        imagemCelular: 'assets/seminario/logo-branca.webp',
        imagemLogo: true,
        imagemAlt: 'Logo do 28º Seminário de Pesquisa e Extensão: Universidade do futuro e o futuro da Universidade, alicerces e perspectivas',
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
      logo: 'assets/seminario/logo.webp',
      resumo: 'Inscrição nas atividades da programação de Guanhães, por formulário próprio, com prazo prorrogado até 29/10. Escolha só as que combinam com os seus interesses. Quem ainda não fez a inscrição como ouvinte precisa fazer também.',
      tipo: 'pesquisa',
      abre: '2026-10-09',
      encerra: '2026-10-29',
      link: 'seminario.html',
      publicado: '2026-10-21',

      destaque: {
        tema: 'roxo',
        imagem: 'assets/seminario/logo-branca-arabesco.webp',
        imagemCelular: 'assets/seminario/logo-branca.webp',
        imagemLogo: true,
        imagemAlt: 'Logo do 28º Seminário de Pesquisa e Extensão: Universidade do futuro e o futuro da Universidade, alicerces e perspectivas',
        eyebrow: 'Pesquisa e extensão · UEMG',
        titulo: '28º Seminário: atividades prorrogadas até 29/10',
        texto: 'A inscrição nas atividades da programação de Guanhães foi <b>prorrogada até 29 de outubro</b>. Escolha as que mais combinam com os seus interesses, não todas, e lembre: é preciso também a inscrição <b>como ouvinte</b>.',
        numeros: [
          { n: '29/10', r: 'fim da escolha das atividades' },
          { n: '10/11', r: 'prazo do ouvinte' },
          { n: '09 a 13/11', r: 'na Unidade' }
        ],
        acao: 'Inscrever-me nas atividades',
        acaoLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfRoORC9C_8fj7DJU_-0DgQ3uF3NsIf-gr9UEIwBN14jTHJoQ/viewform',
        extraTexto: 'Compartilhar no WhatsApp',
        extraLink: 'https://wa.me/?text=%2A28%C2%BA%20Semin%C3%A1rio%20de%20Pesquisa%20e%20Extens%C3%A3o%20da%20UEMG%2A%0A%0ANa%20Unidade%20Guanh%C3%A3es%2C%20de%2009%20a%2013%20de%20novembro%20de%202026.%0A%0A%E2%80%A2%20Inscri%C3%A7%C3%A3o%20nas%20atividades:%20prorrogada%20at%C3%A9%2029%20de%20outubro.%20Escolha%20as%20que%20mais%20combinam%20com%20os%20seus%20interesses%2C%20n%C3%A3o%20todas%0A%E2%80%A2%20Para%20participar%20da%20atividade%2C%20%C3%A9%20preciso%20ter%20tamb%C3%A9m%20a%20inscri%C3%A7%C3%A3o%20como%20ouvinte%2C%20at%C3%A9%2010%20de%20novembro%0A%E2%80%A2%20Os%20docentes%20de%20cada%20atividade%20est%C3%A3o%20no%20Instagram%20do%20Semin%C3%A1rio%0A%0A%2AFormul%C3%A1rio%2C%20prazos%20e%20passo%20a%20passo%20no%20site%20do%20NAE:%2A%0Ahttps://naeguanhaes.github.io/seminario.html%3Futm_source%3Dwhatsapp%26utm_campaign%3Dseminario'
      }
    },
    {
      titulo: '28º Seminário de Pesquisa e Extensão · inscrição como ouvinte',
      grupo: 'seminario-28',
      logo: 'assets/seminario/logo.webp',
      resumo: 'Obrigatória para TODOS que forem participar, inclusive quem vai apresentar trabalho. Faça esta primeiro, antes de qualquer outra inscrição do Seminário.',
      tipo: 'pesquisa',
      abre: '2026-08-28',
      encerra: '2026-11-10',
      link: 'seminario.html',
      publicado: '2026-08-28',

      destaque: {
        tema: 'roxo',
        imagem: 'assets/seminario/logo-branca-arabesco.webp',
        imagemCelular: 'assets/seminario/logo-branca.webp',
        imagemLogo: true,
        imagemAlt: 'Logo do 28º Seminário de Pesquisa e Extensão: Universidade do futuro e o futuro da Universidade, alicerces e perspectivas',
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
      logo: 'assets/seminario/logo.webp',
      resumo: 'A semana do Seminário na Unidade Guanhães. Quem se inscreveu participa das atividades da programação.',
      tipo: 'pesquisa',
      abre: '2026-11-09',
      encerra: '2026-11-13',
      link: 'seminario.html',
      publicado: '2026-08-28',

      destaque: {
        tema: 'roxo',
        imagem: 'assets/seminario/logo-branca-arabesco.webp',
        imagemCelular: 'assets/seminario/logo-branca.webp',
        imagemLogo: true,
        imagemAlt: 'Logo do 28º Seminário de Pesquisa e Extensão: Universidade do futuro e o futuro da Universidade, alicerces e perspectivas',
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
