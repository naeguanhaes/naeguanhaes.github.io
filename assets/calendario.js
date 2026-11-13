/* ═══════════════════════════════════════════════════════
   NAE Guanhães · calendário acadêmico
   Lê window.DADOS_CALENDARIO (assets/dados-calendario.js).
   ═══════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var C = window.DADOS_CALENDARIO;
  var U = window.NAE;
  if (!C || !U) return;

  var caixaProximos = document.getElementById('cal-proximos');
  var caixaAno = document.getElementById('cal-ano');
  var chips = document.querySelectorAll('.chip[data-tipo]');

  var hoje = U.hojeISO();
  var tipoAtivo = 'todos';

  /* Mais de um ano na lista (desde 13/11/2026, quando saiu o de 2027):
     C.anos diz quais anos o seletor oferece. Abre no ano corrente. */
  var anos = C.anos || [C.ano];
  var anoAtual = new Date().getFullYear();
  var anoSel = anos.indexOf(anoAtual) !== -1 ? anoAtual : anos[0];
  function doAno(ev) { return parseInt(ev.ini.slice(0, 4), 10) === anoSel; }

  var ROTULO = { letivo: 'Período letivo', prazo: 'Prazo', feriado: 'Feriado / Recesso' };

  function diaDoMes(iso) { return parseInt(iso.split('-')[2], 10); }
  function mesDe(iso) { return parseInt(iso.split('-')[1], 10) - 1; }

  function quando(ev) {
    if (ev.semData) return 'a definir';
    var a = diaDoMes(ev.ini), b = diaDoMes(ev.fim);
    if (ev.ini === ev.fim) return String(a).padStart(2, '0');
    if (mesDe(ev.ini) === mesDe(ev.fim)) return String(a).padStart(2, '0') + ' a ' + String(b).padStart(2, '0');
    return U.dataBR(ev.ini).slice(0, 5) + ' a ' + U.dataBR(ev.fim).slice(0, 5);
  }

  function estado(ev) {
    if (ev.fim < hoje) return 'passado';
    if (ev.ini <= hoje && hoje <= ev.fim) return 'hoje';
    return 'futuro';
  }

  function comMesHTML(ev) {
    var mes = ev.ini.slice(5, 7);
    if (ev.ini === ev.fim) return U.dataBR(ev.ini).slice(0, 5);
    if (mesDe(ev.ini) === mesDe(ev.fim)) {
      return String(diaDoMes(ev.ini)).padStart(2, '0') + ' a ' +
             String(diaDoMes(ev.fim)).padStart(2, '0') + '/' + mes;
    }
    return U.dataBR(ev.ini).slice(0, 5) + ' a ' + U.dataBR(ev.fim).slice(0, 5);
  }

  /* símbolos que um evento pode levar ao lado do nome (campo marca) */
  var MARCAS = { seminario: 'assets/seminario/marca.webp', da: 'assets/da/simbolo.webp' };

  function itemHTML(ev, comMes) {
    var e = estado(ev);
    var agora = e !== 'hoje' ? ''
      : ev.ini === ev.fim
        ? ' <b style="color:var(--turquesa)">· é hoje</b>'
        : ' <b style="color:var(--turquesa)">· em andamento</b>';
    return '<div class="cal-evento ' + ev.tipo + ' ' + (e === 'passado' ? 'passado' : e === 'hoje' ? 'hoje' : '') + '"' +
           ' data-tipo="' + ev.tipo + '">' +
             '<span class="quando">' + U.escapar(comMes ? comMesHTML(ev) : quando(ev)) + '</span>' +
             '<span class="oque">' + (MARCAS[ev.marca]
               ? '<img class="cal-marca" src="' + MARCAS[ev.marca] + '" alt="" width="15" height="20">' : '') +
               U.escapar(ev.titulo) + agora + '</span>' +
           '</div>';
  }

  /* ── Próximos acontecimentos ──────────────────────── */
  function montarProximos() {
    if (!caixaProximos) return;
    var futuros = C.eventos
      .filter(function (ev) { return ev.fim >= hoje && !ev.semData; })
      .sort(function (a, b) { return a.ini < b.ini ? -1 : 1; })
      .slice(0, 5);

    if (!futuros.length) {
      caixaProximos.innerHTML = '<p class="agora-vazio">Não há mais datas previstas para ' + C.ano + '.</p>';
      return;
    }
    caixaProximos.innerHTML = futuros.map(function (ev) { return itemHTML(ev, true); }).join('');
  }

  /* ── Ano mês a mês: o atual primeiro, os antigos escondidos ── */
  function montarAno() {
    if (!caixaAno) return;
    /* ano futuro: todos os meses à frente; ano que já passou: todos recolhidos */
    var mesAtual = anoSel === anoAtual ? new Date().getMonth() : anoSel > anoAtual ? -1 : 12;
    var futuros = '', passados = '', mesesPassados = 0;

    for (var m = 0; m < 12; m++) {
      var doMes = C.eventos.filter(function (ev) { return doAno(ev) && mesDe(ev.ini) === m; });
      if (!doMes.length) continue;
      var sec = '<section class="cal-mes' + (m === mesAtual ? ' atual' : '') + '">' +
                  '<h3>' + U.MESES[m] + ' de ' + anoSel + (m === mesAtual ? ' · mês atual' : '') + '</h3>' +
                  '<div class="cal-lista">' + doMes.map(function (ev) { return itemHTML(ev, false); }).join('') + '</div>' +
                '</section>';
      if (m < mesAtual) { passados += sec; mesesPassados++; }
      else futuros += sec;
    }

    var html = futuros;
    if (passados) {
      html += '<div class="cal-passados-caixa">' +
                '<button class="btn ghost pequeno" type="button" id="cal-passados-btn" style="--c: var(--lilas)">' +
                  'Mostrar os meses anteriores (' + mesesPassados + ')' +
                '</button>' +
                '<div id="cal-passados" class="cal-grid" hidden>' + passados + '</div>' +
              '</div>';
    }
    caixaAno.innerHTML = html;

    var b = document.getElementById('cal-passados-btn');
    if (b) {
      b.addEventListener('click', function () {
        var cx = document.getElementById('cal-passados');
        cx.hidden = !cx.hidden;
        b.textContent = cx.hidden
          ? 'Mostrar os meses anteriores (' + mesesPassados + ')'
          : 'Esconder os meses anteriores';
        filtrar();
      });
    }
  }

  function filtrar() {
    document.querySelectorAll('#cal-ano .cal-evento').forEach(function (el) {
      el.hidden = tipoAtivo !== 'todos' && el.getAttribute('data-tipo') !== tipoAtivo;
    });
    document.querySelectorAll('#cal-ano .cal-mes').forEach(function (sec) {
      var algum = Array.prototype.some.call(sec.querySelectorAll('.cal-evento'), function (e) { return !e.hidden; });
      sec.hidden = !algum;
    });
  }

  chips.forEach(function (b) {
    b.addEventListener('click', function () {
      tipoAtivo = b.getAttribute('data-tipo');
      chips.forEach(function (o) { o.setAttribute('aria-pressed', o === b ? 'true' : 'false'); });
      filtrar();
    });
  });

  /* seletor de ano e a fonte oficial de cada ano */
  var caixaAnos = document.getElementById('cal-anos');
  var fonte = document.getElementById('cal-resolucao');
  var rotuloAno = document.getElementById('cal-ano-rotulo');
  function mostrarFonte() {
    if (fonte) fonte.textContent = (C.resolucoes && C.resolucoes[anoSel]) || C.resolucao;
    if (rotuloAno) rotuloAno.textContent = String(anoSel);
  }
  if (caixaAnos && anos.length > 1) {
    caixaAnos.innerHTML = anos.map(function (a) {
      return '<button class="chip" type="button" data-ano="' + a + '" aria-pressed="' + (a === anoSel) + '" style="--c: var(--lilas)">' +
             'Calendário de ' + a + (a > anoAtual ? ' <span class="cal-novo">novo</span>' : '') + '</button>';
    }).join('');
    caixaAnos.hidden = false;
    caixaAnos.addEventListener('click', function (e) {
      var b = e.target.closest('[data-ano]');
      if (!b) return;
      anoSel = parseInt(b.getAttribute('data-ano'), 10);
      caixaAnos.querySelectorAll('[data-ano]').forEach(function (o) { o.setAttribute('aria-pressed', o === b ? 'true' : 'false'); });
      montarAno(); filtrar(); mostrarFonte();
    });
  }
  /* calendario.html?ano=2027 abre direto no ano pedido */
  var pedido = parseInt(new URLSearchParams(location.search).get('ano'), 10);
  if (anos.indexOf(pedido) !== -1) anoSel = pedido;
  if (caixaAnos) caixaAnos.querySelectorAll('[data-ano]').forEach(function (o) { o.setAttribute('aria-pressed', String(parseInt(o.getAttribute('data-ano'), 10) === anoSel)); });

  montarProximos();
  montarAno();
  mostrarFonte();

  /* ── Baixar o calendário todo (.ics) ──────────────── */
  var btn = document.getElementById('cal-ics');
  if (btn) {
    btn.addEventListener('click', function () {
      var linhas = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//NAE Guanhaes//Calendario//PT-BR', 'CALSCALE:GREGORIAN'];
      var esc = function (s) { return String(s).replace(/([,;\\])/g, '\\$1'); };
      C.eventos.forEach(function (ev, i) {
        if (ev.semData) return;
        var fim = new Date(ev.fim + 'T12:00:00');
        fim.setDate(fim.getDate() + 1);                 /* DTEND é exclusivo */
        var fimISO = U.hojeISO(fim).replace(/-/g, '');
        linhas.push(
          'BEGIN:VEVENT',
          'UID:cal-' + i + '-' + ev.ini.slice(0, 4) + '@nae-guanhaes',
          'DTSTART;VALUE=DATE:' + ev.ini.replace(/-/g, ''),
          'DTEND;VALUE=DATE:' + fimISO,
          'SUMMARY:' + esc(ev.titulo),
          'DESCRIPTION:' + esc(ROTULO[ev.tipo] + ' · ' + ((C.resolucoes && C.resolucoes[ev.ini.slice(0, 4)]) || C.resolucao)),
          'END:VEVENT'
        );
      });
      linhas.push('END:VCALENDAR');
      var blob = new Blob([linhas.join('\r\n')], { type: 'text/calendar;charset=utf-8' });
      var a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'calendario-academico-' + anos.join('-') + '.ics';
      document.body.appendChild(a); a.click();
      setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
    });
  }
})();
