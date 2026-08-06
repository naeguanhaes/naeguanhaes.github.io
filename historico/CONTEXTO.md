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
- `sistemas.html`: as seções do Lyceum e do Moodle são `details.secao`
  (abrem ao clicar). Um script no fim da página abre a seção certa quando o
  endereço traz `#lyceum` ou `#passo-a-passo`. O app UEMG+ fica acima do FAQ.
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
