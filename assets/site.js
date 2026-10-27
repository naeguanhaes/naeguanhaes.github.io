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

  /* ── Engrenagem do topo: A-, A+ e contraste ───────── */
  (function ajustesDeLeitura() {
    var botao = document.querySelector('[data-ajustes]');
    var painel = document.getElementById('ajustes-painel');
    if (!botao || !painel) return;

    function abrir(sim) {
      painel.hidden = !sim;
      botao.setAttribute('aria-expanded', sim ? 'true' : 'false');
    }
    botao.addEventListener('click', function (e) {
      e.stopPropagation();
      abrir(painel.hidden);
    });
    /* clique fora ou Esc fecham; os botões de dentro deixam aberto,
       para dar para apertar A+ duas vezes seguidas */
    document.addEventListener('click', function (e) {
      if (!painel.hidden && !painel.contains(e.target)) abrir(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !painel.hidden) { abrir(false); botao.focus(); }
    });
  })();

  /* ── Ouvir esta página (leitura em voz alta) ─────── */
  /* Fica na engrenagem, junto de A-, A+ e contraste. Usa a voz do próprio
     aparelho (Web Speech), em português, sem enviar nada para fora. Lê o
     conteúdo principal em pedaços curtos, porque alguns navegadores cortam
     falas longas. Sem suporte no navegador, o botão nem aparece. */
  (function ouvirPagina() {
    var painel = document.getElementById('ajustes-painel');
    var principal = document.getElementById('conteudo');
    if (!painel || !principal || !('speechSynthesis' in window) || !window.SpeechSynthesisUtterance) return;
    var fala = window.speechSynthesis;

    var linha = document.createElement('div');
    linha.className = 'ajustes-linha';
    var bt = document.createElement('button');
    bt.type = 'button';
    bt.className = 'btn-topo btn-ouvir';
    bt.setAttribute('aria-pressed', 'false');
    linha.appendChild(bt);
    painel.appendChild(linha);

    function rotulo(lendo) {
      bt.innerHTML = lendo
        ? '<span aria-hidden="true">■</span> Parar a leitura'
        : '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5 6 9H3v6h3l5 4z"></path><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"></path></svg> Ouvir esta página';
      bt.setAttribute('aria-pressed', lendo ? 'true' : 'false');
    }
    rotulo(false);

    function voz() {
      var vozes = fala.getVoices() || [];
      return vozes.filter(function (v) { return /^pt[-_]BR/i.test(v.lang); })[0] ||
             vozes.filter(function (v) { return /^pt/i.test(v.lang); })[0] || null;
    }

    function pedacos() {
      /* innerText já ignora o que está escondido na tela */
      var texto = (principal.innerText || '').replace(/[→←■◐·]/g, ' ').replace(/[ \t]+/g, ' ');
      var partes = [];
      texto.split(/\n+/).forEach(function (bloco) {
        bloco = bloco.trim();
        if (!bloco) return;
        (bloco.match(/[^.!?;:]+[.!?;:]*/g) || [bloco]).forEach(function (frase) {
          frase = frase.trim();
          while (frase.length > 220) {
            var corte = frase.lastIndexOf(' ', 220);
            if (corte < 60) corte = 220;
            partes.push(frase.slice(0, corte));
            frase = frase.slice(corte).trim();
          }
          if (frase) partes.push(frase);
        });
      });
      return partes;
    }

    var lendo = false;
    function parar() { lendo = false; fala.cancel(); rotulo(false); }

    bt.addEventListener('click', function () {
      if (lendo) { parar(); return; }
      fala.cancel();
      var fila = pedacos(), v = voz();
      if (!fila.length) return;
      lendo = true; rotulo(true);
      fila.forEach(function (t, i) {
        var u = new SpeechSynthesisUtterance(t);
        u.lang = 'pt-BR';
        if (v) u.voice = v;
        u.rate = 1;
        if (i === fila.length - 1) u.onend = function () { lendo = false; rotulo(false); };
        fala.speak(u);
      });
    });
    window.addEventListener('pagehide', function () { fala.cancel(); });
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

  /* ── Blocos de campanha, com prazo de validade ────── */
  (function linksComPrazo() {
    /* Qualquer elemento, link do menu ou bloco de página, pode trazer
       data-ate="AAAA-MM-DD". Passada a data, ele se retira sozinho, em todas as páginas de uma vez, sem ninguém
       precisar lembrar de editar 31 arquivos. Serve para divulgação de
       evento, que por natureza tem fim.
       Roda ANTES dos submenus, para o menu já se montar sem ele. */
    var hoje = hojeISO();
    Array.prototype.forEach.call(
      document.querySelectorAll('[data-ate]'),
      function (a) {
        var ate = a.getAttribute('data-ate');
        if (ate && hoje > ate && a.parentNode) a.parentNode.removeChild(a);
      }
    );
    /* O contrário: data-desde="AAAA-MM-DD" deixa o elemento escondido
       (o CSS esconde) até esse dia. Com os dois, um bloco "inscrições
       abertas" dá lugar a um "inscrições encerradas" na data certa. */
    Array.prototype.forEach.call(
      document.querySelectorAll('[data-desde]'),
      function (a) {
        if (hoje >= a.getAttribute('data-desde')) a.removeAttribute('data-desde');
      }
    );
    /* botão "Adicionar à agenda" sai sozinho depois do último dia do evento */
    Array.prototype.forEach.call(
      document.querySelectorAll('[data-agenda]'),
      function (a) {
        var fim = (a.getAttribute('data-fim') || a.getAttribute('data-inicio') || '').slice(0, 10);
        if (fim && hoje > fim && a.parentNode) a.parentNode.removeChild(a);
      }
    );
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
    /* cada carrossel pede o seu ritmo com data-intervalo, em milissegundos.
       Sem o atributo, seguem os 6 segundos de sempre. Com data-intervalo="0"
       o carrossel para de girar sozinho, mas continua respondendo ao arrasto,
       ao teclado e as bolinhas: e um carrossel parado, nao um bloco fixo. */
    var pedido = car.getAttribute('data-intervalo');
    var intervalo = pedido === null ? 6000 : parseInt(pedido, 10);
    if (isNaN(intervalo)) intervalo = 6000;
    function iniciar() {
      if (!reduzir && !timer && intervalo > 0) timer = setInterval(avancar, intervalo);
    }
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


  /* ── Aviso de prazo ───────────────────────────────────
     Sem servidor não existe notificação enviada de fora: o site é só
     arquivos parados no GitHub. O que dá para fazer, e é honesto dizer,
     é avisar quando o estudante abre o site ou o aplicativo instalado.
     Onde o navegador oferece sincronização periódica (Android com o site
     instalado), o próprio sistema abre o site de tempos em tempos e o
     aviso chega sozinho. */
  (function avisoDePrazo() {
    var DIAS = 3;
    var botao = document.getElementById('btn-avisos-prazo');
    var estado = document.getElementById('avisos-prazo-estado');

    function suportado() {
      return 'Notification' in window && location.protocol === 'https:';
    }

    function proximos() {
      if (!window.DADOS_CALENDARIO) return [];
      var hoje = hojeISO();
      var limite = new Date();
      limite.setDate(limite.getDate() + DIAS);
      var ate = hojeISO(limite);
      return (window.DADOS_CALENDARIO.eventos || []).filter(function (ev) {
        return !ev.semData && ev.tipo !== 'feriado' && ev.ini >= hoje && ev.ini <= ate;
      });
    }

    function jaAvisou(ev) {
      return (ler('avisado') || '').split('|').indexOf(ev.ini + ev.titulo) !== -1;
    }
    function marcarAvisado(ev) {
      var lista = (ler('avisado') || '').split('|').filter(Boolean);
      lista.push(ev.ini + ev.titulo);
      guardar('avisado', lista.slice(-40).join('|'));
    }

    function disparar() {
      if (!suportado() || Notification.permission !== 'granted') return 0;
      var lista = proximos().filter(function (ev) { return !jaAvisou(ev); });
      lista.forEach(function (ev) {
        var dias = Math.round((new Date(ev.ini + 'T12:00:00') - new Date(hojeISO() + 'T12:00:00')) / 86400000);
        var quando = dias === 0 ? 'é hoje' : dias === 1 ? 'é amanhã' : 'em ' + dias + ' dias';
        try {
          new Notification('NAE Guanhães', {
            body: ev.titulo + ', ' + quando + '.',
            icon: 'assets/icone-192.png',
            badge: 'assets/favicon-nae.png',
            tag: 'prazo-' + ev.ini
          });
          marcarAvisado(ev);
        } catch (e) {}
      });
      return lista.length;
    }

    /* pede ao navegador para reabrir o site de vez em quando */
    function pedirSincronizacao() {
      if (!('serviceWorker' in navigator) || !('periodicSync' in ServiceWorkerRegistration.prototype)) return;
      navigator.serviceWorker.ready.then(function (reg) {
        if (!reg.periodicSync) return;
        reg.periodicSync.register('conferir-prazos', { minInterval: 12 * 60 * 60 * 1000 }).catch(function () {});
      });
    }

    function pintar() {
      if (!botao || !estado) return;
      if (!suportado()) {
        botao.hidden = true;
        estado.textContent = 'Este navegador não oferece aviso de prazo. Continue conferindo o calendário por aqui.';
        return;
      }
      if (Notification.permission === 'granted') {
        botao.hidden = true;
        var quantos = proximos().length;
        estado.innerHTML = '<b>Avisos ligados.</b> ' + (quantos
          ? 'Há ' + quantos + (quantos === 1 ? ' prazo' : ' prazos') + ' nos próximos ' + DIAS + ' dias.'
          : 'Nenhum prazo nos próximos ' + DIAS + ' dias.');
      } else if (Notification.permission === 'denied') {
        botao.hidden = true;
        estado.textContent = 'Você bloqueou os avisos para este site. Para voltar atrás, libere as notificações nas configurações do navegador.';
      } else {
        botao.hidden = false;
        estado.textContent = '';
      }
    }

    if (botao) {
      botao.addEventListener('click', function () {
        if (!suportado()) return;
        Notification.requestPermission().then(function (r) {
          pintar();
          if (r === 'granted') {
            pedirSincronizacao();
            var n = disparar();
            toast(n ? 'Avisos ligados. Você tem prazo chegando.'
                    : 'Avisos ligados. Nada nos próximos ' + DIAS + ' dias.');
          } else {
            toast('Tudo bem, os prazos continuam no calendário.');
          }
        });
      });
      pintar();
    }

    /* em toda visita, avisa o que ainda não avisou */
    if (suportado() && Notification.permission === 'granted') {
      pedirSincronizacao();
      setTimeout(disparar, 1500);
    }
  })();

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
    var nome = proximo.curto || proximo.titulo;
    var texto;
    if (dias === 0) texto = '<b>É hoje:</b> <span>' + escapar(nome) + '</span>';
    else if (dias === 1) texto = '<b>Amanhã:</b> <span>' + escapar(nome) + '</span>';
    else texto = 'Faltam <b>' + dias + ' dias</b> para: <span>' + escapar(nome) + ' (' + quando + ')</span>';

    caixa.innerHTML = '<span class="hc-dot" aria-hidden="true"></span>' + texto;
    caixa.hidden = false;
  })();

  /* ── Novidades do site ────────────────────────────── */
  /* No quadro da inicial e do Sobre, as 4 mais recentes e o link para a
     página com todas. Com data-todas (novidades.html), a lista inteira,
     separada por mês. */
  (function novidades() {
    var caixa = document.getElementById('novidades-lista');
    if (!caixa || !window.DADOS_NOVIDADES) return;

    var todas = window.DADOS_NOVIDADES.itens || [];
    var completa = caixa.hasAttribute('data-todas');
    var itens = completa ? todas : todas.slice(0, 4);
    if (!itens.length) { caixa.innerHTML = '<p class="agora-vazio">Nada de novo por aqui no momento.</p>'; return; }

    function linha(n) {
      var p = String(n.data).split('-');
      var quando = p[2] + '/' + p[1];
      return '<div class="novidade">' +
               '<span class="quando">' + escapar(quando) + '</span>' +
               '<span class="oque">' +
                 /* com página, o título também leva até ela */
                 (n.link ? '<b><a class="titulo-link" href="' + escapar(n.link) + '">' + escapar(n.titulo) + '</a></b>'
                         : '<b>' + escapar(n.titulo) + '</b>') +
                 '<span>' + escapar(n.texto) +
                   (n.link ? ' <a href="' + escapar(n.link) + '">' + escapar(n.textoLink || 'ver') + ' →</a>' : '') +
                 '</span>' +
               '</span>' +
             '</div>';
    }

    if (!completa) {
      caixa.innerHTML = itens.map(linha).join('') +
        (todas.length > itens.length
          ? '<p class="novidades-mais"><a href="novidades.html">Ver todas as novidades (' + todas.length + ') →</a></p>'
          : '');
      return;
    }
    var html = '', mesAtual = '';
    itens.forEach(function (n) {
      var p = String(n.data).split('-');
      var mes = MESES[parseInt(p[1], 10) - 1] + ' de ' + p[0];
      if (mes !== mesAtual) {
        if (mesAtual) html += '</div>';
        html += '<h2 class="novidades-mes">' + mes.charAt(0).toUpperCase() + mes.slice(1) + '</h2><div class="novidades-lista">';
        mesAtual = mes;
      }
      html += linha(n);
    });
    caixa.innerHTML = html + '</div>';
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

  /* ── Adicionar à agenda (.ics) ─────────────────────── */
  /* <button data-agenda data-titulo="..." data-inicio="2026-10-19T14:00"
             data-fim="2026-10-19T16:00" data-local="..." data-descricao="...">
     Sem hora (só AAAA-MM-DD), vira evento de dia inteiro; data-fim é o
     último dia, inclusive. Horário de Brasília, que não tem mais verão. */
  document.querySelectorAll('[data-agenda]').forEach(function (b) {
    b.addEventListener('click', function () {
      var ini = b.getAttribute('data-inicio');
      var fim = b.getAttribute('data-fim') || ini;
      var titulo = b.getAttribute('data-titulo') || document.title;
      var esc = function (t) { return String(t || '').replace(/([,;\\])/g, '\\$1').replace(/\n/g, '\\n'); };
      var comHora = ini.indexOf('T') > 0;
      function utc(dt) {                       /* 2026-10-19T14:00 em Brasília -> 20261019T170000Z */
        var d = new Date(dt + ':00-03:00');
        return d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
      }
      function dia(d, mais) {
        var x = new Date(d + 'T12:00:00'); x.setDate(x.getDate() + (mais || 0));
        return hojeISO(x).replace(/-/g, '');
      }
      var url = b.getAttribute('data-url') || (location.origin + location.pathname + location.hash);
      var linhas = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//NAE Guanhaes//Agenda//PT-BR', 'CALSCALE:GREGORIAN',
        'BEGIN:VEVENT',
        'UID:' + ini.replace(/\W/g, '') + '-' + titulo.length + '@nae-guanhaes',
        'DTSTAMP:' + utc(hojeISO() + 'T12:00'),
        comHora ? 'DTSTART:' + utc(ini) : 'DTSTART;VALUE=DATE:' + dia(ini),
        comHora ? 'DTEND:' + utc(fim) : 'DTEND;VALUE=DATE:' + dia(fim.slice(0, 10), 1),
        'SUMMARY:' + esc(titulo),
        'DESCRIPTION:' + esc((b.getAttribute('data-descricao') || '') + ' Mais informações: ' + url),
        'LOCATION:' + esc(b.getAttribute('data-local') || ''),
        'URL:' + url,
        'BEGIN:VALARM', 'ACTION:DISPLAY', 'DESCRIPTION:' + esc(titulo),
        comHora ? 'TRIGGER:-P1D' : 'TRIGGER:-PT15H',
        'END:VALARM',
        'END:VEVENT', 'END:VCALENDAR'];
      var blob = new Blob([linhas.join('\r\n')], { type: 'text/calendar;charset=utf-8' });
      var a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = nomeDoArquivo(titulo) + '.ics';
      document.body.appendChild(a); a.click();
      setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
      toast('Abra o arquivo para salvar na agenda do celular. Ele já vem com lembrete na véspera.');
    });
  });
  function nomeDoArquivo(t) {
    return String(t).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
      .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 60) || 'evento';
  }

  /* ── Versão para imprimir (guias do e-mail, Moodle e Lyceum) ── */
  /* Botão com data-imprimir. Antes de abrir a impressão: monta o cabeçalho
     da apostila (marca do NAE, endereço da página e QR para a versão
     on-line), carrega as telas adiadas e abre as seções fechadas. O visual
     do papel está na folha de estilo, em "VERSÃO PARA IMPRIMIR DOS GUIAS". */
  var botoesImprimir = document.querySelectorAll('[data-imprimir]');
  if (botoesImprimir.length) {
    var abertosParaImprimir = [];
    var prepararImpressao = function () {
      var main = document.querySelector('main');
      if (main && !document.querySelector('.impresso-topo')) {
        var caminho = location.pathname.split('/').pop() || 'index.html';
        var topo = document.createElement('div');
        topo.className = 'impresso-topo';
        topo.setAttribute('aria-hidden', 'true');
        topo.innerHTML =
          '<div><img src="assets/logo-topo.webp" alt="">' +
          '<p>Guia do NAE · UEMG Unidade Guanhães · impresso em ' + dataBR(hojeISO()) + '</p>' +
          '<p>Versão sempre atualizada: <b>naeguanhaes.github.io/' + escapar(caminho) + '</b></p></div>' +
          '<div class="impresso-qr"><div data-qr="' + escapar(caminho) + '"></div>aponte a câmera</div>';
        main.insertBefore(topo, main.firstChild);
        var qr = document.createElement('script');
        qr.src = 'assets/min/qr.min.js';
        document.body.appendChild(qr);
      }
      document.querySelectorAll('main details:not([open])').forEach(function (d) {
        d.open = true; abertosParaImprimir.push(d);
      });
      document.querySelectorAll('main .reveal').forEach(function (r) { r.style.transition = 'none'; r.classList.add('visivel'); });
    };
    window.addEventListener('beforeprint', prepararImpressao);
    window.addEventListener('afterprint', function () {
      abertosParaImprimir.forEach(function (d) { d.open = false; });
      abertosParaImprimir = [];
    });
    botoesImprimir.forEach(function (b) {
      b.addEventListener('click', function () {
        prepararImpressao();
        var esperas = Array.prototype.map.call(document.querySelectorAll('main img'), function (im) {
          im.loading = 'eager';
          if (im.complete) return Promise.resolve();
          return new Promise(function (ok) { im.addEventListener('load', ok); im.addEventListener('error', ok); });
        });
        b.disabled = true;
        Promise.race([Promise.all(esperas), new Promise(function (ok) { setTimeout(ok, 4000); })])
          .then(function () { setTimeout(function () { b.disabled = false; window.print(); }, 300); });
      });
    });
  }

  /* ── Compartilhar: um botão, WhatsApp ou Instagram ── */
  /* Pedido do coordenador (22/10/2026): onde houver compartilhamento, um
     botão só, "Compartilhar", que abre as duas opções. O HTML continua
     com o link do WhatsApp (wa.me, com a mensagem pronta), o botão dos
     Stories (data-stories) e o data-compartilhar; este bloco junta os que
     estão lado a lado em um "Compartilhar" e esconde os originais.

     No Instagram vai sempre uma imagem dos Stories (a da página, ou a geral
     do NAE). Todo endereço do site que sai pelo WhatsApp leva a etiqueta de
     origem (utm_source=whatsapp; utm_campaign = a âncora do evento ou a
     página), que o GoatCounter mostra em "Campaigns" e "Referrers". */
  var SITE = 'https://naeguanhaes.github.io/';
  var ICONE_PARTILHA = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/></svg>';
  var ICONE_WHATS = '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 00-8.6 15.1L2 22l5-1.3A10 10 0 1012 2zm0 18.2a8.2 8.2 0 01-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1112 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 01-3.3-2.9c-.3-.4.3-.4.7-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a.9.9 0 00-.7.3 2.8 2.8 0 00-.9 2.1 4.9 4.9 0 001 2.6 11.2 11.2 0 004.3 3.8c1.6.7 2.2.7 3 .6a2.6 2.6 0 001.7-1.2 2.1 2.1 0 00.1-1.2c0-.1-.2-.2-.4-.3z"/></svg>';
  var ICONE_INSTA = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>';

  /* imagem pronta para os Stories, por página (ou por âncora, quando uma
     página divulga mais de um evento), com validade opcional. Quem não tem
     imagem própria, ou passou da validade, usa a geral do NAE. As imagens
     saem de ferramentas/stories/ (stories.json + gerar.js). */
  var STORIES = {
    'mostra-profissoes': { img: 'assets/stories/mostra-profissoes.jpg', ate: '2026-11-13' },
    'peaes': { img: 'assets/stories/peaes.jpg', ate: '2026-11-16' },
    'assembleia': { img: 'assets/stories/assembleia-da.jpg', ate: '2026-10-28' },
    'diretorio-academico': { img: 'assets/stories/assembleia-da.jpg', ate: '2026-10-28' },
    'seminario': { img: 'assets/stories/seminario.jpg', ate: '2026-11-10' },
    'yoga-esmu': { img: 'assets/stories/yoga-esmu.jpg', ate: '2026-10-31' },
    'conecta-mente': { img: 'assets/stories/conecta-mente.jpg', ate: '2026-11-06' },
    'enade': { img: 'assets/stories/enade.jpg', ate: '2026-11-29' },
    'horarios': { img: 'assets/stories/horarios.jpg' },
    'calendario': { img: 'assets/stories/calendario.jpg' },
    'lyceum': { img: 'assets/stories/lyceum.jpg' },
    'moodle': { img: 'assets/stories/moodle.jpg' },
    'wifi': { img: 'assets/stories/wifi.jpg' }
  };
  var STORIES_GERAL = 'assets/stories/geral.jpg';
  function imagemDosStories(url) {
    var hoje = hojeISO();
    var semSite = url.replace(SITE, '');
    var ancora = (semSite.split('#')[1] || '');
    var pagina = semSite.split(/[?#]/)[0].replace(/\.html$/, '') || 'inicio';
    var achou = [STORIES[ancora], STORIES[pagina]].filter(function (s) {
      return s && (!s.ate || hoje <= s.ate);
    })[0];
    return achou ? achou.img : STORIES_GERAL;
  }

  /* campanha = a âncora do evento (yoga-esmu, assembleia), ou a página */
  function campanhaDe(url) {
    var semSite = url.replace(SITE, '');
    var ancora = semSite.split('#')[1];
    if (ancora) return ancora;
    return semSite.split(/[?#]/)[0].replace(/\.html$/, '') || 'inicio';
  }
  function etiquetar(url, fonte, campanha) {
    if (url.indexOf(SITE) !== 0) return url;
    campanha = campanha || campanhaDe(url);
    var hash = '', i = url.indexOf('#');
    if (i >= 0) { hash = url.slice(i); url = url.slice(0, i); }
    var partes = url.split('?'), base = partes[0];
    var resto = (partes[1] || '').split('&').filter(function (p) { return p && !/^utm_/.test(p); });
    resto.push('utm_source=' + fonte, 'utm_campaign=' + campanha);
    return base + '?' + resto.join('&') + hash;
  }
  window.NAE.etiquetar = etiquetar;
  var RE_SITE = /https:\/\/naeguanhaes\.github\.io\/[^\s"'<>)]*/g;
  function textoDoWhats(href) {
    try { return decodeURIComponent(((href.split('?text=')[1]) || '').replace(/\+/g, ' ')); } catch (e) { return ''; }
  }

  function postarStories(arq) {
    var nome = arq.split('/').pop();
    fetch(arq).then(function (r) { return r.blob(); }).then(function (blob) {
      var arquivo = new File([blob], nome, { type: blob.type || 'image/jpeg' });
      if (navigator.canShare && navigator.canShare({ files: [arquivo] })) {
        return navigator.share({ files: [arquivo] }).catch(function () {});
      }
      var a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = nome;
      document.body.appendChild(a);
      a.click();
      setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 1500);
      toast('Imagem baixada. No Instagram, crie um Story e escolha essa imagem.');
    }).catch(function () { window.location.href = arq; });
  }

  function montarPartilha(grupo) {
    var wa = grupo.wa, comp = grupo.comp, st = grupo.stories;
    var texto = (comp && comp.getAttribute('data-texto')) || '';
    var url = (comp && comp.getAttribute('data-url')) || (location.origin + location.pathname + location.hash);
    if (url.indexOf(location.origin) === 0 && location.origin !== SITE.slice(0, -1)) url = SITE + url.slice(location.origin.length + 1);
    var msg = wa ? textoDoWhats(wa.getAttribute('href')) : (texto + ' ' + url);
    var doSite = msg.match(RE_SITE);
    var alvo = doSite ? doSite[0] : url;
    var imgStories = st ? st.getAttribute('data-stories') : imagemDosStories(alvo);

    var primeiro = grupo.ordem[0];
    var ref = primeiro.parentNode.matches('span[data-ate]') ? primeiro.parentNode : primeiro;
    var cx = document.createElement('span');
    cx.className = 'partilha';
    /* a cor do botão vem do data-compartilhar (o fundo do bloco pode pedir
       branco, como no DA); o verde do link do WhatsApp fica na opção dele */
    var cor = (comp && comp.getAttribute('style')) || '';
    var extraClasse = comp ? ['ghost', 'pequeno'].filter(function (c) { return comp.classList.contains(c); }).map(function (c) { return ' ' + c; }).join('') : '';
    var id = 'partilha-' + (++montarPartilha.n);
    cx.innerHTML =
      '<button class="btn partilha-btn' + extraClasse + '" type="button" aria-expanded="false" aria-controls="' + id + '"' +
        (cor ? ' style="' + escapar(cor) + '"' : '') + '>' + ICONE_PARTILHA + 'Compartilhar</button>' +
      '<span class="partilha-opcoes" id="' + id + '" hidden>' +
        '<a class="btn partilha-whats" target="_blank" rel="noopener noreferrer" href="#">' + ICONE_WHATS + 'WhatsApp</a>' +
        '<button class="btn partilha-insta" type="button">' + ICONE_INSTA + 'Instagram</button>' +
      '</span>';
    ref.parentNode.insertBefore(cx, ref);
    grupo.ordem.forEach(function (el) {
      var fora = el.parentNode.matches('span[data-ate]') ? el.parentNode : el;
      fora.hidden = true;
    });

    var botao = cx.querySelector('.partilha-btn');
    var opcoes = cx.querySelector('.partilha-opcoes');
    var linkWa = cx.querySelector('.partilha-whats');
    linkWa.href = 'https://wa.me/?text=' + encodeURIComponent(
      msg.replace(RE_SITE, function (u) { return etiquetar(u, 'whatsapp'); }));
    botao.addEventListener('click', function () {
      var abrir = opcoes.hidden;
      opcoes.hidden = !abrir;
      botao.setAttribute('aria-expanded', String(abrir));
      if (abrir) linkWa.focus();
    });
    cx.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !opcoes.hidden) {
        opcoes.hidden = true; botao.setAttribute('aria-expanded', 'false'); botao.focus();
      }
    });
    cx.querySelector('.partilha-insta').addEventListener('click', function () {
      postarStories(imgStories);
    });
  }
  montarPartilha.n = 0;

  /* junta, por bloco, o link do WhatsApp, os Stories e o data-compartilhar */
  function juntarPartilhas(raiz) {
    var grupos = [];
    var fontes = raiz.querySelectorAll('a[href^="https://wa.me/"], [data-compartilhar], [data-stories]');
    Array.prototype.forEach.call(fontes, function (el) {
      if (el.closest('.partilha') || el.closest('[hidden]')) return;
      var bloco = el.parentNode.matches('span[data-ate]') ? el.parentNode.parentNode : el.parentNode;
      var g = null;
      for (var i = 0; i < grupos.length; i++) if (grupos[i].bloco === bloco) g = grupos[i];
      if (!g) { g = { bloco: bloco, ordem: [] }; grupos.push(g); }
      g.ordem.push(el);
      if (el.hasAttribute('data-stories')) g.stories = g.stories || el;
      else if (el.hasAttribute('data-compartilhar')) g.comp = g.comp || el;
      else g.wa = g.wa || el;
    });
    grupos.forEach(function (g) { montarPartilha(g); });
  }
  window.NAE.juntarPartilhas = juntarPartilhas;
  juntarPartilhas(document);

  /* fecha as opções ao tocar fora */
  document.addEventListener('click', function (e) {
    document.querySelectorAll('.partilha-opcoes:not([hidden])').forEach(function (o) {
      if (!o.parentNode.contains(e.target)) {
        o.hidden = true;
        o.parentNode.querySelector('.partilha-btn').setAttribute('aria-expanded', 'false');
      }
    });
  });

  /* ── Instalar o site (PWA) ────────────────────────── */
  if ('serviceWorker' in navigator && location.protocol === 'https:') {
    /* Depois de cada publicação, a primeira visita recebe a página e os
       dados novos, que vão pela rede, mas scripts e estilos ainda saem do
       cache da versão anterior. Essa mistura já fez o painel da inicial
       mostrar um destaque só e abrir no slide errado. Quando a versão nova
       assume o controle, a página se recarrega UMA vez, e tudo passa a vir
       da mesma versão. Na primeira visita de todas não recarrega: nada veio
       do cache. Depois do recarregamento não há versão esperando, então não
       entra em ciclo. */
    var jaTinhaVersao = !!navigator.serviceWorker.controller;
    var recarregando = false;
    navigator.serviceWorker.addEventListener('controllerchange', function () {
      if (!jaTinhaVersao || recarregando) return;
      recarregando = true;
      window.location.reload();
    });
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
