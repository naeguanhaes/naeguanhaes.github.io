/* REVISÃO DAS 190 EMENTAS, uma a uma, contra o PDF de origem.

   A prova é forte: as limpezas que apliquei mexem só em espaço,
   pontuação de espaçamento e travessão. Então, tirando tudo o que
   não é letra ou número, a sequência do site tem de ser IDÊNTICA
   à do PPC. Qualquer diferença é erro de transcrição.

   Também procura os defeitos que uma comparação de texto não pega:
   ementa cortada no meio, bibliografia vazando para dentro da
   ementa, ementa repetida em duas disciplinas (sinal de casamento
   errado) e referência sem autor.
*/
'use strict';
const fs = require('fs');
const path = require('path');

const RAIZ = path.join(__dirname, '..');

function so(s) {
  return String(s).toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]/g, '');
}

/* O extrator descarta as linhas que são só o número da página, porque elas
   caem no meio de uma frase quando o texto atravessa a folha. A fonte usada
   na conferência passa pela mesma peneira, senão a ementa correta pareceria
   errada só por não conter o número da página. */
function semNumeroDePagina(t) {
  return t.split('\n').filter(l => !/^\s*\d{1,3}\s*$/.test(l)).join('\n');
}

const FONTES = {
  direito: semNumeroDePagina(fs.readFileSync(path.join(RAIZ, 'fontes/ppc-direito.txt'), 'utf8').replace(/\r/g, '')),
  engenharia: semNumeroDePagina(fs.readFileSync(path.join(RAIZ, 'fontes/ppc-eng.txt'), 'utf8').replace(/\r/g, ''))
};
const FONTE_SO = {
  direito: so(FONTES.direito),
  engenharia: so(FONTES.engenharia)
};

global.window = {};
require(path.join(RAIZ, 'assets/dados-curso.js'));
require(path.join(RAIZ, 'assets/dados-ementas.js'));
const CURSOS = global.window.DADOS_CURSO.cursos;
const EM = global.window.DADOS_EMENTAS;

/* nome legível de cada chave */
const NOMES = {};
CURSOS.forEach(c => {
  NOMES[c.id] = {};
  (c.periodos || []).forEach(p => (p.disciplinas || []).forEach(d => {
    NOMES[c.id][d.cod || d.nome] = d.nome;
  }));
  (c.optativas || []).forEach(o => { NOMES[c.id]['OPT:' + o] = o + ' (optativa)'; });
});

const problemas = [];
const avisos = [];
let conferidas = 0, refsConferidas = 0;

['direito', 'engenharia'].forEach(curso => {
  const vistas = {};

  Object.keys(EM[curso]).forEach(chave => {
    const e = EM[curso][chave];
    const nome = NOMES[curso][chave] || chave;
    const onde = curso + ' · ' + nome;
    conferidas++;

    /* 1. a ementa existe, letra por letra, no PPC? */
    const alvo = so(e.ementa);
    if (alvo.length < 20) {
      problemas.push('EMENTA CURTA DEMAIS · ' + onde + ' · "' + e.ementa + '"');
    } else if (FONTE_SO[curso].indexOf(alvo) === -1) {
      problemas.push('EMENTA NÃO CONFERE COM O PPC · ' + onde +
        '\n      site: ' + e.ementa.slice(0, 150));
    }

    /* 2. ementa repetida em outra disciplina.
       Só é erro quando a bibliografia também bate: aí são de fato a mesma
       entrada, colada em duas disciplinas. Prática Real 1 e 2, por exemplo,
       têm ementa igual no PPC e bibliografia diferente, e isso está certo. */
    const digital = so([].concat(e.basica, e.complementar).join(''));
    if (vistas[alvo]) {
      if (vistas[alvo].digital === digital) {
        problemas.push('DISCIPLINA DUPLICADA · ' + onde + ' é idêntica a ' + vistas[alvo].nome);
      } else {
        avisos.push('EMENTA IGUAL, BIBLIOGRAFIA DIFERENTE · ' + onde +
          ' e ' + vistas[alvo].nome + ' (o PPC repete mesmo, confira se quiser)');
      }
    } else {
      vistas[alvo] = { nome: nome, digital: digital };
    }

    /* 3. sinais de corte no meio da frase */
    const fim = e.ementa.trim().slice(-1);
    if (!'.!?'.includes(fim)) {
      avisos.push('EMENTA SEM PONTO FINAL · ' + onde + ' · termina em "' +
        e.ementa.trim().slice(-45) + '"');
    }

    /* 4. bibliografia vazando para dentro da ementa */
    if (/ISBN|\bed\.\s|Editora|São Paulo:|Rio de Janeiro:/i.test(e.ementa)) {
      problemas.push('BIBLIOGRAFIA DENTRO DA EMENTA · ' + onde);
    }

    /* 4b. a ementa escorreu para dentro do resto do PPC.

       Uma ementa é um parágrafo, não um capítulo: a maior real tem cerca
       de 1.600 letras. Quando o extrator não encontra onde parar, ela
       cresce para dezenas de milhares e engole regulamento, quadro de
       avaliação e seções inteiras do documento. Isso aconteceu de verdade
       com duas disciplinas de Direito, e a conferência letra por letra
       não pegava, porque o texto engolido também existe no PPC.

       Os dois sinais abaixo são independentes: o tamanho pega o caso
       geral, o cabeçalho de seção pega o vazamento curto. */
    if (e.ementa.length > 2500) {
      problemas.push('EMENTA LONGA DEMAIS, provavelmente escorreu para o resto do PPC · ' +
        onde + ' · ' + e.ementa.length + ' letras');
    }
    const invasor = e.ementa.match(/\b\d\.\d\s+[A-ZÀ-Ú][a-zà-ú]|QUADRO\s+\d|\bArt\.\s*\d|\b\d{1,2}°?\s*Per[íi]odo\b/);
    if (invasor) {
      problemas.push('CABEÇALHO DE OUTRA SEÇÃO DENTRO DA EMENTA · ' + onde +
        ' · achei "' + invasor[0] + '"');
    }

    /* 5. cada referência existe no PPC e tem cara de referência */
    [].concat(e.basica, e.complementar).forEach(ref => {
      refsConferidas++;
      const r = so(ref);
      if (FONTE_SO[curso].indexOf(r) === -1) {
        problemas.push('REFERÊNCIA NÃO CONFERE · ' + onde + '\n      "' + ref.slice(0, 110) + '"');
      }
      if (!/^[A-ZÀ-Ú][A-ZÀ-Ú'\-. ]*,/.test(ref)) {
        avisos.push('REFERÊNCIA SEM SOBRENOME NO INÍCIO · ' + onde + ' · "' + ref.slice(0, 80) + '"');
      }
      if (ref.length > 400) {
        avisos.push('REFERÊNCIA MUITO LONGA, pode ter juntado duas · ' + onde +
          ' · "' + ref.slice(0, 90) + '"');
      }
    });
  });
});

/* 6. disciplinas do site sem ementa */
const semEmenta = [];
CURSOS.forEach(c => {
  Object.keys(NOMES[c.id]).forEach(chave => {
    if (!EM[c.id][chave]) semEmenta.push(c.nome + ' · ' + NOMES[c.id][chave]);
  });
});

console.log('\n════════ REVISÃO DAS EMENTAS ════════\n');
console.log('  ementas conferidas: ' + conferidas);
console.log('  referências conferidas: ' + refsConferidas);
console.log('  disciplinas sem ementa: ' + semEmenta.length);
console.log('');

if (problemas.length) {
  console.log('  ✗ ' + problemas.length + ' PROBLEMA(S):\n');
  problemas.forEach(p => console.log('    ' + p));
} else {
  console.log('  ✓ Nenhum problema. Toda ementa e toda referência existem,');
  console.log('    letra por letra, no PPC de origem.');
}

if (avisos.length) {
  console.log('\n  ⚠ ' + avisos.length + ' ponto(s) a olhar:\n');
  avisos.slice(0, 40).forEach(a => console.log('    ' + a));
  if (avisos.length > 40) console.log('    ... e mais ' + (avisos.length - 40));
}

if (semEmenta.length) {
  console.log('\n  Sem ementa (esperado para atividades, estágio e afins):');
  semEmenta.forEach(s => console.log('    ' + s));
}
console.log('');
process.exit(problemas.length ? 1 : 0);
