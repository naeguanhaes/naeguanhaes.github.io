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

  /* ── Busca dentro das ementas ──────────────────────────
     As 190 ementas somam 300 KB e só interessam a quem procura
     um assunto. Por isso os dados entram sob demanda, na primeira
     vez que alguém digita, e não no carregamento de toda página. */
  var ementas = { estado: 'parado', indice: [] };

  function carregarScript(src) {
    return new Promise(function (ok, erro) {
      if (document.querySelector('script[data-sob-demanda="' + src + '"]')) return ok();
      var s = document.createElement('script');
      s.src = src;
      s.setAttribute('data-sob-demanda', src);
      s.onload = ok;
      s.onerror = erro;
      document.head.appendChild(s);
    });
  }

  function montarIndiceEmentas() {
    var C = window.DADOS_CURSO, E = window.DADOS_EMENTAS;
    if (!C || !E) return;
    (C.cursos || []).forEach(function (c) {
      var nomes = {};
      (c.periodos || []).forEach(function (p) {
        (p.disciplinas || []).forEach(function (d) {
          nomes[d.cod || d.nome] = { nome: d.nome, periodo: p.n };
        });
      });
      (c.optativas || []).forEach(function (o) { nomes['OPT:' + o] = { nome: o, optativa: true }; });

      Object.keys(E[c.id] || {}).forEach(function (chave) {
        var info = nomes[chave];
        if (!info) return;
        var e = E[c.id][chave];
        ementas.indice.push({
          curso: c.nome, cor: c.cor, chave: chave,
          nome: info.nome,
          onde: info.optativa ? 'optativa' : info.periodo + 'º período',
          ementa: e.ementa,
          nn: U.normaliza(info.nome),
          ne: U.normaliza(e.ementa)
        });
      });
    });
  }

  function garantirEmentas() {
    if (ementas.estado === 'pronto' || ementas.estado === 'carregando') return;
    ementas.estado = 'carregando';
    Promise.all([
      carregarScript('assets/dados-curso.js'),
      carregarScript('assets/dados-ementas.js')
    ]).then(function () {
      montarIndiceEmentas();
      ementas.estado = 'pronto';
      if (campo && campo.value) procurar(campo.value);
    }).catch(function () { ementas.estado = 'falhou'; });
  }

  function acharEmentas(termos) {
    if (ementas.estado !== 'pronto') return [];
    var achados = [];
    ementas.indice.forEach(function (d) {
      var pontos = 0, todos = true;
      termos.forEach(function (t) {
        var p = 0;
        if (d.nn.indexOf(t) !== -1) p += 5;
        if (d.ne.indexOf(t) !== -1) p += 2;
        if (!p) todos = false;
        pontos += p;
      });
      if (todos && pontos) achados.push({ d: d, pontos: pontos });
    });
    achados.sort(function (a, b) { return b.pontos - a.pontos; });
    return achados.slice(0, 6);
  }

  /* mostra o pedaço da ementa onde a palavra aparece */
  function trechoDa(d, termos) {
    var pos = -1, achado = '';
    termos.forEach(function (t) {
      var i = d.ne.indexOf(t);
      if (i !== -1 && (pos === -1 || i < pos)) { pos = i; achado = t; }
    });
    if (pos === -1) return cortaInteiro(d.ementa, 0, 110);
    return cortaInteiro(d.ementa, Math.max(0, pos - 45), pos + achado.length + 75);
  }

  /* corta o trecho em espaço, para não terminar no meio de uma palavra */
  function cortaInteiro(texto, ini, fim) {
    if (ini > 0) { while (ini < texto.length && texto.charAt(ini) !== ' ') ini++; ini++; }
    if (fim < texto.length) { while (fim > ini && texto.charAt(fim) !== ' ') fim--; }
    else { fim = texto.length; }
    return (ini > 0 ? '…' : '') + texto.slice(ini, fim).trim() + (fim < texto.length ? '…' : '');
  }

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

    /* a partir de três letras vale procurar também dentro das ementas */
    var termoMaior = termos.some(function (t) { return t.length >= 3; });
    if (termoMaior) garantirEmentas();
    var disciplinas = termoMaior ? acharEmentas(termos) : [];

    if (!achados.length && !disciplinas.length) {
      if (ementas.estado === 'carregando') {
        caixaRes.innerHTML = '<p class="busca-dica">Procurando também nas ementas das disciplinas…</p>';
        avisar('Procurando nas ementas.');
        return;
      }
      caixaRes.innerHTML =
        '<p class="busca-dica">Nada encontrado para <b>' + U.escapar(texto) + '</b>. ' +
        'Tente outra palavra, ou <a href="contato.html">pergunte ao NAE</a>.</p>';
      avisar('Nada encontrado.');
      return;
    }

    var html = achados.map(function (a) {
      var it = a.e.item;
      return '<a class="busca-item" href="' + U.escapar(it.u) + '">' +
               '<span class="bi-t">' + U.escapar(it.t) + '</span>' +
               '<span class="bi-d">' + U.escapar(it.d) + '</span>' +
             '</a>';
    }).join('');

    if (disciplinas.length) {
      html += '<p class="busca-secao">Aparece na ementa destas disciplinas</p>' +
        disciplinas.map(function (a) {
          var d = a.d;
          return '<a class="busca-item busca-disc" href="matriz.html?d=' + encodeURIComponent(d.chave) + '"' +
                   ' style="--c: ' + d.cor + '">' +
                   '<span class="bi-t">' + U.escapar(d.nome) +
                     '<span class="bi-onde">' + U.escapar(d.curso + ' · ' + d.onde) + '</span>' +
                   '</span>' +
                   '<span class="bi-d">' + U.escapar(trechoDa(d, termos)) + '</span>' +
                 '</a>';
        }).join('');
    }

    caixaRes.innerHTML = html;

    var total = achados.length + disciplinas.length;
    avisar(total === 1 ? '1 resultado. Use as setas para percorrer.'
                       : total + ' resultados. Use as setas para percorrer.');
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
