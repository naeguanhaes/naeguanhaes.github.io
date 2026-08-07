/* ═══════════════════════════════════════════════════════
   NAE Guanhães · gerador de requerimentos
   Lê window.DADOS_REQUERIMENTOS e monta o documento pronto
   para o estudante conferir, imprimir e levar à secretaria.

   Nada é enviado a lugar nenhum: o texto é montado no
   próprio aparelho. O CPF nunca é guardado, e os demais
   dados só ficam salvos se a pessoa pedir, na caixinha
   "guardar meus dados neste aparelho".
   ═══════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var U = window.NAE;
  var D = window.DADOS_REQUERIMENTOS;
  var forma = document.getElementById('req-forma');
  if (!U || !D || !forma) return;

  var MESES = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho',
               'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

  var seletor = document.getElementById('req-seletor');
  var documento = document.getElementById('req-documento');
  var avisos = document.getElementById('req-avisos');
  var contexto = document.getElementById('req-contexto');

  /* ── Identificação, comum a todos os pedidos ───────── */
  var IDENTIFICACAO = [
    { id: 'nome', rotulo: 'Nome completo', tipo: 'texto', obrigatorio: true },
    { id: 'ra', rotulo: 'Registro Acadêmico', tipo: 'texto', dica: 'No formato xx-00000', obrigatorio: true },
    { id: 'curso', rotulo: 'Curso', tipo: 'escolha', opcoes: ['Direito', 'Engenharia Civil'], obrigatorio: true },
    { id: 'periodo', rotulo: 'Período que está cursando', tipo: 'texto', dica: 'Só o número, de 1 a 10', obrigatorio: true },
    { id: 'email', rotulo: 'E-mail para contato', tipo: 'texto', dica: 'De preferência o institucional', obrigatorio: true },
    { id: 'telefone', rotulo: 'Telefone', tipo: 'texto', dica: 'Opcional' },
    { id: 'cpf', rotulo: 'CPF', tipo: 'texto', dica: 'Opcional, e nunca fica salvo no aparelho' }
  ];
  var NAO_GUARDAR = ['cpf'];

  var tipoAtual = D.tipos[0];
  var valores = {};

  /* ── Memória local, só se a pessoa pedir ───────────── */
  function lerSalvos() {
    try { return JSON.parse(U.ler('requerente') || '{}') || {}; } catch (e) { return {}; }
  }
  function salvar() {
    var guarda = document.getElementById('req-guardar');
    if (!guarda || !guarda.checked) { U.apagar('requerente'); return; }
    var copia = {};
    IDENTIFICACAO.forEach(function (c) {
      if (NAO_GUARDAR.indexOf(c.id) === -1 && valores[c.id]) copia[c.id] = valores[c.id];
    });
    U.guardar('requerente', JSON.stringify(copia));
  }

  /* ── Desenho do formulário ─────────────────────────── */
  function campo(c) {
    var id = 'req-' + c.id;
    var dica = c.dica ? '<span class="req-dica" id="' + id + '-dica">' + U.escapar(c.dica) + '</span>' : '';
    var ligacao = c.dica ? ' aria-describedby="' + id + '-dica"' : '';
    var valor = valores[c.id] || '';

    if (c.tipo === 'longo') {
      return '<div class="field campo-longo">' +
        '<label for="' + id + '">' + U.escapar(c.rotulo) + '</label>' + dica +
        '<textarea id="' + id + '" data-campo="' + c.id + '" rows="4"' + ligacao + '>' + U.escapar(valor) + '</textarea>' +
      '</div>';
    }
    if (c.tipo === 'escolha') {
      return '<div class="field">' +
        '<label for="' + id + '">' + U.escapar(c.rotulo) + '</label>' + dica +
        '<select id="' + id + '" data-campo="' + c.id + '"' + ligacao + '>' +
          '<option value="">escolher...</option>' +
          c.opcoes.map(function (o) {
            return '<option value="' + U.escapar(o) + '"' + (valor === o ? ' selected' : '') + '>' + U.escapar(o) + '</option>';
          }).join('') +
        '</select>' +
      '</div>';
    }
    return '<div class="field">' +
      '<label for="' + id + '">' + U.escapar(c.rotulo) + '</label>' + dica +
      '<input id="' + id + '" type="text" data-campo="' + c.id + '" autocomplete="off" value="' + U.escapar(valor) + '"' + ligacao + '>' +
    '</div>';
  }

  function desenharForma() {
    forma.innerHTML =
      '<fieldset class="req-bloco">' +
        '<legend>Quem está pedindo</legend>' +
        '<div class="req-campos">' + IDENTIFICACAO.map(campo).join('') + '</div>' +
        '<label class="req-guardar"><input type="checkbox" id="req-guardar"' +
          (U.ler('requerente') ? ' checked' : '') + '> ' +
          'Guardar estes dados neste aparelho, para a próxima vez. O CPF nunca é guardado.' +
        '</label>' +
      '</fieldset>' +
      '<fieldset class="req-bloco">' +
        '<legend>' + U.escapar(tipoAtual.titulo) + '</legend>' +
        '<div class="req-campos">' + tipoAtual.campos.map(campo).join('') + '</div>' +
      '</fieldset>';

    forma.querySelectorAll('[data-campo]').forEach(function (el) {
      el.addEventListener('input', function () {
        valores[el.getAttribute('data-campo')] = el.value;
        montar();
        salvar();
      });
      el.addEventListener('change', function () {
        valores[el.getAttribute('data-campo')] = el.value;
        montar();
        salvar();
      });
    });
    var guarda = document.getElementById('req-guardar');
    if (guarda) guarda.addEventListener('change', salvar);
  }

  /* ── Contexto do pedido: base, prazo, onde entregar ── */
  function desenharContexto() {
    contexto.innerHTML =
      '<div class="card col" style="--c: ' + tipoAtual.cor + '">' +
        '<span class="rotulo">' + U.escapar(tipoAtual.base) + '</span>' +
        '<h2>' + U.escapar(tipoAtual.titulo) + '</h2>' +
        '<p>' + U.escapar(tipoAtual.resumo) + '</p>' +
        '<dl class="regras">' +
          '<dt>Quando pedir</dt><dd>' + U.escapar(tipoAtual.quando) + '</dd>' +
          '<dt>Onde entregar</dt><dd>' + U.escapar(tipoAtual.onde) + '</dd>' +
          '<dt>Leve junto</dt><dd><ul class="limpa" style="--c: ' + tipoAtual.cor + '">' +
            tipoAtual.documentos.map(function (d) { return '<li>' + U.escapar(d) + '</li>'; }).join('') +
          '</ul></dd>' +
        '</dl>' +
        '<div class="note alerta"><p><b>Atenção</b> ' + U.escapar(tipoAtual.atencao) + '</p></div>' +
      '</div>';
  }

  /* ── Montagem do documento ─────────────────────────── */
  function porExtenso(d) {
    return d.getDate() + ' de ' + MESES[d.getMonth()] + ' de ' + d.getFullYear();
  }

  function pega(id) {
    var v = (valores[id] || '').trim();
    return v;
  }

  function faltando() {
    var faltam = [];
    IDENTIFICACAO.concat(tipoAtual.campos).forEach(function (c) {
      var exigido = c.obrigatorio || tipoAtual.campos.indexOf(c) !== -1;
      if (exigido && !pega(c.id)) faltam.push(c.rotulo.toLowerCase());
    });
    return faltam;
  }

  function marcador(texto, id) {
    return texto || '«' + id + '»';
  }

  function montar() {
    var hoje = new Date();
    var nome = marcador(pega('nome'), 'nome completo');
    var ra = marcador(pega('ra'), 'registro acadêmico');
    var curso = marcador(pega('curso'), 'curso');
    var periodo = marcador(pega('periodo'), 'período');
    var cpf = pega('cpf');

    var corpo = tipoAtual.corpo.replace(/\{([a-z]+)\}/g, function (todo, id) {
      return marcador(pega(id), id);
    });

    var abertura =
      nome.toUpperCase() + ', ' +
      (cpf ? 'inscrito(a) no CPF sob o nº ' + cpf + ', ' : '') +
      'estudante regularmente matriculado(a) no curso de ' + curso +
      ' da Universidade do Estado de Minas Gerais, Unidade Guanhães, sob o Registro ' +
      'Acadêmico nº ' + ra + ', cursando o ' + periodo + 'º período, vem respeitosamente ' +
      'requerer ' + tipoAtual.objeto + ', com fundamento na ' + tipoAtual.base + ', ' +
      'pelas razões a seguir expostas.';

    documento.innerHTML =
      '<article class="folha" aria-label="Requerimento pronto para imprimir">' +
        '<h2 class="folha-tit">Requerimento</h2>' +
        '<p class="folha-para">À Coordenação do Curso de ' + U.escapar(curso) + '<br>' +
          'Universidade do Estado de Minas Gerais, Unidade Guanhães</p>' +
        '<p>' + U.escapar(abertura) + '</p>' +
        corpo.split('\n\n').map(function (p) {
          return '<p>' + U.escapar(p).replace(/\n/g, '<br>') + '</p>';
        }).join('') +
        '<p class="folha-sub">Documentos anexados:</p>' +
        '<ul class="folha-lista">' +
          tipoAtual.documentos.map(function (d) { return '<li>' + U.escapar(d) + '</li>'; }).join('') +
        '</ul>' +
        '<p>Nestes termos, pede deferimento.</p>' +
        '<p class="folha-local">Guanhães, ' + porExtenso(hoje) + '.</p>' +
        '<div class="folha-assina">' +
          '<span class="folha-linha" aria-hidden="true"></span>' +
          '<p>' + U.escapar(nome) + '<br>Registro Acadêmico ' + U.escapar(ra) +
          (pega('email') ? '<br>' + U.escapar(pega('email')) : '') +
          (pega('telefone') ? ' · ' + U.escapar(pega('telefone')) : '') +
          '</p>' +
        '</div>' +
      '</article>';

    var faltam = faltando();
    avisos.innerHTML = faltam.length
      ? '<div class="note alerta"><p><b>Falta preencher:</b> ' + U.escapar(faltam.join(', ')) +
        '. No texto abaixo, o que falta aparece entre «aspas angulares».</p></div>'
      : '<div class="note"><p><b>Pronto para imprimir.</b> ' + U.escapar(D.ressalva) + '</p></div>';
  }

  /* ── Seletor de tipo ───────────────────────────────── */
  seletor.innerHTML = '<div class="chips" role="group" aria-label="Escolher o tipo de requerimento">' +
    D.tipos.map(function (t) {
      return '<button class="chip" type="button" data-req-tipo="' + t.id + '" ' +
             'aria-pressed="' + (t === tipoAtual ? 'true' : 'false') + '" ' +
             'style="--c: ' + t.cor + '">' + U.escapar(t.titulo) + '</button>';
    }).join('') + '</div>';

  seletor.querySelectorAll('[data-req-tipo]').forEach(function (b) {
    b.addEventListener('click', function () {
      var id = b.getAttribute('data-req-tipo');
      tipoAtual = D.tipos.filter(function (t) { return t.id === id; })[0] || D.tipos[0];
      seletor.querySelectorAll('[data-req-tipo]').forEach(function (o) {
        o.setAttribute('aria-pressed', o === b ? 'true' : 'false');
      });
      desenharContexto();
      desenharForma();
      montar();
    });
  });

  /* ── Ações ─────────────────────────────────────────── */
  var btImprimir = document.getElementById('req-imprimir');
  if (btImprimir) btImprimir.addEventListener('click', function () { window.print(); });

  var btCopiar = document.getElementById('req-copiar');
  if (btCopiar) {
    btCopiar.addEventListener('click', function () {
      var texto = documento.innerText || documento.textContent;
      U.copiar(texto, function () { U.toast('Texto do requerimento copiado.'); });
    });
  }

  var btLimpar = document.getElementById('req-limpar');
  if (btLimpar) {
    btLimpar.addEventListener('click', function () {
      valores = {};
      U.apagar('requerente');
      desenharForma();
      montar();
      U.toast('Campos limpos.');
    });
  }

  /* ── Início ────────────────────────────────────────── */
  valores = lerSalvos();
  desenharContexto();
  desenharForma();
  montar();
})();
