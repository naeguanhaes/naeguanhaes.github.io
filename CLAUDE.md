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
3. **Troque a `VERSAO` no topo de `sw.js`** (nae-v11 vira nae-v12, e assim
   por diante). Sem isso, quem já visitou continua na versão antiga.
4. Atualize a data do rodapé "Site conferido e atualizado em ..." nas páginas
   (uma troca de texto em todas de uma vez).
5. Mudança visível para o aluno? Acrescente um item no TOPO de
   `assets/dados-novidades.js`.
6. Página ou seção nova? Inclua no índice `assets/dados-busca.js`, no menu de
   todas as páginas e na lista `ESSENCIAIS` do `sw.js`.
7. Rode as duas inspeções. O workflow roda as duas de novo e
   **bloqueia a publicação** se qualquer uma falhar:
   ```bash
   node ferramentas/checar-site.js
   node ferramentas/checar-acessibilidade.js
   ```
8. Commit e push na branch `main`. A publicação é feita pelo workflow
   `.github/workflows/publicar.yml` (GitHub Actions).

## Páginas prontas porém OCULTAS (decisão do coordenador)

Existe um lembrete agendado para **11 de janeiro de 2027** trazendo estas três
de volta à mesa. Para ativar qualquer uma: tirar o `<meta name="robots"
content="noindex">` e o comentário de página oculta, incluir o link no menu de
todas as páginas, acrescentar ao índice da busca (`assets/dados-busca.js`),
conferir que já está no `sw.js` e anunciar em `assets/dados-novidades.js`.

- **`editais.html`** (com `assets/dados-editais.js`): aguardando o primeiro
  edital. Enquanto a lista está vazia, a página mostra um aviso simpático.
- **`calouro.html`** (guia "Comece por aqui"): aguardando a chegada de
  calouros, já que não entra turma nova em 2026.2.
- **`semestres.html`** (com `historico/semestres/indice.js`): arquivo das
  grades de semestres encerrados. Aguardando existir mais de um semestre.
  As instruções de como arquivar estão dentro do próprio arquivo de índice.

As três já funcionam por endereço direto, para o coordenador revisar.

## Rotinas automáticas

- **Publicação**: `.github/workflows/publicar.yml`, a cada push na `main`,
  com as inspeções barrando o deploy quando encontram problema.
- **Vigia dos links externos**: `.github/workflows/links-externos.yml`,
  toda segunda-feira às 09h. Se um endereço de fora morrer, abre uma tarefa
  no repositório avisando. Sites que bloqueiam robô ficam na lista
  `TOLERADOS` dentro de `ferramentas/checar-links-externos.js`.

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
  , dentro de : 4 aulas por semana
  são 72 no semestre, 3 são 54, 2 são 32 e 1 são 18. O limite de faltas é 25%
  desse total. Números informados pela coordenação; não recalcular pelo
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

## Estrutura em uma linha cada

Páginas: `index`, `email`, `sistemas`, `horarios`, `calendario`, `calculadora`,
`mapa`, `apoio`, `sobre`, `contato`, `cartaz` (imprimível), `404`.
Dados editáveis: `assets/dados-horarios.js`, `dados-calendario.js`,
`dados-avisos.js`, `dados-novidades.js`, `dados-busca.js`.
Ferramentas: `ferramentas/checar-dados.js` e `ferramentas/minificar.js`.
O restante está detalhado no `README.md` e em `historico/CONTEXTO.md`.
