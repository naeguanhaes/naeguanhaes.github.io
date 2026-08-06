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

  var painel = null, campo = null, caixaRes = null, ultimoFoco = null;

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
        '<div class="busca-res" id="busca-res" role="listbox" aria-label="Resultados"></div>' +
      '</div>';
    document.body.appendChild(painel);

    campo = painel.querySelector('#busca-campo');
    caixaRes = painel.querySelector('#busca-res');

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
      return;
    }

    caixaRes.innerHTML = achados.map(function (a) {
      var it = a.e.item;
      return '<a class="busca-item" href="' + U.escapar(it.u) + '">' +
               '<span class="bi-t">' + U.escapar(it.t) + '</span>' +
               '<span class="bi-d">' + U.escapar(it.d) + '</span>' +
             '</a>';
    }).join('');
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
