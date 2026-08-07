# NAE Guanhães · site do Núcleo de Apoio ao Estudante

Site do **NAE · Núcleo de Apoio ao Estudante** da **UEMG, Unidade Guanhães**.
São páginas HTML, uma folha de estilo e alguns scripts: sem dependências e sem
etapa de compilação. Para publicar, basta enviar os arquivos.

**No ar em:** https://naeguanhaes.github.io/
**Coordenação:** Jonatan Barbosa Silva
**Contato do NAE:** nae.guanhaes@uemg.br, sala no **Prédio do Administrativo**,
atendimento às terças e quintas das 18h às 19h; quartas mediante agendamento por e-mail.

---

## Páginas

| Arquivo | Conteúdo |
| --- | --- |
| `index.html` | Início: busca, aula de hoje, carrossel de serviços e atalhos |
| `email.html` | Guia ilustrado do e-mail institucional (10 etapas) |
| `sistemas.html` | Porta de entrada: qual é a diferença entre os dois sistemas |
| `moodle.html` | AVA Moodle: primeiro acesso em 8 etapas, com as telas |
| `lyceum.html` | Lyceum: primeiro acesso e o aplicativo UEMG+ Estudante |
| `horarios.html` | Grade 2026.2, com "hoje/agora", minha turma e exportações |
| `calendario.html` | Calendário acadêmico 2026, com exportação .ics |
| `mapa.html` | Planta do campus e lista de ambientes |
| `apoio.html` | Apoio psicológico: CAPS, plataformas com preço social e CVV |
| `sobre.html` | O que é o NAE e o que ele faz |
| `contato.html` | Sala do NAE, atendimento e contatos |
| `cartaz.html` | Cartaz A4 + 4 cartões para imprimir, com QR code |
| `curso.html` | Meu curso: porta de entrada das cinco páginas abaixo |
| `matriz.html` | Matriz curricular dos dois cursos, com pré-requisitos e marcação do que já cursei |
| `atividades.html` | Contador de atividades complementares, com a tabela de modalidades |
| `estagio.html` | Regras de estágio de cada curso |
| `tcc.html` | Regras do Trabalho de Conclusão de Curso |
| `secretaria.html` | Exame especial, faltas, revisão de prova, dispensa e outros pedidos |
| `calculadora.html` | Calculadora de média e faltas, com a regra do exame especial |
| `cronometro.html` | Cronômetro de estudos em blocos de 25 minutos |
| `planner.html` | Planner do semestre em 4 folhas A4 para imprimir |
| `requerimentos.html` | Gerador de requerimentos para a secretaria, com a resolução citada |
| `404.html` | Página de endereço não encontrado |

---

## Atualizar o conteúdo

**Toda a informação que muda de semestre está em `assets/dados-*.js`.**
Esses arquivos são só dados, não há lógica dentro deles.

| Arquivo | O que guarda |
| --- | --- |
| `assets/dados-horarios.js` | turmas, salas, professores e a grade de aulas |
| `assets/dados-calendario.js` | datas do calendário acadêmico |
| `assets/dados-avisos.js` | faixa de aviso que aparece no topo do site |
| `assets/dados-novidades.js` | cartão "Novidades" da página inicial e da Sobre |
| `assets/dados-busca.js` | índice da busca interna (um item por página ou seção) |

Depois de editar qualquer um deles, **rode a checagem**:

```bash
node ferramentas/checar-dados.js
```

Ela acusa o que o olho não pega: duas turmas na mesma sala no mesmo horário,
um professor em dois lugares ao mesmo tempo, sigla de professor inexistente,
horário invertido, data fora do ano. Se acusar erro, corrija antes de publicar.

Lembre-se de atualizar o campo `atualizadoEm`, que vira o carimbo
"Conferido em …" que aparece para o estudante.

### Publicar um aviso

Acrescente um item em `assets/dados-avisos.js`. O aviso some sozinho depois da
data em `ate`. Tipos: `urgente` (vermelho), `atencao` (âmbar), `novidade` (turquesa).

### Trocar o semestre

1. Atualize `turmas` e `atualizadoEm` em `dados-horarios.js`.
2. Ajuste `semestre` e, se mudar, `fimSemestre` (usado na exportação para o calendário).
3. Rode a checagem e publique.

---

## Estrutura

```
assets/estilo.css            folha de estilo (sempre em tema claro)
assets/site.js               avisos, carrossel, toast, fonte A+/A-, instalação
assets/busca.js              busca interna (lupa do topo e pílula do hero)
assets/horarios.js           grade, painel "hoje", minha turma, .ics e imagem PNG
assets/calendario.js         calendário acadêmico e exportação .ics
assets/mapa.js               ocupação das salas agora e alternância planta/lista
assets/dados-*.js            DADOS: é aqui que se atualiza o conteúdo
assets/min/                  versões compactadas usadas pelas páginas
assets/logo-nae.png          marca oficial (usada no cartaz e na imagem da grade)
assets/logo-topo.webp        marca leve do cabeçalho das páginas
assets/simbolo-nae.webp      símbolo leve com transparência (hero)
assets/favicon-nae.png       ícone do site
assets/icone-192/512.png     ícones de instalação no celular
assets/og-nae.jpg            imagem de prévia ao compartilhar
manifest.webmanifest         dados de instalação (PWA)
sw.js                        cache offline
sitemap.xml, robots.txt      gerados, dizem ao Google o que existe no site
ferramentas/                 inspetores e geradores (lista completa no CLAUDE.md)
```

### CSS e JS compactados

As páginas carregam as versões de `assets/min/`. **Depois de editar qualquer
arquivo `.js` ou `.css` de `assets/` (menos os `dados-*.js`), rode:**

```bash
node ferramentas/minificar.js
```

Os `dados-*.js` são carregados sem compactação de propósito: atualizar horários
ou avisos não depende dessa etapa. Se `terser` e `clean-css-cli` não estiverem
instalados, a ferramenta chama os dois pelo `npx` sozinha. Para deixar rápido:
`npm i -g terser clean-css-cli`.

Esquecer de recompactar publicaria o código antigo sem erro nenhum na tela. Por
isso o `minificar.js` grava a impressão digital das origens em
`assets/min/origem.json`, e o `checar-minificados.js` confere antes de publicar.

### Funciona sem internet

O `sw.js` guarda o site no aparelho na primeira visita. **Ao publicar mudanças,
troque o número da `VERSAO` no topo do arquivo**. Sem isso, quem já visitou
continua vendo a versão antiga. O `checar-versao.js` cobra essa troca antes da
publicação, então é difícil esquecer.

Os `assets/dados-*.js` são a exceção: eles vão **pela rede primeiro**, com prazo
de 2,5 segundos e queda para a cópia guardada. É isso que faz um aviso urgente
aparecer no mesmo dia, sem depender da troca da `VERSAO`. Sem internet, o
estudante continua vendo a última versão que baixou.

### Encontrado pelo Google

`sitemap.xml` e `robots.txt` saem de `node ferramentas/gerar-sitemap.js`. Os
dados estruturados (o cartão do NAE com endereço e horário, e as perguntas do
FAQ) saem de `node ferramentas/gerar-dados-estruturados.js`, que lê as perguntas
do próprio HTML da página. Nenhum dos dois se edita à mão.

### Contador de acessos

Todas as páginas enviam uma contagem anônima ao GoatCounter, sem cookies e sem
dados pessoais. O painel fica em https://naeguanhaes.goatcounter.com e só o
dono da conta enxerga.

---

## Publicar no GitHub Pages

Já está configurado: envie para a branch `main` e o site atualiza em cerca de
um minuto. Configuração em *Settings → Pages*: branch `main`, pasta `/ (root)`.

### Endereço próprio da UEMG (opcional)

O endereço atual, `naeguanhaes.github.io`, já é institucional: pertence à
organização do NAE, não a uma conta pessoal, e é gratuito. Se um dia a
Universidade quiser um endereço no domínio dela:

1. Peça à área de TI da UEMG um subdomínio, por exemplo `nae.guanhaes.uemg.br`.
2. Peça que criem um registro **CNAME** apontando esse nome para `naeguanhaes.github.io`.
3. No repositório, crie um arquivo chamado `CNAME` (sem extensão) com o endereço
   dentro, ou informe-o em *Settings → Pages → Custom domain*.
4. Marque *Enforce HTTPS* depois que o certificado for emitido.

O endereço anterior (`jonbarbosas.github.io/nae-guanhaes`) continua no ar como
redirecionamento, para os QR codes já impressos não quebrarem.

---

## Restaurar a versão anterior

A versão anterior à repaginação está marcada no Git:

```bash
git checkout v1-antes-da-repaginacao
```

---

## Fontes dos dados

- Manual de Redefinição de Senha (Discente) · UEMG
- Horário de Aulas · UEMG Guanhães 2026.2
- Mapa de Salas 2026.2 · UEMG Guanhães
- Calendário Acadêmico 2026, Resolução COEPE/UEMG nº 530, de 11/12/2025

---

Desenvolvido por **Jonatan Barbosa Silva**.
