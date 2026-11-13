/* ═══════════════════════════════════════════════════════
   DADOS · Calendário acadêmico
   ───────────────────────────────────────────────────────
   Fonte: Resolução COEPE/UEMG nº 530, de 11 de dezembro de 2025, e o
   calendário atualizado da Unidade Guanhães (recebido em 21/10/2026, com
   as suspensões do Ofício Circular UEMG/PROGRAD nº 1/2026, o feriado
   municipal e as datas do TCC e das provas finais de Direito).
   Este calendário é informativo; as datas oficiais estão na Resolução.

   2027 (desde 13/11/2026): Resolução COEPE/UEMG nº 582, de 05 de novembro
   de 2026, só com as datas gerais da UEMG (a reoferta de disciplinas dos
   cursos a distância, da UAB, ficou de fora: não vale para Guanhães).
   Os eventos dos dois anos ficam na mesma lista `eventos`; `anos` diz quais
   anos a página do calendário oferece no seletor, e `resolucoes` a fonte de
   cada um. Em janeiro de 2027: passar `ano` para 2027 e, quando quiser,
   apagar os eventos de 2026.

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
  anos: [2026, 2027],
  atualizadoEm: '2026-11-13',
  resolucao: 'Resolução COEPE/UEMG nº 530, de 11 de dezembro de 2025, e calendário da Unidade Guanhães',
  resolucoes: {
    2026: 'Resolução COEPE/UEMG nº 530, de 11 de dezembro de 2025, e calendário da Unidade Guanhães',
    2027: 'Resolução COEPE/UEMG nº 582, de 05 de novembro de 2026'
  },
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
    { ini: '2026-10-29', fim: '2026-11-11', titulo: 'Adesão ao UEMG + Permanência 2026 (R$ 500 para quem já teve PEAES deferido), pelo formulário do edital', tipo: 'prazo', curto: 'Adesão ao UEMG + Permanência' },
    { ini: '2026-10-25', fim: '2026-10-25', titulo: 'Aniversário de Guanhães/MG, feriado municipal', tipo: 'feriado' },
    { ini: '2026-10-26', fim: '2026-10-26', titulo: 'Suspensão das atividades de ensino (Ofício Circular UEMG/PROGRAD nº 1/2026)', tipo: 'feriado', curto: 'Suspensão das atividades de ensino' },
    { ini: '2026-10-28', fim: '2026-10-28', titulo: 'Assembleia Geral do Diretório Acadêmico: votação do Estatuto Social, às 19h, no Auditório', tipo: 'letivo', curto: 'Assembleia Geral do DA', marca: 'da' },
    { ini: '2026-10-30', fim: '2026-10-31', titulo: 'Dia do/a Servidor/a Público/a, feriado e recesso', tipo: 'feriado' },

    { ini: '2026-11-02', fim: '2026-11-02', titulo: 'Feriado', tipo: 'feriado' },
    { ini: '2026-11-06', fim: '2026-11-06', titulo: 'V Conecta Mente: Procrastinação Acadêmica, webinário ao vivo pela TV UEMG, das 17h às 18h30', tipo: 'letivo', curto: 'V Conecta Mente (webinário, 17h)' },
    { ini: '2026-11-09', fim: '2026-11-13', titulo: 'Inscrição para transferência e obtenção de novo título 2027.1, pelo formulário do edital (até as 17h do último dia)', tipo: 'prazo', curto: 'Transferência e novo título: inscrição' },
    { ini: '2026-11-12', fim: '2026-11-12', titulo: 'UEMG + Permanência: relação das inscrições recebidas', tipo: 'prazo', curto: 'UEMG + Permanência: inscrições recebidas' },
    { ini: '2026-11-11', fim: '2026-11-11', titulo: 'Estágio Institucional: lista das inscrições', tipo: 'prazo', curto: 'Estágio: lista das inscrições' },
    { ini: '2026-11-18', fim: '2026-11-18', titulo: 'Aula magna com Djonga, às 10h, no Ginásio Poliesportivo de Guanhães (só para quem teve a vaga confirmada)', tipo: 'letivo', curto: 'Aula magna com Djonga' },
    { ini: '2026-11-18', fim: '2026-11-18', titulo: 'Estágio Institucional: convocação para a prova, pelo e-mail institucional', tipo: 'prazo', curto: 'Estágio: convocação para a prova' },
    { ini: '2026-11-09', fim: '2026-11-09', titulo: 'Abertura da Semana de Pesquisa e Extensão da UEMG Guanhães 2026', tipo: 'letivo', curto: 'Abertura da Semana de Pesquisa e Extensão', marca: 'seminario' },
    { ini: '2026-11-10', fim: '2026-11-12', titulo: 'Seminário de Pesquisa e Extensão 2026', tipo: 'letivo', marca: 'seminario' },
    { ini: '2026-11-13', fim: '2026-11-13', titulo: 'Encerramento da Semana de Pesquisa e Extensão da UEMG Guanhães 2026', tipo: 'letivo', curto: 'Encerramento da Semana de Pesquisa e Extensão', marca: 'seminario' },
    { ini: '2026-11-13', fim: '2026-11-13', titulo: '1ª Mostra de Profissões da UEMG Guanhães, a partir das 13h', tipo: 'letivo', curto: '1ª Mostra de Profissões', marca: 'da' },
    { ini: '2026-11-15', fim: '2026-11-15', titulo: 'Proclamação da República, feriado', tipo: 'feriado' },
    { ini: '2026-11-16', fim: '2026-11-23', titulo: 'Estágio no MPMG para pós-graduação em Direito: inscrições pelo formulário do edital', tipo: 'prazo', curto: 'Estágio MPMG (pós): inscrições' },
    { ini: '2026-11-19', fim: '2026-11-19', titulo: 'Data-limite para entregar ao orientador o trabalho para revisão final do TCC de Direito', tipo: 'prazo', curto: 'Entrega do TCC ao orientador (Direito)' },
    { ini: '2026-11-19', fim: '2026-11-19', titulo: 'UEMG + Permanência: resultado preliminar', tipo: 'prazo', curto: 'UEMG + Permanência: resultado preliminar' },
    { ini: '2026-11-19', fim: '2026-11-19', titulo: 'PEAES Veteranos 2027: lista das inscrições recebidas', tipo: 'prazo', curto: 'PEAES: lista das inscrições' },
    { ini: '2026-11-20', fim: '2026-11-21', titulo: 'Dia Nacional de Zumbi e da Consciência Negra, feriado e recesso', tipo: 'feriado' },
    { ini: '2026-11-23', fim: '2026-11-24', titulo: 'PEAES Veteranos 2027: recurso contra a lista de inscrições', tipo: 'prazo', curto: 'PEAES: recurso das inscrições' },
    { ini: '2026-11-23', fim: '2026-11-24', titulo: 'UEMG + Permanência: recurso contra o resultado preliminar', tipo: 'prazo', curto: 'UEMG + Permanência: recurso' },
    { ini: '2026-11-26', fim: '2026-11-26', titulo: 'Estágio no MPMG para pós-graduação em Direito: prova escrita, às 9h, na Rua Barão do Rio Branco, 278, Centro', tipo: 'prazo', curto: 'Estágio MPMG (pós): prova' },
    { ini: '2026-11-27', fim: '2026-11-27', titulo: 'UEMG + Permanência: resultado final', tipo: 'prazo', curto: 'UEMG + Permanência: resultado final' },
    { ini: '2026-11-23', fim: '2026-11-27', titulo: 'Estágio Institucional: prova escrita, no dia e horário marcados pela Unidade', tipo: 'prazo', curto: 'Estágio: prova escrita' },
    { ini: '2026-11-30', fim: '2026-12-11', titulo: 'Provas finais do curso de Direito', tipo: 'prazo' },
    { ini: '2026-12-04', fim: '2026-12-04', titulo: 'Data-limite para entregar na secretaria a versão para a banca do TCC de Direito', tipo: 'prazo', curto: 'Entrega do TCC na secretaria (Direito)' },
    { ini: '2026-12-07', fim: '2026-12-11', titulo: 'Bancas de defesa do TCC de Direito', tipo: 'prazo' },
    { ini: '2026-12-03', fim: '2026-12-03', titulo: 'Transferência e novo título 2027.1: resultado preliminar', tipo: 'prazo', curto: 'Transferência: resultado preliminar' },
    { ini: '2026-12-04', fim: '2026-12-04', titulo: 'Estágio Institucional: resultado preliminar', tipo: 'prazo', curto: 'Estágio: resultado preliminar' },

    { ini: '2026-12-09', fim: '2026-12-09', titulo: 'PEAES Veteranos 2027: resultado preliminar', tipo: 'prazo', curto: 'PEAES: resultado preliminar' },
    { ini: '2026-12-10', fim: '2026-12-11', titulo: 'PEAES Veteranos 2027: recurso contra o resultado preliminar', tipo: 'prazo', curto: 'PEAES: recurso do resultado' },
    { ini: '2026-12-12', fim: '2026-12-12', titulo: 'Término das aulas do 2º semestre letivo', tipo: 'letivo' },
    { ini: '2026-12-11', fim: '2026-12-11', titulo: 'Transferência e novo título 2027.1: resultado final', tipo: 'prazo', curto: 'Transferência: resultado final' },
    { ini: '2026-12-14', fim: '2026-12-18', titulo: 'Transferência e novo título 2027.1: matrícula presencial dos classificados na Secretaria Acadêmica', tipo: 'prazo', curto: 'Transferência: matrícula' },
    { ini: '2026-12-14', fim: '2026-12-14', titulo: 'Estágio Institucional: resultado final', tipo: 'prazo', curto: 'Estágio: resultado final' },
    { ini: '2026-12-14', fim: '2026-12-17', titulo: 'Exame especial / Complementação de carga horária', tipo: 'prazo' },
    { ini: '2026-12-18', fim: '2026-12-18', titulo: 'Término do 2º semestre letivo, fechamento do Lyceum', tipo: 'letivo' },
    { ini: '2026-12-18', fim: '2026-12-18', titulo: 'PEAES Veteranos 2027: resultado final', tipo: 'prazo', curto: 'PEAES: resultado final' },
    { ini: '2026-12-24', fim: '2026-12-25', titulo: 'Natal, feriado', tipo: 'feriado' },
    { ini: '2026-12-31', fim: '2026-12-31', titulo: 'Recesso', tipo: 'feriado' },

    /* ── 2027 · Resolução COEPE/UEMG nº 582, de 05/11/2026 ── */
    { ini: '2027-01-01', fim: '2027-01-31', titulo: 'Feriado / Recesso', tipo: 'feriado' },
    { ini: '2027-01-01', fim: '2027-01-31', titulo: 'SISU (data a definir)', tipo: 'prazo', semData: true },

    { ini: '2027-02-01', fim: '2027-02-01', titulo: 'Início do 1º semestre letivo de 2027', tipo: 'letivo' },
    { ini: '2027-02-01', fim: '2027-02-05', titulo: 'Renovação de matrícula on-line dos veteranos (1º semestre de 2027)', tipo: 'prazo', curto: 'Renovação de matrícula 2027/1' },
    { ini: '2027-02-01', fim: '2027-02-12', titulo: 'Atividades de Integração Acadêmica', tipo: 'prazo' },
    { ini: '2027-02-08', fim: '2027-02-10', titulo: 'Carnaval', tipo: 'feriado' },
    { ini: '2027-02-15', fim: '2027-02-19', titulo: 'Ajuste de matrícula, rematrícula (reingresso), trancamento e dispensa de disciplinas', tipo: 'prazo', curto: 'Ajuste de matrícula e trancamento' },
    { ini: '2027-02-25', fim: '2027-02-25', titulo: 'Início da matrícula on-line dos calouros do Vestibular 2027 (Chamada Regular)', tipo: 'prazo', curto: 'Matrícula dos calouros 2027' },

    { ini: '2027-03-01', fim: '2027-03-01', titulo: 'Início das aulas do 1º semestre de 2027, estudantes veteranos', tipo: 'letivo', curto: 'Início das aulas (veteranos)' },
    { ini: '2027-03-03', fim: '2027-03-03', titulo: 'Prazo final da matrícula on-line dos calouros do Vestibular 2027 (Chamada Regular)', tipo: 'prazo', curto: 'Fim da matrícula dos calouros' },
    { ini: '2027-03-08', fim: '2027-03-08', titulo: 'Início das aulas do 1º semestre de 2027, estudantes calouros', tipo: 'letivo', curto: 'Início das aulas (calouros)' },
    { ini: '2027-03-12', fim: '2027-03-17', titulo: 'Pré-matrícula on-line dos calouros do Vestibular 2027 (excedentes)', tipo: 'prazo' },
    { ini: '2027-03-15', fim: '2027-03-17', titulo: 'Inscrição em disciplinas eletivas', tipo: 'prazo' },
    { ini: '2027-03-25', fim: '2027-03-27', titulo: 'Recesso / Feriado da Paixão de Cristo', tipo: 'feriado' },

    { ini: '2027-04-05', fim: '2027-04-09', titulo: 'Inscrições para Reopção 2-2027', tipo: 'prazo' },
    { ini: '2027-04-21', fim: '2027-04-21', titulo: 'Tiradentes, feriado', tipo: 'feriado' },

    { ini: '2027-05-01', fim: '2027-05-01', titulo: 'Dia do Trabalho, feriado', tipo: 'feriado' },
    { ini: '2027-05-07', fim: '2027-05-11', titulo: 'Inscrição para transferência e obtenção de novo título 2-2027', tipo: 'prazo' },
    { ini: '2027-05-27', fim: '2027-05-29', titulo: 'Corpus Christi / Recesso', tipo: 'feriado' },

    { ini: '2027-06-24', fim: '2027-06-24', titulo: 'Recesso: jogo do Brasil na Copa do Mundo (Lei nº 15.421/2026)', tipo: 'feriado', curto: 'Recesso: jogo do Brasil na Copa' },
    { ini: '2027-06-29', fim: '2027-06-29', titulo: 'Recesso: jogo do Brasil na Copa do Mundo (Lei nº 15.421/2026)', tipo: 'feriado', curto: 'Recesso: jogo do Brasil na Copa' },

    { ini: '2027-07-04', fim: '2027-07-04', titulo: 'Recesso: jogo do Brasil na Copa do Mundo (Lei nº 15.421/2026)', tipo: 'feriado', curto: 'Recesso: jogo do Brasil na Copa' },
    { ini: '2027-07-10', fim: '2027-07-10', titulo: 'Término das aulas do 1º semestre letivo de 2027', tipo: 'letivo', curto: 'Fim das aulas do 1º semestre' },
    { ini: '2027-07-12', fim: '2027-07-17', titulo: 'Exame especial / Complementação de carga horária', tipo: 'prazo' },
    { ini: '2027-07-19', fim: '2027-07-19', titulo: 'Fechamento dos registros no Lyceum', tipo: 'letivo' },
    { ini: '2027-07-20', fim: '2027-07-31', titulo: 'Recesso de aulas', tipo: 'feriado' },
    { ini: '2027-07-27', fim: '2027-07-31', titulo: 'Renovação de matrícula on-line dos veteranos (2º semestre de 2027)', tipo: 'prazo', curto: 'Renovação de matrícula 2027/2' },
    { ini: '2027-07-31', fim: '2027-07-31', titulo: 'Término do 1º semestre letivo de 2027', tipo: 'letivo' },

    { ini: '2027-08-02', fim: '2027-08-02', titulo: 'Início do 2º semestre letivo e das aulas de 2027', tipo: 'letivo', curto: 'Início do 2º semestre de 2027' },
    { ini: '2027-08-02', fim: '2027-08-06', titulo: 'Ajuste de matrícula, rematrícula (reingresso), trancamento e dispensa de disciplinas', tipo: 'prazo', curto: 'Ajuste de matrícula e trancamento' },
    { ini: '2027-08-16', fim: '2027-08-18', titulo: 'Inscrição em disciplinas eletivas', tipo: 'prazo' },
    { ini: '2027-08-31', fim: '2027-09-03', titulo: 'Inscrição para Reopção 1-2028', tipo: 'prazo' },

    { ini: '2027-09-06', fim: '2027-09-07', titulo: 'Recesso / Feriado da Independência do Brasil', tipo: 'feriado' },

    { ini: '2027-10-11', fim: '2027-10-16', titulo: 'Recesso', tipo: 'feriado' },
    { ini: '2027-10-12', fim: '2027-10-12', titulo: 'Nossa Senhora Aparecida, feriado', tipo: 'feriado' },
    { ini: '2027-10-15', fim: '2027-10-15', titulo: 'Dia do/a Professor/a', tipo: 'feriado' },
    { ini: '2027-10-28', fim: '2027-10-28', titulo: 'Dia do/a Servidor/a Público/a, feriado', tipo: 'feriado' },

    { ini: '2027-11-01', fim: '2027-11-02', titulo: 'Recesso / Feriado de Finados', tipo: 'feriado' },
    { ini: '2027-11-08', fim: '2027-11-12', titulo: 'Inscrição para transferência e obtenção de novo título 1-2028', tipo: 'prazo' },
    { ini: '2027-11-09', fim: '2027-11-11', titulo: 'Seminário de Pesquisa e Extensão 2027', tipo: 'letivo' },
    { ini: '2027-11-15', fim: '2027-11-15', titulo: 'Proclamação da República, feriado', tipo: 'feriado' },
    { ini: '2027-11-20', fim: '2027-11-20', titulo: 'Dia Nacional de Zumbi e da Consciência Negra, feriado', tipo: 'feriado' },

    { ini: '2027-12-11', fim: '2027-12-11', titulo: 'Término das aulas do 2º semestre letivo de 2027', tipo: 'letivo', curto: 'Fim das aulas do 2º semestre' },
    { ini: '2027-12-11', fim: '2027-12-17', titulo: 'Exame especial / Complementação de carga horária', tipo: 'prazo' },
    { ini: '2027-12-18', fim: '2027-12-18', titulo: 'Fechamento dos registros no Lyceum', tipo: 'letivo' },
    { ini: '2027-12-24', fim: '2027-12-25', titulo: 'Natal, feriado', tipo: 'feriado' },
    { ini: '2027-12-30', fim: '2027-12-30', titulo: 'Recesso e término do 2º semestre letivo de 2027', tipo: 'letivo' }
  ]
};
