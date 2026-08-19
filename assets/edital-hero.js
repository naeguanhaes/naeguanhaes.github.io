/* ═══════════════════════════════════════════════════════
   O edital aberto como segundo slide do bloco de cima
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

  /* o que ainda nao encerrou, prazo mais apertado primeiro */
  var vivos = (D.itens || [])
    .filter(function (e) { return e && e.encerra && hoje <= e.encerra; })
    .sort(function (a, b) { return a.encerra < b.encerra ? -1 : 1; });
  if (!vivos.length) return;

  var e = vivos[0];
  var d = e.destaque || {};

  /* mesma redacao do selo da pagina do projeto, para as duas nao
     divergirem quando o prazo aperta */
  var texto, urgente = false, acao = d.acao || 'Ver e se inscrever';

  if (e.abre && hoje < e.abre) {
    acao = 'Conhecer o projeto';
    texto = dias(hoje, e.abre) === 1
      ? 'As inscrições abrem amanhã'
      : 'As inscrições abrem em ' + diaMes(e.abre);
  } else {
    var faltam = dias(hoje, e.encerra);
    urgente = faltam <= 5;
    if (faltam === 0)      texto = 'Último dia de inscrição';
    else if (faltam === 1) texto = 'Falta 1 dia para encerrar';
    else if (faltam <= 15) texto = 'Faltam ' + faltam + ' dias para encerrar';
    else                   texto = 'Inscrições abertas até ' + diaMes(e.encerra);
  }

  /* o campo texto do destaque entra como HTML, para o negrito. Vem do
     proprio repositorio, nunca de fora. O resto e escapado. */
  var corpo = d.texto || escapar(e.resumo);

  var selos = (d.numeros || []).map(function (x) {
    return '<span class="hero-selo"><b>' + escapar(x.n) + '</b>' + escapar(x.r) + '</span>';
  }).join('');
  if (selos) selos = '<div class="hero-selos">' + selos + '</div>';

  var extra = (d.extraTexto && d.extraLink)
    ? '<a class="btn ghost" href="' + escapar(d.extraLink) + '" target="_blank" rel="noopener noreferrer">' +
        escapar(d.extraTexto) + '</a>'
    : '';

  var slide = document.createElement('div');
  slide.className = 'hero hero-edital';
  slide.innerHTML =
    '<div class="hero-in">' +
      '<span class="eyebrow">' + escapar(d.eyebrow || 'Inscrições abertas') + '</span>' +
      '<h2>' + escapar(d.titulo || e.titulo) + '</h2>' +
      '<p>' + corpo + '</p>' +
      selos +
      '<a class="hero-contagem' + (urgente ? ' urgente' : '') + '" href="' + escapar(e.link) + '">' +
        '<span class="pulso" aria-hidden="true"></span>' + escapar(texto) +
      '</a>' +
      '<div class="hero-acoes">' +
        '<a class="btn" href="' + escapar(e.link) + '">' + escapar(acao) + ' &rarr;</a>' +
        extra +
      '</div>' +
    '</div>';
  /* entra na FRENTE do slide fixo: quem chega na página vê o edital
     primeiro, e o outro continua a um arrasto de distância. */
  trilho.insertBefore(slide, trilho.firstChild);
})();
