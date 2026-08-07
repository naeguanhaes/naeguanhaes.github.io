/* ═══════════════════════════════════════════════════════
   NAE Guanhães · busca interna
   Lê window.DADOS_BUSCA (assets/dados-busca.js) e abre um
   painel de busca a partir de qualquer [data-abrir-busca].
   ═══════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var U = window.NAE;
  var DADOS = window.DADOS_BUSCA;
  if (!U || !DADOS) return;

  var gatilhos = document.querySelectorAll('[data-abrir-busca]');
  if (!gatilhos.length) return;

  var ATALHOS = [
    { t: 'Esqueci minha senha', u: 'email.html#passo-a-passo', c: 'var(--azul)' },
    { t: 'Qual é o meu e-mail?', u: 'email.html#meu-endereco', c: 'var(--azul)' },
    { t: 'Como entro no Moodle?', u: 'sistemas.html', c: 'var(--petroleo)' },
    { t: 'Onde fica minha sala?', u: 'mapa.html', c: 'var(--verde)' },
    { t: 'Que aula tenho hoje?', u: 'horarios.html', c: 'var(--turquesa)' },
    { t: 'Quando é o próximo feriado?', u: 'calendario.html', c: 'var(--lilas)' },
    { t: 'Quantas faltas posso ter?', u: 'calculadora.html', c: 'var(--turquesa)' },
    { t: 'Preciso de apoio psicológico', u: 'apoio.html', c: 'var(--rosa)' }
  ];

  /* itens pré-normalizados, para a busca ficar instantânea */
  var indice = DADOS.itens.map(function (it) {
    return {
      item: it,
      nt: U.normaliza(it.t),
      nd: U.normaliza(it.d),
      nk: U.normaliza(it.k || '')
    };
  });

  var painel = null, campo = null, caixaRes = null, anuncio = null, ultimoFoco = null;

  /* tudo que recebe foco dentro do diálogo, na ordem da tela */
  function focaveis() {
    var caixa = painel.querySelector('.busca-caixa');
    return Array.prototype.slice.call(
      caixa.querySelectorAll('a[href], button, input, [tabindex]:not([tabindex="-1"])')
    ).filter(function (el) { return el.offsetParent !== null || el === campo; });
  }

  function montar() {
    painel = document.createElement('div');
    painel.className = 'busca-veu';
    painel.hidden = true;
    painel.innerHTML =
      '<div class="busca-caixa" role="dialog" aria-modal="true" aria-label="Busca no site">' +
        '<div class="busca-linha">' +
          '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"></circle><path d="M20 20l-3.8-3.8"></path></svg>' +
          '<input id="busca-campo" type="search" placeholder="O que você procura hoje?" autocomplete="off" aria-label="O que você procura hoje?">' +
          '<button class="busca-fechar" type="button" aria-label="Fechar a busca">×</button>' +
        '</div>' +
        '<div class="busca-atalhos" aria-label="Dúvidas frequentes">' +
          ATALHOS.map(function (a) {
            return '<a class="atalho" href="' + a.u + '" style="--c: ' + a.c + '">' + U.escapar(a.t) + '</a>';
          }).join('') +
        '</div>' +
        '<div class="busca-res" id="busca-res" aria-label="Resultados"></div>' +
        '<p class="so-leitor" id="busca-anuncio" role="status" aria-live="polite"></p>' +
      '</div>';
    document.body.appendChild(painel);

    campo = painel.querySelector('#busca-campo');
    caixaRes = painel.querySelector('#busca-res');
    anuncio = painel.querySelector('#busca-anuncio');

    campo.addEventListener('input', function () { procurar(campo.value); });
    campo.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        var primeiro = caixaRes.querySelector('a');
        if (primeiro) primeiro.click();
      }
    });
    painel.querySelector('.busca-fechar').addEventListener('click', fechar);
    painel.addEventListener('click', function (e) { if (e.target === painel) fechar(); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !painel.hidden) fechar();
    });

    /* teclado dentro do diálogo: setas passeiam pelos resultados e o
       Tab não escapa para a página que ficou atrás do véu */
    painel.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        var itens = [campo].concat(
          Array.prototype.slice.call(caixaRes.querySelectorAll('a.busca-item'))
        );
        if (itens.length < 2) return;
        e.preventDefault();
        var onde = itens.indexOf(document.activeElement);
        var passo = e.key === 'ArrowDown' ? 1 : -1;
        var proximo = onde === -1 ? (passo === 1 ? 1 : itens.length - 1)
                                  : (onde + passo + itens.length) % itens.length;
        itens[proximo].focus();
        return;
      }

      if (e.key !== 'Tab') return;
      var lista = focaveis();
      if (!lista.length) return;
      var primeiro = lista[0], ultimo = lista[lista.length - 1];
      if (e.shiftKey && document.activeElement === primeiro) {
        e.preventDefault(); ultimo.focus();
      } else if (!e.shiftKey && document.activeElement === ultimo) {
        e.preventDefault(); primeiro.focus();
      } else if (lista.indexOf(document.activeElement) === -1) {
        e.preventDefault(); primeiro.focus();
      }
    });
  }

  function abrir() {
    if (!painel) montar();
    ultimoFoco = document.activeElement;
    painel.hidden = false;
    document.body.style.overflow = 'hidden';
    procurar(campo.value);
    setTimeout(function () { campo.focus(); }, 30);
  }

  function fechar() {
    painel.hidden = true;
    document.body.style.overflow = '';
    if (ultimoFoco && ultimoFoco.focus) ultimoFoco.focus();
  }

  function procurar(texto) {
    var termos = U.normaliza(texto).split(/\s+/).filter(Boolean);

    if (!termos.length) {
      caixaRes.innerHTML = '<p class="busca-dica">Digite acima ou toque em uma das dúvidas frequentes.</p>';
      avisar('');
      return;
    }

    var achados = [];
    indice.forEach(function (e) {
      var pontos = 0;
      var todos = true;
      termos.forEach(function (t) {
        var p = 0;
        if (e.nt.indexOf(t) !== -1) p += 4;
        if (e.nk.indexOf(t) !== -1) p += 2;
        if (e.nd.indexOf(t) !== -1) p += 1;
        if (!p) todos = false;
        pontos += p;
      });
      if (todos && pontos) achados.push({ e: e, pontos: pontos });
    });

    achados.sort(function (a, b) { return b.pontos - a.pontos; });
    achados = achados.slice(0, 8);

    if (!achados.length) {
      caixaRes.innerHTML =
        '<p class="busca-dica">Nada encontrado para <b>' + U.escapar(texto) + '</b>. ' +
        'Tente outra palavra, ou <a href="contato.html">pergunte ao NAE</a>.</p>';
      avisar('Nada encontrado.');
      return;
    }

    caixaRes.innerHTML = achados.map(function (a) {
      var it = a.e.item;
      return '<a class="busca-item" href="' + U.escapar(it.u) + '">' +
               '<span class="bi-t">' + U.escapar(it.t) + '</span>' +
               '<span class="bi-d">' + U.escapar(it.d) + '</span>' +
             '</a>';
    }).join('');

    avisar(achados.length === 1 ? '1 resultado. Use as setas para percorrer.'
                                : achados.length + ' resultados. Use as setas para percorrer.');
  }

  /* fala com quem usa leitor de tela, sem mudar nada na tela */
  var relogioAviso = null;
  function avisar(texto) {
    if (!anuncio) return;
    if (relogioAviso) clearTimeout(relogioAviso);
    /* espera a digitação parar, para não tagarelar a cada letra */
    relogioAviso = setTimeout(function () { anuncio.textContent = texto; }, 500);
  }

  gatilhos.forEach(function (g) {
    g.addEventListener('click', function (e) { e.preventDefault(); abrir(); });
  });

  /* a tecla de barra abre a busca, como em muitos sites */
  document.addEventListener('keydown', function (e) {
    if (e.key === '/' && !e.ctrlKey && !e.metaKey && !e.altKey) {
      var alvo = e.target;
      var digitando = alvo && (alvo.tagName === 'INPUT' || alvo.tagName === 'TEXTAREA' || alvo.isContentEditable);
      if (!digitando) { e.preventDefault(); abrir(); }
    }
  });
})();
