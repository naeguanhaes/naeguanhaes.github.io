/* ═══════════════════════════════════════════════════════
   DADOS · Os dois cursos da Unidade Guanhães
   ───────────────────────────────────────────────────────
   Tudo aqui foi transcrito dos Projetos Pedagógicos de Curso:

   · Direito: PPC aprovado pela Resolução COEPE/UEMG nº 458,
     de 06/03/2024, publicada em 08/03/2024.
   · Engenharia Civil: PPC da Unidade Guanhães, 2024.

   Estas páginas usam estes dados: matriz.html, atividades.html,
   estagio.html, tcc.html e secretaria.html.

   REGRA DE OURO: nada aqui é chute. Se um número não está no
   PPC, ele não entra neste arquivo. Ao atualizar, cite sempre
   de qual página do PPC saiu, no campo "fonte".

   Como ler cada disciplina:
     cod       código da disciplina no PPC
     nome      nome do componente curricular
     ch        carga horária em HORAS-RELÓGIO (a que conta para
               integralizar o curso)
     cr        créditos
     pre       códigos dos pré-requisitos (lista vazia = nenhum)
     tipo      'ob' obrigatória, 'op' optativa, 'at' atividade
   ═══════════════════════════════════════════════════════ */

window.DADOS_CURSO = {
  atualizadoEm: '2026-08-07',

  cursos: [

    /* ═══════════════ DIREITO ═══════════════ */
    {
      id: 'direito',
      nome: 'Direito',
      grau: 'Bacharelado',
      cor: 'var(--azul)',
      turno: 'Noite',
      vagas: 40,
      inicio: 2022,
      cargaTotal: 4230,
      creditos: 282,
      integralizacao: { min: 10, max: 14 },
      fonte: 'PPC do curso de Direito, Resolução COEPE/UEMG nº 458, de 06/03/2024',

      resumo: [
        { item: 'Disciplinas obrigatórias', horas: 3390, creditos: 226 },
        { item: 'Disciplinas optativas', horas: 150, creditos: 10 },
        { item: 'Estágio supervisionado', horas: 360, creditos: 24 },
        { item: 'Atividades complementares', horas: 210, creditos: 14 },
        { item: 'Trabalho de Conclusão de Curso', horas: 60, creditos: 4 },
        { item: 'Disciplinas eletivas', horas: 60, creditos: 4 }
      ],

      periodos: [
        { n: 1, disciplinas: [
          { cod: 'ICD1', nome: 'Introdução à Ciência do Direito 1', ch: 60, cr: 4, pre: [] },
          { cod: 'CP', nome: 'Ciência Política', ch: 60, cr: 4, pre: [] },
          { cod: 'EC', nome: 'Economia', ch: 60, cr: 4, pre: [] },
          { cod: 'SC', nome: 'Sociologia', ch: 60, cr: 4, pre: [] },
          { cod: 'FI', nome: 'Filosofia', ch: 60, cr: 4, pre: [] },
          { cod: 'LP', nome: 'Língua Portuguesa', ch: 30, cr: 2, pre: [] },
          { cod: 'MPD', nome: 'Metodologia da Pesquisa Científica', ch: 30, cr: 2, pre: [] }
        ] },
        { n: 2, disciplinas: [
          { cod: 'SCJ', nome: 'Sociologia Jurídica', ch: 60, cr: 4, pre: [] },
          { cod: 'TGDPR1', nome: 'Teoria Geral do Direito Privado 1', ch: 60, cr: 4, pre: ['ICD1'] },
          { cod: 'TCN', nome: 'Teoria da Constituição', ch: 60, cr: 4, pre: ['ICD1'] },
          { cod: 'FID', nome: 'Filosofia do Direito', ch: 60, cr: 4, pre: [] },
          { cod: 'ICD2', nome: 'Introdução à Ciência do Direito 2', ch: 30, cr: 2, pre: ['ICD1'] },
          { cod: 'TGE', nome: 'Teoria Geral do Estado', ch: 30, cr: 2, pre: [] },
          { cod: 'HD', nome: 'História do Direito', ch: 60, cr: 4, pre: [] }
        ] },
        { n: 3, disciplinas: [
          { cod: 'TGDPR2', nome: 'Teoria Geral do Direito Privado 2', ch: 60, cr: 4, pre: ['TGDPR1'] },
          { cod: 'DPE1', nome: 'Direito Penal 1', ch: 60, cr: 4, pre: [] },
          { cod: 'DIC1', nome: 'Direito Constitucional 1', ch: 60, cr: 4, pre: ['TCN'] },
          { cod: 'HJ', nome: 'Hermenêutica Jurídica', ch: 60, cr: 4, pre: [] },
          { cod: 'CRIM', nome: 'Criminologia', ch: 60, cr: 4, pre: [] },
          { cod: 'PJ', nome: 'Psicologia Jurídica', ch: 30, cr: 2, pre: [] },
          { cod: 'OPT1', nome: 'Optativa 1', ch: 30, cr: 2, pre: [], tipo: 'op' }
        ] },
        { n: 4, disciplinas: [
          { cod: 'DCV1', nome: 'Direito Civil 1, Obrigações', ch: 60, cr: 4, pre: ['TGDPR2'] },
          { cod: 'TGP', nome: 'Teoria Geral do Processo', ch: 60, cr: 4, pre: [] },
          { cod: 'DPE2', nome: 'Direito Penal 2', ch: 60, cr: 4, pre: ['DPE1'] },
          { cod: 'DIC2', nome: 'Direito Constitucional 2', ch: 60, cr: 4, pre: ['DIC1'] },
          { cod: 'DAD1', nome: 'Direito Administrativo 1', ch: 60, cr: 4, pre: [] },
          { cod: 'DHU', nome: 'Direitos Humanos', ch: 60, cr: 4, pre: [] }
        ] },
        { n: 5, disciplinas: [
          { cod: 'DEM1', nome: 'Direito Empresarial 1', ch: 60, cr: 4, pre: [] },
          { cod: 'DCV2', nome: 'Direito Civil 2, Responsabilidade Civil e Teoria Geral dos Contratos', ch: 60, cr: 4, pre: ['DCV1'] },
          { cod: 'DPC1', nome: 'Direito Processual Civil 1', ch: 60, cr: 4, pre: ['TGP'] },
          { cod: 'DPE3', nome: 'Direito Penal 3', ch: 60, cr: 4, pre: ['DPE2'] },
          { cod: 'DAD2', nome: 'Direito Administrativo 2', ch: 60, cr: 4, pre: ['DAD1'] },
          { cod: 'DEC', nome: 'Direito Econômico', ch: 30, cr: 2, pre: [] },
          { cod: 'OPT2', nome: 'Optativa 2', ch: 30, cr: 2, pre: [], tipo: 'op' }
        ] },
        { n: 6, disciplinas: [
          { cod: 'DPC2', nome: 'Direito Processual Civil 2', ch: 60, cr: 4, pre: ['DPC1'] },
          { cod: 'DCV3', nome: 'Direito Civil 3, Contratos em Espécie', ch: 60, cr: 4, pre: ['DCV2'] },
          { cod: 'DEM2', nome: 'Direito Empresarial 2', ch: 60, cr: 4, pre: ['DEM1'] },
          { cod: 'DEP4', nome: 'Direito Penal 4', ch: 60, cr: 4, pre: ['DPE3'] },
          { cod: 'DCO', nome: 'Formas Consensuais de Resolução de Conflitos', ch: 90, cr: 6, pre: ['DCV1'] },
          { cod: 'DAD3', nome: 'Direito Administrativo 3', ch: 60, cr: 4, pre: ['DAD2'] },
          { cod: 'EEOAB', nome: 'Ética e Estatuto da OAB', ch: 30, cr: 2, pre: [] }
        ] },
        { n: 7, disciplinas: [
          { cod: 'DPC3', nome: 'Direito Processual Civil 3', ch: 60, cr: 4, pre: ['DPC2'] },
          { cod: 'DCV4', nome: 'Direito Civil 4, Direitos Reais', ch: 60, cr: 4, pre: ['DCV1'] },
          { cod: 'DIF', nome: 'Direito Financeiro', ch: 60, cr: 4, pre: [] },
          { cod: 'DIT1', nome: 'Direito do Trabalho 1', ch: 60, cr: 4, pre: [] },
          { cod: 'DPP1', nome: 'Direito Processual Penal 1', ch: 60, cr: 4, pre: ['TGP'] },
          { cod: 'DEM3', nome: 'Direito Empresarial 3', ch: 60, cr: 4, pre: ['DEM2'] },
          { cod: 'PS1', nome: 'Prática Simulada 1', ch: 30, cr: 2, pre: ['DPC2'] },
          { cod: 'PR1', nome: 'Prática Real 1 (Estágio)', ch: 60, cr: 4, pre: ['DPC2'] }
        ] },
        { n: 8, disciplinas: [
          { cod: 'DPP2', nome: 'Direito Processual Penal 2', ch: 60, cr: 4, pre: ['DPP1'] },
          { cod: 'DTR1', nome: 'Direito Tributário 1', ch: 60, cr: 4, pre: [] },
          { cod: 'DIT2', nome: 'Direito do Trabalho 2', ch: 60, cr: 4, pre: ['DIT1'] },
          { cod: 'DCV5', nome: 'Direito Civil 5, Famílias', ch: 60, cr: 4, pre: ['DCV1'] },
          { cod: 'DCM', nome: 'Direito do Consumidor', ch: 30, cr: 2, pre: ['DIC1'] },
          { cod: 'DPC4', nome: 'Direito Processual Civil 4', ch: 30, cr: 2, pre: ['DPC3'] },
          { cod: 'PS2', nome: 'Prática Simulada 2', ch: 30, cr: 2, pre: ['DPC3'] },
          { cod: 'PR2', nome: 'Prática Real 2 (Estágio)', ch: 60, cr: 4, pre: ['DPC3'] },
          { cod: 'OPT3', nome: 'Optativa 3', ch: 30, cr: 2, pre: [], tipo: 'op' },
          { cod: 'TCC1', nome: 'Elaboração de Projeto de Trabalho de Conclusão de Curso', ch: 30, cr: 2, pre: ['MPD'] }
        ] },
        { n: 9, disciplinas: [
          { cod: 'DCV6', nome: 'Direito Civil 6, Sucessões', ch: 60, cr: 4, pre: ['DCV5'] },
          { cod: 'DTR2', nome: 'Direito Tributário 2', ch: 60, cr: 4, pre: ['DTR1'] },
          { cod: 'DPT1', nome: 'Direito Processual do Trabalho 1', ch: 60, cr: 4, pre: ['DIT1'] },
          { cod: 'DAB', nome: 'Direito Ambiental', ch: 60, cr: 4, pre: ['DIC1'] },
          { cod: 'DIP', nome: 'Direito Internacional Público', ch: 60, cr: 4, pre: ['DHU'] },
          { cod: 'PS3', nome: 'Prática Simulada 3', ch: 30, cr: 2, pre: ['DPP2'] },
          { cod: 'PR3', nome: 'Prática Real 3 (Estágio)', ch: 60, cr: 4, pre: ['DPP2'] },
          { cod: 'OPT4', nome: 'Optativa 4', ch: 30, cr: 2, pre: [], tipo: 'op' },
          { cod: 'TCC2', nome: 'Elaboração de Trabalho de Conclusão de Curso', ch: 30, cr: 2, pre: ['TCC1'] }
        ] },
        { n: 10, disciplinas: [
          { cod: 'DCU', nome: 'Direitos Culturais e Antropologia', ch: 30, cr: 2, pre: ['DAD3'] },
          { cod: 'DPR', nome: 'Direito Internacional Privado', ch: 30, cr: 2, pre: ['DCV6'] },
          { cod: 'DID', nome: 'Direito Digital', ch: 30, cr: 2, pre: [] },
          { cod: 'DE', nome: 'Direito Eleitoral', ch: 60, cr: 4, pre: ['DIC2'] },
          { cod: 'DSS', nome: 'Direito da Seguridade Social', ch: 60, cr: 4, pre: ['DIC2'] },
          { cod: 'DPT2', nome: 'Direito Processual do Trabalho 2', ch: 60, cr: 4, pre: ['DPT1'] },
          { cod: 'PS4', nome: 'Prática Simulada 4', ch: 30, cr: 2, pre: ['DPT1'] },
          { cod: 'PR4', nome: 'Prática Real 4 (Estágio)', ch: 60, cr: 4, pre: ['DPT1'] },
          { cod: 'OPT5', nome: 'Optativa 5', ch: 30, cr: 2, pre: [], tipo: 'op' }
        ] }
      ],

      optativas: [
        'Bioética e Biodireito', 'Direito Agrário',
        'Direito da Criança e do Adolescente, ECA', 'Direito Internacional Penal',
        'Federação e Municipalidade', 'Legislação Penal e Processual Penal Extravagante',
        'LIBRAS', 'Paradigmas Éticos Contemporâneos', 'Processo Constitucional',
        'Produção de Textos Acadêmicos', 'Proteção Ambiental e Mineração',
        'Sistema Penal e Política Criminal', 'Teoria da Argumentação Jurídica',
        'Teoria da Justiça', 'Teoria do Direito', 'Tópicos em Direito Administrativo',
        'Tópico em Direito Civil', 'Tópicos em Direito Constitucional',
        'Tópicos em Direito do Trabalho e Previdenciário', 'Tópicos em Direito Empresarial'
      ],
      optativasNota: 'Cada optativa vale 30 horas-relógio e 2 créditos. São 5 optativas ao longo do curso, do 3º ao 10º período.',

      atividades: {
        total: 210,
        prazo: 'Podem ser feitas desde o 1º semestre, de forma cumulativa, e precisam estar concluídas até o 10º semestre. Sem elas não há colação de grau, porque são componente curricular obrigatório das Diretrizes Curriculares.',
        comoProtocolar: 'Os comprovantes vão em requerimento justificado e documentado, para a Coordenação do Curso validar. Depois a Coordenação comunica a Secretaria Acadêmica, que lança no histórico escolar.',
        tabela: [
          { grupo: 'Ensino', atividade: 'Aprovação em disciplina cursada em curso de Direito, não usada para dispensa ou aproveitamento', porEvento: '30 h por disciplina', teto: 30, comprovante: 'Histórico escolar com o plano de ensino da disciplina' },
          { grupo: 'Ensino', atividade: 'Aprovação em disciplina cursada em outro curso de graduação, não usada como eletiva', porEvento: '30 h por disciplina', teto: 30, comprovante: 'Histórico escolar com o plano de ensino da disciplina' },
          { grupo: 'Ensino', atividade: 'Monitoria acadêmica', porEvento: '30 h por semestre', teto: 90, comprovante: 'Certificado emitido por órgão competente' },
          { grupo: 'Ensino', atividade: 'Estágio profissional extracurricular', porEvento: '30 h por semestre', teto: 90, comprovante: 'Declaração do supervisor com período, início e término' },
          { grupo: 'Ensino', atividade: 'Participação em sessão pública de defesa (como ouvinte)', porEvento: '1 h por sessão', teto: 30, comprovante: 'Declaração de participação assinada' }
        ],
        tabelaNota: 'O PPC traz outras modalidades além destas, nos grupos de pesquisa e de extensão. Antes de contar com uma atividade, confirme o enquadramento e o limite com a Coordenação do Curso.'
      },

      estagio: {
        titulo: 'Estágio no Núcleo de Práticas Jurídicas',
        horas: 360,
        creditos: 24,
        quando: 'Do 7º ao 10º período, nas disciplinas Prática Real 1 a 4 e Prática Simulada 1 a 4.',
        pontos: [
          'O estágio curricular do curso é feito no Núcleo de Práticas Jurídicas, que tem regulamento próprio, anexo ao PPC.',
          'A presença é obrigatória nas aulas de prática simulada e nas atividades reais.',
          'Quem avalia é o professor orientador, pelos critérios do Regulamento do Núcleo de Práticas Jurídicas.',
          'Estágio profissional fora da faculdade não substitui este: ele conta como atividade complementar, com 30 horas por semestre e teto de 90 horas.'
        ]
      },

      tcc: {
        horas: 60,
        pontos: [
          'Duas disciplinas preparam o trabalho: Elaboração de Projeto de TCC, de 30 horas, no 8º período, e Elaboração de TCC, de 30 horas, no 9º período.',
          'O trabalho tem caráter científico, é orientado por um docente da UEMG Unidade Guanhães e sai em forma de artigo ou monografia.',
          'A defesa é oral, em sessão pública, diante de banca de três integrantes: o orientador e mais dois.',
          'A avaliação olha correção de linguagem e terminologia jurídica, domínio do conteúdo, argumentação e interpretação crítica, revisão da literatura, normas da ABNT e respeito aos direitos autorais.'
        ],
        linhas: [
          'Justiça e a interface com o Poder e a Cultura',
          'Autonomia privada, mercado e direitos fundamentais',
          'Estado, acessibilidade no Estado Democrático de Direito e Sustentabilidade',
          'Controle Penal, Violência e Criminalidade',
          'Direito e Literatura',
          'Inefetividade dos direitos humanos e dos direitos fundamentais'
        ]
      }
    },

    /* ═══════════════ ENGENHARIA CIVIL ═══════════════ */
    {
      id: 'engenharia',
      nome: 'Engenharia Civil',
      grau: 'Bacharelado',
      cor: 'var(--verde)',
      turno: 'Noite',
      vagas: 40,
      cargaTotal: 3750,
      creditos: 250,
      integralizacao: { min: 10, max: 15 },
      fonte: 'PPC do curso de Engenharia Civil, Unidade Guanhães, 2024',

      resumo: [
        { item: 'Conteúdo básico', horas: 1380, creditos: 92 },
        { item: 'Conteúdo específico', horas: 1545, creditos: 103 },
        { item: 'Conteúdo profissionalizante', horas: 825, creditos: 55 }
      ],

      periodos: [
        { n: 1, disciplinas: [
          { cod: 'COEX', nome: 'Comunicação e Expressão', ch: 60, cr: 4, pre: [] },
          { cod: 'FMAT', nome: 'Fundamentos de Matemática', ch: 60, cr: 4, pre: [] },
          { cod: 'GEOG', nome: 'Geologia Geral', ch: 60, cr: 4, pre: [] },
          { cod: 'GDES', nome: 'Geometria Descritiva', ch: 60, cr: 4, pre: [] },
          { cod: 'IDIR', nome: 'Instituições do Direito', ch: 30, cr: 2, pre: [] },
          { cod: 'IENM', nome: 'Introdução à Engenharia Civil', ch: 30, cr: 2, pre: [] },
          { cod: 'LQUIG', nome: 'Laboratório de Química Geral', ch: 30, cr: 2, pre: [] },
          { cod: 'QUIG', nome: 'Química Geral', ch: 45, cr: 3, pre: [] },
          { cod: 'AC', nome: 'Atividades Complementares', ch: 15, cr: 1, pre: [], tipo: 'at' }
        ] },
        { n: 2, disciplinas: [
          { cod: 'CDI1', nome: 'Cálculo Diferencial e Integral I', ch: 60, cr: 4, pre: [] },
          { cod: 'CMAT', nome: 'Ciência dos Materiais', ch: 60, cr: 4, pre: ['QUIG'] },
          { cod: 'DEST', nome: 'Desenho Técnico', ch: 60, cr: 4, pre: [] },
          { cod: 'FUNC', nome: 'Fundamentos de Computação', ch: 60, cr: 4, pre: [] },
          { cod: 'GAAL', nome: 'Geometria Analítica e Álgebra Linear', ch: 60, cr: 4, pre: [] },
          { cod: 'HCS', nome: 'Humanidades e Ciências Sociais', ch: 45, cr: 3, pre: [] },
          { cod: 'MTC', nome: 'Metodologia Científica', ch: 30, cr: 2, pre: [] },
          { cod: 'AE', nome: 'Atividades de Extensão', ch: 30, cr: 2, pre: [], tipo: 'at' }
        ] },
        { n: 3, disciplinas: [
          { cod: 'ARQU', nome: 'Arquitetura e Urbanismo', ch: 60, cr: 4, pre: ['DEST'] },
          { cod: 'CDI2', nome: 'Cálculo Diferencial e Integral II', ch: 60, cr: 4, pre: ['GAAL', 'CDI1'] },
          { cod: 'CAMB', nome: 'Ciências do Ambiente', ch: 30, cr: 2, pre: [] },
          { cod: 'ESTP', nome: 'Estatística e Probabilidade', ch: 60, cr: 4, pre: [] },
          { cod: 'FSC1', nome: 'Física I', ch: 60, cr: 4, pre: ['GAAL', 'CDI1'] },
          { cod: 'LFSC1', nome: 'Laboratório de Física I', ch: 30, cr: 2, pre: ['GAAL', 'CDI1'] },
          { cod: 'TOPO', nome: 'Topografia Aplicada à Engenharia Civil I', ch: 45, cr: 3, pre: [] },
          { cod: 'AE', nome: 'Atividades de Extensão', ch: 30, cr: 2, pre: [], tipo: 'at' }
        ] },
        { n: 4, disciplinas: [
          { cod: 'ADME', nome: 'Administração para Engenharia', ch: 30, cr: 2, pre: [] },
          { cod: 'CDI3', nome: 'Cálculo Diferencial e Integral III', ch: 60, cr: 4, pre: ['CDI2'] },
          { cod: 'CALN', nome: 'Cálculo Numérico', ch: 60, cr: 4, pre: ['CDI2', 'FUNC'] },
          { cod: 'FSC2', nome: 'Física II', ch: 60, cr: 4, pre: ['FSC1', 'LFSC1', 'CDI2'] },
          { cod: 'MESO1', nome: 'Mecânica dos Solos I', ch: 60, cr: 4, pre: [] },
          { cod: 'MEGE', nome: 'Mecânica Geral', ch: 60, cr: 4, pre: ['FSC1'] },
          { cod: 'PARQ', nome: 'Projeto Arquitetônico', ch: 60, cr: 4, pre: ['ARQU'] },
          { cod: 'TOPO2', nome: 'Topografia Aplicada à Engenharia Civil II', ch: 45, cr: 3, pre: ['TOPO'] },
          { cod: 'AE', nome: 'Atividades de Extensão', ch: 30, cr: 2, pre: [], tipo: 'at' }
        ] },
        { n: 5, disciplinas: [
          { cod: 'CDI4', nome: 'Cálculo Diferencial e Integral IV', ch: 60, cr: 4, pre: ['CDI3'] },
          { cod: 'FSC3', nome: 'Física III', ch: 60, cr: 4, pre: ['FSC1', 'CDI3'] },
          { cod: 'MATC1', nome: 'Materiais de Construção I', ch: 60, cr: 4, pre: ['CMAT'] },
          { cod: 'MEFLU', nome: 'Mecânica dos Fluidos', ch: 60, cr: 4, pre: ['FSC2', 'CDI3'] },
          { cod: 'MESO2', nome: 'Mecânica dos Solos II', ch: 60, cr: 4, pre: ['MESO1'] },
          { cod: 'REMA1', nome: 'Resistência dos Materiais I', ch: 60, cr: 4, pre: ['FSC1'] },
          { cod: 'TEST1', nome: 'Teoria das Estruturas I', ch: 60, cr: 4, pre: ['MEGE'] },
          { cod: 'AE', nome: 'Atividades de Extensão', ch: 30, cr: 2, pre: [], tipo: 'at' }
        ] },
        { n: 6, disciplinas: [
          { cod: 'ECENG', nome: 'Economia para Engenharia', ch: 30, cr: 2, pre: [] },
          { cod: 'HIDRA', nome: 'Hidráulica Aplicada', ch: 60, cr: 4, pre: ['MEFLU'] },
          { cod: 'MATC2', nome: 'Materiais de Construção II', ch: 60, cr: 4, pre: ['MATC1'] },
          { cod: 'REMA2', nome: 'Resistência dos Materiais II', ch: 60, cr: 4, pre: ['REMA1', 'TEST1'] },
          { cod: 'SAUR', nome: 'Saneamento Urbano', ch: 45, cr: 3, pre: ['QUIG'] },
          { cod: 'TEST2', nome: 'Teoria das Estruturas II', ch: 60, cr: 4, pre: ['TEST1'] },
          { cod: 'TRAN', nome: 'Transporte', ch: 60, cr: 4, pre: [] },
          { cod: 'AC', nome: 'Atividades Complementares', ch: 15, cr: 1, pre: [], tipo: 'at' }
        ] },
        { n: 7, disciplinas: [
          { cod: 'CON1', nome: 'Concreto Armado I', ch: 60, cr: 4, pre: ['REMA2', 'TEST2', 'MATC1'] },
          { cod: 'ESTR', nome: 'Estradas', ch: 60, cr: 4, pre: ['TOPO2'] },
          { cod: 'HIST', nome: 'Higiene Industrial e Segurança do Trabalho', ch: 45, cr: 3, pre: [] },
          { cod: 'INELE', nome: 'Instalações Elétricas Prediais', ch: 60, cr: 4, pre: ['FSC3'] },
          { cod: 'TEC1', nome: 'Tecnologia das Construções I', ch: 60, cr: 4, pre: ['MATC2', 'PARQ'] },
          { cod: 'TEST3', nome: 'Teoria das Estruturas III', ch: 60, cr: 4, pre: ['TEST2'] },
          { cod: 'OP', nome: 'Optativa', ch: 45, cr: 3, pre: [], tipo: 'op' }
        ] },
        { n: 8, disciplinas: [
          { cod: 'CON2', nome: 'Concreto Armado II', ch: 60, cr: 4, pre: ['CON1'] },
          { cod: 'ESMA', nome: 'Estruturas de Madeira', ch: 60, cr: 4, pre: ['REMA2', 'TEST2', 'MATC2'] },
          { cod: 'ESME', nome: 'Estruturas Metálicas', ch: 60, cr: 4, pre: ['REMA2', 'TEST2', 'MATC2'] },
          { cod: 'GIP', nome: 'Gestão e Inovação Produtiva', ch: 45, cr: 3, pre: [] },
          { cod: 'IHISA', nome: 'Instalações Hidrossanitárias Prediais', ch: 60, cr: 4, pre: ['HIDRA'] },
          { cod: 'TEC2', nome: 'Tecnologia das Construções II', ch: 60, cr: 4, pre: ['TEC1'] },
          { cod: 'OP', nome: 'Optativa', ch: 45, cr: 3, pre: [], tipo: 'op' }
        ] },
        { n: 9, disciplinas: [
          { cod: 'FUND', nome: 'Fundações', ch: 60, cr: 4, pre: ['MESO2', 'CON1'] },
          { cod: 'HIDLA', nome: 'Hidrologia Aplicada', ch: 60, cr: 4, pre: ['ESTP', 'FSC2'] },
          { cod: 'PATO', nome: 'Patologia das Construções', ch: 60, cr: 4, pre: ['MATC1'] },
          { cod: 'PLANOR', nome: 'Planejamento e Orçamento', ch: 60, cr: 4, pre: ['MATC2'] },
          { cod: 'PNT', nome: 'Pontes', ch: 60, cr: 4, pre: ['CON2', 'TEST3'] },
          { cod: 'TCC1', nome: 'Trabalho de Conclusão de Curso I', ch: 45, cr: 3, pre: [] }
        ] },
        { n: 10, disciplinas: [
          { cod: 'POAE', nome: 'Pesquisa Operacional Aplicada à Engenharia Civil', ch: 60, cr: 4, pre: ['CALN', 'ESTP'] },
          { cod: 'TCC2', nome: 'Trabalho de Conclusão de Curso II', ch: 45, cr: 3, pre: ['TCC1'] },
          { cod: 'ES', nome: 'Estágio Supervisionado Obrigatório', ch: 165, cr: 11, pre: [] }
        ] }
      ],

      optativas: [],
      optativasNota: 'As optativas do 7º e do 8º período valem 45 horas-relógio e 3 créditos cada. A lista da oferta muda a cada semestre: confirme com a Coordenação do Curso.',

      atividades: {
        total: 30,
        prazo: 'São 30 horas distribuídas ao longo dos dez períodos do curso, conforme o quadro de carga horária do PPC.',
        comoProtocolar: 'O cumprimento é comprovado com carga horária, instituição ou responsável e relatório, sob planejamento, registro e supervisão da Coordenação do Curso. O regulamento completo está no Apêndice 1 do PPC.',
        tabela: [
          { grupo: 'Pesquisa', atividade: 'Projetos de pesquisa e programas de iniciação científica', porEvento: 'conforme o regulamento', teto: 30, comprovante: 'Certificado ou declaração com carga horária' },
          { grupo: 'Ensino', atividade: 'Monitoria', porEvento: 'conforme o regulamento', teto: 30, comprovante: 'Certificado emitido por órgão competente' },
          { grupo: 'Extensão', atividade: 'Projetos de extensão e módulos temáticos', porEvento: 'conforme o regulamento', teto: 30, comprovante: 'Certificado ou declaração com carga horária' },
          { grupo: 'Eventos', atividade: 'Seminários, simpósios, congressos, conferências, concursos e exposições', porEvento: 'conforme o regulamento', teto: 30, comprovante: 'Certificado de participação' },
          { grupo: 'Ensino', atividade: 'Disciplinas optativas de outros cursos da UEMG ou de outra instituição, afins à Engenharia Civil, presenciais ou a distância', porEvento: 'conforme o regulamento', teto: 30, comprovante: 'Histórico escolar ou certificado' }
        ],
        tabelaNota: 'O PPC de Engenharia Civil não fixa limite por tipo de atividade como o de Direito: os critérios estão no regulamento do Apêndice 1. Confirme o enquadramento com a Coordenação antes de contar as horas.'
      },

      estagio: {
        titulo: 'Estágio supervisionado obrigatório',
        horas: 165,
        creditos: 11,
        quando: 'Está alocado no 10º período, mas pode ser feito a partir do 6º período. Não exige pré-requisito.',
        pontos: [
          'É obrigatório para todos os matriculados e requisito para integralizar o curso e receber o diploma.',
          'Também existe o estágio não obrigatório, opcional, que soma à carga regular sem substituí-la.',
          'Os dois seguem a Lei nº 11.788/2008, que rege o estágio de estudantes.',
          'Pode ser realizado em qualquer município, desde que atendidos os pressupostos do PPC.',
          'Atividade de iniciação científica e de extensão orientada por docente da instituição pode ser equiparada ao estágio.',
          'A avaliação segue o regulamento de estágio do curso, no Apêndice 2 do PPC.'
        ]
      },

      tcc: {
        horas: 90,
        pontos: [
          'São duas etapas: Trabalho de Conclusão de Curso I, de 45 horas, no 9º período, e Trabalho de Conclusão de Curso II, de 45 horas, no 10º período.',
          'Pode ser feito individualmente ou em dupla.',
          'Aceita mais de um formato: monografia, estudo de caso ou artigo científico.',
          'O tema é escolha do estudante e a orientação é de um professor da área do tema.',
          'A estrutura segue as normas da ABNT: capa, folha de rosto, folha de aprovação, introdução com problemática e justificativa, objetivos geral e específicos, referencial teórico, metodologia, cronograma, relação de gastos, referências, apêndices e anexos.',
          'A avaliação final é feita por banca com professores da UEMG Unidade Guanhães e convidados. O regulamento está no Apêndice 3 do PPC.'
        ],
        linhas: []
      }
    }
  ],

  /* ═══════════════ REGRAS QUE VALEM PARA OS DOIS CURSOS ═══════════════ */
  regras: [
    {
      id: 'aprovacao',
      titulo: 'Aprovação, exame especial e revisão de prova',
      cor: 'var(--turquesa)',
      base: 'Resolução COEPE/UEMG nº 249, de 06/04/2020',
      itens: [
        { o: 'Para ser aprovado', q: 'São necessários pelo menos 60 dos 100 pontos e frequência mínima de 75% das atividades programadas da disciplina. Faltou a frequência, está reprovado, mesmo com nota alta.' },
        { o: 'Exame especial', q: 'Quem termina com nota de 40 a 59 pontos e tem a frequência mínima pode fazer o exame especial: uma avaliação única sobre todo o conteúdo do semestre. Aprovado nele, o professor lança 60 no diário, qualquer que tenha sido a nota da prova.' },
        { o: 'Como os pontos se distribuem', q: 'Nenhuma avaliação parcial pode valer mais de 40 pontos. No curso de Direito, o PPC detalha: 60 pontos distribuídos durante o período, em pelo menos duas atividades, e 40 pontos em prova final.' },
        { o: 'Revisão de prova', q: 'Você tem direito a pedir revisão de provas e trabalhos escritos, dentro do prazo da Unidade, que é de cinco dias úteis contados da divulgação do resultado. A revisão deve ser feita, de preferência, na sua presença.' }
      ]
    },
    {
      id: 'faltas',
      titulo: 'Faltas: quando dá para compensar ou justificar',
      cor: 'var(--coral)',
      base: 'Resolução COEPE/UEMG nº 249, de 06/04/2020',
      itens: [
        { o: 'Regime especial, com compensação de faltas', q: 'Cabe a quem está em gestação; em adoção ou com guarda judicial para fins de adoção; com afecções congênitas ou adquiridas, infecções, traumatismo ou outras condições que causem distúrbios agudos; sendo oficial ou aspirante da reserva convocado para o serviço ativo; ou em representação desportiva nacional ou estadual oficial. As formas de compensação estão na Resolução.' },
        { o: 'Atestado de menos de 7 dias', q: 'Quem não se enquadra no regime especial, mas tem atestado médico de afastamento inferior a sete dias, pode apresentar justificativa de falta em até 48 horas contadas do início do afastamento. Com isso ganha o direito de entregar trabalhos e fazer avaliações em segunda chamada.' },
        { o: 'O prazo de 48 horas é curto', q: 'Não espere melhorar para procurar a secretaria. Se não conseguir ir pessoalmente, envie por e-mail dentro do prazo e leve o original depois. O NAE ajuda a redigir o pedido.' }
      ]
    },
    {
      id: 'secretaria',
      titulo: 'O que dá para pedir na Secretaria Acadêmica',
      cor: 'var(--lilas)',
      base: 'Resoluções COEPE/UEMG nº 250, de 06/04/2020, e nº 132/2013',
      itens: [
        { o: 'Aproveitamento de estudos', q: 'Quem entrou por transferência, vindo de curso de graduação de outra instituição credenciada, pode pedir dispensa de disciplinas. O limite é 50% dos créditos exigidos para concluir o novo curso.' },
        { o: 'Adaptação curricular', q: 'Quando não há equivalência total de conteúdo e carga horária, o colegiado do curso decide sobre a adaptação, que acontece sob supervisão e orientação direta de um professor.' },
        { o: 'Exame de proficiência', q: 'Previsto na mesma Resolução, permite comprovar conhecimento já adquirido em vez de cursar a disciplina.' },
        { o: 'Abreviar o tempo de curso', q: 'É possível pedir a abreviação do tempo de conclusão por extraordinário aproveitamento de estudos, com base no art. 47, § 2º, da Lei nº 9.394/96. O requerimento é protocolado na Secretaria Acadêmica e vai ao colegiado do curso.' },
        { o: 'Quantas disciplinas cursar por semestre', q: 'Em Engenharia Civil, o mínimo é 8 créditos e o máximo 32 créditos por semestre letivo, conforme a Resolução COEPE/UEMG nº 132/2013.' }
      ]
    },
    {
      id: 'apoio',
      titulo: 'Programas de apoio ao estudante',
      cor: 'var(--rosa)',
      base: 'PPCs dos dois cursos',
      itens: [
        { o: 'Monitoria', q: 'Estudante com bom desempenho, já aprovado na disciplina, ajuda em horário extraclasse quem está com dificuldade, sob supervisão do professor. Para quem é monitor, conta como atividade complementar; para quem recebe, é reforço individualizado e gratuito.' },
        /* ATENÇÃO, quem for editar: o PPC de Direito lista um quarto módulo de
           nivelamento, de acompanhamento psicológico. Ele NÃO entra aqui de
           propósito: é letra morta herdada do PPC da Unidade de Diamantina, e
           esta unidade não tem profissional de psicologia. Confirmado pelo
           coordenador em 07/08/2026. Ver historico/CONTEXTO.md. */
        { o: 'Nivelamento', q: 'Programa voltado a quem chega com defasagem ou encontra dificuldade no caminho. No curso de Direito o PPC descreve módulos de português instrumental, redação e interpretação de textos; leitura e interpretação de textos filosóficos; e oratória. Em Engenharia Civil, a disciplina Fundamentos de Matemática, no 1º período, teve carga ampliada justamente para preparar o estudante para o Cálculo.' },
        { o: 'Como entrar', q: 'A porta de entrada dos dois é a Coordenação do Curso, e o NAE ajuda a fazer o contato. Se você está travando em uma disciplina, procure antes da prova, não depois.' }
      ]
    }
  ]
};
