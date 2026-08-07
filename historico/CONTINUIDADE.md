# Continuidade: como este site sobrevive a uma troca de coordenação

Hoje o site depende de uma pessoa só. O código está seguro (fica na
organização `naeguanhaes`, no GitHub, com histórico completo), mas os
**acessos** e o **conhecimento** ainda estão concentrados. Este documento
existe para resolver isso antes de precisar.

Escrito em 6 de agosto de 2026 por Jonatan Barbosa Silva.

---

## O que precisa ser feito uma vez (e ainda não foi)

### 1. Um segundo dono na organização do GitHub

Se a conta `jonbarbosas` ficar inacessível, ninguém mais publica no site,
e o endereço `naeguanhaes.github.io` fica congelado na última versão.

Como resolver, em cinco minutos:

1. Entre em github.com/orgs/naeguanhaes/people
2. Convide a pessoa (a coordenação seguinte, a direção da unidade ou alguém
   da TI da UEMG) com o papel **Owner**, não Member.
3. Confirme que ela aceitou o convite.

Enquanto isso não acontece, a organização tem um ponto único de falha.

### 2. Escrever onde ficam as chaves

As contas usadas pelo site, e quem tem acesso a cada uma:

| Conta | Para quê | Quem tem hoje |
| --- | --- | --- |
| GitHub `jonbarbosas` | dona da organização `naeguanhaes` | coordenador |
| Organização `naeguanhaes` | repositório e publicação do site | coordenador |
| GoatCounter `naeguanhaes` | painel de acessos | coordenador |
| `nae.guanhaes@uemg.br` | e-mail institucional do NAE | coordenação do NAE |
| Repositório de redirecionamento `jonbarbosas.github.io/nae-guanhaes` | mantém vivos os QR codes já impressos | coordenador |

A senha de cada uma **não fica neste arquivo nem em arquivo nenhum do
repositório**. O lugar delas é o gerenciador de senhas da coordenação, ou um
envelope lacrado na secretaria. O que este documento registra é a lista do que
existe, para ninguém descobrir tarde demais que faltava uma conta.

### 3. Combinar o destino do endereço

O endereço atual é gratuito e pertence à organização, não a uma pessoa. Se um
dia a Universidade quiser trazer o site para o domínio dela, o caminho está no
`README.md`, na seção "Endereço próprio da UEMG". O endereço antigo
`jonbarbosas.github.io/nae-guanhaes` **não pode ser apagado**: há cartazes
impressos apontando para lá.

---

## O que o sucessor precisa saber, em ordem

1. Leia o [`CLAUDE.md`](../CLAUDE.md) da raiz: são as regras permanentes e o
   checklist de publicação.
2. Leia o [`CONTEXTO.md`](CONTEXTO.md): é o porquê de cada decisão.
3. Leia o [`DIARIO.md`](DIARIO.md): é o que já aconteceu.
4. O conteúdo que muda de semestre está todo em `assets/dados-*.js`. Nenhuma
   linha de lógica mora ali.
5. Para publicar: alterar, rodar os inspetores, subir a `VERSAO` do `sw.js`,
   enviar para a branch `main`. O resto é automático.

Nada disso exige saber programar. Exige saber ler.

---

## O que o computador já vigia sozinho

| Rotina | Quando | O que faz |
| --- | --- | --- |
| `publicar.yml` | a cada envio para a `main` | roda os seis inspetores e barra a publicação se algum falhar |
| `links-externos.yml` | toda segunda, 09h | testa os endereços de fora e abre tarefa se algum morrer |
| `frescor.yml` | dia 1 de cada mês, 09h | avisa se a grade, o calendário ou os carimbos de data envelheceram |

As três abrem tarefa no próprio repositório. Quem for dono da organização
recebe por e-mail. É por isso que ter um segundo dono importa: as tarefas
continuam chegando a alguém.

---

## O que acontece se ninguém fizer nada

O site continua no ar, gratuito e funcionando, por tempo indeterminado: é
HTML estático em hospedagem gratuita. O que envelhece é o conteúdo. Em um
semestre, a grade fica errada. Em um ano, o calendário. O vigia mensal existe
justamente para transformar esse envelhecimento silencioso em um aviso.
