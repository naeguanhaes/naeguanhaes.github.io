/* ═══════════════════════════════════════════════════════
   NAE Guanhães · mapa do campus
   • mostra qual turma ocupa cada sala neste momento
   • alterna entre a planta e uma lista, boa para o celular
   ═══════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var U = window.NAE;
  var D = window.DADOS_HORARIOS;
  if (!U) return;

  /* ── Ocupação agora ───────────────────────────────── */
  function ocupacaoAgora() {
    var mapa = {};
    if (!D) return mapa;

    var d = new Date();
    var col = (d.getDay() >= 1 && d.getDay() <= 5) ? d.getDay() - 1 : -1;
    if (col < 0) return mapa;
    var agora = d.getHours() * 60 + d.getMinutes();

    D.turmas.forEach(function (t) {
      if (!t.salaId) return;
      t.linhas.forEach(function (l) {
        if (!l.ini) return;
        var cel = l.celulas[col];
        if (!cel) return;
        if (agora >= U.minutosDe(l.ini) && agora < U.minutosDe(l.fim)) {
          mapa[t.salaId] = {
            disciplina: cel[0].replace(/\s*\((Híbrida|EaD|Estágio|Optativa)\)\s*$/, ''),
            turma: t.periodo, curso: t.curso, ate: l.fim
          };
        }
      });
    });
    return mapa;
  }

  function pintarPlanta() {
    var svg = document.querySelector('svg.planta');
    if (!svg) return;
    var oc = ocupacaoAgora();

    svg.querySelectorAll('.marca-agora').forEach(function (n) { n.remove(); });

    Object.keys(oc).forEach(function (salaId) {
      var link = svg.querySelector('a.sala[href*="sala=' + salaId + '#"]');
      if (!link) return;
      var corpo = link.querySelector('rect.corpo');
      if (!corpo) return;

      var x = parseFloat(corpo.getAttribute('x'));
      var y = parseFloat(corpo.getAttribute('y'));
      var w = parseFloat(corpo.getAttribute('width'));
      var h = parseFloat(corpo.getAttribute('height'));

      var g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      g.setAttribute('class', 'marca-agora');

      var fundo = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      fundo.setAttribute('x', x + 6); fundo.setAttribute('y', y + h - 26);
      fundo.setAttribute('width', Math.max(60, w - 12)); fundo.setAttribute('height', 20);
      fundo.setAttribute('rx', 10);
      fundo.setAttribute('fill', '#D8F0E4');
      fundo.setAttribute('stroke', '#1B7A52');
      fundo.setAttribute('stroke-width', '1');

      var txt = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      txt.setAttribute('class', 'rm-agora');
      txt.setAttribute('x', x + 14); txt.setAttribute('y', y + h - 12);
      txt.textContent = '● ocupada até ' + oc[salaId].ate;

      g.appendChild(fundo); g.appendChild(txt);
      link.appendChild(g);
    });

    var resumo = document.getElementById('resumo-agora');
    if (resumo) {
      var n = Object.keys(oc).length;
      resumo.textContent = n
        ? n + (n === 1 ? ' sala ocupada agora' : ' salas ocupadas agora')
        : 'Nenhuma aula em andamento neste momento';
    }
  }

  /* ── Lista de ambientes (celular) ─────────────────── */
  var ALAS = [
    { nome: 'Ala norte', itens: [
      { qual: 'Sala nº 11', sala: '11', cor: 'var(--verde)' },
      { qual: 'Banheiros', cor: 'var(--ambar)' },
      { qual: 'Biblioteca', cor: 'var(--turquesa)' },
      { qual: 'Sala nº 1', sala: '1', cor: 'var(--verde)' },
      { qual: 'Sala nº 2', sala: '2', cor: 'var(--verde)' },
      { qual: 'Sala nº 3', sala: '3', cor: 'var(--verde)' },
      { qual: 'Sala nº 4', sala: '4', cor: 'var(--azul)' },
      { qual: 'Sala nº 5', sala: '5', cor: 'var(--azul)' },
      { qual: 'Sala nº 6', sala: '6', cor: 'var(--azul)' },
      { qual: 'Sala nº 7', sala: '7', cor: 'var(--azul)' }
    ]},
    { nome: 'Pátio e ala sul', itens: [
      { qual: 'Cantina e dispensa', cor: 'var(--ambar)' },
      { qual: 'Laboratório de Informática', cor: 'var(--turquesa)' },
      { qual: 'Sala nº 10', sala: '10', cor: 'var(--azul)' },
      { qual: 'Auditório', cor: 'var(--turquesa)' },
      { qual: 'Laboratório de Topografia', cor: 'var(--turquesa)' },
      { qual: 'Sala nº 9', sala: '9', cor: 'var(--verde)' },
      { qual: 'Laboratório de Física', cor: 'var(--turquesa)' },
      { qual: 'Sala nº 8', sala: '8', cor: 'var(--verde)' }
    ]},
    { nome: 'Outros prédios', itens: [
      { qual: 'Prédio do Administrativo · sala do NAE', link: 'contato.html', quem: 'terças e quintas, 18h às 19h', cor: 'var(--coral)' },
      { qual: 'Prédio Anexo · sala do NPJ', quem: 'Prática Real · Direito', cor: 'var(--azul)' }
    ]}
  ];

  function ocupanteFixo(salaId) {
    if (!D) return '';
    var t = D.turmas.filter(function (x) { return x.salaId === salaId; })[0];
    return t ? t.periodo + ' · ' + t.curso : '';
  }

  function montarLista() {
    var caixa = document.getElementById('mapa-lista');
    if (!caixa) return;
    var oc = ocupacaoAgora();

    caixa.innerHTML = ALAS.map(function (ala) {
      var itens = ala.itens.map(function (it) {
        var href = it.link ? it.link : (it.sala ? 'horarios.html?sala=' + it.sala + '#sala-' + it.sala : null);
        var quem = it.quem || (it.sala ? ocupanteFixo(it.sala) : '');
        var agora = it.sala && oc[it.sala]
          ? '<b style="color:#1B7A52">● ocupada até ' + oc[it.sala].ate + '</b><br>' : '';
        var conteudo =
          '<span class="pino"></span>' +
          '<span class="qual">' + U.escapar(it.qual) + '</span>' +
          '<span class="quem">' + agora + U.escapar(quem) + '</span>';
        return href
          ? '<a class="ala-item" href="' + href + '" style="--c: ' + it.cor + '">' + conteudo + '</a>'
          : '<div class="ala-item" style="--c: ' + it.cor + '">' + conteudo + '</div>';
      }).join('');
      return '<div class="ala-bloco"><h3>' + U.escapar(ala.nome) + '</h3><div class="ala-itens">' + itens + '</div></div>';
    }).join('');
  }

  /* ── Alternância planta ⇄ lista ───────────────────── */
  var btPlanta = document.getElementById('ver-planta');
  var btLista = document.getElementById('ver-lista');
  var planta = document.querySelector('.planta-caixa');
  var lista = document.getElementById('mapa-lista');

  function mostrar(qual) {
    if (!planta || !lista) return;
    var ehLista = qual === 'lista';
    planta.classList.toggle('oculta', ehLista);
    lista.classList.toggle('ativa', ehLista);
    if (btPlanta) btPlanta.setAttribute('aria-pressed', String(!ehLista));
    if (btLista) btLista.setAttribute('aria-pressed', String(ehLista));
    U.guardar('mapa-visao', qual);
  }

  if (btPlanta) btPlanta.addEventListener('click', function () { mostrar('planta'); });
  if (btLista) btLista.addEventListener('click', function () { mostrar('lista'); });

  montarLista();
  pintarPlanta();
  setInterval(function () { pintarPlanta(); montarLista(); }, 60000);

  /* no celular a lista abre por padrão; no computador, a planta */
  var salvo = U.ler('mapa-visao');
  mostrar(salvo || (window.matchMedia('(max-width: 700px)').matches ? 'lista' : 'planta'));
})();
