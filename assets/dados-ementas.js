/* ═══════════════════════════════════════════════════════
   DADOS · Ementas e bibliografias das disciplinas
   ───────────────────────────────────────────────────────
   Transcrito dos ementários dos dois Projetos Pedagógicos:

   · Direito: PPC aprovado pela Resolução COEPE/UEMG nº 458,
     de 06/03/2024, seção 4.3 "Ementas e bibliografias".
   · Engenharia Civil: PPC da Unidade Guanhães, 2024,
     seções 5.1.5 "Ementário das Disciplinas Obrigatórias"
     e "Ementário das Disciplinas Optativas".

   A chave de cada disciplina é o código dela em
   assets/dados-curso.js. As optativas usam "OPT:" mais o nome.

   REGRA DE OURO, a mesma de dados-curso.js: nada aqui é chute.
   Onde o PPC não traz bibliografia, o campo vem vazio, e a
   página simplesmente não mostra a seção.

   Usado por: matriz.html
   ═══════════════════════════════════════════════════════ */

window.DADOS_EMENTAS = {
  atualizadoEm: '2026-08-12',
  fonte: 'Ementários dos PPCs de Direito (Resolução COEPE/UEMG nº 458/2024) e de Engenharia Civil (Unidade Guanhães, 2024)',

  direito: {
    "CP": {
      ementa: "Poder, governo, Estado e sociedade. Ascensão, formação e crise do Estado. Estado Moderno e Contemporâneo. Evolução histórica do pensamento político. Democracia e as tradições republicana e liberal. Teorias clássicas e contemporâneas da política.",
      basica: [
        "DALLARI, Dalmo de Abreu. Elementos de teoria geral do estado. 33. ed. São Paulo: Saraiva, 2016. 304 p. ISBN 9788502638617.",
        "MALUF, Sahid. Teoria geral do Estado. 35. ed. São Paulo: Saraiva, 2018. ISBN 9788553610020. Recurso online.",
        "MELO, Débora Sinflorio da Silva. Ciência política e teoria geral do estado. Porto Alegre:",
        "SAGAH, 2017. ISBN 9788595021891. Recurso online."
      ],
      complementar: [
        "MACHIAVELLI, Niccolò. O príncipe. 4. ed. rev. São Paulo: WMF Martins Fontes, 2010.xxxii, 197 p. (Coleção Clássicos WMF). ISBN 9788578272555.",
        "MIRANDA, Jorge. Teoria do estado e da constituição. Rio de Janeiro: Forense, 2003. viii, 546 p. ISBN 8530916794.",
        "MONTESQUIEU, Charles de Secondat baron de. Espírito das leis. 2. ed. 2. tir. São Paulo: Martins Fontes, 2000. 851 p. ISBN 8533605536. PLATÃO. A república: [ou, Sobre a justiça, diálogo político]. 2. ed. São Paulo: Martins Fontes, [2014]. 419 p. (Paideia). ISBN 9788580631333.",
        "ROUSSEAU, Jean-Jacques. O contrato social: princípios de direito político. Rio de Janeiro: Ediouro, 2002. 145 p. (A obra-prima de cada autor; 46). ISBN 8500512474."
      ]
    },
    "CRIM": {
      ementa: "Desenvolvimento histórico, político e metodológico da criminologia. Teorias clássicase contemporâneas da criminologia. Criminalidade, criminalização e vitimização. Penas e sistemas penitenciários. Políticas criminais. Segurança pública, cidadania e direitos humanos.",
      basica: [
        "BARATTA, Alessandro. Criminologia crítica e crítica do direito penal: introdução à sociologia do direito penal. 3. ed. Rio de Janeiro: Revan, [2002]. 254 p. (Coleção Pensamento Criminológico; 1). ISBN 8535301887.",
        "GOMES, Luiz Flávio. Criminologia. 4. ed., rev., atual.e ampl. São Paulo: Revista dos Tribunais, 2002. 683 p. ISBN 852032309",
        "MAÍLLO, Alfonso Serrano. Criminologia. 4. ed. Rio de Janeiro: Forense, 2019. ISBN 9788530987008. Recurso online."
      ],
      complementar: [
        "BECCARIA, Cesare marchese di. Dos delitos e das penas. 2. ed. São Paulo: Edipro, 2015. 126p. ISBN 9788572839259.",
        "CELIS, Jacqueline. Penas perdidas: o sistema penal emquestão. Rio de Janeiro: Luam, 1993. 180 p. SÁ, Alvino Augusto de. Criminologia clínica e execução penal proposta de um modelo deterceira geração. 2. ed. São Paulo: Saraiva, 2014. ISBN 9788502230514. Recurso online.",
        "WACQUANT, Loic J. D. As prisões da miséria. Rio de Janeiro: J. Zahar, 2001. 174 p. ISBN 8571105960.",
        "WACQUANT, Loic J. D. Punir os pobres: a nova gestão da miséria nos Estados Unidos. 2.ed. Rio de Janeiro: Revan, 2003. 168 p. ISBN 8535302182."
      ]
    },
    "DAB": {
      ementa: "Crise ambiental e conferências internacionais sobre meio ambiente. Desenvolvimento sustentável. Conceito, objeto e histórico. Fontes. Princípios. O meio ambiente na Constituição de 1988. Sistema e Política Nacional do Meio Ambiente. Responsabilidade civil. Sistema Nacional de Unidades de Conservação. Tutela civil, processual, penal e administrativa do meio ambiente. Direito Ambiental Internacional.",
      basica: [
        "MILARÉ, Édis. Direito do ambiente. 11. ed., rev., atual. e ampl. São Paulo: Revista dos Tribunais Ltda, 2018. 1824 p. ISBN 9788553210480.",
        "RODRIGUES, Marcelo Abelha. Direito ambiental. 8. ed. São Paulo: Saraiva Jur, 2021. ISBN 9786555595697. Recurso online.",
        "SARLET, Ingo Wolfgang. Curso de direito ambiental. 2. ed. Rio de Janeiro: Forense, 2021.ISBN 9786559641161. Recurso online."
      ],
      complementar: [
        "ANTUNES, Paulo de Bessa. Direito ambiental. 20. ed. São Paulo: Atlas, 2019. 1080 p. ISBN 9788597016697",
        "MACHADO, Paulo Affonso Leme. Direito ambiental brasileiro. 24. ed., rev., ampl. e atual.São Paulo: Malheiros, 2016. 1407 p. ISBN 978-85-392-0322-2.",
        "PRADO, Luiz Regis. Direito penal do ambiente crimes ambientais (Lei 9.605/1998). 7. ed.Rio de Janeiro: Forense, 2019. ISBN 9788530986919. Recurso online.",
        "SAMPAIO, José Adércio Leite. Princípios de direito ambiental: na dimensão internacional ecomparada. Belo Horizonte: Del Rey, 2003. ISBN 8573086475.",
        "SILVA, José Afonso da. Direito ambiental constitucional. 4. ed., rev. atual. São Paulo: Malheiros, 2003. 349 p. ISBN 8574203815."
      ]
    },
    "DAD1": {
      ementa: "Conceito, objeto e formação histórica do direito administrativo. Estado de direito e organização administrativa. Princípios de direito administrativo. Concepções de administração pública. Regime jurídico-administrativo. Organização administrativa. Atos e poderes administrativos.",
      basica: [
        "FILHO, José dos Santos. Manual de direito administrativo. 33. ed. rev., atual.e ampl. São Paulo: Atlas, ©2019. liv, 1352 p. ISBN 9788597020076.",
        "PIETRO, Maria Sylvia Zanella. Direito administrativo. 32. ed. rev., atual. e ampl. Rio de Janeiro: Forense, 2019. xxxiv, 1117 p. ISBN 9788530984588.",
        "FILHO, Marçal. Curso de direito administrativo. 13. ed., rev., atual. e ampl. São Paulo: Thomson Reuters Brasil, ©2018. 1423 p. ISBN 9788553210190. Recurso online."
      ],
      complementar: [
        "PAULO, Vicente. Resumo de direito administrativo descomplicado. 3.ed., rev. e atual. Rio de Janeiro: Forense; São Paulo: Método, 2010. xiv, 366 p. ISBN 9788530931650 (broch.).",
        "ALEIXO, Délcio Balestero;",
        "AZEVEDO, Eurico de Andrade. Direito administrativo brasileiro. 29. ed. São Paulo: Malheiros, 2004. 798 p. ISBN 8574205621",
        "MELLO, Celso Antônio Bandeira de;",
        "MELLO, Celso Antônio Bandeira de. Direitoadministrativo e constitucional. São Paulo: Malheiros, 1997. 632 p.",
        "NOHARA, Irene Patrícia. Direito administrativo. 10. ed. São Paulo: Atlas, 2020. ISBN 9788597025262. Recurso online.",
        "SPITZCOVSKY, Celso. Direito administrativo. 3. ed. São Paulo: Saraiva, 2020. ISBN 9788553618477. Recurso online."
      ]
    },
    "DAD2": {
      ementa: "Responsabilidade civil do Estado. Licitações. Contratos administrativos. Prestação dosserviços públicos. Entidades do Terceiro Setor. Processo Administrativo.",
      basica: [
        "FILHO, José dos Santos. Manual de direito administrativo. 33. ed. rev., atual.e ampl. São Paulo: Atlas, ©2019. liv, 1352 p. ISBN 9788597020076.",
        "PIETRO, Maria Sylvia Zanella. Direito administrativo. 32. ed. rev., atual. e ampl. Rio de Janeiro: Forense, 2019. xxxiv, 1117 p. ISBN 9788530984588.",
        "FILHO, Marçal. Curso de direito administrativo. 13. ed., rev., atual. e ampl. São Paulo: Thomson Reuters Brasil, ©2018. 1423 p. ISBN 9788553210190. Recurso online."
      ],
      complementar: [
        "PAULO, Vicente. Resumo de direito administrativo descomplicado. 3.ed., rev. e atual. Rio de Janeiro: Forense; São Paulo: Método, 2010. xiv, 366 p. ISBN 9788530931650 (broch.).",
        "ALEIXO, Délcio Balestero;",
        "AZEVEDO, Eurico de Andrade. Direito administrativo brasileiro. 29. ed. São Paulo: Malheiros, 2004. 798 p. ISBN 8574205621",
        "MELLO, Celso Antônio Bandeira de;",
        "MELLO, Celso Antônio Bandeira de. Direitoadministrativo e constitucional. São Paulo: Malheiros, 1997. 632 p.",
        "NOHARA, Irene Patrícia. Direito administrativo. 10. ed. São Paulo: Atlas, 2020. ISBN 9788597025262. Recurso online.",
        "SPITZCOVSKY, Celso. Direito administrativo. 3. ed. São Paulo: Saraiva, 2020. ISBN 9788553618477. Recurso online."
      ]
    },
    "DAD3": {
      ementa: "Agentes Públicos. Regime Constitucional dos servidores públicos. Lei n° 8.112/1990. Bens Públicos. Intervenção do Estado na Propriedade e na economia. Controle da Administração Pública. Improbidade Administrativa.",
      basica: [
        "FILHO, José dos Santos. Manual de direito administrativo. 33. ed. rev., atual.e ampl. São Paulo: Atlas, ©2019. liv, 1352 p. ISBN 9788597020076.",
        "PIETRO, Maria Sylvia Zanella. Direito administrativo. 32. ed. rev., atual. e ampl. Rio de Janeiro: Forense, 2019. xxxiv, 1117 p. ISBN 9788530984588.",
        "FILHO, Marçal. Curso de direito administrativo. 13. ed., rev., atual. e ampl. São Paulo: Thomson Reuters Brasil, ©2018. 1423 p. ISBN 9788553210190. Recurso online."
      ],
      complementar: [
        "PAULO, Vicente. Resumo de direito administrativo descomplicado. 3.ed., rev. e atual. Rio de Janeiro: Forense; São Paulo: Método, 2010. xiv, 366 p. ISBN 9788530931650 (broch.).",
        "ALEIXO, Délcio Balestero;",
        "AZEVEDO, Eurico de Andrade. Direito administrativo brasileiro. 29. ed. São Paulo: Malheiros, 2004. 798 p. ISBN 8574205621",
        "MELLO, Celso Antônio Bandeira de;",
        "MELLO, Celso Antônio Bandeira de. Direitoadministrativo e constitucional. São Paulo: Malheiros, 1997. 632 p.",
        "NOHARA, Irene Patrícia. Direito administrativo. 10. ed. São Paulo: Atlas, 2020. ISBN 9788597025262. Recurso online.",
        "SPITZCOVSKY, Celso. Direito administrativo. 3. ed. São Paulo: Saraiva, 2020. ISBN 9788553618477. Recurso online."
      ]
    },
    "DCM": {
      ementa: "Conceito, objeto e evolução histórica. Consumidor e Fornecedor. Política Nacional de Proteção ao consumidor. Livre concorrência e proteção ao consumidor. Órgãos responsáveis pela proteção. Crimes contra os consumidores. Ações judiciais para a defesa.",
      basica: [
        "BELMONTE, Cláudio. Proteção contratual do consumidor: conservação e redução donegócio jurídico no Brasil e em Portugal. São Paulo: Revista dos Tribunais, 2002. 201 p.(Biblioteca de direito do consumidor; 21). ISBN 8520322700.",
        "GRINOVER, Ada Pellegrini. Código brasileiro de defesa do consumidor: comentado pelosautores do Anteprojeto. 12. ed. rev., atual. e reform. Rio de Janeiro: Forense, 2019. li, 1351 p.ISBN 9788530982164.",
        "BENJAMIN, Antônio Herman;",
        "MIRAGEM, Bruno. Comentáriosao código de defesa do consumidor. 6. ed. rev., atual. e ampl. São Paulo: Thomson Reuters Brasil, 2019. ISBN 9788553213771."
      ],
      complementar: [
        "LENZA, Pedro (Coord.). Direito do consumidor esquematizado. 7. ed.São Paulo: Saraivajur, 2019. 872 p. ISBN 9788553603404.",
        "MARQUES, Claudia Lima. Contratos no código de defesa do consumidor: o novo regimedas relações contratuais. 8. ed., rev., atual. e ampl. São Paulo: Revista dos Tribunais, 2016. 1596 p. ISBN 9788520366400.",
        "NUNES, Rizzatto. Curso de direito do consumidor. 6. ed. São Paulo: Saraiva, 2011. 912 p.ISBN 9788502105386.",
        "OLIVEIRA, James Eduardo. Código de defesa do consumidor: anotado e comentado, doutrina e jurisprudência. 2. ed. São Paulo: Atlas, 2005. 531 p. ISBN 9788522442232.",
        "NEVES, Daniel Amorim Assumpção. Manual de direito do consumidor: direito material e processual. 8. ed. rev., atual. e ampl. Rio de Janeiro: Forense; São Paulo: Método, 2019 xxii, 792 p. ISBN 9788530984410."
      ]
    },
    "DCO": {
      ementa: "Acesso à justiça. Crise do sistema jurisdicional. Teoria do Conflito. Resolução de conflitos, atividades extensionistas: atendimento à comunidade. Conciliação. Mediação. Arbitragem. Métodos autocompositivos e conflitos. Justiça restaurativa. Gerenciamento de conflitos e Plataformas de Online Dispute Resolution.",
      basica: [
        "LUCHIARI, Valeria Ferioli Lagrasta. Mediação judicial. Rio de Janeiro: Forense, 2012. ISBN 978-85-309-4561-9. Recurso online.",
        "JUNIOR, Luiz Antônio. Arbitragem, mediação, conciliação e negociação. 10.ed. Rio de Janeiro: Forense, 2020. ISBN 9788530990152. Recurso online.",
        "TARTUCE, Fernanda. Mediação nos conflitos civis. 6. ed. Rio de Janeiro: Método, 2020.ISBN 9788530992330. Recurso online."
      ],
      complementar: [
        "GUILHERME, Luiz Fernando do Vale de Almeida. Manual de arbitragem e mediação: conciliação e negociação. 5. ed. São Paulo: Saraiva Jur, 2020. ISBN 9786555591972. Recursoonline.",
        "GARTH, Bryant G. Acesso à justiça. Porto Alegre: Fabris, 1988. 168p.",
        "CARMONA, Carlos Alberto. Arbitragem e processo: um comentário à Lei nº 9.307/96. 3. ed.São Paulo: Atlas, 2012. ISBN 9788522470617. Recurso online.",
        "CASPAR, Rafael Chiari. Conciliação trabalhista: Quando o 'sim' ao acordo é o 'não' à justiça.[S.l]: Conhecimento Livraria e Distribuidora, 2021. ISBN 9786589602149. Recurso online.",
        "TONIN, Mauricio Morais. Arbitragem, mediação e outros métodos de solução de conflitosenvolvendo o poder público. São Paulo: Grupo Almedina, 2019. ISBN 9788584934720. Recurso online."
      ]
    },
    "DCU": {
      ementa: "Antropologia: conceito, objeto e evolução. Teorias antropológicas. Função antropológica do direito. Direitos culturais. Preservação do patrimônio histórico-artístico. Meio ambiente cultural. Bens culturais e interesses difusos. Tratamento constitucional. Tutelas jurisdicional e não jurisdicional. Tombamento. Proteção Internacional do Bem Cultural. Patrimônio cultural e contemporaneidade. Proteção jurídica dos bens culturais digitais.",
      basica: [
        "GEERTZ, Clifford. A interpretação das culturas. Rio de Janeiro:",
        "LTC, c 1989. 213 p(Coleção Antropologia social). ISBN 9788521613336.",
        "NABAIS, Jose Casalta. Direito do patrimônio cultural: legislação. 2. ed. Coimbra: Almedina, 2006. 507 p. ISBN 9724028364.",
        "CUÉLLAR, Javier (Org.). Nossa diversidade criadora: relatório da comissãomundial de cultura e desenvolvimento-UNESCO. Campinas: Papirus, 1997. 416 p."
      ],
      complementar: [
        "GASPARINI, Audrey. Tombamento e direito de construir. Belo Horizonte: Fórum, 2005.112 p. ISBN 8589148920.",
        "MARTINS, José Joaquim Fernandes Oliveira. O crime de dano e o património cultural: (a criminalidade patrimonial e os bens culturais). Lisboa: Livraria Petrony, [2003?]. 487 p. ISBN 9726850967.",
        "NABAIS, Jose Casalta. Introdução ao direito do património cultural. Coimbra: Almedina, 2004. 148 p. ISBN 9724022218.",
        "SILVA, José Afonso da. Ordenação constitucional da cultura. São Paulo: Malheiros, 2001.250 p. ISBN 8574202762.",
        "FILHO, Carlos Frederico Marés de. Bens culturais e sua proteção jurídica. 3. ed.Curitiba: Juruá, 2005. 177 p. ISBN 853621046 X."
      ]
    },
    "DCV1": {
      ementa: "Constitucionalização do direito civil e seus reflexos no direito obrigacional. Relação jurídica obrigacional. Fontes das obrigações. Categorias de obrigações. Classificação das obrigações. Efeitos das obrigações: adimplemento e inadimplemento das obrigações. Teoria do pagamento. Modalidades especiais de pagamento. Inadimplemento obrigacional. Transmissão das obrigações. Tópicos contemporâneos em direito das obrigações: ética e consumo no mundoglobal. Contratos eletrônicos.",
      basica: [
        "GAGLIANO, Pablo Stolze;",
        "FILHO, Rodolfo. Novo curso de direito civil: obrigações. 20. ed. São Paulo: Saraiva, 2019. 424 p. ISBN 9788553603015 (v. 2).",
        "PEREIRA, Caio Mário da Silva. Instituições de direito civil: teoria geral das obrigações. 31.ed. rev. e atual. Rio de Janeiro: Forense, 2019. xvi, 429 p. ISBN 9788530984465 (v. 2).",
        "TEPEDINO, Gustavo. Fundamentos do direito civil, v. 2 obrigações. 2. ed. Rio de Janeiro: Forense, 2020. ISBN 9788530992392. Recurso online."
      ],
      complementar: [
        "DINIZ, Maria Helena. Curso de direito civil brasileiro: teoria geral das obrigações. 22. ed.rev. e atual. São Paulo: Saraiva, 2007. 476 p. ISBN 978-85-020-5928-9 (v.2).",
        "GONÇALVES, Carlos Roberto. Direito civil brasileiro: volume 2: teoria geral das obrigações. 16. ed. São Paulo: Saraiva, 2019. 2. v. ISBN 9788553602728 (volume 2).",
        "COSTA, Judith. A boa-fé no direito privado critérios para a sua aplicação. 2.ed. São Paulo: Saraiva, 2018. ISBN 9788553601622. Recurso online.",
        "MIRAGEM, Bruno. Direito das obrigações. 3. ed. Rio de Janeiro: Forense, 2021. ISBN 9788530994259. Recurso online.",
        "TARTUCE, Flávio. Direito civil, v. 2 direito das obrigações e responsabilidade civil. 16. ed.Rio de Janeiro: Forense, 2021. ISBN 9788530993757. Recurso online."
      ]
    },
    "DCV2": {
      ementa: "Conceito, espécies e pressupostos da responsabilidade civil. Excludentes de responsabilidade e abuso de direito. Teoria geral dos contratos. Função social dos contratos. Estipulação em favor de terceiros. Vícios redibitórios. Evicção. Atos unilaterais de vontade. Contratos Eletrônicos.",
      basica: [
        "FARIAS, Cristiano Chaves de. Novo tratado de responsabilidade civil. 4. ed. São Paulo: Saraiva, 2019. ISBN 9788553612086. Recurso online.",
        "TARTUCE, Flávio. Direito civil: direito das obrigações e responsabilidade civil. 14. ed., rev.atual. e ampl. Rio de Janeiro: Forense, c 2019. xvi, 701 p. ISBN 9788530983550 (v. 2).",
        "TARTUCE, Flávio. Direito civil: teoria geral dos contratos e contratos em espécie. 14. ed. rev., atual. e ampl. Rio de Janeiro: Forense, 2019. xviii, 826 p. ISBN 9788530983567(v. 3)."
      ],
      complementar: [
        "FILHO, Sérgio. Programa de responsabilidade civil. 12. ed. São Paulo: Atlas, 2015. 688 p. ISBN 9788597000757.",
        "GAGLIANO, Pablo Stolze;",
        "FILHO, Rodolfo. Novo curso de direito civil: contratos. 2. ed. rev., ampl. e atual. São Paulo: Saraiva, 2019. 837 p. ISBN 9788553603039 (v.4).",
        "GAGLIANO, Pablo Stolze;",
        "FILHO, Rodolfo. Novo curso de direito civil: responsabilidade civil. 17. ed. São Paulo: Saraiva, 2019. 493 p. ISBN 9788553603022 (v. 3).",
        "GONÇALVES, Carlos Roberto. Direito civil brasileiro: responsabilidade civil. 14. ed. São Paulo: Saraivajur, 2019. 589 p. ISBN 9788553602742 (v. 4).",
        "COSTA, Judith. A boa-fé no direito privado: sistema e tópica no processoobrigacional. 2. tir. São Paulo: Revista dos Tribunais, c 2000. 544 p. ISBN 8520317960."
      ]
    },
    "DCV3": {
      ementa: "Contratos em espécie. Compra e venda. Doação. Empréstimo. Prestação de Serviço. Empreitada. Depósito. Mandato. Comissão. Agência e Distribuição. Corretagem. Transporte. Seguro. Fiança. Transação. Contratos eletrônicos e direito digital. Demais modalidades de contratos em espécie.",
      basica: [
        "GONÇALVES, Carlos Roberto. Direito civil brasileiro: contratos e atos unilaterais. 16. ed.São Paulo: Saraivajur, 2019. 735 p. ISBN 9788553602735 (v.3).",
        "NADER, Paulo. Curso de direito civil: contratos. 9. ed. rev. e atual. Rio de Janeiro: Forense, 2018. xxviii, 682 p. ISBN 9788530979515 (v. 3).",
        "RIZZARDO, Arnaldo. Contratos. 18. ed. rev., atual. e reform. Rio de Janeiro: Forense, 2019.xl, 1410 p. ISBN 9788530985561."
      ],
      complementar: [
        "DINIZ, Maria Helena. Curso de direito civil brasileiro - v. 7: responsabilidade civil. 23. ed.reformulada. São Paulo: Saraiva, 2009. 702 p. ISBN 9788502017979 (broch.: v.7).",
        "GAGLIANO, Pablo Stolze;",
        "FILHO, Rodolfo. Novo curso de direito civil: contratos em espécie. São Paulo: Saraiva, 2008. 682 p. ISBN 9788502061781 (v. 4 - t. 2)",
        "SPEZIALI, Paulo Roberto. Revisão contratual. Belo Horizonte: Del Rey, 2002. xii, 209 p.ISBN 8573085193.",
        "JÚNIOR, Humberto. O contrato e sua função social. 4. ed. Rio de Janeiro: Forense, 2014. ISBN 978-85-309-5653-0. Recurso online.",
        "VENOSA, Sílvio de Salvo. Direito civil: contratos em espécie. 5. ed. São Paulo: Atlas, 2005.688 p. (Coleção direito civil; 3). ISBN 8522439842."
      ]
    },
    "DCV4": {
      ementa: "Noções gerais e introdutórias de direitos reais. Posse. Função Social e direito à moradia. Defesa da posse. Direito real de propriedade. Usucapião de bens móveis e imóveis. Direito de vizinhança. Condomínio. Direitos reais de gozo ou fruição. Direitos reais de garantia. Outros direitos reais. Função social, meio ambiente e direito à moradia frente à concretização de direitos fundamentais. Escrita proativa (visual law), uso e/ou desenvolvimento de aplicativos voltados à demandas da advocacia.",
      basica: [
        "FARIAS, Cristiano Chaves de;",
        "ROSENVALD, Nelson. Curso de direito civil: reais. 15. ed.Salvador: JusPODIVM, 2019. 1116 p. ISBN 9788544225530.",
        "TARTUCE, Flávio. Direito civil: direito das coisas. 11. ed. rev., atual. e ampl. Rio de Janeiro: Forense, 2019. xviii, 812 p. ISBN 9788530983574(v. 4).",
        "TEPEDINO, Gustavo. Fundamentos do direito civil, v. 5 direitos reais. 2. ed. Rio de Janeiro: Forense, 2021. ISBN 9788530992545. Recurso online."
      ],
      complementar: [
        "DINIZ, Maria Helena. Curso de direito civil brasileiro: 4 volume: direito das coisas. 23. ed.rev., atual. e ampl. São Paulo: Saraiva, 2008. 8 v. ISBN 9788502067356. EDITORIA JURÍDICA DA EDITORA MANOLE. Código Civil. Lei n. 10.406, de 10 de janeiro de 2002: edição atualizada de acordo com a Lei n. 14.030/2020. 7. ed. São Paulo: Manole 2021. ISBN 9786555763591. Recurso online.",
        "GAGLIANO, Pablo Stolze;",
        "FILHO, Rodolfo. Novo curso de direito civil: direitos reais. São Paulo: Saraiva, 2019. 576 p. ISBN 9788553607945 (v. 5).",
        "GONÇALVES, Carlos Roberto. Direito civil brasileiro: direito das coisas. 14. ed. São Paulo: Saraivajur, 2019. 675 p. ISBN 9788553602759 (v.5).",
        "RIZZARDO, Arnaldo. Direito das coisas. 9. Rio de Janeiro: Forense, 2021. ISBN 9788530990886. Recurso online."
      ]
    },
    "DCV5": {
      ementa: "Casamento. União estável. Parentesco. Filiação. Adoção. Poder familiar. Alimentos. Guarda. Tutela. Curatela. Ausência. Diversidade da família brasileira conforme marcadores étnico-raciais, de gênero e sexualidade. Desafios contemporâneos do Direito de Família. Novas tecnologias reprodutivas e relações familiares.",
      basica: [
        "DIAS, Maria Berenice. Manual de direito das famílias. 12. ed. rev., ampl. e atual. São Paulo: Revista dos Tribunais, 2017. 798 p. ISBN 9788520370957.",
        "GONÇALVES, Carlos Roberto. Direito civil brasileiro: direito de família. 16. ed. São Paulo: Saraivajur, 2019. 736 p. ISBN 9788553602766 (v.6).",
        "ALMEIDA, Renata Barbosa de;",
        "MAFRA, Tereza Cristina Monteiro;",
        "JÚNIOR, Walsir Edson. Direito das famílias e das sucessões: Contribuição acadêmicas dos programas de Pós-graduação em Direito da",
        "FDMC, PUC Minas, UFMG e UFOP. [S.l]: Conhecimento Livraria e Distribuidora, 2021. ISBN 9786589602255. Recurso online."
      ],
      complementar: [
        "LÔBO, Paulo. Direito civil: v. 5 famílias. 11. ed. São Paulo: Saraiva Jur, 2021. ISBN 9786555593655. Recurso online.",
        "MADALENO, Rolf. Direito de família. 10. ed. Rio de Janeiro: Forense, 2019. ISBN 9788530987961. Recurso online.",
        "MELLO, Cleyson de Moraes. Direito Civil - Famílias. [S.l]: Editora Freitas Bastos, 2017.ISBN 9788579872846. Recurso online.",
        "RAMOS, Hellen Cristina do Lago. Direito de família. São Paulo: Saraiva, 2020. ISBN 9788553617623. Recurso online.",
        "TARTUCE, Flávio. Direito civil: v. 5 direito de família. 16. Rio de Janeiro: Forense, 2021.ISBN 9788530993818. Recurso online."
      ]
    },
    "DCV6": {
      ementa: "Sucessões causa mortis. Classificação dos herdeiros. Sucessão legítima e vocação hereditária. Sucessão testamentária. Planejamento sucessório. Tópicos contemporâneos do direito das sucessões: dignidade humana e titularidade sucessória. Relações Privadas e Herança Digital",
      basica: [
        "DINIZ, Maria Helena. Curso de direito civil brasileiro: volume 4: direito das coisas. 26. ed.São Paulo: Saraiva, 2011. 8 v. ISBN 9788502106406.",
        "TARTUCE, Flávio. Direito civil: direito das sucessões. 12. ed. rev., atual. e ampl. Rio de Janeiro: Forense, 2019. xv, 688 p. ISBN 9788530983598(v. 6).",
        "TEPEDINO, Gustavo. Fundamentos do direito civil, v. 7 direito das sucessões. 2. Rio de Janeiro: Forense, 2020. ISBN 9788530992484. Recurso online."
      ],
      complementar: [
        "GAGLIANO, Pablo Stolze. Novo curso de direito civil, v. 7 direito das sucessões. 8. ed. São Paulo: Saraiva Jur, 2021. ISBN 9786555594812. Recurso online.",
        "GOMES, Orlando. Sucessões. 13. ed. Rio de Janeiro: Forense, 2006. x, 351 p. ISBN 8530923235.",
        "GONÇALVES, Carlos Roberto. Direito civil brasileiro: direito das sucessões. 13. ed. São Paulo: Saraivajur, 2019. 584 p. ISBN 9788553602773 (v.7)",
        "PEREIRA, Caio Mário da Silva. Instituições de direito civil: direito das sucessões. 26. ed.rev. e atual. Rio de Janeiro: Forense, 2019. xviii, 427 p. ISBN 9788530984472 (v. 6).",
        "VENOSA, Sílvio de Salvo. Direito civil, v. 5 família e sucessões. 21. ed. São Paulo: Atlas, 2021. ISBN 9788597027150. Recurso online."
      ]
    },
    "DE": {
      ementa: "Conceito, objeto e evolução histórica. Fontes. Princípios. Justiça Eleitoral. Sistemas eleitorais. Sufrágio. Voto. Capacidade Eleitoral. Alistamento. Partidos Políticos. Processo Eleitoral. Ações Eleitorais.",
      basica: [
        "CÂNDIDO, Joel José. Direito eleitoral brasileiro. 16. ed. rev., atual. e ampl. Bauru: Edipro, 2016. 738 p. ISBN 9788572838887.",
        "CASTRO, Edson de Resende. Curso de direito eleitoral. 9. ed., rev. e atual. Belo Horizonte: Del Rey, 2018. xx, 716 p. ISBN 9788538405221.",
        "RAMAYANA, Marcos. Direito eleitoral. 17. ed., rev. e atual. Rio de Janeiro: impetus, 2019.[26], 1093 p. ISBN 9788576269960."
      ],
      complementar: [
        "BRASIL. Coletânea temática de jurisprudência: direito eleitoral. Brasília: 2015. 182 p.ISBN 9788561435578. BRASIL. Tribunal Superior Eleitoral. Código eleitoral anotado e legislação complementar.Brasília: Tribunal Superior Eleitoral, 2018. 1200 p. ISBN 9788586611971 (broch.). CONSTITUIÇÃO da República Federativa do Brasil, de 5 de outubro de 1988. 49. São Paulo: Atlas, 2020. ISBN 9788597025774. Recurso online.",
        "SILVA, José Afonso da. Curso de direito constitucional positivo. 42. ed. rev. e atual. São Paulo: Malheiros, 2019. 936 p. ISBN 9788539204328.",
        "VELLOSO, Carlos Mário da Silva. Elementos de direito eleitoral. 7. São Paulo: Saraiva Jur, 2020. ISBN 9786555590944. Recurso online."
      ]
    },
    "DEC": {
      ementa: "Conceito e evolução histórica. Economia, estado e intervenção. Direito Econômico Constitucional. Competência, planejamento econômico, intervenção e regulação. Agências Reguladoras. Concorrência. Ordem Econômica Regional e Internacional. Meio ambiente, direitos humanos e direito econômico.",
      basica: [
        "FIGUEIREDO, Leonardo Vizeu. Direito econômico. 10. ed. Rio de Janeiro: Forense, 2019.ISBN 9788530986445. Recurso online.",
        "FONSECA, João Bosco Leopoldino da. Direito econômico. 9. ed. Rio de Janeiro: Forense, 2017. ISBN 9788530974497. Recurso online.",
        "NUSDEO, Fábio. Curso de economia: introdução ao direito econômico. 9. ed., rev., atual. eampl. São Paulo: Revista dos Tribunais, 2015. 336 p. ISBN 9788520359105."
      ],
      complementar: [
        "CAMARGO, Ricardo Antônio Lucas. Direito econômico: aplicações e eficácia. Porto Alegre: Sergio Antônio Fabris, 2001. 559 p. ISBN 8575251643.",
        "MASSO, Fabiano Dolenc. Direito econômico esquematizado. 4. ed. Rio de Janeiro: Método, 2016. ISBN 9788530971816. Recurso online.",
        "FIGUEIREDO, Leonardo Vizeu. Direito econômico internacional. Rio de Janeiro: Forense, 2011. ISBN 978-85-309-3802-4. Recurso online.",
        "GRAU, Eros Roberto. A ordem econômica na Constituição de 1988: interpretação e crítica.10. ed. [S.l.] Malheiros, 2005. 391 p.",
        "SOUZA, Washington Peluso Albino de. Primeiras linhas do direito econômico. 6. ed. São Paulo:",
        "LTR, [2005]. 603 p. ISBN 8536107367. 6° Período"
      ]
    },
    "DEM1": {
      ementa: "Conceito, objeto e formação histórica do direito empresarial. Atividade econômica e direito empresarial. Direito societário. Regime jurídico das pessoas jurídicas empresariais. Estabelecimento empresarial. Desconsideração da personalidade jurídica. Reorganização e Extinção das Sociedades Empresariais.",
      basica: [
        "COELHO, Fábio Ulhôa. Curso de direito comercial: direito de empresa: empresa e estabelecimento, títulos de crédito. 22. ed. rev. atual. São Paulo: Thomson Reuters Brasil, 2018. 527 p. ISBN 9788553210602.",
        "JÚNIOR, Waldo. Manual de direito comercial. 20. ed. rev., atual. e ampl. São Paulo: Atlas, c 2019. xxviii, 684 p. ISBN 9788597019483.",
        "MAMEDE, Gladston. Títulos de crédito: direito empresarial brasileiro. 11. ed. rev. e atual. São Paulo: Atlas, 2019. xxi, 344 p. (Direito empresarial brasileiro; 3). ISBN 9788597018776."
      ],
      complementar: [
        "MAMEDE, Gladston. Manual de direito empresarial. 13. ed. rev., atual. e ampl. São Paulo: Atlas, 2019. xxii, 490 p. ISBN 9788597019724.",
        "NEGRÃO, Ricardo. Manual de direito comercial e de empresa: recuperação de empresas efalências. 6. ed. São Paulo: Saraiva, 2011. 727 p. ISBN 9788502106932 (v.3).",
        "NEGRÃO, Ricardo. Manual de direito empresarial. 9. ed. São Paulo: Saraivajur, 2019. 359p. ISBN 9788553602933.",
        "PATROCÍNIO, Daniel Moreira do. Direito empresarial: teoria geral, direito societário, títulosde crédito, recuperação de empresa, falência. 2. ed. Rio de Janeiro: Lumen Juris, 2017. [12], 436 p. ISBN 9788551902721.",
        "RAMOS, André Luiz Santa Cruz. Direito empresarial. 9. ed. rev., atual. e ampl. Rio de Janeiro: Método, 2019. ISBN 9788530985219."
      ]
    },
    "DEM2": {
      ementa: "Aspectos gerais da sociedade anônima. Títulos de crédito. Aceite. Endosso. Aval. Vencimento e Pagamento. Protesto. Ações cambiárias. Letra de Câmbio. Nota promissória. Cheque. Duplicata. Contratos empresariais. Relação entre Sociedades. Mercado de Capitais.",
      basica: [
        "JÚNIOR, Waldo. Manual de direito comercial. 20. ed. rev., atual. e ampl. São Paulo: Atlas, c 2019. xxviii, 684 p. ISBN 9788597019483.",
        "MAMEDE, Gladston. Manual de direito empresarial. 13. ed. rev., atual. e ampl. São Paulo: Atlas, 2019. xxii, 490 p. ISBN 9788597019724.",
        "RAMOS, André Luiz Santa Cruz. Direito empresarial. 9. ed. rev., atual. e ampl. Rio de Janeiro: Método, 2019. ISBN 9788530985219."
      ],
      complementar: [
        "RIBEIRO, Marcia Carla Pereira. Curso avançado de direito comercial: títulos de crédito, falência e concordata, contratos mercantis. São Paulo: Revistados Tribunais, 2003. 479 p. ISBN 8520323391.",
        "CAMPINHO, Sergio. Curso de direito comercial sociedade anônima. 5. Ed. São Paulo: Saraiva, 2020.ISBN 9788553618828. Recurso online.",
        "COSTA, Wille Duarte. Títulos de crédito. Belo Horizonte: Del Rey, 2003. xx, 836p. ISBN 8573086564.",
        "MAMEDE, Gladston. Manual de direito empresarial. 14. ed. São Paulo: Atlas, 2020. ISBN 9788597024111. Recurso online.",
        "PATROCÍNIO, Daniel Moreira do. Direito empresarial: teoria geral, direito societário, títulosde crédito, recuperação de empresa, falência. 2. ed. Rio de Janeiro: Lumen Juris, 2017. [12], 436 p. ISBN 9788551902721."
      ]
    },
    "DEM3": {
      ementa: "Teoria geral do direito falimentar. Requerimento de falência. Sistemas da execução frustrada, impontualidade e atos de falência. Sentença. Processo de falência. Responsabilidade dos sócios. Recuperação judicial e extrajudicial.",
      basica: [
        "MAMEDE, Gladston. Falência e recuperação de empresas: direito empresarial brasileiro. 10.ed. rev. e atual. São Paulo: Atlas, 2019. xxiv, 464 p. (Direito empresarial brasileiro; 4). ISBN 9788597018868.",
        "NEGRÃO, Ricardo. Manual de direito comercial e de empresa: recuperação de empresas efalências. 6. ed. São Paulo: Saraiva, 2011. 727 p. ISBN 9788502106932 (v.3).",
        "TOMAZETTE, Marlon. Curso de direito empresarial: falência e recuperação de empresas. 4.ed. São Paulo: Atlas, 2016. (v.3). ISBN 9788597005820. Recurso online."
      ],
      complementar: [
        "JÚNIOR, Waldo. Nova lei de falência e recuperação de empresas. 2 ed. rev. eampl. São Paulo: Atlas, 2005. 378 p. ISBN 8522441146.",
        "PATROCÍNIO, Daniel Moreira do. Direito empresarial: teoria geral, direito societário, títulosde crédito, recuperação de empresa, falência. 2. ed. Rio de Janeiro: Lumen Juris, 2017. [12], 436 p. ISBN 9788551902721.",
        "RAMOS, André Luiz Santa Cruz. Direito empresarial. 9. ed. rev., atual. e ampl. Rio de Janeiro: Método, 2019. ISBN 9788530985219.",
        "SANCHEZ, Alessandro. Direito empresarial. Rio de Janeiro: Método, 2016. ISBN 9788530973100. Recurso online.",
        "VENOSA, Sílvio de Salvo. Direito empresarial. 10. ed. São Paulo: Atlas, 2020.ISBN 9788597024791. Recurso online."
      ]
    },
    "DEP4": {
      ementa: "Código Penal - Parte Especial: Crimes contra a família. Crimes contra a incolumidadepública. Crimes contra a paz pública. Crimes contra a fé pública. Crimes contra a administraçãopública.",
      basica: [
        "BITENCOURT, Cezar Roberto. Tratado de direito penal: parte especial: (arts. 155 a 212): crimes contra o patrimônio até crimes contra o sentimento religioso e contra o respeito aos mortos. 15. ed. rev. e atual. São Paulo: Saraivajur, 2019. 525 p. ISBN 9788553603121.",
        "BITENCOURT, Cezar Roberto. Tratado de direito penal: parte especial: (arts. 213 a 311-A): crimes contra a dignidade sexual até crimes contra a fé pública. 13. ed. rev. e atual. São Paulo: Saraivajur, 2019. 711 p. ISBN 9788553603121.",
        "CAPEZ, Fernando. Curso de direito penal: legislação penal especial. 14. ed. São Paulo: Saraivajur, 2019. 847 p. ISBN 9788553607686 (Obra completa)."
      ],
      complementar: [
        "FRANCO, Alberto Silva. Crimes hediondos. 5. ed. rev., atual. e ampl. São Paulo: Revista dos Tribunais, 2005. 668 p. ISBN 8520328059.",
        "GRECO, Rogério. Código penal: comentado. 13. ed. rev., ampl. e atual. Rio de Janeiro: Impetus, 2019. [10], 1400 p. ISBN 9788529900032.",
        "MIRABETE, Júlio Fabbrini. Manual de direito penal, v. 3 parte especial: arts. 235 a 361 doCP. 33. ed. São Paulo: Atlas, 2021. ISBN 9786559770212. Recurso online.",
        "PIRES, Ariosvaldo de Campos;",
        "SALES, Sheila Jorge Selim de. Crimes de trânsito na Lei n.9.503/97. Belo Horizonte: Del Rey, 1998. 280 p. ISBN 9788573082302.",
        "PRADO, Luiz Regis. Curso de direito penal brasileiro: parte especial: arts. 184 a 288. São Paulo: Revista dos Tribunais, 2001. 664 p. ISBN 8520319564."
      ]
    },
    "DHU": {
      ementa: "Fundamentação teórica dos direitos humanos. Processo histórico de institucionalizaçãoe universalização dos direitos humanos. Sistema global e sistemas regionais de proteção. Universalismo e relativismo sobre direitos humanos. Direitos humanos no direito brasileiro. Temas contemporâneos: grupos especialmente protegidos.",
      basica: [
        "PIOVESAN, Flavia. Direitos humanos e o direito constitucional internacional. 16. ed., rev., ampl. e atual. São Paulo: Saraiva, 2016. 735 p. ISBN 9788502638686.",
        "PIOVESAN, Flavia. Temas de direitos humanos. 11. ed. rev., ampl. e atual. São Paulo: Saraiva, 2018. 728 p. ISBN 9788547232078.",
        "SAMPAIO, José Adércio Leite. Direitos fundamentais: retórica e historicidade. Belo Horizonte: Del Rey, 2010. xi, 435 p. ISBN 9788538401094."
      ],
      complementar: [
        "LAFER, Celso. A internacionalização dos direitos humanos: Constituição, racismo erelações internacionais. Barueri: Manole, 2005. x, 135 p. ISBN 8520424295.",
        "RAMOS, André de Carvalho. Teoria geral dos direitos humanos na ordem internacional. Rio de Janeiro: Renovar, 2005. 286 p. ISBN 8571475245.",
        "TRINDADE, Antônio Augusto Cançado. Tratado de direito internacional dos direitos humanos. 2. ed. rev. e atual. Porto Alegre: Sergio Antônio Fabris editor, 2003. 640 p. ISBN 8588278863 (V.1).",
        "TRINDADE, Antônio Augusto Cançado. Tratado de direito internacional dos direitoshumanos. Porto Alegre: Fabris, 2003. 663 p. ISBN 8575252240 (v.3).",
        "TRINDADE, Antônio Augusto Cançado. Tratado de direito internacional dos direitos humanos. Porto Alegre: Sergio Antônio Fabris editor, 1999. 440 p. ISBN 8575252690 (V. 2). 5° Período"
      ]
    },
    "DIC1": {
      ementa: "Conceito, objeto e formação histórica do direito constitucional. Princípios e objetivos fundamentais da República Federativa do Brasil. Direitos e garantias fundamentais. Direitos e deveres individuais e coletivos. Direitos sociais. Direitos de nacionalidade. Direitos políticos e partidos políticos. Organização político-administrativa do Estado: federação, competências e intervenção na Constituição de 1988. Ordem econômica e financeira e a ordem social. Democracia, direitos fundamentais e Tecnologia da Informação e Comunicação - TIC (Information and Communications Technology - ICT)",
      basica: [
        "MARTINS, Flávio. Direitos sociais em tempos de crise econômica. São Paulo: Saraiva, 2020.ISBN 9786555591439. Recurso online.",
        "MENDES, Gilmar Ferreira. Direitos fundamentais e controle de constitucionalidade estudos de direito constitucional. 4. ed. São Paulo: Saraiva, 2011. ISBN 9788502134249.Recurso online.",
        "MENDES, Gilmar Ferreira;",
        "BRANCO, Paulo Gustavo Gonet. Curso de direitoconstitucional. 14. ed. rev. e atual. São Paulo: Saraivajur, 2019. 1662 p. ISBN 9788553602872."
      ],
      complementar: [
        "MORAES, Alexandre de. Direito constitucional. 35. ed. São Paulo: Atlas, 2019. 1000 p. ISBN 9788597020670.",
        "JUNIOR, Nelson. Princípios do processo civil na Constituição Federal. 8. ed. rev. aampl. e atual. São Paulo: Revista dos Tribunais, 2004. 303 p. (Estudos de direito de processo Enrico Tullio Liebman; v. 21). ISBN 8520325181.",
        "NEVES, Daniel Amorim Assumpção. Ações constitucionais. 2. ed. Rio de Janeiro: Método, 2013. ISBN 978-85-309-5080-4. Recurso online.",
        "SAMPAIO, José Adércio Leite. Direitos fundamentais: retórica e historicidade. Belo Horizonte: Del Rey, 2010. xi, 435 p. ISBN 9788538401094.",
        "SILVA, José Afonso da. Curso de direito constitucional positivo. 42. ed. rev. e atual. São Paulo: Malheiros, 2019. 936 p. ISBN 9788539204328."
      ]
    },
    "DIC2": {
      ementa: "Poderes na República Federativa do Brasil: organização, composição, estatuto e atribuições na Constituição de 1988. Poder Legislativo. Poder Executivo. Poder Judiciário. Controle de Constitucionalidade. Funções essenciais à justiça: Ministério Público, Defensoria Pública, Advocacia Pública e Advocacia Privada. Quebra da regularidade constitucional: estadode defesa e estado de sítio. Democracia, direitos fundamentais e Tecnologia da Informação e Comunicação - TIC (Information and Communications Technology - ICT).",
      basica: [
        "FERNANDES, Bernardo Gonçalves. Curso de direito constitucional. Salvador: JusPODIVM, 2019. 2030 p. ISBN 9788544228098.",
        "MENDES, Gilmar Ferreira;",
        "BRANCO, Paulo Gustavo Gonet. Curso de direitoconstitucional. 14. ed. rev. e atual. São Paulo: Saraivajur, 2019. 1662 p. ISBN 9788553602872.",
        "MORAES, Alexandre de. Direito constitucional. 35. ed. São Paulo: Atlas, 2019. 1000 p. ISBN 9788597020670."
      ],
      complementar: [
        "BARCELLOS, Ana Paula. Curso de direito constitucional. 3. ed. Rio de Janeiro: Forense, 2020. ISBN 9788530989774. Recurso online.",
        "BONAVIDES, Paulo. Curso de direito constitucional. 34. ed., atual. São Paulo: Malheiros, 2019. 869 p. ISBN 9788539204342.",
        "CRUZ, Álvaro Ricardo de Souza. Jurisdição constitucional democrática. Belo Horizonte: Del Rey, 2004. xvi, 475 p. ISBN 8573087056.",
        "SILVA, José Afonso da. Curso de direito constitucional positivo. 42. ed. rev. e atual. São Paulo: Malheiros, 2019. 936 p. ISBN 9788539204328.",
        "STRECK, Lênio Luiz. Jurisdição constitucional e hermenêutica: uma nova crítica do direito. 2. ed. rev. e ampl. Rio de Janeiro: Forense, 2004. xvii, 919 p. ISBN 8530919157."
      ]
    },
    "DID": {
      ementa: "Conceito, objeto e evolução histórica. Desenvolvimento do direito digital. Relações jurídicas da sociedade da informação. Regulação do ambiente online e Marco Civil da Internet. Responsabilidade dos usuários, provedores e governo. Manifestações do direito digital e demais ramos do direito.",
      basica: [
        "ABRÃO, Carlos Henrique. Processo eletrônico processo digital. 5. ed. São Paulo: Atlas, 2017. ISBN 9788597011784. Recurso online.",
        "PECK, Patrícia. Direito digital. 6. ed. São Paulo: Saraiva Educação, 2016. ISBN 9788502635647. Recurso online.",
        "TEIXEIRA, Tarcísio. Direito digital e processo eletrônico proteção de dados, inteligência artificial, Internet das coisas, novos meios de pagamento digitais, moedas digitais e bitcoin, Whats App e criptografia ponto a ponto, compartilhamento de Wi-Fi: riscos, direito ao esquecimento e herança digital, modelos de termos de uso e política de privacidade. 4. ed. São Paulo: Saraiva, 2020. ISBN 9786555591484. Recurso online."
      ],
      complementar: [
        "COELHO, Júlia Costa de Oliveira. Direito ao esquecimento e seus mecanismos de tutela na internet: Como alcançar uma proteção real no universo virtual? [S.l]: Editora Foco, 2020.ISBN 9786555150247. Recurso online.",
        "FRAJHOF, Isabella Z. O direito ao esquecimento na Internet: conceito, aplicação e controvérsias. São Paulo: Grupo Almedina, 2019. ISBN 9788584934447. Recurso online.",
        "GONÇALVES, Carlos Roberto. Direito civil direito das obrigações: parte especial: contratos. 22. ed. São Paulo: Saraiva 2020, (Sinopses jurídicas v. 6, tomo 1). ISBN 9786555592450.Recurso online. INTERNET & regulação. São Paulo: Saraiva, 2021. ISBN 9786555592160. Recurso online.",
        "MELLO, Cleyson de Moraes. Direito Civil - Contratos. 2. ed. [S.l]: Editora Freitas Bastos, 2017. ISBN 9788579872785."
      ]
    },
    "DIF": {
      ementa: "Atividade Financeira do Estado. Receita e Despesa Pública. Orçamento Público e a Administração Orçamentária. Orçamento Participativo. Leis Orçamentárias. Lei 4320/64. Leide Responsabilidade Fiscal. Tribunal de Contas e a fiscalização orçamentária. Conceito de Direito Tributário. Espécies Tributárias.",
      basica: [
        "HARADA, Kiyoshi. Direito financeiro e tributário. 28. ed. rev., atual. e ampl. São Paulo: atlas, c 2019. xxviii, 919 p. ISBN 9788597020175.",
        "MACHADO, Hugo de Brito. Curso de direito tributário. 37. ed., rev., atual. São Paulo: Malheiros, 2016. 562 p. ISBN 9788539203291 (broch.).",
        "MARTINS, Ives Gandra da Silva;",
        "NASCIMENTO, Carlos Valder do (Org.). Comentários à lei de responsabilidade fiscal. 5. ed. São Paulo: Saraiva, 2011. 714 p. ISBN 9788502096103."
      ],
      complementar: [
        "BALEEIRO, Aliomar. Uma introdução à ciência das finanças. 16. ed. rev. e atual. por Dejalma de Campos. Rio de Janeiro: Forense, 2002. xiv, 548 p ISBN 8530914562.",
        "DERZI, Misabel de Abreu Machado. Direito tributário brasileiro: CNT comentado. 14. ed. rev., atual. e ampl. Rio de Janeiro: Forense, c 2018. c, 1569 p. ISBN 9788530980566.",
        "JARDIM, Eduardo Marcial Ferreira. Manual de direito financeiro e tributário. 11. ed. São Paulo: saraiva, 2010. 589 p. ISBN 9788502091009.",
        "MARTINS, Ives Gandra da Silva. Tratado de direito financeiro, V.1. São Paulo: Saraiva, 2013. ISBN 9788502208629. Recurso online.",
        "MARTINS, Ives Gandra da Silva. Tratado de direito financeiro, V.2. 2. São Paulo: Saraiva, 2013. ISBN 9788502208650. Recurso online."
      ]
    },
    "DIP": {
      ementa: "Conceito, objeto e evolução histórica. Fontes e fundamentos. Conflitos entre as normas de direito interno e normas internacionais. Direito dos tratados. Sujeitos, personalidade jurídica e responsabilidade. Relações diplomáticas e consulares. Direito Internacional dos Direitos Humanos. Conflitos Internacionais. Domínio público. Direito internacional econtemporaneidade.",
      basica: [
        "SILVA, G. E. do Nascimento e;",
        "CASELLA, Paulo Borba. Manualde direito internacional público. 24. ed. São Paulo: Saraiva, 2019. 966 p. ISBN 9788502066380.",
        "MAZZUOLI, Valério de Oliveira. Curso de direito internacional público. 12. ed. Rio de Janeiro: Forense, 2019. 1105 p. ISBN 9788530983024.",
        "REZEK, Francisco. Direito internacional público: curso elementar. 17. ed. São Paulo: Saraiva, 2018. ISBN 9788553172894. Recurso online."
      ],
      complementar: [
        "BRANT, Leonardo Nemer Caldeira. A autoridade da coisa julgada no direito internacionalpúblico. Rio de Janeiro: Forense, 2002. xviii, 510 p. ISBN 8530915348.",
        "GOUVEIA, Jorge Bacelar. Manual de direito internacional público. Rio de Janeiro: Renovar, 2005. 724 p. ISBN 857147480",
        "GUERRA, Sidney. Curso de direito internacional público. 5. ed. Rio de Janeiro: Lumen Juris, 2010. xxxi, 526 p. ISBN 9788537508589.",
        "MELLO, Celso D. de Albuquerque. Curso de direito internacional público. 15. ed. rev. eaum. Rio de Janeiro: Renovar, 2004. 2 v. 8571474176 (v.2).",
        "VARELLA, Marcelo Dias. Direito internacional público. 7. ed. São Paulo: Saraiva, 2017.ISBN 9788547229344. Recurso online."
      ]
    },
    "DIT1": {
      ementa: "Conceito, objeto e formação histórica. Fontes, Aplicação, Interpretação e Integração do Direito do Trabalho. Prescrição e Decadência. Princípios. Relação de trabalho e de emprego.Empregado e o empregador. Aspectos gerais do contrato de trabalho. Identificação e registro profissional. Contrato de trabalho e contratos afins. Modalidades de contrato de trabalho. Efeitos próprios e conexos do contrato de trabalho. Flexibilização trabalhista.",
      basica: [
        "DELGADO, Mauricio Godinho. Curso de direito do trabalho. 18. ed. rev. atual. São Paulo:",
        "LTR, 2019. 1773 p. ISBN 9788536199733.",
        "MARTINS, Sérgio Pinto. Direito do trabalho. 35. ed. São Paulo: Saraiva, 2019. 1333 p. ISBN 9788553602780.",
        "RESENDE, Ricardo. Direito do trabalho. 8. ed. Rio de Janeiro: Método, 2020. ISBN 9788530989552. Recurso online."
      ],
      complementar: [
        "BARROS, Alice Monteiro de;",
        "ALENCAR, Jessé Claudio Franco de. Curso de direito dotrabalho. 10. ed. São Paulo:",
        "LTR, [2016]. 904 p. ISBN 978-85-361-8751-8.",
        "MOTA, Adriano. Direito do Trabalho na Prática - Da Admissão à Demissão vol.1. 3. ed. [S.l]: Editora Rideel. ISBN 9788533935792. Recurso online.",
        "DINIZ, Bismarck Duarte. Direito do trabalho para aprender e consultar. Cuiabá: UNIVAG/",
        "GONÇALVES, Antônio Fabrício de Matos. Flexibilização trabalhista. 2. ed. rev., atual. eampl. Belo Horizonte: Mandamentos, 2007. 292 p. ISBN 857604157 X. SÜSSEKIND, Arnaldo. Instituições de direito do trabalho. 22. ed. São Paulo: LTr, 2005. 743p."
      ]
    },
    "DIT2": {
      ementa: "Poder no Contrato de Trabalho: Diretivo, Disciplinar, Regulamentar, Fiscalizatório. Remuneração e Salário. Sistema de Garantias Salariais. Jornada de Trabalho. Descansos trabalhistas. Férias. Formação e Alteração do Contrato de Trabalho. Interrupção e Suspensão. Extinção do Contrato de Trabalho. Estabilidade, Garantias de Emprego e FGTS. Direito Coletivo do Trabalho. Tecnologia e relações de trabalho.",
      basica: [
        "BARROS, Alice Monteiro de;",
        "ALENCAR, Jessé Claudio Franco de. Curso de direito dotrabalho. 10. ed. São Paulo:",
        "LTR, [2016]. 904 p. ISBN 978-85-361-8751-8.",
        "DELGADO, Mauricio Godinho. Curso de direito do trabalho. 18. ed. rev. atual. São Paulo:",
        "LTR, 2019. 1773 p. ISBN 9788536199733.",
        "MARTINS, Sérgio Pinto. Direito do trabalho. 20. ed. São Paulo: Saraivajur, 2019. 261 p.(Coleção fundamentos). ISBN 9788553610655."
      ],
      complementar: [
        "ALMEIDA, André Luiz Paes de. CLT e súmulas do TST comentadas. 20. ed. São Paulo: Rideel, 2019. xvii, 1446 p. ISBN 9788533954007.",
        "DELGADO, Gabriela Neves. Terceirização: paradoxo do direito do trabalho contemporâneo.São Paulo:",
        "LTR, 2003. 201 p. ISBN 9788536104300.",
        "NASCIMENTO, Amauri Mascaro. Curso de direito do trabalho: história e teoria geral dodireito do trabalho: relações individuais e coletivas do trabalho. 25. ed. São Paulo: Saraiva, 2010. 1461 p. ISBN 9788502087637.",
        "NASCIMENTO, Amauri Mascaro. Iniciação ao direito do trabalho. 32. ed. São Paulo: LTR, 2006. 351 p. ISBN 9788536107820.",
        "RODRIGUEZ, Américo. Princípios de direito do trabalho. 3. ed. atual. São Paulo: LTR, 2004. 453 p. ISBN 8573226528."
      ]
    },
    "DPC1": {
      ementa: "Processo civil. Processo de conhecimento. Procedimento comum. Temas e institutos relacionados ao processo civil. Provas digitais. Lei de proteção de Dados, Acessibilidade e Conectividade. Processo Eletrônico e a efetividade da prestação jurisdicional.",
      basica: [
        "JUNIOR, Fredie. Curso de direito processual civil: Introdução ao direito processualcivil, parte geral e processo do conhecimento. 21. ed. rev., atual. e ampl. Salvador: JusPODIVM, 2019. 911 p. ISBN 9788544225462.",
        "MARINONI, Luiz Guilherme;",
        "MITIDIERO, Daniel Francisco.Novo curso de processo civil. 3. ed., rev. atual. e ampl. São Paulo: Revista dos Tribunais, 2017. 3 v. ISBN 9788520370865 (v.1).",
        "NEVES, Daniel Amorim Assumpção. Manual de direito processual civil: volume único. 11.ed. rev., atual. e ampl. Salvador: JusPODIVM, 2019. 1823 p. ISBN 9788544225417."
      ],
      complementar: [
        "PEIXOTO, Ravi. Novo Código de processo civil: anotado com dispositivos normativos, enunciados interpretativos e precedentes do STJ e do STF. 6. ed. rev. eatual. Salvador: JusPODIVM, 2019. 806 p. ISBN 9788544225554.",
        "NERY, Rosa Maria Andrade. Código de processo civil comentado. 16. ed. rev., atual. e ampl. São Paulo: Revista dos Tribunais, c016. 2976 p. ISBN 9788520367599.",
        "CUNHA, Leonardo José Carneiro da (Org). Comentários ao código de processo civil: de acordo com a Lei n. 13.256/2016. São Paulo: Saraiva, 2016. 1437 p. ISBN 9788502635579.",
        "JÚNIOR, Humberto. Curso de direito processual civil: teoria geral do direitoprocessual civil, processo de conhecimento, procedimento comum. 60. ed., rev., atual e ampl.Rio de Janeiro: Forense, 2019. xxxiv, 1290 p. ISBN 9788530983505(v.1).",
        "WAMBIER, Teresa Arruda Alvim. Primeiros comentários ao novo código de processo civil: artigo por artigo: de acordo com a Lei 13.256/2016. 2. ed. rev. atual. ampl. São Paulo: Revista dos Tribunais, c 2016. 1740 p. ISBN 9788520367575."
      ]
    },
    "DPC2": {
      ementa: "Processo Civil. Teoria Geral dos Recursos. Recursos em espécies. Outros meios de impugnação de decisões judiciais e incidentes nos tribunais. Inteligência Artificial e o Gerenciamento de processos nos tribunais.",
      basica: [
        "CUNHA, Leonardo José Carneiro da. Curso de direito processualcivil: meios de impugnação às decisões judiciais e processo nos tribunais. 16. ed. rev., atual. eampl. Salvador: JusPODIVM, 2019. 879 p. ISBN 9788544225424.",
        "NEVES, Daniel Amorim Assumpção (org.). Novo CPC comparado: código de processo civil: Lei 13.105/2015. 3. ed. rev. e atual. com a Lei 13.256/2016 (alteradora do NCPC). São Paulo: Método; Rio de Janeiro: Forense, 2016. xii, 909 p. ISBN 9788530969325.",
        "NEVES, Daniel Amorim Assumpção. Manual de direito processual civil: volume único. 11.ed. rev., atual. e ampl. Salvador: JusPODIVM, 2019. 1823 p. ISBN 9788544225417."
      ],
      complementar: [
        "JUNIOR, Fredie (coord.);",
        "MACÊDO, Lucas Buril de;",
        "FREIRE, Alexandre (org.). Processo nos tribunais e meios de impugnação às decisões judiciais. 2.ed., rev. e atual. Salvador: JusPODIVM, 2016. 1131 p. (Coleção novo CPC: Doutrina selecionada; 6). ISBN 9788544207468.",
        "NERY, Rosa Maria Andrade. Código de processo civil comentado. 16. ed. rev., atual. e ampl. São Paulo: Revista dos Tribunais, c 2016. 2976 p. ISBN 9788520367599.",
        "CUNHA, Leonardo José Carneiro da (Org). Comentários ao código de processo civil: de acordo com a Lei n. 13.256/2016. São Paulo: Saraiva, 2016. 1437 p. ISBN 9788502635579.",
        "JÚNIOR, Humberto. Curso de direito processual civil: execução forçada, processos nos tribunais, recursos, direito intertemporal. 52. ed., rev., atual e ampl. Rio de Janeiro: Forense, 2019. xxxvi, 1358 p. ISBN 9788530982935 (v.3).",
        "NUNES, Dierle José Coelho;",
        "BAHIA, Alexandre Gustavo Melo Franco de Moraes;",
        "PEDRON, Flávio Barbosa Quinaud. Novo CPC: Lei 13.105, de 16.03.2015: fundamentos e sistematização. 3. ed., rev., atual. e ampl. de acordo com a Lei 13.256, de 04.02.2016 - Alteradora do Código de Processo Civil. Rio de Janeiro: Forense, 2016. 519 p. ISBN 9788530969448."
      ]
    },
    "DPC3": {
      ementa: "Processo civil. Teoria Geral da Execução. Processo de Execução. Cumprimento desentença. Liquidação de sentença. Novas tecnologias e efetividade da execução.",
      basica: [
        "MARINONI, Luiz Guilherme;",
        "MITIDIERO, Daniel Francisco.Novo curso de processo civil. 3. ed., rev. atual. e ampl. São Paulo: Revista dos Tribunais, 2017. 3 v. ISBN 9788520370865 (v.2).",
        "NEVES, Daniel Amorim Assumpção. Manual de direito processual civil: volume único. 11.ed. rev., atual. e ampl. Salvador: JusPODIVM, 2019. 1823 p. ISBN 9788544225417.",
        "JÚNIOR, Humberto. Curso de direito processual civil: execução forçada, processos nos tribunais, recursos, direito intertemporal. 52. ed., rev., atual e ampl. Rio de Janeiro: Forense, 2019. xxxvi, 1358 p. ISBN 9788530982935 (v.3)."
      ],
      complementar: [
        "ALVIM, Arruda. Novo contencioso cível no CPC/2015: de acordo com o novo CPC - Lei13.105/2015. São Paulo: Revista dos Tribunais, c 2016. 600 p. ISBN 9788520369364.",
        "BUENO, Cássio Scarpinella. Manual de direito processual civil. 3. ed. São Paulo: Saraiva, 2017. 824 p. ISBN 9788547214586.",
        "CARDOSO, Hélio Apoliano. Embargos à execução no novo CPC: teoria e prática. 3. ed. rev., atual. e ampl. Leme: JH Mizuno, 2017. 460 p. ISBN 9788577893133.",
        "PEIXOTO, Ravi. Novo Código de processo civil: anotado com dispositivos normativos, enunciados interpretativos e precedentes do STJ e do STF. 6. ed. rev. eatual. Salvador: JusPODIVM, 2019. 806 p. ISBN 9788544225554.",
        "WAMBIER, Teresa Arruda Alvim. Primeiros comentários ao novo código de processo civil: artigo por artigo: de acordo com a Lei 13.256/2016. 2. ed. rev. atual. ampl. São Paulo: Revista dos Tribunais, 2016. 1740 p. ISBN 9788520367575."
      ]
    },
    "DPC4": {
      ementa: "Tutelas Provisórias: urgência e evidência. Procedimentos Especiais de Jurisdição contenciosa e Voluntária.",
      basica: [
        "MARINONI, Luiz Guilherme;",
        "MITIDIERO, Daniel Francisco.Novo curso de processo civil. 3. ed., rev. atual. e ampl. São Paulo: Revista dos Tribunais, 2017. 3 v. ISBN 9788520370865 (v.3).",
        "JÚNIOR, Humberto. Curso de direito processual civil: procedimentos especiais: codificados (de jurisdição contenciosa e de jurisdição voluntária) e de legislação extravagante. 52. ed., rev., atual e ampl. Rio de Janeiro: Forense, 2019. xxxii, 1007 p. ISBN 9788530983864 (v.2).",
        "JÚNIOR, Humberto. Curso de direito processual civil: teoria geral do direitoprocessual civil, processo de conhecimento, procedimento comum. 60. ed., rev., atual e ampl.Rio de Janeiro: Forense, 2019. xxxiv, 1290 p. ISBN 9788530983505 (v.1)."
      ],
      complementar: [
        "JUNIOR, Fredie. Curso de direito processual civil: teoria da prova, direito probatório, decisão, precedente, coisa julgada e tutela provisória. 14. ed. rev., atual. e ampl.Salvador: JusPODIVM, 2019. 911 p. ISBN 9788544225462.",
        "REDONDO, Bruno (coord.). Juizados especiais. Salvador: JusPODIVM, [2015]. 695 p. (Coleção Repercussões do Novo CPC; 7). ISBN 9788544205693.",
        "JUNIOR, Fredie (coord.);",
        "MACÊDO, Lucas Buril de;",
        "FREIRE, Alexandre (org.). Procedimentos especiais, tutela provisória e direito transitório. 2. ed., rev.e atual. Salvador: JusPODIVM, 2016. 855 p. (Coleção novo CPC: Doutrina selecionada; 4). ISBN 9788544207444.",
        "NERY, Rosa Maria Andrade. Código de processo civil comentado. 16. ed. rev., atual. e ampl. São Paulo: Revista dos Tribunais, c 2016. 2976 p. ISBN 9788520367599.",
        "CUNHA, Leonardo José Carneiro da (Org). Comentários ao código de processo civil: de acordo com a Lei n. 13.256/2016. São Paulo: Saraiva, 2016. 1437 p. ISBN 9788502635579."
      ]
    },
    "DPE1": {
      ementa: "Conceito, objeto e formação histórica do direito penal. Princípios. Teoria da norma penal. Teoria do crime. Conduta. Tipicidade. Antijuridicidade. Culpabilidade. Teoria do Erro. Tentativa e consumação.",
      basica: [
        "BITENCOURT, Cezar Roberto. Tratado de direito penal: parte geral: (arts. 1º a 120). 25. ed.rev. e atual. São Paulo: Saraiva, 2019. 1040 p. ISBN 9788553603107.",
        "CAPEZ, Fernando. Curso de direito penal: parte geral: (arts. 1º a 120). 23. ed. São Paulo: Saraiva, 2019. 783 p. ISBN 9788553602636 (v.1).",
        "MIRABETE, Júlio Fabbrini;",
        "FABBRINI, Renato Nascimento. Manual de direito penal: partegeral: arts. 1º a 120 do CP. 33. ed. rev. e atual. São Paulo: atlas, 2018. ISBN 9788597009637."
      ],
      complementar: [
        "BATISTA, Nilo. Introdução crítica ao direito penal brasileiro. 9. ed. Rio de Janeiro: Revan, 2004. 136 p. ISBN 8571060231.",
        "BECCARIA, Cesare. Dos Delitos e Das Penas. [S.l]: Nova Fronteira. BVU 144 ISBN 9788520928684. Recurso Online.",
        "FERRAJOLI, Luigi. Direito e razão: teoria do garantismo penal. 2. ed. rev. e ampl. São Paulo: Revista dos Tribunais, 2006. 925 p. ISBN 8520329225.",
        "FOUCAULT, Michel. Vigiar e punir: nascimento da prisão. 41. ed. Petrópolis: Vozes, 2013.291 p. ISBN 9788532605085.",
        "ZAFFARONI, Eugenio Raúl. Em busca das penas perdidas: a perda de legitimidade dosistema penal. [5. ed.]. Rio de Janeiro: Revan, [2001]. 281 p. ISBN 8571060320."
      ]
    },
    "DPE2": {
      ementa: "Concurso de pessoas. Teoria da pena: funções, princípios, espécies e dosimetria. Incidentes em execução: suspensão condicional da pena e livramento condicional. Efeitos da condenação. Medidas de segurança. Ação penal. Extinção da punibilidade.",
      basica: [
        "BITENCOURT, Cezar Roberto. Falência da pena de prisão: causas e alternativas. 5. ed. São Paulo: Saraivajur, 2017. 479 p. ISBN 9788547206253.",
        "BITENCOURT, Cezar Roberto. Tratado de direito penal: parte geral: (arts. 1º a 120). 25. ed.rev. e atual. São Paulo: Saraiva, 2019. 1040 p. ISBN 9788553603107.",
        "MIRABETE, Júlio Fabbrini;",
        "FABBRINI, Renato Nascimento. Manual de direito penal: partegeral: arts. 1º a 120 do CP. 33. ed. rev. e atual. São Paulo: Atlas, 2018. ISBN 9788597009637."
      ],
      complementar: [
        "BOSCHI, José Antônio Paganella. Das penas e seus critérios de aplicação. 4. ed. rev. e atual.Porto Alegre: Livraria do Advogado, 2006. 440 p. ISBN 8573484179.",
        "NUCCI, Guilherme de Souza. Individualização da pena. São Paulo: RT, 2005. 432 p. ISBN 9788520326428.",
        "PRADO, Luiz Regis. Curso de direito penal brasileiro: parte geral: arts. 1. a 120. 8. ed. rev., atual. e ampl. São Paulo: Revista dos Tribunais, 2008. 701 p. ISBN 9788520332672 (v.1).",
        "QUEIROZ, Paulo de Souza. Funções do direito penal: legitimação versus deslegitimação dosistema penal. Belo Horizonte: Del Rey, 2001. 135 p. ISBN 8573084367.",
        "WACQUANT, Loic J. D. As prisões da miséria. Rio de Janeiro: J. Zahar, 2001. 174 p. ISBN 8571105960."
      ]
    },
    "DPE3": {
      ementa: "Introdução à Parte Especial do Código Penal. Crimes contra a pessoa. Crimes contra o patrimônio. Crimes contra a propriedade imaterial. Crimes contra a organização do trabalho. Crimes contra o sentimento religioso e o respeito aos mortos. Crimes contra a dignidade sexual.",
      basica: [
        "BITENCOURT, Cezar Roberto. Tratado de direito penal: parte especial: (arts. 121 a 124-B): crimes contra pessoa. 19. ed. rev., ampl. e atual. São Paulo: Saraivajur, 2019. 656 p. ISBN 9788553603114.",
        "GRECO, Rogério. Curso de direito penal: parte geral. 21. ed. rev., ampl. e atual. Rio de Janeiro: Impetus, 2019. 972 p. ISBN 9788529900056 (v. 1).",
        "PRADO, Luiz Regis. Curso de direito penal brasileiro: parte especial: arts. 184 a 288. São Paulo: Revista dos Tribunais, 2001. 664 p. ISBN 8520319564."
      ],
      complementar: [
        "CÓDIGO Penal Decreto-lei n. 2.848, de 7 de dezembro de 1940. 2. São Paulo Manole 2017 1recurso online ISBN 9788520453773. CONSTITUIÇÃO da República Federativa do Brasil, de 5 de outubro de 1988. 49. ed. São Paulo: Atlas, 2020. ISBN 9788597025774. Recurso online",
        "GRECO, Rogério. Código penal: comentado. 13. ed. rev., ampl. e atual. Rio de Janeiro: Impetus, 2019.",
        "PRADO, Luiz Regis. Curso de direito penal brasileiro: parte especial: arts. 121 a 183. São Paulo: Revista dos Tribunais, 2000. 629 p. ISBN 85-203-1922-X (v.2).",
        "ZAFFARONI, Eugenio Raúl;",
        "PIERANGELI, José Henrique. Manual de direito penal brasileiro: parte geral. 5. ed. rev. e atual. São Paulo: RT, 2004. 847 p. ISBN 9788520325377."
      ]
    },
    "DPP1": {
      ementa: "Conceito, objeto e formação histórica. Sistema inquisitivo e sistema acusatório. Princípios. Norma processual. Relação processual. Sujeitos processuais. Inquérito policial.Provas. Prisão e liberdade provisória. Medidas cautelares diversas da prisão. Ação penal.Jurisdição e competência.",
      basica: [
        "LIMA, Renato Brasileiro de. Manual de processo penal. 7. ed. rev., atual. e ampl. Salvador: JusPODIVM, 2019. 1903 p. ISBN 9788544225226.",
        "OLIVEIRA, Eugênio Pacelli de. Curso de processo penal. 23. ed. rev. e atual. São Paulo: Atlas, 2019. xvi, 1102 p. ISBN 9788597019759.",
        "FILHO, Fernando da Costa. Prática de processo penal. 32. ed. São Paulo: Saraiva, 2010. 939 p. ISBN 9788502091634."
      ],
      complementar: [
        "FERNANDES, Fernando. O processo penal como instrumento de política criminal. Coimbra: Almedina, 2001. 866 p. (Colecção Teses). ISBN 972401570",
        "GONÇALVES, Aroldo Plínio. Técnica processual e teoria do processo. Rio de Janeiro:",
        "AIDE, 1992. 219 p. ISBN 8532100716.",
        "KARAM, Maria Lúcia. Competência no processo penal. 4. ed., rev., atual. e ampl. São Paulo: Revista dos Tribunais, c 2005. 175 p. ISBN 8520328091.",
        "JUNIOR, Aury. Introdução crítica ao processo penal: (fundamentos da instrumentalidade garantista). 3. ed. rev., atual. e ampl. Rio de Janeiro: Lumen Juris, 2005. 305 p. ISBN 8573877480.",
        "FILHO, Fernando da Costa. Prática de processo penal. 32. ed. São Paulo: Saraiva, 2010. 939 p. ISBN 9788502091634."
      ]
    },
    "DPP2": {
      ementa: "Ritos Procedimentais: Rito Ordinário. Rito Sumário. Rito Sumaríssimo. Rito do Tribunal do Júri. Rito da Lei de Drogas. Teoria da Prova: Princípios. Provas em Espécie. Teoria das Invalidades: Nulidade e Anulabilidade. Teoria dos Recursos: Princípios. Efeitos. Recursos em espécie. Prova Digital.",
      basica: [
        "LIMA, Renato Brasileiro de. Manual de processo penal. 7. ed. rev., atual. e ampl. Salvador: JusPODIVM, 2019. 1903 p. ISBN 9788544225226.",
        "OLIVEIRA, Eugênio Pacelli de. Curso de processo penal. 23. ed. rev. e atual. São Paulo: atlas, 2019. xvi, 1102 p. ISBN 9788597019759.",
        "FILHO, Fernando da Costa. Prática de processo penal. 32. ed. São Paulo: Saraiva, 2010. 939 p. ISBN 9788502091634."
      ],
      complementar: [
        "FERNANDES, Fernando. O processo penal como instrumento de política criminal.Coimbra: Almedina, 2001. 866 p. (Colecção Teses). ISBN 972401570",
        "GRINOVER, Ada Pellegrini. Juizados especiais criminais: comentários à Lei 9.099, de 26.09.1995. 4. ed. rev., ampl. e atual. São Paulo: Revista dos Tribunais, [2002]. 446 p. ISBN 9788520322291.",
        "GRINOVER, Ada Pellegrini;",
        "FILHO, Antônio Magalhães;",
        "FERNANDES, Antônio Scarance. Recursos no processo penal: teoria geral dos recursos, recursos em espécie, ações de impugnação, reclamação aos tribunais. 4. ed., rev, ampl. e atual. São Paulo: Revista dos Tribunais, c 2005. 462 p. ISBN 8520327591.",
        "PORTO, Hermínio Alberto Marques. Júri: procedimentos e aspectos do julgamento: questionários. 11. ed. São Paulo: Saraiva, 2005. 450 p. ISBN 8502048716.",
        "FILHO, Fernando da Costa. Prática de processo penal. 32. ed. São Paulo: Saraiva, 2010. 939 p. ISBN 9788502091634."
      ]
    },
    "DPR": {
      ementa: "Conceito, objeto e evolução histórica. Fontes e fundamento. Classificação das normas. Preceitos incidentes. Regras de conexão. Prova, aplicação e interpretação. Processo internacional. Cooperação jurídica internacional. Nacionalidade, condição jurídica do estrangeiro e direitos humanos.",
      basica: [
        "OLMO, Florisbal de Souza;",
        "JUNIOR, Augusto. Curso de direito internacionalprivado. 12. ed. rev. e atual. Rio de Janeiro: Forense, 2017. xxviii, 388 p. ISBN 9788530973209",
        "DOLINGER, Jacob. Direito internacional privado. 15. ed. [S.l.]: Forense, [20-- ] ISBN 9788530988616. Recurso online.",
        "RECHSTEINER, Beat Walter. Direito internacional privado: teoria e prática. 20. ed. São Paulo: Saraiva, 2018. ISBN 9788553608225. Recurso online."
      ],
      complementar: [
        "AMORIM, Edgar Carlos de. Direito internacional privado. 9. ed. rev. e atual. Rio de Janeiro: Forense, 2006. xx, 332 p. ISBN 8530924568.",
        "ARAUJO, Nádia de. Direito internacional privado: teoria e prática brasileira. 3. ed., atual. eampl. Rio de Janeiro: Renovar, 2006. xiii, 578 p. ISBN 8571475601.",
        "DOLINGER, Jacob. Direito civil internacional: volume I: a família no direito internacionalprivado: tomo I: casamento e divórcio no direito internacional privado. Rio de Janeiro: Renovar, 1997. 388 p. ISBN 8571470499.",
        "DOLINGER, Jacob. Direito internacional privado: parte especial. Rio de Janeiro: Renovar, 2003. 2 v. ISBN 8571473854.",
        "STRENGER, Irineu. Direito internacional privado. 6. ed. São Paulo:",
        "LTR, 2005. 1064 p.ISBN 8536107243."
      ]
    },
    "DPT1": {
      ementa: "Conceito, objeto e histórico. Autonomia do Direito Processual do Trabalho. Fontes. Princípios. Organização da Justiça do Trabalho: Competência. Atos, Termos e Prazos Processuais. Nulidades. Partes. Representação. Procuradores e Terceiros. Ação trabalhista. Respostas. Audiências trabalhistas.",
      basica: [
        "ALMEIDA, André Luiz Paes. Direito do Trabalho. Material, Processual e Legislação Especial. 19. ed. [S.l]: Editora Rideel, 2019. ISBN 9788533956971. Recurso online.",
        "LEITE, Carlos Henrique Bezerra. Curso de direito processual do trabalho. 17. ed. São Paulo: Saraiva, 2019. 1870 p. ISBN 9788553602674.",
        "MARTINS, Sérgio Pinto. Direito processual do trabalho. 21. ed. São Paulo: Saraivajur, 2018.208 p. (Coleção fundamentos). ISBN 9788547233112."
      ],
      complementar: [
        "BASILE, César Reinaldo Offa. Processo do trabalho: justiça do trabalho e dissídios trabalhistas. 7. ed. São Paulo: Saraiva, 2018. ISBN 9788553610006. Recurso online.",
        "BASILE, César Reinaldo Offa. Processo do trabalho: recursos trabalhistas, execução trabalhista e ações de rito especial. 5. ed. São Paulo: Saraiva, 2018). ISBN 9788553600069.Recurso online.",
        "CISNEIROS, Gustavo. Direito do trabalho sintetizado. 2. ed. Rio de Janeiro: Método, 2018.ISBN 9788530982126. Recurso online.",
        "DIAS, Ronaldo Brêtas de Carvalho. Processo constitucional e estado democrático de direito.ed., rev. atual. e ampl. Belo Horizonte: Del Rey, 2018. 255 p. ISBN 9788538405214.",
        "SANDES, Fagner. Direito do trabalho e processo do trabalho. 2. ed. São Paulo: Saraiva, 2020. ISBN 9786555591682. Recurso online."
      ]
    },
    "DPT2": {
      ementa: "Sentença e coisa julgada. Recursos. Liquidação de sentença. Execução. Dissídioscoletivos. Procedimentos especiais. Medidas cautelares. Referência básica LEITE, Carlos Henrique Bezerra. Curso de direito processual do trabalho. 17. ed. São Paulo: Saraiva, 2019. 1870 p. ISBN 9788553602674. MARTINS, Sérgio Pinto. Direito processual do trabalho. 21. ed. São Paulo: Saraivajur, 2018.208 p. (Coleção fundamentos). ISBN 9788547233112. SANDES, Fagner. Direito do trabalho e processo do trabalho. 2. ed. São Paulo: Saraiva,2020. ISBN 9786555591682. Recurso online. Referência complementar ALMEIDA, André Luiz Paes. Direito do Trabalho. Material, Processual e Legislação Especial. 19. ed. [S.l]: Editora Rideel, 2019. ISBN 9788533956971. Recurso online. BASILE, César Reinaldo Offa. Processo do trabalho: justiça do trabalho e dissídios trabalhistas. 7. ed. São Paulo: Saraiva, 2018. ISBN 9788553610006. Recurso online. BASILE, César Reinaldo Offa. Processo do trabalho: recursos trabalhistas, execução trabalhista e ações de rito especial. 5. ed. São Paulo: Saraiva, 2018). ISBN 9788553600069.Recurso online. CISNEIROS, Gustavo. Direito do trabalho sintetizado. 2. ed. Rio de Janeiro: Método, 2018.ISBN 9788530982126. Recurso online. DIAS, Ronaldo Brêtas de Carvalho. Processo constitucional e estado democrático de direito. 4. ed., rev. atual. e ampl. Belo Horizonte: Del Rey, 2018. 255 p. ISBN 9788538405214.",
      basica: [],
      complementar: []
    },
    "DSS": {
      ementa: "Conceito, objeto e evolução histórica. Seguridade social como gênero: saúde, assistência e previdência social. Direito Previdenciário: conceito, objeto, princípios e normas. Custeio da Seguridade Social. Contribuintes e Segurados. Benefícios Previdenciários.Assistência Social. Saúde. Ações Previdenciárias. Referência básica CONSTITUIÇÃO da República Federativa do Brasil, de 5 de outubro de 1988. 49. ed. São Paulo: Atlas, 2020. ISBN 9788597025774. Recurso online IBRAHIM, Fábio Zambitte. Curso de direito previdenciário. 24. ed. rev., ampl. e atual. Riode Janeiro: Impetus, 2019. 866 p. ISBN 9788529900117. MARTINS, Flávio. Curso de direito constitucional. 4. ed. São Paulo: Saraiva, 2020. ISBN9788553617883. Recurso online. Bibliografia Complementar ALVES, Giordano Leonardo. As pedras me chamam: As cracolândias como espaços de exceção permanente nas capitais brasileiras. [S.l]: Conhecimento Livraria e Distribuidora,2021. ISBN 9786589602231. Recurso online. CASTRO, Carlos Alberto Pereira de; LAZZARI, João Batista. Manual de direito previdenciário. 19. ed., rev., atual. e ampl. Rio de Janeiro: Forense, 2016. xliii, 1456 p. ISBN 9788530967925. CLT organizada Consolidação das Leis do Trabalho. 6. ed. Rio de Janeiro: Método, 2020.ISBN9788530991685. Recurso online. OLIVEIRA, Danilo de. Afinal, quando vou me aposentar? Previdência Social: mitos everdades. [S.l]: Matrioska Editora, 2020. ISBN 9786586985078. Recurso online. VIANNA, João Ernesto Aragonés. Curso de direito previdenciário. 5. ed. São Paulo: Atlas,2012. xxii, 721 p. ISBN 9788522468874.",
      basica: [],
      complementar: [
        "ALVES, Giordano Leonardo. As pedras me chamam: As cracolândias como espaços de exceção permanente nas capitais brasileiras. [S.l]: Conhecimento Livraria e Distribuidora, 2021. ISBN 9786589602231. Recurso online.",
        "CASTRO, Carlos Alberto Pereira de;",
        "LAZZARI, João Batista. Manual de direito previdenciário. 19. ed., rev., atual. e ampl. Rio de Janeiro: Forense, 2016. xliii, 1456 p. ISBN 9788530967925. CLT organizada Consolidação das Leis do Trabalho. 6. ed. Rio de Janeiro: Método, 2020.ISBN 9788530991685. Recurso online.",
        "OLIVEIRA, Danilo de. Afinal, quando vou me aposentar? Previdência Social: mitos everdades. [S.l]: Matrioska Editora, 2020. ISBN 9786586985078. Recurso online.",
        "VIANNA, João Ernesto Aragonés. Curso de direito previdenciário. 5. ed. São Paulo: Atlas, 2012. xxii, 721 p. ISBN 9788522468874."
      ]
    },
    "DTR1": {
      ementa: "Conceito, objeto e histórico. Sistema Tributário Nacional. Normas e princípios constitucionais. Tributo. Obrigação tributária. Crédito Tributário. Administração Tributária.",
      basica: [
        "DERZI, Misabel de Abreu Machado. Direito tributário brasileiro: CNT comentado. 14. ed. rev., atual. e ampl. Rio de Janeiro: Forense, c 2018. c, 1569 p. ISBN 9788530980566.",
        "CASSONE, Vittorio. Direito tributário. 28. ed. São Paulo: Atlas, c 2018. 402 p. ISBN 9788597015041.",
        "ICHIHARA, Yoshiaki. Direito Tributário: atualizado até EC 85/16 E LC 149/15. 19. ed. São Paulo: Atlas, 2015. ISBN 9788597001235."
      ],
      complementar: [
        "CONSTITUIÇÃO da República Federativa do Brasil, de 5 de outubro de 1988. 49. ed. São Paulo: Atlas, 2020. ISBN 9788597025774. Recurso online",
        "PISCITELLI, Tathiane. Direito processual tributário: aspectos fundamentais. São Paulo: Saraiva Jur, 2012. ISBN 9788502181120. Recurso online.",
        "RODRIGUES, Deusmar José. Direito Tributário. [S.l]: Editora JH Mizuno, 2018. ISBN 9788577892860.Recurso online.",
        "SABBAG, Eduardo. Direito tributário. 2. ed. Rio de Janeiro: Método, 2018. ISBN 9788530982782. Recurso online.",
        "SCHOUERI, Luís Eduardo. Direito tributário. 10. ed. São Paulo: Saraiva Jur, 2021. ISBN 9786555592696. Recurso online."
      ]
    },
    "DTR2": {
      ementa: "Tributos em espécie. Impostos. Taxas. Empréstimos compulsórios. Contribuições demelhoria. Competência tributária. Contencioso tributário. Processo administrativo e judicial.",
      basica: [
        "DERZI, Misabel de Abreu Machado. Direito tributário brasileiro: CNT comentado. 14. ed. rev., atual. e ampl. Rio de Janeiro: Forense, c 2018. c, 1569 p. ISBN 9788530980566. CONSTITUIÇÃO da República Federativa do Brasil, de 5 de outubro de 1988. 49. ed. São Paulo: Atlas, 2020. ISBN 9788597025774. Recurso online ORGANIZAÇÃO EQUIPE RIDEEL. Código Tributário Nacional de bolso. [S.l]: Editora Rideel, 2021. ISBN 9786557382813. Recurso online."
      ],
      complementar: [
        "CASSONE, Vittorio. Direito tributário. 28. ed. São Paulo: Atlas, c 2018. 402 p. ISBN 9788597015041.",
        "PISCITELLI, Tathiane. Direito processual tributário: aspectos fundamentais. São Paulo: Saraiva Jur, 2012. ISBN 9788502181120. Recurso online.",
        "RODRIGUES, Deusmar José. Direito Tributário. [S.l]: Editora JH Mizuno, 2018. ISBN 9788577892860.Recurso online.",
        "SABBAG, Eduardo. Direito tributário. 2. ed. Rio de Janeiro: Método, 2018. ISBN 9788530982782. Recurso online.",
        "SCHOUERI, Luís Eduardo. Direito tributário. 10. ed. São Paulo: Saraiva Jur, 2021. ISBN 9786555592696. Recurso online."
      ]
    },
    "EC": {
      ementa: "Sistemas econômicos. Economia com ciência social. Economia política. Política econômica e ordenamento jurídico. Microeconomia. Macroeconomia. Economia Internacional. Desenvolvimento econômico. Economia e ecologia.",
      basica: [
        "CALLAN, Scott J. Economia ambiental: aplicações, políticas e teoria. 2. ed. São Paulo: Cengage Learning, 2016. ISBN 9788522125210. Recurso online.",
        "NÓBREGA, Maílson da. A economia: como evoluiu e como funciona: ideias que transformaram o mundo. São Paulo: Trevisan, 2016. ISBN 9788599519974. Recurso online.",
        "VASCONCELLOS, Marco Antônio Sandoval de;",
        "GARCIA, Manuel Enriquez. Fundamentos de economia. 2. ed. São Paulo: Saraiva, 2004. 246 p. ISBN 8502043099 (broch.)."
      ],
      complementar: [
        "MACHADO, Luiz Henrique Mourão. Economia brasileira. 2. ed. [S.l]: Editora Pearson, 2019.ISBN 9788570160577. Recurso online.",
        "MANKIW, N. Gregory. Introdução à Economia. São Paulo: Thomson Learning, 2007. xxxvi, 852 p. ISBN 8522104085.",
        "MENDES, Judas Tadeu Grassi. Economia. [S.l]: Editora Pearson, 2012. ISBN 9788564574366. Recurso online.",
        "PARKIN, Michael. Economia. 8. ed. [S.l]: Editora Pearson, 2009. ISBN 9788588639324.Recurso online.",
        "PASSOS, Carlos Roberto M;",
        "NOGAMI, Otto. Princípios de economia. 4.ed. São Paulo: Thomson, 2003. 632 p."
      ]
    },
    "EEOAB": {
      ementa: "Ética. Ética profissional aplicada. Estatuto da OAB. Prerrogativas do advogado. Infrações e Sanções. Deveres. Honorários. Impedimentos e Incompatibilidades. Órgãos da OAB.",
      basica: [
        "BRASIL. [Estatuto da Advocacia e Ordem dos Advogados do Brasil (1994)]; ORDEMDOS ADVOGADOS DO BRASIL. Conselho Federal. Estatuto da Advocacia e da OAB elegislação complementar. Brasília:",
        "OAB, 2004. 316 p. ISBN 8587260472.",
        "PERELMAN, Chaim. Ética e direito. São Paulo: Martins Fontes, 2002. 722 p. ISBN 8533605218.",
        "SANDEL, Michael J. Justiça: o que é fazer a coisa certa. 25. ed. Rio de Janeiro: Civilização Brasileira, 2018. 349 p. ISBN 9788520010303."
      ],
      complementar: [
        "BITTAR, Eduardo C. B. Curso de ética jurídica ética geral e profissional. 14. ed. São Paulo: Saraiva, 2017. ISBN 9788553601066. Recurso online.",
        "MACHADO, Alberto de Paula. (Coord.). Ética na advocacia. Brasília:",
        "OAB, 2004. 413 p.ISBN 8587260367.",
        "NALINI, José Renato. Ética geral e profissional. 6. ed. rev., atual. e ampl. São Paulo: Revistados Tribunais, 2008. 526 p. ISBN 9788520332092.",
        "RACHELS, James. Os elementos da filosofia moral. 7. ed. Porto Alegre:",
        "AMGH, 2013. ISBN 9788580552331. Recurso online.",
        "RAMOS, Gisela Gondin. Estatuto da advocacia: comentários e jurisprudência selecionada. 7.ed. rev. e atual. Belo Horizonte: Fórum, 2017. 809 p. ISBN 9788545001706. 7° Período"
      ]
    },
    "FI": {
      ementa: "Filosofia antiga, medieval, moderna e contemporânea. Noções de Lógica. Teorias éticas consequencialistas, deontológicas e teleológicas. A ideologia libertária. Justiça, equidade e bem comum.",
      basica: [
        "ARISTÓTELES. Ética a Nicômaco. São Paulo: Martim Claret, 2015. 299 p. (Coleção a Obra-prima de cada autor; 53). ISBN 9788544001011.",
        "BINI, Edson (Trad.). Metafísica dos costumes. 3. ed. São Paulo: Edipro, 2017. 287 p. ISBN 9788552100072.",
        "SANDEL, Michael J. Justiça: o que é fazer a coisa certa. 25. ed. Rio de Janeiro: Civilização Brasileira, 2018. 349 p. ISBN 9788520010303."
      ],
      complementar: [
        "KANT, Immanuel. Crítica da razão prática. 1. reimp. Petrópolis: Vozes; Bragança Paulista: Editora Universitária São Francisco, 2017. 238 p. (Coleção pensamento humano). ISBN 9788532653109.",
        "RAWLS, John. Uma teoria da justiça. 2. ed. São Paulo: Martins Fontes, 2002. xxvii, 708 p.ISBN 8533616309.",
        "TERRA, Ricardo R. Kant e o direito. Rio de Janeiro: J. Zahar, 2004. 65 p. (Passo- a-Passo, 33). ISBN 8571107645 (broch.).",
        "VAZ, Henrique C. de Lima. Escritos de filosofia IV: introdução à ética filosófica 1. 7. ed. São Paulo: Loyola, 2015. 483 p. (Filosofia; 47). ISBN 9788515019885.",
        "VAZ, Henrique C. de Lima. Escritos de filosofia V: introdução a ética filosófica 2. 2. ed. São Paulo: Loyola, 2004. 246 p. (Coleção Filosofia; 50). ISBN 8515020920."
      ]
    },
    "FID": {
      ementa: "Fundamentos filosóficos do direito. Matrizes da justiça. Desenvolvimento histórico-filosófico do comunitarismo e do liberalismo. A justiça igualitária e seus críticos.",
      basica: [
        "ARENDT, Hannah. A condição humana. 13. ed. Rio de Janeiro: Forense Universitária, 2016.ISBN 9788530991937. Recurso online. ARISTÓTELES;",
        "GUIMARÃES, Torrieri (Trad.). Política. São Paulo: Martin Claret, c 2014.293 p. (Coleção A obra-prima de cada autor; 61). ISBN 9788544001622.",
        "WEIL, Eric. Filosofia política. 2. ed. São Paulo: Loyola, 1990. 320 p. ISBN 9788515001187."
      ],
      complementar: [
        "AUBENQUE, Pierre. A prudência em Aristóteles. 2. ed. São Paulo: Discurso Editorial, Paulus, 2008. 352 p. ISBN 9788586590795.",
        "RAWLS, John. Justiça como equidade: uma reformulação. São Paulo: Martins Fontes, 2003.xix, 306 p. (Coleção justiça e direito). ISBN 8533617526.",
        "REALE, Miguel. Filosofia do direito. 20. ed. São Paulo: Saraiva, 2002. 749 p. ISBN 978-85-02-04147-9",
        "VAZ, Henrique C. de Lima. Ética e cultura: escritos de filosofia II. 5. ed. São Paulo: Loyola, 2013. 293 p. (Filosofia; 8). ISBN 9788515007943.",
        "VILLEY, Michel. Filosofia do direito: definições e fins do direito: os meios do direito. São Paulo: Martins Fontes, 2003. 464 p. (Justiça e direito). ISBN 8533619286."
      ]
    },
    "HD": {
      ementa: "Metodologia de interpretação histórica. Historiografia e teoria crítica. Evoluçãohistórica e sistemas jurídicos. Sistemas contemporâneos. História do direito brasileiro.",
      basica: [
        "HESPANHA, António Manuel. Cultura jurídica europeia: síntese de um milénio. 3. ed. Portugal: Europa-América, c 2003. 395 p. (Coleção Fórum da História). ISBN 9721042250.",
        "LOPES, José Reinaldo de Lima. O direito na história: lições introdutórias. 5. ed. São Paulo: Atlas, 2014. xx, 467 p. ISBN 9788522490806.",
        "WOLKMER, Antônio Carlos. História do direito no Brasil. 10. ed. rev., atual. e ampl. Rio de Janeiro: Forense, c 2018. 240 p. ISBN 9788530980191."
      ],
      complementar: [
        "BITTAR, Eduardo C. B (Org.). História do direito brasileiro: leituras da ordem jurídicanacional. 2. ed. São Paulo: Atlas, 2010. 476 p. ISBN 9788522457540.",
        "CUNHA, Paulo Ferreira da. História do direito: do direito romano à Constituição europeia.Coimbra: Almedina, 2005. 648 p. ISBN 9724026434.",
        "LOPES, José Reinaldo de Lima. Curso de história do direito. 4. Ed. São Paulo: Atlas, 2021.ISBN 9788597027563. Recurso online.",
        "ROCHA, José Manuel de Sacadura. História do direito no ocidente: antiguidade: Oriente, Grécia, Roma e Ibéricos. Rio de Janeiro: Forense-Universitária, 2015. 269 p. ISBN 9788530963835.",
        "HESPANHA, António Manuel (Trad.). História do direito privadomoderno. 5. ed. Lisboa: Fundação Calouste Gulbenkian, [2015]. xv, 768 p. (Manuais universitários). ISBN 9789723101720. 3° Período"
      ]
    },
    "HJ": {
      ementa: "Conceito, objeto e evolução histórica da hermenêutica. Giro hermenêutico- pragmático.Teoria da Argumentação Jurídica. Métodos de interpretação e formas de integração do direito. Interpretação e natureza do direito.",
      basica: [
        "DWORKIN, Ronald. O império do direito. 3. ed. São Paulo: Martins Fontes, 2014. xv, 513 p.ISBN 9788586631265.",
        "HÄBERLE, Peter. Hermenêutica constitucional: a sociedade aberta dos intérpretes da Constituição: contribuição para a interpretação pluralista e 'procedimental' da Constituição.Porto Alegre: [s.n.], 1997. 55 p. ISBN 8588278553.",
        "HABERMAS, Jürgen. Direito e democracia: entre facticidade e validade, volume 1. 2. ed. Riode Janeiro: Tempo Brasileiro, 2003. 354 p. (Biblioteca Tempo universitário; 101). ISBN 8528200914 (broch.)."
      ],
      complementar: [
        "ATIENZA, Manuel. As razões do direito: teorias da argumentação jurídica. 3. ed. São Paulo: Landy, 2003. 238 p. ISBN 8587731998.",
        "FRANÇA, R. Limongi. Hermenêutica jurídica. 6.ed.rev. e aum São Paulo: Saraiva, 1997. 183p.",
        "MEURER, Flávio Paulo (Trad.). Verdade e método: traços fundamentais de uma hermenêutica filosófica. 5 ed., rev. Petrópolis: Vozes; Bragança Paulista: Ed. Universitária São Francisco, 2003. 631 p. (Pensamento humano). ISBN 8532617875",
        "MAXIMILIANO, Carlos. Hermenêutica e aplicação do direito. 19. ed. Rio de Janeiro: Forense, 2001. vi, 342 p.",
        "OLIVEIRA, Marcelo Andrade Cattoni de. Jurisdição e hermenêutica constitucional no Estado democrático de direito. Belo Horizonte: Mandamentos, 2004. 587 p. ISBN 8576040727."
      ]
    },
    "ICD1": {
      ementa: "Direito e Ciência. Teoria da norma jurídica. Teoria do ordenamento jurídico: coerência, lacunas, completude. Jusnaturalismo. Positivismo jurídico. Teoria pura do direito.",
      basica: [
        "BOBBIO, Norberto. O positivismo jurídico: lições de filosofia do direito. São Paulo: Ícone, 2006. 239 p. (Coleção elementos de direito). ISBN 8527403285.",
        "JÚNIOR, Tércio Sampaio. Introdução ao estudo do direito: técnica, decisão, dominação. 10. ed. rev., atual. e ampl. São Paulo: Atlas, 2018. 334 p. ISBN 9788597013979.",
        "KELSEN, Hans. Teoria pura do direito. 8. ed. 6. tir. São Paulo: Martins Fontes, 2018. xviii, 427 p. ISBN 9788578272050."
      ],
      complementar: [
        "BOBBIO, Norberto. Teoria da norma jurídica. 6. ed. São Paulo: Edipro, 2016. 191 p. ISBN 9788572839037.",
        "JÚNIOR, Tércio Sampaio. Teoria do ordenamento jurídico. 2. ed. São Paulo: Edipro, 2014. 174 p. ISBN 978- 85-7283-614-2.",
        "JÚNIOR, Tércio Sampaio. A ciência do direito. 2. ed. São Paulo: Atlas, 1980. 111p. ISBN 8522416923.",
        "KELSEN, Hans. Teoria geral das normas. Porto Alegre: Sergio Antônio Fabris, 1986. xvi, 509 p.",
        "REALE, Miguel. Lições preliminares de direito. 27. ed. São Paulo: Saraiva, 2002. xxv, 391 p.ISBN 9788502041264."
      ]
    },
    "ICD2": {
      ementa: "Natureza do direito. Crise da teoria jurídica positivista. Teorias não positivistas dodireito. Teorias contemporâneas do direito.",
      basica: [
        "DWORKIN, Ronald. O império do direito. São Paulo: Ed. Martins Fontes, 1999. xv, 513 p.(Coleção justiça e direito). ISBN 8533610122.",
        "BOEIRA, Nelson (Trad.). Levando os direitos a sério. 3. ed. São Paulo: WMF Martins Fontes, 2010. 568 p. (Biblioteca jurídica WMF). ISBN 9788578272517.",
        "HABERMAS, Jürgen. Direito e democracia: entre facticidade e validade, volume 1. 2. ed. Riode Janeiro: Tempo Brasileiro, 2003. 354 p. (Biblioteca Tempo universitário; 101). ISBN 8528200914 (broch.)."
      ],
      complementar: [
        "ALEXY, Robert. Teoría de los derechos fundamentales. Madrid: Centro de Estudos Politicosy Constitucionales, 2007. 607 p. ISBN 8425909392.",
        "ATIENZA, Manuel. As razões do direito: teorias da argumentação jurídica. 3. ed. São Paulo: Landy, 2003. 238 p. ISBN 8587731998.",
        "JÚNIOR, Tércio Sampaio. Introdução ao estudo do direito: técnica, decisão, dominação. 10. ed. rev., atual. e ampl. São Paulo: Atlas, 2018. 334 p. ISBN 9788597013979.",
        "HABERMAS, Jürgen. A inclusão do outro: estudos de teoria política. São Paulo: Loyola, c 2002. 390 p. (Humanística; 3). ISBN 8515024381. MÜLLER, Friedrich. O novo paradigma do direito: introdução à teoria e metódica estruturantes. São Paulo: Revista dos Tribunais, 2009. 318 p. ISBN 9788520335185 (broch.)."
      ]
    },
    "LP": {
      ementa: "Técnicas de leitura e redação. Produção de textos. Conceitos linguísticos: Língua falada e escrita - níveis de linguagem. Recursos expressivos. Estruturação de períodos eparágrafos. Estudo assistemático de ortografia, acentuação, pontuação, verbos, concordância, regência e colocação voltado à produção de textos e documentos jurídicos.",
      basica: [
        "HENRIQUES, Antônio. Curso de português jurídico. 13. ed., rev.e atual. São Paulo: Atlas, 2018. 255 p. ISBN 9788597017083.",
        "FAULSTICH, Eneide Leite de Jesus. Como ler, entender e redigir um texto. [S.l]: Editora Vozes, 2011. ISBN 9788532606082. Recurso online.",
        "FARACO, Carlos Alberto. Língua portuguesa: prática de redação paraestudantes universitários. 13. ed. Petrópolis: Vozes, 2012. 381 p. ISBN 9788532602633."
      ],
      complementar: [
        "INFANTE, Ulisses. Gramática da língua portuguesa. 2. ed. São Paulo: Scipione, 2004. 567 p. ISBN 9788526249639.",
        "SAVIOLI, Francisco Platão. Para entender o texto: leitura e redação. 16.ed. São Paulo: Ática, 2003. 431 p. ISBN 8508034687.",
        "GARCEZ, Lucília. Técnica de redação: o que é preciso saber para bem escrever. São Paulo: Martins Fontes, 2002. 150 p. (Ferramentas). ISBN 8533614098.",
        "KOCH, Ingedore Grunfeld Villaça. Argumentação e linguagem. 8. ed. São Paulo: Cortez, 2002. 240 p ISBN 8524903295.",
        "LAPA, Manuel Rodrigues. Estilística da língua portuguesa. 4. ed. São Paulo: Martins Fontes, 1998. 275 p."
      ]
    },
    "MPD": {
      ementa: "Ciência e epistemologia. Metodologia de pesquisa: métodos e técnicas de investigaçãosocial. Pesquisa jurídica. Normas técnicas para elaboração de trabalhos científicos.",
      basica: [
        "MORTARI, Cezar Augusto (Trad.). Contra o método. 2. ed. São Paulo:",
        "UNESP, 2011. 372 p. ISBN 9788539301393.",
        "GUSTIN, Miracy Barbosa de Sousa;",
        "DIAS, Maria Tereza Fonseca. (Re)pensando a pesquisajurídica: teoria e prática. Belo Horizonte: Del Rey, 2002. 237 p. ISBN 857308474",
        "BOEIRA, Beatriz Vianna;",
        "BOEIRA, Nelson (Trad.). A estrutura das revoluções científicas. 13. ed. 1. reimpr. São Paulo: Perspectiva, 2017. 323 p. (Série Debates;115). ISBN 9788527301114."
      ],
      complementar: [
        "CHALMERS, A. F. O que é ciência afinal? São Paulo: Brasiliense, 1993. 224 p. ISBN 8511120610.",
        "LIMA, Norberto de Paula (Trad.). Discurso sobre ométodo: para bem dirigir a própria razão e procurar a verdade nas ciências. 9. ed. São Paulo: Hemus, 2000. 136 p. ISBN 8528902161.",
        "HUME, David. Investigação sobre o entendimento humano. 2009. São Paulo: Hedra, 2009.222 p. ISBN 9788577151417.",
        "KANT, Immanuel. Crítica da razão pura. 4. ed. Lisboa: Fundação Calouste Gulbenkian, 1997. 680 p. ISBN 972310623",
        "POPPER, Karl R. A lógica da pesquisa científica. 2. ed. São Paulo: Cultrix, 2013. 454 p.ISBN 85-316-0236-X. 2° Período"
      ]
    },
    "OPT:Bioética e Biodireito": {
      ementa: "Bioética, Biodireito e biopolítica. Pessoa, personalidade e princípios constitucionais. Aspectos profissionais. Início e fim da vida. Gênero. Questões étnico-raciais. Novas tecnologias. Manipulação genética. Ética da pesquisa científica. Questões sociais em Bioética.",
      basica: [
        "OLIVEIRA, Reinaldo Ayer de. Bioética, direito e medicina. São Paulo: Manole, 2020. ISBN 9788520458587. Recurso online.",
        "RAMOS, Dalton Luiz de Paula (org.). Bioética, pessoa e vida: uma abordagem personalista. 2.ed. [S.l]: Editora Difusão, 2018. ISBN 9788578083809. Recurso online. SÁ, Maria de Fátima Freire de;",
        "NAVES, Bruno Torquato de Oliveira. Bioética e Biodireito: revista, atualizada e ampliada. [S.l]: Editora Foco, 2021. ISBN 9786555151855. Recurso online."
      ],
      complementar: [
        "BONHEMBERGER, Marcelo. Bioética como análise de casos. Porto Alegre: Editora EdiPUC-RS, 2019. ISBN 9788539711871. Recursoonline.",
        "FILHO, Isac. Bioética - Fundamentos e Reflexões. [S.l]: Editora Atheneu, 2017. ISBN 9788538808305. Recurso online.",
        "MACHADO, Arnaldo Pineschi;",
        "MACHADO, Carlindo. Bioética na prática: Casos médicosem análise. [S.l]: Doc Content, 2016. ISBN 9788584000722. Recurso online.",
        "ROSSETE, Celso Augusto. Bioética e Biossegurança. [S.l]: Editora Pearson, 2018. ISBN 9788543025025. Recurso online.",
        "RUIZ, Cristiane Regina;",
        "TITTANEGRO, Gláucia Rita. Bioética: uma diversidade temática.[S.l]: Editora Difusão, 2007. ISBN 9788588489998. Recurso online."
      ]
    },
    "OPT:Direito Agrário": {
      ementa: "Organização da estrutura agrária fundiária no Brasil. Direito Agrário. Alteração no sistema jurídico da propriedade rural. Reforma agrária no contexto constitucional brasileiro. Movimentos sociais de luta pela terra.",
      basica: [
        "ALFONSIN, Jacques Távora. O acesso à terra como conteúdo de direitos humanos fundamentais à alimentação e à moradia. Porto Alegre: Sergio Antônio Fabris, 2003. 296 p. ISBN 9798575252320.",
        "CASSETTARI, Christiano. Direito agrário: atualizado com as Leis n°s 13.001/14, 13.043/14e EC 81/14. 2. ed. São Paulo: Atlas, 2015. ISBN 9788522499441. Recurso online.",
        "MARQUES, Benedito Ferreira;",
        "MARQUES, Carla Regina Silva. Direito agrário brasileiro. 11. ed., rev. e ampl. São Paulo: Atlas, 2015. xiv, 260 p. ISBN 9788522495153."
      ],
      complementar: [
        "LISITA, Cristiane (coord.). Direito agrário contemporâneo. Belo Horizonte: Del Rey, 2004. ix, 365 p. ISBN 8573086920.",
        "BORGES, Antonino Moura. Curso completo de direito agrário. 5. ed. ampl. e atual. Campo Grande: Contemplar, 2016. 812 p. ISBN 9788563540928.",
        "GAZOLA, Patrícia Marques. (Coord.). Regularização fundiária: de interesse social e osdesafios da sustentabilidade. Rio de Janeiro: Ágora21; Grupo multifoco, 2019. ISBN 9788582736906.",
        "OLIVEIRA, Umberto Machado de. Princípios de direito agrário na constituição vigente. 5.reimpr. Curitiba: Juruá, 2011. 247 p. ISBN 8536207949.",
        "SODERO, Fernando Pereira. Direito agrário e reforma agrária. 2. ed. rev. e atual.Florianópolis: OAB/SC, 2006. xii, 357 p. ISBN 8598304859."
      ]
    },
    "OPT:Direito Internacional Penal": {
      ementa: "Direito Internacional Penal. Tribunais internacionais pós Segunda Guerra Mundial. Tribunais internacionais ad hoc. Tribunais internacionais híbridos. Tribunal Penal Internacional: Crimes de Guerra, crimes contra a humanidade, genocídio, agressão.",
      basica: [
        "MAZZUOLI, Valério de Oliveira. Curso de direito internacional público. 12. ed. Rio de Janeiro: Forense, 2019. 1105 p. ISBN 9788530983024.",
        "TRINDADE, Antônio Augusto Cançado. Direito das organizações internacionais. 4. ed. rev., atual. e ampl. Belo Horizonte: Del Rey, 2009. xl, 814 p. ISBN 9788538400295.",
        "VARELLA, Marcelo Dias. Direito internacional público. 7. ed. São Paulo: Saraiva, 2017.ISBN 9788547229344. Recurso online."
      ],
      complementar: [
        "SILVA, G. E. do Nascimento e;",
        "CASELLA, Paulo Borba. Manualde direito internacional público. 24. ed. São Paulo: Saraiva, 2019. 966 p. ISBN 9788502066380.",
        "BRANT, Leonardo Nemer Caldeira. A autoridade da coisa julgada no direito internacionalpúblico. Rio de Janeiro: Forense, 2002. xviii, 510 p. ISBN 8530915348.",
        "MELLO, Celso D. de Albuquerque. Curso de direito internacional público. 15. ed. rev. eaum. Rio de Janeiro: Renovar, 2004. 2 v. 8571474176 (v.2).",
        "PIOVESAN, Flávia. Temas de direitos humanos. 11. ed. São Paulo: Saraiva, 2018.ISBN 9788553600298. Recurso online.",
        "REZEK, Francisco. Direito internacional público: curso elementar. 17. ed. São Paulo: Saraiva, 2018. ISBN 9788553172894. Recurso online."
      ]
    },
    "OPT:Direito da Criança e do Adolescente, ECA": {
      ementa: "Conceito, objeto e evolução histórica. Convenção Internacional dos Direitos da Criança. Direitos fundamentais da criança e do adolescente. Prevenção. Política de atendimento. Medidas de proteção. Ato infracional. Medidas pertinentes aos pais ou responsáveis. Conselho Tutelar. Acesso à Justiça. Crimes e das Infrações administrativas.",
      basica: [
        "MACIEL, Kátia Regina Ferreira Lobo Andrade (Coord.). Curso de direito da criança e doadolescente: aspectos teóricos e práticos. 9. ed. São Paulo: Saraiva, 2016. 1264 p. ISBN 9788547203764 (broch.).",
        "NUCCI, Guilherme de Souza. Estatuto da Criança e do Adolescente comentado. 5. ed. Riode Janeiro: Forense, 2020. ISBN 9788530992798. Recurso online.",
        "SALIBA, Maurício Gonçalves. O olho do poder: análise crítica da proposta educativa do Estatuto da criança e do adolescente. São Paulo:",
        "UNESP, 2006. 159 p ISBN 85-7139-727-9."
      ],
      complementar: [
        "MACHADO, Antônio Cláudio da Costa (Org). Estatuto da criançae do adolescente interpretado: artigo por artigo, parágrafo por parágrafo. Barueri, SP: Manole, 2012. ISBN 9788520432761. Recurso online.",
        "PIOVESAN, Flávia. Temas de direitos humanos. 11. ed. São Paulo: Saraiva, 2018.ISBN 9788553600298. Recurso online.",
        "ROSSATO, Luciano Alves. Estatuto da Criança e do Adolescente, Lei nº 8.069/90, comentado artigo por artigo. 12. ed. São Paulo: Saraiva Jur, 2020. ISBN 9786555590814.Recurso online.",
        "VERONESE, Josiane Rose Petry. Os direitos da criança e do adolescente. São Paulo: LTR, 1999. 208 p. ISBN 8573227621.",
        "ZAPATER, Maíra. Direito da criança e do adolescente. São Paulo: Saraiva, 2019. ISBN 9788553613106. Recurso online."
      ]
    },
    "OPT:Federação e Municipalidade": {
      ementa: "Constitucionalismo. Federalismo. Ementa: Municipalismo. Origens e evolução domunicípio. Organização do município. Autonomia. Finanças. Bens e serviços. Poder de polícia.Urbanismo e proteção ambiental. Servidores municipais. Câmara municipal. Prefeitura e o prefeito: atribuições e responsabilidades.",
      basica: [
        "MENDES, Gilmar Ferreira;",
        "BRANCO, Paulo Gustavo Gonet. Curso de direitoconstitucional. 14. ed. rev. e atual. São Paulo: Saraivajur, 2019. 1662 p. ISBN 9788553602872.",
        "MORAES, Alexandre de. Direito constitucional. 35. ed. São Paulo: Atlas, 2019. 1000 p. ISBN 9788597020670.",
        "SILVA, José Afonso da. Curso de direito constitucional positivo. 42. ed. rev. e atual. São Paulo: Malheiros, 2019. 936 p. ISBN 9788539204328"
      ],
      complementar: [
        "BARCELLOS, Ana Paula. Curso de direito constitucional. 3. ed. Rio de Janeiro: Forense, 2020. ISBN 9788530989774. Recurso online.",
        "BONAVIDES, Paulo. Curso de direito constitucional. 34. ed., atual. São Paulo: Malheiros, 2019. 869 p. ISBN 9788539204342.",
        "CASTRO, José Nilo de. Direito municipal positivo. 2. ed. rev., atual. e ampl. Belo Horizonte: Del Rey, 1992. 362 p. CONSTITUIÇÃO da República Federativa do Brasil, de 5 de outubro de 1988. 49. São Paulo: Atlas, 2020. ISBN 9788597025774. Recurso online.",
        "FERNANDES, Bernardo Gonçalves. Curso de direito constitucional. Salvador: JusPODIVM, 2019. 2030 p. ISBN 9788544228098.",
        "SARLET, Ingo Wolfgang. Curso de direito constitucional. 10. ed. São Paulo: Saraiva Jur, 2021. ISBN 9786555593402. Recurso online."
      ]
    },
    "OPT:LIBRAS": {
      ementa: "Estudo dos mecanismos da Língua de Sinais Libras - centrada na prática. Estudo dos números, do alfabeto, pronomes pessoais e possessivos, calendário, relações de família, cultura e comunidade. Legislação relacionada à pessoa com deficiência auditiva e Libras.",
      basica: [
        "GOLDFELD, Marcia. A criança surda: linguagem e cognição numa perspectiva sociointeracionista. 4.ed. São Paulo: Plexus, c 2002. 172 p. ISBN 9788585689339.",
        "QUADROS, Ronice Müller de. Educação de surdos: a aquisição da linguagem. Porto Alegre: Artemed, c 1997. 126 p. (Biblioteca Artes Médicas). ISBN 9788573072655.",
        "QUADROS, Ronice Müller de;",
        "KARNOPP, Lodenir Becker. Língua de sinais brasileira: estudos linguísticos. Porto Alegre: Artmed, 2004. xi, 221 p. ISBN 9788536303086."
      ],
      complementar: [
        "BRASIL. Ministério da Educação e do Desporto. Ensino de língua portuguesa para surdos: caminhos para a prática pedagógica. Brasília: Ministério da Educação, 2004. 2 v. (Programa Nacional de Apoio à Educação de surdos).",
        "CAPOVILLA, Fernando César;",
        "TEMOTEO, Janice Gonçalves;",
        "TEMOTEO, Janice Gonçalves;",
        "MARTINS, Antonielle Cantarelli (ed.). Dicionário da língua de sinais do Brasil: a libras em suas mãos. São Paulo: Edusp, 2017. 3 v. ISBN 9788531415401. (Vol. 1)",
        "CAPOVILLA, Fernando César;",
        "TEMOTEO, Janice Gonçalves;",
        "TEMOTEO, Janice Gonçalves;",
        "MARTINS, Antonielle Cantarelli (ed.). Dicionário da língua de sinais do Brasil: a libras em suas mãos. São Paulo: Edusp, 2017. 3 v. ISBN 9788531415401. (Vol. 2)",
        "QUADROS, Ronice Müller de. Língua de herança língua brasileira de sinais. Porto Alegre: Penso, 2017. ISBN 9788584291113. Recurso online.",
        "QUADROS, Ronice Müller de. O tradutor e intérprete de língua brasileira de sinais elíngua portuguesa. Brasília: Ministério da Educação, 2004. 94 p"
      ]
    },
    "OPT:Legislação Penal e Processual Penal Extravagante": {
      ementa: "Lei de Drogas. Lei Maria da Penha. Estatuto do Idoso. Abuso de autoridade. Estatuto do Desarmamento. Lei de combate ao crime organizado. Interceptação telefônica. Preconceito de raça ou de cor. JECrim. Prisão temporária. Lei de tortura. Lei de crimes hediondos.",
      basica: [
        "CAPEZ, Fernando. Curso de direito penal: parte especial: (arts. 121 a 212): dos crimes contrapessoa a dos crimes contra o sentimento religioso e contra o respeito aos mortos. 19. ed. São Paulo: Saraivajur, 2019. 781 p. ISBN 9788553607686 (Obra completa).",
        "GONÇALVES, Victor Eduardo Rios. Legislação penal especial: crimes hediondos, drogas, terrorismo, tortura, armas de fogo, contravenções penais, crimes de trânsito. 16. ed. São Paulo: Saraiva, 2020. (Sinopses jurídicas v. 24, tomo 2). ISBN 9786555592290. Recurso online.",
        "NUCCI, Guilherme de Souza. Leis penais e processuais penais: comentadas. 12. ed. rev., atual. e ampl. Rio de Janeiro: Forense, 2019. 2 v. ISBN 9858530985783."
      ],
      complementar: [
        "BIANCHINI, Alice. Lei Maria da Penha. 4. ed. São Paulo: Saraiva, 2018. (Saberes monográficos). ISBN 9788553600236. Recurso online.",
        "CAPEZ, Fernando. Estatuto do desarmamento: comentários à Lei n. 10826, de 22-12-2003. 4. ed. atual. São Paulo: Saraiva, 2006. xx, 235 p. ISBN 850205628",
        "MARCÃO, Renato. Estatuto do desarmamento: anotações e interpretação jurisprudencial daparte criminal da Lei n. 10.826/2003. 5. ed. São Paulo: Saraiva, 2021. ISBN 9786555598209. Recurso online.",
        "MASSON, Cleber. Lei de drogas aspectos penais e processuais. 2. ed. Rio de Janeiro: Método, 2021. ISBN 9788530993085. Recurso online.",
        "FILHO, Fernando da Costa. Prática de processo penal. 32. ed. São Paulo: Saraiva, 2010. 939 p. ISBN 9788502091634."
      ]
    },
    "OPT:Paradigmas Éticos Contemporâneos": {
      ementa: "Concepções de bem e justiça. Pluralismo de valores. Liberdade, livre arbítrio e intersubjetividade. Universalismo e relativismo. Teorias éticas contemporâneas.",
      basica: [
        "HABERMAS, Jürgen. Direito e democracia: entre facticidade e validade, volume 1. 2. ed. Riode Janeiro: Tempo Brasileiro, 2003. 354 p. (Biblioteca Tempo universitário; 101). ISBN 8528200914 (broch.).",
        "HEIDEGGER, Martin. Ser e tempo. 10. ed., 4. reimp. Petrópolis: Vozes; Bragança Paulista: Editora Universitária São Francisco, 2018. 598 p. (Coleção Pensamento Humano). ISBN 9788532632845.",
        "RAWLS, John. Justiça e democracia. São Paulo: Martins Fontes, 2000. xxxvii, 406 p.(Coleção justiça e direito). ISBN 8533612079."
      ],
      complementar: [
        "APEL, Karl-Otto. Estudos de moral moderna. Petrópolis: Vozes, 1994. 294 p. ISBN 9788532611475.",
        "DURKHEIM, Émile. Filosofia moral. Rio de Janeiro: Forense, 2015. ISBN 978-85-309- 6411- 5. Recurso online.",
        "HABERMAS, Jürgen. Consciência moral e agir comunicativo. Rio de Janeiro: Tempo Brasileiro, 1989. 236 p.",
        "HABERMAS, Jürgen. Direito e democracia: volume 2: entre facticidade e validade. Rio de Janeiro: Tempo Brasileiro, 1997. v. 2, 352 p. (Biblioteca tempo universitário; 102). ISBN 8528200957.",
        "RAWLS, John. Uma teoria da justiça. 2. ed. São Paulo: Martins Fontes, 2002. xxvii, 708 p.ISBN 8533616309."
      ]
    },
    "OPT:Processo Constitucional": {
      ementa: "Mandado de segurança. Mandado de segurança coletivo. Mandado de injunção.Habeas Data. Habeas Corpus. Ação Popular. Reclamação constitucional.",
      basica: [
        "BONAVIDES, Paulo. Curso de direito constitucional. 34. ed., atual. São Paulo: Malheiros, 2019. 869 p. ISBN 9788539204342.",
        "LENZA, Pedro. Direito constitucional esquematizado. 23. ed. São Paulo: Saraivajur, 2019.1574 p. ISBN 9788553603398.",
        "SILVA, José Afonso da. Curso de direito constitucional positivo. 42. ed. rev. e atual. São Paulo: Malheiros, 2019. 936 p. ISBN 9788539204328"
      ],
      complementar: [
        "CANOTILHO, J. J. Gomes. Direito constitucional e teoria da constituição. 4.ed. Coimbra: Almedina, 2000. 1461p",
        "CRUZ, Álvaro Ricardo de Souza. Jurisdição constitucional democrática. Belo Horizonte: Del Rey, 2004. xvi, 475 p. ISBN 8573087056.",
        "FERNANDES, Bernardo Gonçalves. Curso de direito constitucional. Salvador: JusPODIVM, 2019. 2030 p. ISBN 9788544228098.",
        "OLIVEIRA, Marcelo Andrade Cattoni de. Devido processo legislativo: uma justificativa democrática do controle jurisdicional de constitucionalidade das leis e do processo legislativo. 3. ed. rev., ampl. e atual. Belo Horizonte: Fórum, 2016. 217 p. ISBN 9788545000648.",
        "STRECK, Lênio Luiz. Jurisdição constitucional e hermenêutica: uma nova crítica do direito. 2. ed. rev. e ampl. Rio de Janeiro: Forense, 2004. xvii, 919 p. ISBN 8530919157."
      ]
    },
    "OPT:Produção de Textos Acadêmicos": {
      ementa: "Redação de textos científicos. Características do discurso acadêmico. Terminologiastécnicas e científica adequadas a textos acadêmicos. Gêneros textuais. Normalização técnica.",
      basica: [
        "FAULSTICH, Eneide Leite de Jesus. Como ler, entender e redigir um texto. [S.l]: Editora Vozes, 2011. ISBN 9788532606082. Recurso online.",
        "KOCH, Ingedore Grunfeld Villaça. O Texto e a Construção dos Sentidos. 10. ed. [S.l]: Editora Contexto, 2011. ISBN 9788572440684. Recurso online.",
        "FARACO, Carlos Alberto. Língua portuguesa: prática de redação paraestudantes universitários. 13. ed. Petrópolis: Vozes, 2012. 381 p. ISBN 9788532602633."
      ],
      complementar: [
        "AZEVEDO, Israel Belo de. O prazer da produção científica: descubra como é fácil e agradável elaborar trabalhos acadêmicos. 12. ed. São Paulo: Hagnos, 2006. 205 p. ISBN 8588234467.",
        "BECHARA, Evanildo. Moderna gramática portuguesa. 37. ed. rev. e ampl. Rio de Janeiro: Lucerna, 1999. 671 p. ISBN 8586930059.",
        "HENRIQUES, Antônio. Curso de português jurídico. 13. ed., rev.e atual. São Paulo: Atlas, 2018. 255 p. ISBN 9788597017083.",
        "SAVIOLI, Francisco Platão. Para entender o texto: leitura e redação. 16.ed. São Paulo: Ática, 2003. 431 p. ISBN 8508034687.",
        "LAPA, Manuel Rodrigues. Estilística da língua portuguesa. 4. ed. São Paulo: Martins Fontes, 1998. 275 p"
      ]
    },
    "OPT:Proteção Ambiental e Mineração": {
      ementa: "O tratamento jurídico da mineração. Princípios constitucionais do Direito Minerário. Política econômica, contratos, direitos reais. Proteção ao meio ambiente. Desastres ambientais.Proteção de comunidades atingidas e movimentos sociais. Ecocídio. Responsabilização jurídica.",
      basica: [
        "MILARÉ, Édis. Direito do ambiente. 11. ed., rev., atual. e ampl. São Paulo: Revista dos Tribunais Ltda, 2018. 1824 p. ISBN 9788553210480.",
        "PRADO, Luiz Regis. Direito penal do ambiente crimes ambientais (Lei 9.605/1998). 7. ed.Rio de Janeiro: Forense, 2019. ISBN 9788530986919. Recurso online.",
        "RODRIGUES, Marcelo Abelha. Direito ambiental. 8. ed. São Paulo: Saraiva Jur, 2021. ISBN 9786555595697. Recurso online."
      ],
      complementar: [
        "ANTUNES, Paulo de Bessa. Direito ambiental. 22. ed. São Paulo: Atlas, 2021. ISBN 9788597027402. Recurso online.",
        "FIORILLO, Celso Antônio Pacheco. Direito ambiental tributário. 4. ed. São Paulo: Saraiva, 2017. ISBN 9788547228248. Recurso online.",
        "FREIRE, William. Direito ambiental aplicado à mineração. Belo Horizonte: Ed. Mineira Livros Jurídicos, 2005. 213 p. ISBN 8588904071.",
        "MACHADO, Paulo Affonso Leme. Direito ambiental brasileiro. 24. ed., rev., ampl. e atual.São Paulo: Malheiros, 2016. 1407 p. ISBN 978-85-392-0322-2.",
        "SILVA, José Afonso da. Direito ambiental constitucional. 4. ed., rev. atual. São Paulo: Malheiros, 2003. 349 p. ISBN 8574203815."
      ]
    },
    "OPT:Sistema Penal e Política Criminal": {
      ementa: "Introdução crítica ao Direito Penal. Atores do sistema penal. Política Criminal. Persecução Penal e seletividade penal. Direito Penal do Inimigo. Sistema Garantista. Criminalidade e Justiça Penal na América Latina.",
      basica: [
        "BARATTA, Alessandro. Criminologia crítica e crítica do direito penal: introdução à sociologia do direito penal. 3. ed. Rio de Janeiro: Revan, [2002]. 254 p. (Coleção Pensamento Criminológico; 1). ISBN 8535301887.",
        "BITENCOURT, Cezar Roberto. Tratado de direito penal: parte geral: (arts. 1º a 120). 25. ed.rev. e atual. São Paulo: Saraiva, 2019. 1040 p. ISBN 9788553603107.",
        "MIRABETE, Júlio Fabbrini;",
        "FABBRINI, Renato Nascimento. Manual de direito penal: partegeral: arts. 1º a 120 do CP. 33. ed. rev. e atual. São Paulo: atlas, c 2018. ISBN 9788597009637."
      ],
      complementar: [
        "BATISTA, Nilo. Introdução crítica ao direito penal brasileiro. 9. ed. Rio de Janeiro: Revan, 2004. 136 p. ISBN 8571060231.",
        "FOUCAULT, Michel. A verdade e as formas jurídicas. 2. ed. Rio de Janeiro:",
        "NAU, 2001.158 p. ISBN 8585936266.",
        "FOUCAULT, Michel. Vigiar e punir: nascimento da prisão. 41. ed. Petrópolis: Vozes, 2013.291 p. ISBN 9788532605085.",
        "GINZBURG, Carlo. O queijo e os vermes: o cotidiano e as ideias de um moleiro perseguidopela inquisição. São Paulo: Companhia de Bolso, 2006. 255 p. ISBN 8535908102.",
        "ZAFFARONI, Eugenio Raúl;",
        "PIERANGELI, José Henrique. Manual de direito penal brasileiro: parte geral. 5. ed. rev. e atual. São Paulo: RT, 2004. 847 p. ISBN 9788520325377."
      ]
    },
    "OPT:Teoria da Argumentação Jurídica": {
      ementa: "Teoria da Argumentação Jurídica no pensamento contemporâneo. Direito e argumentação. A tópica de Viehweg. A retórica de Perelman. A teoria da justificação jurídica de Neil Mac Cormick. A teoria da argumentação jurídica em Robert Alexy. Raciocínio probatório, argumentação e justiça.",
      basica: [
        "JUNIOR, Tercio Sampaio. Argumentação jurídica. 2. ed. São Paulo: Manole, 2016.ISBN 9788520451267. Recurso online.",
        "RAZ, Joseph (Org). O conceito de direito. São Paulo: WMF Martins Fontes, 2009. 399 p. (Biblioteca jurídica WMF.). ISBN 9788578270964.",
        "PERELMAN, Chaim. Ética e direito. São Paulo: Martins Fontes, 2002. 722 p. ISBN 8533605218."
      ],
      complementar: [
        "ATIENZA, Manuel. As razões do direito: teorias da argumentação jurídica. 2. ed. São Paulo: Landy, 2002. 352 p. ISBN 8587731041.",
        "KELSEN, Hans. Teoria geral das normas. Porto Alegre: Sergio Antônio Fabris, 1986. xvi, 509 p.",
        "NADER, Paulo. Introdução ao estudo do direito. 24. ed. rev. e atual. Rio de Janeiro: Forense, 2004. 418 p. ISBN 8530920295.",
        "REALE, Miguel. Filosofia do direito. 20. ed. São Paulo: Saraiva, 2002. 749 p. ISBN 978-85-02-04147-9 (enc.).",
        "VILLEY, Michel. Filosofia do direito: definições e fins do direito: os meios do direito. São Paulo: Martins Fontes, 2003. 464 p. (Justiça e direito). ISBN 8533619286."
      ]
    },
    "OPT:Teoria da Justiça": {
      ementa: "Conceito de justiça. Justiça e direito. Justiça e verdade. Justiça universal e justiça particular. Justiça substantiva e justiça procedimental. Justiça distributiva. Teorias modernas da justiça. Teorias críticas: democracia deliberativa e justiça social como reconhecimento. Desigualdade social, justiça e injustiça no Brasil. Direito, justiça e liberdades individuais.",
      basica: [
        "ALEXY, Robert. Conceito e validade do direito. São Paulo: WMF Martins Fontes, 2011. p. (Biblioteca Jurídica WMF.). ISBN 9788578271633.",
        "HABERMAS, Jürgen. A inclusão do outro: estudos de teoria política. São Paulo: Loyola, c 2002. 390 p. (Humanística; 3). ISBN 8515024381.",
        "SANDEL, Michael J. Justiça: o que é fazer a coisa certa. 25. ed. Rio de Janeiro: Civilização Brasileira, 2018. 349 p. ISBN 9788520010303."
      ],
      complementar: [
        "DWORKIN, Ronald. A virtude soberana: a teoria e a prática da igualdade. São Paulo: Martins Fontes, 2005. xxv, 689 p. (Justiça e direito). ISBN 8533621302.",
        "DWORKIN, Ronald. O império do direito. 3. ed. São Paulo: Martins Fontes, 2014. xv, 513 p.ISBN 9788586631265.",
        "KELSEN, Hans. Teoria pura do direito. 8. ed. 6. tir. São Paulo: Martins Fontes, 2018. xviii, 427 p. ISBN 9788578272050.",
        "RAWLS, John. Uma teoria da justiça. 2. ed. São Paulo: Martins Fontes, 2002. xxvii, 708 p.ISBN 8533616309.",
        "SEN, Amartya. Desenvolvimento como liberdade. São Paulo: Companhia das Letras, 2000.409 p. ISBN 8571649782."
      ]
    },
    "OPT:Teoria do Direito": {
      ementa: "Positivismo jurídico. Positivismo jurídico inclusivo e excludente. Direito como integridade. Direito e moral. Hermenêutica-crítica do direito. Interpretação construtiva do direito. Divergências teóricas sobre o Direito.",
      basica: [
        "DWORKIN, Ronald. O império do direito. São Paulo: Ed. Martins Fontes, 1999. xv, 513 p.(Coleção justiça e direito). ISBN 8533610122.",
        "BOEIRA, Nelson (Trad.). Levando os direitos a sério. 3. ed. São Paulo: WMF Martins Fontes, 2010. 568 p. (Biblioteca jurídica WMF). ISBN 9788578272517.",
        "RAZ, Joseph (Org). O conceito de direito. São Paulo: WMF Martins Fontes, 2009. 399 p. (Biblioteca jurídica WMF.). ISBN 9788578270964."
      ],
      complementar: [
        "ALEXY, Robert. Conceito e validade do direito. São Paulo: WMF Martins Fontes, 2011. p. (Biblioteca Jurídica WMF.). ISBN 9788578271633.",
        "DWORKIN, Ronald. Uma questão de princípio. São Paulo: Martins Fontes, 2001. 593 p.ISBN 8533612206.",
        "KELSEN, Hans. Teoria geral das normas. Porto Alegre: Sergio Antônio Fabris, 1986. xvi, 509 p.",
        "KELSEN, Hans. Teoria pura do direito. 8. ed. 6. tir. São Paulo: Martins Fontes, 2018. xviii, 427 p. ISBN 9788578272050",
        "NADER, Paulo. Introdução ao estudo do direito. 24. ed. rev. e atual. Rio de Janeiro: Forense, 2004. 418 p. ISBN 8530920295."
      ]
    },
    "OPT:Tópico em Direito Civil": {
      ementa: "A disciplina propõe-se a analisar modificações, temas avançados, embates teóricos e jurisprudenciais relacionados ao Direito Civil. Trata-se de matéria em que atualizações podem ser realizadas considerando a fluidez da ciência jurídica.",
      basica: [],
      complementar: []
    },
    "OPT:Tópicos em Direito Administrativo": {
      ementa: "A disciplina propõe-se a analisar modificações, temas avançados, embates teóricos e jurisprudenciais relacionados ao Direito Administrativo. Trata-se de matéria em que atualizações podem ser realizadas considerando a fluidez da ciência jurídica.",
      basica: [],
      complementar: []
    },
    "OPT:Tópicos em Direito Constitucional": {
      ementa: "A disciplina propõe-se a analisar modificações, temas avançados, embates teóricos e jurisprudenciais relacionados ao Direito Constitucional. Trata-se de matéria em que atualizações podem ser realizadas considerando a fluidez da ciência jurídica.",
      basica: [],
      complementar: []
    },
    "OPT:Tópicos em Direito Empresarial": {
      ementa: "A disciplina propõe-se a analisar modificações, temas avançados, embates teóricos e jurisprudenciais relacionados ao Direito Empresarial. Trata-se de matéria em que atualizações podem ser realizadas considerando a fluidez da ciência jurídica.",
      basica: [],
      complementar: []
    },
    "OPT:Tópicos em Direito Financeiro, Econômico e Tributário": {
      ementa: "A disciplina propõe-se a analisar modificações, temas avançados, embates teóricos e jurisprudenciais relacionados ao Direito Financeiro, Econômico e Tributário. Trata-se de matéria em que atualizações podem ser realizadas considerando a fluidez da ciência jurídica.",
      basica: [],
      complementar: []
    },
    "OPT:Tópicos em Direito Penal": {
      ementa: "A disciplina propõe-se a analisar modificações, temas avançados, embates teóricos e jurisprudenciais relacionados ao Direito Penal. Trata-se de matéria em que atualizações podem ser realizadas considerando a fluidez da ciência jurídica.",
      basica: [],
      complementar: []
    },
    "OPT:Tópicos em Direito do Trabalho e Previdenciário": {
      ementa: "A disciplina propõe-se a analisar modificações, temas avançados, embates teóricos e jurisprudenciais relacionados ao Direito do Trabalho e Previdenciário. Trata-se de matéria em que atualizações podem ser realizadas considerando a fluidez da ciência jurídica.",
      basica: [],
      complementar: []
    },
    "OPT:Tópicos em Teoria do Direito": {
      ementa: "A disciplina propõe-se a analisar modificações, temas avançados, embates teóricos e jurisprudenciais relacionados a Teoria do Direito. Trata-se de matéria em que atualizações podem ser realizadas considerando a fluidez da ciência jurídica. 3.4 Abordagem dos temas transversais Com vistas a promover a educação de pessoas atuantes e conscientes no seio da sociedade multicultural e pluriétnica do Brasil, assim como a formação para a vida e para a convivência, no exercício cotidiano dos direitos humanos e dos direitos fundamentais como forma de vida e de organização social, política, econômica e cultural, nos níveis local, regionais, nacionais e planetário, a estrutura curricular do Curso de Direito da Unidade Guanhães da UEMG contempla, de maneira indireta em diversos conteúdos programáticos, como Sociologia, Sociologia Jurídica e Direitos Culturais e Antropologia, e, diretamente, através da disciplina Direitos Humanos a questão do respeito à diversidade e a abordagem das relações étnico-raciais. O estudo dessas disciplinas permite o desenvolvimento de uma verdadeira educaçãoem direitos humanos e direitos fundamentais e nas relações étnicos-sociais, que são desenvolvidas em conjunto com uma abordagem da história e cultura afro-brasileira, africana e indígena, pois o contato com a história permite o resgate da formação histórico-cultural brasileira, possibilitando o apontamento de problemas atuais e a identificação das melhores formas de solução. Cumpre observar que o desenvolvimento da educação em direitos humanos e direitos fundamentais e das relações étnico-raciais também é possibilitado pelo desenvolvimento da pesquisa e extensão, por meio da formação de grupos específicos coordenados por professores orientadores. Assim, tanto na perspectiva de formação geral quanto na de formação prático- profissional são contemplados conteúdos voltados para a promoção dos direitos humanos e a abordagem, reconhecimento e defesa dos interesses pertinentes às relações étnico-raciais. A relevância da questão ambiental também é considerada, tendo a disciplina Direito Ambiental, na perspectiva de formação prático-profissional, destaque. Essa disciplina contribui, também, para o desenvolvimento de uma educação ambiental, possibilitando que o alunoconstrua o conhecimento a respeito de políticas de educação ambiental, essenciais para garantir um desenvolvimento sustentável a nível local, regional e nacional. Ademais, projetos de pesquisa e extensão contemplam a temática e são desenvolvidas ações voltadas para a proteção do meio ambiente, considerando as particularidades das regiões circunvizinhas. Outros conteúdos de relevante interesse para a formação acadêmica do discente, como educação em políticas para a terceira idade e em políticas de gênero, são desenvolvidas, principalmente nas disciplinas de formação geral do curso, além da possibilidade de criação e desenvolvimento de projetos de pesquisa e extensão acerca dessas temáticas. Além disso, em conformidade com a Resolução COEPE/UEMG Nº 323, de 28 de outubro de 2021, o curso também aborda de forma transversal do seu currículo os conteúdos relacionados à gestão e à inovação, buscando a formação de futuros profissionais capazes de empreender novas soluções para os desafios da profissão e, de forma mais ampla, das comunidades nas quais estão inseridos. No Curso de Direito da UEMG Guanhães, a oferta dos componentes curriculares transversais em Gestão e Inovação são articulados com a realidade profissional na área de formação jurídica e de acordo com a realidade social de atuação do profissional do Direito, tendo por base os processos de investigação científica e o diálogo com outras áreas do conhecimento. Destaca-se a crescente importância para a atuação profissional do jurista do surgimento de novas tecnologias de gestão de processos jurídicos que têm possibilitado a progressiva transferência do rito processual para o ambiente virtual. Diante disso, é fundamental que os novos profissionais do Direito sejam formados em um ambiente pedagógico que promova e desperte no discente o ímpeto de buscar a novidade ou aperfeiçoamento no seu ambiente produtivo e social. Registre-se ainda, que todos os conteúdos apontados também são ofertados por meio do Projeto Direito e Literatura. 3.5 Atividades práticas de estágio O Estágio Supervisionado é componente curricular obrigatório do curso de graduação em Direito, indispensável à consolidação dos desempenhos profissionais desejados, inerentes ao perfil do formando e apresenta diferentes modalidades de operacionalização. O estágio curricular poderá ser realizado internamente por meio de atividades desenvolvidas no Núcleo de Práticas Jurídicas ou externamente, na esfera de atuação jurídica de pessoas de direito público e privado. A entidade pública ou privada interessada em conceder oportunidade de estágio deverá, obrigatoriamente, celebrar convênio/termo de compromisso com o estudante de Direito com a interveniência da Unidade, para que se caracterize formalmente o estágio curricular. Nesse sentido, os estágios só poderão verificar-se onde ofereçam as condições de proporcionar experiência prática efetiva na linha de formação do bacharel em Direito, devendo propiciar a complementação do ensino e da aprendizagem jurídica, bem como ser planejados, executados, acompanhados e avaliados em conformidade com as normas, os currículos, programas e calendários acadêmicos da UEMG. As atividades de estágio poderão ser reprogramadas e reorientadas de acordo com os resultados teórico-práticos gradualmente revelados pelo estudante de Direito até que os responsáveis pelo estágio curricular possam considerá-lo concluído, resguardando, como padrão de qualidade, os domínios e habilidades indispensáveis ao exercício das profissões jurídicas. Os conteúdos de formação prática, que objetivam a integração entre a prática e os conteúdos teóricos desenvolvidos nas duas primeiras perspectivas formativas do curso de Direito, serão desenvolvidos a partir do 7º período, no âmbito do Núcleo de Práticas Jurídicas da Unidade Acadêmica. Portanto, o estudante do curso de graduação em Direito deverá cumprir 360 horasde estágio supervisionado. As atividades de estágio curricular supervisionado que, porventura, forem realizadas fora da Unidade, em entidades conveniadas, poderão ser computadas naintegralização dos respectivos créditos de formação prática exigidos pelo Projeto Pedagógicodo Curso desde que em conformidade com a legislação educacional e com o projeto pedagógico de formação prática da instituição. Tendo como pano de fundo o valor central das profissões jurídicas de promoveremo acesso à justiça o Núcleo de Práticas Jurídicas incentiva os estudantes a engajarem-se em programas de estágio voltados para o exercício da advocacia de interesse público. Esses programas, além de consolidarem os domínios profissionais indispensáveis para a permanente compreensão, operacionalização e aplicação do Direito, também permitirão aos estudantes identificarem como eles poderão contribuir pessoalmente, com seu tempo e talento, na luta pela efetiva concretização do sistema de direitos consagrados pelo Estado Democrático de Direito. Portanto, um objetivo central do Núcleo de Práticas Jurídicas é transformar decisivamente, ao longo dos anos, o perfil e a qualidade da prática jurídica, desafiando construtivamente as práticas judiciárias, administrativas, policiais e advocatícias excludentes que prevalecem até então. Para consecução desse objetivo a pesquisa da história judicial recente e dos padrões sociais de litigância contemporâneos poderá oferecer contribuições significativas para orientação das atividades do estágio supervisionado e a indução de demandas jurídicas junto à população de pessoas historicamente vulnerabilizadas. A importância de uma formação prática nesses contornos justifica-se por diversas razões. Em primeiro lugar, as atividades do estágio curricular supervisionado auxiliam a introdução e a problematização de várias questões relacionadas ao papel e à responsabilidade profissional do intérprete do Direito. Desse modo, os estudantes são estimulados sistematicamente a refletir sobre as tendências, recompensas, frustrações e dilemas éticos da prática jurídica profissional. Ao oportunizar experiências, reflexões e discussões a esse respeito, o Núcleo de Práticas Jurídicas aguça a consciência crítica e ética do futuro profssional do ireito acerca dos conflitos e escolhas que a vida profissional acarreta. Em segundo lugar, a formação prática reforça, decisivamente, o aprendizado teórico, pois o envolvimento com problemas legais concretos favorece a melhor apropriação dos conteúdos cognitivos, além de expor os saberes adquiridos a novos processos de reconstrução e desconstrução. Em terceiro lugar, as atividades do estágio curricular supervisionado proporcionam uma importante dimensão de formação profissional. Nesse sentido, as habilidades relacionadas à representação jurídica do assistido são tão importantes quanto o conhecimento do direito material e a capacidade interpretativa de um profissional do Direito. A formação prática proporcionada pelo estágio curricular supervisionado ao estudante permite o aprender a combinar o aprendizado teórico e dogmático com o aprimoramento de habilidades contenciosas e consensuais, no enfrentamento de questões jurídicas práticas complexas perante as instâncias judiciais e extrajudiciais. Diversos aspectos das atividades do estágio supervisionado envolvem os estudantesem dimensões da realidade social, que devem ser vivenciadas para serem melhores compreendidas. Particularmente significativo é o aprendizado resultante da representação de interesses de assistidos socialmente desprivilegiados. A exposição aos problemas e demandas legais de pessoas e grupos historicamente marginalizadose excluídos, bem como a interseção dessas realidades com a gramática de práticas jurídicas locais-regionais refinam a compreensão da funcionalidade e legitimidade do sistema jurídico e de suasrelações com as demais esferas sociais. Por outro lado, essas experiências também apresentam os estudantes aos desafios e recompensas de uma prática jurídica exercida em favor de pessoas que não têm condições de pagar por uma assistência jurídica de mercado. Nesse sentido, o Núcleo de Práticas Jurídicas promove prestação de assistência judiciária gratuita a pessoas, cuja condição econômica não lhes permite arcar com os custos de uma ação judicial e com os honorários de advogado sem prejuízo do sustento próprio ou de sua família, bem como assessorar juridicamente pessoas jurídicas sem fins lucrativos e organizações não- governamentais, com insuficiência de recursos, nas questões relacionadas à defesa de interesses individuais, coletivos e difusos de grupos sociais economicamente desprivilegiados da região. O estágio curricular do Curso de Direito tem duração mínima de 360 horas, divididas em 120 horas de prática simulada e 240 horas de prática real. O estágio de prática real será desenvolvido, em cada semestre letivo, em consonância com o quadro de disciplinas curricular, sendo dividido por área: • NPJ I - Prática Real (Estágio) I (60 horas - 7º Período); • NPJ II - Prática Real (Estágio) II (60 horas - 8º Período); • NPJ III - Prática Real (Estágio) III (60 horas - 9º Período); • NPJ IV - Prática Real (Estágio) IV (60 horas - 10º Período). O estágio de prática simulada será desenvolvido, em cada semestre letivo, também em consonância com o quadro de disciplinas curricular, sendo dividido por área: • Prática Simulada I (30 horas - 7º Período); • Prática Simulada II (30 horas - 8º Período); • Prática Simulada III (30 horas - 9º Período); • Prática Simulada IV (30 horas - 10º Período). O estagiário da prática real é avaliado diretamente pelo seu professor orientador que respeitará os critérios de avaliação descritos no Regimento do Núcleo de Práticas Jurídicas. A prática real será desempenhada individualmente ou em duplas e o/s estagiário/s, perante os demais colegas, fará exposição dos casos sob sua responsabilidade, para posterior debate com a turma sobre as medidas processuais cabíveis, sempre que necessário e a pedido do professor orientador. QUADRO 01 - Critérios de avaliação do Núcleo de Práticas Jurídicas REDAÇÃO DE PEÇAS PROCESSUAIS. Tempo e modo de confecção/formatação da peça:.1 • Observância dos padrões de normatização adotados pelo NPJ; • 15 dias para elaboração da petição inicial; • 07 dias para devolver a peça acrescida das correções; • Nas peças que estejam sujeitas a prazo definido em lei, esta deve ser entregue nametade do prazo. Observação da gramática normativa.2 Atendimento às modificações sugeridas pelo professor na apresentação da.3 petiçãocorrigida. Redação adequada dos fatos:.4 • a adequação se refere aos fatos ocorridos e narrados no relatório de atendimentorealizado pelos alunos; • observação se os alunos tomaram todos os dados necessários à propositura da demanda Redação adequada dos fundamentos jurídicos:.5 • quanto à ordem; • quanto à relevância dos argumentos expedidos. TÉCNICA JURÍDICA. Acerto do procedimento e da medida processual cabível:.1 • escolha, dentre os procedimentos e medidas processuais, da mais adequada parao caso concreto. Sustentação oral perante o orientador acerca da medida processual escolhida:.2 • os alunos deverão justificar perante o orientador a escolha do procedimento e damedida processual. Coerência entre a fundamentação e os fatos.3 Utilização adequada do ordenamento jurídico nacional e documentos.4 normativos dedireito internacional e da jurisprudência. Formulação adequada dos pedidos.5 INTERESSE, PARTICIPAÇÃO E EMPENHO INDIVIDUAL NAS. ATIVIDADESQUE DESEMPENHA NO NPJ. Cumprimento dos prazos processuais sem cobrança do orientador: os alunos.1 deverão observar os prazos de seus processos mesmo que esses vençam em dias diferentes a sua permanência no NPJ. Acompanhamento pessoal dos atos processuais em cartório.2 • o aluno deverá se dirigir pessoalmente à secretaria do fórum para fazer carga, retirar cópias de despachos, sentenças ou outras peças processuais, observando que, caso o aluno não possua a carteira de estagiário, terá dificuldades em exercer individualmente suas atividades junto às secretarias dos juízos; comparecimento em audiência dos processos sob responsabilidade do aluno. No caso de não haver audiência designada para a dupla, os alunos deverão acompanhar, no mínimo, três audiências que estejam incluídas na pauta do NPJ (uma cível, uma criminal e uma trabalhista) por semestre, condicionado à apresentação de relatório produzido na própria audiência e assinado pelo juiz. • Obs.: a comprovação de obtenção da Carteira da Ordem, bem como da incompatibilidade ou impedimento deverá ser apresentada a cada início de semestre Organização das pastas individuais:.3 • os alunos deverão manter a relação de seus processos sempre atualizada; • o esquecimento ou a retirada de processo da relação acarretará perda de pontos; • os alunos são responsáveis pelos documentos anexados nas pastas; • os alunos deverão manter as pastas com cópias dos principais atos processuais praticados, observando a mesma numeração dos autos principais; • para o arquivamento do processo os alunos deverão formular relatório enumerando as peças que se encontram disponíveis nas pastas e a razão do arquivamento. Informações adequadas ao cliente relativas ao processo:.4 • os alunos deverão fornecer ao cliente todas as informações necessárias ao andamento do feito, inclusive tomando com rol de testemunhas; • os alunos deverão comunicar ao cliente das datas de audiências e perícias; • os alunos deverão comunicar, por escrito, ao cliente a respeito dos requisitos observados quanto às testemunhas, ouvindo-as anteriormente à audiência, orientando-as quanto ao testemunho que darão em juízo, bem como sobre os requisitos necessários à apresentação em juízo, tais como vestimentas e documentação. Comprometimento com o comportamento permeado por urbanidade e.5 sobriedade no trato com os colegas, clientes, bolsistas, funcionários e professores. Respeito a liturgia do cargo. 3.6 Atividades complementares de graduação (ACGS) As atividades complementares de graduação são componentes que complementam a formação do perfil do aluno, que não se confundem com o estágio curricular supervisionado nem com as atividades de extensão curricularizadas. O objetivo dessas atividades é possibilitar o reconhecimento de habilidades e competências do estudante, inclusive adquiridas fora do ambiente escolar, com vistas a promover a ampliação do currículo pelo aluno através de experimentos e vivências acadêmicas, internas ou externas ao curso. As atividades complementares poderão ocorrer através de diversas modalidades, tais como palestras, seminários, simpósios, congressos, conferências, projetos de pesquisa, projetos de extensão, monitoria, cursos de curta duração, oficinas, produção de textos científicos, além de participar de disciplinas oferecidas por outras instituições de ensino. As atividades complementares de graduação no curso de Direito terão por foco o aprofundamento dos conteúdos formativos enfatizados pelo projeto pedagógico, designadamente: a) os direitos humanos e os direitos fundamentais de grupos sociais vulnerabilizados; b) os direitos fundamentais individuais, sociais, econômicos e culturais e suas demandas de materialização mediante políticas públicas; c) direitos difusos e coletivos; d) desenvolvimento de habilidades profissionais relacionadas à advocacia de interesse público, mediação e conciliação; e) discussões jurídicas interdisciplinares e transdisciplinares com as demais áreasdas ciências humanas, dentre outras. A fim de enriquecer tanto o currículo quanto a visão de mundo do egresso do curso de Direito, as atividades complementares de graduação deverão observar o princípio do intercâmbio institucional, contribuindo para a consolidação de parcerias organizacionais entre a UEMG, instituições públicas e organizações da sociedade civil interessadas na promoção do Estado Democrático de Direito. A",
      basica: [],
      complementar: []
    },
    "PJ": {
      ementa: "Teorias contemporâneas de psicologia. Abordagem psicológica do fenômeno jurídico. Temas de psicologia jurídica contemporâneos: personalidade, capacidade, imputabilidade, violência doméstica, decisão judicial e autocomposição de conflitos.",
      basica: [
        "CAIRES, Maria Adelaide de Freitas. Psicologia jurídica: implicações conceituais e aplicaçõespráticas. São Paulo: Vetor, 2003. 205 p. ISBN 857585058",
        "MANGINI, Rosana Cathya Ragazzoni. Psicologia jurídica. 9. ed. São Paulo: Atlas, 2018. 402 p. ISBN 9788597017267.",
        "TRINDADE, Jorge. Manual de psicologia jurídica para operadores do direito. 7. ed., rev.atual. ampl. Porto Alegre: Livraria do Advogado, 2014. 856 p. ISBN 9788573489149."
      ],
      complementar: [
        "BOCK, Ana Mercês Bahia (org.). Psicologia e o compromisso social. 2. ed., rev., 4. reimp.São Paulo: Cortez, 2018. 382 p. ISBN 9788524915154.",
        "DAVIDOFF, Linda L. Introdução à psicologia. 3. ed. São Paulo: Pearson Makron Books, 2006. 798 p. ISBN 8534611254.",
        "LEITE, Luciano S. Psicologia comportamental. São Paulo: Erica, 2020. ISBN 9788536533018. Recurso online.",
        "MYERS, David G. Psicologia. 11. ed. Rio de Janeiro:",
        "LTC, 2017. ISBN 9788521634614.Recurso online.",
        "SOUZA, André Peixoto de;",
        "SCHERER, Daniel Corteline. Psicologia jurídica. [S.l]: Editora Intersaberes, 2020. ISBN 9786555177343. Recurso online. 5° Período"
      ]
    },
    "PR1": {
      ementa: "Prática real na área cível. Prestação de serviços de atendimento jurídico e judicial.Acompanhamento de processos.",
      basica: [
        "ALVES, Jones Figueirêdo;",
        "FILHO, Misael. Manual das audiências cíveis. 7. ed. rev. e atual. São Paulo: atlas, 2016. 196 p. ISBN 9788597007381.",
        "MARINONI, Luiz Guilherme;",
        "MITIDIERO, Daniel Francisco.Novo curso de processo civil. 3. ed., rev. atual. e ampl. São Paulo: Revista dos Tribunais, 2017. (v.1).",
        "DELLORE, Luiz. Manual de prática civil. 12. ed., rev., atual. e ampl.Rio de Janeiro: Forense; São Paulo: Método, 2016. xx, 648 p. ISBN 9788530969769."
      ],
      complementar: [
        "JUNIOR, Fredie. Curso de direito processual civil: Introdução ao direito processualcivil, parte geral e processo do conhecimento. 21. ed. rev., atual. e ampl. Salvador: JusPODIVM, 2019. 911 p. ISBN 9788544225462.",
        "CUNHA, Leonardo José Carneiro da. Curso de direito processualcivil: meios de impugnação às decisões judiciais e processo nos tribunais. 16. ed. rev., atual. eampl. Salvador: JusPODIVM, 2019. 879 p. ISBN 9788544225424.",
        "NEVES, Daniel Amorim Assumpção. Manual de direito processual civil: volume único. 11.ed. rev., atual. e ampl. Salvador: JusPODIVM, 2019. 1823 p. ISBN 9788544225417.",
        "CUNHA, Leonardo José Carneiro da (Org). Comentários ao código de processo civil: de acordo com a Lei n. 13.256/2016. São Paulo: Saraiva, 2016. 1437 p. ISBN 9788502635579.",
        "JÚNIOR, Humberto. Curso de direito processual civil: execução forçada, processos nos tribunais, recursos, direito intertemporal. 52. ed., rev., atual e ampl. Rio de Janeiro: Forense, 2019. xxxvi, 1358 p. ISBN 9788530982935 (v.3) 8° Período"
      ]
    },
    "PR2": {
      ementa: "Prática real na área cível. Prestação de serviços de atendimento jurídico e judicial.Acompanhamento de processos.",
      basica: [
        "JÚNIOR, Gediel Claudino de. Prática no processo civil: cabimento, ações diversas, competência, procedimentos, petições e modelos. 23. ed., rev. e atual. São Paulo: Atlas, 2019. xiv, 778 p. ISBN 9788597018622.",
        "LUZ, Valdemar P. da. Manual do advogado advocacia prática civil, trabalhista e criminal. 33. ed. São Paulo: Manole, 2021. ISBN 9786555763775. Recurso online.",
        "DELLORE, Luiz. Manual de prática civil. 12. ed., rev., atual. e ampl.Rio de Janeiro: Forense; São Paulo: Método, 2016. xx, 648 p. ISBN 9788530969769."
      ],
      complementar: [
        "ALVES, Jones Figueirêdo;",
        "FILHO, Misael. Manual das audiências cíveis. 7. ed. rev. e atual. São Paulo: atlas, c 2016. 196 p. ISBN 9788597007381.",
        "ALVIM, Arruda. Novo contencioso cível no CPC/2015: de acordo com o novo CPC - Lei 13.105/2015. São Paulo: Revista dos Tribunais, c 2016. 600 p. ISBN 9788520369364. Recursoonline.",
        "JUNIOR, Fredie (coord.);",
        "MACÊDO, Lucas Buril de;",
        "FREIRE, Alexandre (org.). Procedimentos especiais, tutela provisória e direito transitório. 2. ed., rev.e atual. Salvador: JusPODIVM, 2016. 855 p. (Coleção novo CPC: Doutrina selecionada; 4). ISBN 9788544207444.",
        "PAULINO, Roberto (coord.). Direito notarial e registral. Salvador: JusPODIVM, 2016. 190 p. (Coleção repercussões do novo CPC; 11). ISBN 8544206891.",
        "VIEIRA, Tereza Rodrigues;",
        "CARDIN, Valéria Silva Galdino;",
        "BRUNINI, Bárbara Cossettin Costa Beber (org). Famílias: psicologia e direito. 2. ed. Brasília: Zakarewicz, 2018. 455 p. ISBN 9788594232007."
      ]
    },
    "PR3": {
      ementa: "Prática real na área criminal. Prestação de serviços de atendimento jurídico e judicial. Acompanhamento de processos.",
      basica: [
        "GRECO, Rogério. Código penal comentado. 13. ed. rev., ampl. e atual. Rio de Janeiro: Impetus, 2019. [10], 1400 p. ISBN 9788529900032.",
        "OLIVEIRA, Eugênio Pacelli de. Curso de processo penal. 23. ed. rev. e atual. São Paulo: Atlas, 2019. xvi, 1102 p. ISBN 9788597019759.",
        "FILHO, Fernando da Costa. Prática de processo penal. 32. ed. São Paulo: Saraiva, 2010. 939 p. ISBN 9788502091634."
      ],
      complementar: [
        "BITENCOURT, Cezar Roberto. Tratado de direito penal: parte especial: (arts. 121 a 124-B): crimes contra pessoa. 19. ed. rev., ampl. e atual. São Paulo: Saraivajur, 2019. 656 p. ISBN 9788553603114.",
        "BITENCOURT, Cezar Roberto. Tratado de direito penal: parte especial: (arts. 155 a 212): crimes contra o patrimônio até crimes contra o sentimento religioso e contra o respeito aos mortos. 15. ed. rev. e atual. São Paulo: Saraivajur, 2019. 525 p. ISBN 9788553603121.",
        "BITENCOURT, Cezar Roberto. Tratado de direito penal: parte especial: (arts. 213 a 311-A): crimes contra a dignidade sexual até crimes contra a fé pública. 13. ed. rev. e atual. São Paulo: Saraivajur, 2019. 711 p. ISBN 9788553603121.",
        "BITENCOURT, Cezar Roberto. Tratado de direito penal: parte geral: (arts. 1º a 120). 25. ed.rev. e atual. São Paulo: Saraiva, 2019. 1040 p. ISBN 9788553603107.",
        "NUCCI, Guilherme de Souza. Prática forense penal. 13. ed. Rio de Janeiro: Forense, 2021.ISBN 9786559640980. Recurso online."
      ]
    },
    "PR4": {
      ementa: "Prática real na área trabalhista. Prestação de serviços de atendimento jurídico e judicial. Acompanhamento de processos. Tecnologia e relações de trabalho.",
      basica: [
        "ALMEIDA, André Luiz Paes de. CLT e súmulas do TST comentadas. 20. ed. São Paulo: Rideel, 2019. xvii, 1446 p. ISBN 9788533954007.",
        "BARROS, Alice Monteiro de;",
        "ALENCAR, Jessé Claudio Franco de. Curso de direito dotrabalho. 10. ed. São Paulo:",
        "LTR, [2016]. 904 p. ISBN 978-85-361-8751-8.",
        "DELGADO, Mauricio Godinho. Curso de direito do trabalho. 18. ed. rev. atual. São Paulo:",
        "LTR, 2019. 1773 p. ISBN 9788536199733."
      ],
      complementar: [
        "DELGADO, Gabriela Neves. Terceirização: paradoxo do direito do trabalho contemporâneo.São Paulo:",
        "LTR, 2003. 201 p. ISBN 9788536104300.",
        "MARTINS, Sérgio Pinto. Direito processual do trabalho. 21. ed. São Paulo: Saraivajur, 2018.208 p. (Coleção fundamentos). ISBN 9788547233112.",
        "NASCIMENTO, Amauri Mascaro. Curso de direito do trabalho: história e teoria geral dodireito do trabalho: relações individuais e coletivas do trabalho. 25. ed. São Paulo: Saraiva, 2010. 1461 p. ISBN 9788502087637.",
        "NASCIMENTO, Amauri Mascaro. Iniciação ao direito do trabalho. 32. ed. São Paulo: LTR, 2006. 351 p. ISBN 9788536107820.",
        "RODRIGUEZ, Américo. Princípios de direito do trabalho. 2. tir. São Paulo:"
      ]
    },
    "PS1": {
      ementa: "Prática simulada na área cível. Redação de peças processuais e atos jurídicos, com utilização de visual law e aplicativos desenvolvidos para a prática jurídica. Prática do processo de conhecimento. Audiências simuladas.",
      basica: [
        "ALVES, Jones Figueirêdo;",
        "FILHO, Misael. Manual das audiências cíveis. 7. ed. rev. e atual. São Paulo: atlas, c 2016. 196 p. ISBN 9788597007381.",
        "MARINONI, Luiz Guilherme;",
        "MITIDIERO, Daniel Francisco.Novo curso de processo civil. 3. ed., rev. atual. e ampl. São Paulo: Revista dos Tribunais, 2017. (v.1).",
        "DELLORE, Luiz. Manual de prática civil. 12. ed., rev., atual. e ampl.Rio de Janeiro: Forense; São Paulo: Método, 2016. xx, 648 p. ISBN 9788530969769."
      ],
      complementar: [
        "JUNIOR, Fredie. Curso de direito processual civil: Introdução ao direito processualcivil, parte geral e processo do conhecimento. 21. ed. rev., atual. e ampl. Salvador: JusPODIVM, 2019. 911 p. ISBN 9788544225462.",
        "CUNHA, Leonardo José Carneiro da. Curso de direito processualcivil: meios de impugnação às decisões judiciais e processo nos tribunais. 16. ed. rev., atual. eampl. Salvador: JusPODIVM, 2019. 879 p. ISBN 9788544225424.",
        "NEVES, Daniel Amorim Assumpção. Manual de direito processual civil: volume único. 11.ed. rev., atual. e ampl. Salvador: JusPODIVM, 2019. 1823 p. ISBN 9788544225417.",
        "CUNHA, Leonardo José Carneiro da (Org). Comentários ao código de processo civil: de acordo com a Lei n. 13.256/2016. São Paulo: Saraiva, 2016. 1437 p. ISBN 9788502635579.",
        "JÚNIOR, Humberto. Curso de direito processual civil: execução forçada, processos nos tribunais, recursos, direito intertemporal. 52. ed., rev., atual e ampl. Rio de Janeiro: Forense, 2019. xxxvi, 1358 p. ISBN 9788530982935 (v.3)"
      ]
    },
    "PS2": {
      ementa: "Prática simulada na área cível. Redação de peças processuais e atos jurídicos com utilização de visual law e aplicativos desenvolvidos para a prática jurídica. Estudos de casossimulados. Prática em recursos e execução. Advocacia digital. Inteligência artificial. Ética etecnologia.",
      basica: [
        "JÚNIOR, Gediel Claudino de. Prática no processo civil: cabimento, ações diversas, competência, procedimentos, petições e modelos. 23. ed., rev. e atual. São Paulo: Atlas, 2019. xiv, 778 p. ISBN 9788597018622.",
        "LUZ, Valdemar P. da. Manual do advogado advocacia prática civil, trabalhista e criminal. 33. ed. São Paulo: Manole, 2021. ISBN 9786555763775. Recurso online.",
        "DELLORE, Luiz. Manual de prática civil. 12. ed., rev., atual. e ampl.Rio de Janeiro: Forense; São Paulo: Método, 2016. xx, 648 p. ISBN 9788530969769."
      ],
      complementar: [
        "ALVES, Jones Figueirêdo;",
        "FILHO, Misael. Manual das audiências cíveis. 7. ed. rev. e atual. São Paulo: atlas, c 2016. 196 p. ISBN 9788597007381.",
        "ALVIM, Arruda. Novo contencioso cível no CPC/2015: de acordo com o novo CPC - Lei 13.105/2015. São Paulo: Revista dos Tribunais, c 2016. 600 p. ISBN 9788520369364. Recursoonline.",
        "JUNIOR, Fredie (coord.);",
        "MACÊDO, Lucas Buril de;",
        "FREIRE, Alexandre (org.). Procedimentos especiais, tutela provisória e direito transitório. 2. ed., rev.e atual. Salvador: JusPODIVM, 2016. 855 p. (Coleção novo CPC: Doutrina selecionada; 4).ISBN 9788544207444.",
        "PAULINO, Roberto (coord.). Direito notarial e registral. Salvador: JusPODIVM, 2016. 190 p. (Coleção repercussões do novo CPC; 11). ISBN 8544206891.",
        "VIEIRA, Tereza Rodrigues;",
        "CARDIN, Valéria Silva Galdino;",
        "BRUNINI, Bárbara Cossettin Costa Beber (org). Famílias: psicologia e direito. 2. ed. Brasília: Zakarewicz, 2018. 455 p. ISBN 9788594232007."
      ]
    },
    "PS3": {
      ementa: "Prática simulada na área criminal. Exercícios e técnicas de elaboração de peças processuais na área criminal com utilização de visual law e aplicativos desenvolvidos para a prática jurídica. Simulação do ambiente forense em relação ao papel dos operadores do Direito.Advocacia digital. Inteligência artificial. Ética e tecnologia.",
      basica: [
        "GRECO, Rogério. Código penal comentado. 13. ed. rev., ampl. e atual. Rio de Janeiro: Impetus, 2019. [10], 1400 p. ISBN 9788529900032.",
        "OLIVEIRA, Eugênio Pacelli de. Curso de processo penal. 23. ed. rev. e atual. São Paulo: Atlas, 2019. xvi, 1102 p. ISBN 9788597019759.",
        "FILHO, Fernando da Costa. Prática de processo penal. 32. ed. São Paulo: Saraiva, 2010. 939 p. ISBN 9788502091634."
      ],
      complementar: [
        "BITENCOURT, Cezar Roberto. Tratado de direito penal: parte especial: (arts. 121 a 124-B): crimes contra pessoa. 19. ed. rev., ampl. e atual. São Paulo: Saraivajur, 2019. 656 p. ISBN 9788553603114.",
        "BITENCOURT, Cezar Roberto. Tratado de direito penal: parte especial: (arts. 155 a 212): crimes contra o patrimônio até crimes contra o sentimento religioso e contra o respeito aos mortos. 15. ed. rev. e atual. São Paulo: Saraivajur, 2019. 525 p. ISBN 9788553603121.",
        "BITENCOURT, Cezar Roberto. Tratado de direito penal: parte especial: (arts. 213 a 311-A): crimes contra a dignidade sexual até crimes contra a fé pública. 13. ed. rev. e atual. São Paulo: Saraivajur, 2019. 711 p. ISBN 9788553603121.",
        "BITENCOURT, Cezar Roberto. Tratado de direito penal: parte geral: (arts. 1º a 120). 25. ed.rev. e atual. São Paulo: Saraiva, 2019. 1040 p. ISBN 9788553603107.",
        "NUCCI, Guilherme de Souza. Prática forense penal. 13. ed. Rio de Janeiro: Forense, 2021.ISBN 9786559640980. Recurso online. 10° Período"
      ]
    },
    "PS4": {
      ementa: "Prática simulada na área trabalhista. Atividades práticas de rotinas do Direito do trabalho envolvendo a formulação das principais peças processuais com utilização de visual law e aplicativos desenvolvidos para a prática jurídica. Dinâmica da Audiência Trabalhista. Advocacia digital. Inteligência artificial. Ética e tecnologia. Tecnologia e relações de trabalho. Referência básica ALMEIDA, André Luiz Paes de. CLT e súmulas do TST comentadas. 20. ed. São Paulo: Rideel, 2019. xvii, 1446 p. ISBN 9788533954007. BARROS, Alice Monteiro de; ALENCAR, Jessé Claudio Franco de. Curso de direito dotrabalho. 10. ed. São Paulo: LTR, [2016]. 904 p. ISBN 978-85-361-8751-8. DELGADO, Mauricio Godinho. Curso de direito do trabalho. 18. ed. rev. atual. São Paulo: LTR, 2019. 1773 p. ISBN 9788536199733. Referência complementar DELGADO, Gabriela Neves. Terceirização: paradoxo do direito do trabalho contemporâneo.São Paulo: LTR, 2003. 201 p. ISBN 9788536104300. MARTINS, Sérgio Pinto. Direito processual do trabalho. 21. ed. São Paulo: Saraivajur, 2018.208 p. (Coleção fundamentos). ISBN 9788547233112. NASCIMENTO, Amauri Mascaro. Curso de direito do trabalho: história e teoria geral dodireito do trabalho: relações individuais e coletivas do trabalho. 25. ed. São Paulo: Saraiva, 2010. 1461 p. ISBN 9788502087637. NASCIMENTO, Amauri Mascaro. Iniciação ao direito do trabalho. 32. ed. São Paulo: LTR,2006. 351 p. ISBN 9788536107820. PLÁ RODRIGUEZ, Américo. Princípios de direito do trabalho. 2. tir. São Paulo: LTR, 1993.315 p.",
      basica: [],
      complementar: []
    },
    "SC": {
      ementa: "Teoria sociológica clássica: Durkheim, Marx e Weber. Teoria sociológica contemporânea. Teoria social brasileira.",
      basica: [
        "CAMPOS, Juliana Lipe de;",
        "PONTES, Stefania Poeta. Sociologia. [S.l]: Editora Intersaberes, 2018. ISBN 9788559721553. Recurso online.",
        "DIAS, Reinaldo; Bibliografia Universitária Pearson. Sociologia. [S.l]: Editora Pearson, 2012 ISBN 9788564574359. Recurso online.",
        "GOMES, Mércio Pereira. Antropologia: ciência do homem, filosofia da cultura. [S.l]: Editora Contexto, 2008. ISBN 9788572443838. Recurso online."
      ],
      complementar: [
        "CHARON, Joel M. Sociologia. 2. ed. São Paulo: Saraiva, 2013. ISBN 9788502175563.Recurso online.",
        "MELLO, Luiz Gonzaga de. Antropologia cultural: iniciação, teoria e temas. 20. ed.Petrópolis: Vozes, 2015. 526p. ISBN 978-85-326-0590-0.",
        "ALVES, Benno Warken. Sociologia brasileira. [S.l]: Editora Intersaberes, 2019. ISBN 9788522701438. Recurso online.",
        "PLUMMER, Ken. Sociologia. São Paulo: Saraiva, 2014. ISBN 9788502629820. Recursoonline.",
        "WITT, Jon. Sociologia. 3. ed. Porto Alegre:",
        "AMGH, 2016. (Série A). ISBN 9788580555325.Recurso online."
      ]
    },
    "SCJ": {
      ementa: "Evolução histórica da sociologia jurídica. Aplicação dos métodos sociológicos ao estudo jurídico. Pesquisa empírica e direito. Temas de sociologia jurídica contemporâneos e direitos humanos: raça, gênero, violência, acesso à justiça, pluralismo jurídico, e sociologia dos tribunais. Implicações ético-políticas do uso de novas tecnologias. Utilização de algoritmos e de inteligência artificial em processos de tomada de decisões.",
      basica: [
        "LUHMANN, Niklas. Sociologia do direito I. 1 ed. [S.l.]: Tempo brasileiro, 1983. 252 p(Biblioteca Tempo Universitário 75).",
        "LUHMANN, Niklas. Sociologia do direito II. 1 ed. [S.l.]: Tempo brasileiro, 1985. 252 p.(Biblioteca Tempo Universitário 80).",
        "TREVES, Renato. Sociologia do direito: origens, pesquisas e problemas. 3. ed. São Paulo: Manole, 2004 373 p. ISBN 8520418554."
      ],
      complementar: [
        "BOURDIEU, Pierre. O poder simbólico. Rio de Janeiro: Bertrand Brasil, 2007. 311 p. ISBN 9788528699630.",
        "BRUHL, Henri. Sociologia do direito. 2. ed. São Paulo: Martins Fontes, 1997. 141 p.(Ensino superior). ISBN 9788533607835.",
        "ENDERLE, Rubens (Trad.). O capital: crítica da economia política: livro primeiro: o processo de produção do capital. 2. ed. -. São Paulo: Boitempo, 2017. 894 p. ISBN 9788575595480.",
        "SPAGNOL, Antônio Sergio. Sociologia jurídica. São Paulo: Saraiva, 2013. ISBN 9788502173972. Recurso online.",
        "WITT, Jon. Sociologia. 3. ed. Porto Alegre:",
        "AMGH, 2016. ISBN 9788580555325. Recursoonline."
      ]
    },
    "TCC1": {
      ementa: "r nº 123, de 14 de dezembro de 2006, que se enquadrem nos parâmetros de hipossuficiência socioeconômica deste regulamento. c) Só cabe ao Núcleo de Práticas Jurídicas atuar em favor de pessoas jurídicas quando existe projeto específico de atendimento jurídico ou judicial, nos termos da Resolução CONUN/UEMG nº 423, de 20 de fevereiro de 2019, ouvido o Coordenador do NAJ. II - promoção do acesso à justiça, através da advocacia dos interesses públicos, em especial os da comunidade do Vale do Jequitinhonha; III - apoio a projetos comunitários que realizem o interesse público defendido pelo NPJ; IV - parceria com entidades públicas ou privadas para a orientação jurídica da comunidade em que o NPJ está inserido. Art. 5º - O NPJ tem por objetivo: I - proporcionar aos alunos de graduação a visão crítica do Direito a partir de múltiplas práticasrelacionadas à sua área de formação acadêmica, assegurando a abordagem multidisciplinar; II - qualificar o aluno do curso de Direito para o exercício profissional, proporcionando-lhe o aprendizado das práticas jurídicas e da atenção constante aos princípios éticos positivados na legislação e os individuais no exercício da profissão; III - exercer a mediação, a conciliação e a arbitragem como técnicas de resolução de conflitos; IV - atender às demandas sociais, propiciando o surgimento e fortalecimento dos sujeitos coletivos de direitos; V - relacionar-se com entes governamentais e não-governamentais, intermediando convênios e parcerias que possam trazer benefício à comunidade em quaisquer das perspectivas de atuação do NPJ. TÍTULO III FUNÇÕES E DEVERES DO COORDENADOR Art. 6º - Compete ao Coordenador do NPJ: I - coordenar, supervisionar e dirigir as ações dos professores-orientadores, dos estagiários edemais pessoas que exerçam atividades no NPJ; II - responsabilizar-se pelo NPJ junto à Universidade do Estado de Minas Gerais - Unidade Guanhães e em suas relações interinstitucionais; III - zelar pelo cumprimento dos princípios e objetivos do NPJ, bem como cumprir e fazercumprir este Regulamento; IV - tomar as providências necessárias para a manutenção da infraestrutura e adequadaprovisão de materiais do NPJ, de forma a garantir seu bom funcionamento; V - fixar o horário de funcionamento do NPJ com a concordância da coordenação do curso;VI - redigir, mandar redigir, elaborar, mandar elaborar e aprovar: a) modelos de formulários, contatos e convênios atinentes ao funcionamento do NPJ; b) critérios e condições para credenciamento de organizações governamentais e não governamentais, públicas e privadas, nacionais e internacionais interessadas em estabelecer parcerias com o NPJ para o desenvolvimento de estágio; c) cronograma das atividades do estágio, bem como as escalas de atividades dos estagiários, dos professores-orientadores e dos demais funcionários, ouvida a coordenação do curso; VII - propor alterações ao presente Regulamento, que deverão ser aprovadas pelo Conselho Departamental; VIII - deliberar sobre assuntos atinentes às diversas atividades de estágio do NPJ; IX - efetuar controle de frequência dos estagiários, professores orientadores e demais pessoas que realizem atividades do NPJ; X - avaliar o desempenho dos alunos com bolsa-trabalho, decidindo pela permanência ou não destes no NPJ; XI - controlar o acervo da Biblioteca do NPJ e do empréstimo de livros para professores orientadores, estagiários e demais pessoas que realizem atividades no NPJ; XII - decidir sobre a possibilidade de aceitar novos clientes de acordo com a demanda de clientes e o fluxo processual de cada semestre; XIII- entregar bimestralmente ao Diretor da unidade relatório acerca do dinheiro recebido pelosclientes para pagamento de despesas e custas processuais; XIV - aplicar o Regimento Interno da Universidade do Estado de Minas Gerais e demais normas aplicáveis aos professores orientadores, estagiários e demais pessoas que realizem atividades no NPJ em caso de descumprimento do presente Regulamento; XV - promover reuniões, oficinas, seminários, entre outras atividades, com o objetivo de harmonizar as atividades de estágio e os princípios norteadores do NPJ, de modo a permitir uma compreensão humanista e totalizadora do fenômeno jurídico. As atividades afins precisam ter sua realização autorizada pela Direção da Unidade; XVI - acompanhar e cumprir os prazos processuais nos períodos de recesso escolar, bem como comparecer nas audiências e tomar quaisquer outras providências para o regular andamento de todos os processos do NPJ. Art. 7º - As Coordenações do Núcleo de Prática Jurídica (NPJ) e do Núcleo de Assistência Judiciária Gratuita (NAJ) serão eleitas pelo Colegiado do Curso de Direito, que informará o nome do vencedor à Chefia de Departamento pertinente, devendo ser escolhido entre os docentes do Curso que possuam habilitação para atuação profissional como advogado, devidamente inscritos na Ordem dos Advogados do Brasil, Seccional de Minas Gerais. §1º Conforme as necessidades do Curso de Direito, a Coordenação do Núcleo de Práticas Jurídicas poderá ser exercida pelo o mesmo docente encarregado da coordenação do Núcleo de Assistência Judiciária Gratuita - NAJ. §2º O mandato do coordenador será de 2 (dois) anos, permitida uma recondução. TÍTULO IV FUNÇÕES E DEVERES DOS PROFESSORES - ORIENTADORES Art. 8º - Compete aos professores orientadores, separadamente ou em conjunto com o professor coordenador, a critério deste último: I - orientar e avaliar as pesquisas, seminários e trabalhos simulados dos estagiários sob sua responsabilidade, bem como realizar a orientação jurídica e prática desses estagiários; II - orientar os estagiários sob a responsabilidade de outro professor orientador, quando este não estiver presente no NPJ, desde que seja para cumprimento de um prazo que vencerá antes do dia, ou no dia que professor do estagiário está designado para comparecer no NPJ; III - assinar, juntamente com o estagiário, as peças jurídicas necessárias ao exercício daadvocacia relativamente aos casos confiados ao NPJ; IV - desempenhar todas as demais atividades decorrentes de sua função, como a realização de audiências, sustentações orais, redação de peças processuais, cumprimento dos prazos dos processos sob sua responsabilidade direta ou sob responsabilidade dos estagiários por eleorientados; V - acompanhar o estagiário nas audiências, sessões de julgamento, visitas a clientes presos ou com dificuldades de locomoção, depoimentos em inquéritos policiais e quaisquer outras atividades externas necessárias ao exercício da advocacia, relativamente aos casos confiados ao NPJ; VI - zelar pelo cumprimento tempestivo dos despachos, das decisões interlocutórias e sentenças proferidas nos processos patrocinados pelo NPJ; VII - distribuir os casos ou processos aos estagiários sob sua responsabilidade; VIII - elaborar relatório semestral de suas atividades, a ser entregue ao coordenador;IX - desempenhar todas as demais atividades decorrentes de sua função; X - cumprir e fazer cumprir este Regulamento §1º Durante o horário de trabalho no NPJ, fica vedado aos professores orientadores: I - realizar quaisquer atividades estranhas àquelas do NPJ; II - ausentar-se sem motivo justificado; III - recusar-se a auxiliar efetivamente seus orientandos. §2º O professor-orientador deverá corrigir todas as peças realizadas por seus estagiários, no prazo de 24 (vinte e quatro) horas, contado do efetivo recebimento da petição, salvo impedimento justificado. a) É de inteira responsabilidade do professor orientador fiscalizar a elaboração das peças por seus orientandos, observando os prazos processuais e impedindo a ocorrência de decadência e prescrição. b) Se o professor orientador não puder comparecer ao NPJ, deverá proceder à correção remota das peças, bem como comunicar com seus orientandos e com o Coordenador. c) Não é permitido ao professor orientador escusar-se do cumprimento dos prazos processuais eadministrativos, bem como à orientação dos estagiários sob sua responsabilidade. § 3º É dever dos professores orientadores olhar diariamente o e-mail que lhes é enviado com as publicações para delas tomar ciência, bem como tomar ciência de todas as publicações relativasaos processos de sua responsabilidade conferindo, sempre que possível, as pastas com as a publicações de seus orientandos. I - Caso não possa cumprir os despachos, as sentenças ou decisões interlocutórias, objetos da publicação, deverá comunicar tal impedimento, de maneira efetiva, em até 24 (vinte e quatro) horas a contar da publicação, ao coordenador, para que este possa tomar as providências cabíveis. a) Se o prazo for de 24 (vinte e quatro) ou 48 (quarenta e oito) horas, o professor orientador deve comunicar ao coordenador sua ocorrência no dia da publicação. § 4º O descumprimento de qualquer dever, obrigação ou ônus constantes deste artigo 8º poderá ser punido na forma do Regimento Interno da Universidade do Estado de Minas Gerais - Unidade Guanhães e das demais normas aplicáveis. TÍTULO V DO FUNCIONAMENTO DO NÚCLEO Art. 9º - São atividades do coordenador do Núcleo, que poderá requerer auxilio, sempre sob sua supervisão, dos professores orientadores, estagiários e demais pessoas que realizem atividades no NPJ: I - manter arquivos de toda a correspondência recebida e expedida, bem como de toda a documentação referente aos estágios; II - expedir todas as declarações e certidões pertinentes aos estágios, respeitadas as competências específicas da Direção e da Coordenação do curso prevista na legislação vigente; III - manter arquivo de controle de todos os convênios que o NPJ possui para estágios na área de Direito, bem como fichas individuais de todos os estagiários que estiverem realizando etapa de seu estágio em algum desses estágios; IV - manter arquivo com cópia de todos os processos ajuizados através do Núcleo de Práticas Jurídicas, que deve ser atualizado a cada ato processual pelo estagiário responsável pela causa; V - manter cadastro de clientes do Núcleo de Práticas Jurídicas, que deve ser atualizado pelos estagiários a cada novo atendimento ou ato processual; VI - manter uma agenda das audiências referentes aos processos ajuizados pelo Núcleo de Práticas Jurídicas, agenda que deve ser atualizada pelo estagiário a cada publicação ou intimação do despacho que as designou; VII - supervisionar todo os serviços de informática e zelar pelo seu funcionamento eficaz. TÍTULO VI DO ESTÁGIO CURRICULAR CAPÍTULO I DISPOSIÇÕES GERAIS Art. 10 - O estágio curricular do curso de Direito tem duração mínima de 360 (trezentos e sessenta) horas, permitida a integralização de",
      basica: [],
      complementar: []
    },
    "TCC2": {
      ementa: "Redação científica. Normas para normalização. Defesa pública.",
      basica: [
        "ECO, Umberto. Como se faz uma tese. 26. ed. São Paulo: Perspectiva, 2016. 207 p. (Estudos(Perspectiva).). ISBN 9788527300797.",
        "GUSTIN, Miracy Barbosa de Sousa;",
        "DIAS, Maria Tereza Fonseca. (Re)pensando a pesquisajurídica: teoria e prática. Belo Horizonte: Del Rey, 2002. 237 p. ISBN 857308474",
        "SEVERINO, Antônio Joaquim. Metodologia do trabalho científico. 22. ed., rev. ampl. São Paulo: Cortez, 2002. 335 p. ISBN 8524900504."
      ],
      complementar: [
        "BERVIAN, Pedro Alcino. Metodologia científica. 5. ed. São Paulo: Pearson Education, c 2002. 242 p. ISBN 858791815",
        "MARCONI, Marina de Andrade. Metodologia científica: ciência econhecimento científico: métodos científicos: teoria, hipóteses e variáveis: metodologia jurídica. 3.ed. São Paulo: Atlas, 2000. 289 p. ISBN 852242439",
        "MARCONI, Marina de Andrade. Metodologia do trabalho científico: procedimentos básicos, pesquisa bibliográfica, projeto e relatório, publicações etrabalhos científicos. 4. ed. São Paulo: Atlas, 1992. 214 p. ISBN 8522408599.",
        "MARCONI, Marina de Andrade. Técnicas de pesquisa. 9. São Paulo Atlas 2021 1 recursoonline ISBN 9788597026610. MÜLLER, Friedrich. O novo paradigma do direito: introdução à teoria e metódica estruturantes. São Paulo: Revista dos Tribunais, 2009. 318 p. ISBN 9788520335185 (broch.)."
      ]
    },
    "TCN": {
      ementa: "Estatuto epistemológico da Teoria da Constituição. Constitucionalismo. Teoria do poder constituinte. Natureza e aplicabilidade das normas constitucionais. Preâmbulo constitucional. Ato das Disposições Constitucionais Transitórias. Tipologia das Constituições. Constituição e tempo. Natureza das normas constitucionais. Hermenêutica e interpretação constitucional. Teoria dos direitos e garantias fundamentais. Controle de constitucionalidade. Democracia, direitos fundamentais e Tecnologia da Informação e Comunicação - TIC (Information and Communications Technology - ICT)",
      basica: [
        "HÄBERLE, Peter. Hermenêutica constitucional: a sociedade aberta dos intérpretes da Constituição: contribuição para a interpretação pluralista e 'procedimental' da Constituição.Porto Alegre: [s.n.], 1997. 55 p. ISBN 8588278553.",
        "SAMPAIO, José Adércio Leite. Direitos fundamentais: retórica e historicidade. Belo Horizonte: Del Rey, 2010. xi, 435 p. ISBN 9788538401094.",
        "SARLET, Ingo Wolfgang. Curso de direito constitucional. 10. ed. São Paulo: Saraiva Jur, 2021. ISBN 9786555593402. Recurso online."
      ],
      complementar: [
        "CAPPELLETTI, Mauro. O controle judicial de constitucionalidade das leis no direitocomparado. 2. ed., reimpr. Porto Alegre: Sergio Antônio Fabris, 1999. 142 p. ISBN 8575251406",
        "CRUZ, Álvaro Ricardo de Souza. Jurisdição constitucional democrática. Belo Horizonte: Del Rey, 2004. xvi, 475 p. ISBN 8573087056.",
        "HABERMAS, Jürgen. Direito e democracia: entre facticidade e validade, volume 1. 2. ed. Riode Janeiro: Tempo Brasileiro, 2003. 354 p. (Biblioteca Tempo universitário; 101). ISBN 8528200914 (broch.).",
        "HABERMAS, Jürgen. Direito e democracia: volume 2: entre facticidade e validade. Rio de Janeiro: Tempo Brasileiro, 1997. v. 2, 352 p. (Biblioteca tempo universitário; 102). ISBN 8528200957.",
        "OMMATI, José Emílio Medauar. Teoria da constituição. 8. ed. Rio de Janeiro: Lumen Juris, 2019. xxviii, 308 p. ISBN 9788551911402."
      ]
    },
    "TGDPR1": {
      ementa: "Princípios do Direito Civil. Formação histórico-dogmática do Direito Privado. Direitosda personalidade. Pessoa. Regime das capacidades. Estatuto da pessoa com deficiência. Estatuto jurídico do nascituro. Pessoa Jurídica. Lei de Introdução às Normas do Direito brasileiro. Direitos da personalidade, identidade digital e Lei Geral de Proteção de Dados",
      basica: [
        "GONÇALVES, Carlos Roberto. Direito civil brasileiro, v. 1 parte geral. 19. São Paulo: Saraiva Jur, 2021. ISBN 9786555592849. Recurso online.",
        "MELLO, Cleyson de Moraes. Direito Civil: Famílias. 2. ed. [S.l]: Editora Freitas Bastos, 2021. ISBN 9786556750361. Recurso online.",
        "PEREIRA, Caio Mário da Silva. Instituições de direito civil: introdução ao direito civil, teoriageral de direito civil. 32. ed. rev. e atual. Rio de Janeiro: Forense, 2019. xxxiii, 603p. ISBN 9788530983697 (v. 1)."
      ],
      complementar: [
        "ARAUJO, Rogério Andrade Cavalcanti. Direito civil brasileiro: lei de introdução, pessoas ebens. São Paulo: Grupo Almedina, 2017. ISBN 9788584933204. Recurso online.",
        "SALOMÃO, Luís Felipe. Direito civil, diálogos entre a doutrina e a jurisprudência, v. 2.São Paulo: Atlas, 2020. ISBN 9788597026344. Recurso online.",
        "SCHREIBER, Anderson. Direito civil e Constituição. São Paulo: Atlas, 2013. ISBN 9788522477210. Recurso online.",
        "SOUSA, Cássio Vinícius Steiner de. Direito civil: 1 teoria geral. Porto Alegre:",
        "SAGAH, 2018.ISBN 9788595024441. Recurso online.",
        "VASCONCELOS, Pedro Pais de. Teoria geral do direito civil. 3. ed. Coimbra: Almedina, 2005. 803 p. ISBN 9789724024820."
      ]
    },
    "TGDPR2": {
      ementa: "Dos bens. Fato jurídico. Negócio jurídico. Teoria das Nulidades. Prescrição e Decadência. Inteligência Artificial e seu impacto no Direito.",
      basica: [
        "AMARAL, Francisco. Direito civil: introdução. 10. ed., rev. e mod. Rio de Janeiro: Renovar, 2018. 783 p. ISBN 9788547233402.",
        "GAGLIANO, Pablo Stolze;",
        "FILHO, Rodolfo. Novo curso de direito civil: partegeral. 14. ed. São Paulo: Saraiva, 2012. 541 p. ISBN 9788502154520 (v.1).",
        "GONÇALVES, Carlos Roberto. Direito civil brasileiro: parte geral. 17. ed. São Paulo: Saraiva, 2019. 584 p. ISBN 9788553602711 (v.1)."
      ],
      complementar: [
        "PEREIRA, Caio Mário da Silva. Instituições de direito civil: introdução ao direito civil, teoriageral de direito civil. 32. ed. rev. e atual. Rio de Janeiro: Forense, 2019. xxxiii, 603p. ISBN 9788530983697 (v. 1).",
        "SALOMÃO, Luis Felipe. Direito civil, diálogos entre a doutrina e a jurisprudência, v. 2.São Paulo: Atlas, 2020. ISBN 9788597026344. Recurso online.",
        "SCHREIBER, Anderson. Direito civil e Constituição. São Paulo: Atlas, 2013. ISBN 9788522477210. Recurso online.",
        "SOUSA, Cássio Vinícius Steiner de. Direito civil: 1 teoria geral. Porto Alegre:",
        "SAGAH, 2018.ISBN 9788595024441. Recurso online.",
        "VASCONCELOS, Pedro Pais de. Teoria geral do direito civil. 3. ed. Coimbra: Almedina, 2005. 803 p. ISBN 9789724024820."
      ]
    },
    "TGE": {
      ementa: "Natureza e elementos do estado nacional. Evolução histórica das organizações políticas. Formas de estado, de governo, sistemas de governo e regimes políticos. Modelos de democracia. Voto e sufrágio. Partidos políticos e sistemas partidários. Formação e evolução do estado brasileiro.",
      basica: [
        "NOGUEIRA, Marco Aurélio (Trad.). O futuro da democracia: umadefesa das regras do jogo. 15. ed. São Paulo: Paz e Terra, 2018. 301 p. ISBN 9788577530878.",
        "DALLARI, Dalmo de Abreu. Elementos de teoria geral do estado. 33. ed. São Paulo: Saraiva, 2016. 304 p. ISBN 9788502638617.",
        "SKINNER, Quentin. As fundações do pensamento político moderno. São Paulo: Companhiadas Letras, 2003. 724 p"
      ],
      complementar: [
        "HABERMAS, Jürgen. A inclusão do outro: estudos de teoria política. São Paulo: Loyola, c 2002. 390 p. (Humanística; 3). ISBN 8515024381.",
        "ENDERLE, Rubens (Trad.). O capital: crítica da economia política: livro primeiro: o processo de produção do capital. 2. ed. -. São Paulo: Boitempo, 2017. 894 p. ISBN 9788575595480.",
        "OLIVEIRA, Nythamar de. Rawls. Rio de Janeiro: J. Zahar, 2003. 74 p. (Passo-a-passo: 18). ISBN 8571107041",
        "RAWLS, John. Justiça e democracia. São Paulo: Martins Fontes, 2000. xxxvii, 406 p. (Coleção justiça e direito). ISBN 8533612079.",
        "ROUSSEAU, Jean-Jacques. O contrato social: princípios de direito político. Rio de Janeiro: Ediouro, 2002. 145 p. (A obra-prima de cada autor; 46). ISBN 8500512474."
      ]
    },
    "TGP": {
      ementa: "Direito Processual e Constituição. Processo. Ação. Jurisdição. Princípios e normas Fundamentais do Processo Civil. Institutos Fundamentais do Processo",
      basica: [
        "LEAL, Rosemiro Pereira. Teoria geral do processo: primeiros estudos. 14. ed. rev., ampl. eatual. Belo Horizonte: Fórum, 2018. 490 p. ISBN 9788545004868.",
        "NUNES, Dierle José Coelho;",
        "BAHIA, Alexandre Gustavo Melo Franco de Moraes;",
        "PEDRON, Flávio Barbosa Quinaud. Novo CPC: Lei 13.105, de 16.03.2015: fundamentos e sistematização. 3. ed., rev., atual. e ampl. de acordo com a Lei 13.256, de 04.02.2016 - Alteradora do Código de Processo Civil. Rio de Janeiro: Forense, 2016. 519 p. ISBN 9788530969448.",
        "JÚNIOR, Humberto. Curso de direito processual civil: teoria geral do direitoprocessual civil, processo de conhecimento, procedimento comum. 60. ed., rev., atual e ampl.Rio de Janeiro: Forense, 2019. xxxiv, 1290 p. ISBN 9788530983505 (v.1)."
      ],
      complementar: [
        "ALVIM, J. E. Carreira. Teoria geral do processo. 21. ed. rev. e atual. Rio de Janeiro: Forense, c 2018. xix, 371 p. ISBN 9788530977559.",
        "CARNELUTTI, Francesco. Sistema de direito processual civil. 2. ed. São Paulo: Lemos &Cruz, 2004. 4 v. ISBN 85-88839-23-7",
        "CHIOVENDA, Giuseppe. Instituições de direito processual civil. 3. ed. Campinas: Bookseller, 2002. 3 v. ISBN 8574680656 (obra completa).",
        "GONÇALVES, Aroldo Plínio. Técnica processual e teoria do processo. Rio de Janeiro:",
        "AIDE, 1992. 219 p. ISBN 8532100716.",
        "MARINONI, Luiz Guilherme;",
        "MITIDIERO, Daniel Francisco.Novo curso de processo civil. 3. ed., rev. atual. e ampl. São Paulo: Revista dos Tribunais, 2017. 3 v. ISBN 9788520370865 (v.1)."
      ]
    }
  },
  engenharia: {
    "ADME": {
      ementa: "Noções básicas de abertura e administração de empresas. Critérios gerais de administração aplicadas às empresas de construção civil: Administração de recursos humanos, matérias e patrimoniais; Administração de operários, produção e mecanismos de controle (PERT_CPM), Planejamento empresarial estratégico, fases e processos do planejamento; Administração financeira e orçamentária e administração do marketing.",
      basica: [
        "CHIAVENATO, I. Administração de recursos humanos: fundamentos básicos. 7. ed. São Paulo: Atlas, 2012.",
        "HALPIN, D. W. Administração da construção civil. 2. ed. Rio de Janeiro:",
        "MONTANA, P. J. Administração. São Paulo: Saraiva, 2011."
      ],
      complementar: [
        "CHIAVENATO, I. Introdução à teoria geral da administração. 7. ed. São Paulo: Makron Books, 2003.",
        "HEILBORN, G. L. Jos. Administração: princípios e tendências. 2. ed. São Paulo: 2010.",
        "KWASNICKA, E. L. Introdução à administração. 5. ed. rev. São Paulo: Atlas, 1995.",
        "MAXIMIANO, A. C. A. Introdução à administração. 6. ed. rev. São Paulo: Atlas, 2004.",
        "MORGAN, G. Imagens da organização. São Paulo: Atlas, 2010.",
        "OLIVEIRA, O. J. Como administrar empresas de projeto de arquitetura e engenharia civil. São Paulo: Pini, 2006.",
        "SANTOS, E. O. dos. Administração financeira da pequena e média empresa. 2. ed. São Paulo: Atlas, 2010."
      ]
    },
    "ARQU": {
      ementa: "Teoria da Arquitetura. Composição de espaços. Plantas, Cortes e fachadas. História da Arquitetura. Gênese de arquitetura contemporânea. Habitação Unifamiliar e multifamiliar. Conjuntos Habitacionais. Edificações comerciais e shopping center. Edificações para finalidades específicas: escolas, terminais de cargas, terminais de passageiros, aeroportos, edificações para lazer e esporte, hotéis e indústrias. Arquitetura de prédios públicos. Interação entre clima e edificação. Desempenho e conforto térmico, acústico e lumínico. Planejamento arquitetônico e estrutural. Aplicação da informática em arquitetura. Noções de urbanismo e planejamento urbano. Urbanismo e meio ambiente.",
      basica: [
        "GREGOTTI, V. Território da Arquitetura 3. ed. São Paulo: Perspectiva, 2001.",
        "MINDLIN, H. Arquitetura Moderna no Brasil; Rio de Janeiro: Aeroplano, 1999.",
        "ZEVI, B. Saber ver a Arquitetura. São Paulo: Martins Fontes, 1996."
      ],
      complementar: [
        "ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. NBR 6492: Representação de Projetos de Arquitetura. Rio de Janeiro, 1994.",
        "CORNETET, Betina Conte. Arquitetura. Porto Alegre: SER-SAGAH. 2016.",
        "LACERDA, C. B. de. Sustentabilidade e ecodesign na arquitetura de interiores. 1. ed. Curitiba: Contentus, 2020. ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. NBR 9050: Acessibilidade a Edificações, mobiliário, espaços e equipamentos urbanos. Rio de Janeiro, 2020. ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. NBR 13994: Elevadores de Passageiros - Elevadores para transporte de pessoa Portadora de Deficiência. Rio de Janeiro: 2004."
      ]
    },
    "CALN": {
      ementa: "Introdução à teoria de erro e estabilidade. Zeros de funções. Sistemas de equações lineares. Interpolação polinomial. Aproximações lineares e não lineares de funções. Integração de funções. Diferenciação de funções. Solução de equações diferenciais.",
      basica: [
        "ARENALES, S. Cálculo numérico aprendizagem com apoio de software. 2. ed. São Paulo: Cengage Learning, 2016.",
        "FRANCO, N. M. B. Cálculo numérico. São Paulo: Pearson Prentice Hall, 2006.",
        "RUGGIERO, M. A. G; Lopes, V. L. R. Cálculo Numérico: aspectos teóricos e computacionais. 2. ed. São Paulo: Pearson Makron Books, 1996."
      ],
      complementar: [
        "HAN, W. Elementary Numerical Analysis. 3. ed. New York: John Wiley & Sons, 2004.",
        "BARROSO, L. C. Cálculo numérico com aplicações. 2. ed. São Paulo: Harbra, 1987.",
        "FAIRES, J. D. Análise numérica. 5. ed. São Paulo: Pioneira Thomson Learning, 2003. CAMPOS F.; Frederico F. Algoritmos Numéricos. 2. ed. Rio de Janeiro:",
        "SILVA, L. H. M. Cálculo numérico: características matemáticas e computacionais dos métodos numéricos. São Paulo: Pearson Prentice Hall, 2003."
      ]
    },
    "CAMB": {
      ementa: "Fundamentos de meio ambiente, sustentabilidade e educação ambiental. Impactos globais e Sistemas de Meio Ambiente e Políticas Públicas Ambientais.",
      basica: [
        "EIGER, S. Introdução à engenharia ambiental: o desafio do desenvolvimento sustentável. 2. ed. Editora Pearson, 2005.",
        "DIAS, G. F. Educação ambiental: princípios e práticas. 9. ed. Editora Gaia, 2010.",
        "SANCHEZ, L. H. Avaliação de impacto ambiental. 2. ed. Editora Oficina de Textos, 2013."
      ],
      complementar: [
        "ABNT. NBR 5674: Manutenção de edificações - Requisitos para o sistema de gestão de manutenção. 2012.",
        "KUPSTAS, M. Ecologia em debate. São Paulo: Moderna, 1997.",
        "THOMAS, S. Ecohouse: a casa ambientalmente sustentável. 4. ed. Porto Alegre: Bookman, 2014.",
        "SARIEGO, J. C. L. Educação ambiental: as ameaças ao planeta azul. São Paulo: Scipione, 1994.",
        "TOWNSEND, C. R. Fundamentos em ecologia. 3. ed. Porto Alegre: Editora Artmed, 2009."
      ]
    },
    "CDI1": {
      ementa: "Limite e continuidade. Derivadas e aplicações. Integrais e aplicações. Técnicas de integração.",
      basica: [
        "FLEMMING, D. M. Cálculo A: funções, limite, derivação, integração. 5. ed. São Paulo: Prentice Hall, 2006.",
        "GUIDORIZZI, H. L. Um curso de cálculo. 5. ed. Rio de Janeiro: Livros Técnicos e Científicos, 2001. v. 1.",
        "STEWART, J. Cálculo. 8. ed. São Paulo: Cengage Learning, 2017. v. 1."
      ],
      complementar: [
        "ÁVILA, G. Cálculo das funções de uma variável. 7. ed. Rio de Janeiro:",
        "FLEMMING, D. M. Cálculo B: funções de várias variáveis, integrais múltiplas, integrais curvilíneas e de superfície. 2. ed. São Paulo: Editora Pearson, 2007.",
        "LEITHOLD, L. O cálculo com geometria analítica. 3. ed. São Paulo: Harbra, 1994. v. 2.",
        "SIMMONS, G. F. Cálculo com geometria analítica. São Paulo: Pearson Makron Books, 1987. v. 2.",
        "THOMAS, G. B. Cálculo. 11. ed. São Paulo: Pearson Education do Brasil, 2009. v. 1."
      ]
    },
    "CDI2": {
      ementa: "Sequências e séries. Superfícies quádricas. Funções de várias variáveis. Derivadas parciais",
      basica: [
        "FLEMMING, D. M. Cálculo A: funções, limite, derivação, integração. 5. ed. São Paulo: Prentice Hall, 2006.",
        "GUIDORIZZI, H. L. Um curso de cálculo 2. 5. ed. Rio de Janeiro: Livros Técnicose Científicos, 2001. v. 2.",
        "STEWART, J. Cálculo. 8. ed. São Paulo: Cengage Learning, 2017. v. 2."
      ],
      complementar: [
        "ÁVILA, G. Cálculo das funções de múltiplas variáveis. 7. ed. Rio de Janeiro:",
        "FLEMMING, D. M. Cálculo B: funções de várias variáveis, integrais múltiplas, integrais curvilíneas e de superfície. São Paulo: Pearson Prentice Hall, 2007.",
        "LEITHOLD, L. O cálculo com geometria analítica. 3. ed. São Paulo: Harbra, 1994. v. 2.",
        "SIMMONS, G. F. Cálculo com geometria analítica. São Paulo: Pearson Makron Books, 1988. v. 2.",
        "THOMAS, G. B. Cálculo. 10. ed. São Paulo: Pearson Addison Wesley, 2002. v. 2."
      ]
    },
    "CDI3": {
      ementa: "Integrais múltiplas. Cálculo Vetorial.",
      basica: [
        "ÁVILA, G. Cálculo das funções de múltiplas variáveis. 7. ed. Rio de Janeiro:",
        "GUIDORIZZI, H. L. Um curso de cálculo. 5. ed. Rio de Janeiro: Livros Técnicos e Científicos, 2001. v. 2.",
        "STEWART, J. Cálculo. 8. ed. São Paulo: Cengage Learning, 2017. v. 2."
      ],
      complementar: [
        "GONÇALVES, M. B.; Flemming, D. M. Cálculo B: funções de várias variáveis, integrais múltiplas, integrais curvilíneas e de superfície. 2. ed. São Paulo: Editora Pearson, 2007.",
        "LEITHOLD, L. O cálculo com geometria analítica. 3. ed. São Paulo: Harbra, 1994. v. 2.",
        "ROCHA, L. M. Cálculo 2. 2. ed. São Paulo: Atlas, 1990.",
        "SIMMONS, G. F. Cálculo com geometria analítica. São Paulo: Pearson Makron Books, 1987. v. 2.",
        "THOMAS, G. B. Cálculo. 11. ed. São Paulo: Pearson Education do Brasil, 2009. v.1."
      ]
    },
    "CDI4": {
      ementa: "Equações diferenciais. Equações diferenciais ordinárias de primeira ordem. Transformada de Laplace. Transformada de Fourier. Equações diferenciais parciais.",
      basica: [
        "GUIDORIZZI, H. L. Um curso de cálculo. 5. ed. Rio de Janeiro: Livros Técnicos e Científicos, 2001. v. 2.",
        "STEWART, J. Cálculo. 8. ed. São Paulo: Cengage Learning, 2017. v. 2.",
        "CULLEN, M. R. Equações diferenciais. 3. ed. São Paulo: Pearson Makron Books, 2001. v. 2."
      ],
      complementar: [
        "MEADE, D. B. Equações diferenciais elementares e problemas de valores de contorno. 11. ed. Rio de Janeiro:",
        "CENGEL, Y. A. Equações diferenciais. Porto Alegre:",
        "MORGADO, M. C. F. Cálculo diferencial e integral de funções de várias variáveis. 3. ed. Rio de Janeiro:",
        "THOMAS, G. B. Cálculo. 10. ed. São Paulo: Pearson Addison Wesley, 2002. v. 2.",
        "JUNIOR, A. S. Equações diferenciais uma visão intuitiva usando exemplos. São Paulo: Blucher, 2021."
      ]
    },
    "CMAT": {
      ementa: "Ligações químicas, tipos de materiais e suas características básicas. Propriedades físicas e mecânicas dos materiais. Níveis estruturais e sua caracterização. Estrutura cristalina. Alotropia. Direções e planos cristalinos. Técnicas de análise estrutural. Imperfeições estruturais. Soluções sólidas substitucionais e intersticiais. Estruturas amorfas. Noções de micro e macroestrutura. Relação entre estrutura, propriedades e processamento. Materiais compósitos. Critérios para a seleção de materiais de engenharia para projetos de engenharia diversos.",
      basica: [
        "WRIGHT, W. J. Ciência e engenharia dos materiais. 3. ed. São Paulo: Cengage Learning, 2019.",
        "RETHWISCH, David G. Ciência e engenharia de materiais: uma introdução. 8. ed. Rio de Janeiro:",
        "SHACKELFORD, J. F. Ciência dos materiais. São Paulo: Pearson Prentice Hall, 2008."
      ],
      complementar: [
        "HILL, R. E. Physical metallurgy principles. 4. ed. Stanford: Cengage Learning, 2010.",
        "SCHMID, S. R. Manufacturing processes for engineering materials. 5. ed. Singapore: Pearson Prentice Hall, 2008.",
        "PARDINI, L. C. Compósitos estruturais: ciência e tecnologia. São Paulo: Blücher, 2006.",
        "SCHEY, J. A. Introduction to manufacturing processes. 3. ed. New York: Industrial Engineering Series, 2000.",
        "VLACK, L. H. Princípios de ciência e tecnologia dos materiais. Rio de Janeiro: Campus, 1984."
      ]
    },
    "COEX": {
      ementa: "Linguagem, desenvolvimento humano e consciência. Relações sociais e linguagem. Noções sobre letramento acadêmico. Dialogismo e escrita científica. Estudo de gêneros textuais acadêmico-científicos. Artigo científico. Resumo e resenha. Técnicas e estratégias de leitura e produção de textos científicos. Estrutura textual: projeto de texto e organização paragrafal. Parágrafo e tópico frasal em textostécnicos e acadêmicos. Elementos de coesão em textos acadêmico-científicos. Emprego da norma padrão da língua portuguesa escrita.",
      basica: [
        "BALTAR, Marcos Antônio Rocha.",
        "RIZZATTI, Mary Elizabeth.",
        "ZANDOMENEGO, Diva. Leitura e produção textual acadêmica. Florianópolis: LLE/CCE/",
        "HENDGES, G. H. Produção textual na universidade. São Paulo: Parábola Editorial, 2010.",
        "CAMPOS, E. N. Técnica de redação. Rio de Janeiro: Imperial Novo Milênio, 2011."
      ],
      complementar: [
        "BEZERRA, M. A. (orgs.). Gêneros textuais e ensino. São Paulo: Parábola Editorial, 2010.",
        "FIORIN, J. L. Introdução ao pensamento de Bakhtin. São Paulo: Contexto, 2016.",
        "GARCIA, O. M. Comunicação em prosa moderna: aprender a escrever, aprendendoa pensar. Rio de Janeiro: Editora da Fundação Getúlio Vargas, 2010.",
        "ZILBERKNOP, L. S. Português instrumental. Porto Alegre: Editora Sagra Luzzatto, 2019.",
        "MEDEIROS, J. B. Redação científica: a prática de fichamentos, resumos, resenhas.São Paulo: Atlas, 2019."
      ]
    },
    "CON1": {
      ementa: "Concreto e aço estruturais. Segurança e desempenho das obras de concreto armado. Estudo das vigas: dimensionamento da armadura de flexão e armadura de cisalhamento em vigas (ELU); verificação das flechas (ELS); armaduras de suspensão; aderência e ancoragem; detalhamento.",
      basica: [
        "ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS - ABNT NBR 6118: Estruturas de Concreto Armado - Procedimentos. Rio de Janeiro:",
        "MARCHETTI, O. Concreto armado eu te amo. 10. ed. São Paulo: Blucher, 2019. v. 1.",
        "FILHO, J. R. Cálculo e detalhamento de estruturas usuais de concreto armado. 4. ed. São Carlos:"
      ],
      complementar: [
        "ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS - ABNT NBR 7480 Barras e fios de aço para armaduras para concreto. Rio de Janeiro:",
        "ABNT, 1994. ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS - ABNT NBR 6120 Ações para o cálculo de estruturas de edificações. Rio de Janeiro:",
        "GRABASCK, J. R. et. al. Concreto armado aplicado em pilares, vigas-parede e reservatórios. Porto Alegre:",
        "PINHEIRO, L. M. Fundamentos do concreto e projeto de edifícios. São Carlos,",
        "PARIZOTTO, L. Concreto armado. Porto Alegre:"
      ]
    },
    "CON2": {
      ementa: "Lajes: Tipos de lajes usuais em concreto armado. Lajes maciças: classificação de acordo com o tipo de vinculação; ações atuantes; esforços atuantes; compatibilização dos momentos fletores; dimensionamento da armadura positiva e negativa; verificação da necessidade de armadura de cisalhamento; detalhamento. Pilares: área de influência, pré-dimensionamento da seção de concreto, dimensionamento e detalhamento das armaduras longitudinais e transversais, armaduras de proteção (ganchos), detalhamento.",
      basica: [
        "ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS - ABNT NBR 6118: Estruturas de Concreto Armado - Procedimentos. Rio de Janeiro:",
        "MARCHETTI, O. Concreto armado eu te amo. 10. ed. São Paulo: Blucher, 2019. v. 1.",
        "FILHO, J. R. Cálculo e detalhamento de estruturas usuais de concreto armado. 4. ed. São Carlos:"
      ],
      complementar: [
        "ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS - ABNT NBR 7480: barras e fios de aço para armaduras para concreto. Rio de Janeiro:",
        "ABNT, 1994. ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS - ABNT NBR 6120: ações para o cálculo de estruturas de edificações. Rio de Janeiro:",
        "LEONHARDT, F. Construções de concreto: princípios básicos da construção de pontes de concreto. Rio de Janeiro: Interciência, 1979. v. 6.",
        "PINHEIRO, L. M. Fundamentos do concreto e projeto de edifícios. São Carlos:",
        "EESC, 2007. SÜSSEKIND, J. C. Curso de concreto armado. São Paulo: Globo, 1980. v. 1."
      ]
    },
    "DEST": {
      ementa: "Introdução ao Desenho técnico. Normas técnicas brasileiras: Folha de desenho técnico, execução de caractere para escrita em desenho técnico. Aplicação de linhas em desenhos: tipos e larguras das linhas. Emprego de escalas. Contagem em desenho técnico. Princípios gerais de representação em desenho técnico. Perspectivas. Vistas em corte. Introdução ao desenho auxiliado por computador.",
      basica: [
        "VIERCK, C. J. Desenho técnico e tecnologia gráfica. 8. ed. São Paulo: Globo, 2005.",
        "SILVEIRA, S. J. Aprendendo AutoCAD 2008: simples e rápido. Florianópolis: Visual Books, 2008.",
        "VENDITTI, M. V. R. Desenho técnico sem prancheta com AutoCAD 2008. Florianópolis: Visual Books, 2007."
      ],
      complementar: [
        "MONTENEGRO, Gildo A. Desenho arquitetônico. 4. ed. São Paulo: Edgard Blücher, 2001.",
        "SIMMONS, C. H. Desenho técnico. São Paulo: Hemus, 2004.",
        "FERREIRA, P. Desenho técnico básico. 4. ed. Rio de Janeiro: Imperial Novo Milênio, 2010.",
        "RIBEIRO, C. T.; DIAS J.;",
        "SOUSA, L. Desenho técnico moderno. 4. ed. Rio de Janeiro:",
        "PEIXOTO, V. V. Manual básico de desenho técnico. 4. ed. Florianópolis:"
      ]
    },
    "ECENG": {
      ementa: "Os problemas econômicos primários; Teoria sobre o valor; Microeconomia; Macroeconomia; O funcionamento do mercado; Fatores deprodução; Estruturas de mercado; Economia monetária; Engenharia econômica e estudos de viabilidade de empreendimentos. Noções básicas de mercado de trabalho, mercado imobiliário e mercado da construção civil. Engenharia Econômica: (1) Matemática financeira, capitalização simples e composta; Descontos; Séries de Pagamentos; (2) Análise de Investimentos: (a) Critérios para análise de investimentos: Período de Pay- Back; VPL (Valor Presente Líquido); TIR (Taxa Interna de Retorno) e TIRM (Taxa Interna de Retorno Modificada); IL (Índice de Lucratividade; Análise de Sensibilidade; Ecobusiness, Commodities Ambientais e Crédito de Carbono.",
      basica: [
        "HIRSCHFELD, H. Engenharia econômica e análise de custos: aplicações práticas para economistas, engenheiros, analistas de investimentos e administradores. 7. ed. rev. atual. ampl. São Paulo: Atlas, 2000.",
        "MANKIW, N. G. Introdução à economia. 4. ed. São Paulo: Cengage Learning, 2019.",
        "RICKLEFS, R. E. A economia da natureza: um livro texto em ecologia básica. 5. ed. Rio de Janeiro: Guanabara Koogan, 2003."
      ],
      complementar: [
        "FEA-USP. Contabilidade introdutória livro de exercícios. 12. ed. São Paulo: Atlas, 2019.",
        "FERREIRA, J. A. S. Finanças Corporativas: conceitos e aplicações. São Paulo: Pearson Prentice, 2005.",
        "GREMAUD, A. P. Manual de Economia. 7. ed. São Paulo: Saraiva, 2017.",
        "VINHA, V. Economia do Meio Ambiente: teoria e prática. Rio de Janeiro: Elsevier, 2010.",
        "RIBEIRO, M.de S. Contabilidade ambiental. São Paulo: Saraiva, 2010."
      ]
    },
    "ESMA": {
      ementa: "Estudo sobre as Propriedades Físicas e Mecânicas, Ensaios de Caracterização Mecânica, Ligações de Peças Estruturais, Peças Tracionadas, Peças Comprimidas, Peças solicitadas por Flexão Simples, Peças solicitadas por Flexão Oblíqua, Peças solicitadas por Flexão Composta.",
      basica: [
        "DIAS, A. A. Dimensionamento de elementos estruturais de madeira. Barueri: Manole, 2003.",
        "MOLITERNO, A. Caderno de projetos de telhados em estruturas de madeira. São Paulo: Edgar Blucher, 2010.",
        "PFEIL, M. Estruturas de madeira. Rio de Janeiro: Livros Técnicos e Científicos, 2003."
      ],
      complementar: [
        "ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. NBR 7190: Projeto de estruturas de madeira. Rio de Janeiro:",
        "AZEREDO, H. A. O edifício até a sua cobertura. 2. ed., rev. São Paulo: Edgard Blücher, 1997.",
        "MARTINS, G. C. A. Estruturas de madeira projetos, dimensionamento e exemplos de cálculo. Rio de Janeiro:",
        "PEREIRA, A. F. Madeiras brasileiras guia de combinação e substituição. São Paulo: Blucher, 2013.",
        "PFEIL, M. Estruturas de madeira: dimensionamento segundo a norma brasileira NBR 7190/97 e critérios das normas norte-americana NDS e européia EUROCODE 5. 6. ed. Rio de Janeiro:"
      ]
    },
    "ESME": {
      ementa: "Análise do histórico, critérios de dimensionamento e cargas. Introdução ao estudo dos perfis de chapa dobrada a frio. Dimensionamento de perfis laminados: barras tracionadas. Dimensionamento de barras comprimidas, barras flétidas e barras submetidas a solicitação composta. Análise de Ligações e cálculo do desenho de ligações parafusadas, rebitadas e soldadas. Estudo sobre o uso recomendado e simbologia da solda.",
      basica: [
        "CALDAS, R., B. Dimensionamento de elementos estruturais de aço e mistos de aço e concreto. 1. ed. São Paulo: Pearson Universidades: 2015.",
        "PFEIL, W. Estruturas de aço dimensionamento prático. 9. ed. Rio de Janeiro:",
        "PINHEIRO, A. C. da F. B. Estruturas metálicas: cálculos, detalhes, exercícios e projetos. 2. ed. São Paulo: Edgar Blucher, 2005."
      ],
      complementar: [
        "ADORNA, D. da L. Estruturas. Porto Alegre:",
        "PFEIL, M. Estruturas de aço: dimensionamento prático. 8. ed. Rio de Janeiro:",
        "PINHEIRO, A. C. da F. B. Estruturas metálicas. 2. ed. São Paulo: Blucher, 2005. SÜSSEKIND, J. C. Curso de análise estrutural: estruturas isostáticas. 6. ed. Porto Alegre: Globo, 1981. v. 3.",
        "CUNHA, A., S. Estruturas metálicas: manual prático para projetos, dimensionamento e laudos técnicos. 2. ed. São Paulo: Oficina de Textos, 2020."
      ]
    },
    "ESTP": {
      ementa: "Estatística Descritiva. Probabilidade. Variáveis aleatórias discretas. Variáveis aleatórias contínuas. Estimação. Testes de hipóteses.",
      basica: [
        "MORETTIN, P. A. Estatística básica. 7. ed. São Paulo: Saraiva, 2011.",
        "BORROR, C. M. Probabilidade e estatística na engenharia. 4. ed. Rio de Janeiro:",
        "MYERS, S. L.; YE, K. Probabilidade & estatística: para engenharia e ciências. 8. ed. São Paulo: Pearson Prentice Hall, 2009."
      ],
      complementar: [
        "DANTAS, C. A. B. Probabilidade: um curso introdutório. 3. ed. São Paulo:",
        "FARBER, E. Estatística aplicada. 4. ed. São Paulo: Pearson Education, 2010.",
        "LIMA, A. C. P. Noções de probabilidade e estatística. 6. ed., São Paulo:",
        "RUNGER, G. C. Estatística aplicada e probabilidade para engenheiros. 6. ed. Rio de Janeiro:",
        "TRIOLA, M. F. Introdução à estatística. 12. ed. Rio de Janeiro:"
      ]
    },
    "ESTR": {
      ementa: "Análise dos elementos de projetos, características geométricas, velocidade e distância de visibilidade; Reconhecimento; Exploração; Escolha de Traçado; Linhas de Ensaio; Curvas Horizontais Circulares; Curvas de Transição; Perfil de Projeto; Conceitos Gerais; Rampas; Curvas Verticais; Seções Transversais; Cálculo de Volumes; Diagramas de Massas; Conceitos; Projeto de Greide; Projeto (Estradas); Distribuição da Terraplanagem.",
      basica: [
        "CARVALHO, M. P. Curso de Estradas. Rio de Janeiro: Científica, 1972. v. 1 e 2.",
        "JR., E. Manual de obras rodoviárias e pavimentação urbana. 2. ed. São Paulo: Oficina de Textos, 2019.",
        "PINTO, S. Pavimentação asfáltica conceitos fundamentais sobre materiais e revestimentos asfálticos. Rio de Janeiro:"
      ],
      complementar: [
        "ABITANTE, A. L. Estradas. Porto Alegre:",
        "BALBO, J. T. Pavimentação asfáltica: materiais, projeto e restauração. 1. ed. São Paulo: Oficina de Textos, 2007.",
        "BRASIL, Departamento Nacional de Estradas de Rodagem. Manual de projetos de obras-de-arte especiais. Rio de Janeiro:",
        "BRASIL, Departamento Nacional de Infraestrutura de Transportes. Diretrizes básicas para elaboração de estudos e projetos rodoviários: escopos básicos e instruções de serviço, 2006.",
        "PIMENTA, C. R. et. al. Projeto geométrico de rodovias. Rio de Janeiro: Elsevier, 2017."
      ]
    },
    "FMAT": {
      ementa: "Produtos notáveis e fatoração. Estudo de funções. Matrizes, determinantese sistemas lineares.",
      basica: [
        "BOULOS, P. Pré-cálculo. São Paulo: Pearson Education do Brasil, 2001.",
        "DEMANA, F. D.; WAITS B. K.; FOLEY G. D.;",
        "KENNEDY, D. Pré Cálculo. 2. ed. São Paulo: Pearson Education do Brasil, 2013.",
        "PETROLI, T. Pré-cálculo. Curitiba: Contentus, 2020."
      ],
      complementar: [
        "LOSS, T. Fundamentos de Matemática. Curitiba: Contentus, 2020.",
        "DOLCE, O. Álgebra IV: funções, limites, derivadas. São Paulo: Moderna, 1973.",
        "DOLCE, O. Conjuntos relações funções inequações. São Paulo: Moderna, 1973.",
        "GUIDORIZZI, H. L. Um curso de cálculo. 5. ed. Rio de Janeiro: Livros Técnicos e Científicos, 2001. v. 1.",
        "KIME, L. A. Álgebra na universidade: um curso pré-cálculo. 5. ed. Rio de Janeiro:"
      ]
    },
    "FSC1": {
      ementa: "Cinemática vetorial; Leis de Newton; Trabalho e energia mecânica; Sistemas de partículas; Colisões; Cinemática e dinâmica dos corpos rígidos.",
      basica: [
        "KRANE, K. S. Física 1. 5. ed. Rio de Janeiro:",
        "MOSCA, G. Física 1: para cientistas e engenheiros: mecânica, oscilações e ondas, termodinâmica. 5. ed., Rio de Janeiro:",
        "ZEMANSKY, M. W. Física I: mecânica. 12. ed. São Paulo: Addison Wesley, 2008. v. 1."
      ],
      complementar: [
        "FINN, E. J. Física um curso universitário: mecânica. 2. ed. São Paulo: E. Blücher, 1972. v. 1.",
        "BAUER, W. Física para universitários óptica e física moderna. Porto Alegre Bookman, 2013. v. 1.",
        "SKOVE, M. J. Física. São Paulo: Pearson Makron Books, 1999. v. 1.",
        "KNIGHT, R. D. Física uma abordagem estratégica. 2. ed. Porto Alegre: Bookman, 2009. v. 1.",
        "SERWAY, R. A. Física para cientistas e engenheiros: mecânica. São Paulo: Cengage Learning, 2013. v. 1."
      ]
    },
    "FSC2": {
      ementa: "Oscilações e Ondas; Fluidos; Termodinâmica.",
      basica: [
        "KRANE, K. S. Física 2. 5. ed. Rio de Janeiro:",
        "MOSCA, G. Física 1: para cientistas e engenheiros: mecânica, oscilações e ondas, termodinâmica. 5. ed., Rio de Janeiro:",
        "ZEMANSKY, M. W. Física II: ondas e termodinâmica. 14. ed. São Paulo: Pearson, 2016."
      ],
      complementar: [
        "FINN, E. J. Física um curso universitário. São Paulo: Edgard Blücher, 1972. v. 2.",
        "JEWETT JR, John W. Física para cientistas e engenheiros: oscilações, ondas e termodinâmica. São Paulo: Cengage Learning, 2013. v. 2.",
        "SKOVE, M. J. Física. São Paulo: Pearson Makron Books, 1999. v. 2.",
        "KNIGHT, R. D. Física uma abordagem estratégica, Porto Alegre: Bookman, 2009. v. 1.",
        "TELLES, D. D.; Mongelli, N. J. Física com aplicação tecnológica: oscilações, ondas, fluidos e termodinâmica. São Paulo: Editora Blucher, 2014."
      ]
    },
    "FSC3": {
      ementa: "Carga elétrica e campo elétrico. Lei de Gauss. Potencial Elétrico. Capacitância e dielétricos. Corrente, resistência e força eletromotriz. Circuitos de corrente contínua. Campo magnético e força magnética. Fontes de campo magnético. Indução eletromagnética.",
      basica: [
        "KRANE, K. S. Física 3. 5. ed. Rio de Janeiro:",
        "SERWAY, R. A. Física para cientistas e engenheiros: eletricidade e magnetismo. São Paulo: Cengage Learning, 2017. v. 3.",
        "MOSCA, G. Física para cientistas e engenheiros: eletricidade e magnetismo, ótica. 6. ed., Rio de Janeiro:",
        "YOUNG, H. D.; Freedman, R. A. Física III: eletromagnetismo. 12. ed. São Paulo: Pearson, 2008."
      ],
      complementar: [
        "FINN, E. J. Física um curso universitário: campos e ondas. São Paulo: Editora Blucher, 2014. v. 2.",
        "SKOVE, M. J. Física. São Paulo: Pearson Makron Books, 1999. v. 2.",
        "KESTEN, P. R. Física na universidade para as ciências físicas e da vida. Rio de Janeiro:",
        "KNIGHT, R. D. Física uma abordagem estratégica, Porto Alegre: Bookman, 2009. v. 3.",
        "TELLES, D. D.; MONGELLI N. J. Física com aplicação tecnológica: eletrostática, eletricidade, eletromagnetismo e fenômenos de superfície. São Paulo: Blucher, 2016."
      ]
    },
    "FUNC": {
      ementa: "Introdução à programação de computadores, Tipos de algoritmos, Conceitos básicos da linguagem C, Estrutura de controle em C, Estruturas de dados em C, Modularização de algoritmos em C, Manipulação de arquivos em C.",
      basica: [
        "CAMPOS, E. A. V. de. Fundamentos da programação de computadores: algoritmos, Pascal C/C++ e Java. 2. ed. São Paulo: Pearson Prentice Hall, 2007.",
        "DAMAS, L. Linguagem C. 10. ed. Rio de Janeiro:",
        "MIZRAHI, V. V. Treinamento em linguagem C++: módulo 1. 2. ed. São Paulo: Pearson Prentice Hall, 2006."
      ],
      complementar: [
        "JOHNSON, J. A. Introdução à informática. São Paulo: Pearson Prentice Hall, 2004.",
        "CARBONI, I. F. Lógica de programação. São Paulo: Pioneira Thomson Learning, 2003.",
        "FERTIG, C. Algoritmos e programação: teoria e prática. 2. ed. São Paulo: Novatec, 2006.",
        "SCHILDT, H. C completo e total. São Paulo: Makron Books, 1990.",
        "CONCÍLIO, R. Algoritmos e lógica de programação: um texto introdutório para a engenharia. 3. ed. São Paulo: Cengage Learning, 2019."
      ]
    },
    "FUND": {
      ementa: "Tipos de fundações. Prova de carga direta. Fundações rasas e profundas: dimensionamento (detalhes). Tipos de estruturas de contenção. Barragens de terra e enrocamento: fatores condicionantes de projeto, estudo de empréstimo, compactação, análise de estabilidade e fundações. Aplicação de instrumentação em obras de terra.",
      basica: [
        "ALONSO, U. R. Exercícios de fundações. 3. ed. Rio de Janeiro: Edgard Blücher, 2019.",
        "ENIYAMA, S. Fundações: teoria e prática. São Paulo:",
        "VELLOSO, D. de A. Fundações: critérios de projeto, investigação do subsolo, fundações superficiais, fundações profundas. São Paulo: Oficina de Textos, 2011."
      ],
      complementar: [
        "ALONSO, U. R. Dimensionamento de fundações profundas. Rio de Janeiro: Edgard Blucher, 1989.",
        "GIACHETI, H. L. Fundações: ensaios estáticos e dinâmicos. São Paulo: Oficina de Textos, 2013.",
        "ANDRADE, S. L. P. et. al. FUNDAÇÕES E OBRAS DE CONTENÇÃO. Porto Alegre:",
        "NIEBLE, C. M. Estabilidade de taludes naturais e de escavação. 2. ed. São Paulo: Edgard Blucher, 1984.",
        "GUIMARÃES, D. Fundações. Porto Alegre:"
      ]
    },
    "GAAL": {
      ementa: "Álgebra vetorial. Estudo analítico da reta e do plano. Espaços vetoriais. Transformações lineares. Autovalores e autovetores. Cônicas.",
      basica: [
        "ANTON, H. Álgebra linear com aplicações. 10. ed. Porto Alegre: Bookman, 2012.",
        "BOULOS, P. Geometria analítica: um tratamento vetorial. 3. ed. São Paulo: Prentice-Hall, 2005.",
        "WINTERLE, P. Álgebra linear. 2. ed. São Paulo: Pearson Makron Books, 1987."
      ],
      complementar: [
        "FRANCO, N. M. B. Álgebra linear. São Paulo: Pearson Education do Brasil, 2016.",
        "HOLT, J. Álgebra linear com aplicações. São Paulo:",
        "JUNIOR, A. P. Álgebra linear e suas aplicações: resumo teórico e exercícios. 3. ed. São Paulo:",
        "STEIMBRUCH, A. Geometria Analítica. Editora Pearson Education do Brasil, 1955.",
        "STRANG, G. Álgebra linear e suas aplicações. 4. ed. São Paulo: Cengage Learning, 2011."
      ]
    },
    "GDES": {
      ementa: "Introdução à Geometria Descritiva: uso de esquadros, sistemas projetivos, operações projetivas e classificação das projeções. Estudo da Geometria Cotada: ponto, reta e plano em projeção cotada. Estudo dos Métodos de Monge: ponto, reta e plano em projeção mongeana. Abordagem dos sistemas de projeções cônicas e cilíndricas. Análise de figuras planas e poliedros: visibilidade, interseções e problemas. Aplicações da Geometria Descritiva na Engenharia e resoluções de problemas aplicados.",
      basica: [
        "LACOURT, H. Noções e fundamentos de geometria descritiva: ponto, reta, planos, métodos descritivos e figuras em planos. Rio de Janeiro: Guanabara Koogan, 1995.",
        "JUNIOR, A. dos R. Noções de geometria descritiva. São Paulo: Nobel, 1970.",
        "RICCA, Guilherme. Geometria descritiva: Método de Monge. 5. ed. Lisboa: Fundação Calouste Gulbenkian, 2011."
      ],
      complementar: [
        "MARTINS, E. Z. Noções de geometria descritiva. Sagra-Luzzatto, 2002.",
        "MACHADO, A. Geometria descritiva. Atual, 1991.",
        "MANDARINO, D. Geometria descritiva. Plêiade, 2002.",
        "MONTENEGRO, G. A. Geometria descritiva. São Paulo: Editora Edgard Blucher, 2004. v. 1. PINHEIRO V. A. Noções de Geometria Descritiva I, Ponto, reta e plano. Editora: Ao livro técnico, 1977."
      ]
    },
    "GEOG": {
      ementa: "Estudo das características do planeta Terra ao longo do tempo geológicoe análise das suas principais propriedades. Identificação da dinâmica da crosta terrestre: constituição litológica externa e constituição química. Análise da importância dos minerais: principais propriedades. Identificação e análise das rochas: rochas magmáticas, sedimentares e metamórficas. Estudo e reflexão dos fundamentos da dinâmica externa da Terra: intemperismo, água continental no subsolo e nasuperfície, atividades geológicas do vento, do gelo, do mar e dos organismos. Estudoe análise da dinâmica interna da Terra: magma, vulcanismo, plutonismo, terremotos, epirogênese, perturbações das rochas e tectônica de placas. Processos e fatores de formação do solo.",
      basica: [
        "AMARAL, S. E. Geologia geral. 14. ed. rev. São Paulo: Companhia Editora Nacional, 2003.",
        "BRITO, S. N. A. Geologia de Engenharia. São Paulo: Associação Brasileira de Geologia da Engenharia, 1998.",
        "TAIOLI, F. Decifrando a terra. 2. ed. São Paulo: Companhia Editora Nacional, 2009."
      ],
      complementar: [
        "GUERRA, A. J. T. Geomorfologia do Brasil. 8. ed. Rio de Janeiro: Editora Bertrand Brasil, 2012.",
        "LEPSCH, I. F. Formação e conservação dos solos. São Paulo: Oficina de Textos, 2005.",
        "POPP, J. H. Geologia geral. 6. ed. Rio de Janeiro: Editora",
        "PRESS, S. G. Para entender a terra. 4. ed. Porto Alegre: Bookman, 2006.",
        "CORRÊA, G. F. Pedologia: base para distinção de ambientes. 5. ed. Viçosa:"
      ]
    },
    "GIP": {
      ementa: "Introdução à Administração da Produção e aos mecanismos de planejamento, programação, controle e avaliação da produção. Introdução aos processos de Gerenciamento de Projetos. Estudo dos elementos fundamentais da Gestão da Inovação e do Empreendedorismo. Introdução à Gestão da Qualidade e estudo das suas principais ferramentas.",
      basica: [
        "PROJECT MANAGEMENT INSTITUTE. Um guia do conhecimento em gerenciamento de projetos: Guia PMBOK. 7. ed. Filadélfia: Project Management Institute, 2021.",
        "JOHNSTON, R. Administração da produção. 8. ed. Belo Horizonte: Atlas, 2018.",
        "TIGRE, P. B. Gestão da inovação: a economia da tecnologia no Brasil. Rio de Janeiro: Elsevier: 2014."
      ],
      complementar: [
        "CHIAVENATO, I. Gestão de pessoas: o novo papel dos recursos humanos nas organizações. Rio de Janeiro: Editora Campus, 1999.",
        "DUTRA, J. Gestão de pessoas: modelo, processos, tendências e perspectivas. São Paulo: Editora Atlas, 2002.",
        "FILHO, M. Planejamento e controle da produção: dos fundamentos ao essencial. Belo Horizonte: Atlas, 2010.",
        "FLEURY, M. T. L. (Org.). As pessoas na organização. São Paulo: Gente, 2002.",
        "PORTO, G. (Org.). Gestão da inovação e empreendedorismo. 1. ed. Rio de Janeiro: Elsevier, 2013."
      ]
    },
    "HCS": {
      ementa: "Constituição das Ciências Sociais. As relações de produção no capitalismo e as relações sociais. Tecnologia, sociedade e transformação. Correlação do conhecimento da Filosofia e das Ciências Sociais com a subsunção de um compromisso ético em relação à comunidade. Temas emergentes em Humanidades: direitos humanos e fundamentais; combate ao racismo; Educação e diversidade; preservação ambiental e a questão indígena; proteção à mulher, criança, adolescente, idoso e pessoa com deficiência.",
      basica: [
        "MARTINS, M. H. P. Filosofando: introdução à filosofia. 3. ed. rev. São Paulo: Moderna, 2003.",
        "CHAUÍ, M. de S. Convite à filosofia. 14. ed. São Paulo: Ática, 2012.",
        "COSTA, C. Sociologia: introdução à Ciência da Sociedade. 3. ed. São Paulo: Moderna, 2010."
      ],
      complementar: [
        "BAUMAN, Z. A riqueza de poucos beneficia todos nós? Rio de Janeiro: Zahar, 2013.",
        "FREIRE, P. Pedagogia do oprimido. 69. ed. São Paulo: Paz e Terra, 2019.",
        "CUNHA, S. B. Impactos ambientais urbanos no Brasil. 5. ed. Rio de Janeiro: Bertrand Brasil, 2009.",
        "BIROLI, F. Feminismo e política: uma introdução. São Paulo: Boitempo, 2014.",
        "SILVA, Santuza Amorim da;",
        "PRAXEDES, Vanda Lúcia. Educação e relações étnico-raciais: desafios, limites e possibilidades. Belo Horizonte: EdUEMG, 2017."
      ]
    },
    "HIDLA": {
      ementa: "Estudo do Ciclo hidrológico. Bacias Hidrográficas: caracterização morfométrica e suas relações com a Hidrologia. Noções sobre manejo de bacias. Hidrologia estatística: distribuições de probabilidades; Estudo da precipitação: obtenção de dados, medição, preenchimento de falhas e as aplicações à engenharia. Infiltração de água no solo. Escoamento Superficial: análise de hidrogramas, curva de permanência, produção de água, vazões de referências para outorga, vazões de projeto, propagação do escoamento em reservatórios.",
      basica: [
        "NETTO, J. M. Manual de hidráulica. 8. ed. São Paulo: Edgard Blucher, 1998.",
        "BOTELHO, M. H. C. Águas de chuva: engenharia das águas pluviais nas cidades. 3. ed. São Paulo: Blücher, 2011.",
        "TUCCI, C. E. M. (org.). Hidrologia: ciência e aplicação. 4. ed. Porto Alegre:"
      ],
      complementar: [
        "WEF, AWWA - Standard Methods for the Examination of Water and Wastewater. 22. ed. 2012.",
        "DELMÉE, G. J. Manual de medição de vazão. São Paulo: Edgard Blucher, 2003. FUNDAÇÃO NACIONAL DE SAÚDE (Brasil). Manual de saneamento. 4. ed. Rio de Janeiro: Fundação Nacional de Saúde, 2006.",
        "MCCUEN, R. H. A guide to hydrologic analysis using SCS methodos. Englewood Cliffs: Prentice-Hall, 1982.",
        "STEIN, R. T. et. al. Hidrologia e drenagem. Porto Alegre:"
      ]
    },
    "HIDRA": {
      ementa: "Introdução e aplicações da Hidráulica. Análise dos tipos de escoamento no tempo e espaço, bem como sua distribuição, pressão e estados. Estudo sobre o escoamento uniforme em canais: cálculo de canais em regime uniforme, seções econômicas e aspectos de projeto de canais. Análise do regime crítico de escoamentoe da energia específica. Estudo sobre as seções de controle e medição de vazão e transições. Análise do ressalto hidráulico e dos fenômenos localizados. Aplicação do escoamento sob pressão: conceitos básicos, tipos de perda de carga, escoamento uniforme em tubulações, experiência de Nikuradse. Análise dos problemas práticos em encanamentos e fórmulas práticas. Estudo sobre os sistemas hidráulicos de tubulações: tipos de traçados. Análise da distribuição de vazão em marcha e condutos equivalentes: sistemas em série e paralelo. Definição e potência dos Sistemas elevatórios - tipos e características, curvas características de bombas e sistemas. Dimensionamento econômico de recalque, fórmula de Breese. Análise sobre a associação de bombas em série e paralelo e associação de tubulações. NPSH e cavitação.",
      basica: [
        "PORTO, R. de M. Hidráulica, editora da",
        "ITO, Acácio Eiji. Manual de hidráulica. 8. ed. São Paulo, SP: E. Blücher, 1998, 669 p.",
        "BAPTISTA, Márcio Benedito. Fundamentos de Engenharia Hidráulica. 2. ed. rev. Belo Horizonte, MG: Ed. da"
      ],
      complementar: [
        "MACINTYRE, A. J. Manual de Instalações: Hidráulicas e Sanitárias. Rio de Janeiro: Ed. Livros Técnicos e Científicos",
        "DELMÉE, G. J. Manual de Medição de Vazão. São Paulo: Ed. Edgard Blucher, 2003.",
        "ESPARTEL, L. Hidráulica aplicada. Porto Alegre SER - SAGAH 2017 1 recurso online ISBN 9788595020276.",
        "HIDRÁULICA, irrigação e drenagem. Porto Alegre SAGAH 2021 1 recurso online ISBN 9786556902548.",
        "COUTO, L. M. M. Hidráulica na prática. Rio de Janeiro GEN LTC 2018 1 recurso online ISBN 9788595153202."
      ]
    },
    "HIST": {
      ementa: "Introdução e histórico da Higiene e Segurança do Trabalho. Definições e conceitos relacionados à Higiene e Segurança do Trabalho que possibilitem identificare avaliar os riscos e perigos no ambiente laboral. Equiparações de Acidente de Trabalho conforme a legislação vigente. Estudo das Normas Regulamentadoras - NRs e legislação trabalhista. Análise de acidentes e doenças do trabalho: conceitos e estatísticas. Estudo de avaliação de risco: abordagem qualitativa e quantitativa. Técnicas de gestão de risco. Identificação e conhecimento de equipamentos de proteção. Estudo das causas das doenças do trabalho: agentes físicos, agentes químicos, agentes mecânicos, agentes biológicos e agentes ergonômicos. Análise das condições ambientais: padrões, medição e avaliação. Estudo dos métodos de proteção: individual e coletiva. Associação dos elementos do ambiente industrial: iluminação, ventilação, acústica e ruído/vibrações. Resiliência e segurança do trabalhador; Desenho universal: conceitos, legislação e programas; Atividades práticas de higienee primeiros socorros.",
      basica: [
        "EQUIPE ATLAS. Segurança e medicina do trabalho. 87. ed. São Paulo: Atlas, 2022.",
        "MÁSCULO, F. S. Higiene e segurança do trabalho. 2. ed. rev.e ampl. Rio de Janeiro: Editora Elsevier, 2019.",
        "STUMM, S. B. Segurança do trabalho e ergonomia. Curitiba: Contentus, 2020."
      ],
      complementar: [
        "BARBOSA, R. P. Higiene e segurança do trabalho. 1. ed. São Paulo: Saraiva, 2014.",
        "CARDELLA, B. Segurança no trabalho e prevenção de acidentes: uma abordagem holística: segurança integrada à missão organizacional com produtividade, qualidade-e, preservação ambiental e desenvolvimento de pessoas. 2. ed. São Paulo: Atlas, 2016.",
        "IIDA, I. Ergonomia: projeto e produção. 2. ed. São Paulo: Edgard Blucher, 2005, 2010.",
        "GRANDJEAN, E. Manual de ergonomia: adaptando o trabalho ao homem. Porto Alegre: Bookman, 2005.",
        "ROSSETE, C. A. Segurança e higiene do trabalho. São Paulo: Pearson, 2015."
      ]
    },
    "IDIR": {
      ementa: "Noções históricas e fundamentais sobre Teoria Geral do Estado. Direito, Política e Filosofia. O Estado Democrático de Direito e as razões estruturais do Direito contemporâneo. Poder Político e suas funções. Estrutura do ordenamento jurídico brasileiro. Processo Legislativo. Teoria da norma jurídica. Organização da Administração Pública e gestão administrativa. Lições introdutórias sobre Direito Privado: relações jurídicas civis e relações jurídicas empresariais.",
      basica: [
        "PIETRO, M. S. Z. Direito administrativo. 25. ed. São Paulo: Atlas, 2012.",
        "JUNIOR, T. S. Introdução ao estudo do direito. 11. ed. São Paulo Atlas 2019.",
        "FILHO, M. Introdução ao estudo do direito. 2. ed. Rio de Janeiro Forense 2021."
      ],
      complementar: [
        "CHICARINO, T. (Org.). Diversidade cultural. São Paulo: Pearson, 2017.",
        "CHICARINO, T. (Org.). Educação em direitos humanos. São Paulo: Pearson, 2016.",
        "NADER, P. Introdução ao estudo do direito. 44. ed. Rio de Janeiro: Forense, 2021.",
        "PATTO, M. H. S. (org.). A Cidadania negada: políticas públicas e formas de viver. 1. ed. São Paulo: Pearson, 2009.",
        "SANDEL, M. Justiça: o que é fazer a coisa certa. Rio de Janeiro: Civilização Brasileira, 2017."
      ]
    },
    "IENM": {
      ementa: "História da engenharia civil. Ciclo de palestras sobre tópicos do currículo do curso, atribuições legais do engenheiro civil, do mercado de trabalho e das questões acadêmicas. Panorama da profissão do engenheiro no Brasil e no mundo. Campo de atuação do engenheiro civil. Áreas afins à engenharia. Os fundamentos da ética profissional no campo das engenharias. O Sistema CONFEA e CREA, seu funcionamento e implicações nas atividades do Profissional da Engenharia.",
      basica: [
        "PEREIRA, L. T. do V. Introdução à engenharia. 3. ed. rev. Florianópolis: Ed. da Universidade Federal de Santa Catarina, 2012.",
        "KRAHEMBUHL, L. Trajetória de um profissional da habitação. São Paulo: Pini, 2011.",
        "OLIVEIRA, G. D. História da evolução da engenharia. Belo Horizonte:"
      ],
      complementar: [
        "CONFEA: Código de Ética Profissional da Engenharia, da Arquitetura, da Agronomia, da Geologia, da Geografia e da Meteorologia. [Download permitido].",
        "MAR, C. P. Falhas, responsabilidades e garantias na construção civil. São Paulo: Pini, 2008.",
        "GIL, A. C. Como elaborar projetos de pesquisas. 5. ed. São Paulo: Atlas, 2010. REVISTA DAE. São Paulo: Companhia de Saneamento Básico do Estado de São Paulo, 1955- Quadrimestral. ISSN 0101-6040. TÉCHNE. São Paulo: Pini, 1992-. Mensal. ISSN 0104-1053."
      ]
    },
    "IHISA": {
      ementa: "Análise das instalações prediais: Água Fria, Água Quente, Esgoto Sanitário e Águas Pluviais; Técnicas executivas; manutenção preventiva e corretiva das instalações: Instalações prediais de combate a incêndio e Instalações hidráulicas de piscinas.",
      basica: [
        "BORGES, W. L. Instalações prediais hidráulico-sanitárias e de gás. 4. ed. São Paulo:",
        "JÚNIOR, R. de. Instalações hidráulicas e o projeto de arquitetura. São Paulo: Blucher, 2017.",
        "CREDER, H. Instalações hidráulicas sanitárias. 6. ed. Rio de Janeiro:"
      ],
      complementar: [
        "ITO, A. E. Manual de hidráulica. 8. ed. São Paulo: Edgard Blucher, 1998.",
        "JÚNIOR, R. de. Instalações hidráulicas e o projeto de arquitetura. 2. ed. rev., ampl. e atual. São Paulo: Blucher, 2009.",
        "MACINTYRE, A. Instalações hidráulicas: prediais e industriais. 4. ed. Rio de Janeiro:",
        "NETTO, J. M. de. Instalações prediais hidráulico- sanitárias. São Paulo: E. Blücher, 1988.",
        "SILVESTRE, P. Hidráulica geral. Rio de Janeiro:"
      ]
    },
    "INELE": {
      ementa: "Corrente Contínua [CC]: Aplicações; Características elétricas dos materiais; Leis Físicas associadas; Resistências elétricas e capacitâncias equivalentes de circuitos ligados em série, paralelo e misto; Resoluções de Circuitos Elétricos [CC]; Corrente Alternada [CA]: Visão geral da produção, transmissão e distribuição da Energia Elétrica, das usinas aos centros consumidores; Controle e proteção dos sistemas elétricos; Circuitos Monofásicos: Aplicações; Conceito de Reatância Indutiva, Reatância Capacitiva e Impedância; Tensão e Corrente elétrica instantâneas; Tensão e Corrente elétrica eficazes; Resoluções de Circuitos Elétricos [CA]; Correção do Fator de Potência ativa; Circuitos Trifásicos: Aplicações; Resoluções de Circuitos Elétricos trifásicos, circuitos ligados em Estrela [Y] equilibrado, Triângulo [∆] equilibrado, Estrela [Y] desequilibrado, Triângulo [∆] desequilibrado, Instalações Elétricas: Luminotécnica; Condutores elétricos; Fornecimento de Energia Elétrica; Comandos de lâmpadas e ligação de tomadas; Normas da Concessionária de energia elétrica local e da ABNT associadas aos projetos elétricos; Símbolos; Estimativa da carga a ser instalada (potência elétrica instalada); cálculo da demanda, dimensionamento dos condutores e das respectivas proteções dos seus circuitos; projeto das tubulações para TV a cabo/Satélite e telefones fixos; Básico sobre os aterramentos; Dispositivos de segurança pessoal (contra choques elétricos) e material (contra surtos atmosférico); Projetos Elétricos Prediais; Instalações Elétricas Subterrâneas e em Eletrodutos.",
      basica: [
        "BRANDÃO, D. de P. L. Eletrotécnica geral. Lisboa: Fundação Calouste Gulbenkian, 1987.",
        "SERVELIN, S. Instalações elétricas prediais: conforme norma NBR 5410: 2004. 21. ed. rev. e atual. São Paulo: Érica, 2011.",
        "FLARYS, F. Eletrotécnica geral: teoria e exercícios resolvidos. São Paulo: Manole, 2006."
      ],
      complementar: [
        "NASHELSKY, L. Dispositivos eletrônicos e teoria de circuitos. 8. ed. São Paulo: Editora Pearson Prentice Hill, 2004.",
        "CAVALCANTI, P. J. M. Fundamentos de eletrotécnica. 22. ed. rev. Rio de Janeiro: Freitas Bastos, 2012.",
        "CREDER, H. Instalações elétricas. 15. ed. Rio de Janeiro:",
        "RIEDEL, S. A. Circuitos elétricos, 8. ed. São Paulo: Pearson Prentice Hill, 2009.",
        "SAY, M. G. Eletricidade geral: eletrotécnica. São Paulo:"
      ]
    },
    "LFSC1": {
      ementa: "Teoria da medida e dos erros; Gráficos; Experimentos em Mecânica.",
      basica: [
        "SPEZIALI, N. L. Física Experimental Básica na Universidade. 2. ed. Belo Horizonte:",
        "UFMG, 2008. v. 1. DEPARTAMENTO DE FÍSICA DA UFJF. Roteiros do Laboratório de Física I. 1. ed. Juiz de Fora:",
        "DOMICIANO, J. B. Introdução ao Laboratório de Física Experimental: métodos de obtenção, registro e análise de dados experimentais. 1. ed. Londrina: Eduel, 2009. v. 1."
      ],
      complementar: [
        "BAUER, W. Física para universitários óptica e física moderna. Porto Alegre: Bookman, 2013. v. 1.",
        "KNIGHT, R. D. Física uma abordagem estratégica. Porto Alegre: Bookman, 2009. v.1. e v. 2.",
        "MAHON, J. R. Estimativas e Erros em Experimentos de Física. 2. ed. Rio de Janeiro:",
        "SERWAY, R. A. Física para cientistas e engenheiros: mecânica. São Paulo: Cengage Learning, 2013. v. 1.",
        "ZEMANSKY, M. W. Física I: mecânica. 12. ed. São Paulo: Addison Wesley, 2008. v. 1."
      ]
    },
    "LQUIG": {
      ementa: "Estudo e reflexão sobre o método científico e suas aplicações diversas. Conversão de unidades, tratamento de dados e erros analíticos (erro sistemático, erro aleatório). Segurança em laboratórios. Reconhecimento de vidrarias e instrumentação em química. Aferição de vidrarias. Sistemas homogêneos e heterogêneos. Métodos de separação de misturas. Análise imediata. Preparo de soluções sólido-líquido e líquido- líquido, unidades de concentração e padronização de soluções. Tipos de reações químicas. Estequiometria das reações químicas.",
      basica: [
        "JONES, L. Princípios de química: questionando a vida moderna e o meio ambiente. 5. ed. Porto Alegre: Bookman, 2010.",
        "BROWN, T. L.; LeMAY Jr. H. E.;",
        "MURPHY, C. J.; WOODWARD P. M.;",
        "STOLTZFUS, M. W. Química: a ciência central. 13. ed. São Paulo: Pearson, 2017.",
        "RUSSELL, J. B. Química geral. São Paulo: Pearson Makron Books, 1994. THEODORE L. B.;",
        "LEMAY, Jr.; Bruce E. B.; Catherine J. M.; Patrick M. W.; Matthew W. S. Química: a ciência central. 13. ed. São Paulo: Pearson, 2017."
      ],
      complementar: [
        "BROWN, L. S. Química geral aplicada à engenharia. São Paulo: Cengage Learning Brasil, 2021.",
        "CHANG, R. Química. Porto Alegre:",
        "WEAVER, G. C. Química geral e reações químicas. São Paulo: Cengage Learning, 2016. v. 1.",
        "WEAVER, G. C. Química geral e reações químicas. São Paulo: Cengage Learning, 2016. v. 2.",
        "MYERS, R. J. Química: um curso universitário. São Paulo: Edgard Blucher, 1995."
      ]
    },
    "MATC1": {
      ementa: "Matérias-primas, Processos de Produção, Propriedades, Ensaios, Normalização, Critérios de Seleção, Controle de Qualidade e Aplicação de: Agregados e Aglomerantes, Argamassas e Concretos.",
      basica: [
        "TÉCNICAS, ABNT. Coletânea de Normas, Rio de Janeiro.",
        "BAUER, L. A. F. Materiais de construção. Editora",
        "FREIRE, W. J. Tecnologias e materiais alternativos de construção. Campinas: Ed. Unicamp, 2010."
      ],
      complementar: [
        "AMBROZEWICZ, P. H. L. Materiais de construção: normas, especificações, aplicação e ensaios de laboratório. São Paulo: Pini, 2012. IBRACON. Materiais de construção civil e princípios de ciência e engenharia de materiais. São Paulo: Ed. G. C. Isaias, 2011. v. 1.",
        "MONTEIRO, P. J. Concreto: estrutura, propriedades e materiais. São Paulo:",
        "NEVILLE, A. M. Propriedades de concreto. 5. ed. São Paulo: Bookman, 2016.",
        "PETRUCCI, E.G.R. Materiais de construção. Porto Alegre: Globo, 1990."
      ]
    },
    "MATC2": {
      ementa: "Estudo dos Materiais de uso corrente em Engenharia Civil: principais propriedades físicas e mecânicas, características tecnológicas, métodos de ensaio, especificações e normas. Análise dos Materiais Cerâmicos, Louçãs, Vidros, Rochas, Madeiras, Materiais Poliméricos, Metais Ferrosos e Não - Ferrosos, Tintas e Vernizes.",
      basica: [
        "ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. ABNT. Coletânea de Normas, Rio de Janeiro.",
        "BAUER, L. A. F. Materiais de construção. Rio de Janeiro:",
        "LTC, 2019. v. 2. INSTITUTO BRASILEIRO DO CONCRETO. Materiais de construção civil e princípios de ciência e engenharia de materiais. São Paulo:"
      ],
      complementar: [
        "AMBROZEWICZ, P. H. L. Materiais de construção: normas, especificações, aplicação e ensaios de laboratório. São Paulo: Pini, 2012. COMPANHIA VIDRARIA SANTA MARINA. O vidro na Arquitetura. São Paulo: PW Gráfico e Editores Associados Ltda, 1993.",
        "FREITAS, R. F. de S. Polímeros: uma visão geral. Belo Horizonte:",
        "UFMG, 1990. GLASURIT DO BRASIL Ltda. Manual de pintura. São Paulo, 1993.",
        "HELLMEISTER, J. C. Sobre a determinação das características físicas da madeira. Tese (Doutorado). São Carlos: Escola de Engenharia de São Carlos -"
      ]
    },
    "MEFLU": {
      ementa: "Introdução aos conceitos básicos de viscosidade, pressão, temperatura, tensão superficial, fluido newtoniano e não newtoniano. Associação e aplicações da equação fundamental da fluido estática com os princípios da manometria e empuxo hidrostático. Estudo de esforços sobre corpos submersos. Análise de fluidos em movimento com a equação de conservação de volume e teorema de Reynolds. Estudoe análises da equação de Euler e Bernoulli. Estudo dos meios de medição como tubo de Pitot e Venturi. Análises do escoamento de fluido viscoso e da perda de carga distribuídas e localizadas em tubos e dutos.",
      basica: [
        "CIMBALA, J. M. Mecânica dos Fluidos: fundamentos e aplicações. São Paulo: Mcgraw - Hill, 2008.",
        "MCDONALD, A.T. Introdução à mecânica dos fluidos. 4. ed. Rio de Janeiro:",
        "WHITE, F. M. Mecânica dos fluidos. 4. ed. Rio de Janeiro: Mc Graw-Hill, 1999."
      ],
      complementar: [
        "METALURGIA, MATERIAIS E MINERAÇÃO. Fenômenos de transporte: fundamentos e aplicações nas engenharias metalúrgica e de materiais. São Paulo:",
        "LIGHTFOOT, E. N. Fenômenos de transporte. Rio de Janeiro:",
        "FILHO, W. Fenômenos de transporte para engenharia. 2. ed. Rio de Janeiro:",
        "DELMÉE, G. J. Manual de medição de vazão. São Paulo: Edgard Blucher, 2003.",
        "FOX, R. W. Introdução à mecânica dos fluidos. 6. ed. Rio de Janeiro: Editora"
      ]
    },
    "MEGE": {
      ementa: "As leis físicas. Análise dimensional. Estática, cinemática e dinâmica da partícula. Conservação do momento linear. Trabalho e energia. Conservação da energia mecânica. Momento angular e torque. Campo gravitacional. Física ondulatória. Redução e equivalência de sistemas de forças. Equilíbrio do corpo rígido. Análise de estruturas planas. Atrito. Centro de massa e baricentro. Forças externas e esforços solicitantes nas estruturas constituídas por barras. Diagramas de esforços solicitantes em estruturas isostáticas. Momento de inércia de massa. Cinemática e dinâmica do corpo rígido. Movimento relativo: Métodos da força, massa e aceleração (segunda lei de Newton e princípio de D'Alembert), trabalho e energia, e do impulso e quantidade de movimento (movimento linear e movimento angular). Noções de cinemática e cinética dos corpos rígidos no espaço.",
      basica: [
        "MAZUREK, D. F.; EISENBERG. Mecânic a vetorial para engenheiros: estática. 9. ed. São Paulo: Mc Graw-Hill do Brasil, 2012.",
        "HIBBELER, R. C. Dinâmica: mecânica para engenharia. Rio de Janeiro: Pearson Prentice Hall, 2012.",
        "HIBBELER, R. C. Estática: mecânica para engenharia. 12. ed. São Paulo: Pearson Prentice Hall, 2011."
      ],
      complementar: [
        "JOHNSTON, E. R. Mecânica vetorial para engenheiros: Dinâmica. 9. ed. São Paulo: Mc Graw-Hill, 2012.",
        "KRAIGE, L. G. Mecânica para engenharia: estática. 6. ed. Rio de Janeiro:",
        "KRAIGE, L. G. Mecânica: dinâmica. Rio de Janeiro:",
        "KRAIGE, L. G. Mecânica: estática. 5. ed. Rio de Janeiro:",
        "SHAMES, Irving Herman. Estática: mecânica para engenharia. 4. ed. São Paulo: Editora Pearson, 2002. v.1."
      ]
    },
    "MESO1": {
      ementa: "Estudo sobre a Pedologia, classificação e composição química e mineralógica dos solos. Análise das propriedades das partículas sólidas, dos índices físicos e estrutura dos solos. Estudo sobre a plasticidade e consistência dos solos, fenômenos capilares, permeabilidade dos solos, compressibilidade, tensões e deformações, elasticidade, plasticidade e reologia. Análise da resistência ao cisalhamento dos solos e compactação.",
      basica: [
        "CAPUTO, H. P. Mecânica dos solos e suas aplicações. 6. ed. rev. e ampl. Rio de Janeiro: Livros Técnicos e Científicos, 2007. v. 1.",
        "CRAIG, R. F. Mecânica dos solos. 7. ed. São Paulo:",
        "PINTO, C. S. Curso básico de mecânica dos solos. 3. ed. São Paulo: Editora Oficina de Textos, 2006."
      ],
      complementar: [
        "BOSCOV, E. Geotecnia Ambiental. São Paulo: Oficina de Textos, 2008.",
        "DAS, B. Fundamentos de Engenharia Geotécnica. São Paulo: Cengage, 2019.",
        "FAIÇAL, M. Solos marinhos da baixada santista: características e propriedades geotécnicas. São Paulo: Oficina de Textos, 2009.",
        "CARMIGNANI, L. Fundamentos de mecânica dos solos e das rochas. São Paulo: Oficina de Textos, 2003.",
        "TAIOLI, F. Decifrando a Terra. São Paulo: Oficina de Textos."
      ]
    },
    "MESO2": {
      ementa: "Análise do fluxo de água nos Solos: equações de fluxo, traçado de rede de fluxo, cálculo de vazões e subpressões, fluxo de água em barragens de terra, drenose filtros. Rebaixamento do lençol freático. Estabilidade de Taludes: causas e consequências da instabilidade de taludes, sinais de instabilidade de um talude, métodos de análise de estabilidade de taludes por superfícies de deslizamento circulares, método das cunhas, processos para estabilização de taludes. Compressibilidade e Recalques. Estudo sobre Teorias de Empuxo de Terras e Estruturas de Contenção: estado de tensões ativa e passivo, Teorias de Rankine e Coulomb, cálculo de empuxos, tipos de estruturas de contenção: estruturas de flexão e de gravidade, pré-dimensionamento de estruturas, condições de estabilidade de estruturas de contenção, cálculo de cortinas atirantadas, estruturas em solo reforçado. Atividades de Laboratório.",
      basica: [
        "CAPUTO, H. P. BRASIL. Mecânica dos Solos e suas Aplicações. 3ª. São Paulo: Livros Técnicos Científicos, 1977.",
        "NIEBLE, C. M. Estabilidade de taludes naturais e de escavação. 2ª ed. São Paulo: Ed. Edgard Blücher, 1984. 216p.",
        "CRAIG, R. F.. Mecânica dos Solos. 8. ed. São Paulo:"
      ],
      complementar: [
        "BADILLO, Eulalio Juárez;",
        "RODRÍGUEZ, Alfonso Rico. Mecanica de suelos. 3. ed. México: Editorial Limusa, 1975.",
        "SOBHAN, K. Fundamentos de engenharia geotécnica. 8. ed. São Paulo: Cengage Learning, 2019.",
        "FIORI, A. P. Fundamentos da mecânica de solos e das rochas. 3. ed. São Paulo: Ofitexto, 2015.",
        "GERSCOVICH, D. Estabilidade de taludes. 2. ed. São Paulo: Ofitexto, 2016.",
        "MASSAD, F. Obras de terra: curso básico de Geotecnia. 2. ed. São Paulo: Ofitexto, 2010,",
        "ORTIGAO, J. A. R. R.J. Introdução a Mecânica dos Solos dos Estados Críticos 2. ed. São Paulo: Livros Técnicos Científicos, 1995."
      ]
    },
    "MTC": {
      ementa: "Noções fundamentais sobre ciência. Epistemologia: meios e modos de produção do conhecimento. Relações entre ciência e outros tipos de conhecimento. Métodos e técnicas de pesquisa. Pesquisa científica: conceitos e definições. Elaboração de projetos de pesquisa: temas, problemas, hipóteses e variáveis. Estruturae funcionamento da produção científica. Fases de elaboração da pesquisa científica. Estrutura de trabalhos acadêmico-científicos. Técnicas de apresentação de trabalhos.",
      basica: [
        "SILVA, R. Metodologia Científica. São Paulo: Pearson Makron Books, 2006.",
        "MARCONI, M. A. Fundamentos de Metodologia Científica. São Paulo: Atlas, 2017.",
        "SOUZA, L. C. Estrutura lógica de organização da pesquisa científica: texto básico para auxiliar pesquisadores. Belo Horizonte: EdUEMG, 2020."
      ],
      complementar: [
        "ANDRADE, M. M. Introdução à metodologia do trabalho científico. São Paulo: Atlas, 2010.",
        "DEMO, P. Introdução à metodologia da ciência. São Paulo: Atlas, 2008.",
        "DESIGN, UEMG. Manual para elaboração e normalização de trabalhos acadêmicos e técnico-científicos da ED/UEMG. Belo Horizonte: Editora",
        "MEDEIROS, J. B. Redação científica: a prática de fichamentos, resumos, resenhas. São Paulo: Atlas, 2019.",
        "NETO, A. A. Metodologia da Pesquisa Científica. Florianópolis: Visual Books, 2008. 3º PERÍODO"
      ]
    },
    "OPT:Alvenaria Estrutural": {
      ementa: "Análise dos princípios e fundamentos do processo construtivo, das características dos materiais e da tecnologia construtiva e do planejamento e gestão do empreendimento em alvenaria estrutural. Estudo sobre os fundamentos para a concepção e desenvolvimento do projeto arquitetônico. Análise dos critérios e normas de cálculo e dimensionamento para projetos de estruturas, instalações prediais e coordenação e compatibilização de projetos. Estudo sobre planejamento e instalação do canteiro de obras. Implantação do processo produtivo e execução de obras. Análise das patologias e recuperação de estruturas.",
      basica: [
        "MANZIONI, L. Projeto e execução de alvenaria estrutural. São Paulo: O nome da Rosa, 2004.",
        "MOHAMAD, G. Alvenaria estrutural. São Paulo: Blucher, 2017.",
        "JANTSCH, A. C. A. Alvenaria estrutural construindo o conhecimento. São Paulo: Edgard Blucher, 2018."
      ],
      complementar: [
        "CAPORRINO, C. F. Patologias em alvenarias. 2. ed. São Paulo: Oficina de Textos, 2018.",
        "DAVIES, S. R. Design of masonry structures. 3. ed. London: Load Bearing Brickwork Design, 1997.",
        "MOLITERNO, A. Caderno de estruturas em alvenaria e concreto simples. São Paulo: Edgard Blucher, 2017.",
        "SANCHEZ, E. Nova normalização brasileira para alvenaria estrutural. Rio de Janeiro: Interciência, 2013.",
        "SINHA, B. P. The research on structural masonry at the university of Edinburgh. Proceedings of 5th International Seminar on Structural Masonry for Developing Countries. Florianópolis, Brazil, August 1995, pp 685-709."
      ]
    },
    "OPT:Análise Experimental dos Materiais": {
      ementa: "Análise do comportamento mecânico dos Materiais, Ensaios Extensométricos, aquisição de Sinais, Análise Crítica de Ensaios Experimentais, Comparação do comportamento teórico de componentes com o experimental. Avaliação da integridade estrutural e/ou o coeficiente de segurança de um determinado componente, após medição das deformações devido a carregamentos aplicados.",
      basica: [
        "BUDYNAS, R. G. Advanced strength and applied stress analysis. Ed. Mc Graw- Hill Science/Engineering/Math, 2nd edition, October 1998.",
        "JR., R. R. Mecânica dos materiais. 2. ed. São Paulo:",
        "RILEY, W.F. Experimental stress analysis, Ed. Mcgraw-Hill College, 3rd edition, January 1991."
      ],
      complementar: [
        "CALEGERE, A. J. de A. Introdução ao Delineamento de experimentos. 2. ed. São Paulo: Blucher, 2015.",
        "PAVANATI, H., C. Ciências e tecnologias dos materiais, Editora Pearson, 2015.",
        "PEREIRA, C.P. M. Mecânica dos materiais avançados. 1. ed. Rio de Janeiro: Interciência, 2014.",
        "SHACKELFORD, J. F. Ciências dos materiais. 6. ed. São Paulo: Pearson, 2008.",
        "L. H., Princípios de ciências dos materiais. 1. ed. São Paulo: Blucher, 1970."
      ]
    },
    "OPT:Cartografia Aplicada": {
      ementa: "Conhecimentos básicos de Cartografia: definição, Geodésia (orientação, fusos horários, escala e projeções). Uso de representações gráfica (variáveis visuais), cartográfica (altimetria: curvas de nível e perfil topográfico (Topografia). Domínio de gráficos: leitura e interpretação do Sistema Cartesiano, Sistema Polar, representação temática (diagramação, uso de cores, tradução gráfica). Análise metodológica de representações temáticas (qualitativas, ordenadas, quantitativas e dinâmicas). Utilização de instrumentos de mapeamento (manipulação de bússola, GPS, Estereoscópio).",
      basica: [
        "FITZ, P. R. Cartografia básica. 2. ed. Canoas: Centro Universitário La Salle, 2005.",
        "OLIVA, J. Cartografia. São Paulo: Melhoramentos, 2013.",
        "JOLY, F. A. Cartografia. 10. ed. Campinas: Papirus, 2007.",
        "LOBLER, C. A. Cartografia. Porto Alegre:"
      ],
      complementar: [
        "BAIO D., J. M. Topografia geral. Rio de Janeiro: Livros Técnicos e Científicos, 2007. CENTRO DE PREVISÃO DE TEMPO E ESTUDOS CLIMÁTICOS. Portal do CPTEC. Disponível em: https: /. INSTITUTO BRASILEIRO DE GEOGRAFIA E ESTATÍSTICA. Portal do IBGE. Disponível em: https: /g INSTITUTO BRASILEIRO DE PESQUISAS ESPACIAIS. Portal do INPE. Disponível em: https: /-",
        "KALINOWSKI, S. R. Utilização do GPS em trilhas e cálculo de áreas. Brasília: LK, 2006.",
        "ROCHA, C. H. B. GPS de navegação: para mapeadores, trilheiros e navegadores. Juiz de Fora: Edição do Autor, 2003."
      ]
    },
    "OPT:Confiabilidade das Estruturas": {
      ementa: "Fundamentos de probabilidade e estatística aplicados à Engenharia. Variáveis aleatórias. Distribuições de probabilidade. Evolução dos métodos de confiabilidade. Formulação do problema de confiabilidade estrutural. Probabilidade de falha. Estados Limites. Simulação de Monte Carlo. Índice de confiabilidade. Calibração de normas.",
      basica: [
        "BECK, A. T. Confiabilidade e segurança das estruturas. Rio de Janeiro:",
        "BORROR, C. M. Probabilidade e estatística na engenharia. 4. ed. Rio de Janeiro:",
        "PEZZATTO, A. T.; Gregório, G. F. P. Confiabilidade de sistemas. Porto Alegre:"
      ],
      complementar: [
        "MORETTIN, P. A. Estatística básica. 7. ed. São Paulo: Saraiva, 2011.",
        "DANTAS, C. A. B. Probabilidade: um curso introdutório. 3. ed. rev. São Paulo:",
        "MELCHERS, R. Structural reliability analysis and prediction. Nova Jersey: J. Wiley & Sons, 1999.",
        "RUNGER, G. C. Estatística aplicada e probabilidade para engenheiros. Rio de Janeiro:",
        "COLLINS, K. R. Reliability of structures. 2. ed. CRC Press, 2012."
      ]
    },
    "OPT:Corrosão e Proteção dos Materiais": {
      ementa: "Estudo dos principais fundamentos termodinâmicos e cinéticos da corrosão. Principais formas e mecanismos básicos de corrosão. Velocidade de corrosão e influência da temperatura. Polarização e passivação. Introdução aos conceitos e métodos de controle e proteção contra corrosão. Ensaios de corrosão e monitoramento.",
      basica: [
        "DILLON, C. P. Corrosion control in the chemical process industries. New York: Mc Graw-Hill, 1986.",
        "GENTIL, V. Corrosão. 6. ed. Rio de Janeiro: Livros Técnicos e Científicos, 2011.",
        "RAMANATHAN, L. V. Corrosão e seu controle. São Paulo: Hemus, 1997."
      ],
      complementar: [
        "BRETT, C. M. A. Electroquímica: princípios, métodos e aplicações. Coimbra: Almedina, 1993.",
        "BROWN, L. S. Química geral aplicada à engenharia. São Paulo: Cengage Learning Brasil, 2021.",
        "STOLTZFUS, M. W. Química: a ciência central. 13. ed. São Paulo: Pearson, 2017.",
        "ALVES, K. M. P. Corrosão: princípios, análises e soluções. Curitiba: Intersaberes, 2020.",
        "SERRA, E. T. Corrosão e proteção anticorrosiva dos metais no solo. Rio de Janeiro: Interciência, 2014."
      ]
    },
    "OPT:Desenho Informatizado Aplicado à Engenharia": {
      ementa: "Uso de softwares gráficos para desenho e projeto técnico bidimensional para plantas e cortes completos. Modelagem tridimensional.",
      basica: [
        "VIERCK, C. J. Desenho técnico e tecnologia gráfica. 8. ed. rev. e ampl. São Paulo: Globo, 2005.",
        "SILVEIRA, S. J. Aprendendo AutoCAD 2008: simples e rápido. Florianópolis: Visual Books, 2008.",
        "VENDITTI, M. V. R. Desenho técnico sem prancheta com AutoCAD 2008. Florianópolis: Visual Books, 2007."
      ],
      complementar: [
        "FERREIRA, P. Desenho técnico básico. 2. ed. Rio de Janeiro: Ao Livro Técnico, 2001.",
        "FERREIRA, P. Desenho técnico básico. 4. ed. Rio de Janeiro: Imperial Novo Milênio, 2010.",
        "OLIVEIRA, A. de. Autodesk AutoCAD 2016 modelagem 3 D. São Paulo: Erica, 2016.",
        "SANTOS, J. Desconstruindo o projeto estrutural de edifícios: concreto armado. São Paulo: Oficina de textos, 2017.",
        "RIBEIRO, C. T.; DIAS J.;",
        "SOUSA, L. Desenho técnico moderno. 4. ed. Rio de Janeiro:"
      ]
    },
    "OPT:Direito Ambiental": {
      ementa: "Direitos materiais difusos. Bioética Ambiental e Biodireito. Fundamentos constitucionais no Direito Ambiental brasileiro e política nacional do meio ambiente. Bens ambientais. Competência em matéria ambiental. Licenciamento ambiental e estudo prévio de impacto ambiental. Zoneamento ambiental e espaços especialmente protegidos. Fauna e Flora, e seus respectivos aspectos de defesa. Recursos hídricos. Poluição ambiental.",
      basica: [
        "ANTUNES, P. B. Direito ambiental. 12. ed. Rio de Janeiro: Lumen Juris, 2010.",
        "MACHADO, P. A. L. Direito ambiental brasileiro. 21. ed. São Paulo: Malheiros, 2013.",
        "FREIRE, W. Dicionário de direito ambiental e vocabulário técnico ambiental. 2. ed. Belo Horizonte: Jurídica, 2009."
      ],
      complementar: [
        "BECK, U. Sociedade de risco: rumo a uma outra modernidade. São Paulo: Editora 34, 2016.",
        "FIORILLO, C. A. P. Direito processual ambiental brasileiro. Belo Horizonte: Del Rey, 2018.",
        "LEMOS, P. F. I. Direito ambiental: responsabilidade civil e proteção ao meio ambiente. 2a ed. São Paulo: Revista dos Tribunais, 2008.",
        "MENEZES, D. Educação ambiental. São Paulo: Pearson, 2013.",
        "BURGEL, C. F. (Org.). Biodiversidade, recursos hídricos e direito ambiental. Caxias do Sul: Educs, 2020."
      ]
    },
    "OPT:Direito Minerário": {
      ementa: "Teoria do Direito Minerário. Aspectos constitucionais do Direito Minerário. Princípios de Direito Minerário. Marco regulatório e política de desenvolvimento sustentável. Concepções preliminares sobre aquisição primária. Regime de autorização e concessão. Regime de permissão de lavra garimpeira. Regime de licenciamento. Aquisição secundária em Direito Minerário. Cobranças decorrentes da Mineração. Processo administrativo em Direito Minerário.",
      basica: [
        "FREIRE, W. Direito ambiental aplicado à mineração. Belo Horizonte: Mineira Livros Jurídicos, 2005.",
        "POVEDA, E. P. R. Código de mineração de A a Z. São Paulo: Millennium, 2009.",
        "RIBEIRO, C. L. Direito minerário: escrito e aplicado. Belo Horizonte: Del Rey, 2006."
      ],
      complementar: [
        "ANTUNES, P. de B. Direito ambiental. 12. ed. Rio de Janeiro: Lumen Juris, 2010.",
        "BECK, U. Sociedade de risco: rumo a uma outra modernidade. São Paulo: Editora 34, 2016.",
        "KOPEZINSKI, I. Mineração x meio ambiente: considerações legais, principais impactos ambientais e seus processos modificadores. Porto Alegre:",
        "MACHADO, P. A. L. Direito ambiental brasileiro. 21. ed. São Paulo: Malheiros, 2013.",
        "MENEZES, D. Educação Ambiental. São Paulo: Pearson, 2013."
      ]
    },
    "OPT:Direito Urbanístico": {
      ementa: "Sociedade de risco e meio ambiente. Direito urbanístico e meio ambiente. O meio ambiente artificial na Constituição da República de 1988. Política de desenvolvimento urbano e Plano Diretor. Estatuto da Cidade. Cidades sustentáveis. Republicização do espaço urbano. Estudo de Impacto de Vizinhança. Regularização fundiária de assentamentos urbanos. Cultura e sociedade: meio ambiente cultural e patrimônio imaterial.",
      basica: [
        "RAVANELO, T. Direito urbanístico- ambiental: uma visão epistêmica. Caxias do Sul: Educs, 2019.",
        "RECH, A. Direito urbanístico. Caxias do Sul: Educs, 2010.",
        "ROLNIK, R. O que é cidade. 3. ed. São Paulo: Brasiliense, 1994."
      ],
      complementar: [
        "CUNHA, S. B. da. Impactos ambientais urbanos no Brasil. 5. ed. Rio de Janeiro: Bertrand Brasil, 2009.",
        "NETO, V. Cidades inteligentes: guia para construção de centros urbanos eficientes e sustentáveis. São Paulo: Erica, 2018.",
        "SOUZA, C. L. de. Cidades sustentáveis: desenvolvimento sustentável num planeta urbano. Porto Alegre: Bookman, 2012.",
        "TURBAY, A. L. B. Cidades contemporâneas e mobilidade: conceitos e ferramentas para o planejamento. Curitiba: Intersaberes, 2021.",
        "VASCONCELOS, P. E. A. Cidades Inteligentes e a Função Socioambiental. Rio de Janeiro: Processo, 2022."
      ]
    },
    "OPT:Direito e Inovação": {
      ementa: "Inovação e sociedade. Inovação e direitos humanos. Inovação, ciência e sustentabilidade. Tendências e paradigmas das novas tecnologias e seus reflexos sociais e jurídicos. Grupos vulneráveis, inovação e sustentabilidade.",
      basica: [
        "AGAMBEN, G. Homo Sacer: o poder soberano e a vida nua. 2. ed. Trad. Henrique Burigo. Belo Horizonte:",
        "BAZZO, W. A. Ciência, Tecnologia e Sociedade e o contexto da educação tecnológica. 5. ed. Florianópolis:",
        "BECK, U. Sociedade de risco: rumo a uma outra modernidade. São Paulo: Editora 34, 2016."
      ],
      complementar: [
        "SIMÃO, A. F. (Coord.). Direito e internet: aspectos jurídicos relevantes. Bauru:",
        "IBCI, 2001. DIREITO E INFRAESTRUTURA. São Paulo: Saraiva Jur., 2012.",
        "MAZZUOLI, V. O. Curso de direitos humanos. 8. ed. São Paulo: Método, 2021.",
        "MARCACINI, A. T. R. Direito e informática: uma abordagem jurídica sobre a criptografia. Rio de Janeiro: Forense, 2002.",
        "PAESANI, L. M. Direito e Internet: liberdade de informação, privacidade e responsabilidade civil. 7. ed. São Paulo: Atlas, 2014."
      ]
    },
    "OPT:Drenagem Urbana": {
      ementa: "Concepção e planejamento de sistemas de drenagem urbana; Estudos hidrológicos e identificação de critérios para dimensionamento hidráulico; Análise de sistemas de microdrenagem: captação das águas pluviais, galerias e pequenos canais; Dimensionamento de sistema de Microdrenagem e Macrodrenagem: canais, bueiros e transições; Medidas de controle de inundações (medidas estruturais e não estruturais).",
      basica: [
        "CANHOLI, A. P. Drenagem urbana e controle de enchentes. São Paulo: Oficina de Textos, 2013.",
        "SANTOS, A. R. dos. Enchentes e deslizamentos: causas e soluções. São Paulo: Pini, 2012.",
        "BARROS, M.T. Drenagem Urbana. Porto Alegre:"
      ],
      complementar: [
        "ALMEIDA, J. C.B. Drenagem urbana. São Paulo: Contentus, 2020.",
        "BOTELHO, M. H. C. Águas de chuva. 3 ed. São Paulo: Blücher, 2011.",
        "GRIBBIN, J. E. Introdução à hidráulica, hidrologia e gestão de águas pluviais. São Paulo: Cengage Learning, 2012.",
        "ACHADO, V. de S. Hidrologia e Drenagem. Porto Alegre:",
        "SAGAH, 2022. AGAH. Hidrologia e Drenagem. Porto Alegre. 2022.",
        "MIGUEZ, M. G. Drenagem urbana do projeto tradicional à sustentabilidade. Rio de Janeiro:"
      ]
    },
    "OPT:Edifícios de Concreto Armado": {
      ementa: "Dimensionamento e detalhamento de fundações em concreto armado: sapatas e blocos sobre estacas; dimensionamento de detalhamento de lajes pré moldadas; análise de estabilidade global de edifícios em concreto armado: efeito P- delta, Parâmetro ϒz. Utilização de softwares para o dimensionamento de estruturas em concreto armado. Dimensionamento e detalhamento de muros de arrimo tipo flexão em concreto armado.",
      basica: [
        "ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS - ABNT NBR 6118 estruturas de concreto armado - procedimentos. Rio de Janeiro:",
        "MARCHETTI, O. Concreto armado eu te amo. 10. ed. São Paulo: Blucher, 2019. v. 1.",
        "FILHO, J. R. Cálculo e detalhamento de estruturas usuais de concreto armado. 4. ed. São Carlos:"
      ],
      complementar: [
        "ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS - ABNT NBR 7480 Barras e fios de aço para armaduras para concreto. Rio de Janeiro:",
        "ABNT, 1994. ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS - ABNT NBR 6120 Ações para o cálculo de estruturas de edificações. Rio de Janeiro:",
        "MOHAMAD, G. Alvenaria estrutural. São Paulo: Blucher, 2017.",
        "PINHEIRO, L. M. Fundamentos do concreto e projeto de edifícios. São Carlos:",
        "SANCHEZ, E. Nova normalização brasileira para alvenaria estrutural. Rio de Janeiro: Interciência, 2013."
      ]
    },
    "OPT:Empreendedorismo": {
      ementa: "Caracterização do universo do empreendedorismo com a identificação dos atributos e das habilidades de um empreendedor; caracterização dos tipos de empreendedorismo; identificação dos campos potenciais para o empreendedorismo: tecnológico, turismo, alimentação, saúde, transporte, educação etc. apresentação do contexto histórico em que a noção de empreendedorismo adquiriu importância; apresentação e discussão de algumas características dos conceitos de empreendedor e de empreendedorismo em diversos ambientes e organizações, destacando aspectos particulares do empreendedorismo na área tecnológica; apresentação e exercícios com ferramentas voltadas para a identificação de oportunidades e elaboração de planos de negócios.",
      basica: [
        "DELAMARO, M. C. Empreendedorismo à brasileira e alguns pontos cegos dos cânones da recepção da obra de Max Weber. In:",
        "GUIMARÃES, T. de A. (orgs). Empreendedorismo além do plano de negócio. São Paulo: Atlas, 2005. pp. 21-41.",
        "DORNELAS, J. C. Empreendedorismo: Transformando Ideias em Negócios. 2. ed. Rio de Janeiro: Elsevier, 2005.",
        "ADAMS, R. Criação de novos negócios: empreendedorismo para o século 21. 2. ed. Rio de Janeiro: Elsevier Brasil, 2017."
      ],
      complementar: [
        "PETTY, W. Uma dupla que faz acontecer: Guia completo de Empreendedorismo em quadrinhos. Rio de Janeiro: Elsevier, 2009.",
        "SPINELLI, S. Criação de novos negócios. Rio de Janeiro: Elsevier, 2010. v. 1.",
        "DWECK, C. S. Mindset: A nova psicologia do sucesso. Editora Objetiva.",
        "PORTO, G. (Organizadora). Gestão da Inovação e empreendedorismo. 1. ed. Rio de Janeiro: Elsevier, 2013.",
        "RIES, E. A Startup enxuta. Crown Publishing Group,"
      ]
    },
    "OPT:Engenharia Ambiental aplicada à Engenharia Civil": {
      ementa: "Análise dos problemas relacionados com a explosão da população global humana (causas e consequências para o meio ambiente). Estudo sobre a produção e distribuição de alimentos e Saúde humana e ambiental. Análise dos solos - ecossistemae depredação -; da água - ciclo e manejo, eutrofização e poluição; do ar - poluentes e controle -; das grandes mudanças atmosféricas - chuva ácida, aquecimento global e diminuição da camada de ozônio - da Biodiversidade; do lixo - tipos e políticas públicas de manejo -; da energia - combustíveis fósseis e energias renováveis -; do estilo de vida e sustentabilidade; da avaliação dos impactos ambientais gerados pelas atividades de Construção Civil; da Minimização e monitoramento dos impactos ambientais gerados pelas empresas de Recuperação/reabilitação de áreas degradadas; do Passivo ambiental.",
      basica: [
        "HESPANHOL, I. Introdução à engenharia ambiental: o desafio do desenvolvimento sustentável. 5. ed. São Paulo: Prentice Hall Brasil, 2005.",
        "CALIJURI, M. do C. Engenharia ambiental conceitos, tecnologias e gestão. 2. ed. Rio de Janeiro:",
        "MIHELCIC, J. R. Engenharia ambiental fundamentos, sustentabilidade e projeto. 2. Rio de Janeiro:"
      ],
      complementar: [
        "DERISIO, J. C. Introdução ao controle de poluição ambiental. 3. ed. São Paulo: Signus, 2007.",
        "ALMEIDA, J. R. Gestão ambiental de áreas degradadas. 3. ed. Rio de Janeiro: Bertrand Brasil, 2007.",
        "MOURA, L. A. A. Qualidade e gestão Ambiental: Sustentabilidade e ISSO 14001. 7. ed. Rio de Janeiro: Freitas Bastos, 2023.",
        "ROMEIRO, A. R. Avaliação e contabilização de impactos ambientais. São Paulo: Imprensa Oficial do Estado, 2004.",
        "MEDEIROS, R. M. V. RIMA - Relatório de impacto ambiental: legislação, elaboração e resultados. 5. ed. Porto Alegre: Editora da"
      ]
    },
    "OPT:Fundamentos de Climatologia": {
      ementa: "Tempo e Clima. Fatores e Elementos do Clima. Objeto e método. Repercussões geográficas da forma e movimentos do planeta Terra. Aquecimento diferencial da superfície da terra e o efeito sobre os parâmetros atmosféricos. Composição vertical da atmosfera. Circulação geral da atmosfera. Massas de ar e mecanismos de desenvolvimento frontal. Mudanças climáticas. Classificações climáticas. As ações antrópicas e o clima.",
      basica: [
        "AYOADE, J. O. Introdução a climatologia para os trópicos. 12. ed. Rio de Janeiro: Bertrand Brasil, 2007.",
        "MONTEIRO, C. A. F. Clima urbano. São Paulo: Contexto, 2003.",
        "SONNEMAKER, J. B. Meteorologia. 31. ed. São Paulo:"
      ],
      complementar: [
        "FERREIRA, A. G. Meteorologia prática. São Paulo: Oficina de Textos, 2006.",
        "PEREIRA, F. O. R. Eficiência energética na arquitetura. 3. ed. Rio de Janeiro:",
        "MONTEIRO, J. E. B. A. Agroclimatologia dos Cultivos.",
        "INMET, 2009. Disponível em: p _Livro _Agrometeorologia+dos+cultivos.pdf/13d616f5-cbd1-7261-b157- 351eaa 31188d?version=1.0",
        "SILVA, M. A. Meteorologia e Climatologia. Recife: 2006.",
        "VECCHIA, Francisco Arthur da Silva;",
        "TECH, Adriano Rogério Bruno;",
        "NEVES, Gustavo Zen de Figueiredo. Climatologia dinâmica: conceitos, técnicas e aplicações. [S.l: s.n.], 2020. Disponível em: em https: //sites.usp.br/climatologia/wp- content/uploads/sites/267/2020/07/CLIMATOLOGIA-DIN%C3%82 MICA_Conceitos- T%C3%A9cnicas-e-Aplica%C3%A7%C3%B5es.pdf"
      ]
    },
    "OPT:Geoprocessamento": {
      ementa: "Introdução à história e definições de geoprocessamento. Componentes do Sistema de Informações Geográficas - SIG. Conhecimento conceitual geral de dados geográficos, de sistema e modelo, de percepção do espaço geográfico e estrutura de dados em SIG (Vetor e Raster). Modelagem digital de terreno: definições, fonte de dados, aplicações e produtos derivados. Sensoriamento Remoto: definições, fonte de dados, processamento digital de imagens, aplicações.",
      basica: [
        "FITZ, P. R. Geoprocessamento sem complicação. São Paulo: Oficina de Textos, 2008.",
        "FITZ, P. R. Cartografia básica. 5. ed. Canoas: Centro Universitário",
        "NOVO, E. M. L. M. Sensoriamento remoto: princípios e aplicações. 4. ed. rev. São Paulo: Edgard Blucher, 2010."
      ],
      complementar: [
        "CHRISTOFOLETTI, A. Modelagem de sistemas ambientais. São Paulo: E. Blucher, 1999.",
        "JOLY, F. A Cartografia. 10. ed. Campinas: Papirus, 2007.",
        "LACRUZ, M. S. P. Sensoriamento remoto para desastres. São Paulo: Oficina de Textos, 2015.",
        "ZAIDAN, R. T (Org.). Geoprocessamento e análise ambiental: aplicações. 3. ed. Rio de Janeiro: Bertrand Brasil, 2009.",
        "GANDOLFI, N. Cartografia geotécnica. São Paulo: Oficina de Textos, 2004."
      ]
    },
    "OPT:Gestão Ambiental": {
      ementa: "O Antropoceno, a alteração definitiva do Homo sapiens na Terra e a pressão por novos paradigmas do modus operandi da humanidade. A interdependência humana dos serviços ecossistêmicos e ambientais. História do movimento ambientalista. Agenda 2030 e Objetivos de Desenvolvimento Sustentável (ODS). Sustentabilidade. Economia Circular. Inovação, empreendedorismo e startups no contexto da Engenharia Metalúrgica. A Tragédia dos Comuns. Política Nacional do Meio Ambiente. Instrumentos de gestão ambiental. Licenciamento ambiental. Licenciamento e regularização ambiental aplicados à metalurgia e à siderurgia. Gestão ambiental empresarial. Série ISO 14000. Certificação ISO 14001. Certificação ambiental. ESG (environmental, social and governance). Análise dos ciclos de vida, cadeias e processos produtivos. Indicadores de sustentabilidade. Saúde única e gestão ambiental.",
      basica: [
        "HESPANHOL, I. Introdução à engenharia ambiental: o desafio do desenvolvimento sustentável. 2. ed. São Paulo: Pearson, 2005.",
        "DERISIO, J. C. Introdução ao controle de poluição ambiental. 5. ed. São Paulo: Signus, 2017. PHILIPPI Jr., A.; Romero, M.A.; Bruna, G.C. Curso de gestão ambiental. Barueri: Manole, 2004."
      ],
      complementar: [
        "CUNHA, D. G. F. (Coord). Engenharia ambiental: conceitos, tecnologia e gestão. Rio de Janeiro: Elsevier, 2013.",
        "FARIAS, T. Licenciamento ambiental: aspectos teóricos e práticos. 6. ed. Belo Horizonte: Fórum, 2017.",
        "FIORILLO, C. A. P. Curso de direito ambiental brasileiro. São Paulo: Saraiva, 2021.",
        "FREITAS, J. Sustentabilidade: direito ao futuro. 4. ed. Belo Horizonte: Fórum, 2019.",
        "GUERRA, S. Curso de direito ambiental. 2. ed. São Paulo: Atlas, 2014.",
        "SARLET, I. W. Curso de direito ambiental. Rio de Janeiro: Forense, 2022.",
        "SEIFFERT, M. E. B. ISO 14001 - Sistemas de gestão ambiental: implantação objetiva e econômica. 4. ed. São Paulo: Atlas, 2011.",
        "MEDEIROS, R. M. V. Relatório de Impacto Ambiental (RIMA): legislação, elaboração e resultados. 5. ed. Porto Alegre: Ed. da"
      ]
    },
    "OPT:Gestão e Garantia da Qualidade": {
      ementa: "Histórico da qualidade; Aspectos básicos da Qualidade: ciclo PDCA, métodos de prevenção e solução de problemas: MASP, FMEA, FTA e 6 Sigma; Técnicas gerenciais: brainstorming, gráfico de Pareto, lista de verificação, estratificação, histograma, gráfico de dispersão, cartas de controle, plano de ação, gráfico de Gantt, matriz SETFI, matriz GUT, matriz de contingências; Controle da Qualidade Total; Normalização: normalização internacional, nacional e de empresas; Análise da qualidade; Critérios de excelência e os prêmios regionais e nacionais.",
      basica: [
        "ALVAREZ, M. E. Gestão de qualidade, produção e operações. 3. ed. São Paulo: Atlas, 2019.",
        "CAMPOS, V. F. TQC: controle da qualidade total no estilo japonês. 9. ed. Nova Lima:",
        "PALADINI, E. P. Gestão da qualidade: teoria e prática. São Paulo: Atlas, 2000."
      ],
      complementar: [
        "AGUIAR, S. Integração das ferramentas da qualidade ao PDCA e ao programa Seis Sigma. Nova Lima:",
        "CARPINETTI, L. C. R. Gestão da qualidade ISO 9001: 2015. São Paulo: Atlas, 2016.",
        "RODRIGUES, M. V. Ações para a Qualidade: Gestão integrada para a Qualidade. Rio de Janeiro: Qualitymark, 2004.",
        "RODRIGUES, M.V. Ações para a qualidade: gestão estratégica e integrada para a melhoria dos processos na busca da qualidade e produtividade (GEIQ). 6. ed. São Paulo: GEN Atlas, 2020.",
        "SANTOS, M. B. Mudanças organizacionais: técnicas e métodos para a inovação. Curitiba: Juruá, 2011.",
        "WERKEMA, C. Criando a cultura Lean seis sigma. São Paulo: GEN Atlas, 2012.",
        "WERKEMA, M. C. C. Ferramentas estatísticas básicas para o gerenciamento de processos. Belo Horizonte: Fundação Christiano Ottoni, 1995."
      ]
    },
    "OPT:Hidrogeologia Aplicada": {
      ementa: "Introdução à Hidrologia Subterrânea: Importância do estudo de águas subterrâneas. Os aquíferos e o ciclo hidrológico. Tipos de aquíferos. Evolução do entendimento da origem da água subterrânea. Ciclo hidrológico global e na escala de bacia hidrográfica. Balanço hídrico de um aquífero. Províncias hidrogeológicas brasileiras. Características hidrogeológicas dos aquíferos. Tipos de formações rochosas. Características fundamentais: porosidade total e efetiva, coeficiente de armazenamento, transmissividade, vazão máxima explotável. Princípios fundamentais do movimento das águas subterrâneas. Hidráulica de poços tubulares. Exploração de água subterrânea e testes de poços. Qualidade das águas subterrâneas e seu monitoramento. Poluição e contaminação dos aquíferos: cenários de contaminação hidrogeológica. Monitoramento Gestão de água subterrânea e outorga.",
      basica: [
        "BORN, C.R et al. Hidrogeologia. Porto Alegre:",
        "FEITOSA, E.C.; DEMÉTRIO. J.G. (2008) - Org. e Coord. Científica. Hidrogeologia: conceitos e aplicações. 3. ed. CPRM/MME. 812p. Disponível para download em: <https: //rigeo.cprm.gov.br/jspui/handle/doc/14818>, 2008.",
        "CHERRY, J. Groundwater. Englewood Cliffs, Prentice Hall. Disponível em: <https: //gw-project.org/livros/groundwater/?lang=pt-br>, 1979."
      ],
      complementar: [
        "OLIVEIRA, E. Coletânea da legislação de águas subterrâneas no Brasil. Disponível em: <https: //materiais.aguasustentavel.org.br/coletanea>",
        "GONÇALES, V.G. Águas subterrâneas e poços tubulares profundos. 2. ed. São Paulo: Oficina de Textos, 2013.",
        "LOPES, M. T. Construção de poços para água: manual técnico. 1. ed. Rio de Janeiro: Inter ciência, 2015.",
        "TAIOLI, F. Decifrando a terra. 2. ed. São Paulo: Companhia Editora Nacional, 2009.",
        "TUNDISI, T. M. Recursos Hídricos no Século XXI. São Paulo: Oficina de Textos, 2011."
      ]
    },
    "OPT:Infraestrutura de Estradas e Vias Urbanas": {
      ementa: "Classificação das Vias, Obras de Estradas, Terraplenagem, Serviços preliminares, Drenagem de Rodovias, pavimentos flexíveis: camadas (subleito, reforço do subleito base) e revestimentos, pavimentos semi-flexiveis e Pavimentos rígidos de concreto. Vias Urbanas, Sistemas de Saneamento Básico (abastecimento, distribuição, esgotamento, coleta de esgoto, Drenagem Urbana, dimensionamento de sistemas de drenagens.",
      basica: [
        "ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. ABNT. Coletânea de Normas, Rio de Janeiro. DNIT. Manual de Pavimentação. Disponível em: < acao_V ersao_Final.pdf>. DNIT. Manual de Drenagem de Rodovias. Disponível <>. em:"
      ],
      complementar: [
        "ABITANTE, A. L. Estradas. Porto Alegre: SER -",
        "CARVALHO, M. P. Construção da infraestrutura de estradas de rodagem. Rio de Janeiro: Científica, 1964.",
        "NUVOLARI, A. Esgoto sanitário, coleta transporte, tratamento e reuso agrícola. São Paulo: Edgard Blücher, 2011.",
        "SEGANTINE, P. C. L. Projeto geométrico de rodovias. Rio de Janeiro:",
        "SOUZA, J. O. Estradas de rodagem. São Paulo: Livraria Nobel, 1981.",
        "SOBRINHO, P. A. Coleta e transporte de Esgoto Sanitário. 3. ed. Rio de Janeiro: Abes, 2011."
      ]
    },
    "OPT:Inglês Instrumental": {
      ementa: "Leitura e interpretação de textos técnico-científicos autênticos, redigidos em língua inglesa nas estruturas retóricas descritiva, narrativa e de instrução. Estudo da gramática mínima do discurso formal e introdução à conversação. Desenvolvimento das habilidades de compreensão e análise crítica.",
      basica: [
        "LINS, L. M. A. Inglês instrumental: estratégias de leitura e compreensão textual. Olinda: Livro Rápido - Elógica, 2010.",
        "MUNHOZ, R. Inglês instrumental: estratégias de leitura: módulo I. ed. ref. e rev. São Paulo: Textonovo, 2004.",
        "SOUZA, A. G. F. Leitura em língua inglesa: uma abordagem instrumental. 2. ed. São Paulo: Disal, 2010."
      ],
      complementar: [
        "DIENER, P. Inglês instrumental. Curitiba: Contentus, 2020.",
        "DREY, R. F. Inglês práticas de leitura e escrita. Porto Alegre: Penso, 2015.",
        "LOWTHER, C. Tapestry reading 1. Boston: Heinle & Heinle, 2000.",
        "MUNHOZ, R. Inglês instrumental: estratégias de leitura: módulo II. São Paulo, SP: Textonovo, 2004.",
        "EASTMENT, DAVID. The internet: Resource Books for Teachers. Oxford: Oxford University Press, 2000."
      ]
    },
    "OPT:Introdução à Língua Brasileira de Sinais (LIBRAS)": {
      ementa: "Conceito de Libras. Conhecendo o ouvido humano. Caracterizando a surdez. Deficiência x Diferença. Identidades Surdas. História dos Surdos: Educação, lutas e conquistas (marcos regulatórios). Onde estão os Surdos: histórias de sucesso. Cultura surda. Sinalário contextualizado. Introdução aos classificadores. Políticas Públicas Educacionais no campo da surdez. Libras nas escolas: abordagem de filosofias educacionais. A importância da formação docente na educação dos Surdos. Os diferentes papéis e o relacionamento entre o professor regente e os profissionais instrutor e intérprete de Libras.",
      basica: [
        "BRASIL. Congresso Nacional. LEI 10.436 de 24 de abril de 2002. BRASIL. Ministério da Educação. Secretaria de Educação Especial. Decreto N° 5.626, de 22 de dezembro de 2005. Regulamenta a Lei N° 10.436, de 24 de abril de 2002. BRASIL. Senado Federal. Lei de Diretrizes e Bases da Educação Nacional: nº 9394/96. Brasília: 1996. INSTITUTO NACIONAL DE EDUCAÇÃO DE SURDOS -",
        "INES, História do INES. Disponível em: Acesso em: 30de ago. 2015.",
        "QUADROS, R. M. de. Língua de sinais brasileira estudos linguísticos. Porto Alegre: Art Med, 2011."
      ],
      complementar: [
        "BRASIL. Ministério da Educação. Secretaria de Educação Especial. Diretrizes Nacionais para a Educação Especial na Educação Básica. Brasília: MEC/",
        "SEESP, 2001 BRASIL. Declaração Mundial de Educação para Todos: plano de ação para satisfazer as necessidades básicas de aprendizagem. BRASIL. Declaração de Salamanca e linha de ação sobre necessidades educativas especiais. Brasília:",
        "UNESCO, 1994. BRASIL. Declaração Universal de Direitos Humanos. Brasília:",
        "UNESCO, 1998. BRASIL. Ministério da Educação. Educação Infantil, saberes e práticas da inclusão. Brasília: MEC/"
      ]
    },
    "OPT:Materiais Refratários": {
      ementa: "Constituição e classificação dos refratários. Análise das matérias-primas e dos processos de fabricação. Refratários moldados, monolíticos e pré-moldados utilizados nos processos siderúrgicos. Propriedades dos materiais refratários. Caracterização dos materiais refratários. Conhecimento das Normas Técnicas. Análises de Falhas. Estudos post-mortem. Caracterização dos mecanismos de desgaste dos materiais refratários.",
      basica: [
        "LEONEL, R. F. Polímeros e Cerâmicas. Curitiba: Intersaberes, 2020.",
        "NEWELL, J. Fundamentos da moderna engenharia e ciência dos materiais. Rio de Janeiro:",
        "SMITH, W. F. Fundamentos de engenharia e ciência dos materiais. 5. ed. Porto Alegre:"
      ],
      complementar: [
        "HILL, R. E. Physical metallurgy principles. 4. ed. Stanford: Cengage Learning, 2010.",
        "WRIGHT, W. J. Ciência e engenharia dos materiais. 3. ed. São Paulo: Cengage Learning, 2019.",
        "RETHWISCH, D. G. Ciência e engenharia de materiais: uma introdução. 8. ed. Rio de Janeiro:",
        "SHACKELFORD, J. F. Ciência dos materiais. São Paulo: Pearson Prentice Hall, 2008.",
        "VLACK, L. H. Princípios de ciência e tecnologia dos materiais. Rio de Janeiro: Campus, 1984."
      ]
    },
    "OPT:Mineralogia": {
      ementa: "Conhecimento da origem e formação dos minerais. Estudo da cristalografia e morfologia dos cristais. Estudo e aplicação das propriedades físicas dos minerais, bem como suas composições químicas, com ênfase nas ligações químicas. Conhecimento, estudo e identificação dos minerais, incluindo os minerais de minério, os minerais industriais e as gemas.",
      basica: [
        "SHARP, W. E. Dana's minerals and how to study them. 4th Edition. Editora John Wiley & Sons, Inc. New York/",
        "DUTROW, B. Manual of mineral science. 23rd Edition. Editora John Wiley and Sons, Inc. New York/",
        "PUTNIS, A. Introduction to mineral sciences. Cambridge University Press. New York/"
      ],
      complementar: [
        "BARTORELLI, A. Minerais e pedras preciosas do Brasil. São Paulo: Solaris Edições Culturais, 2010.",
        "DANA, J. D. Manual of mineralogy. Merchant Books. New York/",
        "MENEZES, S. O. Minerais comuns e de importância econômica: um manual fácil. 2. ed. São Paulo: Oficina de Textos, 2012.",
        "NESSE, W. D. Introduction to mineralogy. Oxford University Press. New York/",
        "WETZEL, Raquel S... [et al.] Mineralogia [recurso eletrônico]; revisão técnica: Genova Maria Pulz e Andrea Sander. - Porto Alegre:"
      ]
    },
    "OPT:Modelagem Computacional de Estruturas": {
      ementa: "Conceitos de Modelagem Básica. Modelagem com o software Ftool. Modelagem com o software SAP2000 Student Version, englobando estruturas 2D e 3D, avaliando os resultados de forma crítica e comparando com os obtidos pela Teoria de Estruturas. Estudo de Casos.",
      basica: [
        "Associação Brasileira de Normas Técnicas. NBR 6123: 1988. Forças devidas ao vento em edificações. Rio de Janeiro:",
        "ABNT, 1988. Associação Brasileira de Normas Técnicas. NBR 8681. Ações e segurança nas estruturas - Procedimento. Rio de Janeiro:",
        "SCHAFER, K. Design and detailing of structural concrete using strut-and-tie models. In: The Structural Engineer, Março, 1991."
      ],
      complementar: [
        "BARBOZA, F. F. M. Modelagem e desenvolvimento de banco de dados. Porto Alegre:",
        "BROCKMAN, J. B. Introdução à engenharia modelagem e solução de problemas. Rio de Janeiro:",
        "OLIVEIRA, A. de. AutoCAD 2014 3 D avançado modelagem e render com mental ray. São Paulo: Erica, 2013.",
        "OLIVEIRA, A. de. Autodesk AutoCAD 2016 modelagem 3 D. São Paulo: Erica, 2016.",
        "CHERQUES, H. R. Modelagem de projetos. São Paulo: Atlas, 2002."
      ]
    },
    "OPT:Modelagem da Informação da Construção (BIM)": {
      ementa: "Fundamentos de BIM. Modelagem paramétrica. Interoperabilidade. Multidimensionalidade. Principais programas computacionais que utilizam BIM. Aplicações práticas em Engenharia Civil. Modelagem de construções simples no software Revit.",
      basica: [
        "CARDOSO, M.C. Autodesk civil 3 D 2020 aplicações BIM para projetos de infraestrutura. São Paulo: Erica, 2020.",
        "EUSIN, S. R. Gerenciamento e coordenação de projetos BIM um guia de ferramentas e boas práticas para o sucesso de empreendimentos. Rio de Janeiro:",
        "TEICHOLZ, P. Manual de BIM um guia de modelagem da informação da construção para arquitetos, engenheiros, gerentes, construtores e incorporadores. 3. ed. Porto Alegre: Bookman, 2021."
      ],
      complementar: [
        "M. F, de. BIM plataforma 6 D e 7 D: sustentabilidade e ciclo de vida. Curitiba: Contentus, 2020. BRASIL. Decreto nº 9.983, de 22 de agosto de 2019. Dispõe sobre a Estratégia Nacional de Disseminação do Building Information Modelling e institui o Comitê Gestor da Estratégia do Building Information Modelling. Brasília, 2019.",
        "NETTO, C. Autodesk revit architecture 2020 conceitos e aplicações. São Paulo: Erica, 2020.",
        "DERETTI, M. D. BIM Plataforma 4 D: gerenciamento de cronograma. Curitiba: Contentus, 2021.",
        "OLIVEIRA, A. de. Autodesk Navisworks 2017 conceitos e aplicações. São Paulo: Erica, 2019."
      ]
    },
    "OPT:Método dos Elementos Finitos": {
      ementa: "Estudo sobre a formulação do método dos elementos finitos. Análise dos elementos unidimensionais, elementos isoparamétricos e integração numérica, elementos bidimensionais (estado plano de tensão e deformação, sólidos assimétricos), elementos para análise tridimensional de tensões. Execução de um programa envolvendo um dos elementos apresentados durante o curso.",
      basica: [
        "FILHO, A. Elementos finitos a base da tecnologia CAE: análise dinâmica. 2. ed. São Paulo: Erica, 2009.",
        "ASSAN, A. E. Método dos elementos finitos: primeiros passos. 2. ed. São Paulo: Unicamp, 2003.",
        "BELEGUNDU, A. D. Elementos finitos. 4. ed. São Paulo: Pearson, 2014."
      ],
      complementar: [
        "FILHO, A. Elementos finitos: a base da tecnologia CAE. 6. ed. São Paulo: Erica, 2013.",
        "FILHO, A. Elementos finitos a base da tecnologia Cae: análise não linear. São Paulo: Érica, 2012.",
        "STROUBOULIS, T. The finite element method and its reliability. 1. ed. Oxfort: Oxfort University Press, 2001.",
        "BATHE, K-J. Finite element procedures. New Jersey: Prentice Hall, 1996.",
        "FISH, J. Um primeiro curso em elementos finitos. Rio de Janeiro:"
      ]
    },
    "OPT:Pedologia e Conservação do Solo": {
      ementa: "Introdução ao estudo do solo: formação, horizontes, constituintes e morfologia. Classificação dos solos: Sistema Brasileiro de classificação dos solos. Processos de degradação do solo em ambiente tropical. Práticas de conservação do solo. Análise da ocupação do solo e capacidade de uso. Técnicas de remediação de solos contaminados.",
      basica: [
        "BACHA, A. L. R.; et al. Pedologia. Porto Alegre:",
        "BOTELHO, R. G. M. Erosão e conservação dos solos: Conceitos, temas e aplicações. Rio de Janeiro: Bertrand Brasil, 2007.",
        "LEPSCH, I. F. Formação e conservação dos solos. São Paulo: Oficina de Textos, 2005."
      ],
      complementar: [
        "NETO, F. Conservação do Solo. 7. ed. São Paulo: Ícone, 2010. EMPRESA BRASILEIRA DE PESQUISA AGROPECUÁRIA. Sistema brasileiro de classificação de solos. 2. ed. Brasília:",
        "REZENDE, M. et al. Pedologia: base para distinção de ambientes. 5. ed. Viçosa:",
        "SANTOS, M. A. Poluição do meio ambiente. Rio de Janeiro:",
        "SANTOS, R. D. Manual de descrição e coleta de solo no campo. 7. ed. Viçosa: Sociedade Brasileira de Ciência do Solo, 2015."
      ]
    },
    "OPT:Sistemas de Abastecimento de Água": {
      ementa: "Concepção e projeto de adutoras de abastecimento. Concepção e projeto de reservatórios. Concepção e projeto de redes ramificada e malhada de distribuição de água.",
      basica: [
        "CREDER, H. Instalações Hidráulicas e Sanitárias. 6. ed. Rio de Janeiro: Livros Técnicos e Científico, 2006.",
        "GOMES, H. P. Sistemas de abastecimento de água: dimensionamento de redes. 2. ed. rev. São Paulo:",
        "JUNIOR, A.de C. Gestão do saneamento básico: abastecimento de água e esgotamento sanitário. Barueri: Manole, 2012."
      ],
      complementar: [
        "ALVAREZ, G. A. Manual de hidráulica. 7. ed. São Paulo: Edgard Blücher, 1982. v. 2.",
        "DACACH, N.G. Saneamento básico. 3. ed. Rio de Janeiro:",
        "FILHO, S. S. Tratamento de água concepção, projeto e operação de estações de tratamento. Rio de Janeiro:",
        "JUNIOR, A. Gestão do saneamento básico abastecimento de água e Esgotamento sanitário. Barueri: Manole, 2012.",
        "SHAMMAS, N. K. Abastecimento de água e remoção de resíduos. 3. ed. Rio de Janeiro:"
      ]
    },
    "OPT:Sistemas de Esgotamento Sanitário": {
      ementa: "Caracterização quanto à situação do esgotamento sanitário Brasil. Soluções estruturais para o esgotamento sanitário. Impactos ambientais, sociais e econômicos. Conceitos: esgotos sanitários. Elementos constituintes do sistema de esgotamento sanitário. Projeto de redes para esgotamento sanitário, interceptores, emissários e estações elevatórias.",
      basica: [
        "GARCEZ, L. N. Elementos de engenharia hidráulica e sanitária. 2. ed. São Paulo: Edgard Blucher, 2004.",
        "MENDONÇA, S. R. Sistemas sustentáveis de esgotos: orientações técnicas para projeto e dimensionamento de redes coletoras, emissários, canais, estações elevatórias, tratamento e reúso na agricultura. São Paulo: Blucher, 2017.",
        "NUVOLARI, A. Esgoto sanitário: coleta, transporte, tratamento e reuso agrícola. São Paulo Edgard Blucher; FATEC-SP/CEETEPS;"
      ],
      complementar: [
        "TSUTIYA, M. T. Coleta e transporte de esgoto sanitário. 2. ed. São Paulo: Ed.",
        "USP, 2000. ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. NBR 8160: sistemas prediais de esgoto sanitário: projeto e execução. Rio de Janeiro: 1999. 74 p. ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. NBR 9648: Estudo de concepção de sistemas de esgoto sanitário. 1986. Rio de Janeiro. ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. NBR 9649: Projeto de redes coletoras de esgoto sanitário. 1986. Rio de Janeiro.",
        "CRESPO, P. G. Elevatória nos sistemas de esgoto. Belo Horizonte:"
      ]
    },
    "OPT:Tópicos Especiais em Engenharia Civil": {
      ementa: "Abordagem de tópicos de conteúdo variável que atenda a atualidade do mercado, do curso ou da especialidade do docente, professor visitante ou profissional convidado. A",
      basica: [],
      complementar: []
    },
    "PARQ": {
      ementa: "Técnicas e legislação aplicadas a elaboração do Projeto Arquitetônico térreo e com mais de um pavimento: Plantas Baixas, Cortes e Fachadas, Planta de Locação e Coberta, Planta de Situação. Representação e elaboração de projetos de reforma e ampliação. Circulação vertical. Desenho Universal: Acessibilidade, espaços inclusivos e diversos. Detalhamento construtivo.",
      basica: [
        "CHING, F. D. K. Arquitetura de interiores ilustrada. 4. ed. Porto Alegre: Bookman, 2019.",
        "GIAMBASTIANI, G. L. Arquitetura e urbanismo. Porto Alegre:",
        "MONTENEGRO, Gildo. Desenho Arquitetônico. 4. ed. São Paulo: Edgard Blucher Ltda, 2001."
      ],
      complementar: [
        "ARIZA, F. Bajo presupuesto, vivienda contemporânea. Barcelona: Parramón, 2008.",
        "CHING, F. D. K. Arquitectura: forma, espacio y orden. 2. ed. New York: John Wiley & Sons, 1996.",
        "FERREIRA, P. Desenho Arquitetônico. Rio de Janeiro: Editora ao Livro Técnico, 2001.",
        "FRENCH, H. Os mais importantes conjuntos habitacionais do séc. XX. Porto Alegre: Bookman, 2009.",
        "OBERG, L. Desenho Arquitetônico. 22. ed. Rio de Janeiro: Ao Livro Técnico S/A, 1979."
      ]
    },
    "PATO": {
      ementa: "Estudo sobre Patologia em Estruturas de Concreto Armado - Metodologia da Análise Patológica -; Manutenção, Recuperação e Reforço de Estruturas - Reforço de Pilares, Vigas e Lajes de Concreto Armado -; Defeitos em alvenarias com Blocos de Concreto ou com Blocos Cerâmicos - Recalques de Fundações, Infiltrações, Isolamento Térmico e Acústico.",
      basica: [
        "CÁNOVAS, M. F. Patologia e terapia do concreto armado. São Paulo:",
        "MILITITSKY, J.;, N. C.;, F. Patologia das fundações. 2. ed.São Paulo: Oficina de Textos, 2015.",
        "RIPPER, T. Patologia, recuperação e reforço de estruturas de concreto armado. São Paulo:"
      ],
      complementar: [
        "ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. NBR 6118: projetos de estruturas de concreto - procedimentos. Rio de Janeiro:",
        "CAPARRINO, C. F. Patologias em alvenarias. 2. ed. São Paulo: Oficina de Textos, 2018.",
        "JÚNIOR, R. de. Patologias em sistemas prediais hidráulico sanitários. São Paulo: Blucher, 2013.",
        "SILVA, P. F. A. Durabilidade das estruturas de concreto aparente em atmosfera urbana. São Paulo: PINI 1995.",
        "WEIMER, B. F. Patologia das estruturas. Porto Alegre:"
      ]
    },
    "PLANOR": {
      ementa: "Projetos. Documentação da Obra. Contratos Particulares. Regimes de execução de obras. Planejamento e programação de obras. Nivelamento de recursos com o PERT/CPM, PERT/TEMPO. Orçamento. Tipos de Orçamento. Composição Unitária e quantitativos de insumos. Referências de Preço e Cursos. Planilhas Orçamentárias, SINAPI, SICRO, SUDECAP, SETOP. BDI.",
      basica: [
        "LIMMER, C.V. Planejamento, orçamento e controle de projetos e obras. Rio de Janeiro:",
        "MATTOS, A. D. Planejamento e controle de obras. 2. ed. São Paulo:",
        "MATTOS, A. D. Como preparar orçamento de obras. 2. ed. São Paulo:"
      ],
      complementar: [
        "CAIXA (Caixa Econômica Federal). SINAPI: Sistema Nacional de Pesquisa de Custos e Índices da Construção Civil. Custo Unitário Básico (CUB/m²): principais aspectos. Belo Horizonte, 2007. SINDUSCON-MG. Sindicato da indústria da construção civil no estado de Minas Gerais. TCPO-Tabelas de composições de preços para orçamentos. 12. ed. São Paulo:",
        "TISAKA, M. Orçamento na construção civil: consultoria, projeto e execução. São Paulo:"
      ]
    },
    "PNT": {
      ementa: "Tipos de pontes e elementos constituintes. Seções transversais típicas em função dos materiais. Sistemas estáticos longitudinais. Cargas móveis: determinação do trem tipo para pontes rodoviárias e ferroviárias, linhas de influência de esforços solicitantes, coeficiente de impacto vertical. Carga permanente. Envoltório de esforços solicitantes. Esforços longitudinais, aceleração e frenagem, retração. Esforços transversais, vento. Determinação dos esforços solicitantes em lajes de concreto. Dimensionamento das longarinas e transversinas. Dimensionamento de pilares de pontes. Dimensionamento de fundação em tubulão e estacas. Aparelhos de apoio.",
      basica: [
        "LEONHARDT, F. Construções de concreto: princípios básicos da construção de pontes de concreto. Rio de Janeiro: Interciência, 1979. 6. v.",
        "MARCHETTI, O. Pontes de concreto armado. São Paulo: E. Blücher, 2008.",
        "PFEIL, W. Pontes em concreto armado: mesoestrutura, infra- estrutura, apoios. 4. ed. Rio de Janeiro:"
      ],
      complementar: [
        "ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. NBR 7188: carga móvel em ponte rodoviária e passarela de pedestre: procedimento. Rio de Janeiro:",
        "JÚNIOR, C.(Coord.). Manual de projeto e construção de pontes de madeira. São Carlos: Suprema, 2006.",
        "FREITAS, M. de. INSTITUTO MAUÁ DE TECNOLOGIA. Infra-estrutura de pontes de vigas: distribuição de ações horizontais: método geral de cálculo. São Paulo: E. Blücher, 2001.",
        "MASON, J. Pontes metálicas e mistas em viga reta: projeto e cálculo. Rio de Janeiro:",
        "MARCHETTI, O. Pontes de concreto armado. 2. ed. São Paulo: Blucher, 2018."
      ]
    },
    "POAE": {
      ementa: "Análise da programação linear, dos modelos básicos de estocagem, da simulação, da Teoria das Filas, do Pert - COM, da Regressão linear e das aplicações para empreendimentos construtivos.",
      basica: [
        "LIEBERMAN, G. J. Introdução à pesquisa operacional. 9. ed. Porto Alegre:",
        "PRADO, D. Programação linear. 5. ed. Belo Horizonte: Falconi, 2016.",
        "PRADO, D. Teoria das filas e da simulação. 6. ed. Belo Horizonte: Falconi, 2017."
      ],
      complementar: [
        "BORNSTEIN, C. T. Introdução à programação linear. 3. ed. Rio de Janeiro: Elsevier, 1988.",
        "LACHTERMACHER, G. Pesquisa operacional na tomada de decisões. 5. ed. Rio de Janeiro:",
        "PRADO, D. PERT/COM. 6. ed. Belo Horizonte: Falconi, 2014.",
        "SHAMBLIN, J. E.; STEVENS Jr., G. T. Pesquisa operacional: uma abordagem básica. São Paulo: Atlas, 1989.",
        "TAHA, H. A. Pesquisa operacional. 8. ed. São Paulo: Prentice Hall Brasil, 2018."
      ]
    },
    "QUIG": {
      ementa: "Conceitos introdutórios da Química. Reconhecimento e identificação e caracterização das partículas subatômicas fundamentais e dos modelos atômicos. Abordagem da quantização de energia e suas implicações no mundo atômico e na espectroscopia. Estudo, identificação e análise da periodicidade química dos elementos. Distribuição eletrônica em níveis e subníveis energéticos. Classificação das ligações químicas. Estudo e reconhecimento das características e propriedades dos compostos iônicos, moleculares e metálicos. Identificação das forças intermolecularese suas peculiaridades. Estudo das fórmulas químicas, quantidades em química (mol) eo conhecimento das regras e aplicações da estequiometria.",
      basica: [
        "JONES, L. Princípios de química: questionando a vida moderna eo meio ambiente. 5. ed. Porto Alegre: Bookman, 2010.",
        "BROWN, T.L.; LeMAY Jr. H. E.;",
        "MURPHY, C. J.; WOODWARD P. M.;",
        "STOLTZFUS, M. W. Química: a ciência central. 13. ed. São Paulo: Pearson, 2017.",
        "RUSSELL, J. B. Química geral. São Paulo: Pearson Makron Books, 1994."
      ],
      complementar: [
        "BROWN, L. S. Química geral aplicada à engenharia. São Paulo: Cengage Learning Brasil, 2021.",
        "CHANG, R. Química. Porto Alegre:",
        "WEAVER, G. C. Química geral e reações químicas. São Paulo: Cengage Learning, 2016. v. 1.",
        "WEAVER, G. C. Química geral e reações químicas. São Paulo: Cengage Learning, 2016. v.2.",
        "MYERS, R. J. Química: um curso universitário. São Paulo: Edgard Blucher, 1995. 2º PERÍODO"
      ]
    },
    "REMA1": {
      ementa: "Análise da Estática dos corpos rígidos. Solicitações simples: Estudo das tensões e deformações em corpos no regime elástico (Lei de Hooke). Tensão Normale de Cisalhamento, Tensões admissíveis e dimensionamento de elementos estruturais. Estudo de estrutura de tensões e deformações variáveis. Tensões térmicas e por peso próprio. Propriedades mecânicas dos materiais. Cargas axiais, tensões e deformações em treliças isostáticas, dimensionamento. Análise de tensões no plano. Estado Simples de Tensões e Estado Plano de Tensões (Círculo de Mohr). Propriedades geométricas de áreas: Centro de gravidade, Centroide, Momento estático de áreas, Momentos de inércia retangular e Polar. Produtos de inércia. Esforços de Torção, Esforços de Flexão. (Esforços solicitantes: normal, cortante e momento fletor). Aplicações e simulações em Laboratórios.",
      basica: [
        "MAZUREK, D. F. Mecânica dos Materiais. 7. ed. São Paulo: Makron Books, 2007.",
        "HIBBELER, R. C. Resistência dos materiais. 7a ed. São Paulo: Prentice Hill, 2004.",
        "MELCONIAN, S. Mecânica Técnica e Resistência de Materiais. 18. ed. São Paulo: Érika, 2008."
      ],
      complementar: [
        "AMARAL, O. C. Curso básico de resistência dos materiais. Belo Horizonte: Editora Belo Horizonte, 2002.",
        "MAZUREK, D. F. Mecânica Vetorial para Engenheiros: Estática. 9. ed. Porto Alegre:",
        "GOODNO, B. J. Mecânica dos materiais. São Paulo: Cengage Learning, 2012.",
        "HIBBELER, R. C. Estática - Mecânica para engenharia. 12. ed. São Paulo: Prentice Hill, 2011. TIMOSHENKO S.; YOUNG D. H. Mecânica Técnica: Estática. 1. ed. Rio de Janeiro: Livros técnicos e científicos. 1979."
      ]
    },
    "REMA2": {
      ementa: "Estudo sobre tensão à flexão, flexão em vigas, flexão pura, simples e compostas, tensão ao cisalhamento, tensão ao cisalhamento em vigas, torção, torção em vigas. Estudo sobre flambagem em estruturas esbelta. Estado Plano de Tensões (Círculo de Mohr) e Estado Triplo de Tensões. Estudo da Energia de Deformação (Teoremas da Energia, Maxwell, Castigliano, Betti). Análise dos Critérios de Resistência (Coulomb, Energia de Distorção) e Instabilidade de Barras: conceito de Instabilidade, Carga crítica, Flambagem Elástica e Plástica.",
      basica: [
        "ASSAN, A. E. Resistência dos materiais. Campinas: Unicamp, 2010. v. 1.",
        "JÚNIOR, E. R. Resistência dos materiais. 3. ed. São Paulo: Makron Books, 2007.",
        "HIBBELER, R. C. Resistência dos Materiais. 7. ed. São Paulo: Pearson, 2010."
      ],
      complementar: [
        "JR., R. R. Mecânica dos materiais. 2. ed. São Paulo:",
        "GOODNO, B. J. Mecânica dos materiais. São Paulo: Cengage Learning, 2010.",
        "PARETO, L. Formulário técnico resistência e ciência dos materiais. São Paulo: Hemus, 2003.",
        "POPOV, E. P. Introdução à mecânica dos sólidos. São Paulo: Edgard Blucher, 1978.",
        "URGURAL, A. C. Mecânica dos materiais. Rio de Janeiro:"
      ]
    },
    "SAUR": {
      ementa: "Histórico do saneamento e da Saúde Pública; principais formas de disseminação de doenças relacionadas à falta de saneamento. Estudo sobre os conceitos gerais relativos ao tratamento de água e à introdução às tecnologias de tratamento de água para abastecimento, tratamento de água residuária. Aspectos gerais sobre sistemas de esgotamento sanitário: noções básicas sobre rede de distribuição e tratamento. Análise da problemática dos esgotos sanitários e da classificação dos sistemas de esgotamento sanitário. Definição da caracterização quantitativa e a qualitativa dos esgotos. Aplicação de soluções individuais de esgotamento sanitário. Análise de resíduos sólidos e de limpeza pública. Estudo sobre noções gerais de resíduos sólidos: conceito, classificação, composição, peso específico, geração percápita, decomposição biológica, aspectos epidemiológicos e poluidores. Aspectos gerais de drenagem urbana.",
      basica: [
        "DACACJ, N.G. Saneamento básico. 3. ed. Rio de Janeiro: Editora Didática e Científica Ltda, 1990.",
        "LEME, F. P. Engenharia do saneamento ambiental. Rio de Janeiro: Livros Técnicose Científicos. 1982. Von",
        "SPERLING, M. Introdução à qualidade das águas e ao tratamento de esgoto. 4. ed. Belo Horizonte:"
      ],
      complementar: [
        "FUNDAÇÃO NACIONAL DE SAÚDE (BRASIL). Manual de saneamento. 3. ed. rev. Brasília: Ministério da Saúde, 2004.",
        "JÚNIOR, A. Saneamento, saúde e ambiente: fundamentos para um desenvolvimento sustentável. Barueri: Manole, 2005. POMPEO R.; SAMWAYS G. Saneamento Ambiental. Curitiba: Intersaberes, 2020.",
        "ROCHA, A. A. História do Saneamento. São Paulo: Edgard Blucher, 2016.",
        "STEIN, R.T.,. Saneamento. Porto Alegre:"
      ]
    },
    "TCC1": {
      ementa: "Orientação para a redação do projeto do Trabalho de Conclusão de Curso a ser apresentado ao professor da disciplina para qualificação como pré-requisito para a defesa. O aluno deverá elaborar um projeto, sob a orientação de um professor orientador, devidamente supervisionado pelo professor da disciplina.",
      basica: [
        "CERVO, A. L.; BERVIAN; P. A.;",
        "SILVA, R. Metodologia científica. São Paulo: Pearson Makron Books, 2007.",
        "MARCONI, M. A. Fundamentos da metodologia científica. 8a ed. São Paulo: Atlas, 2019.",
        "MARCONI, M. A. Metodologia científica. 7a ed. São Paulo: Atlas, 2019."
      ],
      complementar: [
        "ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS (ABNT). NBR 6023: Informação e documentos - referências - elaboração. Rio de Janeiro:",
        "ABNT, 2018. ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS (ABNT). NBR 10520: Informação e documentos - citação em documentos. Rio de Janeiro:",
        "ABNT, 2018. ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS (ABNT). NBR 14724: Informação e documentos - trabalhos acadêmicos - apresentação. Rio de Janeiro:",
        "GIL, A. C. Como elaborar projetos de pesquisa. 7. ed. São Paulo: Atlas, 2022.",
        "CAMPOS, E N. Técnica de redação. Editora: Imperial Novo Milênio, 2011. 10º PERÍODO"
      ]
    },
    "TCC2": {
      ementa: "Desenvolvimento, redação e apresentação do trabalho de pesquisa (monografia, artigo científico ou estudo de caso), que envolve o levantamento, a análise e a difusão dos resultados obtidos na pesquisa pelo discente, dentro do que é preconizado pela metodologia científica, sob as normas de elaboração do T.C.C. da UEMG de Guanhães, e devidamente orientado por um docente da Instituição.",
      basica: [
        "CERVO, A. L.; BERVIAN; P. A.;",
        "SILVA, R. Metodologia científica. São Paulo: Pearson Makron Books, 2007.",
        "MARCONI, M. A. Fundamentos da metodologia científica. 8. ed. São Paulo: Atlas, 2019.",
        "MARCONI, M. A. Metodologia científica. 7. ed. São Paulo: Atlas, 2019."
      ],
      complementar: [
        "ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS (ABNT). NBR 6023: Informação e documentos - referências - elaboração. Rio de Janeiro:",
        "ABNT, 2018. ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS (ABNT). NBR 10520: Informação e documentos - citação em documentos. Rio de Janeiro:",
        "ABNT, 2018. ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS (ABNT). NBR 14724: Informação e documentos - trabalhos acadêmicos - apresentação. Rio de Janeiro:",
        "GIL, A. C. Como elaborar projetos de pesquisa. 7. ed. São Paulo: Atlas, 2022.",
        "CAMPOS, E N. Técnica de redação. Rio de Janeiro: Imperial Novo Milênio, 2011. 5.1.5 Ementário das Disciplinas Optativas"
      ]
    },
    "TEC1": {
      ementa: "Estudo sobre Introdução à Tecnologia, Fundamentos da Qualidade da Construção Civil, Canteiro de Obras, tipos de canteiro e legislação sobre canteiro. NR18. Serviços preliminares: Laudo de vistoria cautelar, levantamento topográfico, locação do canteiro de obras, Prospecção Geológica, Sondagem a Percução SPT, serviços de terraplenagem, Compatibilização de Projetos, Legalização de Obras. Sistemas construtivo em Alvenaria convencional (concreto armado e vedação em alvenaria).Análise da infraestrutura: contenções, escavações, fundações e superestrutura, como elementos estruturais, fundamentos de estabilidade, materiais, mistura, transporte, lançamento e adensamento de concreto, concreto usinado e preparado em obra, plano de concretagem, controle tecnológico em concreto, execução de estruturas de concreto armado, formas e escoramento, Alvenaria e constituintes da alvenaria, pisos e revestimentos e coberturas.",
      basica: [
        "AZEREDO, H. A. O edifício até a sua cobertura. São Paulo: Edgar Blucher, 2005.",
        "AZEREDO, H. A. O edifício e seu acabamento. São Paulo: Edgar Blucher, 2006.",
        "YAZIGI, W. A técnica de edificar. São Paulo:"
      ],
      complementar: [
        "ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. ABNT. Coletânea de Normas, Rio de Janeiro.",
        "BAUER, L. A. F. Materiais de construção. Editora",
        "BAUER, L. A. F. Materiais de construção. Editora",
        "MOHAMAD, Gihad. Construções em alvenaria estrutural materiais, projeto e desempenho. 2. ed. São Paulo: Blucher, 2020.",
        "MONTEIRO, P. Concreto: estrutura, propriedades e materiais. São Paulo: Pini, 1994."
      ]
    },
    "TEC2": {
      ementa: "Esquadrias e seus tipos, vidros de segurança. Serviços de acabamento: impermeabilização, tipos de revestimentos de tetos, paredes e pisos, esquadrias e ferragens, sistema de pintura. Sistemas construtivos racionalizados, Concreto pré- moldado, Alvenaria Estrutural, Paredes de concreto, Steel Frame.",
      basica: [
        "ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. ABNT. Coletânea de Normas. Rio de Janeiro:",
        "AZEREDO, H. A. O edifício até a sua cobertura. São Paulo: Edgar Blucher, 2005.",
        "YAZIGI, W. A Técnica de edificar. São Paulo:"
      ],
      complementar: [
        "AZEREDO, H. A. O edifício e seu acabamento. São Paulo: Edgar Blucher, 2006.",
        "BAUER, L. A. F. Materiais de construção. São Paulo:",
        "BAUER, L. A. F. Materiais de construção. São Paulo:",
        "DEBS, M. Concreto pré-moldado: fundamentos e aplicações. 2. ed. São Paulo: Oficina de Textos, 2017.",
        "MOHAMAD, Gihad. Construções em alvenaria estrutural materiais, projeto e desempenho. 2. ed. São Paulo: Blucher, 2020.",
        "MONTEIRO, P. Concreto: estrutura, propriedades e materiais. São Paulo: Pini, 1994. 9º PERÍODO"
      ]
    },
    "TEST1": {
      ementa: "Introdução à análise estrutural. Análise das principais estruturas isostáticas: treliças, vigas, pórticos, arcos e grelhas. Reações de apoio. Diagramas de esforços solicitantes.",
      basica: [
        "AMARAL, O. C.; Estruturas Isostáticas. 7. ed. Belo Horizonte: Editora Belo Horizonte, 2003.",
        "HIBELLER, H. C. Análise das Estruturas. 8. ed. São Paulo: Pearson, 2013.",
        "GILBERT, A. M. Fundamentos da Análise Estrutural. 3. ed. Porto Alegre:"
      ],
      complementar: [
        "ALMEIDA, M. C. F. Estruturas isostáticas. São Paulo: Oficina de Textos, 2009.",
        "DRESCH, F. Teoria das Estruturas. Porto Alegre: SER -",
        "KASSIMALI, A. Análise estrutural. São Paulo: Cengage Learning, 2016.",
        "MARTHA, L. F. Análise de Estruturas: conceitos e métodos básicos. 3. ed. Rio de Janeiro: Elsevier, 2022. SÜSSEKIND, J. C. Curso de análise estrutural. 12, ed. São Paulo: Globo, 1981. v. 1. 6º PERÍODO"
      ]
    },
    "TEST2": {
      ementa: "Princípio dos Trabalhos Virtuais, Método da Carga Unitária. Estruturas Hiperestáticas. Método das Forças. Análise das Estruturas Hiperestáticas: Treliças, Vigas, Pórticos e Grelhas. Problemas com recalques de apoio e variação de temperatura.",
      basica: [
        "HIBELLER, H. C. Análise das estruturas. 8. ed. São Paulo: Pearson, 2013.",
        "GILBERT, A. M. Fundamentos da análise estrutural. 3. ed. Porto Alegre:",
        "MARTHA, L. F. Análise de estruturas: conceitos e métodos básicos. 3. ed. Rio de Janeiro:"
      ],
      complementar: [
        "KASSIMALI, A. Análise estrutural. São Paulo: Cengage Learning, 2016.",
        "CIFÚ, S. Lições em mecânica das estruturas. São Paulo: Edgard Blucher, 2016.",
        "SORIANO, H. L. Análise de estruturas: método das forças e método dos deslocamentos. 2. ed. atual. Rio de Janeiro: Ciência Moderna, 2006. SÜSSEKIND, J.C. Curso de análise estrutural. São Paulo: Globo, 1981. v.2. SÜSSEKIND, J.C. Curso de análise estrutural. 12. ed. São Paulo: Globo, 1981. v. 1."
      ]
    },
    "TEST3": {
      ementa: "Estruturas Hiperestáticas: Aplicação do Método do deslocamento para vigas, pórticos planos sem deslocabilidade externa, pórticos planos com deslocabilidade externa. Linhas de influência para estruturas isostáticas: linha de influência de reação de apoio, linha de influência de esforço cortante, linha de influência de momento fletor, envoltória de esforços; determinação dos esforços solicitantes finais (cargas permanentes e cargas móveis). Linhas de influência para estruturas hiperestáticas: Determinação do comportamento das linhas de influências pelo Método da energia.",
      basica: [
        "HIBELLER, H. C. Análise das estruturas. 8. ed. São Paulo: Pearson, 2013.",
        "MARTHA, L. F. Análise de estruturas: conceitos e métodos básicos. 3. ed. Rio de Janeiro:",
        "LTC, 2022. SÜSSEKIND, J.C. Curso de análise estrutural. 12. ed. São Paulo: Globo, 1994. v. 1."
      ],
      complementar: [
        "GILBERT, A.M. Fundamentos da análise estrutural. 3. ed. Porto Alegre: Art Med, 2010. SÜSSEKIND, J.C. Curso de análise estrutural. 12. ed. São Paulo: Globo, 1994. v. 2. SÜSSEKIND, J.C. Curso de análise estrutural. 12. ed. São Paulo: Globo, 1994. v. 3.",
        "GERE, J.E. Mecânica dos sólidos. Rio de Janeiro:",
        "GERE, J.E. Mecânica dos sólidos. Rio de Janeiro:",
        "LTC, 1983. v. 2. 8º PERÍODO"
      ]
    },
    "TOPO": {
      ementa: "Introdução à Topografia: conceitos e objetivos; Formas e dimensão da Terra. Campos de ação da Topografia, descrição e manejo de instrumentos topográficos. Análise dos sistemas de coordenadas topográficas e geográficas. Estudo sobre Planimetria, Orientação de plantas e cálculo de coordenadas planas ortogonais. Análise das superfícies topográficas: medidas de ângulos, distâncias, poligonais. Cálculo de áreas. Desenho Topográfico.",
      basica: [
        "CASACA, J. M. Topografia Geral. 4. ed. Rio de Janeiro:",
        "SOUSA, J. J. Topografia: conceitos e aplicações. 3. ed. atual. e aum. Lisboa: Liga Bíblica Mundial, 2012. MCCORMAC. J. Topografia. 5. ed. Rio de Janeiro, LTC. 2013."
      ],
      complementar: [
        "BORGES, A. C. Exercícios de Topografia. 3. ed. São Paulo: Edgard Blücher, 2001.",
        "BORGES, A. de C. Topografia Aplicada à Engenharia Civil. São Paulo: Edgard Blücher, 2006. v. 1.",
        "CARDÃO, C. Topografia. 7. ed. Belo Horizonte: Edições Engenharia e Arquitetura, 1990.",
        "COMASTRI, J. A. Topografia: Planimetria. 2. ed. Viçosa: Ed.",
        "FABRÍCIO, H. Manual do Engenheiro Civil. São Paulo: Hemus, 1982. v. 3. 4º PERÍODO"
      ]
    },
    "TOPO2": {
      ementa: "Altimetria; Nivelamentos taqueométricos, trigonométricos, geométricos e barométricos; Topologia; Plantas planialtimétricas. Cálculo de áreas e volumes. Conceitos de modelagem digital de terrenos, projeções cartográficas e topográficas. Introdução à locação de obras civis. Introdução às técnicas modernas de levantamentos topográficos. Introdução a softwares de topografia. Noções de aerofotogrametria.",
      basica: [
        "BORGES, A. de C. Topografia Aplicada à Engenharia Civil. São Paulo: Edgard Blücher, 2006. v. 1.",
        "CASACA, J. M. Topografia Geral. 4. ed. Rio de Janeiro:",
        "TULER, J. C. Topografia: Altimetria. Viçosa: Imprensa Universitária"
      ],
      complementar: [
        "BORGES, A. C. Exercícios de Topografia. 3. ed. São Paulo: Edgard Blücher, 2001.",
        "CARDÃO, C. Topografia. 7. ed. Belo Horizonte: Edições Engenharia e Arquitetura, 1990.",
        "FABRÍCIO, H. Manual do Engenheiro Civil. São Paulo: Hemus, 1982. v. 3.",
        "SOUSA, J. J. Topografia: Conceitos e Aplicações. 3. ed. São Paulo: Lidel-Zamboni, 2012.",
        "MCCORMAC, J. Topografia. 6. ed. Rio de Janeiro, LTC. 2013. 5º PERÍODO"
      ]
    },
    "TRAN": {
      ementa: "Estudo sobre a introdução à Engenharia de Transportes, o Transporte e a Sociedade. Análise do Planejamento de Transportes, Modalidades de Transportes, Características Geométricas de Vias de Transportes, Características de Operações das principais modalidades de Transporte, Instalações, Aparelhamento e Avaliação Econômica de Projetos de Transporte.",
      basica: [
        "FERRAZ, A. C. C. P. Engenharia de tráfego urbano. São Carlos:",
        "PIMENTA, C. R. T. Projeto de estradas: escolha do traçado, elementos básicos para projeto. São Carlos:",
        "WIDMER, J. A. Tecnologia de transportes. 2. ed. São Carlos:"
      ],
      complementar: [
        "ASSOCIAÇÃO NACIONAL DE TRANSPORTES PÚBLICOS. A cidade, o transporte e o trânsito: sugestões para as administrações municipais. São Paulo:",
        "ANTP, 2001. ASSOCIAÇÃO NACIONAL DE TRANSPORTES PÚBLICOS. Integração de transporte público urbano. São Paulo:",
        "ANTP, 1996. ASSOCIAÇÃO NACIONAL DE TRANSPORTES PÚBLICOS. Transporte humano: cidades com qualidade de vida. 2. ed. São Paulo:",
        "ANTP, 1999. ASSOCIAÇÃO NACIONAL DE TRANSPORTES PÚBLICOS. O transporte clandestino no Brasil. São Paulo:",
        "BELDA, R. Crônicas técnicas: os caminhos do transporte urbano. 2. ed. São Paulo: Editoras Unidas, 1995. 7º PERÍODO"
      ]
    }
  }
};
