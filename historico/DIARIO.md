# Diário de mudanças

Registro do que mudou e quando, do mais recente para o mais antigo.
Ao fazer uma alteração relevante, acrescente uma entrada no topo.

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
