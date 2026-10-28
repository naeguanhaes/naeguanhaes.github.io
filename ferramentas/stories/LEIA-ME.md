# Imagens para os Stories do Instagram

Os modelos desta pasta geram as imagens de 1080x1920 em `assets/stories/`, que os
botões "Postar nos Stories" (`data-stories` no HTML, código em `assets/site.js`)
entregam ao celular. Para gerar de novo: sirva a raiz do site num servidor local,
abra o modelo em 1080x1920, tire a captura e salve como JPG em `assets/stories/`.
As faixas de cima e de baixo (cerca de 220 px) ficam livres para a interface do
Instagram. Os modelos terminam em `.html.modelo` para o inspetor do site não tratá-los como páginas;
para usar, copie para a raiz com o nome terminando em `.html`. Os caminhos de imagem
dos modelos começam em `/`, a raiz do site.

## Imagens das páginas (22/10/2026)

As imagens dos Stories das páginas do NAE (horários, calendário, Lyceum, Moodle, Wi-Fi,
ENADE, Seminário, Yoga, Conecta Mente e a geral) saem de `stories.json` + `gerar.js`:

1. Acrescente ou edite o item em `stories.json` (`print` para o celular com o print da
   página, `cartaz` para um cartaz, `logo` para a marca do evento).
2. `node ferramentas/stories/gerar.js` escreve `_stories_tmp/<id>.html`.
3. Para os prints: capture a página com 780 px de largura e `zoom: 2` (fica como um
   celular de 390 px) e salve em `_stories_tmp/print-<nome>.png`.
4. Capture cada `_stories_tmp/<id>.html` em 1080x1920, salve como JPG em
   `assets/stories/<id>.jpg` e apague `_stories_tmp/`.
5. Ligue a imagem à página na tabela `STORIES` do `assets/site.js`.

## Quando o evento tem cartaz pronto (28/10/2026)

Pedido do coordenador: ao compartilhar o V Conecta Mente, a imagem é o próprio banner do
evento. `assets/stories/conecta-mente.jpg` é o cartaz inteiro sobre fundo creme (1000 px de
largura, com 210 px livres em cima e embaixo), feito direto com Python, e por isso saiu de
`stories.json`. Faça igual para evento que já chega com cartaz vertical.
