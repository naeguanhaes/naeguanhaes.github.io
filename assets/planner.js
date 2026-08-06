/* ═══════════════════════════════════════════════════════
   NAE Guanhães · planner do semestre
   ───────────────────────────────────────────────────────
   Monta um caderno de quatro folhas A4 para imprimir:

   1. Semana e disciplinas    2. Mapa do semestre
   3. Controle de notas       4. Faltas e anotações

   Tudo é calculado a partir de window.DADOS_HORARIOS e
   window.DADOS_CALENDARIO: quantidade de aulas por disciplina,
   limite de faltas, semanas do semestre e prazos de cada uma.
   ═══════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var D = window.DADOS_HORARIOS;
  var C = window.DADOS_CALENDARIO;
  var U = window.NAE;
  if (!D || !U) return;

  var folha = document.getElementById('planner-folha');
  var seletor = document.getElementById('planner-turma');
  if (!folha) return;

  var DIAS = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'EaD'];
  var FIM = D.fimSemestre || '2026-12-12';

  function limpo(nome) {
    return String(nome).replace(/\s*\((Híbrida|EaD|Estágio|Optativa)\)\s*$/, '');
  }
  function marca(nome) {
    var m = String(nome).match(/\((Híbrida|EaD|Estágio|Optativa)\)\s*$/);
    return m ? m[1] : '';
  }

  function turmaEscolhida() {
    var pedida = new URLSearchParams(window.location.search).get('turma');
    var id = pedida || U.ler('turma') || (D.turmas[0] && D.turmas[0].id);
    return D.turmas.filter(function (t) { return t.id === id; })[0] || D.turmas[0];
  }

  /* segundas-feiras da semana atual até o fim do semestre */
  function semanas() {
    var hoje = new Date();
    var d = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate());
    d.setDate(d.getDate() - ((d.getDay() + 6) % 7));
    var lista = [], guarda = 0;
    while (U.hojeISO(d) <= FIM && guarda++ < 40) {
      var sexta = new Date(d);
      sexta.setDate(sexta.getDate() + 4);
      lista.push({ ini: U.hojeISO(d), fim: U.hojeISO(sexta) });
      d.setDate(d.getDate() + 7);
    }
    return lista;
  }

  function prazosDa(semana) {
    if (!C) return [];
    return (C.eventos || []).filter(function (ev) {
      return !ev.semData && ev.ini <= semana.fim && ev.fim >= semana.ini;
    });
  }

  /* Cada faixa da grade dura 100 minutos e vale DUAS aulas de 50.
     O horário de 19h às 20h40 são 2 aulas, e o de 20h50 às 22h30 são
     outras 2: uma noite inteira dá 4 aulas, e 4 faltas para quem some. */
  function aulasDaFaixa(linha) {
    if (!linha.ini || !linha.fim) return 2;
    var minutos = U.minutosDe(linha.fim) - U.minutosDe(linha.ini);
    return Math.max(1, Math.round(minutos / 50));
  }

  /* uma entrada por disciplina, com professor, quantas aulas por semana
     e o limite de faltas do semestre */
  function disciplinas(turma, totalSemanas) {
    var mapa = {};
    turma.linhas.forEach(function (l) {
      var aulas = aulasDaFaixa(l);
      l.celulas.forEach(function (cel, col) {
        if (!cel) return;
        var nome = limpo(cel[0]);
        if (!mapa[nome]) {
          mapa[nome] = { nome: nome, tag: marca(cel[0]), prof: D.professores[cel[1]] || '', porSemana: 0, faixas: 0, ead: 0 };
        }
        mapa[nome].porSemana += aulas;
        mapa[nome].faixas++;
        if (col === 5) mapa[nome].ead += aulas;
        if (!mapa[nome].prof && cel[1]) mapa[nome].prof = D.professores[cel[1]] || '';
      });
    });
    var oficial = D.aulasNoSemestre || {};
    return Object.keys(mapa).sort().map(function (k) {
      var d = mapa[k];
      /* o número oficial da coordenação manda mais do que a conta pelo
         calendário, porque já desconta feriados e semanas de avaliação */
      d.total = oficial[d.porSemana] || (d.porSemana * totalSemanas);
      d.limite = Math.floor(d.total * 0.25);
      return d;
    });
  }

  function cabecalhoFolha(t, numero, subtitulo) {
    return '<div class="planner-topo">' +
      '<img src="assets/logo-topo.webp" width="620" height="279" alt="NAE · Núcleo de Apoio ao Estudante">' +
      '<span class="planner-tit">' +
        '<b>Planner do semestre ' + U.escapar(D.semestre || '') + '</b>' +
        '<span>' + U.escapar(t.curso + ' · ' + t.periodo + ' · ' + t.turma + ' · ' + t.sala) + '</span>' +
      '</span>' +
      '<span class="planner-num">Folha ' + numero + ' de 4<small>' + U.escapar(subtitulo) + '</small></span>' +
    '</div>';
  }

  var RODAPE =
    '<div class="planner-rodape">' +
      '<span>NAE · Núcleo de Apoio ao Estudante · Prédio do Administrativo · terças e quintas, das 18h às 19h</span>' +
      '<span>naeguanhaes.github.io</span>' +
    '</div>';

  function montar() {
    var t = turmaEscolhida();
    if (!t) return;

    var sem = semanas();
    var disc = disciplinas(t, sem.length);
    var cor = t.curso === 'Direito' ? 'var(--azul)' : 'var(--verde)';

    /* ── folha 1: a semana e as disciplinas ── */
    var thead = '<tr><th>Horário</th>' + DIAS.map(function (d) { return '<th>' + d + '</th>'; }).join('') + '</tr>';
    var tbody = t.linhas.map(function (l) {
      return '<tr><th scope="row">' + U.escapar(l.rotulo) + '</th>' +
        l.celulas.map(function (cel, i) {
          return '<td' + (i === 5 ? ' class="col-ead"' : '') + '>' +
            (cel ? '<b>' + U.escapar(limpo(cel[0])) + '</b>' +
                   (D.professores[cel[1]] ? '<i>' + U.escapar(D.professores[cel[1]].replace(/^Prof[a]?\.\s*(Me\.|Dr\.|Esp\.)?\s*/, '')) + '</i>' : '')
                 : '') + '</td>';
        }).join('') + '</tr>';
    }).join('');

    var listaDisc = disc.map(function (d) {
      return '<tr>' +
        '<td><b>' + U.escapar(d.nome) + '</b>' + (d.tag ? ' <span class="pl-tag">' + U.escapar(d.tag) + '</span>' : '') + '</td>' +
        '<td>' + U.escapar(d.prof) + '</td>' +
        '<td class="pl-num">' + d.faixas + '</td>' +
        '<td class="pl-num">' + d.porSemana + '</td>' +
        '<td class="pl-num">' + d.total + '</td>' +
        '<td class="pl-num pl-forte">' + d.limite + '</td>' +
      '</tr>';
    }).join('');

    var folha1 =
      '<section class="planner-pagina" style="--c: ' + cor + '">' +
        cabecalhoFolha(t, 1, 'A sua semana') +
        '<div class="planner-nome">' +
          '<span><b>Nome</b><i></i></span>' +
          '<span><b>Matrícula</b><i></i></span>' +
          '<span><b>E-mail institucional</b><i></i></span>' +
        '</div>' +
        '<h3 class="planner-h">Grade de aulas</h3>' +
        '<table class="planner-grade"><thead>' + thead + '</thead><tbody>' + tbody + '</tbody></table>' +
        '<h3 class="planner-h">Disciplinas do semestre</h3>' +
        '<table class="planner-lista">' +
          '<thead><tr><th>Disciplina</th><th>Professor</th><th>Encontros por semana</th><th>Aulas por semana</th><th>Aulas no semestre</th><th>Limite de faltas</th></tr></thead>' +
          '<tbody>' + listaDisc + '</tbody>' +
        '</table>' +
        '<p class="planner-obs"><b>Como a conta é feita</b> Cada faixa da grade dura 100 minutos e vale <b>duas aulas</b> de 50. ' +
        'Uma noite inteira, das 19h às 22h30, são <b>quatro aulas</b>. O total do semestre é o número oficial da coordenação, ' +
        'e o limite de faltas é 25% dele. Disciplinas com aula a distância podem ter controle próprio: confirme no plano de ensino.</p>' +
        RODAPE +
      '</section>';

    /* ── folha 2: mapa do semestre ── */
    var linhasSemana = sem.map(function (s, i) {
      var prazos = prazosDa(s);
      var feriado = prazos.some(function (p) { return p.tipo === 'feriado'; });
      var quando = U.dataBR(s.ini).slice(0, 5) + ' a ' + U.dataBR(s.fim).slice(0, 5);
      var texto = prazos.map(function (p) { return p.titulo; }).join('. ');
      return '<tr' + (prazos.length ? ' class="tem-prazo' + (feriado ? ' tem-feriado' : '') + '"' : '') + '>' +
        '<td class="sem-marca">' + (i + 1) + '</td>' +
        '<td class="sem-data">' + U.escapar(quando) + '</td>' +
        '<td class="sem-prazo">' + (texto ? '<b>' + U.escapar(texto) + '</b>' : '') + '</td>' +
        '<td class="sem-anota"></td>' +
      '</tr>';
    }).join('');

    var folha2 =
      '<section class="planner-pagina" style="--c: ' + cor + '">' +
        cabecalhoFolha(t, 2, 'Mapa do semestre') +
        '<h3 class="planner-h">Semana a semana, até ' + U.dataBR(FIM) + '</h3>' +
        '<table class="planner-semanas">' +
          '<thead><tr><th>Nº</th><th>Semana</th><th>Datas do calendário acadêmico</th><th>Minhas provas e entregas</th></tr></thead>' +
          '<tbody>' + linhasSemana + '</tbody>' +
        '</table>' +
        '<p class="planner-obs">As linhas destacadas têm data oficial do calendário acadêmico. Use a última coluna para anotar as suas provas, seminários e entregas.</p>' +
        RODAPE +
      '</section>';

    /* ── folha 3: controle de notas ── */
    var linhasNota = disc.map(function (d) {
      return '<tr>' +
        '<td class="pl-disc">' + U.escapar(d.nome) + '</td>' +
        '<td></td><td></td><td></td><td></td>' +
        '<td class="pl-soma"></td>' +
        '<td class="pl-soma"></td>' +
      '</tr>';
    }).join('');

    var folha3 =
      '<section class="planner-pagina" style="--c: ' + cor + '">' +
        cabecalhoFolha(t, 3, 'Controle de notas') +
        '<div class="planner-regra">' +
          '<b>A regra</b> São <b>100 pontos</b> distribuídos no semestre. Para ser aprovado, você precisa somar <b>60 pontos</b> e ter <b>75% de presença</b>.' +
        '</div>' +
        '<h3 class="planner-h">Anote cada nota assim que sair</h3>' +
        '<table class="planner-notas-tab">' +
          '<thead><tr><th>Disciplina</th><th>Aval. 1</th><th>Aval. 2</th><th>Aval. 3</th><th>Aval. 4</th><th>Total</th><th>Faltam</th></tr></thead>' +
          '<tbody>' + linhasNota + '</tbody>' +
        '</table>' +
        '<p class="planner-obs">Na coluna <b>Faltam</b>, escreva quantos pontos ainda precisa para chegar aos 60. A calculadora do site faz essa conta: naeguanhaes.github.io/calculadora.html</p>' +
        '<div class="planner-caixas">' +
          '<div class="planner-caixa"><b>Metas do semestre</b><span class="planner-linhas"><i></i><i></i><i></i><i></i></span></div>' +
          '<div class="planner-caixa"><b>Livros e materiais</b><span class="planner-linhas"><i></i><i></i><i></i><i></i></span></div>' +
        '</div>' +
        RODAPE +
      '</section>';

    /* ── folha 4: faltas e anotações ── */
    var linhasFalta = disc.map(function (d) {
      var quadros = '';
      var quantos = Math.max(6, Math.min(d.limite, 28));
      for (var i = 0; i < quantos; i++) {
        /* a cada 4, um respiro: é o tamanho de uma noite inteira de aula */
        quadros += '<i' + ((i + 1) % 4 === 0 && i + 1 < quantos ? ' class="grupo"' : '') + '></i>';
      }
      return '<tr>' +
        '<td class="pl-disc">' + U.escapar(d.nome) + '</td>' +
        '<td class="pl-num pl-forte">' + d.limite + '</td>' +
        '<td class="pl-quadros">' + quadros + '</td>' +
      '</tr>';
    }).join('');

    var folha4 =
      '<section class="planner-pagina" style="--c: ' + cor + '">' +
        cabecalhoFolha(t, 4, 'Faltas e anotações') +
        '<div class="planner-regra">' +
          '<b>Atenção</b> Cada faixa da grade vale <b>duas aulas</b>: das 19h às 20h40 são duas, ' +
          'e das 20h50 às 22h30 são mais duas. Faltou a noite inteira, marque <b>quatro quadrados</b>. ' +
          'Os quadrados estão agrupados de quatro em quatro justamente por isso.' +
        '</div>' +
        '<h3 class="planner-h">Marque um quadrado a cada falta</h3>' +
        '<table class="planner-faltas">' +
          '<thead><tr><th>Disciplina</th><th>Limite</th><th>Faltas usadas</th></tr></thead>' +
          '<tbody>' + linhasFalta + '</tbody>' +
        '</table>' +
        '<div class="planner-caixas">' +
          '<div class="planner-caixa alta"><b>Anotações livres</b><span class="planner-linhas"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></span></div>' +
        '</div>' +
        '<div class="planner-contatos">' +
          '<b>Guarde estes contatos</b>' +
          '<span>NAE · nae.guanhaes@uemg.br · Prédio do Administrativo · terças e quintas, das 18h às 19h</span>' +
          '<span>Secretaria acadêmica · secretaria.guanhaes@uemg.br · (33) 3450-0939</span>' +
          '<span>CAPS I Guanhães · (33) 3421-3345 · Praça Néria Coelho Guimarães, 36, Centro</span>' +
          '<span>CVV · 188 · gratuito e a qualquer hora</span>' +
        '</div>' +
        RODAPE +
      '</section>';

    folha.innerHTML = folha1 + folha2 + folha3 + folha4;
  }

  if (seletor) {
    var atual = turmaEscolhida();
    seletor.innerHTML = D.turmas.map(function (t) {
      return '<option value="' + t.id + '"' + (atual && t.id === atual.id ? ' selected' : '') + '>' +
             U.escapar(t.curso + ' · ' + t.periodo) + '</option>';
    }).join('');
    seletor.addEventListener('change', function () {
      var url = new URL(window.location.href);
      url.searchParams.set('turma', seletor.value);
      window.history.replaceState({}, '', url);
      montar();
    });
  }

  var botao = document.getElementById('planner-imprimir');
  if (botao) botao.addEventListener('click', function () { window.print(); });

  montar();
})();
