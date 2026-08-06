# Diário de mudanças

Registro do que mudou e quando, do mais recente para o mais antigo.
Ao fazer uma alteração relevante, acrescente uma entrada no topo.

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
