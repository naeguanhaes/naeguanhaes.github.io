/* ═══════════════════════════════════════════════════════
   NAE Guanhães · comportamentos compartilhados
   Expõe utilidades em window.NAE para as outras páginas.
   ═══════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var reduzir = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── Utilidades ───────────────────────────────────── */
  var DIAS_CURTOS = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  var MESES = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
               'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

  function guardar(chave, valor) {
    try { window.localStorage.setItem('nae:' + chave, valor); } catch (e) {}
  }
  function ler(chave) {
    try { return window.localStorage.getItem('nae:' + chave); } catch (e) { return null; }
  }
  function apagar(chave) {
    try { window.localStorage.removeItem('nae:' + chave); } catch (e) {}
  }

  function minutosDe(hhmm) {
    if (!hhmm) return null;
    var p = hhmm.split(':');
    return parseInt(p[0], 10) * 60 + parseInt(p[1], 10);
  }

  function escapar(s) {
    return String(s).replace(/[&<>"]/g, function (ch) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch];
    });
  }

  function normaliza(s) {
    return String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  }

  function dataBR(iso) {
    var p = String(iso).split('-');
    return p[2] + '/' + p[1] + '/' + p[0];
  }

  function hojeISO(d) {
    d = d || new Date();
    var m = String(d.getMonth() + 1).padStart(2, '0');
    var dia = String(d.getDate()).padStart(2, '0');
    return d.getFullYear() + '-' + m + '-' + dia;
  }

  /* ── Aviso em balão (toast) ───────────────────────── */
  var toastEl = null, toastTimer = null;
  function toast(msg) {
    if (!toastEl) {
      toastEl = document.createElement('div');
      toastEl.className = 'toast';
      toastEl.setAttribute('role', 'status');
      document.body.appendChild(toastEl);
    }
    toastEl.textContent = msg;
    toastEl.classList.add('no-ar');
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove('no-ar'); }, 2400);
  }

  function copiarTexto(texto, aoCopiar) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(texto).then(aoCopiar, function () {});
    } else {
      var ta = document.createElement('textarea');
      ta.value = texto; document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy'); aoCopiar(); } catch (e) {}
      document.body.removeChild(ta);
    }
  }

  window.NAE = {
    DIAS_CURTOS: DIAS_CURTOS,
    MESES: MESES,
    guardar: guardar, ler: ler, apagar: apagar,
    minutosDe: minutosDe, escapar: escapar, normaliza: normaliza,
    dataBR: dataBR, hojeISO: hojeISO,
    toast: toast, copiar: copiarTexto,
    reduzir: reduzir
  };

  /* ── Copiar com um toque ──────────────────────────── */
  document.querySelectorAll('[data-copiar]').forEach(function (b) {
    b.addEventListener('click', function () {
      copiarTexto(b.getAttribute('data-copiar'), function () {
        toast(b.getAttribute('data-copiado') || 'Copiado com sucesso!');
      });
    });
  });

  /* ── Tamanho do texto (A- / A+) ───────────────────── */
  (function tamanhoDoTexto() {
    var MIN = 0, MAX = 3;
    var atual = parseInt(ler('fonte') || '1', 10);
    if (isNaN(atual) || atual < MIN || atual > MAX) atual = 1;

    function aplicar() {
      if (atual === 1) document.documentElement.removeAttribute('data-fonte');
      else document.documentElement.setAttribute('data-fonte', String(atual));
      guardar('fonte', String(atual));
    }
    aplicar();

    document.querySelectorAll('[data-fonte-mais], [data-fonte-menos]').forEach(function (b) {
      b.addEventListener('click', function () {
        var mais = b.hasAttribute('data-fonte-mais');
        var novo = atual + (mais ? 1 : -1);
        if (novo < MIN || novo > MAX) {
          toast(mais ? 'Este já é o maior tamanho de letra.' : 'Este já é o menor tamanho de letra.');
          return;
        }
        atual = novo; aplicar();
        toast('Tamanho do texto: ' + ['menor', 'normal', 'grande', 'muito grande'][atual] + '.');
      });
    });
  })();

  /* ── Faixa de avisos ──────────────────────────────── */
  (function avisos() {
    var caixa = document.getElementById('avisos');
    if (!caixa || !window.DADOS_AVISOS) return;

    var hoje = hojeISO();
    var vigentes = (window.DADOS_AVISOS.avisos || []).filter(function (a) {
      if (a.ate && a.ate < hoje) return false;
      return ler('aviso-fechado') !== a.texto;
    });
    if (!vigentes.length) return;

    var rotulos = { urgente: 'Atenção', atencao: 'Lembrete', novidade: 'Novidade' };
    var a = vigentes[0];
    var tipo = a.tipo || 'novidade';

    var el = document.createElement('div');
    el.className = 'aviso ' + tipo;
    el.setAttribute('role', 'status');
    el.innerHTML =
      '<div class="wrap">' +
        '<span class="selo">' + escapar(rotulos[tipo] || 'Aviso') + '</span>' +
        '<span>' + escapar(a.texto) + '</span>' +
        (a.link ? ' <a href="' + escapar(a.link) + '">' + escapar(a.textoLink || 'saiba mais') + ' →</a>' : '') +
        '<button class="fechar" type="button" aria-label="Fechar aviso">×</button>' +
      '</div>';
    caixa.appendChild(el);

    el.querySelector('.fechar').addEventListener('click', function () {
      guardar('aviso-fechado', a.texto);
      el.remove();
    });
  })();

  /* ── Carimbo de atualização ───────────────────────── */
  document.querySelectorAll('[data-atualizado]').forEach(function (el) {
    var fonte = el.getAttribute('data-atualizado');
    var dados = fonte === 'horarios' ? window.DADOS_HORARIOS
              : fonte === 'calendario' ? window.DADOS_CALENDARIO
              : window.DADOS_AVISOS;
    if (dados && dados.atualizadoEm) {
      el.textContent = 'Conferido em ' + dataBR(dados.atualizadoEm);
    } else {
      el.remove();
    }
  });

  /* ── Revelação suave ao rolar ─────────────────────── */
  var alvos = document.querySelectorAll('.reveal');
  if (alvos.length) {
    if (reduzir || !('IntersectionObserver' in window)) {
      alvos.forEach(function (el) { el.classList.add('visivel'); });
    } else {
      var obs = new IntersectionObserver(function (ents) {
        ents.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add('visivel'); obs.unobserve(e.target); }
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: .05 });
      alvos.forEach(function (el) { obs.observe(el); });
    }
  }

  /* ── Carrossel ────────────────────────────────────── */
  document.querySelectorAll('[data-carrossel]').forEach(function (car) {
    var trilho = car.querySelector('.trilho');
    var slides = Array.prototype.slice.call(trilho.children);
    var caixaPontos = car.querySelector('.pontos');
    var btnPrev = car.querySelector('[data-seta="prev"]');
    var btnNext = car.querySelector('[data-seta="next"]');
    if (slides.length < 2) return;

    var atual = 0, timer = null, pausado = false;

    function visiveis() {
      var largura = slides[0].getBoundingClientRect().width;
      return Math.max(1, Math.round(trilho.clientWidth / (largura || 1)));
    }
    function maximo() { return Math.max(0, slides.length - visiveis()); }

    function irPara(i, suave) {
      atual = Math.min(Math.max(i, 0), maximo());
      trilho.scrollTo({
        left: slides[atual].offsetLeft - slides[0].offsetLeft,
        behavior: suave === false || reduzir ? 'auto' : 'smooth'
      });
      sincronizar();
    }
    function detectar() {
      var pos = trilho.scrollLeft + slides[0].offsetLeft;
      var melhor = 0, dist = Infinity;
      slides.forEach(function (s, i) {
        var d = Math.abs(s.offsetLeft - pos);
        if (d < dist) { dist = d; melhor = i; }
      });
      atual = melhor; sincronizar();
    }
    function sincronizar() {
      if (caixaPontos) {
        Array.prototype.forEach.call(caixaPontos.children, function (p, i) {
          p.setAttribute('aria-current', i === atual ? 'true' : 'false');
        });
      }
      if (btnPrev) btnPrev.disabled = atual <= 0;
      if (btnNext) btnNext.disabled = atual >= maximo();
    }

    if (caixaPontos) {
      slides.forEach(function (s, i) {
        var p = document.createElement('button');
        p.type = 'button'; p.className = 'ponto';
        p.setAttribute('aria-label', 'Ir para o item ' + (i + 1) + ' de ' + slides.length);
        p.addEventListener('click', function () { irPara(i); reiniciar(); });
        caixaPontos.appendChild(p);
      });
    }
    if (btnPrev) btnPrev.addEventListener('click', function () { irPara(atual - 1); reiniciar(); });
    if (btnNext) btnNext.addEventListener('click', function () { irPara(atual + 1); reiniciar(); });

    var pendente = null;
    trilho.addEventListener('scroll', function () {
      if (pendente) return;
      pendente = setTimeout(function () { pendente = null; detectar(); }, 120);
    }, { passive: true });
    window.addEventListener('resize', sincronizar);

    function avancar() { if (!pausado && !document.hidden) irPara(atual >= maximo() ? 0 : atual + 1); }
    function iniciar() { if (!reduzir && !timer) timer = setInterval(avancar, 6000); }
    function parar() { if (timer) { clearInterval(timer); timer = null; } }
    function reiniciar() { parar(); iniciar(); }

    ['mouseenter', 'focusin', 'touchstart', 'pointerdown'].forEach(function (ev) {
      car.addEventListener(ev, function () { pausado = true; }, { passive: true });
    });
    ['mouseleave', 'focusout'].forEach(function (ev) {
      car.addEventListener(ev, function () { pausado = false; }, { passive: true });
    });
    document.addEventListener('visibilitychange', function () { document.hidden ? parar() : iniciar(); });

    sincronizar(); iniciar();
  });

  /* ── Montador do endereço institucional ───────────── */
  var nome = document.getElementById('in-nome');
  var mat  = document.getElementById('in-mat');
  var out  = document.getElementById('out-email');

  if (nome && mat && out) {
    var aviso = document.getElementById('copiado');
    var limpar = function (v, soNumero) {
      v = (v || '').trim().toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
      return soNumero ? v.replace(/\D/g, '') : v.replace(/[^a-z]/g, '');
    };
    var montar = function () {
      out.textContent = (limpar(nome.value, false) || 'cicrano') + '.' +
                        (limpar(mat.value, true) || '0000000') + '@discente.uemg.br';
      if (aviso) aviso.hidden = true;
    };
    nome.addEventListener('input', montar);
    mat.addEventListener('input', montar);

    var btnCopiar = document.getElementById('btn-copiar');
    if (btnCopiar) {
      btnCopiar.addEventListener('click', function () {
        var texto = out.textContent;
        var ok = function () {
          if (!aviso) return;
          aviso.hidden = false;
          setTimeout(function () { aviso.hidden = true; }, 2200);
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(texto).then(ok, function () {});
        } else {
          var ta = document.createElement('textarea');
          ta.value = texto; document.body.appendChild(ta); ta.select();
          try { document.execCommand('copy'); ok(); } catch (e) {}
          document.body.removeChild(ta);
        }
      });
    }
  }


  /* ── Contagem regressiva do hero ──────────────────── */
  (function contagem() {
    var caixa = document.getElementById('contagem-hero');
    if (!caixa || !window.DADOS_CALENDARIO) return;

    var hoje = hojeISO();
    var proximo = (window.DADOS_CALENDARIO.eventos || [])
      .filter(function (ev) { return !ev.semData && ev.ini >= hoje; })
      .sort(function (a, b) { return a.ini < b.ini ? -1 : 1; })[0];
    if (!proximo) { caixa.remove(); return; }

    var dias = Math.round((new Date(proximo.ini + 'T12:00:00') - new Date(hoje + 'T12:00:00')) / 86400000);
    var quando = dataBR(proximo.ini).slice(0, 5);
    var texto;
    if (dias === 0) texto = '<b>É hoje:</b> <span>' + escapar(proximo.titulo) + '</span>';
    else if (dias === 1) texto = '<b>Amanhã:</b> <span>' + escapar(proximo.titulo) + '</span>';
    else texto = 'Faltam <b>' + dias + ' dias</b> para: <span>' + escapar(proximo.titulo) + ' (' + quando + ')</span>';

    caixa.innerHTML = '<span class="hc-dot" aria-hidden="true"></span>' + texto;
    caixa.hidden = false;
  })();

  /* ── Novidades do site ────────────────────────────── */
  (function novidades() {
    var caixa = document.getElementById('novidades-lista');
    if (!caixa || !window.DADOS_NOVIDADES) return;

    var itens = (window.DADOS_NOVIDADES.itens || []).slice(0, 4);
    if (!itens.length) { caixa.innerHTML = '<p class="agora-vazio">Nada de novo por aqui no momento.</p>'; return; }

    caixa.innerHTML = itens.map(function (n) {
      var p = String(n.data).split('-');
      var quando = p[2] + '/' + p[1];
      return '<div class="novidade">' +
               '<span class="quando">' + escapar(quando) + '</span>' +
               '<span class="oque">' +
                 '<b>' + escapar(n.titulo) + '</b>' +
                 '<span>' + escapar(n.texto) +
                   (n.link ? ' <a href="' + escapar(n.link) + '">' + escapar(n.textoLink || 'ver') + ' →</a>' : '') +
                 '</span>' +
               '</span>' +
             '</div>';
    }).join('');
  })();

  /* ── Compartilhar ─────────────────────────────────── */
  document.querySelectorAll('[data-compartilhar]').forEach(function (b) {
    var titulo = b.getAttribute('data-titulo') || document.title;
    var texto = b.getAttribute('data-texto') || '';
    var url = b.getAttribute('data-url') || window.location.href;

    b.addEventListener('click', function (e) {
      if (navigator.share) {
        e.preventDefault();
        navigator.share({ title: titulo, text: texto, url: url }).catch(function () {});
      }
      /* sem Web Share (desktop), o próprio href abre o WhatsApp */
    });
    if (!b.getAttribute('href')) {
      b.setAttribute('href', 'https://wa.me/?text=' + encodeURIComponent(texto + ' ' + url));
      b.setAttribute('target', '_blank');
      b.setAttribute('rel', 'noopener noreferrer');
    }
  });

  /* ── Instalar o site (PWA) ────────────────────────── */
  if ('serviceWorker' in navigator && location.protocol === 'https:') {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('sw.js').catch(function () {});
    });
  }

  var pedidoInstalar = null;
  var btnInstalar = document.getElementById('btn-instalar');
  window.addEventListener('beforeinstallprompt', function (e) {
    e.preventDefault();
    pedidoInstalar = e;
    if (btnInstalar) btnInstalar.hidden = false;
  });
  var ehIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) ||
              (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  var jaInstalado = (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) ||
                    navigator.standalone === true;

  function passosIOS(botao) {
    if (document.getElementById('passos-ios')) {
      document.getElementById('passos-ios').scrollIntoView({ behavior: reduzir ? 'auto' : 'smooth', block: 'center' });
      return;
    }
    var caixa = document.createElement('div');
    caixa.id = 'passos-ios';
    caixa.className = 'card reveal visivel';
    caixa.style.setProperty('--c', 'var(--turquesa)');
    caixa.style.marginTop = 'var(--s3)';
    caixa.innerHTML =
      '<span class="rotulo">No iPhone e no iPad</span>' +
      '<h3>Três toques para deixar o NAE na tela inicial</h3>' +
      '<ul class="limpa" style="--c: var(--turquesa)">' +
        '<li>Toque no botão <b>Compartilhar</b>, o quadradinho com a seta para cima, na barra do Safari.</li>' +
        '<li>Deslize a lista e escolha <b>Adicionar à Tela de Início</b>.</li>' +
        '<li>Toque em <b>Adicionar</b>, no canto superior direito.</li>' +
      '</ul>' +
      '<p style="font-size:.92rem;color:var(--muted)">' +
        'Se você abriu este site pelo Instagram ou pelo WhatsApp, primeiro toque nos três pontinhos ' +
        'e escolha <b>Abrir no Safari</b>, porque só por lá o iPhone oferece essa opção.' +
      '</p>' +
      '<div><button class="btn ghost pequeno" type="button" style="--c: var(--turquesa)">Entendi, fechar</button></div>';

    var destino = botao.closest('.hero') || botao.parentElement;
    destino.parentElement.insertBefore(caixa, destino.nextSibling);
    caixa.querySelector('button').addEventListener('click', function () { caixa.remove(); });
    caixa.scrollIntoView({ behavior: reduzir ? 'auto' : 'smooth', block: 'center' });
  }

  if (btnInstalar && !jaInstalado) {
    if (ehIOS) {
      /* a Apple não deixa o site oferecer a instalação: ensinamos o caminho */
      btnInstalar.hidden = false;
      btnInstalar.textContent = 'Instalar no iPhone';
      btnInstalar.addEventListener('click', function () { passosIOS(btnInstalar); });
    } else {
      btnInstalar.addEventListener('click', function () {
        if (!pedidoInstalar) return;
        pedidoInstalar.prompt();
        pedidoInstalar.userChoice.finally(function () {
          pedidoInstalar = null;
          btnInstalar.hidden = true;
        });
      });
    }
  }
})();
