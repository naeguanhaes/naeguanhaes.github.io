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

  /* ── Vocabulário, para perdoar erro de digitação ───────
     Quem digita no celular erra, e "matrcula" não pode devolver
     nada. Guardamos aqui todas as palavras que existem no índice;
     quando um termo não bate com nenhuma, procuramos a palavra mais
     próxima, aceitando UMA diferença (letra trocada, faltando,
     sobrando ou invertida). Só vale para termos de quatro letras
     ou mais: em palavra curta, uma letra muda o sentido. */
  var vocabulario = [];
  (function montarVocabulario() {
    var vistas = {};
    indice.forEach(function (e) {
      (e.nt + ' ' + e.nk + ' ' + e.nd).split(/\s+/).forEach(function (p) {
        if (p.length >= 3 && !vistas[p]) { vistas[p] = 1; vocabulario.push(p); }
      });
    });
  })();

  var MIN_CORRECAO = 4;

  function noVocabulario(t) {
    for (var i = 0; i < vocabulario.length; i++) {
      if (vocabulario[i].indexOf(t) !== -1) return true;
    }
    return false;
  }

  /* Verdadeiro quando dá para transformar a em b com no máximo uma
     mudança: letra trocada, letra faltando, letra sobrando ou duas
     letras vizinhas invertidas. Essa última é a que mais acontece
     ("emial" por "email") e não sai de graça na conta clássica de
     Levenshtein, por isso é tratada à parte.

     Escrito à mão, e não com a matriz completa, porque roda a cada
     letra digitada e só precisa responder sim ou não. */
  function ateUmaDiferenca(a, b) {
    var difTamanho = a.length - b.length;
    if (difTamanho > 1 || difTamanho < -1) return false;

    if (difTamanho === 0) {
      var erradas = [];
      for (var k = 0; k < a.length; k++) {
        if (a.charAt(k) !== b.charAt(k)) {
          erradas.push(k);
          if (erradas.length > 2) return false;
        }
      }
      if (erradas.length <= 1) return true;
      /* duas diferenças só passam se forem vizinhas e trocadas de lugar */
      var p = erradas[0], q = erradas[1];
      return q === p + 1 && a.charAt(p) === b.charAt(q) && a.charAt(q) === b.charAt(p);
    }

    /* tamanhos diferentes: uma letra a mais de um lado */
    var maior = difTamanho === 1 ? a : b;
    var menor = difTamanho === 1 ? b : a;
    var i = 0, j = 0, pulei = false;
    while (i < maior.length && j < menor.length) {
      if (maior.charAt(i) === menor.charAt(j)) { i++; j++; continue; }
      if (pulei) return false;
      pulei = true;
      i++;
    }
    return true;
  }

  function palavraParecida(t) {
    var melhor = null;
    for (var i = 0; i < vocabulario.length; i++) {
      var p = vocabulario[i];
      if (Math.abs(p.length - t.length) > 1) continue;
      if (!ateUmaDiferenca(t, p)) continue;
      /* entre duas candidatas, fica a que começa igual: quem erra
         costuma acertar a primeira letra */
      if (!melhor || (p.charAt(0) === t.charAt(0) && melhor.charAt(0) !== t.charAt(0))) melhor = p;
    }
    return melhor;
  }

  /* Troca os termos que ninguém escreveu certo. Devolve a lista
     corrigida e o que foi trocado, para a tela poder avisar. */
  function corrigir(termos) {
    var trocas = [];
    var saida = termos.map(function (t) {
      if (t.length < MIN_CORRECAO || noVocabulario(t)) return t;
      var p = palavraParecida(t);
      if (!p) return t;
      trocas.push({ de: t, para: p });
      return p;
    });
    return { termos: saida, trocas: trocas };
  }

  /* ── Dados que entram sob demanda ──────────────────────
     As 190 ementas somam 300 KB e só interessam a quem procura um
     assunto. O calendário e os avisos são pequenos, mas nem toda
     página os carrega. Por isso os quatro entram na primeira vez
     que alguém digita, e não no carregamento de toda página. */
  var extras = { estado: 'parado' };
  var ementas = { indice: [] };
  var datas = { indice: [] };
  var recados = { indice: [] };

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

  /* páginas como a do calendário já trazem o arquivo: não baixe de novo */
  function garantirDado(nome, src) {
    return window[nome] ? Promise.resolve() : carregarScript(src);
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

  /* ── Datas do calendário ─────────────────────────────── */
  function montarIndiceDatas() {
    var C = window.DADOS_CALENDARIO;
    if (!C) return;
    (C.eventos || []).forEach(function (ev) {
      datas.indice.push({ ev: ev, nt: U.normaliza(ev.titulo + ' ' + (ev.tipo || '')) });
    });
  }

  /* "12/10" para um dia só, "01 a 04/09" para faixa */
  function quandoFoi(ev) {
    if (ev.semData) return 'data a definir';
    var ini = U.dataBR(ev.ini).slice(0, 5);
    if (!ev.fim || ev.fim === ev.ini) return ini;
    var mesIgual = ev.ini.slice(0, 7) === ev.fim.slice(0, 7);
    return mesIgual ? ev.ini.slice(8) + ' a ' + U.dataBR(ev.fim).slice(0, 5)
                    : ini + ' a ' + U.dataBR(ev.fim).slice(0, 5);
  }

  /* ── Avisos do mural ─────────────────────────────────── */
  function montarIndiceAvisos() {
    var A = window.DADOS_AVISOS;
    if (!A) return;
    (A.avisos || []).forEach(function (av) {
      recados.indice.push({ av: av, nt: U.normaliza(av.texto) });
    });
  }

  function garantirExtras() {
    if (extras.estado === 'pronto' || extras.estado === 'carregando') return;
    extras.estado = 'carregando';
    Promise.all([
      garantirDado('DADOS_CURSO', 'assets/dados-curso.js'),
      garantirDado('DADOS_EMENTAS', 'assets/dados-ementas.js'),
      garantirDado('DADOS_CALENDARIO', 'assets/dados-calendario.js'),
      garantirDado('DADOS_AVISOS', 'assets/dados-avisos.js')
    ]).then(function () {
      montarIndiceEmentas();
      montarIndiceDatas();
      montarIndiceAvisos();
      extras.estado = 'pronto';
      if (campo && campo.value) procurar(campo.value);
    }).catch(function () { extras.estado = 'falhou'; });
  }

  /* procura em uma lista já normalizada, exigindo todos os termos */
  function acharEm(lista, termos, quantos) {
    if (extras.estado !== 'pronto') return [];
    var achados = lista.filter(function (x) {
      return termos.every(function (t) { return x.nt.indexOf(t) !== -1; });
    });
    return achados.slice(0, quantos);
  }

  /* datas: primeiro as que ainda vão acontecer */
  function acharDatas(termos) {
    var hoje = U.hojeISO();
    var achados = acharEm(datas.indice, termos, 40).slice();
    achados.sort(function (a, b) {
      var fa = (a.ev.fim || a.ev.ini) >= hoje, fb = (b.ev.fim || b.ev.ini) >= hoje;
      if (fa !== fb) return fa ? -1 : 1;
      return a.ev.ini < b.ev.ini ? -1 : 1;
    });
    return achados.slice(0, 4);
  }

  function acharEmentas(termos) {
    if (extras.estado !== 'pronto') return [];
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
    var digitados = U.normaliza(texto).split(/\s+/).filter(Boolean);

    if (!digitados.length) {
      caixaRes.innerHTML = '<p class="busca-dica">Digite acima ou toque em uma das dúvidas frequentes.</p>';
      avisar('');
      return;
    }

    var conserto = corrigir(digitados);
    var termos = conserto.termos;

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

    /* a partir de três letras vale procurar também no calendário,
       nos avisos e dentro das ementas */
    var termoMaior = termos.some(function (t) { return t.length >= 3; });
    if (termoMaior) garantirExtras();
    var disciplinas = termoMaior ? acharEmentas(termos) : [];
    var achadosData = termoMaior ? acharDatas(termos) : [];
    var achadosAviso = termoMaior ? acharEm(recados.indice, termos, 3) : [];

    if (!achados.length && !disciplinas.length && !achadosData.length && !achadosAviso.length) {
      if (extras.estado === 'carregando') {
        caixaRes.innerHTML = '<p class="busca-dica">Procurando também nas datas, nos avisos e nas ementas…</p>';
        avisar('Procurando.');
        return;
      }
      caixaRes.innerHTML =
        '<p class="busca-dica">Nada encontrado para <b>' + U.escapar(texto) + '</b>. ' +
        'Tente outra palavra, ou <a href="contato.html">pergunte ao NAE</a>.</p>';
      avisar('Nada encontrado.');
      return;
    }

    var html = '';

    /* quando corrigimos a digitação, a pessoa precisa saber */
    if (conserto.trocas.length) {
      html += '<p class="busca-corrigido">Mostrando resultados para <b>' +
        conserto.trocas.map(function (t) { return U.escapar(t.para); }).join('</b>, <b>') +
        '</b></p>';
    }

    html += achados.map(function (a) {
      var it = a.e.item;
      return '<a class="busca-item" href="' + U.escapar(it.u) + '">' +
               '<span class="bi-t">' + U.escapar(it.t) + '</span>' +
               '<span class="bi-d">' + U.escapar(it.d) + '</span>' +
             '</a>';
    }).join('');

    if (achadosData.length) {
      html += '<p class="busca-secao">Datas no calendário</p>' +
        achadosData.map(function (x) {
          var ev = x.ev;
          return '<a class="busca-item busca-data" href="calendario.html" style="--c: var(--lilas)">' +
                   '<span class="bi-t"><span class="bi-quando">' + U.escapar(quandoFoi(ev)) + '</span>' +
                     U.escapar(ev.titulo) + '</span>' +
                 '</a>';
        }).join('');
    }

    if (achadosAviso.length) {
      html += '<p class="busca-secao">Avisos do NAE</p>' +
        achadosAviso.map(function (x) {
          var av = x.av;
          return '<a class="busca-item" href="' + U.escapar(av.link || 'avisos.html') + '"' +
                   ' style="--c: var(--turquesa)">' +
                   '<span class="bi-d">' + U.escapar(av.texto) + '</span>' +
                 '</a>';
        }).join('');
    }

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

    var total = achados.length + disciplinas.length + achadosData.length + achadosAviso.length;
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
