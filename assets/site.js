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

  /* ── Alto contraste ───────────────────────────────── */
  (function altoContraste() {
    var ligado = ler('contraste') === 'sim';
    function aplicar() {
      if (ligado) document.documentElement.setAttribute('data-contraste', 'alto');
      else document.documentElement.removeAttribute('data-contraste');
      document.querySelectorAll('[data-contraste-btn]').forEach(function (b) {
        b.setAttribute('aria-pressed', ligado ? 'true' : 'false');
        b.setAttribute('title', ligado ? 'Desligar o alto contraste' : 'Ligar o alto contraste');
      });
    }
    aplicar();
    document.querySelectorAll('[data-contraste-btn]').forEach(function (b) {
      b.addEventListener('click', function () {
        ligado = !ligado;
        guardar('contraste', ligado ? 'sim' : 'nao');
        aplicar();
        toast(ligado ? 'Alto contraste ligado.' : 'Alto contraste desligado.');
      });
    });
  })();

  /* ── Atalho da minha turma no menu ────────────────── */
  (function atalhoTurma() {
    var id = ler('turma');
    if (!id) return;
    var menu = document.querySelector('.nav-in');
    if (!menu || menu.querySelector('[data-atalho-turma]')) return;

    var rotulo = 'Minha turma';
    if (window.DADOS_HORARIOS) {
      var t = (window.DADOS_HORARIOS.turmas || []).filter(function (x) { return x.id === id; })[0];
      if (t) rotulo = t.periodo + ' de ' + (t.curso === 'Direito' ? 'Direito' : 'Engenharia');
    }
    var a = document.createElement('a');
    a.className = 'nav-link nav-turma';
    a.setAttribute('data-atalho-turma', '');
    a.href = 'horarios.html?turma=' + encodeURIComponent(id);
    a.style.setProperty('--c', 'var(--verde)');
    a.innerHTML = '<i class="dot"></i>' + escapar(rotulo);
    a.title = 'Ir direto para a grade da sua turma';
    menu.appendChild(a);
  })();

  /* ── Submenus do topo ─────────────────────────────── */
  (function submenus() {
    /* No HTML os links de cada grupo ficam soltos dentro de um
       .nav-grupo, então sem JavaScript o menu continua sendo uma
       lista de links que funciona. Aqui eles são recolhidos em um
       painel que abre no clique, com teclado e leitor de tela. */
    var barra = document.querySelector('.nav');
    var faixa = document.querySelector('.nav-in');
    if (!barra || !faixa) return;

    var grupos = Array.prototype.slice.call(faixa.querySelectorAll('.nav-grupo'));
    if (!grupos.length) return;

    var painelAberto = null, botaoAberto = null;

    function fechar(devolverFoco) {
      if (!painelAberto) return;
      painelAberto.hidden = true;
      botaoAberto.setAttribute('aria-expanded', 'false');
      if (devolverFoco) botaoAberto.focus();
      painelAberto = null;
      botaoAberto = null;
    }

    function posicionar(botao, painel) {
      var rb = botao.getBoundingClientRect();
      var rn = barra.getBoundingClientRect();
      painel.style.top = rn.height + 'px';
      if (window.innerWidth <= 560) {
        painel.style.left = '.6rem';
        painel.style.right = '.6rem';
        return;
      }
      painel.style.right = 'auto';
      var largura = painel.offsetWidth;
      var esquerda = Math.min(rb.left - rn.left, rn.width - largura - 12);
      painel.style.left = Math.max(12, esquerda) + 'px';
    }

    function abrir(botao, painel) {
      fechar(false);
      painel.hidden = false;
      botao.setAttribute('aria-expanded', 'true');
      posicionar(botao, painel);
      painelAberto = painel;
      botaoAberto = botao;
    }

    grupos.forEach(function (grupo, i) {
      var rotulo = grupo.getAttribute('data-grupo') || 'Mais';
      var id = 'submenu-' + (i + 1);
      var links = Array.prototype.slice.call(grupo.querySelectorAll('a'));
      if (!links.length) return;

      var temAtual = links.some(function (a) { return a.getAttribute('aria-current') === 'page'; });

      var painel = document.createElement('div');
      painel.className = 'nav-painel';
      painel.id = id;
      painel.hidden = true;
      painel.setAttribute('role', 'group');
      painel.setAttribute('aria-label', rotulo);
      links.forEach(function (a) { painel.appendChild(a); });

      var botao = document.createElement('button');
      botao.type = 'button';
      botao.className = 'nav-link nav-botao' + (temAtual ? ' tem-atual' : '');
      botao.id = 'botao-' + id;
      botao.setAttribute('aria-expanded', 'false');
      botao.setAttribute('aria-controls', id);
      botao.innerHTML = '<i class="dot"></i>' + escapar(rotulo) +
                        '<span class="nav-seta" aria-hidden="true">▾</span>';
      painel.setAttribute('aria-labelledby', botao.id);

      grupo.appendChild(botao);
      barra.appendChild(painel);

      botao.addEventListener('click', function () {
        if (painel.hidden) abrir(botao, painel); else fechar(false);
      });

      botao.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
          if (painel.hidden) {
            e.preventDefault();
            abrir(botao, painel);
            links[0].focus();
          }
        }
      });

      painel.addEventListener('keydown', function (e) {
        var onde = links.indexOf(document.activeElement);
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
          e.preventDefault();
          var passo = e.key === 'ArrowDown' ? 1 : -1;
          var proximo = (onde + passo + links.length) % links.length;
          links[proximo].focus();
        } else if (e.key === 'Home') {
          e.preventDefault(); links[0].focus();
        } else if (e.key === 'End') {
          e.preventDefault(); links[links.length - 1].focus();
        }
      });
    });

    /* Escape fecha e devolve o foco ao botão; clique fora e rolagem fecham */
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && painelAberto) fechar(true);
    });
    document.addEventListener('click', function (e) {
      if (!painelAberto) return;
      if (painelAberto.contains(e.target) || botaoAberto.contains(e.target)) return;
      fechar(false);
    });
    document.addEventListener('focusin', function (e) {
      if (!painelAberto) return;
      if (painelAberto.contains(e.target) || botaoAberto.contains(e.target)) return;
      fechar(false);
    });
    faixa.addEventListener('scroll', function () { fechar(false); }, { passive: true });
    window.addEventListener('resize', function () { fechar(false); });
  })();

  /* ── Pista de rolagem do menu ─────────────────────── */
  (function pistaDoMenu() {
    /* a faixa de seções rola para os lados e não dava sinal disso:
       no celular o estudante via dois itens e meio e não sabia que
       havia mais. O degradê acende só do lado em que há menu escondido */
    var faixa = document.querySelector('.nav-in');
    if (!faixa) return;
    var barra = faixa.parentNode;
    if (!barra || !barra.classList.contains('nav')) return;

    var pendente = null;
    function medir() {
      var sobra = faixa.scrollWidth - faixa.clientWidth;
      var posicao = Math.round(faixa.scrollLeft);
      barra.classList.toggle('tem-mais', sobra > 8 && posicao < sobra - 4);
      barra.classList.toggle('tem-antes', posicao > 4);
    }
    function adiar() {
      if (pendente) return;
      pendente = setTimeout(function () { pendente = null; medir(); }, 80);
    }

    faixa.addEventListener('scroll', adiar, { passive: true });
    window.addEventListener('resize', adiar);
    /* o A+ e o A- mudam a largura dos itens, então vale medir de novo */
    document.querySelectorAll('[data-fonte-mais], [data-fonte-menos]').forEach(function (b) {
      b.addEventListener('click', function () { setTimeout(medir, 60); });
    });
    medir();
  })();

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

    /* guarda TODOS os avisos que o aluno já fechou, não só o último:
       com um só, fechar o segundo fazia o primeiro voltar a aparecer */
    function lerFechados() {
      var lista = [];
      try { lista = JSON.parse(ler('avisos-fechados') || '[]'); } catch (e) { lista = []; }
      if (!Array.isArray(lista)) lista = [];
      var antigo = ler('aviso-fechado');   /* formato anterior, de um aviso só */
      if (antigo && lista.indexOf(antigo) === -1) lista.push(antigo);
      return lista;
    }

    var todos = window.DADOS_AVISOS.avisos || [];
    var fechados = lerFechados();
    var hoje = hojeISO();
    var vigentes = todos.filter(function (a) {
      if (a.de && a.de > hoje) return false;      /* agendado, ainda não chegou a hora */
      if (a.ate && a.ate < hoje) return false;    /* venceu, vive no mural */
      return fechados.indexOf(a.texto) === -1;
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
      fechados.push(a.texto);
      /* só continua guardando o que ainda existe na lista de avisos,
         para a memória do navegador não crescer sem fim */
      var textosVivos = todos.map(function (x) { return x.texto; });
      var limpos = fechados.filter(function (t, i) {
        return textosVivos.indexOf(t) !== -1 && fechados.indexOf(t) === i;
      });
      guardar('avisos-fechados', JSON.stringify(limpos));
      apagar('aviso-fechado');
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

  /* ── Texto pronto para o grupo ────────────────────── */
  document.querySelectorAll('[data-texto-grupo]').forEach(function (b) {
    b.addEventListener('click', function () {
      var titulo = b.getAttribute('data-titulo') || document.title.split('·')[0].trim();
      var chamada = b.getAttribute('data-texto-grupo');
      var url = b.getAttribute('data-url') || 'https://naeguanhaes.github.io/';
      var msg = '*NAE · Núcleo de Apoio ao Estudante · UEMG Guanhães*\n\n' +
                '*' + titulo + '*\n' + chamada + '\n\n' + url;
      copiarTexto(msg, function () {
        toast('Mensagem copiada! Agora é só colar no grupo.');
      });
    });
  });

  /* ── Cronômetro de estudos ────────────────────────── */
  (function cronometro() {
    var caixa = document.getElementById('cronometro');
    if (!caixa) return;

    var FASES = {
      foco:   { minutos: 25, rotulo: 'Foco', frase: 'Vinte e cinco minutos só nisso. Deixe o celular longe.' },
      pausa:  { minutos: 5,  rotulo: 'Pausa curta', frase: 'Levante, beba água, olhe para longe da tela.' },
      longa:  { minutos: 15, rotulo: 'Pausa longa', frase: 'Você fechou quatro blocos. Descanse de verdade.' }
    };

    var fase = 'foco', restam = FASES.foco.minutos * 60, rodando = false, timer = null, ciclos = 0;

    var visor  = caixa.querySelector('[data-cro-visor]');
    var selo   = caixa.querySelector('[data-cro-fase]');
    var frase  = caixa.querySelector('[data-cro-frase]');
    var btnIr  = caixa.querySelector('[data-cro-ir]');
    var btnZero = caixa.querySelector('[data-cro-zerar]');
    var conta  = caixa.querySelector('[data-cro-ciclos]');

    function pintar() {
      var m = Math.floor(restam / 60), s = restam % 60;
      visor.textContent = String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
      selo.textContent = FASES[fase].rotulo;
      frase.textContent = FASES[fase].frase;
      caixa.setAttribute('data-fase', fase);
      btnIr.textContent = rodando ? 'Pausar' : (restam === FASES[fase].minutos * 60 ? 'Começar' : 'Continuar');
      conta.textContent = ciclos === 0 ? 'Nenhum bloco fechado ainda'
        : ciclos === 1 ? '1 bloco de foco fechado hoje'
        : ciclos + ' blocos de foco fechados hoje';
      document.title = rodando ? visor.textContent + ' · ' + FASES[fase].rotulo : tituloOriginal;
    }

    var tituloOriginal = document.title;

    function trocarFase() {
      if (fase === 'foco') {
        ciclos++;
        fase = (ciclos % 4 === 0) ? 'longa' : 'pausa';
      } else {
        fase = 'foco';
      }
      restam = FASES[fase].minutos * 60;
      rodando = false;
      if (timer) { clearInterval(timer); timer = null; }
      toast(fase === 'foco' ? 'Pausa encerrada. Bora para mais um bloco.' : 'Bloco fechado! Hora da pausa.');
      pintar();
    }

    function tique() {
      restam--;
      if (restam <= 0) { trocarFase(); return; }
      pintar();
    }

    btnIr.addEventListener('click', function () {
      rodando = !rodando;
      if (rodando) timer = setInterval(tique, 1000);
      else if (timer) { clearInterval(timer); timer = null; }
      pintar();
    });

    btnZero.addEventListener('click', function () {
      if (timer) { clearInterval(timer); timer = null; }
      fase = 'foco'; restam = FASES.foco.minutos * 60; rodando = false; ciclos = 0;
      pintar();
    });

    pintar();
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
