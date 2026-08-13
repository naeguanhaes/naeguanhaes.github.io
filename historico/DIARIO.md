# Diário de mudanças

Registro do que mudou e quando, do mais recente para o mais antigo.
Ao fazer uma alteração relevante, acrescente uma entrada no topo.

## 13/08/2026 · décima quinta rodada (busca que perdoa erro, datas na busca e guia de bolso)

- **A busca perdoa erro de digitação.** Um vocabulário montado a partir do
  próprio índice guarda todas as palavras que existem no site. Quando o termo
  não bate com nenhuma, procuramos a mais próxima aceitando UMA diferença:
  letra trocada, faltando, sobrando ou duas vizinhas invertidas. Essa última é
  a mais comum de todas ("emial" por "email") e não sai de graça na conta
  clássica de Levenshtein, por isso é tratada à parte. Só vale a partir de
  quatro letras, porque em palavra curta uma letra muda o sentido. Quando
  corrigimos, a tela diz "Mostrando resultados para ...", que é o mínimo de
  honestidade com quem digitou outra coisa.
- **A busca passou a olhar o calendário e os avisos.** Procurar "trancamento"
  agora traz também a data limite, e "moodle" traz o aviso do NAE sobre o
  assunto. As datas vêm com as futuras primeiro. Os quatro arquivos de dados
  (curso, ementas, calendário e avisos) entram sob demanda, e quem já tem o
  arquivo na página não baixa de novo.
- **`guia.html`, o guia de bolso.** Uma folha A4 com dois guias iguais, para
  cortar ao meio e entregar em sala: contatos do NAE e da unidade, padrão do
  e-mail e do Lyceum, regra de aprovação e os próximos prazos, que são lidos do
  calendário na hora de imprimir e por isso nunca saem velhos. Leva o QR do
  site, para quem quiser continuar no celular. A segunda via é uma cópia feita
  por código, não um bloco repetido no HTML: assim ninguém corrige um telefone
  em uma metade e esquece a outra.
- O gerador de QR saiu de dentro do `cartaz.html` e virou `assets/qr.js`, usado
  pelas duas folhas. O cartaz encolheu 342 linhas.
- **Dois defeitos apareceram no caminho, e os dois só apareceram porque a
  impressão foi conferida de verdade, gerando o PDF:**
  1. A regra de tela estreita (`max-width: 230mm`) valia também no papel, já
     que a folha A4 tem 210 mm. O guia saía em uma coluna só e sem a segunda
     via, e o cartaz saía com os itens empilhados. Faltava o `screen and`.
     O cartaz tinha esse defeito desde que nasceu.
  2. A lista dos arquivos compactados estava escrita duas vezes, no
     `minificar.js` e no `checar-minificados.js`. Acrescentar o `qr.js` em um
     e esquecer o outro reprovou a publicação sem motivo real. A lista virou
     `ferramentas/lista-assets.js`, em um lugar só.
- sw em nae-v28.

## 13/08/2026 · décima quarta rodada (busca nas ementas, aviso de prazo e revisão completa)

Três pedidos do coordenador: busca dentro das ementas, aviso de prazo e uma
revisão de **todas** as ementas, não de uma amostra.

- **Busca dentro das ementas.** Digitando um assunto, a busca mostra em quais
  disciplinas ele aparece, com o trecho em volta da palavra. As ementas são
  306 KB, então só são carregadas quando o termo tem três letras ou mais, e
  ficam fora do custo de quem só quer achar o telefone do NAE. O resultado leva
  para `matriz.html?d=CHAVE`, que troca o curso se preciso, abre o período,
  abre a ementa e destaca a linha por alguns segundos.
- **Aviso de prazo no aparelho**, na página do calendário. Sem servidor não há
  como empurrar notificação de verdade, e o cartão diz isso com todas as
  letras: o aviso é preparado no próprio aparelho e aparece quando o site ou o
  aplicativo instalado é aberto. No Android, com o site instalado, o
  `periodicsync` do trabalhador de serviço faz o sistema acordar o site
  sozinho. Para garantia total, o cartão aponta para o botão que baixa as
  datas para a agenda do celular.
- **Revisão completa das ementas, e ela achou defeito de verdade.** A
  conferência letra por letra dizia "nenhum problema", e estava certa: o texto
  errado também existia no PPC. Faltava desconfiar do tamanho. Duas
  disciplinas de Direito tinham engolido páginas inteiras do documento:
  "Tópicos em Teoria do Direito" com 18.075 letras (a ementa real tem 239) e
  "Elaboração de Projeto de TCC" com 10.601 letras de regulamento do Núcleo de
  Práticas, sem nenhuma das 8 referências que lhe cabiam. Três causas:
  1. a busca por `EMENTA` casava dentro de "Lei Compl**ementa**r", e a ementa
     começava no meio de um artigo do regulamento;
  2. sem bibliografia depois dela, a ementa não tinha onde parar e seguia
     documento adentro;
  3. no empate de nome, ganhava a ementa **mais longa**, ou seja, exatamente o
     bloco que havia escorrido.
- O extrator virou ferramenta do repositório, `ferramentas/gerar-ementas.js`,
  em vez de um script solto: `dados-ementas.js` agora se regenera com um
  comando. E o `checar-ementas.js` ganhou duas regras que teriam pego o
  defeito no dia em que ele nasceu: ementa acima de 2.500 letras e cabeçalho
  de outra seção ("3.4 ", "Art. 5", "9° Período") dentro da ementa.
- Saldo da revisão: 190 ementas e **1.364** referências (eram 1.356; as 8 novas
  são as do TCC 1 de Direito), zero problemas. Nove disciplinas seguem sem
  ementa porque o PPC não traz mesmo: são atividades, extensão e estágio.
- sw em nae-v22.

A lição fica registrada: um inspetor que só compara com a fonte não percebe
quando a fonte inteira foi copiada. Precisa também saber o tamanho e o formato
que a coisa certa tem.

Esta rodada foi feita em paralelo com outra, no computador de casa, que trouxe
`auxilios.html`, o roteiro de "quem procurar" no contato e o termo inicial das
atividades complementares de Direito. As duas se encontraram em um merge: os
únicos choques reais foram a `VERSAO` do `sw.js` (que passou a nae-v26, acima
das duas) e os arquivos gerados, que foram simplesmente refeitos. Sete
inspeções passaram depois da junção.

## 12/08/2026 · décima terceira rodada (períodos clicáveis e editais no ar)

- Na matriz, cada período virou uma caixa que **abre ao clicar**, com resumo no
  cabeçalho: quantas disciplinas, quantas já cursadas e a carga horária. Todos
  começam fechados, menos o período que o estudante informou na página de
  atividades, que abre sozinho. Período inteiro concluído ganha um sinal verde.
  Tem botão para abrir e fechar todos de uma vez.
- **`editais.html` saiu do escondido**: entrou no menu, no índice da busca e no
  sitemap, e perdeu o `noindex`. Enquanto `assets/dados-editais.js` estiver
  vazio, a página mostra o aviso de que não há edital aberto.
- sw em nae-v21.

O inspetor de consistência pegou o sitemap desatualizado ao habilitar editais,
que é exatamente o tipo de esquecimento que ele existe para evitar.

## 12/08/2026 · décima segunda rodada (ementas, bibliografias e egresso)

Com os dois PPCs em mãos, o maior volume de conteúdo parado entrou no site.

- **`assets/dados-ementas.js`**, arquivo novo de 299 KB: a ementa e as
  bibliografias de **190 disciplinas**, com **1.513 referências**. Direito
  fechou 95 de 95; Engenharia, 95 de 99, e as 4 que faltam não são disciplinas
  de verdade (atividades, extensão, estágio e o marcador de optativa).
- Na matriz, cada disciplina ganhou o link **ementa e bibliografia**, que abre
  no lugar. O conteúdo só é montado no primeiro clique.
- Seção nova de **optativas** na matriz, com ementa de cada uma. É onde a
  informação mais pesa: o estudante escolhe sabendo o que cai e quais livros
  vai precisar.
- **Perfil do egresso e áreas de atuação** na página do curso, das seções 2.2
  do PPC de Direito e 3.4 e 3.6 do de Engenharia. Os nove campos da Engenharia
  vêm do Anexo II da Resolução 1.048/2013 do CONFEA/CREA.
- As listas de optativas estavam incompletas e foram corrigidas: faltavam 3 no
  Direito e as 31 da Engenharia, que estavam com a lista vazia.
- sw em nae-v20.

Como a extração foi feita, para quem precisar repetir: `pdftotext -layout`,
um parser por formato (o Direito centraliza o nome, a Engenharia usa
"DISCIPLINA:"), casamento por semelhança de nome com trava no número romano,
e conferência humana de tudo abaixo de 0.9 de semelhança. Os scripts ficaram
no scratchpad da sessão. Três defeitos encontrados e corrigidos no caminho:
o `\r` do pdftotext quebrava a âncora de fim de linha, o corte das referências
comia a primeira sílaba do sobrenome (BOBBIO virava BIO), e a desambiguação
por tamanho de ementa fazia "Tópicos em Teoria do Direito" roubar o lugar de
"Teoria do Direito".

## 07/08/2026 · décima primeira rodada (ritmo das atividades complementares)

Pedido do coordenador: o estudante precisa entender com clareza **quantas
horas obter por semestre** e **o que pode ser contabilizado**.

- Painel de atividades ganhou a **meta por semestre**, calculada do total
  dividido pelos períodos do curso: 21 horas por semestre no Direito
  (210 em 10 períodos) e 3 horas na Engenharia Civil (30 em 10).
- Seletor **"estou no Nº período"**, guardado no aparelho. Com ele o site
  compara o que a pessoa lançou com o esperado para aquele ponto do curso e
  diz se o ritmo está em dia ou atrasado, sempre calculando quantas horas
  por semestre faltam para fechar a conta a tempo.
- Tabela de modalidades **agrupada por natureza** (Ensino, Pesquisa,
  Extensão, Eventos), com selos no topo mostrando quantas modalidades cada
  frente tem, e título "O que pode ser contabilizado".
- sw em nae-v18.

RESOLVIDO no mesmo dia: com os dois PPCs em mãos, as tabelas foram
transcritas na íntegra, direto do PDF, conferidas página a página.

- **Direito**: de 5 para **25 modalidades**, do Quadro 02 do PPC, nos três
  grupos que o próprio quadro usa: Ensino (11), Extensão (6) e Pesquisa (8).
- **Engenharia Civil**: de 5 para **20 linhas**, do Quadro A1.1 do Apêndice 1.
  São os 17 itens numerados do PPC, com os itens 01 e 02 abertos em linhas
  separadas porque cada um reunia atividades de valor diferente. O PPC não
  agrupa as modalidades, então a divisão em grupos é editorial e está avisada
  na nota da tabela.
- Duas regras próprias da Engenharia que faltavam no site: o lançamento é
  feito pelo estudante direto no sistema acadêmico, e **atividade de extensão
  não conta** como complementar, porque tem componente curricular próprio.

## 07/08/2026 · décima rodada (gerador de requerimentos e agendamento)

- **`requerimentos.html`**, ferramenta nova: o estudante escolhe o pedido,
  preenche os campos e o site monta o requerimento inteiro, já citando a
  resolução correta, pronto para conferir, imprimir e entregar. Três modelos,
  todos com base escrita em `assets/dados-requerimentos.js`:
  - aproveitamento de estudos e adaptação curricular, pela Resolução
    COEPE/UEMG nº 250/2020
  - trancamento de matrícula, com o prazo do calendário acadêmico
  Cada modelo traz também quando pedir, onde entregar, o que levar junto e um
  aviso do que confirmar na secretaria. A impressão sai só com a folha
- **Agendamento na página de contato**: um formulário monta a mensagem de
  agendamento e abre o programa de e-mail do estudante com tudo preenchido.
  Nada é enviado pelo site, e há botão de copiar para quem não tem e-mail
  configurado no aparelho
- **Privacidade:** a página passou a listar o que o gerador guarda. O CPF
  nunca é salvo, e o resto só fica se a pessoa marcar a caixinha
- A partir de agora, commit e push são automáticos ao fim de cada rodada,
  autorizado pelo coordenador, porque o workflow já barra deploy com erro
- sw em nae-v17

## 07/08/2026 · nona rodada (menu reorganizado e ferramentas separadas)

Reorganização definida pelo coordenador. O topo passou a ter oito títulos,
cinco deles abrindo painel:

    Início · Sistemas · Aulas e prazos · Ferramentas · Meu curso ·
    Apoio psicológico · Avisos · Sobre o NAE

- **As ferramentas viraram três páginas**, uma por ferramenta, e o grupo do
  menu lista as três: `calculadora.html` (média e faltas), `cronometro.html`
  (novo, blocos de 25 minutos) e `planner.html`, que já existia mas não
  aparecia no menu. Cada página aponta as outras duas no fim do conteúdo
- **"Fale com o NAE" passou para dentro de "Sobre o NAE"**, que virou grupo
  com duas entradas: o que é o NAE e o contato
- A lógica do cronômetro já morava no `site.js` compartilhado, então a
  separação foi só de HTML
- sw em nae-v16

## 07/08/2026 · oitava rodada (cada sistema na sua página)

- **AVA Moodle e Lyceum separados**, por decisão do coordenador. Eram uma
  página só, com tudo dentro de seções que abriam ao clicar:
  - `moodle.html`: o passo a passo do AVA em 8 etapas, com as telas, mais o
    suporte da Coordenadoria de EaD e o que fazer quando o problema é cadastro
  - `lyceum.html`: o primeiro acesso ao Lyceum e, junto dele, o aplicativo
    **UEMG+ Estudante**, que é a versão do Lyceum para o celular
  - `sistemas.html` continua existindo como porta de entrada, explicando a
    diferença entre os dois e levando a cada guia. Ela também segura os links
    antigos que já foram compartilhados por aí
  - As perguntas do FAQ foram distribuídas conforme o assunto, e os dados
    estruturados de cada página são regerados a partir do próprio HTML
- **Menu:** o grupo Sistemas agora abre com quatro itens (visão geral, e-mail,
  AVA Moodle, Lyceum e app). O destaque de botão do "Fale com o NAE" saiu, a
  pedido do coordenador
- **Correção:** os três botões de submenu apareciam com fonte diferente dos
  links vizinhos. O culpado era um `font: inherit` no CSS, que é atalho e
  zerava também o tamanho e o peso definidos em `.nav-link`. Passou a herdar
  só a família da fonte
- sw em nae-v15

## 07/08/2026 · sétima rodada (o curso entra no site)

O site passou a responder também as perguntas que vinham do Projeto
Pedagógico e ninguém lia: o PPC de Direito tem 192 páginas e o de Engenharia
Civil, 175.

- **Seção "Meu curso"**, com cinco páginas novas alimentadas por
  `assets/dados-curso.js`, transcrito dos dois PPCs:
  - `matriz.html`: a grade dos dois cursos, período a período, com carga
    horária e pré-requisitos. O estudante marca o que já cursou, vê a
    porcentagem concluída e descobre quais disciplinas ainda estão travadas
  - `atividades.html`: contador de atividades complementares. São 210 horas em
    Direito, sob pena de não colar grau, e 30 horas em Engenharia Civil, com a
    tabela de modalidades, tetos e comprovantes
  - `estagio.html` e `tcc.html`: regras dos dois cursos, incluindo o Núcleo de
    Práticas Jurídicas, as 165 horas da Engenharia e as linhas de pesquisa
  - `secretaria.html`: os direitos que quase ninguém conhece, com a resolução
    de cada um
- **Exame especial na calculadora.** O site dizia só "60 pontos e 75% de
  frequência". Quem simulava 45 pontos lia "não dá mais para chegar aos 60" e
  concluía que estava reprovado. Agora a calculadora mostra a nota máxima
  possível e, quando ela cai entre 40 e 59, explica o direito ao exame
  especial (Resolução COEPE/UEMG nº 249/2020). A calculadora de faltas passou
  a citar a compensação de faltas e a justificativa em 48 horas
- **Base normativa do NAE na página Sobre**: Resolução nº 201/2010, PNAES e
  PEAES. Procurar o Núcleo é exercer um direito, não pedir favor
- **Menu com submenus.** Eram 11 itens soltos, 1 777 px de faixa, e as cinco
  páginas novas levariam isso a mais de 2 600 px. Agora são 8 títulos, três
  deles abrindo painel: Meu curso, Aulas e prazos e Sistemas. Sem JavaScript
  os links do grupo continuam aparecendo soltos, então nada fica inacessível.
  Teclado completo: setas, Home, End, Escape devolvendo o foco ao botão
- sw em nae-v14, agora com as seis páginas novas no cache offline

## 06/08/2026 · sexta rodada (bastidores)

Rodada quase toda de bastidores: o estudante vê pouca diferença na tela, e é
justamente esse o ponto. O que mudou foi a chance de o site publicar coisa
errada sem ninguém perceber.

- **Aviso urgente agora chega no mesmo dia.** O `sw.js` guardava os
  `assets/dados-*.js` com a regra do cache primeiro, então quem já tinha
  visitado o site continuava lendo o aviso velho até alguém trocar a `VERSAO`.
  Esses arquivos passaram a ir pela rede primeiro, com prazo de 2,5 segundos e
  queda para o guardado. A promessa do README, de que publicar aviso não exige
  ferramenta nenhuma, finalmente é verdade
- **Bug dos avisos:** o site guardava só o último aviso fechado pelo aluno.
  Fechar o segundo fazia o primeiro reaparecer. Agora guarda a lista toda, e
  limpa sozinho o que saiu do ar
- **Três inspetores novos**, todos rodando no workflow e barrando a publicação:
  - `checar-minificados.js`: pega quem editou um `.js` ou `.css` e esqueceu de
    rodar o minificar. Era a falha mais silenciosa possível, o site publicava o
    código antigo sem erro nenhum na tela
  - `checar-versao.js`: cobra a troca da `VERSAO` do `sw.js` quando muda algo
    que o estudante baixa
  - `checar-consistencia.js`: menu igual em todas as páginas, data do rodapé
    igual, sintaxe dos scripts escritos dentro das páginas, página nova no
    índice da busca, no cache e no sitemap
- **Busca no teclado e no leitor de tela:** o foco não escapa mais do diálogo,
  as setas percorrem os resultados e a quantidade de achados é anunciada
- **Encontrado pelo Google:** `sitemap.xml`, `robots.txt` e dados estruturados
  (o cartão do NAE com endereço e horário; o FAQ do e-mail e dos sistemas).
  As perguntas do FAQ são lidas do próprio HTML, então nunca divergem do que
  está escrito na tela
- **Peso:** imagem de compartilhamento de 387 KB para 57 KB (JPEG),
  `logo-nae-original.png` e `simbolo-nae.png` saíram do repositório por não
  serem usados por página nenhuma, e os scripts das páginas viraram `defer`
- **Menu:** "Fale com o NAE" ganhou peso visual de botão (coral, texto branco,
  contraste 4,6:1), continuando por último na faixa, por decisão do
  coordenador. A faixa também ganhou degradê nas bordas, que acende só do lado
  em que existe menu escondido: antes o estudante via dois itens e meio no
  celular e nada indicava que havia mais
- **Continuidade:** `historico/CONTINUIDADE.md` com o que precisa acontecer
  para o site sobreviver a uma troca de coordenação, e o vigia mensal do
  frescor (`frescor.yml`), que abre tarefa quando a grade, o calendário ou os
  carimbos de data começam a envelhecer
- sw em nae-v14

## 06/08/2026 · quinta rodada

- Correção do coordenador: cada faixa da grade vale DUAS aulas de 50 minutos,
  não uma. O planner passou a calcular a partir da duração de cada faixa
  (100 minutos dividido por 50)
- Segunda correção: o total de aulas no semestre passa a vir da tabela oficial
   em dados-horarios.js (4 por semana são 72, 3 são 54,
  2 são 32, 1 são 18), e não de uma conta pelo calendário. Isso também curou
  um defeito: a conta antiga encolhia conforme o semestre avançava

- Planner do semestre: caderno de 4 folhas A4 com grade, mapa das semanas,
  controle de notas e controle de faltas, com o limite calculado por disciplina
- Cronômetro de estudos em blocos de 25 minutos, na página de ferramentas
- Mural de avisos (`avisos.html`) com todo o histórico de comunicados;
  avisos agora podem ser agendados com o campo `de`
- Botão que copia mensagem pronta para o grupo, em 6 páginas
- Página de privacidade, explicando que não há cookies nem coleta de dados
- Inspetor de acessibilidade (`ferramentas/checar-acessibilidade.js`) no
  workflow. Ele encontrou e obrigou a corrigir: contraste do turquesa, verde,
  coral, rosa e da faixa âmbar, títulos pulando de h1 para h3, e a contagem
  regressiva sem nome acessível
- Vigia semanal dos links externos, abrindo tarefa quando algum morre
- Painel "hoje" passa a anunciar a próxima aula quando o dia acaba
- Impressão própria do calendário, em duas colunas
- Atalho da turma escolhida no menu, alto contraste, imagens em carregamento
  tardio, e `semestres.html` criada oculta
- sw em nae-v13

## 06/08/2026 · quarta rodada

- Contagem regressiva no hero da página inicial (próxima data do calendário)
- Botão "copiar link" da turma: horarios.html?turma=... abre já destacada
- Inspetor automático `ferramentas/checar-site.js` rodando no workflow:
  travessões, links quebrados, cache offline e divs; falhou, não publica
- Offline reforçado: o site inteiro entra no cache na primeira visita
  (inclusive o cartaz) e a falta de conexão cai em `offline.html` própria
- Páginas prontas e OCULTAS aguardando ativação: `editais.html`
  (sem edital ainda) e `calouro.html` (sem calouros em 2026.2)
- sw em nae-v12

## 06/08/2026 · terceira rodada

- Calendário passa a mostrar o mês atual primeiro; anteriores atrás de botão
- Clique no professor filtra e destaca todas as aulas dele na grade
- Impressão dos horários enxuta: cabeçalho, título e grade
- Caixa "escolha a sua turma" só na página inicial
- Dica de faltas reescrita: 4 aulas por noite, cerca de 72 no semestre
- Publicação trocada para workflow próprio do Actions (`publicar.yml`)
  durante a queda geral do GitHub (Actions e Pages em major outage)
- Criados `CLAUDE.md` e `historico/` para continuidade em qualquer computador

## 06/08/2026 · segunda rodada

- `calculadora.html`: a calculadora ganhou aba própria, saiu de sistemas
- `sistemas.html`: Lyceum e Moodle viraram seções que abrem ao clicar;
  app UEMG+ movido para cima das Perguntas Frequentes
- `apoio.html` refeita: largura cheia, hero acolhedor, sinais de alerta,
  cuidados do dia a dia, textos ajustados pelo coordenador
- Correção: o estilo da lista de novidades não estava na folha; data agora
  em pílula separada do texto
- sw em nae-v11

## 06/08/2026 · primeira rodada (20 melhorias)

- Busca interna no site inteiro (lupa no topo, pílula no hero, tecla /)
- Página nova `apoio.html` (CAPS I, PsyMeet, Conexa, CVV 188)
- Calculadora de média e faltas (na época dentro de sistemas)
- Grade exportável em imagem PNG com a marca do NAE
- GoatCounter em todas as páginas (naeguanhaes.goatcounter.com)
- Trilha de navegação, A-/A+, toast de copiado, áreas de toque 48px
- Ícones em alta definição a partir de LOGOALTA e SIMBOLOALTO;
  logo do topo em WebP; og-nae.png de 1,2 MB para 387 KB
- CSS e JS compactados em `assets/min/` (`ferramentas/minificar.js`)
- Rodapé com data de atualização; sw em nae-v9/v10

## 06/08/2026 · madrugada

- `sistemas.html`: AVA Moodle e Lyceum com passo a passo oficial,
  primeiro acesso ao Lyceum ilustrado, app UEMG+ Estudante
- Etapas do Moodle expansíveis uma a uma, botão "abrir todas"
- Travessões eliminados do site inteiro (regra permanente)
- Cartão de novidades alimentado por `dados-novidades.js`

## 05/08/2026

- Repaginação visual completa na paleta da marca (modo claro permanente)
- Calendário acadêmico 2026 (Resolução COEPE 530/2025), aviso no topo,
  painel "hoje/agora", minha turma, exportação .ics, PWA instalável
- Migração para a organização `naeguanhaes`; endereço antigo virou
  redirecionamento; tag `v1-antes-da-repaginacao` criada
- Cartaz A4 com QR code, salvo também em DOCX e PDF (pasta do coordenador)

## 04/08/2026

- Nascimento do site: guia ilustrado do e-mail institucional, horários
  2026.2, mapa desenhado do campus, contato, sobre, primeiro deploy no
  GitHub Pages
