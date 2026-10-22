# Imagens para os Stories do Instagram

Os modelos desta pasta geram as imagens de 1080x1920 em `assets/stories/`, que os
botões "Postar nos Stories" (`data-stories` no HTML, código em `assets/site.js`)
entregam ao celular. Para gerar de novo: sirva a raiz do site num servidor local,
abra o modelo em 1080x1920, tire a captura e salve como JPG em `assets/stories/`.
As faixas de cima e de baixo (cerca de 220 px) ficam livres para a interface do
Instagram. Os modelos terminam em `.html.modelo` para o inspetor do site não tratá-los como páginas;
para usar, copie para a raiz com o nome terminando em `.html`. Os caminhos de imagem
dos modelos começam em `/`, a raiz do site.
