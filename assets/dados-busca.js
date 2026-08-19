/* ═══════════════════════════════════════════════════════
   DADOS · Índice da busca interna
   ───────────────────────────────────────────────────────
   Cada item alimenta a caixa "O que você procura hoje?".
   Ao criar uma página ou seção nova, acrescente um item:

   t: título mostrado no resultado
   d: uma linha explicando o que a pessoa encontra lá
   u: endereço da página (pode ter #ancora)
   k: palavras pelas quais o estudante costuma procurar
   ═══════════════════════════════════════════════════════ */

window.DADOS_BUSCA = {
  itens: [
    {
      t: "Gerador de requerimentos",
      d: "Monta o pedido de aproveitamento, trancamento ou adaptacao com a resolucao certa.",
      u: "requerimentos.html",
      k: "requerimento pedido secretaria protocolo aproveitamento de estudos dispensa disciplina trancamento trancar adaptacao curricular modelo documento imprimir"
    },
    {
      t: "AVA Moodle · aulas e materiais",
      d: "Primeiro acesso em 8 etapas, com as telas, e o que fazer quando nao entra.",
      u: "moodle.html",
      k: "moodle ava aula material atividade forum trabalho nota senha perdeu entrar login painel disciplina"
    },
    {
      t: "Lyceum · matricula, notas e faltas",
      d: "Primeiro acesso ao sistema academico e o aplicativo UEMG+ Estudante.",
      u: "lyceum.html",
      k: "lyceum matricula nota falta historico registro academico primeiro acesso senha data de nascimento aplicativo uemg+ celular"
    },
    {
      t: "Meu curso · o que o PPC exige",
      d: "Matriz, atividades complementares, estágio, TCC e regras da secretaria em um lugar só.",
      u: "curso.html",
      k: "curso ppc projeto pedagogico regras grade formacao direito engenharia civil"
    },
    {
      t: "Matriz curricular",
      d: "Disciplinas por período, carga horária e pré-requisitos, com marcação do que já cursei.",
      u: "matriz.html",
      k: "matriz grade curricular disciplinas periodo pre-requisito prerequisito carga horaria creditos o que falta"
    },
    {
      t: "Ementas e bibliografia das disciplinas",
      d: "O que cada disciplina cobre e quais livros o PPC indica, em toda a matriz.",
      u: "matriz.html",
      k: "ementa ementario bibliografia livro leitura conteudo programa materia optativa escolher plano de ensino isbn autor referencia"
    },
    {
      t: "Perfil do egresso e áreas de atuação",
      d: "O que se espera de quem se forma e onde o profissional trabalha.",
      u: "curso.html",
      k: "egresso perfil atuacao mercado trabalho carreira profissao onde trabalhar formado futuro competencias crea confea"
    },
    {
      t: "Atividades complementares",
      d: "Quantas horas o seu curso exige, o que conta e como protocolar.",
      u: "atividades.html",
      k: "atividades complementares horas certificado comprovante monitoria palestra congresso colar grau 210 30"
    },
    {
      t: "Estágio",
      d: "Quando começa, quantas horas são e o que vale como estágio em cada curso.",
      u: "estagio.html",
      k: "estagio supervisionado obrigatorio nucleo praticas juridicas npj 165 horas lei 11788"
    },
    {
      t: "Trabalho de Conclusão de Curso",
      d: "Formato aceito, orientação, banca e linhas de pesquisa.",
      u: "tcc.html",
      k: "tcc monografia artigo banca orientador defesa abnt linhas de pesquisa"
    },
    {
      t: "Declaração de uso de IA",
      d: "Modelo da declaração sobre ferramentas de Inteligência Artificial Generativa, para anexar ao trabalho.",
      u: "declaracao-ia.html",
      k: "declaracao ia inteligencia artificial generativa iagen chatgpt gemini copilot uso etica plagio tcc trabalho academico anexo assinatura resolucao transparencia ferramenta"
    },
    {
      t: "Exame especial, faltas e revisão de prova",
      d: "De 40 a 59 pontos ainda dá exame especial. Atestado tem 48 horas para justificar.",
      u: "secretaria.html",
      k: "exame especial 40 59 pontos reprovado falta atestado justificar 48 horas revisao de prova dispensa disciplina aproveitamento adaptacao proficiencia abreviacao secretaria"
    },
    {
      t: 'Ajuda com o e-mail institucional',
      d: 'Primeiro acesso e redefinição de senha, explicados tela por tela.',
      u: 'email.html',
      k: 'email senha esqueci recuperar redefinir trocar acesso outlook microsoft 365 office discente login entrar bloqueado captcha'
    },
    {
      t: 'Qual é o meu endereço de e-mail?',
      d: 'Monte o seu endereço institucional com nome e matrícula.',
      u: 'email.html#meu-endereco',
      k: 'email endereco meu qual matricula discente.uemg.br montar descobrir'
    },
    {
      t: 'AVA Moodle · aulas e materiais',
      d: 'Passo a passo do primeiro acesso ao ambiente virtual de aprendizagem.',
      u: 'sistemas.html',
      k: 'moodle ava ambiente virtual aula online ead material atividade prova plataforma entrar acesso senha primeiro'
    },
    {
      t: 'Lyceum · notas e matrícula',
      d: 'Onde ver notas, faltas, histórico e fazer a matrícula. Primeiro acesso explicado.',
      u: 'lyceum.html',
      k: 'lyceum nota falta historico matricula boletim sistema academico registro ra aluno responsavel senha primeiro acesso'
    },
    {
      t: 'Aplicativo UEMG+ Estudante',
      d: 'O Lyceum no celular, para Android e iPhone.',
      u: 'lyceum.html#app',
      k: 'app aplicativo celular uemg+ estudante android iphone ios play store baixar instalar'
    },
    {
      t: 'Calculadora de média e faltas',
      d: 'Veja quantos pontos faltam para passar e quantas faltas ainda cabem.',
      u: 'calculadora.html',
      k: 'calculadora media nota pontos passar aprovacao final faltas frequencia 75 60 reprovar quanto preciso'
    },
    {
      t: 'Planner do semestre para imprimir',
      d: 'Uma folha A4 com a sua grade, as semanas e os prazos já marcados.',
      u: 'planner.html',
      k: 'planner agenda imprimir folha semestre organizar semanas parede papel cronograma'
    },
    {
      t: 'Cronômetro de estudos',
      d: 'Blocos de 25 minutos com pausa, para render mais na hora de estudar.',
      u: 'cronometro.html',
      k: 'cronometro timer pomodoro estudar foco concentracao tempo estudo'
    },
    {
      t: 'Mural de avisos',
      d: 'Todos os comunicados do NAE, com data, dos mais recentes aos antigos.',
      u: 'avisos.html',
      k: 'aviso mural comunicado recado historico noticias suspensao'
    },
    {
      t: 'Privacidade',
      d: 'O que o site coleta e o que não coleta. Sem cookies e sem cadastro.',
      u: 'privacidade.html',
      k: 'privacidade lgpd dados cookie cadastro seguranca politica'
    },
    {
      t: 'Horários de aulas 2026.2',
      d: 'Grade completa de Direito e Engenharia Civil, com sala e professor.',
      u: 'horarios.html',
      k: 'horario aula grade turma disciplina professor periodo sala direito engenharia civil hoje semana'
    },
    {
      t: 'Que aula eu tenho hoje?',
      d: 'Escolha a sua turma e o site mostra a aula do dia, o horário e a sala.',
      u: 'horarios.html',
      k: 'aula hoje agora minha turma proxima sala painel'
    },
    {
      t: 'Calendário acadêmico 2026',
      d: 'Início e fim de semestre, matrículas, trancamento, exames, feriados e recessos.',
      u: 'calendario.html',
      k: 'calendario data prazo feriado recesso ferias matricula trancamento reopcao exame especial semestre inicio fim'
    },
    {
      t: 'Ser avisado três dias antes do prazo',
      d: 'Ligue o aviso no seu aparelho para matrícula, trancamento e exame especial.',
      u: 'calendario.html',
      k: 'aviso notificacao alerta lembrete prazo avisar tres dias antes matricula trancamento exame'
    },
    {
      t: 'Levar o calendário para o celular',
      d: 'Baixe o arquivo que coloca as datas no Google Agenda ou no iPhone.',
      u: 'calendario.html',
      k: 'calendario celular google agenda apple ics baixar exportar sincronizar'
    },
    {
      t: 'Mapa do campus',
      d: 'A planta da unidade: salas, laboratórios, biblioteca, auditório e serviços.',
      u: 'mapa.html',
      k: 'mapa campus planta sala onde fica biblioteca laboratorio informatica fisica topografia auditorio cantina banheiro patio secretaria npj administrativo anexo'
    },
    {
      t: 'Editais e bolsas',
      d: 'Assistência estudantil, monitoria, extensão e pesquisa, com prazo e link oficial.',
      u: 'editais.html',
      k: 'edital editais bolsa bolsas auxilio assistencia estudantil monitoria extensao pesquisa inscricao prazo oportunidade ajuda financeira dinheiro'
    },
    {
      t: 'Rodas de Conversa sobre Inteligência Artificial',
      d: 'Projeto de extensão do NAE e do DA. 17 vagas, 15 horas certificadas, inscrições até 31 de agosto.',
      u: 'extensao.html',
      k: 'extensao projeto extensionista voluntario roda de conversa rodas inteligencia artificial ia chatgpt etica direito engenharia civil vaga inscricao carta de motivacao certificado 15 horas edital 01/2026 nae diretorio academico da sabado teams'
    },
    {
      t: 'Primeira senha do e-mail institucional',
      d: 'Nunca entrou? A senha inicial é #A, mais 5 dígitos do CPF, mais 2 letras do primeiro nome.',
      u: 'email.html#primeira-senha',
      k: 'primeira senha senha inicial primeiro acesso nunca entrei nao sei a senha padrao email institucional discente cpf nome hashtag jogo da velha #A qual e minha senha'
    },
    {
      t: 'Não recebi o auxílio. E agora?',
      d: 'Passo a passo de quando o pagamento não cai: conferir o edital, para quem escrever e o que informar.',
      u: 'auxilios.html#nao-recebi',
      k: 'nao recebi nao caiu nao pagou pagamento atrasado auxilio bolsa paes inclua monitoria estagio deposito banco conta dados bancarios cpf reclamar cobrar atraso quem procurar nae uemg pema prograd'
    },
    {
      t: 'Auxílios, bolsas e pagamentos',
      d: 'Auxílio estudantil, Programa INCLUA, monitoria e estágio na UEMG, e o que fazer quando o pagamento falha.',
      u: 'auxilios.html',
      k: 'auxilio auxilios bolsa pagamento paes inclua programa monitoria estagio assistencia estudantil dados bancarios cpf matricula deposito'
    },
    {
      t: 'Apoio psicológico',
      d: 'CAPS gratuito em Guanhães, plataformas com preço social e o CVV 188.',
      u: 'apoio.html',
      k: 'psicologo psicologa saude mental ansiedade depressao caps cvv 188 terapia apoio emocional tristeza crise acolhimento'
    },
    {
      t: 'Sala do NAE e atendimento',
      d: 'Prédio do Administrativo. Terças e quintas, das 18h às 19h.',
      u: 'contato.html',
      k: 'nae sala atendimento onde fica falar contato coordenacao jonatan horario predio administrativo'
    },
    {
      t: 'Quem procurar para cada assunto',
      d: 'A quem escrever conforme o problema. Acesso ao Moodle vai para a Coordenadoria de EaD, com cópia para o NAE.',
      u: 'contato.html#quem-procurar',
      k: 'quem procurar a quem recorrer contato certo suporte ajuda moodle ava acesso coordenadoria ead copia nae secretaria cadastro matricula disciplina coordenacao do curso email institucional encaminhar duvida'
    },
    {
      t: 'Contato da secretaria e da unidade',
      d: 'Telefone, e-mails e endereço da UEMG Unidade Guanhães.',
      u: 'contato.html',
      k: 'secretaria telefone endereco uemg unidade guanhaes br-259 email contato'
    },
    {
      t: 'Sobre o NAE',
      d: 'O que o Núcleo de Apoio ao Estudante faz por você.',
      u: 'sobre.html',
      k: 'nae nucleo apoio estudante quem somos acolhimento pedagogico assistencia bolsa auxilio acessibilidade'
    },
    {
      t: 'Cartaz com QR code',
      d: 'Folha A4 para imprimir e divulgar o site nos murais.',
      u: 'cartaz.html',
      k: 'cartaz qr code imprimir divulgar mural'
    },
    {
      t: 'Guia de bolso para imprimir',
      d: 'Uma folha com contatos, acessos, regra de aprovação e os prazos do semestre.',
      u: 'guia.html',
      k: 'guia bolso folha papel imprimir entregar sala calouro resumo contatos prazos qr code sem internet'
    },
    {
      t: 'Instalar o site no celular',
      d: 'O NAE vira um aplicativo na sua tela inicial, e funciona até sem internet.',
      u: 'index.html',
      k: 'instalar aplicativo celular tela inicial offline sem internet pwa android iphone'
    }
  ]
};
