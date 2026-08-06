/* ═══════════════════════════════════════════════════════
   DADOS · Calendário acadêmico
   ───────────────────────────────────────────────────────
   Fonte: Resolução COEPE/UEMG nº 530, de 11 de dezembro de 2025.
   Este calendário é informativo; as datas oficiais estão na Resolução.

   tipo: 'letivo'  → início/fim de período e eventos acadêmicos
         'prazo'   → matrículas, inscrições, exames, trancamento
         'feriado' → feriados e recessos

   Datas no formato AAAA-MM-DD. Evento de um dia só: fim = ini.
   ═══════════════════════════════════════════════════════ */

window.DADOS_CALENDARIO = {
  ano: 2026,
  atualizadoEm: '2026-08-05',
  resolucao: 'Resolução COEPE/UEMG nº 530, de 11 de dezembro de 2025',
  fonteUrl: 'https://www.uemg.br/calendario-academico',

  eventos: [
    { ini: '2026-01-01', fim: '2026-01-02', titulo: 'Feriado / Recesso', tipo: 'feriado' },
    { ini: '2026-01-18', fim: '2026-01-18', titulo: 'Vestibular UEMG 2026: prova de conhecimentos gerais', tipo: 'prazo' },
    { ini: '2026-01-01', fim: '2026-01-31', titulo: 'SISU (data a definir)', tipo: 'prazo', semData: true },

    { ini: '2026-02-02', fim: '2026-02-02', titulo: 'Início do 1º semestre letivo de 2026', tipo: 'letivo' },
    { ini: '2026-02-02', fim: '2026-02-13', titulo: 'Atividades de Integração Acadêmica', tipo: 'prazo' },
    { ini: '2026-02-06', fim: '2026-02-13', titulo: 'Renovação de matrícula on-line dos veteranos', tipo: 'prazo' },
    { ini: '2026-02-16', fim: '2026-02-18', titulo: 'Carnaval', tipo: 'feriado' },
    { ini: '2026-02-20', fim: '2026-02-25', titulo: 'Início do ajuste de matrícula dos veteranos', tipo: 'prazo' },
    { ini: '2026-02-26', fim: '2026-02-28', titulo: 'Início da matrícula on-line dos calouros do Vestibular 2026 (Chamada Regular)', tipo: 'prazo' },

    { ini: '2026-03-02', fim: '2026-03-02', titulo: 'Início das aulas do 1º semestre, estudantes veteranos', tipo: 'letivo' },
    { ini: '2026-03-02', fim: '2026-03-05', titulo: 'Prazo final da matrícula on-line dos calouros (Chamada Regular)', tipo: 'prazo' },
    { ini: '2026-03-09', fim: '2026-03-09', titulo: 'Início das aulas do 1º semestre, estudantes calouros', tipo: 'letivo' },
    { ini: '2026-03-09', fim: '2026-03-12', titulo: 'Prazo final para o ajuste de matrícula dos veteranos', tipo: 'prazo' },
    { ini: '2026-03-12', fim: '2026-03-14', titulo: 'Inscrição em disciplinas eletivas', tipo: 'prazo' },
    { ini: '2026-03-12', fim: '2026-03-18', titulo: 'Pré-matrícula on-line dos calouros do Vestibular 2026 (excedentes)', tipo: 'prazo' },
    { ini: '2026-03-24', fim: '2026-03-24', titulo: 'Data limite para o trancamento de matrícula', tipo: 'prazo' },

    { ini: '2026-04-02', fim: '2026-04-04', titulo: 'Recesso', tipo: 'feriado' },
    { ini: '2026-04-06', fim: '2026-04-10', titulo: 'Inscrições para Reopção 2-2026', tipo: 'prazo' },
    { ini: '2026-04-20', fim: '2026-04-21', titulo: 'Recesso / Feriado', tipo: 'feriado' },

    { ini: '2026-05-01', fim: '2026-05-02', titulo: 'Feriado / Recesso', tipo: 'feriado' },

    { ini: '2026-06-04', fim: '2026-06-06', titulo: 'Ponto facultativo / Recesso', tipo: 'feriado' },
    { ini: '2026-06-08', fim: '2026-06-12', titulo: 'Inscrição para transferência e obtenção de novo título 2-2026', tipo: 'prazo' },

    { ini: '2026-07-14', fim: '2026-07-14', titulo: 'Término das aulas do 1º semestre letivo', tipo: 'letivo' },
    { ini: '2026-07-15', fim: '2026-07-17', titulo: 'Exame especial / Complementação de carga horária', tipo: 'prazo' },
    { ini: '2026-07-18', fim: '2026-07-18', titulo: 'Término do 1º semestre letivo, fechamento do Lyceum', tipo: 'letivo' },
    { ini: '2026-07-27', fim: '2026-07-31', titulo: 'Renovação de matrícula on-line dos veteranos', tipo: 'prazo' },

    { ini: '2026-08-01', fim: '2026-08-01', titulo: 'Início do 2º semestre letivo de 2026', tipo: 'letivo' },
    { ini: '2026-08-03', fim: '2026-08-03', titulo: 'Início das aulas do 2º semestre letivo de 2026', tipo: 'letivo' },
    { ini: '2026-08-03', fim: '2026-08-07', titulo: 'Ajuste de matrícula para o 2º semestre letivo', tipo: 'prazo' },
    { ini: '2026-08-17', fim: '2026-08-19', titulo: 'Inscrição em disciplinas eletivas', tipo: 'prazo' },
    { ini: '2026-08-31', fim: '2026-08-31', titulo: 'Início da inscrição para Reopção 1-2027', tipo: 'prazo' },

    { ini: '2026-09-01', fim: '2026-09-04', titulo: 'Prazo final da inscrição para Reopção 1-2027', tipo: 'prazo' },
    { ini: '2026-09-07', fim: '2026-09-07', titulo: 'Independência do Brasil, feriado', tipo: 'feriado' },

    { ini: '2026-10-12', fim: '2026-10-12', titulo: 'Feriado', tipo: 'feriado' },
    { ini: '2026-10-12', fim: '2026-10-17', titulo: 'Recesso', tipo: 'feriado' },
    { ini: '2026-10-15', fim: '2026-10-15', titulo: 'Dia do/a Professor/a', tipo: 'feriado' },
    { ini: '2026-10-30', fim: '2026-10-31', titulo: 'Dia do/a Servidor/a Público/a, feriado e recesso', tipo: 'feriado' },

    { ini: '2026-11-02', fim: '2026-11-02', titulo: 'Feriado', tipo: 'feriado' },
    { ini: '2026-11-09', fim: '2026-11-13', titulo: 'Inscrição para transferência e obtenção de novo título 1-2027', tipo: 'prazo' },
    { ini: '2026-11-11', fim: '2026-11-12', titulo: 'Seminário de Pesquisa e Extensão 2026', tipo: 'letivo' },
    { ini: '2026-11-15', fim: '2026-11-15', titulo: 'Proclamação da República, feriado', tipo: 'feriado' },
    { ini: '2026-11-20', fim: '2026-11-21', titulo: 'Dia Nacional de Zumbi e da Consciência Negra, feriado e recesso', tipo: 'feriado' },

    { ini: '2026-12-12', fim: '2026-12-12', titulo: 'Término das aulas do 2º semestre letivo', tipo: 'letivo' },
    { ini: '2026-12-14', fim: '2026-12-17', titulo: 'Exame especial / Complementação de carga horária', tipo: 'prazo' },
    { ini: '2026-12-18', fim: '2026-12-18', titulo: 'Término do 2º semestre letivo, fechamento do Lyceum', tipo: 'letivo' },
    { ini: '2026-12-24', fim: '2026-12-25', titulo: 'Natal, feriado', tipo: 'feriado' },
    { ini: '2026-12-31', fim: '2026-12-31', titulo: 'Recesso', tipo: 'feriado' }
  ]
};
