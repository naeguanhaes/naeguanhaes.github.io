/* ═══════════════════════════════════════════════════════
   DADOS · Horários de aulas
   ───────────────────────────────────────────────────────
   Este arquivo é só DADOS. Para atualizar o semestre, mexa
   apenas aqui: nenhuma lógica da página depende do conteúdo.

   • atualizadoEm  : data que aparece no rodapé da página
   • professores   : sigla para nome completo
   • turmas[].linhas[].celulas : [segunda, terça, quarta, quinta, sexta, EaD]
     cada célula é ['Nome da disciplina', 'SIGLA_DO_PROFESSOR'] ou null

   Depois de editar, rode: node ferramentas/checar-dados.js
   ═══════════════════════════════════════════════════════ */

window.DADOS_HORARIOS = {
  atualizadoEm: '2026-08-06',
  semestre: '2026.2',
  fonte: 'Quadro oficial de horários da UEMG · Unidade Guanhães',

  /* ── Aulas no semestre, por ritmo semanal ───────────────
     Cada faixa da grade dura 100 minutos e vale duas aulas
     de 50. Somando as faixas, uma disciplina tem 1, 2, 3 ou
     4 aulas por semana.

     A tabela abaixo diz quantas aulas cada ritmo tem no
     semestre inteiro. Estes são os números OFICIAIS,
     informados pela coordenação: eles mandam mais do que
     qualquer conta feita pelo calendário, porque descontam
     feriados, recessos e semanas de avaliação.

     O planner usa isto para calcular o limite de faltas,
     que é sempre 25% do total.

     ritmo semanal : aulas no semestre  (limite de faltas)
     ──────────────────────────────────────────────────────
              4    :        72                 18
              3    :        54                 13
              2    :        32                  8
              1    :        18                  4

     Mudou a duração do semestre? Ajuste só esta tabela.
     ────────────────────────────────────────────────────── */
  aulasNoSemestre: {
    1: 18,
    2: 32,
    3: 54,
    4: 72
  },

  professores: {
    IS: 'Prof. Me. Isaac Maynart Carvalho Moyses Souza',
    FR: 'Prof. Esp. Franklin Leonardo Ferreira Flauzino',
    VI: 'Prof. Dr. Vinícius de Souza Faggion',
    AL: 'Prof. Dr. Alan Ricardo Pereira',
    JU: 'Prof. Me. Júlio César da Costa Silva',
    ER: 'Profa. Me. Érika Campos Barreira',
    TH: 'Profa. Esp. Thays Ferreira Ventura',
    GA: 'Profa. Dra. Gabriella de Morais',
    JO: 'Prof. Esp. Jonatan Barbosa Silva',
    LI: 'Profa. Me. Liliane da Silva Santos',
    PA: 'Profa. Me. Paula Ribeiro',
    JM: 'Prof. Me. Júlio César Marques Júnior',
    GI: 'Profa. Me. Gisele Horta Barroso Miranda',
    BR: 'Prof. Dr. Bruno de Sousa Ferreira',
    FE: 'Prof. Dr. Fernando Eustáquio Dantas dos Santos',
    MI: 'Prof. Esp. Michel Santos Perpétuo',
    SA: 'Profa. Dra. Sâmara França',
    LU: 'Prof. Me. Luiz Otávio Menezes Teles',
    CE: 'Profa. Me. Celina de Pinho Barroso',
    AP: 'Profa. Esp. Ana Paula de Figueiredo'
  },

  turmas: [
    /* ─────────────── DIREITO ─────────────── */
    {
      id: 'dir-2', curso: 'Direito', periodo: '2º período', turma: 'Turma V',
      sala: 'Sala nº 10', salaId: '10',
      linhas: [
        { ini: '19:00', fim: '20:40', rotulo: '19h-20h40', celulas: [
          ['Teoria da Constituição (Híbrida)', 'IS'],
          ['Teoria Geral do Direito Privado 1', 'FR'],
          ['Introdução à Ciência do Direito 2', 'VI'],
          ['Filosofia do Direito', 'AL'],
          ['Sociologia Jurídica', 'AL'],
          ['Teoria da Constituição (Híbrida)', 'IS']
        ]},
        { ini: '20:50', fim: '22:30', rotulo: '20h50-22h30', celulas: [
          ['História do Direito (Híbrida)', 'JU'],
          ['Teoria Geral do Direito Privado 1', 'FR'],
          ['Teoria Geral do Estado', 'ER'],
          ['Filosofia do Direito', 'AL'],
          ['Sociologia Jurídica', 'AL'],
          ['História do Direito (Híbrida)', 'JU']
        ]}
      ]
    },
    {
      id: 'dir-4', curso: 'Direito', periodo: '4º período', turma: 'Turma IV',
      sala: 'Sala nº 7', salaId: '7',
      linhas: [
        { ini: '19:00', fim: '20:40', rotulo: '19h-20h40', celulas: [
          ['Direito Civil 1 - Obrigações (Híbrida)', 'TH'],
          ['Direito Constitucional 2', 'IS'],
          ['Direitos Humanos', 'AL'],
          ['Teoria Geral do Processo', 'GA'],
          ['Direito Penal 2', 'JU'],
          ['Direito Civil 1 - Obrigações (Híbrida)', 'TH']
        ]},
        { ini: '20:50', fim: '22:30', rotulo: '20h50-22h30', celulas: [
          ['Direito Administrativo 1 (Híbrida)', 'IS'],
          ['Direito Constitucional 2', 'IS'],
          ['Direitos Humanos', 'AL'],
          ['Teoria Geral do Processo', 'GA'],
          ['Direito Penal 2', 'JU'],
          ['Direito Administrativo 1 (Híbrida)', 'IS']
        ]}
      ]
    },
    {
      id: 'dir-6', curso: 'Direito', periodo: '6º período', turma: 'Turma III',
      sala: 'Sala nº 6', salaId: '6',
      linhas: [
        { ini: '19:00', fim: '20:40', rotulo: '19h-20h40', celulas: [
          ['Direito Penal 4 (Híbrida)', 'JU'],
          ['Direito Processual Civil 2', 'GA'],
          ['Direito Administrativo 3', 'IS'],
          ['Formas Consensuais de Resolução de Conflitos (Híbrida)', 'JO'],
          null,
          ['Formas Consensuais de Resolução de Conflitos (Híbrida)', 'JO']
        ]},
        { ini: '20:50', fim: '22:30', rotulo: '20h50-22h30', celulas: [
          ['Direito Civil 3 - Contratos em Espécie (Híbrida)', 'TH'],
          ['Direito Processual Civil 2', 'GA'],
          ['Direito Administrativo 3', 'IS'],
          ['Ética e Estatuto da OAB', 'ER'],
          ['Direito Empresarial 2 (Híbrida)', 'ER'],
          ['Direito Civil 3 - Contratos em Espécie (Híbrida)', 'TH']
        ]},
        { ini: null, fim: null, rotulo: 'EaD', celulas: [
          null, null, null, null, null, ['Direito Empresarial 2 (Híbrida)', 'ER']
        ]},
        { ini: null, fim: null, rotulo: 'EaD', celulas: [
          null, null, null, null, null, ['Direito Penal 4 (Híbrida)', 'JU']
        ]}
      ]
    },
    {
      id: 'dir-7', curso: 'Direito', periodo: '7º período', turma: 'Turma II',
      sala: 'Sala nº 5', salaId: '5',
      linhas: [
        { ini: '17:20', fim: '19:00', rotulo: '17h20-19h', celulas: [
          ['Prática Real 1 (Estágio)', 'FR'],
          ['Prática Real 1 (Estágio)', 'FR'],
          ['Prática Simulada 1 (Estágio)', 'FR'],
          null, null,
          ['Direito do Trabalho 1 (Híbrida)', 'LI']
        ]},
        { ini: '19:00', fim: '20:40', rotulo: '19h-20h40', celulas: [
          ['Direito Processual Civil 3', 'GA'],
          ['Direito Civil 4 - Direitos Reais', 'JO'],
          ['Direito do Trabalho 1 (Híbrida)', 'LI'],
          ['Direito Processual Penal 1', 'JU'],
          ['Direito Empresarial 3 (Híbrida)', 'ER'],
          ['Direito Empresarial 3 (Híbrida)', 'ER']
        ]},
        { ini: '20:50', fim: '22:30', rotulo: '20h50-22h30', celulas: [
          ['Direito Processual Civil 3', 'GA'],
          ['Direito Civil 4 - Direitos Reais', 'JO'],
          ['Direito Financeiro (Híbrida)', 'LI'],
          ['Direito Processual Penal 1', 'JU'],
          null,
          ['Direito Financeiro (Híbrida)', 'LI']
        ]}
      ]
    },
    {
      id: 'dir-10', curso: 'Direito', periodo: '10º período', turma: 'Turma I',
      sala: 'Sala nº 4', salaId: '4',
      linhas: [
        { ini: '17:20', fim: '19:00', rotulo: '17h20-19h', celulas: [
          ['Prática Simulada 4 (Estágio)', 'TH'],
          ['Prática Real 4 (Estágio)', 'LI'],
          ['Prática Real 4 (Estágio)', 'LI'],
          null,
          ['Direitos da Criança e do Adolescente - ECA (Optativa)', 'TH'],
          ['Direito Eleitoral (Híbrida)', 'ER']
        ]},
        { ini: '19:00', fim: '20:40', rotulo: '19h-20h40', celulas: [
          ['Direitos Culturais e Antropologia', 'LI'],
          ['Direito da Seguridade Social', 'LI'],
          ['Direito Eleitoral (Híbrida)', 'ER'],
          ['Direito Digital', 'ER'],
          ['Direito Processual do Trabalho 2', 'TH'],
          null
        ]},
        { ini: '20:50', fim: '22:30', rotulo: '20h50-22h30', celulas: [
          null,
          ['Direito da Seguridade Social', 'LI'],
          null,
          ['Direito Internacional Privado', 'JO'],
          ['Direito Processual do Trabalho 2', 'TH'],
          null
        ]}
      ]
    },
    {
      id: 'dir-tcc', curso: 'Direito', periodo: 'Turmas extras', turma: 'Trabalho de Conclusão de Curso',
      sala: 'A distância', salaId: '',
      linhas: [
        { ini: null, fim: null, rotulo: 'EaD', celulas: [
          null, null, null, null, null,
          ['Elaboração de Projeto de Trabalho de Conclusão de Curso (EaD)', 'FR']
        ]},
        { ini: null, fim: null, rotulo: 'EaD', celulas: [
          null, null, null, null, null,
          ['Elaboração de Trabalho de Conclusão de Curso (EaD)', 'AL']
        ]}
      ]
    },

    /* ─────────── ENGENHARIA CIVIL ─────────── */
    {
      id: 'eng-2', curso: 'Engenharia Civil', periodo: '2º período', turma: 'Turma V',
      sala: 'Sala nº 8', salaId: '8',
      linhas: [
        { ini: '18:10', fim: '19:00', rotulo: '18h10-19h', celulas: [
          ['Desenho Técnico', 'PA'],
          ['Geometria Analítica e Álgebra Linear', 'JM'],
          ['Humanidades e Ciências Sociais (Híbrida)', 'AL'],
          ['Ciência dos Materiais', 'GI'],
          ['Ciência dos Materiais', 'GI'],
          ['Fundamentos de Computação (Híbrida)', 'JM']
        ]},
        { ini: '19:00', fim: '19:50', rotulo: '19h-19h50', celulas: [
          ['Desenho Técnico', 'PA'],
          ['Geometria Analítica e Álgebra Linear', 'JM'],
          ['Cálculo Diferencial e Integral I', 'BR'],
          ['Ciência dos Materiais', 'GI'],
          ['Ciência dos Materiais', 'GI'],
          ['Humanidades e Ciências Sociais (Híbrida)', 'AL']
        ]},
        { ini: '19:50', fim: '20:40', rotulo: '19h50-20h40', celulas: [
          ['Desenho Técnico', 'PA'],
          ['Desenho Técnico', 'PA'],
          ['Cálculo Diferencial e Integral I', 'BR'],
          null, null, null
        ]},
        { ini: '20:50', fim: '21:40', rotulo: '20h50-21h40', celulas: [
          ['Cálculo Diferencial e Integral I', 'BR'],
          ['Fundamentos de Computação (Híbrida)', 'JM'],
          ['Metodologia Científica', 'GI'],
          ['Geometria Analítica e Álgebra Linear', 'JM'],
          null, null
        ]},
        { ini: '21:40', fim: '22:30', rotulo: '21h40-22h30', celulas: [
          ['Cálculo Diferencial e Integral I', 'BR'],
          ['Fundamentos de Computação (Híbrida)', 'JM'],
          ['Metodologia Científica', 'GI'],
          ['Geometria Analítica e Álgebra Linear', 'JM'],
          null, null
        ]}
      ]
    },
    {
      id: 'eng-3', curso: 'Engenharia Civil', periodo: '3º período', turma: 'Turma IV',
      sala: 'Sala nº 11', salaId: '11',
      linhas: [
        { ini: '18:10', fim: '19:00', rotulo: '18h10-19h', celulas: [
          ['Física I', 'FE'], ['Física I', 'FE'],
          ['Topografia Aplicada à Engenharia Civil I', 'GI'],
          ['Estatística e Probabilidade', 'JM'],
          ['Estatística e Probabilidade', 'JM'],
          ['Ciências do Ambiente (EaD)', 'GI']
        ]},
        { ini: '19:00', fim: '19:50', rotulo: '19h-19h50', celulas: [
          ['Física I', 'FE'], ['Física I', 'FE'],
          ['Topografia Aplicada à Engenharia Civil I', 'GI'],
          ['Estatística e Probabilidade', 'JM'],
          ['Estatística e Probabilidade', 'JM'],
          null
        ]},
        { ini: '19:50', fim: '20:40', rotulo: '19h50-20h40', celulas: [
          ['Laboratório de Física I (Turma A)', 'FE'],
          ['Laboratório de Física I (Turma B)', 'FE'],
          ['Topografia Aplicada à Engenharia Civil I', 'GI'],
          null, null, null
        ]},
        { ini: '20:50', fim: '21:40', rotulo: '20h50-21h40', celulas: [
          ['Arquitetura e Urbanismo', 'PA'],
          ['Arquitetura e Urbanismo', 'PA'],
          ['Laboratório de Física I (Turma A)', 'FE'],
          ['Cálculo Diferencial e Integral II', 'BR'],
          ['Cálculo Diferencial e Integral II', 'BR'],
          null
        ]},
        { ini: '21:40', fim: '22:30', rotulo: '21h40-22h30', celulas: [
          ['Arquitetura e Urbanismo', 'PA'],
          ['Arquitetura e Urbanismo', 'PA'],
          ['Laboratório de Física I (Turma B)', 'FE'],
          ['Cálculo Diferencial e Integral II', 'BR'],
          ['Cálculo Diferencial e Integral II', 'BR'],
          null
        ]}
      ]
    },
    {
      id: 'eng-5', curso: 'Engenharia Civil', periodo: '5º período', turma: 'Turma III',
      sala: 'Sala nº 9', salaId: '9',
      linhas: [
        { ini: '18:10', fim: '19:00', rotulo: '18h10-19h', celulas: [
          ['Mecânica dos Solos II', 'MI'],
          ['Materiais de Construção I (Híbrida)', 'SA'],
          ['Física III (Híbrida)', 'FE'],
          ['Cálculo Diferencial e Integral IV', 'BR'],
          ['Cálculo Diferencial e Integral IV', 'BR'],
          ['Materiais de Construção I (Híbrida)', 'SA']
        ]},
        { ini: '19:00', fim: '19:50', rotulo: '19h-19h50', celulas: [
          ['Mecânica dos Solos II', 'MI'],
          ['Materiais de Construção I (Híbrida)', 'SA'],
          ['Física III (Híbrida)', 'FE'],
          ['Cálculo Diferencial e Integral IV', 'BR'],
          ['Cálculo Diferencial e Integral IV', 'BR'],
          ['Física III (Híbrida)', 'FE']
        ]},
        { ini: '19:50', fim: '20:40', rotulo: '19h50-20h40', celulas: [
          ['Mecânica dos Solos II', 'MI'],
          ['Mecânica dos Solos II', 'MI'],
          ['Física III (Híbrida)', 'FE'],
          ['Mecânica dos Fluidos', 'JM'],
          ['Mecânica dos Fluidos', 'JM'],
          null
        ]},
        { ini: '20:50', fim: '21:40', rotulo: '20h50-21h40', celulas: [
          ['Teoria das Estruturas I', 'LU'],
          ['Teoria das Estruturas I', 'LU'],
          ['Resistência dos Materiais I', 'LU'],
          ['Resistência dos Materiais I', 'LU'],
          ['Mecânica dos Fluidos', 'JM'],
          null
        ]},
        { ini: '21:40', fim: '22:30', rotulo: '21h40-22h30', celulas: [
          ['Teoria das Estruturas I', 'LU'],
          ['Teoria das Estruturas I', 'LU'],
          ['Resistência dos Materiais I', 'LU'],
          ['Resistência dos Materiais I', 'LU'],
          ['Mecânica dos Fluidos', 'JM'],
          null
        ]}
      ]
    },
    {
      id: 'eng-7', curso: 'Engenharia Civil', periodo: '7º período', turma: 'Turma II',
      sala: 'Sala nº 2', salaId: '2',
      linhas: [
        { ini: '18:10', fim: '19:00', rotulo: '18h10-19h', celulas: [
          ['Concreto Armado I', 'LU'],
          ['Tecnologia das Construções I', 'MI'],
          ['Tecnologia das Construções I', 'MI'],
          ['Teoria das Estruturas III', 'LU'],
          null,
          ['Higiene Industrial e Segurança do Trabalho (Híbrida)', 'GI']
        ]},
        { ini: '19:00', fim: '19:50', rotulo: '19h-19h50', celulas: [
          ['Concreto Armado I', 'LU'],
          ['Tecnologia das Construções I', 'MI'],
          ['Tecnologia das Construções I', 'MI'],
          ['Teoria das Estruturas III', 'LU'],
          null, null
        ]},
        { ini: '19:50', fim: '20:40', rotulo: '19h50-20h40', celulas: [
          ['Concreto Armado I', 'LU'],
          ['Concreto Armado I', 'LU'],
          ['Teoria das Estruturas III', 'LU'],
          ['Teoria das Estruturas III', 'LU'],
          ['Desenho Assistido por Computador (Optativa)', 'AP'],
          null
        ]},
        { ini: '20:50', fim: '21:40', rotulo: '20h50-21h40', celulas: [
          ['Estradas', 'MI'], ['Estradas', 'MI'], null,
          ['Higiene Industrial e Segurança do Trabalho (Híbrida)', 'GI'],
          ['Desenho Assistido por Computador (Optativa)', 'AP'],
          null
        ]},
        { ini: '21:40', fim: '22:30', rotulo: '21h40-22h30', celulas: [
          ['Estradas', 'MI'], ['Estradas', 'MI'], null,
          ['Higiene Industrial e Segurança do Trabalho (Híbrida)', 'GI'],
          ['Desenho Assistido por Computador (Optativa)', 'AP'],
          null
        ]}
      ]
    },
    {
      id: 'eng-10', curso: 'Engenharia Civil', periodo: '10º/9º período', turma: 'Turma I',
      sala: 'Sala nº 3', salaId: '3',
      linhas: [
        { ini: '18:10', fim: '19:00', rotulo: '18h10-19h', celulas: [
          ['Planejamento e Orçamento', 'SA'],
          ['Pontes', 'LU'], ['Pontes', 'LU'],
          ['Fundações', 'CE'], ['Fundações', 'CE'],
          ['Trabalho de Conclusão de Curso I (EaD)', 'PA']
        ]},
        { ini: '19:00', fim: '19:50', rotulo: '19h-19h50', celulas: [
          ['Planejamento e Orçamento', 'SA'],
          ['Pontes', 'LU'], ['Pontes', 'LU'],
          ['Fundações', 'CE'], ['Fundações', 'CE'],
          null
        ]},
        { ini: '19:50', fim: '20:40', rotulo: '19h50-20h40', celulas: [
          ['Planejamento e Orçamento', 'SA'],
          ['Planejamento e Orçamento', 'SA'],
          null,
          ['Pesquisa Operacional Aplicada à Engenharia Civil', 'GI'],
          ['Pesquisa Operacional Aplicada à Engenharia Civil', 'GI'],
          null
        ]},
        { ini: '20:50', fim: '21:40', rotulo: '20h50-21h40', celulas: [
          ['Hidrologia Aplicada', 'SA'],
          ['Hidrologia Aplicada', 'SA'],
          ['Patologia das Construções', 'CE'],
          ['Patologia das Construções', 'CE'],
          ['Pesquisa Operacional Aplicada à Engenharia Civil', 'GI'],
          null
        ]},
        { ini: '21:40', fim: '22:30', rotulo: '21h40-22h30', celulas: [
          ['Hidrologia Aplicada', 'SA'],
          ['Hidrologia Aplicada', 'SA'],
          ['Patologia das Construções', 'CE'],
          ['Patologia das Construções', 'CE'],
          ['Pesquisa Operacional Aplicada à Engenharia Civil', 'GI'],
          null
        ]}
      ]
    },
    {
      id: 'eng-extra', curso: 'Engenharia Civil', periodo: 'Turmas extras', turma: 'Dependências e TCC',
      sala: 'Sala nº 1', salaId: '1',
      linhas: [
        { ini: '18:10', fim: '19:00', rotulo: '18h10-19h', celulas: [
          ['Cálculo Diferencial e Integral I', 'BR'], null, null, null, null,
          ['Trabalho de Conclusão de Curso II (EaD)', 'LU']
        ]},
        { ini: '19:00', fim: '19:50', rotulo: '19h-19h50', celulas: [
          ['Cálculo Diferencial e Integral I', 'BR'], null, null, null, null, null
        ]},
        { ini: '19:50', fim: '20:40', rotulo: '19h50-20h40', celulas: [
          null, null, null,
          ['Estruturas Metálicas', 'CE'],
          ['Estruturas Metálicas', 'CE'],
          null
        ]},
        { ini: '20:50', fim: '21:40', rotulo: '20h50-21h40', celulas: [
          ['Mecânica Geral', 'FE'], ['Mecânica Geral', 'FE'],
          ['Cálculo Diferencial e Integral I', 'BR'],
          null,
          ['Estruturas Metálicas', 'CE'],
          null
        ]},
        { ini: '21:40', fim: '22:30', rotulo: '21h40-22h30', celulas: [
          ['Mecânica Geral', 'FE'], ['Mecânica Geral', 'FE'],
          ['Cálculo Diferencial e Integral I', 'BR'],
          null,
          ['Estruturas Metálicas', 'CE'],
          null
        ]}
      ]
    }
  ]
};
