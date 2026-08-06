| `sistemas.html` | AVA Moodle e Lyceum: links e passo a passo do acesso |
| `horarios.html` | Grade 2026.2, com "hoje/agora", minha turma e exportação |# NAE Guanhães — site do Núcleo de Apoio ao Estudante

Site do **NAE — Núcleo de Apoio ao Estudante** da **UEMG, Unidade Guanhães**.
São páginas HTML, uma folha de estilo e alguns scripts: sem dependências e sem
etapa de compilação. Para publicar, basta enviar os arquivos.

**No ar em:** https://naeguanhaes.github.io/
**Coordenação:** Jonatan Barbosa Silva
**Contato do NAE:** nae.guanhaes@uemg.br — sala no **Prédio do Administrativo**,
atendimento às terças e quintas das 18h às 19h; quartas mediante agendamento por e-mail.

---

## Páginas

| Arquivo | Conteúdo |
| --- | --- |
| `index.html` | Início: aula de hoje, carrossel de serviços e atalhos |
| `email.html` | Guia ilustrado do e-mail institucional (10 etapas) |
| `horarios.html` | Grade 2026.2, com "hoje/agora", minha turma e exportação |
| `calendario.html` | Calendário acadêmico 2026 |
| `mapa.html` | Planta do campus e lista de ambientes |
| `sobre.html` | O que é o NAE e o que ele faz |
| `contato.html` | Sala do NAE, atendimento e contatos |
| `cartaz.html` | Cartaz A4 + 4 cartões para imprimir, com QR code |
| `404.html` | Página de endereço não encontrado |

---

## Atualizar o conteúdo

**Toda a informação que muda de semestre está em `assets/dados-*.js`.**
Esses arquivos são só dados — não há lógica dentro deles.

| Arquivo | O que guarda |
| --- | --- |
| `assets/dados-horarios.js` | turmas, salas, professores e a grade de aulas |
| `assets/dados-calendario.js` | datas do calendário acadêmico |
| `assets/dados-avisos.js` | faixa de aviso que aparece no topo do site |

Depois de editar qualquer um deles, **rode a checagem**:

```bash
node ferramentas/checar-dados.js
```

Ela acusa o que o olho não pega: duas turmas na mesma sala no mesmo horário,
um professor em dois lugares ao mesmo tempo, sigla de professor inexistente,
horário invertido, data fora do ano. Se acusar erro, corrija antes de publicar.

Lembre-se de atualizar o campo `atualizadoEm` — ele vira o carimbo
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
assets/estilo.css            folha de estilo (tema claro e escuro)
assets/site.js               avisos, carrossel, compartilhar, instalação
assets/horarios.js           grade, painel "hoje", minha turma, exportação .ics
assets/calendario.js         calendário acadêmico
assets/mapa.js               ocupação das salas agora e alternância planta/lista
assets/dados-*.js            DADOS — é aqui que se atualiza o conteúdo
assets/logo-nae.png          marca oficial (assinatura completa)
assets/simbolo-nae.png       símbolo isolado
assets/favicon-nae.png       ícone do site
assets/icone-192/512.png     ícones de instalação no celular
assets/og-nae.png            imagem de prévia ao compartilhar
manifest.webmanifest         dados de instalação (PWA)
sw.js                        cache offline
ferramentas/checar-dados.js  checagem dos dados
```

### Funciona sem internet

O `sw.js` guarda o site no aparelho na primeira visita. **Ao publicar mudanças,
troque o número da `VERSAO` no topo do arquivo** — sem isso, quem já visitou
continua vendo a versão antiga.

---

## Publicar no GitHub Pages

Já está configurado: envie para a branch `main` e o site atualiza em cerca de
um minuto. Configuração em *Settings → Pages*: branch `main`, pasta `/ (root)`.

### Endereço próprio da UEMG (opcional)

O endereço atual, `naeguanhaes.github.io`, já é institucional: pertence à
organização do NAE, não a uma conta pessoal, e é gratuito. Se um dia a
Universidade quiser um endereço no domínio dela:

1. Peça à área de TI da UEMG um subdomínio — por exemplo `nae.guanhaes.uemg.br`.
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

- Manual de Redefinição de Senha (Discente) — UEMG
- Horário de Aulas — UEMG Guanhães 2026.2
- Mapa de Salas 2026.2 — UEMG Guanhães
- Calendário Acadêmico 2026 — Resolução COEPE/UEMG nº 530, de 11/12/2025

---

Desenvolvido por **Jonatan Barbosa Silva**.
