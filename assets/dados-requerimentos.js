/* ═══════════════════════════════════════════════════════
   DADOS · Modelos de requerimento
   ───────────────────────────────────────────────────────
   Alimenta a página requerimentos.html, que monta o texto
   pronto para o estudante imprimir e levar à secretaria.

   REGRA DE OURO: só entra aqui o que está em resolução ou
   no Projeto Pedagógico, com a fonte escrita no campo
   "base". Requerimento é documento: um prazo errado aqui
   pode custar um semestre ao estudante. Na dúvida, escreva
   menos e mande confirmar na secretaria.

   Como funciona a montagem do texto:
   · em "corpo", tudo entre chaves é substituído pelo que a
     pessoa preencheu, usando o "id" do campo
   · o cabeçalho, a qualificação, o fecho e a assinatura são
     iguais para todos e ficam em assets/requerimentos.js

   campos: tipo pode ser 'texto', 'longo', 'escolha' ou 'data'
   ═══════════════════════════════════════════════════════ */

window.DADOS_REQUERIMENTOS = {
  atualizadoEm: '2026-08-07',

  /* aviso que aparece em todos os requerimentos gerados */
  ressalva: 'Este modelo foi montado pelo site do NAE para poupar o seu tempo. ' +
            'Confira os dados antes de assinar e confirme na Secretaria Acadêmica ' +
            'se há formulário próprio da Unidade para este pedido.',

  tipos: [

    {
      id: 'aproveitamento',
      titulo: 'Aproveitamento de estudos',
      cor: 'var(--azul)',
      resumo: 'Para pedir dispensa de disciplina que você já cursou e foi aprovado em outra instituição ou em outro curso de graduação.',
      objeto: 'o APROVEITAMENTO DE ESTUDOS das disciplinas abaixo relacionadas',
      base: 'Resolução COEPE/UEMG nº 250, de 06 de abril de 2020',
      quando: 'Logo no início do semestre, antes de a disciplina avançar. Quem entrou por transferência deve pedir na primeira matrícula.',
      onde: 'Secretaria Acadêmica da Unidade Guanhães, que encaminha ao colegiado do curso.',
      atencao: 'Para quem veio de outra instituição, o aproveitamento não pode passar de 50% dos créditos exigidos para concluir o novo curso. Se o conteúdo e a carga horária não forem equivalentes por completo, o colegiado pode indicar adaptação curricular em vez da dispensa.',
      documentos: [
        'Histórico escolar da instituição de origem, ou do outro curso, com as notas e a carga horária',
        'Plano de ensino ou ementa de cada disciplina cursada, com a bibliografia',
        'Documento de identidade com foto',
        'Comprovante de matrícula no curso atual'
      ],
      campos: [
        { id: 'origem', rotulo: 'Instituição onde você cursou', tipo: 'texto', dica: 'Nome da faculdade ou universidade, ou o curso da própria UEMG' },
        { id: 'cursadas', rotulo: 'Disciplinas que você já cursou', tipo: 'longo', dica: 'Uma por linha, com carga horária e nota. Exemplo: Introdução ao Direito, 60 horas, nota 78' },
        { id: 'dispensar', rotulo: 'Disciplinas que quer dispensar aqui', tipo: 'longo', dica: 'Uma por linha, como aparecem na matriz do seu curso' }
      ],
      corpo:
        'Cursei e fui aprovado(a) nas disciplinas abaixo, em {origem}:\n\n' +
        '{cursadas}\n\n' +
        'Por entender que há equivalência de conteúdo e de carga horária, requeiro o ' +
        'aproveitamento desses estudos para dispensa das seguintes disciplinas da matriz ' +
        'curricular do meu curso:\n\n' +
        '{dispensar}\n\n' +
        'Anexo o histórico escolar e os planos de ensino das disciplinas cursadas, para ' +
        'a análise de equivalência pelo colegiado do curso.'
    },

    {
      id: 'trancamento',
      titulo: 'Trancamento de matrícula',
      cor: 'var(--coral)',
      resumo: 'Para interromper o curso por um período, sem perder o vínculo com a Universidade.',
      objeto: 'o TRANCAMENTO DE MATRÍCULA',
      base: 'Calendário Acadêmico 2026, Resolução COEPE/UEMG nº 530, de 11 de dezembro de 2025',
      quando: 'Dentro do prazo do calendário acadêmico. Fora dele, o pedido costuma não ser aceito, e o semestre corre com as faltas contando.',
      onde: 'Secretaria Acadêmica da Unidade Guanhães.',
      atencao: 'O trancamento tem regras próprias de quantidade e de duração, e o tempo trancado não conta como cursado, mas o prazo máximo de integralização do curso continua correndo. Confirme as condições do seu caso na Secretaria Acadêmica antes de decidir. Se a saída é temporária e a razão é financeira, de saúde ou de trabalho, converse antes com o NAE: às vezes existe alternativa ao trancamento.',
      documentos: [
        'Documento de identidade com foto',
        'Comprovante de matrícula no semestre',
        'Documento que comprove o motivo, quando houver, como atestado ou declaração do empregador'
      ],
      campos: [
        { id: 'semestre', rotulo: 'Semestre que você quer trancar', tipo: 'texto', dica: 'Exemplo: 2026.2' },
        { id: 'motivo', rotulo: 'Motivo principal', tipo: 'escolha', opcoes: [
          'Motivo de saúde',
          'Motivo de trabalho, com incompatibilidade de horário',
          'Motivo financeiro',
          'Mudança de cidade',
          'Motivo familiar',
          'Outro motivo'
        ] },
        { id: 'detalhe', rotulo: 'Explique em poucas linhas', tipo: 'longo', dica: 'Duas ou três frases bastam. Seja objetivo e escreva só o que você aceita registrar em documento' }
      ],
      corpo:
        'Requeiro o trancamento da minha matrícula no semestre letivo {semestre}, ' +
        'pelo seguinte motivo: {motivo}.\n\n' +
        '{detalhe}\n\n' +
        'Declaro estar ciente de que, durante o trancamento, não terei direito a cursar ' +
        'disciplinas nem a frequentar as aulas, e que devo procurar a Secretaria Acadêmica ' +
        'para retomar o curso no semestre seguinte ao término deste período.'
    },

    {
      id: 'adaptacao',
      titulo: 'Adaptação curricular',
      cor: 'var(--lilas)',
      resumo: 'Para quando o conteúdo cursado não equivale por completo ao da disciplina daqui, e o colegiado precisa definir como completar a diferença.',
      objeto: 'a ADAPTAÇÃO CURRICULAR das disciplinas abaixo relacionadas',
      base: 'Resolução COEPE/UEMG nº 250, de 06 de abril de 2020',
      quando: 'Em geral logo depois da análise do aproveitamento de estudos, quando o colegiado não reconhece equivalência total.',
      onde: 'Secretaria Acadêmica da Unidade Guanhães, que encaminha ao colegiado do curso.',
      atencao: 'Quem decide a forma da adaptação é o colegiado do curso, e ela acontece sob supervisão e orientação direta de um professor, que registra tudo no diário de classe. Peça sempre por escrito qual conteúdo você precisa cumprir e em que prazo.',
      documentos: [
        'Histórico escolar com as disciplinas já cursadas',
        'Plano de ensino ou ementa das disciplinas cursadas',
        'Parecer do pedido de aproveitamento de estudos, se já houver',
        'Documento de identidade com foto'
      ],
      campos: [
        { id: 'disciplinas', rotulo: 'Disciplinas em que falta equivalência', tipo: 'longo', dica: 'Uma por linha, como aparecem na matriz do seu curso' },
        { id: 'cursado', rotulo: 'O que você já cursou sobre esse conteúdo', tipo: 'longo', dica: 'Disciplina, instituição e carga horária, uma por linha' }
      ],
      corpo:
        'Requeiro a adaptação curricular referente às seguintes disciplinas da matriz do meu curso:\n\n' +
        '{disciplinas}\n\n' +
        'Sobre esse conteúdo, já cursei:\n\n' +
        '{cursado}\n\n' +
        'Solicito que o colegiado do curso defina a forma da adaptação, o conteúdo a ser ' +
        'cumprido, o professor responsável pela supervisão e o prazo, para que eu possa ' +
        'me organizar e cumprir integralmente o que for determinado.'
    }

  ]
};
