/* ═══════════════════════════════════════════════════════
   NAE Guanhães · páginas do curso
   Lê window.DADOS_CURSO (assets/dados-curso.js) e monta:
     · o seletor de curso, que fica lembrado entre as visitas
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

  /* ── Atividades complementares ────────────────────── */
  var atividades = document.getElementById('atividades-painel');
  if (atividades) {
    function chaveAtiv(c) { return 'atividades-' + c.id; }
    function lerAtiv(c) {
      var lista = [];
      try { lista = JSON.parse(U.ler(chaveAtiv(c)) || '[]'); } catch (e) { lista = []; }
      return Array.isArray(lista) ? lista : [];
    }
    function guardarAtiv(c, lista) { U.guardar(chaveAtiv(c), JSON.stringify(lista)); }

    function chavePeriodo(c) { return 'periodo-' + c.id; }

    function desenharAtiv(c) {
      var lancadas = lerAtiv(c);
      var soma = lancadas.reduce(function (s, a) { return s + (Number(a.horas) || 0); }, 0);
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

      atividades.innerHTML =
        '<div class="card col" style="--c: ' + c.cor + '">' +
          '<span class="rotulo">' + U.escapar(c.nome) + '</span>' +
          '<h2>' + soma + ' de ' + alvo + ' horas lançadas</h2>' +
          '<div class="barra"><span style="width: ' + porcento + '%; background: ' + c.cor + '"></span></div>' +
          '<p>' + (faltam
            ? 'Faltam <b>' + faltam + ' horas</b> para completar as atividades complementares.'
            : 'Você já registrou a carga horária completa. Guarde os comprovantes e protocole na Coordenação.') + '</p>' +
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
          '<form class="ativ-form" id="ativ-form">' +
            '<div class="field">' +
              '<label for="ativ-desc">O que você fez</label>' +
              '<input id="ativ-desc" type="text" autocomplete="off" placeholder="Monitoria de Direito Civil 1, 2026.1">' +
            '</div>' +
            '<div class="field campo-curto">' +
              '<label for="ativ-horas">Horas</label>' +
              '<input id="ativ-horas" type="number" min="1" max="500" inputmode="numeric" placeholder="30">' +
            '</div>' +
            '<button class="btn" type="submit" style="--c: ' + c.cor + '">Lançar</button>' +
          '</form>' +
          (lancadas.length
            ? '<ul class="ativ-lista">' + lancadas.map(function (a, i) {
                return '<li><span>' + U.escapar(a.desc) + '</span>' +
                  '<b>' + a.horas + ' h</b>' +
                  '<button class="btn-limpo" type="button" data-tirar="' + i + '" ' +
                  'aria-label="Tirar ' + U.escapar(a.desc) + ' da lista">tirar</button></li>';
              }).join('') + '</ul>'
            : '<p class="ativ-vazio">Nada lançado ainda. Comece pelo que você já fez neste semestre.</p>') +
          '<p class="progresso-nota">Esta conta fica só no seu aparelho e não vale como protocolo. ' +
          'O que vale é o requerimento entregue à Coordenação do Curso, com os comprovantes.</p>' +
        '</div>';

      var form = atividades.querySelector('#ativ-form');
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var desc = form.querySelector('#ativ-desc').value.trim();
        var horas = parseInt(form.querySelector('#ativ-horas').value, 10);
        if (!desc || !horas || horas < 1) {
          U.toast('Escreva o que você fez e quantas horas foram.');
          return;
        }
        var lista = lerAtiv(c);
        lista.push({ desc: desc.slice(0, 90), horas: Math.min(horas, 500) });
        guardarAtiv(c, lista);
        desenharAtiv(c);
        U.toast('Atividade lançada.');
      });

      atividades.querySelectorAll('[data-tirar]').forEach(function (b) {
        b.addEventListener('click', function () {
          var lista = lerAtiv(c);
          lista.splice(parseInt(b.getAttribute('data-tirar'), 10), 1);
          guardarAtiv(c, lista);
          desenharAtiv(c);
        });
      });

      var selPeriodo = atividades.querySelector('#ativ-periodo');
      if (selPeriodo) {
        selPeriodo.addEventListener('change', function () {
          if (selPeriodo.value === '0') U.apagar(chavePeriodo(c));
          else U.guardar(chavePeriodo(c), selPeriodo.value);
          desenharAtiv(c);
        });
      }
    }

    aoTrocar(desenharAtiv);
  }

  /* ── Tabela de modalidades das atividades ─────────── */
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

      var corpo = ordem.map(function (g) {
        var cor = CORES_GRUPO[g] || 'var(--muted)';
        return '<tr class="grupo-linha" style="--c: ' + cor + '">' +
                 '<th scope="colgroup" colspan="4">' + U.escapar(g) + '</th>' +
               '</tr>' +
               porGrupo[g].map(function (l) {
                 return '<tr>' +
                   '<td>' + U.escapar(l.atividade) + '</td>' +
                   '<td>' + U.escapar(l.porEvento) + '</td>' +
                   '<td class="ppc-teto">' + l.teto + ' h</td>' +
                   '<td>' + U.escapar(l.comprovante) + '</td></tr>';
               }).join('');
      }).join('');

      var resumoGrupos = ordem.map(function (g) {
        var cor = CORES_GRUPO[g] || 'var(--muted)';
        return '<span class="grupo-selo" style="--c: ' + cor + '">' + U.escapar(g) +
               '<b>' + porGrupo[g].length + '</b></span>';
      }).join('');

      tabela.innerHTML =
        '<div class="stack-s">' +
          '<div class="note col"><p><b>Prazo</b> ' + U.escapar(a.prazo) + '</p></div>' +
          '<div class="note col"><p><b>Como protocolar</b> ' + U.escapar(a.comoProtocolar) + '</p></div>' +
          '<h2 class="tabela-titulo">O que pode ser contabilizado</h2>' +
          '<div class="grupo-selos">' + resumoGrupos + '</div>' +
          '<div class="rolagem-tabela">' +
            '<table class="tabela-ppc">' +
              '<caption class="so-leitor">Modalidades de atividade complementar aceitas em ' + U.escapar(c.nome) + '</caption>' +
              '<thead><tr><th scope="col">Atividade</th><th scope="col">Quanto vale</th>' +
              '<th scope="col">Teto</th><th scope="col">Comprovante</th></tr></thead>' +
              '<tbody>' + corpo + '</tbody>' +
            '</table>' +
          '</div>' +
          '<p class="dica-rolagem-tabela">Arraste a tabela para o lado para ver o comprovante de cada modalidade.</p>' +
          '<p class="fonte-ppc">' + U.escapar(a.tabelaNota) + '</p>' +
        '</div>';
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
