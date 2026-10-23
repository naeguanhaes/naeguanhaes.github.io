/* ═══════════════════════════════════════════════════════
   NAE Guanhães · páginas do curso
   Lê window.DADOS_CURSO (assets/dados-curso.js) e monta:
     · o seletor de curso, que fica lembrado entre as visitas
     · o mapa do curso período a período e o checklist da formatura
     · a matriz curricular com marcação do que já foi cursado
     · o somador de atividades complementares
     · os quadros de estágio, TCC e regras da secretaria
   Tudo o que o estudante marca fica só no aparelho dele.
   ═══════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var U = window.NAE;
  var D = window.DADOS_CURSO;
  if (!U || !D) return;

  var cursos = D.cursos || [];
  if (!cursos.length) return;

  /* ── Qual curso mostrar ───────────────────────────── */
  function cursoInicial() {
    var salvo = U.ler('curso');
    if (salvo && achar(salvo)) return salvo;
    /* quem já escolheu a turma na grade não precisa escolher de novo */
    var turma = U.ler('turma');
    if (turma && window.DADOS_HORARIOS) {
      var t = (window.DADOS_HORARIOS.turmas || []).filter(function (x) { return x.id === turma; })[0];
      if (t) return t.curso === 'Direito' ? 'direito' : 'engenharia';
    }
    return cursos[0].id;
  }
  function achar(id) {
    return cursos.filter(function (c) { return c.id === id; })[0];
  }

  var atual = cursoInicial();
  var ouvintes = [];
  function aoTrocar(fn) { ouvintes.push(fn); fn(achar(atual)); }
  function trocar(id) {
    if (!achar(id) || id === atual) return;
    atual = id;
    U.guardar('curso', id);
    marcarBotoes();
    ouvintes.forEach(function (fn) { fn(achar(atual)); });
  }

  function marcarBotoes() {
    document.querySelectorAll('[data-curso-btn]').forEach(function (b) {
      var meu = b.getAttribute('data-curso-btn') === atual;
      b.setAttribute('aria-pressed', meu ? 'true' : 'false');
    });
  }

  (function montarSeletor() {
    document.querySelectorAll('[data-curso-seletor]').forEach(function (caixa) {
      caixa.innerHTML = '<div class="chips" role="group" aria-label="Escolher o curso">' +
        cursos.map(function (c) {
          return '<button class="chip" type="button" data-curso-btn="' + c.id + '" ' +
                 'aria-pressed="false" style="--c: ' + c.cor + '">' + U.escapar(c.nome) + '</button>';
        }).join('') + '</div>';
    });
    document.querySelectorAll('[data-curso-btn]').forEach(function (b) {
      b.addEventListener('click', function () { trocar(b.getAttribute('data-curso-btn')); });
    });
    marcarBotoes();
  })();

  /* ── Identificação do curso ───────────────────────── */
  var cabecalho = document.getElementById('curso-cabecalho');
  if (cabecalho) {
    aoTrocar(function (c) {
      cabecalho.innerHTML =
        '<div class="card col" style="--c: ' + c.cor + '">' +
          '<span class="rotulo">' + U.escapar(c.grau) + ' em ' + U.escapar(c.nome) + '</span>' +
          '<h2>' + c.cargaTotal.toLocaleString('pt-BR') + ' horas, ' + c.creditos + ' créditos</h2>' +
          '<ul class="limpa" style="--c: ' + c.cor + '">' +
            '<li>Integralização: mínimo de ' + c.integralizacao.min + ' semestres, máximo de ' + c.integralizacao.max + '.</li>' +
            '<li>Turno: ' + U.escapar(c.turno.toLowerCase()) + ', com ' + c.vagas + ' vagas por ano.</li>' +
            '<li>Formas de ingresso: vestibular, Sisu, reopção, transferência e obtenção de novo título.</li>' +
          '</ul>' +
          '<p class="fonte-ppc">Fonte: ' + U.escapar(c.fonte) + '.</p>' +
        '</div>';
    });
  }

  /* ── Perfil do egresso e áreas de atuação ─────────── */
  var egressoEl = document.getElementById('egresso-painel');
  if (egressoEl) {
    aoTrocar(function (c) {
      var e = c.egresso;
      if (!e) { egressoEl.innerHTML = ''; return; }
      egressoEl.innerHTML =
        '<div class="card col" style="--c: ' + c.cor + '">' +
          '<span class="rotulo">Onde este curso leva</span>' +
          '<h2>O que se espera de quem se forma</h2>' +
          '<p>' + U.escapar(e.resumo) + '</p>' +
          '<ul class="limpa" style="--c: ' + c.cor + '">' +
            e.perfil.map(function (p) { return '<li>' + U.escapar(p) + '</li>'; }).join('') +
          '</ul>' +
        '</div>' +
        '<div class="card col" style="--c: var(--verde)">' +
          '<span class="rotulo">Mercado</span>' +
          '<h2>' + U.escapar(e.atuacaoTitulo) + '</h2>' +
          '<div class="atuacao-selos">' +
            e.atuacao.map(function (a) {
              return '<span class="atuacao-selo">' + U.escapar(a) + '</span>';
            }).join('') +
          '</div>' +
          '<p class="fonte-ppc">' + U.escapar(e.atuacaoNota) + '</p>' +
        '</div>';
    });
  }

  /* ── Matriz curricular ────────────────────────────── */
  /* ── Ementa e bibliografia de cada disciplina ─────── */
  var EMENTAS = window.DADOS_EMENTAS || null;

  function ementaDe(curso, chave) {
    if (!EMENTAS || !EMENTAS[curso.id]) return null;
    return EMENTAS[curso.id][chave] || null;
  }

  function botaoEmenta(curso, chave, nome) {
    if (!ementaDe(curso, chave)) return '';
    return '<button class="disc-ementa" type="button" data-ementa="' + U.escapar(chave) + '"' +
           ' aria-expanded="false" aria-label="Ver a ementa de ' + U.escapar(nome) + '">' +
           'ementa e bibliografia</button>' +
           '<div class="ementa-caixa" hidden></div>';
  }

  function montaEmenta(e) {
    function listaRefs(titulo, refs) {
      if (!refs || !refs.length) return '';
      return '<div class="ementa-biblio">' +
               '<b>' + titulo + '</b>' +
               '<ol>' + refs.map(function (r) { return '<li>' + U.escapar(r) + '</li>'; }).join('') + '</ol>' +
             '</div>';
    }
    return '<div class="ementa-txt"><b>Ementa</b><p>' + U.escapar(e.ementa) + '</p></div>' +
           listaRefs('Bibliografia básica', e.basica) +
           listaRefs('Bibliografia complementar', e.complementar) +
           (!e.basica.length && !e.complementar.length
             ? '<p class="ementa-nota">O PPC não traz bibliografia para esta disciplina. O professor indica a leitura no plano de ensino.</p>'
             : '');
  }

  /* Um só ouvinte para a lista inteira, em vez de um por disciplina.
     O curso é lido na hora do clique, porque o estudante pode trocar
     de Direito para Engenharia com a lista já na tela. */
  function ligarEmentas(caixaRaiz) {
    caixaRaiz.addEventListener('click', function (ev) {
      var b = ev.target.closest('[data-ementa]');
      if (!b || !caixaRaiz.contains(b)) return;
      var alvo = b.nextElementSibling;
      if (!alvo || !alvo.classList.contains('ementa-caixa')) return;

      var abrindo = alvo.hidden;
      if (abrindo && !alvo.innerHTML) {
        var e = ementaDe(achar(atual), b.getAttribute('data-ementa'));
        if (!e) return;
        alvo.innerHTML = montaEmenta(e);
      }
      alvo.hidden = !abrindo;
      b.setAttribute('aria-expanded', abrindo ? 'true' : 'false');
      b.textContent = abrindo ? 'fechar a ementa' : 'ementa e bibliografia';
    });
  }

  var matriz = document.getElementById('matriz-lista');
  if (matriz) {
    var resumoEl = document.getElementById('matriz-resumo');

    function chaveCursadas(c) { return 'cursadas-' + c.id; }
    function lerCursadas(c) {
      var lista = [];
      try { lista = JSON.parse(U.ler(chaveCursadas(c)) || '[]'); } catch (e) { lista = []; }
      return Array.isArray(lista) ? lista : [];
    }
    function guardarCursadas(c, lista) {
      U.guardar(chaveCursadas(c), JSON.stringify(lista));
    }

    function todas(c) {
      var saida = [];
      c.periodos.forEach(function (p) {
        p.disciplinas.forEach(function (d) { saida.push(d); });
      });
      return saida;
    }

    function desenhar(c) {
      var feitas = lerCursadas(c);
      var lista = todas(c);
      var horasTotais = 0, horasFeitas = 0;
      lista.forEach(function (d) {
        horasTotais += d.ch;
        if (feitas.indexOf(d.cod) !== -1) horasFeitas += d.ch;
      });

      /* o período que o estudante disse cursar, na página de atividades,
         já abre; sem essa informação, todos começam fechados */
      var meuPeriodo = parseInt(U.ler('periodo-' + c.id) || '0', 10);

      matriz.innerHTML = c.periodos.map(function (p) {
        var chPeriodo = p.disciplinas.reduce(function (s, d) { return s + d.ch; }, 0);
        var feitasAqui = p.disciplinas.filter(function (d) { return feitas.indexOf(d.cod) !== -1; }).length;
        var completo = feitasAqui === p.disciplinas.length;
        var abrir = p.n === meuPeriodo;

        return '<details class="periodo' + (completo ? ' periodo-ok' : '') + '"' +
                 ' style="--c: ' + c.cor + '"' + (abrir ? ' open' : '') + ' data-periodo="' + p.n + '">' +
          '<summary>' +
            '<h2 class="periodo-h" id="periodo-' + p.n + '">' + p.n + 'º período</h2>' +
            '<span class="periodo-conta">' +
              p.disciplinas.length + (p.disciplinas.length === 1 ? ' disciplina' : ' disciplinas') +
              (feitasAqui ? ', <b>' + feitasAqui + ' cursada' + (feitasAqui > 1 ? 's' : '') + '</b>' : '') +
            '</span>' +
            '<span class="periodo-ch">' + chPeriodo + ' h</span>' +
            '<span class="periodo-mais" aria-hidden="true">+</span>' +
          '</summary>' +
          '<ul class="disciplinas">' +
            p.disciplinas.map(function (d) {
              var feita = feitas.indexOf(d.cod) !== -1;
              var travas = (d.pre || []).filter(function (cod) { return feitas.indexOf(cod) === -1; });
              var liberada = !travas.length;
              var nomes = (d.pre || []).map(function (cod) {
                var alvo = lista.filter(function (x) { return x.cod === cod; })[0];
                return alvo ? alvo.nome : cod;
              });
              return '<li class="disciplina' + (feita ? ' feita' : '') +
                       (!feita && !liberada ? ' travada' : '') + '">' +
                '<label>' +
                  '<input type="checkbox" data-cod="' + d.cod + '"' + (feita ? ' checked' : '') + '>' +
                  '<span class="disc-nome">' + U.escapar(d.nome) +
                    (d.tipo === 'op' ? ' <span class="etiqueta">optativa</span>' : '') +
                    (d.tipo === 'at' ? ' <span class="etiqueta">atividade</span>' : '') +
                  '</span>' +
                '</label>' +
                '<span class="disc-ch">' + d.ch + ' h</span>' +
                botaoEmenta(c, d.cod, d.nome) +
                (nomes.length
                  ? '<span class="disc-pre">Depende de: ' + U.escapar(nomes.join(', ')) +
                    (liberada ? '' : ' <b>(ainda falta cursar)</b>') + '</span>'
                  : '') +
              '</li>';
            }).join('') +
          '</ul>' +
        '</details>';
      }).join('') +
      '<div class="periodos-topo">' +
        '<button class="btn ghost pequeno" type="button" id="abrir-periodos" style="--c: ' + c.cor + '">' +
          'Abrir todos os períodos</button>' +
      '</div>';

      var btnTodos = matriz.querySelector('#abrir-periodos');
      if (btnTodos) {
        btnTodos.addEventListener('click', function () {
          var abrir = btnTodos.getAttribute('data-aberto') !== 'sim';
          matriz.querySelectorAll('details.periodo').forEach(function (d) { d.open = abrir; });
          btnTodos.setAttribute('data-aberto', abrir ? 'sim' : 'nao');
          btnTodos.textContent = abrir ? 'Fechar todos os períodos' : 'Abrir todos os períodos';
        });
      }

      matriz.querySelectorAll('input[data-cod]').forEach(function (caixa) {
        caixa.addEventListener('change', function () {
          var cod = caixa.getAttribute('data-cod');
          var atuais = lerCursadas(c);
          var onde = atuais.indexOf(cod);
          if (caixa.checked && onde === -1) atuais.push(cod);
          if (!caixa.checked && onde !== -1) atuais.splice(onde, 1);
          guardarCursadas(c, atuais);
          desenhar(c);
        });
      });

      if (resumoEl) {
        var porcento = horasTotais ? Math.round(horasFeitas / horasTotais * 100) : 0;
        resumoEl.innerHTML =
          '<div class="progresso" role="group" aria-label="Progresso no curso">' +
            '<div class="progresso-topo">' +
              '<b>' + porcento + '% da matriz</b>' +
              '<span>' + horasFeitas.toLocaleString('pt-BR') + ' de ' +
                horasTotais.toLocaleString('pt-BR') + ' horas marcadas</span>' +
            '</div>' +
            '<div class="barra"><span style="width: ' + porcento + '%; background: ' + c.cor + '"></span></div>' +
            '<p class="progresso-nota">A marcação fica só neste aparelho e não substitui o histórico ' +
            'oficial do Lyceum. Ela serve para você enxergar o caminho e planejar a matrícula.' +
            (horasFeitas ? ' <button class="btn-limpo" type="button" data-limpar-matriz>Limpar as marcações</button>' : '') +
            '</p>' +
          '</div>';

        var limpar = resumoEl.querySelector('[data-limpar-matriz]');
        if (limpar) {
          limpar.addEventListener('click', function () {
            guardarCursadas(c, []);
            desenhar(c);
            U.toast('Marcações apagadas.');
          });
        }
      }
    }

    aoTrocar(desenhar);
    ligarEmentas(matriz);
  }

  /* ── Ementas das optativas ────────────────────────── */
  var optativasEl = document.getElementById('optativas-lista');
  if (optativasEl) {
    aoTrocar(function (c) {
      var lista = c.optativas || [];
      if (!lista.length) {
        optativasEl.innerHTML = '<p class="ativ-vazio">' + U.escapar(c.optativasNota || '') + '</p>';
        return;
      }
      optativasEl.innerHTML =
        '<p class="ementa-nota">' + U.escapar(c.optativasNota || '') + '</p>' +
        '<ul class="disciplinas">' + lista.map(function (nome) {
          return '<li class="disciplina">' +
            '<span class="disc-nome">' + U.escapar(nome) + '</span>' +
            botaoEmenta(c, 'OPT:' + nome, nome) +
          '</li>';
        }).join('') + '</ul>';
    });
    ligarEmentas(optativasEl);
  }

  /* Chegada pela busca: matriz.html?d=CHAVE troca para o curso dono da
     disciplina, abre o período, abre a ementa e rola até ela. Fica aqui,
     depois da matriz e das optativas, porque precisa das duas montadas. */
  if (matriz || optativasEl) {
    (function chegadaPelaBusca() {
      var pedida = new URLSearchParams(window.location.search).get('d');
      if (!pedida) return;

      var dono = cursos.filter(function (c) {
        return EMENTAS && EMENTAS[c.id] && EMENTAS[c.id][pedida];
      })[0];
      if (dono && dono.id !== atual) trocar(dono.id);

      var seletor = '[data-ementa="' + pedida.replace(/"/g, '\\"') + '"]';
      setTimeout(function () {
        var btn = (matriz && matriz.querySelector(seletor)) ||
                  (optativasEl && optativasEl.querySelector(seletor));
        if (!btn) return;

        var caixaPeriodo = btn.closest('details.periodo');
        if (caixaPeriodo) caixaPeriodo.open = true;
        if (btn.getAttribute('aria-expanded') !== 'true') btn.click();
        btn.scrollIntoView({ behavior: U.reduzir ? 'auto' : 'smooth', block: 'center' });

        var linha = btn.closest('li');
        if (linha) {
          linha.classList.add('disc-destaque');
          setTimeout(function () { linha.classList.remove('disc-destaque'); }, 4000);
        }
      }, 150);
    })();
  }

  /* ── Limites do PPC para as atividades complementares ── */
  /* Cada lançamento pode trazer a modalidade do quadro do PPC (mod, o
     índice na tabela) e o semestre (sem, "2026.1"). Com isso o somador
     confere o limite por semestre ("30 h por semestre") e o teto da
     modalidade; o que passa não entra na conta das horas que valem. O
     valor por unidade ("1 h por defesa") não corta nada, porque um
     lançamento pode juntar várias defesas.
     Lançamento antigo, sem modalidade, é reconhecido pelo nome quando
     ele é igual ao da tabela (o "+ adicionar" copia o nome). */
  function limitesDa(l) {
    var t = l.porEvento || '';
    var nums = [], m, re = /(\d+)\s*h\b/g;
    while ((m = re.exec(t))) nums.push(parseInt(m[1], 10));
    if (!nums.length) return {};
    return /por semestre/i.test(t) ? { semestre: nums[0] } : {};
  }
  function modalidadeDe(c, a) {
    var tab = c.atividades.tabela;
    if (typeof a.mod === 'number' && tab[a.mod]) return a.mod;
    var d = U.normaliza(a.desc || '').trim();
    for (var i = 0; i < tab.length; i++) {
      var nome = U.normaliza(tab[i].atividade);
      if (d === nome || (d.length > 25 && nome.indexOf(d) === 0)) return i;
    }
    return null;
  }
  function analisarAtividades(c, lista) {
    var tab = c.atividades.tabela;
    var itens = lista.map(function (a) {
      var mod = modalidadeDe(c, a);
      return { mod: mod, horas: Number(a.horas) || 0, conta: Number(a.horas) || 0, sem: a.sem || '', alertas: [], avisos: [] };
    });
    /* 1. sem o semestre, só um aviso: o lançamento pode juntar mais de um */
    itens.forEach(function (it) {
      if (it.mod === null || it.sem) return;
      var lim = limitesDa(tab[it.mod]);
      if (lim.semestre && it.horas > lim.semestre) {
        it.avisos.push('Vale até ' + lim.semestre + ' h por semestre: diga o semestre, ou lance um item para cada');
      }
    });
    /* 2. limite por semestre, somando a mesma modalidade no mesmo semestre */
    var grupos = {};
    itens.forEach(function (it) {
      if (it.mod === null || !it.sem) return;
      var lim = limitesDa(tab[it.mod]);
      if (!lim.semestre) return;
      var k = it.mod + '|' + it.sem;
      (grupos[k] = grupos[k] || { lim: lim.semestre, sem: it.sem, itens: [] }).itens.push(it);
    });
    Object.keys(grupos).forEach(function (k) {
      var g = grupos[k];
      var soma = g.itens.reduce(function (s, it) { return s + it.conta; }, 0);
      if (soma <= g.lim) return;
      var sobra = soma - g.lim;
      g.itens.forEach(function (it) { it.alertas.push('Passa do limite de ' + g.lim + ' h em ' + g.sem + ': são ' + soma + ' h'); });
      for (var i = g.itens.length - 1; i >= 0 && sobra > 0; i--) {
        var corte = Math.min(sobra, g.itens[i].conta);
        g.itens[i].conta -= corte; sobra -= corte;
      }
    });
    /* 3. teto da modalidade */
    tab.forEach(function (l, mod) {
      var daMod = itens.filter(function (it) { return it.mod === mod; });
      var soma = daMod.reduce(function (s, it) { return s + it.conta; }, 0);
      if (!daMod.length || soma <= l.teto) return;
      var sobra = soma - l.teto;
      daMod.forEach(function (it) { it.alertas.push('Passa do teto de ' + l.teto + ' h desta modalidade: são ' + soma + ' h'); });
      for (var i = daMod.length - 1; i >= 0 && sobra > 0; i--) {
        var corte = Math.min(sobra, daMod[i].conta);
        daMod[i].conta -= corte; sobra -= corte;
      }
    });
    return {
      itens: itens,
      lancadas: itens.reduce(function (s, it) { return s + it.horas; }, 0),
      contam: itens.reduce(function (s, it) { return s + it.conta; }, 0)
    };
  }
  /* semestres para o campo do formulário: seis anos para trás e um à frente */
  function semestresRecentes() {
    var ano = new Date().getFullYear(), lista = [];
    for (var a = ano + 1; a >= ano - 6; a--) lista.push(a + '.2', a + '.1');
    return lista;
  }

  /* ── Atividades complementares ────────────────────── */
  var atividades = document.getElementById('atividades-painel');
  /* prepara o formulário com uma modalidade escolhida na tabela; quem
     preenche é o painel, quando existe */
  var prepararLancamento = null;
  if (atividades) {
    /* índice do item em edição, ou null quando o formulário lança um novo */
    var editando = null;
    var cursoDoEditando = null;

    function chaveAtiv(c) { return 'atividades-' + c.id; }
    function lerAtiv(c) {
      var lista = [];
      try { lista = JSON.parse(U.ler(chaveAtiv(c)) || '[]'); } catch (e) { lista = []; }
      return Array.isArray(lista) ? lista : [];
    }
    function guardarAtiv(c, lista) { U.guardar(chaveAtiv(c), JSON.stringify(lista)); }

    function chavePeriodo(c) { return 'periodo-' + c.id; }

    function desenharAtiv(c) {
      if (cursoDoEditando !== c.id) { editando = null; cursoDoEditando = c.id; }
      var lancadas = lerAtiv(c);
      var emEdicao = editando !== null && lancadas[editando] ? lancadas[editando] : null;
      if (!emEdicao) editando = null;
      var analise = analisarAtividades(c, lancadas);
      var soma = analise.contam;
      var alvo = c.atividades.total;
      var porcento = Math.min(100, Math.round(soma / alvo * 100));
      var faltam = Math.max(0, alvo - soma);

      /* ritmo: o total dividido pelos períodos do curso */
      var periodos = (c.periodos && c.periodos.length) || c.integralizacao.min || 10;
      var porSemestre = Math.ceil(alvo / periodos);

      /* onde o estudante está, para dizer se o ritmo está em dia */
      var meu = parseInt(U.ler(chavePeriodo(c)) || '0', 10);
      var esperado = meu ? Math.min(alvo, Math.round(alvo / periodos * meu)) : 0;
      var restamPeriodos = meu ? Math.max(0, periodos - meu) : 0;

      var diagnostico = '';
      if (meu) {
        if (soma >= alvo) {
          diagnostico = '<div class="calc-res boa">Carga completa. Agora é protocolar na Coordenação, se ainda não protocolou.</div>';
        } else if (soma >= esperado) {
          diagnostico = '<div class="calc-res boa">Ritmo em dia. Quem está no <b>' + meu + 'º período</b> ' +
            'costuma ter cerca de <b>' + esperado + ' horas</b>, e você tem <b>' + soma + '</b>.' +
            (restamPeriodos ? ' Faltam ' + faltam + ' horas em ' + restamPeriodos +
              (restamPeriodos === 1 ? ' período' : ' períodos') + ', cerca de ' +
              Math.ceil(faltam / restamPeriodos) + ' por semestre.' : '') + '</div>';
        } else {
          var atraso = esperado - soma;
          diagnostico = '<div class="calc-res ' + (restamPeriodos ? 'olho' : 'ruim') + '">' +
            'Atenção ao ritmo. No <b>' + meu + 'º período</b> o esperado seria cerca de <b>' + esperado +
            ' horas</b>, e você tem <b>' + soma + '</b>: são <b>' + atraso + ' horas</b> de atraso.' +
            (restamPeriodos
              ? ' Ainda dá tempo: faltam ' + faltam + ' horas em ' + restamPeriodos +
                (restamPeriodos === 1 ? ' período' : ' períodos') + ', cerca de ' +
                Math.ceil(faltam / restamPeriodos) + ' por semestre.'
              : ' Você está no último período: procure a Coordenação com urgência, porque sem estas horas não há colação de grau.') +
            '</div>';
        }
      }

      var opcoes = ['<option value="0"' + (meu ? '' : ' selected') + '>escolher…</option>'];
      for (var p = 1; p <= periodos; p++) {
        opcoes.push('<option value="' + p + '"' + (p === meu ? ' selected' : '') + '>' + p + 'º período</option>');
      }

      function etiquetasDo(it) {
        var l = it.mod !== null ? c.atividades.tabela[it.mod] : null;
        var tags = l
          ? '<span class="ativ-tag">' + U.escapar(l.grupo) + ' · teto ' + l.teto + ' h' + (it.sem ? ' · ' + U.escapar(it.sem) : '') + '</span>'
          : '<span class="ativ-tag ativ-tag-sem">sem modalidade: escolha em editar para conferir o teto</span>';
        tags += it.alertas.map(function (al) { return '<span class="ativ-tag ativ-tag-alerta">' + U.escapar(al) + '</span>'; }).join('');
        tags += it.avisos.map(function (av) { return '<span class="ativ-tag ativ-tag-aviso">' + U.escapar(av) + '</span>'; }).join('');
        if (it.conta < it.horas) tags += '<span class="ativ-tag ativ-tag-alerta">contam ' + it.conta + ' de ' + it.horas + ' h</span>';
        return '<p class="ativ-tags">' + tags + '</p>';
      }

      atividades.innerHTML =
        '<div class="card col" style="--c: ' + c.cor + '">' +
          '<span class="rotulo">' + U.escapar(c.nome) + '</span>' +
          '<h2>' + soma + ' de ' + alvo + ' horas que contam</h2>' +
          '<div class="barra"><span style="width: ' + porcento + '%; background: ' + c.cor + '"></span></div>' +
          '<p>' + (faltam
            ? 'Faltam <b>' + faltam + ' horas</b> para completar as atividades complementares.'
            : 'Você já registrou a carga horária completa. Guarde os comprovantes e protocole na Coordenação.') + '</p>' +
          (analise.lancadas > analise.contam
            ? '<div class="calc-res olho">Você lançou <b>' + analise.lancadas + ' horas</b>, mas pelas regras do PPC ' +
              'contam <b>' + analise.contam + '</b>: ' + (analise.lancadas - analise.contam) + ' horas passam dos limites. ' +
              'As etiquetas em vermelho na lista mostram onde.</div>'
            : '') +
          '<div class="ritmo-caixa">' +
            '<span class="ritmo-alvo"><b>' + porSemestre + ' h</b>por semestre</span>' +
            '<span class="ritmo-txt">É o ritmo que zera a conta sem sufoco: <b>' + alvo + ' horas</b> ' +
            'divididas pelos <b>' + periodos + ' períodos</b> do curso. Nada obriga a fazer exatamente ' +
            'isso a cada semestre, mas quem segue esse ritmo chega tranquilo ao fim.</span>' +
          '</div>' +
          '<div class="minha-turma" style="border:0;padding-left:0">' +
            '<label for="ativ-periodo">Estou no</label>' +
            '<select id="ativ-periodo">' + opcoes.join('') + '</select>' +
          '</div>' +
          diagnostico +
          '<form class="ativ-form' + (emEdicao ? ' editando' : '') + '" id="ativ-form">' +
            (emEdicao ? '<p class="ativ-editando-aviso">Editando: <b>' + U.escapar(emEdicao.desc) + '</b></p>' : '') +
            '<div class="field">' +
              '<label for="ativ-desc">O que você fez</label>' +
              '<input id="ativ-desc" type="text" autocomplete="off" maxlength="160" placeholder="Monitoria de Direito Civil 1, 2026.1"' +
              (emEdicao ? ' value="' + U.escapar(emEdicao.desc) + '"' : '') + '>' +
            '</div>' +
            '<div class="field campo-curto">' +
              '<label for="ativ-horas">Horas</label>' +
              '<input id="ativ-horas" type="number" min="1" max="500" inputmode="numeric" placeholder="30"' +
              (emEdicao ? ' value="' + emEdicao.horas + '"' : '') + '>' +
            '</div>' +
            '<div class="field campo-modalidade">' +
              '<label for="ativ-mod">Modalidade do PPC (para conferir o teto)</label>' +
              '<select id="ativ-mod"><option value="">não sei ou não está na tabela</option>' +
              c.atividades.tabela.map(function (l, i) {
                var sel = emEdicao && modalidadeDe(c, emEdicao) === i;
                return '<option value="' + i + '"' + (sel ? ' selected' : '') + '>' +
                  U.escapar(l.grupo + ': ' + (l.atividade.length > 70 ? l.atividade.slice(0, 68) + '…' : l.atividade)) +
                  ' (teto ' + l.teto + ' h)</option>';
              }).join('') + '</select>' +
            '</div>' +
            '<div class="field campo-curto">' +
              '<label for="ativ-sem">Semestre</label>' +
              '<select id="ativ-sem"><option value="">opcional</option>' +
              semestresRecentes().map(function (sm) {
                return '<option' + (emEdicao && emEdicao.sem === sm ? ' selected' : '') + '>' + sm + '</option>';
              }).join('') + '</select>' +
            '</div>' +
            '<div class="field campo-detalhes">' +
              '<label for="ativ-det">Detalhes (opcional)</label>' +
              '<textarea id="ativ-det" rows="2" maxlength="300" placeholder="Onde está o certificado, número do protocolo, observações">' +
              (emEdicao && emEdicao.det ? U.escapar(emEdicao.det) : '') + '</textarea>' +
            '</div>' +
            '<div class="ativ-form-acoes">' +
              '<button class="btn" type="submit" style="--c: ' + c.cor + '">' + (emEdicao ? 'Salvar alteração' : 'Lançar') + '</button>' +
              (emEdicao ? '<button class="btn ghost" type="button" id="ativ-cancelar" style="--c: ' + c.cor + '">Cancelar</button>' : '') +
            '</div>' +
          '</form>' +
          (lancadas.length
            ? '<ul class="ativ-lista">' + lancadas.map(function (a, i) {
                return '<li' + (i === editando ? ' class="em-edicao"' : '') + '>' +
                  '<div class="ativ-item-topo"><span>' + U.escapar(a.desc) + '</span>' +
                  '<b>' + a.horas + ' h</b>' +
                  '<span class="ativ-item-acoes">' +
                    '<button class="btn-limpo" type="button" data-editar="' + i + '" ' +
                    'aria-label="Editar ' + U.escapar(a.desc) + '">editar</button>' +
                    '<button class="btn-limpo" type="button" data-tirar="' + i + '" ' +
                    'aria-label="Tirar ' + U.escapar(a.desc) + ' da lista">tirar</button>' +
                  '</span></div>' +
                  (a.det ? '<p class="ativ-det">' + U.escapar(a.det) + '</p>' : '') +
                  etiquetasDo(analise.itens[i]) +
                '</li>';
              }).join('') + '</ul>'
            : '<p class="ativ-vazio">Nada lançado ainda. Comece pelo que você já fez neste semestre.</p>') +
          '<div class="ativ-arquivo">' +
            (lancadas.length
              ? (c.atividades.requerimento
                  ? '<a class="btn" href="requerimentos.html?tipo=atividades" data-ativ-req style="--c: ' + c.cor + '">Montar o requerimento</a>'
                  : '<button class="btn" type="button" data-ativ-copiar style="--c: ' + c.cor + '">Copiar a lista</button>') +
                '<button class="btn ghost" type="button" data-ativ-baixar style="--c: ' + c.cor + '">Baixar minha lista</button>'
              : '') +
            '<label class="btn ghost" style="--c: ' + c.cor + '">Carregar uma lista salva' +
              '<input type="file" accept=".json,application/json" data-ativ-carregar class="so-leitor"></label>' +
          '</div>' +
          '<p class="progresso-nota">Esta conta fica só no seu aparelho e não vale como protocolo. ' +
          'O que vale é o requerimento entregue à Coordenação do Curso, com os comprovantes. ' +
          'Para não perder a lista ao trocar de celular, baixe o arquivo e guarde no e-mail ou na nuvem.</p>' +
        '</div>';

      var form = atividades.querySelector('#ativ-form');
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var desc = form.querySelector('#ativ-desc').value.trim();
        var horas = parseInt(form.querySelector('#ativ-horas').value, 10);
        var det = form.querySelector('#ativ-det').value.trim();
        if (!desc || !horas || horas < 1) {
          U.toast('Escreva o que você fez e quantas horas foram.');
          return;
        }
        var item = { desc: desc.slice(0, 160), horas: Math.min(horas, 500) };
        if (det) item.det = det.slice(0, 300);
        var mod = form.querySelector('#ativ-mod').value;
        if (mod !== '') item.mod = parseInt(mod, 10);
        var sem = form.querySelector('#ativ-sem').value;
        if (sem) item.sem = sem;
        var lista = lerAtiv(c);
        var eraEdicao = editando !== null && lista[editando];
        if (eraEdicao) lista[editando] = item;
        else lista.push(item);
        editando = null;
        guardarAtiv(c, lista);
        desenharAtiv(c);
        U.toast(eraEdicao ? 'Alteração salva.' : 'Atividade lançada.');
      });

      var cancelar = atividades.querySelector('#ativ-cancelar');
      if (cancelar) {
        cancelar.addEventListener('click', function () { editando = null; desenharAtiv(c); });
      }

      atividades.querySelectorAll('[data-editar]').forEach(function (b) {
        b.addEventListener('click', function () {
          editando = parseInt(b.getAttribute('data-editar'), 10);
          desenharAtiv(c);
          irParaFormulario('#ativ-desc');
        });
      });

      atividades.querySelectorAll('[data-tirar]').forEach(function (b) {
        b.addEventListener('click', function () {
          var i = parseInt(b.getAttribute('data-tirar'), 10);
          var lista = lerAtiv(c);
          lista.splice(i, 1);
          if (editando !== null) editando = editando === i ? null : (editando > i ? editando - 1 : editando);
          guardarAtiv(c, lista);
          desenharAtiv(c);
        });
      });

      /* ── a lista fora do aparelho: arquivo, requerimento e cópia ── */
      function linhasDaLista(lista) {
        return lista.map(function (a) {
          return '- ' + a.desc + ': ' + a.horas + (a.horas === 1 ? ' hora' : ' horas') + (a.det ? ' (' + a.det + ')' : '');
        });
      }

      var btBaixar = atividades.querySelector('[data-ativ-baixar]');
      if (btBaixar) {
        btBaixar.addEventListener('click', function () {
          var arquivo = {
            formato: 'nae-atividades-complementares', versao: 1,
            curso: c.id, periodo: parseInt(U.ler(chavePeriodo(c)) || '0', 10) || null,
            salvoEm: new Date().toISOString().slice(0, 10), itens: lerAtiv(c)
          };
          var blob = new Blob([JSON.stringify(arquivo, null, 2)], { type: 'application/json' });
          var a = document.createElement('a');
          a.href = URL.createObjectURL(blob);
          a.download = 'atividades-complementares-' + c.id + '-' + arquivo.salvoEm + '.json';
          document.body.appendChild(a); a.click(); a.remove();
          setTimeout(function () { URL.revokeObjectURL(a.href); }, 2000);
          U.toast('Arquivo baixado. Guarde no e-mail ou na nuvem.');
        });
      }

      var entrada = atividades.querySelector('[data-ativ-carregar]');
      if (entrada) {
        entrada.addEventListener('change', function () {
          var f = entrada.files && entrada.files[0];
          if (!f) return;
          var leitor = new FileReader();
          leitor.onload = function () {
            var dados;
            try { dados = JSON.parse(leitor.result); } catch (e) { dados = null; }
            if (!dados || dados.formato !== 'nae-atividades-complementares' || !Array.isArray(dados.itens)) {
              U.toast('Este arquivo não é uma lista de atividades baixada aqui no site.');
              return;
            }
            if (dados.curso && dados.curso !== c.id) {
              U.toast('Este arquivo é de outro curso. Troque o curso no topo da página e carregue de novo.');
              return;
            }
            /* só passa o que tem a forma de um lançamento */
            var itens = dados.itens.filter(function (a) {
              return a && typeof a.desc === 'string' && a.desc.trim() && Number(a.horas) >= 1;
            }).map(function (a) {
              var item = { desc: a.desc.trim().slice(0, 160), horas: Math.min(parseInt(a.horas, 10), 500) };
              if (typeof a.det === 'string' && a.det.trim()) item.det = a.det.trim().slice(0, 300);
              if (typeof a.mod === 'number' && c.atividades.tabela[a.mod]) item.mod = a.mod;
              if (typeof a.sem === 'string' && /^\d{4}\.[12]$/.test(a.sem)) item.sem = a.sem;
              return item;
            });
            var atuais = lerAtiv(c);
            if (atuais.length && !window.confirm('Trocar os ' + atuais.length + ' lançamentos deste aparelho pelos ' +
                itens.length + ' do arquivo?')) return;
            guardarAtiv(c, itens);
            if (dados.periodo >= 1 && dados.periodo <= 12) U.guardar(chavePeriodo(c), String(dados.periodo));
            editando = null;
            desenharAtiv(c);
            U.toast(itens.length + (itens.length === 1 ? ' atividade carregada.' : ' atividades carregadas.'));
          };
          leitor.readAsText(f);
        });
      }

      var btReq = atividades.querySelector('[data-ativ-req]');
      if (btReq) {
        btReq.addEventListener('click', function () {
          var lista = lerAtiv(c);
          var total = analisarAtividades(c, lista).contam;
          /* o requerimentos.js lê isto uma vez e apaga */
          U.guardar('req-atividades', JSON.stringify({
            curso: c.nome, periodo: U.ler(chavePeriodo(c)) || '',
            lista: linhasDaLista(lista).join('\n'), total: total + ' horas'
          }));
        });
      }

      var btCopiar = atividades.querySelector('[data-ativ-copiar]');
      if (btCopiar) {
        btCopiar.addEventListener('click', function () {
          var lista = lerAtiv(c);
          var total = lista.reduce(function (s, a) { return s + (Number(a.horas) || 0); }, 0);
          U.copiar(linhasDaLista(lista).join('\n') + '\nTotal: ' + total + ' horas',
            function () { U.toast('Lista copiada.'); });
        });
      }

      var selPeriodo = atividades.querySelector('#ativ-periodo');
      if (selPeriodo) {
        selPeriodo.addEventListener('change', function () {
          if (selPeriodo.value === '0') U.apagar(chavePeriodo(c));
          else U.guardar(chavePeriodo(c), selPeriodo.value);
          desenharAtiv(c);
        });
      }
    }

    /* leva o estudante até o formulário, com um realce rápido */
    function irParaFormulario(foco) {
      var form = atividades.querySelector('#ativ-form');
      if (!form) return;
      form.scrollIntoView({ behavior: U.reduzir ? 'auto' : 'smooth', block: 'center' });
      form.classList.remove('realce');
      void form.offsetWidth;
      form.classList.add('realce');
      var campo = form.querySelector(foco);
      if (campo) setTimeout(function () { campo.focus({ preventScroll: true }); }, U.reduzir ? 0 : 450);
    }

    prepararLancamento = function (c, desc, horas, mod) {
      editando = null;
      desenharAtiv(c);
      var form = atividades.querySelector('#ativ-form');
      form.querySelector('#ativ-desc').value = desc.slice(0, 160);
      if (typeof mod === 'number') form.querySelector('#ativ-mod').value = String(mod);
      if (horas) form.querySelector('#ativ-horas').value = horas;
      irParaFormulario(horas ? '#ativ-desc' : '#ativ-horas');
      U.toast(horas
        ? 'Confira o nome e as horas e toque em Lançar.'
        : 'Escreva quantas horas valem e toque em Lançar.');
    };

    aoTrocar(desenharAtiv);
  }

  /* ── Tabela de modalidades das atividades ─────────── */
  /* texto escapado, com trechos que viram link para o documento citado:
     links = [{ texto: 'PPC de Direito', href: 'documentos/...pdf' }] */
  function comLinks(texto, links) {
    var html = U.escapar(texto || '');
    (links || []).forEach(function (l) {
      var t = U.escapar(l.texto);
      var externo = /^https?:/.test(l.href) || /\.pdf$/i.test(l.href);
      html = html.replace(t, '<a href="' + U.escapar(l.href) + '"' +
        (externo ? ' target="_blank" rel="noopener noreferrer"' : '') + '>' + t + '</a>');
    });
    return html;
  }

  var tabela = document.getElementById('atividades-tabela');
  if (tabela) {
    var CORES_GRUPO = {
      'Ensino': 'var(--azul)',
      'Pesquisa': 'var(--lilas)',
      'Extensão': 'var(--verde)',
      'Eventos': 'var(--turquesa)',
      'Atuação e vivência': 'var(--coral)',
      'Estudos e visitas': 'var(--petroleo)'
    };

    aoTrocar(function (c) {
      var a = c.atividades;

      /* agrupa as modalidades por natureza, para o estudante enxergar
         de cara em quais frentes ele pode buscar horas */
      var ordem = [], porGrupo = {};
      a.tabela.forEach(function (l) {
        if (!porGrupo[l.grupo]) { porGrupo[l.grupo] = []; ordem.push(l.grupo); }
        porGrupo[l.grupo].push(l);
      });

      /* a coluna do termo inicial só existe onde o curso tem essa regra.
         Hoje é o caso de Direito, pela aditiva do Colegiado de 11/03/2026;
         em Engenharia o quadro do PPC não trata do assunto. */
      var temQuando = a.tabela.some(function (l) { return l.desdeQuando; });
      var colunas = temQuando ? 5 : 4;

      /* com o painel na página, cada modalidade ganha um botão que a
         leva para o formulário de lançamento */
      var podeAdicionar = !!prepararLancamento;
      if (podeAdicionar) colunas += 1;
      function idGrupo(g) { return 'ativ-grupo-' + U.normaliza(g).replace(/[^a-z0-9]+/g, '-'); }

      var corpo = ordem.map(function (g) {
        var cor = CORES_GRUPO[g] || 'var(--muted)';
        return '<tr class="grupo-linha" id="' + idGrupo(g) + '" style="--c: ' + cor + '">' +
                 '<th scope="colgroup" colspan="' + colunas + '">' + U.escapar(g) + '</th>' +
               '</tr>' +
               porGrupo[g].map(function (l) {
                 var i = a.tabela.indexOf(l);
                 return '<tr>' +
                   '<td>' + U.escapar(l.atividade) + '</td>' +
                   (podeAdicionar
                     ? '<td class="col-adicionar"><button class="btn-adicionar" type="button" data-adicionar="' + i + '" ' +
                       'aria-label="Adicionar ao meu somador: ' + U.escapar(l.atividade) + '">+ adicionar</button></td>'
                     : '') +
                   '<td>' + U.escapar(l.porEvento) + '</td>' +
                   '<td class="ppc-teto">' + l.teto + ' h</td>' +
                   (temQuando ? '<td>' + U.escapar(l.desdeQuando || '') + '</td>' : '') +
                   '<td>' + U.escapar(l.comprovante) + '</td></tr>';
               }).join('');
      }).join('');

      var resumoGrupos = ordem.map(function (g) {
        var cor = CORES_GRUPO[g] || 'var(--muted)';
        return '<a class="grupo-selo" href="#' + idGrupo(g) + '" data-ir-grupo="' + idGrupo(g) + '" style="--c: ' + cor + '">' +
               U.escapar(g) + '<b>' + porGrupo[g].length + '</b></a>';
      }).join('');

      tabela.innerHTML =
        '<div class="stack-s">' +
          '<div class="note col"><p><b>Prazo</b> ' + U.escapar(a.prazo) + '</p></div>' +
          '<div class="note col"><p><b>Como protocolar</b> ' + U.escapar(a.comoProtocolar) + '</p></div>' +
          (a.termoInicial
            ? '<div class="note alerta col"><p><b>A partir de quando conta</b> ' +
              U.escapar(a.termoInicial) + '</p></div>'
            : '') +
          '<h2 class="tabela-titulo">O que pode ser contabilizado</h2>' +
          '<div class="grupo-selos">' + resumoGrupos + '</div>' +
          (podeAdicionar ? '<p class="dica-adicionar">Toque num grupo para ir direto a ele, e em <b>+ adicionar</b> para levar a modalidade ao seu somador lá em cima.</p>' : '') +
          '<div class="rolagem-tabela">' +
            '<table class="tabela-ppc">' +
              '<caption class="so-leitor">Modalidades de atividade complementar aceitas em ' + U.escapar(c.nome) + '</caption>' +
              '<thead><tr><th scope="col">Atividade</th>' +
              (podeAdicionar ? '<th scope="col" class="col-adicionar"><span class="so-leitor">Adicionar ao somador</span></th>' : '') +
              '<th scope="col">Quanto vale</th>' +
              '<th scope="col">Teto</th>' +
              (temQuando ? '<th scope="col">A partir de quando conta</th>' : '') +
              '<th scope="col">Comprovante</th></tr></thead>' +
              '<tbody>' + corpo + '</tbody>' +
            '</table>' +
          '</div>' +
          '<p class="dica-rolagem-tabela">Arraste a tabela para o lado para ver ' +
            (temQuando ? 'o prazo e o comprovante' : 'o comprovante') + ' de cada modalidade.</p>' +
          '<p class="fonte-ppc">' + comLinks(a.tabelaNota, a.tabelaLinks) + '</p>' +
        '</div>';

      /* selos: levam até o grupo na tabela */
      tabela.querySelectorAll('[data-ir-grupo]').forEach(function (sel) {
        sel.addEventListener('click', function (ev) {
          var alvo = document.getElementById(sel.getAttribute('data-ir-grupo'));
          if (!alvo) return;
          ev.preventDefault();
          alvo.scrollIntoView({ behavior: U.reduzir ? 'auto' : 'smooth', block: 'start' });
          alvo.classList.remove('realce');
          void alvo.offsetWidth;
          alvo.classList.add('realce');
        });
      });

      /* + adicionar: o nome da modalidade e, quando a tabela dá um
         número fixo ("30 h por semestre"), as horas */
      tabela.querySelectorAll('[data-adicionar]').forEach(function (b) {
        b.addEventListener('click', function () {
          var idx = parseInt(b.getAttribute('data-adicionar'), 10);
          var l = a.tabela[idx];
          var m = /^(\d+)\s*h\b/.exec(l.porEvento || '');
          prepararLancamento(c, l.atividade, m ? parseInt(m[1], 10) : 0, idx);
        });
      });
    });
  }

  /* ── Estágio e TCC ────────────────────────────────── */
  function quadro(elId, monta) {
    var el = document.getElementById(elId);
    if (!el) return;
    aoTrocar(function (c) { el.innerHTML = monta(c); });
  }

  quadro('estagio-painel', function (c) {
    var e = c.estagio;
    return '<div class="card col" style="--c: ' + c.cor + '">' +
      '<span class="rotulo">' + U.escapar(c.nome) + '</span>' +
      '<h2>' + U.escapar(e.titulo) + '</h2>' +
      '<p class="lede">' + e.horas + ' horas' + (e.creditos ? ', ' + e.creditos + ' créditos' : '') + '. ' + U.escapar(e.quando) + '</p>' +
      '<ul class="limpa" style="--c: ' + c.cor + '">' +
        e.pontos.map(function (p) { return '<li>' + U.escapar(p) + '</li>'; }).join('') +
      '</ul>' +
      '<p class="fonte-ppc">Fonte: ' + U.escapar(c.fonte) + '.</p>' +
    '</div>';
  });

  quadro('tcc-painel', function (c) {
    var t = c.tcc;
    return '<div class="card col" style="--c: ' + c.cor + '">' +
      '<span class="rotulo">' + U.escapar(c.nome) + '</span>' +
      '<h2>Trabalho de Conclusão de Curso, ' + t.horas + ' horas</h2>' +
      '<ul class="limpa" style="--c: ' + c.cor + '">' +
        t.pontos.map(function (p) { return '<li>' + U.escapar(p) + '</li>'; }).join('') +
      '</ul>' +
      (t.linhas && t.linhas.length
        ? '<h3>Linhas de pesquisa para orientação</h3><ul class="limpa" style="--c: ' + c.cor + '">' +
          t.linhas.map(function (l) { return '<li>' + U.escapar(l) + '</li>'; }).join('') + '</ul>'
        : '') +
      '<p class="fonte-ppc">Fonte: ' + U.escapar(c.fonte) + '.</p>' +
    '</div>';
  });

  /* ── Leitura do que o estudante marcou em outras páginas ── */
  /* a matriz guarda os códigos cursados; o somador, as horas lançadas */
  function lerLista(chave) {
    var lista = [];
    try { lista = JSON.parse(U.ler(chave) || '[]'); } catch (e) { lista = []; }
    return Array.isArray(lista) ? lista : [];
  }
  function disciplinasDo(c) {
    var todas = [];
    c.periodos.forEach(function (p) { p.disciplinas.forEach(function (d) { todas.push(d); }); });
    return todas;
  }

  /* ── Mapa do curso, período a período (curso.html) ── */
  /* As etiquetas de cada período saem das próprias disciplinas da matriz;
     os textos, dos marcos do PPC em dados-curso.js. O ENADE vem do INEP. */
  var ETIQUETAS = [
    { re: /Estágio/i, rot: 'Estágio', cor: 'var(--verde)' },
    { re: /Trabalho de Conclus/i, rot: 'TCC', cor: 'var(--lilas)' },
    { re: /Atividades de Extensão/i, rot: 'Extensão', cor: 'var(--turquesa)' },
    { re: /Atividades Complementares/i, rot: 'Atividades complementares', cor: 'var(--coral)' },
    { re: /^Optativa/i, rot: 'Optativa', cor: 'var(--ambar-txt)' }
  ];
  var ENADE_MARCOS = {
    1: 'ENADE: no ano em que o curso é avaliado, quem acabou de entrar preenche o Questionário do Estudante.',
    9: 'ENADE: no ano em que o curso é avaliado, quem vai se formar preenche o questionário e faz a prova, condição para colar grau.'
  };
  var mapaEl = document.getElementById('curso-mapa');
  if (mapaEl) {
    var desenharMapa = function (c) {
      var meu = parseInt(U.ler('periodo-' + c.id) || '0', 10);
      var opcoes = '<option value="0">escolha</option>' + c.periodos.map(function (p) {
        return '<option value="' + p.n + '"' + (p.n === meu ? ' selected' : '') + '>' + p.n + 'º período</option>';
      }).join('');
      var itens = c.periodos.map(function (p) {
        var ch = p.disciplinas.reduce(function (s, d) { return s + d.ch; }, 0);
        var etiquetas = ETIQUETAS.filter(function (e) {
          return p.disciplinas.some(function (d) { return e.re.test(d.nome); });
        }).map(function (e) {
          return '<span class="mc-etiqueta" style="--c: ' + e.cor + '">' + e.rot + '</span>';
        }).join('');
        var marcos = (c.marcos || []).filter(function (m) { return m.p === p.n; }).map(function (m) {
          return '<li>' + U.escapar(m.texto) + (m.link ? ' <a href="' + m.link + '">saiba mais</a>' : '') + '</li>';
        });
        if (ENADE_MARCOS[p.n]) marcos.push('<li>' + ENADE_MARCOS[p.n] + ' <a href="enade.html">saiba mais</a></li>');
        var classe = p.n === meu ? ' mc-atual' : (meu && p.n < meu ? ' mc-feito' : '');
        return '<li class="mc-item' + classe + '"' + (p.n === meu ? ' aria-current="step"' : '') + '>' +
          '<span class="mc-num">' + p.n + 'º</span>' +
          '<div class="mc-corpo">' +
            '<p class="mc-resumo"><b>' + p.disciplinas.length + ' componentes · ' + ch + ' h</b>' +
              (p.n === meu ? ' <span class="mc-aqui">você está aqui</span>' : '') + '</p>' +
            (etiquetas ? '<p class="mc-etiquetas">' + etiquetas + '</p>' : '') +
            (marcos.length ? '<ul class="mc-marcos">' + marcos.join('') + '</ul>' : '') +
          '</div>' +
        '</li>';
      }).join('');
      mapaEl.innerHTML =
        '<div class="card col" style="--c: ' + c.cor + '">' +
          '<span class="rotulo">Período a período</span>' +
          '<h2>O mapa do curso de ' + U.escapar(c.nome) + '</h2>' +
          '<p>Quando entram o estágio, o TCC, as optativas e o ENADE, e o que não pode ficar para depois.</p>' +
          '<label class="mc-onde">Estou no <select id="mc-periodo">' + opcoes + '</select></label>' +
          '<ol class="mapa-curso">' + itens + '</ol>' +
          '<p class="fonte-ppc">Fonte: ' + U.escapar(c.fonte) + '. As disciplinas de cada período estão na <a href="matriz.html">matriz curricular</a>.</p>' +
        '</div>';
      document.getElementById('mc-periodo').addEventListener('change', function (e) {
        var v = parseInt(e.target.value, 10);
        if (v) U.guardar('periodo-' + c.id, String(v)); else U.apagar('periodo-' + c.id);
        desenharMapa(c);
        document.getElementById('mc-periodo').focus();
      });
    };
    aoTrocar(desenharMapa);
  }

  /* ── Checklist da formatura (formatura.html) ──────── */
  /* Os itens saem do PPC (dados-curso.js). Onde o estudante já marcou algo
     na matriz ou no somador de horas, o item mostra quanto falta. As
     caixinhas ficam guardadas só neste aparelho. */
  var formEl = document.getElementById('formatura-lista');
  if (formEl) {
    var itensDaFormatura = function (c) {
      var todas = disciplinasDo(c);
      var feitas = lerLista('cursadas-' + c.id);
      var marcadas = todas.filter(function (d) { return feitas.indexOf(d.cod) !== -1; }).length;
      var horas = analisarAtividades(c, lerLista('atividades-' + c.id)).contam;
      var periodosCom = function (re) {
        return c.periodos.filter(function (p) { return p.disciplinas.some(function (d) { return re.test(d.nome); }); })
          .map(function (p) { return p.n + 'º'; });
      };
      var itens = [
        { id: 'disciplinas', titulo: 'Todas as disciplinas aprovadas',
          texto: c.creditos + ' créditos e ' + c.cargaTotal.toLocaleString('pt-BR') + ' horas, incluídas as optativas. ' + (c.optativasNota || ''),
          link: 'matriz.html', rotulo: 'Abrir a matriz',
          auto: todas.length ? 'Na matriz, você marcou ' + marcadas + ' de ' + todas.length + ' componentes.' : '',
          pronto: marcadas === todas.length }
      ];
      var ext = periodosCom(/Atividades de Extensão/i);
      if (ext.length) itens.push({ id: 'extensao', titulo: 'Atividades de Extensão',
        texto: 'Componente curricular com regimento próprio, do ' + ext[0] + ' ao ' + ext[ext.length - 1] + ' período. As atividades de extensão contam aqui, e não nas complementares.',
        link: 'matriz.html', rotulo: 'Ver na matriz' });
      itens.push(
        { id: 'estagio', titulo: c.estagio.titulo + ', ' + c.estagio.horas + ' horas',
          texto: c.estagio.quando + ' ' + (c.estagio.pontos[0] || ''), link: 'estagio.html', rotulo: 'Regras do estágio' },
        { id: 'tcc', titulo: 'Trabalho de Conclusão de Curso',
          texto: c.tcc.pontos.slice(0, 1).concat(c.tcc.pontos.filter(function (p) { return /banca/i.test(p); }).slice(0, 1)).join(' '),
          link: 'tcc.html', rotulo: 'Tudo sobre o TCC' },
        { id: 'atividades', titulo: 'Atividades complementares, ' + c.atividades.total + ' horas',
          texto: c.atividades.prazo + ' ' + (c.atividades.comoProtocolar || ''),
          link: 'atividades.html', rotulo: 'Somar as minhas horas',
          auto: 'No somador, contam ' + horas + ' de ' + c.atividades.total + ' horas, já descontado o que passa dos tetos.',
          pronto: horas >= c.atividades.total },
        { id: 'enade', titulo: 'ENADE em dia',
          texto: 'No ano em que o curso é avaliado, quem vai se formar precisa preencher o Questionário do Estudante e fazer a prova. Sem isso, a situação fica irregular e não há colação de grau.',
          link: 'enade.html', rotulo: 'Entender o ENADE' },
        { id: 'historico', titulo: 'Histórico conferido no Lyceum', dica: true,
          texto: 'Confira o histórico antes do último semestre: disciplina faltando, nota ou hora complementar sem lançamento se resolvem com tempo.',
          link: 'lyceum.html', rotulo: 'Como entrar no Lyceum' },
        { id: 'colacao', titulo: 'Documentos e prazo da colação de grau', dica: true,
          texto: 'A lista de documentos e as datas da colação são da Secretaria Acadêmica. Pergunte no início do último semestre, pelo secretaria.guanhaes@uemg.br.',
          link: 'contato.html', rotulo: 'Contatos da Unidade' }
      );
      return itens;
    };
    var desenharFormatura = function (c) {
      var chave = 'formatura-' + c.id;
      var ok = lerLista(chave);
      var itens = itensDaFormatura(c);
      var feitos = itens.filter(function (i) { return ok.indexOf(i.id) !== -1; }).length;
      var pct = Math.round(feitos / itens.length * 100);
      formEl.innerHTML =
        '<div class="progresso" role="group" aria-label="Progresso do checklist">' +
          '<div class="progresso-topo"><b>' + feitos + ' de ' + itens.length + ' itens em dia</b>' +
            '<span>' + U.escapar(c.nome) + '</span></div>' +
          '<div class="barra"><span style="width: ' + pct + '%; background: ' + c.cor + '"></span></div>' +
        '</div>' +
        '<ul class="checklist">' + itens.map(function (i) {
          var marcado = ok.indexOf(i.id) !== -1;
          return '<li class="ck-item' + (marcado ? ' ck-ok' : '') + '" style="--c: ' + c.cor + '">' +
            '<input type="checkbox" id="ck-' + i.id + '" data-ck="' + i.id + '"' + (marcado ? ' checked' : '') + '>' +
            '<div class="ck-corpo">' +
              '<label for="ck-' + i.id + '">' + U.escapar(i.titulo) + (i.dica ? ' <span class="ck-dica">recomendação do NAE</span>' : '') + '</label>' +
              '<p>' + U.escapar(i.texto) + '</p>' +
              (i.auto ? '<p class="ck-auto' + (i.pronto ? ' ck-auto-ok' : '') + '">' + U.escapar(i.auto) + '</p>' : '') +
              '<a href="' + i.link + '">' + U.escapar(i.rotulo) + ' &rarr;</a>' +
            '</div>' +
          '</li>';
        }).join('') + '</ul>' +
        '<p class="progresso-nota">As marcações ficam só neste aparelho e não substituem o histórico oficial nem a conferência da Secretaria Acadêmica. ' +
        '<button class="btn-texto" type="button" id="ck-limpar">Apagar as marcações</button></p>';
      formEl.querySelectorAll('[data-ck]').forEach(function (cx) {
        cx.addEventListener('change', function () {
          var lista = lerLista(chave).filter(function (x) { return x !== cx.getAttribute('data-ck'); });
          if (cx.checked) lista.push(cx.getAttribute('data-ck'));
          U.guardar(chave, JSON.stringify(lista));
          var id = cx.id;
          desenharFormatura(c);
          document.getElementById(id).focus();
        });
      });
      document.getElementById('ck-limpar').addEventListener('click', function () {
        U.apagar(chave); desenharFormatura(c);
      });
    };
    aoTrocar(desenharFormatura);
  }

  /* ── Regras que valem para os dois cursos ─────────── */
  var regras = document.getElementById('regras-lista');
  if (regras && D.regras) {
    regras.innerHTML = D.regras.map(function (r) {
      return '<div class="card col" style="--c: ' + r.cor + '" id="' + r.id + '">' +
        '<span class="rotulo">' + U.escapar(r.base) + '</span>' +
        '<h2>' + U.escapar(r.titulo) + '</h2>' +
        '<dl class="regras">' +
          r.itens.map(function (i) {
            return '<dt>' + U.escapar(i.o) + '</dt><dd>' + U.escapar(i.q) + '</dd>';
          }).join('') +
        '</dl>' +
      '</div>';
    }).join('');
  }
})();
