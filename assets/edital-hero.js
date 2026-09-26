/* ═══════════════════════════════════════════════════════
   Os avisos e eventos com prazo, como slides do painel da inicial
   ───────────────────────────────────────────────────────
   O painel da página inicial só tem o que é passageiro: editais,
   eventos e avisos, montados a partir de assets/dados-editais.js.
   O quadro de boas-vindas ("Tudo que o estudante precisa...") fica
   fixo ACIMA do painel, fora dele, desde 26/09/2026.

   O painel nasce com o atributo hidden. Só aparece se houver ao
   menos um item vivo; quando todos vencem, some sozinho e a página
   não fica com um buraco. Com um slide só, o site.js não monta o
   carrossel e ele vira um quadro parado.

   ORDEM IMPORTA. Este arquivo precisa ser carregado DEPOIS de
   dados-editais.js e ANTES de site.min.js. O site.js monta o
   carrossel no ato em que roda, e não no DOMContentLoaded, então
   os slides têm de estar no lugar antes dele. Scripts "defer"
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

  /* O que ainda não encerrou, em duas turmas:
     1. os NOVOS, que entraram no site há menos de 10 dias (campo
        "publicado"), do mais recente para o mais antigo;
     2. todos os outros, com o prazo mais apertado primeiro.
     Assim cada aviso novo abre o painel por 10 dias e depois volta
     para o seu lugar pela data de encerramento.
     naInicial: false tira o item desta vitrine sem tirar da lista. */
  var DIAS_DE_NOVO = 10;
  function novo(e) {
    return !!e.publicado && e.publicado <= hoje && dias(e.publicado, hoje) < DIAS_DE_NOVO;
  }
  var vivos = (D.itens || [])
    .filter(function (e) {
      return e && e.encerra && hoje <= e.encerra && e.naInicial !== false;
    })
    .sort(function (a, b) {
      var na = novo(a), nb = novo(b);
      if (na !== nb) return na ? -1 : 1;
      if (na && a.publicado !== b.publicado) return a.publicado > b.publicado ? -1 : 1;
      return a.encerra < b.encerra ? -1 : 1;
    });
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

  /* Na ordem acima: primeiro os novos, depois os demais pelo prazo. */
  escolhidos.forEach(function (e) { trilho.appendChild(montar(e)); });
  var painel = trilho.closest('[data-carrossel]');
  if (painel) painel.hidden = false;

  /* Cinto e suspensório: o navegador pode ter guardado uma rolagem
     do trilho de uma visita anterior. Zerar garante a abertura no
     primeiro destaque, sem animação, antes de o site.js montar o
     carrossel. */
  var comportamento = trilho.style.scrollBehavior;
  trilho.style.scrollBehavior = 'auto';
  trilho.scrollLeft = 0;
  trilho.style.scrollBehavior = comportamento;
})();
