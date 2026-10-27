/* ═══════════════════════════════════════════════════════
   DADOS · Calendário acadêmico
   ───────────────────────────────────────────────────────
   Fonte: Resolução COEPE/UEMG nº 530, de 11 de dezembro de 2025, e o
   calendário atualizado da Unidade Guanhães (recebido em 21/10/2026, com
   as suspensões do Ofício Circular UEMG/PROGRAD nº 1/2026, o feriado
   municipal e as datas do TCC e das provas finais de Direito).
   Este calendário é informativo; as datas oficiais estão na Resolução.

   curto: (opcional) nome breve para a contagem do topo da página
   inicial, quando o título é longo.
   marca: (opcional) põe um símbolo ao lado do evento: 'seminario' (o P&e
   do 28º Seminário) ou 'da' (o brasão do Diretório Acadêmico).

   tipo: 'letivo'  → início/fim de período e eventos acadêmicos
         'prazo'   → matrículas, inscrições, exames, trancamento
         'feriado' → feriados e recessos

   Datas no formato AAAA-MM-DD. Evento de um dia só: fim = ini.
   ═══════════════════════════════════════════════════════ */

window.DADOS_CALENDARIO = {
  ano: 2026,
  atualizadoEm: '2026-10-21',
  resolucao: 'Resolução COEPE/UEMG nº 530, de 11 de dezembro de 2025, e calendário da Unidade Guanhães',
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
    { ini: '2026-10-23', fim: '2026-10-23', titulo: 'Suspensão das atividades de ensino (Ofício Circular UEMG/PROGRAD nº 1/2026)', tipo: 'feriado', curto: 'Suspensão das atividades de ensino' },
    { ini: '2026-10-23', fim: '2026-11-16', titulo: 'Inscrições no PEAES Veteranos 2027, pelo Sistema PEAES (até 23h59 do último dia)', tipo: 'prazo', curto: 'Inscrições no PEAES Veteranos 2027' },
    { ini: '2026-10-23', fim: '2026-11-09', titulo: 'Inscrições no Estágio Institucional da UEMG 2027, pelo formulário do edital (até 23h30 do último dia)', tipo: 'prazo', curto: 'Inscrições no Estágio Institucional' },
    { ini: '2026-10-25', fim: '2026-10-25', titulo: 'Aniversário de Guanhães/MG, feriado municipal', tipo: 'feriado' },
    { ini: '2026-10-26', fim: '2026-10-26', titulo: 'Suspensão das atividades de ensino (Ofício Circular UEMG/PROGRAD nº 1/2026)', tipo: 'feriado', curto: 'Suspensão das atividades de ensino' },
    { ini: '2026-10-28', fim: '2026-10-28', titulo: 'Assembleia Geral do Diretório Acadêmico: votação do Estatuto Social, às 19h, no Auditório', tipo: 'letivo', curto: 'Assembleia Geral do DA', marca: 'da' },
    { ini: '2026-10-30', fim: '2026-10-31', titulo: 'Dia do/a Servidor/a Público/a, feriado e recesso', tipo: 'feriado' },

    { ini: '2026-11-02', fim: '2026-11-02', titulo: 'Feriado', tipo: 'feriado' },
    { ini: '2026-11-09', fim: '2026-11-13', titulo: 'Inscrição para transferência e obtenção de novo título 1-2027', tipo: 'prazo' },
    { ini: '2026-11-11', fim: '2026-11-11', titulo: 'Estágio Institucional: lista das inscrições', tipo: 'prazo', curto: 'Estágio: lista das inscrições' },
    { ini: '2026-11-18', fim: '2026-11-18', titulo: 'Estágio Institucional: convocação para a prova, pelo e-mail institucional', tipo: 'prazo', curto: 'Estágio: convocação para a prova' },
    { ini: '2026-11-09', fim: '2026-11-09', titulo: 'Abertura da Semana de Pesquisa e Extensão da UEMG Guanhães 2026', tipo: 'letivo', curto: 'Abertura da Semana de Pesquisa e Extensão', marca: 'seminario' },
    { ini: '2026-11-10', fim: '2026-11-12', titulo: 'Seminário de Pesquisa e Extensão 2026', tipo: 'letivo', marca: 'seminario' },
    { ini: '2026-11-13', fim: '2026-11-13', titulo: 'Encerramento da Semana de Pesquisa e Extensão da UEMG Guanhães 2026', tipo: 'letivo', curto: 'Encerramento da Semana de Pesquisa e Extensão', marca: 'seminario' },
    { ini: '2026-11-13', fim: '2026-11-13', titulo: '1ª Mostra de Profissões da UEMG Guanhães, a partir das 13h', tipo: 'letivo', curto: '1ª Mostra de Profissões', marca: 'da' },
    { ini: '2026-11-15', fim: '2026-11-15', titulo: 'Proclamação da República, feriado', tipo: 'feriado' },
    { ini: '2026-11-19', fim: '2026-11-19', titulo: 'Data-limite para entregar ao orientador o trabalho para revisão final do TCC de Direito', tipo: 'prazo', curto: 'Entrega do TCC ao orientador (Direito)' },
    { ini: '2026-11-19', fim: '2026-11-19', titulo: 'PEAES Veteranos 2027: lista das inscrições recebidas', tipo: 'prazo', curto: 'PEAES: lista das inscrições' },
    { ini: '2026-11-20', fim: '2026-11-21', titulo: 'Dia Nacional de Zumbi e da Consciência Negra, feriado e recesso', tipo: 'feriado' },
    { ini: '2026-11-23', fim: '2026-11-24', titulo: 'PEAES Veteranos 2027: recurso contra a lista de inscrições', tipo: 'prazo', curto: 'PEAES: recurso das inscrições' },
    { ini: '2026-11-23', fim: '2026-11-27', titulo: 'Estágio Institucional: prova escrita, no dia e horário marcados pela Unidade', tipo: 'prazo', curto: 'Estágio: prova escrita' },
    { ini: '2026-11-30', fim: '2026-12-11', titulo: 'Provas finais do curso de Direito', tipo: 'prazo' },
    { ini: '2026-12-04', fim: '2026-12-04', titulo: 'Data-limite para entregar na secretaria a versão para a banca do TCC de Direito', tipo: 'prazo', curto: 'Entrega do TCC na secretaria (Direito)' },
    { ini: '2026-12-07', fim: '2026-12-11', titulo: 'Bancas de defesa do TCC de Direito', tipo: 'prazo' },
    { ini: '2026-12-04', fim: '2026-12-04', titulo: 'Estágio Institucional: resultado preliminar', tipo: 'prazo', curto: 'Estágio: resultado preliminar' },

    { ini: '2026-12-09', fim: '2026-12-09', titulo: 'PEAES Veteranos 2027: resultado preliminar', tipo: 'prazo', curto: 'PEAES: resultado preliminar' },
    { ini: '2026-12-10', fim: '2026-12-11', titulo: 'PEAES Veteranos 2027: recurso contra o resultado preliminar', tipo: 'prazo', curto: 'PEAES: recurso do resultado' },
    { ini: '2026-12-12', fim: '2026-12-12', titulo: 'Término das aulas do 2º semestre letivo', tipo: 'letivo' },
    { ini: '2026-12-14', fim: '2026-12-14', titulo: 'Estágio Institucional: resultado final', tipo: 'prazo', curto: 'Estágio: resultado final' },
    { ini: '2026-12-14', fim: '2026-12-17', titulo: 'Exame especial / Complementação de carga horária', tipo: 'prazo' },
    { ini: '2026-12-18', fim: '2026-12-18', titulo: 'Término do 2º semestre letivo, fechamento do Lyceum', tipo: 'letivo' },
    { ini: '2026-12-18', fim: '2026-12-18', titulo: 'PEAES Veteranos 2027: resultado final', tipo: 'prazo', curto: 'PEAES: resultado final' },
    { ini: '2026-12-24', fim: '2026-12-25', titulo: 'Natal, feriado', tipo: 'feriado' },
    { ini: '2026-12-31', fim: '2026-12-31', titulo: 'Recesso', tipo: 'feriado' }
  ]
};
