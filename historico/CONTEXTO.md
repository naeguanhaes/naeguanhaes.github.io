# Contexto completo do projeto

Este documento existe para que qualquer pessoa (ou o Claude, em qualquer
computador) consiga continuar o trabalho no site do NAE sem depender de
conversas antigas. As regras curtas e o checklist de publicação estão no
`CLAUDE.md` da raiz; aqui fica a profundidade.

## O que é o projeto

Site estático (HTML, CSS e JS puros, sem compilação) do Núcleo de Apoio ao
Estudante da UEMG Unidade Guanhães. Público-alvo: estudantes de Direito e
Engenharia Civil da unidade. Nasceu como um guia do e-mail institucional e
cresceu para um portal completo: sistemas acadêmicos, horários, calendário,
calculadora, mapa do campus, apoio psicológico e contato.

Coordenador e mantenedor: **Jonatan Barbosa Silva** (e-mail pessoal
www.jonatanbarbosa@gmail.com, institucional nae.guanhaes@uemg.br).

## Como o site é publicado

- Hospedagem: **GitHub Pages**, gratuita, na organização `naeguanhaes`.
- Publicação: workflow **`.github/workflows/publicar.yml`** roda a cada push
  na `main` e faz o deploy (o Pages está no modo `workflow`, não no modo
  branch). Se um dia o deploy travar, confira github.com/naeguanhaes/naeguanhaes.github.io/actions
  e o status do GitHub em githubstatus.com antes de mexer em qualquer coisa.
- O endereço antigo `jonbarbosas.github.io/nae-guanhaes` é um repositório de
  redirecionamento que preserva o caminho. **Não apagar**: há QR codes
  impressos apontando para lá.
- Cartazes físicos: os arquivos `Cartaz NAE Guanhães.docx` e `.pdf` ficam fora
  do repositório, na pasta do coordenador. A página `cartaz.html` gera a
  mesma arte no navegador, com QR code desenhado por código próprio.

## Arquitetura das decisões (o porquê das coisas)

- **Dados separados da lógica**: tudo que muda a cada semestre fica em
  `assets/dados-*.js` como objetos `window.DADOS_*`. Foi escolhido JS em vez
  de JSON para o site funcionar aberto por `file://`, sem servidor.
- **Minificação**: as páginas referenciam `assets/min/`. Os `dados-*.js`
  ficam de fora de propósito, para que atualizar horários não exija rodar
  ferramenta nenhuma.
- **Service worker** (`sw.js`): cache offline. A constante `VERSAO` precisa
  subir a cada publicação, senão o aluno fica preso na versão velha.
- **Busca interna**: índice manual em `assets/dados-busca.js` (um item por
  página ou seção), motor em `assets/busca.js`. Sem bibliotecas externas.
- **QR code do cartaz**: gerador próprio embutido em `cartaz.html`
  (byte mode, ECC H, com a marca do NAE ao centro). Validado com decodificador
  independente em várias resoluções.
- **Ícones**: gerados a partir de `LOGOALTA.png` e `SIMBOLOALTO.png`
  (arquivos do coordenador, fora do repositório). `logo-topo.webp` é a marca
  do cabeçalho; `logo-nae.png` continua no repositório porque o cartaz e a
  exportação da grade em PNG usam ela.
- **GoatCounter**: contador sem cookies escolhido por ser gratuito e
  compatível com LGPD sem banner de consentimento. A conta é do coordenador;
  painel em naeguanhaes.goatcounter.com.
- **GitHub Insights Traffic não serve** para medir visitas do site: só conta
  acessos ao repositório em github.com.

## Comportamentos que merecem cuidado ao editar

- `horarios.js`: o painel "hoje/agora" só existe na página inicial
  (por decisão do coordenador). Clique no nome do professor filtra as turmas
  e acende as células dele (classe `realce`). Grade exporta .ics e imagem PNG
  desenhada em canvas com a logo.
- `calendario.js`: o ano é montado com o mês atual primeiro; meses anteriores
  ficam atrás do botão "Mostrar os meses anteriores".
- **Os sistemas ficam em três páginas** desde 07/08/2026, por decisão do
  coordenador: `sistemas.html` é a porta de entrada que explica a diferença
  entre os dois e leva a cada guia; `moodle.html` tem o passo a passo do AVA
  em 8 etapas; `lyceum.html` tem o primeiro acesso ao Lyceum e o aplicativo
  UEMG+ Estudante. Os endereços antigos com âncora (`sistemas.html#lyceum`,
  `#passo-a-passo` e `#app`) foram reapontados dentro do site, e
  `sistemas.html` continua existindo justamente para não quebrar link antigo
  que alguém tenha compartilhado.
- Em `moodle.html` e `lyceum.html` o conteúdo está dentro de `details.secao`
  com o atributo `open`: em página dedicada o assunto aparece de cara, e o
  estudante ainda pode recolher. O script que abre a seção pela âncora do
  endereço ficou só em `moodle.html`, que é onde há etapas numeradas.
- Impressão de horários: a folha sai só com cabeçalho, título e grade
  (regras `@media print` com a classe `pg-horarios` no body).
- Tamanho de fonte A-/A+: atributo `data-fonte` no `<html>`, aplicado cedo
  por um script inline no `<head>` de cada página.
- `[hidden]` tem `display: none !important` na folha de estilo. Não remover:
  sem isso, elementos flex e grid ignoram o atributo.

## Conteúdo sensível

A página `apoio.html` trata de saúde mental. Tom acolhedor, sem promessas e
sem diagnóstico. O campus não tem psicólogos; os caminhos indicados são o
CAPS I de Guanhães (SUS, gratuito), plataformas pagas com preço social
(PsyMeet e Conexa, sem parceria com a UEMG ou com o NAE), o CVV 188 e o
próprio NAE para uma primeira conversa. Em risco imediato: SAMU 192.

### Não prometa acompanhamento psicológico pelo nivelamento

O PPC do curso de Direito (item 5.2.2, Programa de nivelamento) lista quatro
módulos, e um deles é "acompanhamento psicológico". **Isso é letra morta.**
O PPC de Direito foi elaborado pela Unidade de Diamantina e passou a ser
ofertado em Guanhães a partir de 2024 sem alteração da proposta pedagógica, e
esse módulo descreve uma realidade que não existe nesta unidade. Confirmado
pelo coordenador em 07/08/2026.

Consequências práticas, para quem for mexer nas páginas:

- `apoio.html` está **correto** ao dizer que o campus não tem psicólogos. Não
  acrescente atendimento psicológico da unidade com base na leitura do PPC.
- Em `assets/dados-curso.js`, o item "Nivelamento" cita de propósito apenas os
  módulos de português instrumental, textos filosóficos e oratória. A omissão
  do quarto módulo é deliberada, não é esquecimento.
- Se um dia a unidade passar a ter profissional de psicologia, aí sim os dois
  textos mudam, e a fonte passa a ser o ato que criou o serviço, não o PPC.

## Os PPCs têm trechos desatualizados. Confira antes de copiar

Os dois Projetos Pedagógicos são a fonte do que está em
`assets/dados-curso.js` e das páginas da seção "Meu curso". São documentos
oficiais e valem como fonte para carga horária, pré-requisitos, estágio, TCC e
atividades complementares. Mas o PPC de Direito foi elaborado pela Unidade de
Diamantina e passou a ser ofertado em Guanhães a partir de 2024 sem alteração
da proposta pedagógica: alguns trechos descrevem outra realidade e outro
momento. Os desvios já identificados, todos confirmados pelo coordenador em
07/08/2026:

| O que o PPC diz | O que vale de verdade |
| --- | --- |
| Sistemas acadêmicos são WebGiz, WebGiz professor, Giz Acadêmico, Athenas e Sophia (item 5.2.3 do PPC de Direito) | Os sistemas em uso são o **AVA Moodle**, o **Lyceum** e o aplicativo **UEMG+ Estudante**, exatamente como `sistemas.html` documenta. O trecho do PPC está desatualizado, não copie |
| O programa de nivelamento inclui acompanhamento psicológico | Letra morta. A unidade não tem profissional de psicologia. Detalhes na seção de conteúdo sensível, acima |

A regra geral: quando o PPC descrever um **serviço, sistema ou estrutura** da
unidade, confirme com a coordenação antes de publicar. Quando descrever
**regra curricular** (carga horária, pré-requisito, prazo, banca), ele é a
fonte, e a resolução citada nele é a fonte da fonte.

## Fontes oficiais dos dados

- Manual de Redefinição de Senha (Discente) · UEMG
- Manuais de acesso ao AVA Moodle · UEMG (2 documentos)
- Horário de Aulas · UEMG Guanhães 2026.2
- Mapa de Salas 2026.2 · UEMG Guanhães
- Calendário Acadêmico 2026: Resolução COEPE/UEMG nº 530, de 11/12/2025
- Regra 60 pontos e 75% de frequência: regra geral da UEMG (confirmar casos
  especiais no plano de ensino de cada disciplina)

## Backup

A versão anterior à repaginação está na tag git `v1-antes-da-repaginacao` e
na pasta `BACKUP site-nae-guanhaes 2026-08-05` do coordenador.
