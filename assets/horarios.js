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
          '<button class="acao" type="button" data-imagem="' + t.id + '">🖼 salvar imagem</button>' +
          '<button class="acao" type="button" data-link="' + t.id + '">🔗 copiar link</button>' +
          '<button class="acao" type="button" data-imprimir="' + t.id + '">imprimir</button>' +
        '</span>' +
      '</div>' +
      '<p class="dica-rolagem">arraste a tabela para o lado para ver a semana inteira</p>' +
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

  /* ── Grade em imagem (PNG para a galeria) ─────────── */
  function baixarPNG(turma) {
    var logo = new Image();
    logo.onload = function () { desenharGrade(turma, logo); };
    logo.onerror = function () { desenharGrade(turma, null); };
    logo.src = 'assets/logo-nae.png';
  }

  function desenharGrade(turma, logo) {
    var AZUL = '#40688B', VERMELHO = '#D91F35', ESC = '#22475F',
        INK = '#16303F', INK2 = '#35566C', MUTED = '#61798D',
        HAIR = '#E8F0F6', LINHA = '#D5E2EC';
    var corCurso = turma.curso === 'Direito' ? '#35618A' : '#2E9A6B';

    var W = 1500, M = 48;
    var colHora = 120, colDia = (W - 2 * M - colHora) / 6;
    var F_DISC = '600 15px "Segoe UI", Arial, sans-serif';
    var F_PROF = 'italic 12.5px "Segoe UI", Arial, sans-serif';

    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');

    function quebrar(texto, fonte, largura) {
      ctx.font = fonte;
      var palavras = String(texto).split(' ');
      var linhas = [], atual = '';
      palavras.forEach(function (p) {
        var tent = atual ? atual + ' ' + p : p;
        if (ctx.measureText(tent).width > largura && atual) { linhas.push(atual); atual = p; }
        else atual = tent;
      });
      if (atual) linhas.push(atual);
      return linhas;
    }

    function caixaRedonda(x, y, w, h, r) {
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.arcTo(x + w, y, x + w, y + h, r);
      ctx.arcTo(x + w, y + h, x, y + h, r);
      ctx.arcTo(x, y + h, x, y, r);
      ctx.arcTo(x, y, x + w, y, r);
      ctx.closePath();
    }

    /* mede as linhas antes de definir a altura da imagem */
    var linhas = turma.linhas.map(function (l) {
      var cels = l.celulas.map(function (cel) {
        if (!cel) return null;
        var prof = D.professores[cel[1]] || '';
        return {
          disc: quebrar(cel[0], F_DISC, colDia - 26),
          prof: prof ? quebrar(prof, F_PROF, colDia - 26) : []
        };
      });
      var alto = 56;
      cels.forEach(function (c) {
        if (!c) return;
        var precisa = 24 + c.disc.length * 19 + (c.prof.length ? c.prof.length * 16 + 6 : 0);
        if (precisa > alto) alto = precisa;
      });
      return { l: l, cels: cels, alto: alto };
    });

    var altoCabec = 152, altoTh = 46, altoRodape = 66;
    var corpoAlto = linhas.reduce(function (s, r) { return s + r.alto; }, 0);
    var H = altoCabec + altoTh + corpoAlto + altoRodape + M;

    canvas.width = W * 2; canvas.height = H * 2;
    ctx.scale(2, 2);

    /* fundo e faixa da marca */
    ctx.fillStyle = '#F2F6FA'; ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = AZUL; ctx.fillRect(0, 0, W * 0.58, 10);
    ctx.fillStyle = VERMELHO; ctx.fillRect(W * 0.58, 0, W * 0.42, 10);

    /* cantos decorativos, como no site */
    ctx.fillStyle = 'rgba(64,104,139,.10)';
    ctx.beginPath(); ctx.moveTo(W, H); ctx.arc(W, H, 130, Math.PI, Math.PI * 1.5); ctx.closePath(); ctx.fill();
    ctx.fillStyle = 'rgba(217,31,53,.10)';
    ctx.beginPath(); ctx.moveTo(W, H); ctx.arc(W, H, 78, Math.PI, Math.PI * 1.5); ctx.closePath(); ctx.fill();

    /* cabeçalho com a logo */
    if (logo) {
      caixaRedonda(M, 30, 208, 96, 14);
      ctx.fillStyle = '#FFFFFF'; ctx.fill();
      ctx.strokeStyle = LINHA; ctx.lineWidth = 1; ctx.stroke();
      var lw = 184, lh = lw * (logo.height / logo.width);
      ctx.drawImage(logo, M + 12, 30 + (96 - lh) / 2, lw, lh);
    }
    var tx = M + (logo ? 236 : 0);
    ctx.fillStyle = ESC;
    ctx.font = '700 27px Georgia, "Times New Roman", serif';
    ctx.fillText('Horários de aulas · ' + (D.semestre || ''), tx, 62);
    ctx.fillStyle = corCurso;
    ctx.font = '700 18px "Segoe UI", Arial, sans-serif';
    ctx.fillText(turma.curso + ' · ' + turma.periodo + ' · ' + turma.turma, tx, 90);
    ctx.fillStyle = MUTED;
    ctx.font = '400 14px "Segoe UI", Arial, sans-serif';
    ctx.fillText(turma.sala + '  ·  UEMG Unidade Guanhães', tx, 114);

    /* cabeçalho da tabela */
    var y = altoCabec, x0 = M, tabelaW = W - 2 * M;
    caixaRedonda(x0, y, tabelaW, altoTh + corpoAlto, 12);
    ctx.fillStyle = '#FFFFFF'; ctx.fill();
    ctx.save(); ctx.clip();

    ctx.fillStyle = corCurso; ctx.fillRect(x0, y, tabelaW, altoTh);
    ctx.fillStyle = '#FFFFFF';
    ctx.font = '800 12.5px "Segoe UI", Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('HORÁRIO', x0 + colHora / 2, y + 29);
    DIAS.forEach(function (d, i) {
      ctx.fillText(d.toUpperCase(), x0 + colHora + colDia * i + colDia / 2, y + 29);
    });

    /* corpo */
    var yl = y + altoTh;
    linhas.forEach(function (r, ri) {
      if (ri % 2 === 1) { ctx.fillStyle = '#F8FBFD'; ctx.fillRect(x0, yl, tabelaW, r.alto); }
      /* coluna EaD com fundo próprio */
      ctx.fillStyle = 'rgba(113,102,184,.07)';
      ctx.fillRect(x0 + colHora + colDia * 5, yl, colDia, r.alto);
      /* hora */
      ctx.fillStyle = '#F5F9FC'; ctx.fillRect(x0, yl, colHora, r.alto);
      ctx.fillStyle = INK2;
      ctx.font = '700 13px Consolas, monospace';
      ctx.textAlign = 'center';
      ctx.fillText(r.l.rotulo, x0 + colHora / 2, yl + r.alto / 2 + 4);
      /* células */
      r.cels.forEach(function (c, ci) {
        var cx = x0 + colHora + colDia * ci;
        if (!c) {
          ctx.fillStyle = 'rgba(97,121,141,.4)';
          ctx.font = '400 14px "Segoe UI", Arial, sans-serif';
          ctx.fillText('·', cx + colDia / 2, yl + r.alto / 2 + 4);
          return;
        }
        ctx.textAlign = 'left';
        var ty = yl + 24;
        ctx.fillStyle = INK; ctx.font = F_DISC;
        c.disc.forEach(function (ln) { ctx.fillText(ln, cx + 13, ty); ty += 19; });
        ctx.fillStyle = MUTED; ctx.font = F_PROF;
        c.prof.forEach(function (ln) { ty += ci === 0 ? 0 : 0; ctx.fillText(ln, cx + 13, ty); ty += 16; });
        ctx.textAlign = 'center';
      });
      /* divisórias */
      ctx.strokeStyle = HAIR; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(x0, yl); ctx.lineTo(x0 + tabelaW, yl); ctx.stroke();
      yl += r.alto;
    });
    for (var ci = 0; ci <= 6; ci++) {
      var vx = x0 + colHora + colDia * ci;
      if (ci === 6) vx = x0 + tabelaW;
      ctx.beginPath(); ctx.moveTo(ci === 0 ? x0 + colHora : vx, y + altoTh);
      ctx.lineTo(ci === 0 ? x0 + colHora : vx, y + altoTh + corpoAlto); ctx.stroke();
    }
    ctx.restore();
    ctx.strokeStyle = LINHA;
    caixaRedonda(x0, y, tabelaW, altoTh + corpoAlto, 12); ctx.stroke();

    /* rodapé */
    ctx.textAlign = 'left';
    ctx.fillStyle = AZUL;
    ctx.font = '700 15px "Segoe UI", Arial, sans-serif';
    ctx.fillText('naeguanhaes.github.io', M, H - 34);
    ctx.fillStyle = MUTED;
    ctx.font = '400 12.5px "Segoe UI", Arial, sans-serif';
    ctx.fillText('NAE · Núcleo de Apoio ao Estudante · Conferido em ' + U.dataBR(D.atualizadoEm), M + 200, H - 34);

    canvas.toBlob(function (blob) {
      var a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'horarios-' + turma.id + '.png';
      document.body.appendChild(a); a.click();
      setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
      if (U.toast) U.toast('Imagem salva! Procure nos downloads ou na galeria.');
    }, 'image/png');
  }

  /* ── Montagem da lista ────────────────────────────── */
  var artigos = [];
  var cursoAtivo = 'todos', termo = '';

  /* acende as células das aulas de um professor */
  function realcarProfessor(nome) {
    document.querySelectorAll('table.grade td.realce').forEach(function (td) {
      td.classList.remove('realce');
    });
    if (!nome) return;
    document.querySelectorAll('.doc button[data-prof]').forEach(function (b) {
      if (b.getAttribute('data-prof') === nome) {
        var td = b.closest('td');
        if (td) td.classList.add('realce');
      }
    });
  }

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
        realcarProfessor(null);
        aplicar();
      });
    }

    lista.addEventListener('click', function (e) {
      var alvo = e.target.closest('[data-prof], [data-ics], [data-imagem], [data-link], [data-imprimir], [data-minha]');
      if (!alvo) return;

      if (alvo.hasAttribute('data-prof') && campo) {
        var nomeProf = alvo.getAttribute('data-prof');
        campo.value = nomeProf;
        termo = U.normaliza(campo.value);
        cursoAtivo = 'todos';
        document.querySelectorAll('.chip[data-curso]').forEach(function (o) {
          o.setAttribute('aria-pressed', o.getAttribute('data-curso') === 'todos' ? 'true' : 'false');
        });
        aplicar();
        realcarProfessor(nomeProf);
        if (U.toast) U.toast('Mostrando todas as aulas de ' + nomeProf + '.');
        campo.scrollIntoView({ behavior: U.reduzir ? 'auto' : 'smooth', block: 'center' });
        return;
      }

      var id = alvo.getAttribute('data-ics') || alvo.getAttribute('data-imagem') ||
               alvo.getAttribute('data-link') ||
               alvo.getAttribute('data-imprimir') || alvo.getAttribute('data-minha');
      var turma = D.turmas.filter(function (t) { return t.id === id; })[0];
      if (!turma) return;

      if (alvo.hasAttribute('data-ics')) { baixarICS(turma); return; }
      if (alvo.hasAttribute('data-imagem')) { baixarPNG(turma); return; }

      if (alvo.hasAttribute('data-link')) {
        var endereco = window.location.origin + window.location.pathname + '?turma=' + turma.id;
        if (window.location.protocol === 'file:') endereco = window.location.pathname + '?turma=' + turma.id;
        U.copiar(endereco, function () {
          U.toast('Link da turma copiado! Cole no grupo e todo mundo cai direto na grade.');
        });
        return;
      }

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

    /* chegada por link: horarios.html?sala=6 (do mapa) ou ?turma=dir-2 (link copiado) */
    var busca = new URLSearchParams(window.location.search);
    var alvoChegada = null;

    var pedidoTurma = busca.get('turma');
    if (pedidoTurma) {
      alvoChegada = lista.querySelector('.turma[data-turma="' + pedidoTurma.replace(/[^a-z0-9-]/g, '') + '"]');
    }
    if (!alvoChegada) {
      var pedido = busca.get('sala');
      if (!pedido && /^#sala-\d+$/.test(window.location.hash)) pedido = window.location.hash.replace('#sala-', '');
      if (pedido) alvoChegada = lista.querySelector('.turma[data-sala="' + pedido.replace(/[^0-9]/g, '') + '"]');
    }
    if (alvoChegada) {
      alvoChegada.classList.add('destaque');
      setTimeout(function () { alvoChegada.scrollIntoView({ behavior: 'smooth', block: 'center' }); }, 120);
      setTimeout(function () { alvoChegada.classList.remove('destaque'); }, 4500);
    }
  }

  montarPainel();
  /* o relógio do painel acompanha o horário sem recarregar a página */
  setInterval(montarPainel, 60000);
})();
