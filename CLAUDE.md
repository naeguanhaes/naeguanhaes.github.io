# Site do NAE Guanhães · guia para o Claude

Este repositório é o site do **NAE · Núcleo de Apoio ao Estudante** da
**UEMG Unidade Guanhães**, mantido pelo coordenador **Jonatan Barbosa Silva**.
Leia este arquivo antes de qualquer alteração. O contexto completo e o diário
de mudanças estão na pasta [`historico/`](historico/CONTEXTO.md).

## Regras permanentes, definidas pelo coordenador

1. **Nunca use travessões** (os caracteres de traço longo) em nenhum arquivo do
   site. Reescreva com vírgula, dois-pontos, ponto final ou o ponto médio `·`.
   Antes de publicar, confira que a contagem é zero em todo o repositório.
2. **O site é sempre em modo claro.** Nada de tema escuro, nem media query de
   esquema de cor escuro. `color-scheme: light` em tudo.
3. O nome oficial é **"Núcleo de Apoio ao Estudante"**, sempre e para tudo,
   como está na logo.
4. Todo rodapé leva **"Desenvolvido por Jonatan Barbosa Silva"**.
5. As cores derivam da marca: azul `#40688B` e vermelho `#D91F35`
   (tokens em `assets/estilo.css`).
6. Linguagem clara e acolhedora, voltada ao estudante. Tutoriais com passos
   numerados e títulos em negrito.

## Antes de publicar qualquer mudança (checklist)

1. Se mexeu em `assets/dados-*.js`: rode `node ferramentas/checar-dados.js`
   e só siga com "Nenhum erro encontrado".
2. Se mexeu em qualquer `.js` ou `.css` de `assets/` (menos `dados-*.js`):
   rode `node ferramentas/minificar.js`. As páginas carregam `assets/min/`.
3. **Troque a `VERSAO` no topo de `sw.js`** (nae-v14 vira nae-v15, e assim
   por diante). Sem isso, quem já visitou continua na versão antiga.
   **Exceção:** mexer só em `assets/dados-*.js` não exige troca. Desde a
   nae-v14 esses arquivos vão pela rede primeiro, então um aviso novo chega
   ao estudante no mesmo dia. O `checar-versao.js` sabe dessa diferença e
   não cobra à toa.
4. Atualize a data do rodapé "Site conferido e atualizado em ..." nas páginas
   (uma troca de texto em todas de uma vez). O `checar-consistencia.js`
   reclama se uma página ficar para trás.
5. Mudança visível para o aluno? Acrescente um item no TOPO de
   `assets/dados-novidades.js`.
6. Página ou seção nova? Inclua no índice `assets/dados-busca.js`, no menu de
   todas as páginas, na lista `ESSENCIAIS` do `sw.js` e rode
   `node ferramentas/gerar-sitemap.js`.
7. Mexeu em pergunta do FAQ (`email.html`, `sistemas.html`, `moodle.html`,
   `lyceum.html`) ou no endereço,
   telefone e horário de atendimento? Rode
   `node ferramentas/gerar-dados-estruturados.js`, que reescreve o que o
   Google lê. As perguntas saem do próprio HTML, então não se digita nada
   duas vezes.
8. Rode as sete inspeções. O workflow roda todas de novo e
   **bloqueia a publicação** se qualquer uma falhar:
   ```bash
   node ferramentas/checar-dados.js
   node ferramentas/checar-site.js
   node ferramentas/checar-acessibilidade.js
   node ferramentas/checar-consistencia.js
   node ferramentas/checar-minificados.js
   node ferramentas/checar-versao.js
   node ferramentas/checar-ementas.js
   ```
9. Commit e push na branch `main`, **sem perguntar**: o coordenador autorizou
   a publicação automática em 07/08/2026, porque o workflow já barra o deploy
   quando um inspetor falha. Depois do push, confira a conclusão do workflow e
   o site publicado, e relate. Isso não vale para ação destrutiva (apagar
   arquivo, reescrever histórico, mexer em conta ou domínio): essas continuam
   pedindo confirmação. A publicação é feita pelo workflow
   `.github/workflows/publicar.yml` (GitHub Actions).

## Páginas prontas porém OCULTAS (decisão do coordenador)

Existe um lembrete agendado para **11 de janeiro de 2027** trazendo estas três
de volta à mesa. Para ativar qualquer uma: tirar o `<meta name="robots"
content="noindex">` e o comentário de página oculta, incluir o link no menu de
todas as páginas, acrescentar ao índice da busca (`assets/dados-busca.js`),
conferir que já está no `sw.js` e anunciar em `assets/dados-novidades.js`.

- **`calouro.html`** (guia "Comece por aqui"): aguardando a chegada de
  calouros, já que não entra turma nova em 2026.2.
- **`semestres.html`** (com `historico/semestres/indice.js`): arquivo das
  grades de semestres encerrados. Aguardando existir mais de um semestre.
  As instruções de como arquivar estão dentro do próprio arquivo de índice.

As três já funcionam por endereço direto, para o coordenador revisar.

## Rotinas automáticas

- **Publicação**: `.github/workflows/publicar.yml`, a cada push na `main`,
  com as sete inspeções barrando o deploy quando encontram problema.
- **Vigia dos links externos**: `.github/workflows/links-externos.yml`,
  toda segunda-feira às 09h. Se um endereço de fora morrer, abre uma tarefa
  no repositório avisando. Sites que bloqueiam robô ficam na lista
  `TOLERADOS` dentro de `ferramentas/checar-links-externos.js`.
- **Vigia do frescor dos dados**: `.github/workflows/frescor.yml`, dia 1 de
  cada mês às 09h. Abre tarefa quando o semestre da grade não bate mais com o
  mês corrente, quando o calendário vira o ano, quando um carimbo
  "conferido em" passa de 120 dias ou quando avisos vencidos há muito tempo
  continuam na lista. Não bloqueia nada: só lembra.

## Endereços e contas

| O quê | Onde |
| --- | --- |
| Site no ar | https://naeguanhaes.github.io/ |
| Repositório | github.com/naeguanhaes/naeguanhaes.github.io (organização `naeguanhaes`) |
| Conta pessoal dona da organização | `jonbarbosas` |
| Endereço antigo (redireciona, não apagar) | jonbarbosas.github.io/nae-guanhaes |
| Contador de acessos | naeguanhaes.goatcounter.com (sem cookies, script em todas as páginas) |
| E-mail do NAE | nae.guanhaes@uemg.br |

## Fatos que aparecem no site (não inventar, conferir aqui)

- **Aulas no semestre**: cada faixa da grade dura 100 minutos e vale DUAS
  aulas de 50. Os totais oficiais por ritmo semanal ficam na tabela
  `aulasNoSemestre`, dentro de `assets/dados-horarios.js`: 4 aulas por semana
  são 72 no semestre, 3 são 54, 2 são 32 e 1 são 18. O limite de faltas é 25%
  desse total. Números informados pela coordenação, não recalcular pelo
  calendário.
- Sala do NAE: **Prédio do Administrativo**. Atendimento **terças e quintas,
  das 18h às 19h**; quartas somente com agendamento prévio por e-mail.
- UEMG Unidade Guanhães: Rodovia BR-259, nº 2250, Bairro Nova União,
  Guanhães/MG, CEP 39740-000. Telefone (33) 3450-0939.
- E-mail do discente: `prenome.matrícula@discente.uemg.br`.
- Lyceum: usuário é o Registro Acadêmico (`xx-00000`), primeira senha é a data
  de nascimento só com números. A senha trocada vale também no AVA Moodle.
- Regra geral de aprovação UEMG: 60 dos 100 pontos e 75% de frequência.
- CAPS I Guanhães: Praça Néria Coelho Guimarães, 36, Centro. (33) 3421-3345,
  segunda a sexta das 07h às 17h, Instagram @saudementaldeguanhaes.
- Semestre atual dos horários: 2026.2, em `assets/dados-horarios.js`.
- **Aprovação, com a regra completa** (Resolução COEPE/UEMG nº 249/2020):
  60 dos 100 pontos e 75% de frequência. Quem fecha de **40 a 59 pontos** com a
  frequência mínima tem direito ao **exame especial**, prova única de todo o
  conteúdo; tirando 60 nela, o professor lança 60. Revisão de prova: cinco dias
  úteis da divulgação. Atestado de menos de sete dias: justificativa em 48h.
- **Cursos** (fonte: PPCs, em `assets/dados-curso.js`): Direito tem 4.230 horas,
  282 créditos, 10 a 14 semestres e **210 horas** de atividades complementares.
  Engenharia Civil tem 3.750 horas, 250 créditos, 10 a 15 semestres, **30 horas**
  de atividades complementares e estágio de 165 horas a partir do 6º período.
  Os dois têm 40 vagas anuais e funcionam à noite.
- **O campus não tem psicólogos.** O PPC de Direito cita "acompanhamento
  psicológico" como módulo do programa de nivelamento, mas isso é letra morta
  herdada do PPC da Unidade de Diamantina (confirmado pelo coordenador em
  07/08/2026). Não prometa esse atendimento em página nenhuma. O detalhe está
  em `historico/CONTEXTO.md`, na seção de conteúdo sensível.
- **Sistemas acadêmicos em uso: AVA Moodle, Lyceum e o aplicativo UEMG+
  Estudante**, como está em `sistemas.html`. O PPC de Direito cita WebGiz, Giz
  Acadêmico, Athenas e Sophia: trecho desatualizado, não copiar (confirmado
  pelo coordenador em 07/08/2026).
- Regra para usar os PPCs: eles valem como fonte para **regra curricular**
  (carga horária, pré-requisito, prazo, banca). Quando descreverem **serviço,
  sistema ou estrutura da unidade**, confirme com a coordenação antes de
  publicar. A lista dos desvios já conhecidos está em `historico/CONTEXTO.md`.
- O NAE foi criado na UEMG pela **Resolução nº 201/2010**, com base no PNAES e
  no PEAES. O PPC de Engenharia o chama de "Núcleo de Atendimento ao
  Estudante"; o nome que o site usa continua sendo o da logo, "Núcleo de Apoio
  ao Estudante", por decisão do coordenador.

## Estrutura em uma linha cada

Páginas no ar: `index`, `email`, `sistemas` (porta de entrada), `moodle`,
`lyceum` (com o aplicativo UEMG+), `horarios`, `calendario`,
`calculadora`, `cronometro`, `planner`, `requerimentos` (as ferramentas, cada
uma na sua página, reunidas no grupo Ferramentas do menu),
`mapa`, `apoio`, `avisos`, `sobre`, `contato`, `privacidade`,
`cartaz` (imprimível), `404`, `offline`.
Seção "Meu curso": `curso` (visão geral), `matriz`, `atividades`, `estagio`,
`tcc`, `secretaria`. Todas alimentadas por `assets/dados-curso.js`.
Páginas ocultas: `editais`, `calouro`, `semestres`.

O menu tem 8 títulos, nesta ordem definida pelo coordenador: Início, Sistemas,
Aulas e prazos, Ferramentas, Meu curso, Apoio psicológico, Avisos e Sobre o
NAE. Cinco abrem submenu; Início, Apoio e Avisos são link direto. O contato
mora dentro de Sobre o NAE. No HTML os links do grupo ficam soltos dentro de um
`<div class="nav-grupo" data-grupo="...">`: sem JavaScript eles aparecem como
links normais, e o `site.js` é que os recolhe no painel. Ao mexer no menu,
troque em todas as páginas de uma vez, porque o `checar-consistencia.js` exige
que o bloco seja idêntico em todas.

Dados editáveis: `assets/dados-horarios.js`, `dados-calendario.js`,
`dados-avisos.js`, `dados-novidades.js`, `dados-busca.js`, `dados-editais.js`,
`dados-curso.js` (transcrição dos PPCs, com a fonte de cada número) e
`historico/semestres/indice.js`.

Ferramentas, todas em `ferramentas/`:

| Arquivo | Para quê |
| --- | --- |
| `checar-dados.js` | choque de sala e de professor, horário e data inválidos |
| `checar-site.js` | travessões, links quebrados, cache offline, divs |
| `checar-acessibilidade.js` | WCAG 2.1 AA: alt, rótulo, contraste, títulos |
| `checar-consistencia.js` | menu, rodapé, sintaxe dos scripts, busca, sitemap |
| `checar-minificados.js` | `assets/min/` em dia com as origens |
| `checar-versao.js` | cobra a troca da `VERSAO` do `sw.js` |
| `checar-ementas.js` | prova que cada ementa e cada referência existem no PPC |
| `checar-frescor.js` | dados envelhecendo (roda todo mês, não bloqueia) |
| `checar-links-externos.js` | endereços de fora que morreram |
| `minificar.js` | recompacta para `assets/min/` e grava `origem.json` |
| `gerar-ementas.js` | reescreve `dados-ementas.js` a partir de `fontes/` |
| `gerar-sitemap.js` | `sitemap.xml` e `robots.txt` |
| `gerar-dados-estruturados.js` | JSON-LD do NAE e do FAQ, lido do próprio HTML |

### Ementas: como mexer sem estragar

`assets/dados-ementas.js` **não se edita à mão**. Ele sai de
`node ferramentas/gerar-ementas.js`, que lê o texto puro dos dois PPCs em
`fontes/` (extraído com `pdftotext -layout -enc UTF-8`). Depois de gerar,
rode sempre `node ferramentas/checar-ementas.js`: ele confere letra por
letra se cada ementa e cada referência existem mesmo no PPC, e ainda barra
ementa longa demais ou com cabeçalho de outra seção dentro, que é como um
erro de extração aparece. Quando um PPC novo for aprovado, troque o arquivo
em `fontes/` (as instruções estão em `fontes/LEIA-ME.md`) e rode os dois.

Gerados por ferramenta, não editar à mão: `sitemap.xml`, `robots.txt`,
`assets/min/`, `assets/dados-ementas.js`, e os blocos entre "dados
estruturados: inicio" e "fim" no `<head>` de `index`, `contato`, `email`,
`sistemas`, `moodle` e `lyceum`.

O restante está detalhado no `README.md`, em `historico/CONTEXTO.md` e, para
o dia em que a coordenação mudar de mãos, em `historico/CONTINUIDADE.md`.
