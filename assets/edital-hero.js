/* ═══════════════════════════════════════════════════════
   Os editais e eventos abertos como slides do bloco de cima
   ───────────────────────────────────────────────────────
   A página inicial abre com um carrossel. O primeiro slide é
   fixo; o segundo é o edital de prazo mais apertado que ainda
   não encerrou, montado a partir de assets/dados-editais.js.

   Quando não há edital vivo, nenhum slide é criado: o site.js
   encontra um slide só, desiste de montar o carrossel e o bloco
   volta a ser um quadro parado, como era antes. Ou seja, a faixa
   se retira sozinha quando o prazo vence.

   ORDEM IMPORTA. Este arquivo precisa ser carregado DEPOIS de
   dados-editais.js e ANTES de site.min.js. O site.js monta o
   carrossel no ato em que roda, e não no DOMContentLoaded, então
   o slide tem de estar no lugar antes dele. Scripts "defer"
   executam na ordem em que aparecem no HTML, e todos depois da
   página ter sido lida, então aqui o DOM já existe.

   Por rodar antes do site.js, não dá para usar o window.NAE:
   as três ajudas de que precisa estão embutidas abaixo.
   ═══════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var D = window.DADOS_EDITAIS;
  var trilho = document.getElementById('hero-trilho');
  if (!D || !trilho) return;

  function doisDigitos(n) { return (n < 10 ? '0' : '') + n; }

  /* data de hoje no fuso de quem está lendo, no formato AAAA-MM-DD */
  function hojeISO() {
    var d = new Date();
    return d.getFullYear() + '-' + doisDigitos(d.getMonth() + 1) + '-' + doisDigitos(d.getDate());
  }

  /* de AAAA-MM-DD para DD/MM */
  function diaMes(iso) {
    var p = String(iso).split('-');
    return p[2] + '/' + p[1];
  }

  function escapar(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function dias(a, b) {
    return Math.round((new Date(b + 'T12:00:00') - new Date(a + 'T12:00:00')) / 86400000);
  }

  var hoje = hojeISO();

  /* O que ainda não encerrou, prazo mais apertado primeiro.
     naInicial: false tira o item desta vitrine sem tirar da lista. */
  var vivos = (D.itens || [])
    .filter(function (e) {
      return e && e.encerra && hoje <= e.encerra && e.naInicial !== false;
    })
    .sort(function (a, b) { return a.encerra < b.encerra ? -1 : 1; });
  if (!vivos.length) return;

  /* Um slide por evento. Itens com o mesmo "grupo" são fases do mesmo
     evento (o Seminário tem três ao mesmo tempo nos dados): vale só a de
     prazo mais próximo, que já vem primeiro pela ordenação. */
  var vistos = {}, escolhidos = [];
  vivos.forEach(function (e) {
    var chave = e.grupo || e.titulo;
    if (vistos[chave]) return;
    vistos[chave] = true;
    escolhidos.push(e);
  });

  function externo(url) { return /^https?:\/\//.test(url); }
  function alvo(url) { return externo(url) ? ' target="_blank" rel="noopener noreferrer"' : ''; }

  function montar(e) {
    var d = e.destaque || {};
    var texto, urgente = false, acao = d.acao || 'Ver e se inscrever';
    var rotulo = d.rotuloPrazo || 'para encerrar';

    if (e.abre && hoje < e.abre) {
      acao = d.acaoAntes || 'Saber mais';
      texto = dias(hoje, e.abre) === 1
        ? 'As inscrições abrem amanhã'
        : 'As inscrições abrem em ' + diaMes(e.abre);
    } else {
      var faltam = dias(hoje, e.encerra);
      urgente = faltam <= 5;
      if (faltam === 0)      texto = d.textoUltimoDia || 'Último dia de inscrição';
      else if (faltam === 1) texto = 'Falta 1 dia ' + rotulo;
      else if (faltam <= 15) texto = 'Faltam ' + faltam + ' dias ' + rotulo;
      else                   texto = d.textoLonge || ('Inscrições abertas até ' + diaMes(e.encerra));
    }

    /* o campo texto do destaque entra como HTML, para o negrito. Vem do
       próprio repositório, nunca de fora. O resto é escapado. */
    var corpo = d.texto || escapar(e.resumo);

    var selos = (d.numeros || []).map(function (x) {
      return '<span class="hero-selo"><b>' + escapar(x.n) + '</b>' + escapar(x.r) + '</span>';
    }).join('');
    if (selos) selos = '<div class="hero-selos">' + selos + '</div>';

    var link = d.acaoLink || e.link;
    var extra = (d.extraTexto && d.extraLink)
      ? '<a class="btn ghost" href="' + escapar(d.extraLink) + '"' + alvo(d.extraLink) + '>' +
          escapar(d.extraTexto) + '</a>'
      : '';

    var imagem = d.imagem
      ? '<figure class="hero-imagem"><img src="' + escapar(d.imagem) + '" alt="' +
          escapar(d.imagemAlt || '') + '" loading="lazy" decoding="async"></figure>'
      : '';

    var slide = document.createElement('div');
    /* o tema de cor vem dos dados, para cada evento ter a sua */
    slide.className = 'hero hero-edital' + (d.tema ? ' tema-' + d.tema : '') +
                      (imagem ? ' hero-com-imagem' : '');
    slide.innerHTML =
      '<div class="hero-in">' +
        '<span class="eyebrow">' + escapar(d.eyebrow || 'Inscrições abertas') + '</span>' +
        '<h2>' + escapar(d.titulo || e.titulo) + '</h2>' +
        '<p>' + corpo + '</p>' +
        selos +
        /* semContagem: aviso que não é inscrição (o Wi-Fi) fica sem o selo do prazo */
        (d.semContagem ? '' :
          '<a class="hero-contagem' + (urgente ? ' urgente' : '') + '" href="' + escapar(e.link) + '">' +
            '<span class="pulso" aria-hidden="true"></span>' + escapar(texto) +
          '</a>') +
        '<div class="hero-acoes">' +
          '<a class="btn" href="' + escapar(link) + '"' + alvo(link) + '>' + escapar(acao) + ' &rarr;</a>' +
          extra +
        '</div>' +
      '</div>' +
      imagem;
    return slide;
  }

  /* Todos entram na FRENTE do slide fixo, na ordem do prazo: quem chega
     na página vê primeiro o prazo mais urgente, e o fixo fica por último. */
  var fixo = trilho.firstElementChild;
  escolhidos.forEach(function (e) { trilho.insertBefore(montar(e), fixo); });

  /* Cinto e suspensório: ao inserir algo ANTES do que já estava visível, o
     navegador pode compensar a rolagem para manter o conteúdo antigo na
     tela (scroll anchoring), e aí a página abriria no slide fixo. Zerar a
     rolagem garante a abertura no primeiro destaque, sem animação, antes
     de o site.js montar o carrossel. */
  var comportamento = trilho.style.scrollBehavior;
  trilho.style.scrollBehavior = 'auto';
  trilho.scrollLeft = 0;
  trilho.style.scrollBehavior = comportamento;
})();
