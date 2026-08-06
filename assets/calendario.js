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

  function itemHTML(ev, comMes) {
    var e = estado(ev);
    var agora = e !== 'hoje' ? ''
      : ev.ini === ev.fim
        ? ' <b style="color:var(--turquesa)">· é hoje</b>'
        : ' <b style="color:var(--turquesa)">· em andamento</b>';
    return '<div class="cal-evento ' + ev.tipo + ' ' + (e === 'passado' ? 'passado' : e === 'hoje' ? 'hoje' : '') + '"' +
           ' data-tipo="' + ev.tipo + '">' +
             '<span class="quando">' + U.escapar(comMes ? comMesHTML(ev) : quando(ev)) + '</span>' +
             '<span class="oque">' + U.escapar(ev.titulo) + agora + '</span>' +
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

  /* ── Ano inteiro, mês a mês ───────────────────────── */
  function montarAno() {
    if (!caixaAno) return;
    var mesAtual = new Date().getMonth();
    var html = '';

    for (var m = 0; m < 12; m++) {
      var doMes = C.eventos.filter(function (ev) { return mesDe(ev.ini) === m; });
      if (!doMes.length) continue;
      html += '<section class="cal-mes' + (m === mesAtual ? ' atual' : '') + '">' +
                '<h3>' + U.MESES[m] + (m === mesAtual ? ' · mês atual' : '') + '</h3>' +
                '<div class="cal-lista">' + doMes.map(function (ev) { return itemHTML(ev, false); }).join('') + '</div>' +
              '</section>';
    }
    caixaAno.innerHTML = html;
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

  montarProximos();
  montarAno();

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
          'UID:cal-' + i + '-' + C.ano + '@nae-guanhaes',
          'DTSTART;VALUE=DATE:' + ev.ini.replace(/-/g, ''),
          'DTEND;VALUE=DATE:' + fimISO,
          'SUMMARY:' + esc(ev.titulo),
          'DESCRIPTION:' + esc(ROTULO[ev.tipo] + ' · ' + C.resolucao),
          'END:VEVENT'
        );
      });
      linhas.push('END:VCALENDAR');
      var blob = new Blob([linhas.join('\r\n')], { type: 'text/calendar;charset=utf-8' });
      var a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'calendario-academico-' + C.ano + '.ics';
      document.body.appendChild(a); a.click();
      setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
    });
  }
})();
