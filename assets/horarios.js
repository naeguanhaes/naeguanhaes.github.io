/* ═══════════════════════════════════════════════════════
   NAE Guanhães · grade de horários
   Lê window.DADOS_HORARIOS (assets/dados-horarios.js).
   Monta: painel "hoje/agora", grade completa, minha turma,
   exportação para o calendário e filtro por professor.
   ═══════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var D = window.DADOS_HORARIOS;
  if (!D) return;

  var U = window.NAE;
  var DIAS = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'EaD'];
  var FIM_SEMESTRE = D.fimSemestre || '2026-12-12';

  var painel = document.getElementById('painel-agora');
  var lista  = document.getElementById('lista-turmas');

  /* ── Auxiliares ───────────────────────────────────── */
  function marcador(nome) {
    var m = nome.match(/\s*\((Híbrida|EaD|Estágio|Optativa)\)\s*$/);
    if (!m) return { nome: nome, tag: '' };
    var mapa = { 'Híbrida': 'hib', 'EaD': 'ead', 'Estágio': 'est', 'Optativa': 'opt' };
    return {
      nome: nome.replace(m[0], ''),
      tag: '<span class="tag ' + mapa[m[1]] + '">' + m[1] + '</span>'
    };
  }

  function corDoCurso(curso) { return curso === 'Direito' ? 'var(--azul)' : 'var(--verde)'; }

  function colunaDeHoje() {
    var d = new Date().getDay();          // 0 = domingo
    return (d >= 1 && d <= 5) ? d - 1 : -1;
  }

  function agoraEmMinutos() {
    var d = new Date();
    return d.getHours() * 60 + d.getMinutes();
  }

  /* ── Painel "hoje / agora" ────────────────────────── */
  function aulasDoDia(turma, col) {
    if (col < 0) return [];
    var fora = [];
    turma.linhas.forEach(function (l) {
      var cel = l.celulas[col];
      if (!cel || !l.ini) return;
      fora.push({
        ini: l.ini, fim: l.fim, rotulo: l.rotulo,
        disciplina: cel[0], professor: D.professores[cel[1]] || '',
        sala: turma.sala
      });
    });
    /* junta aulas seguidas da mesma disciplina */
    var juntas = [];
    fora.forEach(function (a) {
      var ult = juntas[juntas.length - 1];
      if (ult && ult.disciplina === a.disciplina && ult.fim === a.ini) {
        ult.fim = a.fim;
        ult.rotulo = ult.rotulo.split('-')[0] + '-' + a.rotulo.split('-')[1];
      } else {
        juntas.push(Object.assign({}, a));
      }
    });
    return juntas;
  }

  function montarPainel() {
    if (!painel) return;

    var idSalvo = U.ler('turma');
    var turma = D.turmas.filter(function (t) { return t.id === idSalvo; })[0];
    var col = colunaDeHoje();
    var agora = agoraEmMinutos();
    var hoje = new Date();
    var dataTexto = U.DIAS_CURTOS[hoje.getDay()] + ', ' + hoje.getDate() + ' de ' + U.MESES[hoje.getMonth()];
    var relogio = String(hoje.getHours()).padStart(2, '0') + ':' + String(hoje.getMinutes()).padStart(2, '0');

    var corpo = '';

    if (!turma) {
      corpo = '<p class="agora-vazio">Escolha a sua turma abaixo e esta caixa passa a mostrar a aula de hoje sempre que você abrir o site.</p>';
    } else if (col < 0) {
      corpo = '<p class="agora-vazio">Hoje é ' + U.DIAS_CURTOS[hoje.getDay()].toLowerCase() +
              '. Não há aulas presenciais. A próxima aula do <b>' + U.escapar(turma.periodo) + '</b> é na segunda-feira.</p>';
    } else {
      var aulas = aulasDoDia(turma, col);
      if (!aulas.length) {
        corpo = '<p class="agora-vazio">Sem aula presencial hoje para o <b>' + U.escapar(turma.periodo) + '</b>. Bom descanso.</p>';
      } else {
        corpo = aulas.map(function (a) {
          var ini = U.minutosDe(a.ini), fim = U.minutosDe(a.fim);
          var emCurso = agora >= ini && agora < fim;
          var passou = agora >= fim;
          var proxima = !passou && !emCurso;
          var selo = emCurso ? '<span class="selo"><span class="pulso"></span>agora</span>'
                   : proxima ? '<span class="selo">a seguir</span>'
                   : '<span class="selo" style="background:var(--muted)">encerrada</span>';
          var d = marcador(a.disciplina);
          return '<div class="agora-linha' + (emCurso ? ' ao-vivo' : '') + '"' +
                 (passou ? ' style="opacity:.55"' : '') + '>' +
                   selo +
                   '<span class="hora">' + U.escapar(a.rotulo) + '</span>' +
                   '<span class="disciplina">' + U.escapar(d.nome) + d.tag + '</span>' +
                   '<span class="onde">' + U.escapar(a.sala) + '</span>' +
                   (a.professor ? '<span class="prof">' + U.escapar(a.professor) + '</span>' : '') +
                 '</div>';
        }).join('');
      }
    }

    var opcoes = ['<option value="">escolher a turma…</option>'].concat(
      D.turmas.map(function (t) {
        return '<option value="' + t.id + '"' + (t.id === idSalvo ? ' selected' : '') + '>' +
               U.escapar(t.curso + ' · ' + t.periodo) + '</option>';
      })
    ).join('');

    painel.className = 'agora';
    painel.innerHTML =
      '<div class="agora-topo">' +
        '<span class="dia">' + U.escapar(dataTexto) + '</span>' +
        (turma ? '<span style="opacity:.85;font-size:.9rem">' + U.escapar(turma.curso + ' · ' + turma.periodo) + '</span>' : '') +
        '<span class="relogio">' + relogio + '</span>' +
      '</div>' +
      '<div class="agora-corpo">' + corpo + '</div>' +
      '<div class="minha-turma">' +
        '<label for="sel-turma">Minha turma:</label>' +
        '<select id="sel-turma">' + opcoes + '</select>' +
        (turma ? '<button class="acao" type="button" id="esquecer-turma">esquecer</button>' : '') +
        (turma ? '<a class="acao" href="horarios.html#' + turma.id + '">ver grade completa</a>' : '') +
      '</div>';

    var sel = document.getElementById('sel-turma');
    if (sel) {
      sel.addEventListener('change', function () {
        if (sel.value) U.guardar('turma', sel.value); else U.apagar('turma');
        montarPainel();
        if (lista) marcarMinhaTurma();
      });
    }
    var esquecer = document.getElementById('esquecer-turma');
    if (esquecer) {
      esquecer.addEventListener('click', function () {
        U.apagar('turma'); montarPainel();
        if (lista) marcarMinhaTurma();
      });
    }
  }

  /* ── Grade completa ───────────────────────────────── */
  function celula(cel, ehEad, col, colHoje, linha) {
    var classes = [];
    if (ehEad) classes.push('ead');
    if (col === colHoje) classes.push('hoje');

    if (!cel) {
      classes.push('vaga');
      return '<td class="' + classes.join(' ') + '">·</td>';
    }
    var agora = agoraEmMinutos();
    if (col === colHoje && linha.ini &&
        agora >= U.minutosDe(linha.ini) && agora < U.minutosDe(linha.fim)) {
      classes.push('agora');
    }
    var d = marcador(cel[0]);
    var prof = D.professores[cel[1]] || '';
    return '<td class="' + classes.join(' ') + '">' +
             '<span class="disc">' + U.escapar(d.nome) + d.tag + '</span>' +
             (prof ? '<span class="doc"><button type="button" data-prof="' + U.escapar(prof) + '">' +
                     U.escapar(prof) + '</button></span>' : '') +
           '</td>';
  }

  function montarTurma(t) {
    var colHoje = colunaDeHoje();
    var thead = '<tr><th>Horário</th>' + DIAS.map(function (d, i) {
      return '<th' + (i === colHoje ? ' class="hoje"' : '') + '>' + d + '</th>';
    }).join('') + '</tr>';

    var tbody = t.linhas.map(function (l) {
      return '<tr><th scope="row">' + U.escapar(l.rotulo) + '</th>' +
        l.celulas.map(function (cel, i) { return celula(cel, i === 5, i, colHoje, l); }).join('') + '</tr>';
    }).join('');

    return '<article class="turma" id="' + t.id + '" data-turma="' + t.id + '"' +
           ' data-curso="' + U.escapar(t.curso) + '" data-sala="' + U.escapar(t.salaId) + '"' +
           ' style="--c: ' + corDoCurso(t.curso) + '">' +
      '<div class="turma-head">' +
        '<span class="curso">' + U.escapar(t.curso) + '</span>' +
        '<h3>' + U.escapar(t.periodo) + ' · ' + U.escapar(t.turma) + '</h3>' +
        '<span class="sala">' + U.escapar(t.sala) + '</span>' +
        '<span class="turma-acoes">' +
          '<button class="acao" type="button" data-minha="' + t.id + '">minha turma</button>' +
          '<button class="acao" type="button" data-ics="' + t.id + '">📅 calendário</button>' +
          '<button class="acao" type="button" data-imprimir="' + t.id + '">imprimir</button>' +
        '</span>' +
      '</div>' +
      '<div class="rolagem"><table class="grade">' +
        '<caption class="so-leitor">Grade de ' + U.escapar(t.curso + ', ' + t.periodo) + ', ' + U.escapar(t.sala) + '</caption>' +
        '<thead>' + thead + '</thead><tbody>' + tbody + '</tbody></table></div>' +
    '</article>';
  }

  /* ── Exportação para o calendário (.ics) ──────────── */
  function baixarICS(turma) {
    var linhas = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//NAE Guanhaes//Horarios//PT-BR', 'CALSCALE:GREGORIAN'];
    var ate = FIM_SEMESTRE.replace(/-/g, '') + 'T235900';
    var hoje = new Date();
    var n = 0;

    turma.linhas.forEach(function (l) {
      if (!l.ini) return;
      l.celulas.forEach(function (cel, col) {
        if (!cel || col > 4) return;
        var alvo = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate());
        var desloca = ((col + 1) - alvo.getDay() + 7) % 7;
        alvo.setDate(alvo.getDate() + desloca);

        var data = alvo.getFullYear() +
                   String(alvo.getMonth() + 1).padStart(2, '0') +
                   String(alvo.getDate()).padStart(2, '0');
        var esc = function (s) { return String(s).replace(/([,;\\])/g, '\\$1'); };
        var prof = D.professores[cel[1]] || '';

        linhas.push(
          'BEGIN:VEVENT',
          'UID:' + turma.id + '-' + col + '-' + (n++) + '@nae-guanhaes',
          'DTSTART:' + data + 'T' + l.ini.replace(':', '') + '00',
          'DTEND:' + data + 'T' + l.fim.replace(':', '') + '00',
          'RRULE:FREQ=WEEKLY;UNTIL=' + ate,
          'SUMMARY:' + esc(cel[0]),
          'LOCATION:' + esc(turma.sala + ' · UEMG Unidade Guanhães'),
          'DESCRIPTION:' + esc(turma.curso + ' · ' + turma.periodo + (prof ? ' · ' + prof : '')),
          'END:VEVENT'
        );
      });
    });

    linhas.push('END:VCALENDAR');
    var blob = new Blob([linhas.join('\r\n')], { type: 'text/calendar;charset=utf-8' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'horarios-' + turma.id + '.ics';
    document.body.appendChild(a); a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
  }

  /* ── Montagem da lista ────────────────────────────── */
  var artigos = [];
  var cursoAtivo = 'todos', termo = '';

  function marcarMinhaTurma() {
    var meu = U.ler('turma');
    artigos.forEach(function (a) {
      var ehMinha = a.getAttribute('data-turma') === meu;
      a.classList.toggle('minha', ehMinha);
      var b = a.querySelector('[data-minha]');
      if (b) {
        b.classList.toggle('ativa', ehMinha);
        b.textContent = ehMinha ? '✓ minha turma' : 'minha turma';
      }
    });
  }

  function aplicar() {
    var visiveis = 0;
    artigos.forEach(function (a) {
      var okCurso = cursoAtivo === 'todos' || a.getAttribute('data-curso') === cursoAtivo;
      var okTermo = !termo || U.normaliza(a.textContent).indexOf(termo) !== -1;
      var mostra = okCurso && okTermo;
      a.hidden = !mostra;
      if (mostra) visiveis++;
    });
    var sem = document.getElementById('sem-resultado');
    var cont = document.getElementById('contagem');
    if (sem) sem.hidden = visiveis > 0;
    if (cont) cont.textContent = visiveis + (visiveis === 1 ? ' turma' : ' turmas');
  }

  if (lista) {
    lista.innerHTML = D.turmas.map(montarTurma).join('') +
      '<p class="vazio-busca" id="sem-resultado" hidden>Nenhuma turma encontrada para esta busca.</p>';
    artigos = Array.prototype.slice.call(lista.querySelectorAll('.turma'));

    document.querySelectorAll('.chip[data-curso]').forEach(function (b) {
      b.addEventListener('click', function () {
        cursoAtivo = b.getAttribute('data-curso');
        document.querySelectorAll('.chip[data-curso]').forEach(function (o) {
          o.setAttribute('aria-pressed', o === b ? 'true' : 'false');
        });
        aplicar();
      });
    });

    var campo = document.getElementById('in-busca');
    if (campo) {
      campo.addEventListener('input', function (e) {
        termo = U.normaliza(e.target.value.trim());
        aplicar();
      });
    }

    lista.addEventListener('click', function (e) {
      var alvo = e.target.closest('[data-prof], [data-ics], [data-imprimir], [data-minha]');
      if (!alvo) return;

      if (alvo.hasAttribute('data-prof') && campo) {
        campo.value = alvo.getAttribute('data-prof');
        termo = U.normaliza(campo.value);
        cursoAtivo = 'todos';
        document.querySelectorAll('.chip[data-curso]').forEach(function (o) {
          o.setAttribute('aria-pressed', o.getAttribute('data-curso') === 'todos' ? 'true' : 'false');
        });
        aplicar();
        campo.scrollIntoView({ behavior: U.reduzir ? 'auto' : 'smooth', block: 'center' });
        return;
      }

      var id = alvo.getAttribute('data-ics') || alvo.getAttribute('data-imprimir') || alvo.getAttribute('data-minha');
      var turma = D.turmas.filter(function (t) { return t.id === id; })[0];
      if (!turma) return;

      if (alvo.hasAttribute('data-ics')) { baixarICS(turma); return; }

      if (alvo.hasAttribute('data-minha')) {
        if (U.ler('turma') === id) U.apagar('turma'); else U.guardar('turma', id);
        marcarMinhaTurma();
        montarPainel();
        return;
      }

      if (alvo.hasAttribute('data-imprimir')) {
        var escondidos = artigos.filter(function (a) { return a !== alvo.closest('.turma') && !a.hidden; });
        escondidos.forEach(function (a) { a.hidden = true; });
        window.addEventListener('afterprint', function restaura() {
          escondidos.forEach(function (a) { a.hidden = false; });
          window.removeEventListener('afterprint', restaura);
        });
        window.print();
      }
    });

    aplicar();
    marcarMinhaTurma();

    /* chegada pelo mapa: horarios.html?sala=6#sala-6 */
    var pedido = new URLSearchParams(window.location.search).get('sala');
    if (!pedido && /^#sala-\d+$/.test(window.location.hash)) pedido = window.location.hash.replace('#sala-', '');
    if (pedido) {
      var alvoSala = lista.querySelector('.turma[data-sala="' + pedido.replace(/[^0-9]/g, '') + '"]');
      if (alvoSala) {
        alvoSala.classList.add('destaque');
        setTimeout(function () { alvoSala.scrollIntoView({ behavior: 'smooth', block: 'center' }); }, 120);
        setTimeout(function () { alvoSala.classList.remove('destaque'); }, 4500);
      }
    }
  }

  montarPainel();
  /* o relógio do painel acompanha o horário sem recarregar a página */
  setInterval(montarPainel, 60000);
})();
