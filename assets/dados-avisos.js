/* ═══════════════════════════════════════════════════════
   DADOS · Avisos do NAE
   ───────────────────────────────────────────────────────
   A faixa de aviso aparece no topo de todas as páginas.
   Para publicar um aviso, acrescente um item na lista abaixo.
   Para tirar do ar, apague o item (ou deixe a data 'ate' passar:
   avisos vencidos somem sozinhos).

   tipo:  'urgente'  → vermelho (aula suspensa, mudança de última hora)
          'atencao'  → âmbar    (prazo terminando, lembrete)
          'novidade' → turquesa (algo novo no site, evento)

   de:    primeiro dia em que o aviso aparece (AAAA-MM-DD, opcional).
          Sem esse campo, entra no ar assim que você publicar.
          COM esse campo, o aviso fica agendado e aparece sozinho no dia.
   ate:   último dia em que o aviso aparece (AAAA-MM-DD)
   link / textoLink: opcionais

   Nada é apagado desta lista: os avisos vencidos saem da faixa do topo
   mas continuam no mural (avisos.html), virando o registro do que o
   NAE comunicou. Só apague um item se ele foi publicado por engano.

   Exemplo de aviso agendado:
     { tipo: 'atencao', de: '2026-09-20', ate: '2026-09-25',
       texto: 'Última semana para o ajuste de matrícula.',
       link: 'calendario.html', textoLink: 'ver o calendário' }
   ═══════════════════════════════════════════════════════ */

window.DADOS_AVISOS = {
  atualizadoEm: '2026-10-21',
  avisos: [
    {
      tipo: 'atencao',
      de: '2026-10-27',
      ate: '2026-11-16',
      texto: 'PEAES Veteranos 2027: inscrições até 16/11, às 23h59, no Sistema PEAES. Quem já recebeu antes precisa se inscrever de novo.',
      link: 'peaes.html',
      textoLink: 'ver o passo a passo'
    },
    {
      tipo: 'atencao',
      de: '2026-11-23',
      ate: '2026-12-11',
      texto: 'Direito: provas finais de 30/11 a 11/12. Quem fechar o semestre com 40 a 59 pontos e 75% de presença faz o exame especial, de 14 a 17/12.',
      link: 'calculadora.html#exame-especial',
      textoLink: 'fazer a conta'
    },
    {
      tipo: 'atencao',
      de: '2026-12-12',
      ate: '2026-12-17',
      texto: 'Exame especial de 14 a 17/12, para quem fechou com 40 a 59 pontos e 75% de presença. Tirando 60 na prova, o professor lança 60.',
      link: 'calculadora.html#exame-especial',
      textoLink: 'como funciona'
    },
    {
      tipo: 'atencao',
      de: '2026-10-21',
      ate: '2026-10-26',
      texto: 'Sem aula na sexta, 23/10, e na segunda, 26/10: suspensão das atividades de ensino (Ofício Circular UEMG/PROGRAD nº 1/2026). Domingo, 25/10, é feriado municipal, aniversário de Guanhães.',
      link: 'calendario.html',
      textoLink: 'ver o calendário'
    },
    {
      tipo: 'atencao',
      de: '2026-10-21',
      ate: '2026-10-29',
      texto: '28º Seminário: a inscrição nas atividades foi prorrogada até 29/10, por formulário. Escolha as que combinam com você, não todas, e faça também a inscrição como ouvinte.',
      link: 'seminario.html',
      textoLink: 'ver o passo a passo'
    },
    {
      tipo: 'novidade',
      de: '2026-10-21',
      ate: '2026-11-13',
      texto: 'Vai apresentar trabalho no 28º Seminário de Pesquisa e Extensão? As logos do evento e os modelos de apresentação oral e de banner já estão disponíveis.',
      link: 'seminario.html',
      textoLink: 'ver onde baixar'
    },
    {
      tipo: 'atencao',
      de: '2026-09-30',
      ate: '2026-11-29',
      texto: 'ENADE 2026, Engenharia Civil: formandos precisam preencher o Questionário do Estudante até 29/11 e fazer a prova em 29/11 para colar grau.',
      link: 'enade.html',
      textoLink: 'ver o passo a passo'
    },
    {
      tipo: 'novidade',
      de: '2026-09-26',
      ate: '2026-10-09',
      texto: 'A internet da Unidade voltou, com novas credenciais: três redes, a mesma senha para todas. O laboratório de informática também está disponível.',
      link: 'wifi.html',
      textoLink: 'ver as redes e a senha'
    },
    {
      tipo: 'atencao',
      de: '2026-09-15',
      ate: '2026-09-21',
      texto: 'Prazo prorrogado: a submissão de trabalhos do 28º Seminário de Pesquisa e Extensão vai até 21 de setembro. Lembre que é preciso ter Currículo Lattes.',
      link: 'seminario.html',
      textoLink: 'ver os prazos'
    },
    {
      tipo: 'novidade',
      ate: '2026-09-15',
      texto: 'Novo no site: como entrar no AVA Moodle e no Lyceum, com passo a passo do primeiro acesso e da recuperação de senha.',
      link: 'sistemas.html',
      textoLink: 'ver o passo a passo'
    }
  ]
};
