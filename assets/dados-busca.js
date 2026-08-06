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
      u: 'sistemas.html#lyceum',
      k: 'lyceum nota falta historico matricula boletim sistema academico registro ra aluno responsavel senha primeiro acesso'
    },
    {
      t: 'Aplicativo UEMG+ Estudante',
      d: 'O Lyceum no celular, para Android e iPhone.',
      u: 'sistemas.html#app',
      k: 'app aplicativo celular uemg+ estudante android iphone ios play store baixar instalar'
    },
    {
      t: 'Calculadora de média e faltas',
      d: 'Veja quantos pontos faltam para passar e quantas faltas ainda cabem.',
      u: 'sistemas.html#calculadora',
      k: 'calculadora media nota pontos passar aprovacao final faltas frequencia 75 60 reprovar quanto preciso'
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
      t: 'Instalar o site no celular',
      d: 'O NAE vira um aplicativo na sua tela inicial, e funciona até sem internet.',
      u: 'index.html',
      k: 'instalar aplicativo celular tela inicial offline sem internet pwa android iphone'
    }
  ]
};
