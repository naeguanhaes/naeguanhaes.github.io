/* ═══════════════════════════════════════════════════════
   NAE Guanhães · vigia do frescor dos dados
   ───────────────────────────────────────────────────────
   Roda sozinho no dia 1 de cada mês (workflow frescor.yml)
   e pode ser rodado à mão:

       node ferramentas/checar-frescor.js

   Ninguém publica no site uma informação errada de propósito:
   o que acontece é o tempo passar. A grade do semestre passado
   fica no ar em fevereiro, o calendário vira o ano e ninguém
   lembra, o carimbo "conferido em" envelhece.

   O que ele olha:

   1. Semestre da grade contra o mês de hoje (1 a 6 é .1, 7 a 12 é .2).
   2. Ano do calendário acadêmico contra o ano de hoje.
   3. Idade do carimbo "atualizadoEm" de cada arquivo de dados.
   4. Avisos vencidos há muito tempo, que já podiam sair da lista.
   5. Data do rodapé "Site conferido e atualizado em".

   Achou algo velho? Sai com erro, e o workflow abre uma tarefa
   no repositório avisando a coordenação. Não bloqueia publicação.
   ═══════════════════════════════════════════════════════ */
'use strict';

const fs = require('fs');
const path = require('path');

const RAIZ = path.join(__dirname, '..');
const janela = {};
global.window = janela;

['dados-horarios.js', 'dados-calendario.js', 'dados-avisos.js'].forEach(f => {
  eval(fs.readFileSync(path.join(RAIZ, 'assets', f), 'utf8'));
});

const H = janela.DADOS_HORARIOS;
const C = janela.DADOS_CALENDARIO;
const A = janela.DADOS_AVISOS;

const hoje = new Date();
const ANO = hoje.getFullYear();
const MES = hoje.getMonth() + 1;

const MESES = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
               'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

const recados = [];

function diasDesde(iso) {
  if (!iso) return null;
  const d = new Date(iso + 'T12:00:00');
  if (isNaN(d)) return null;
  return Math.round((hoje - d) / 86400000);
}

/* ── 1. semestre da grade ─────────────────────────────── */
const semestreEsperado = ANO + '.' + (MES <= 6 ? '1' : '2');
if (H && H.semestre && H.semestre !== semestreEsperado) {
  recados.push('A grade de horários está no semestre **' + H.semestre +
    '** e hoje estamos em **' + semestreEsperado + '**. ' +
    'Se o semestre virou, atualize `assets/dados-horarios.js` e arquive o anterior ' +
    'em `historico/semestres/indice.js`.');
}

/* ── 2. ano do calendário ─────────────────────────────── */
if (C && C.ano && Number(C.ano) !== ANO) {
  recados.push('O calendário acadêmico publicado é de **' + C.ano + '** e já estamos em **' +
    ANO + '**. Procure a resolução COEPE do ano corrente e atualize `assets/dados-calendario.js`.');
}

/* ── 3. idade dos carimbos ────────────────────────────── */
const LIMITES = [
  { nome: 'Horários (assets/dados-horarios.js)', dado: H, limite: 120 },
  { nome: 'Calendário (assets/dados-calendario.js)', dado: C, limite: 180 },
  { nome: 'Avisos (assets/dados-avisos.js)', dado: A, limite: 120 }
];
LIMITES.forEach(item => {
  if (!item.dado || !item.dado.atualizadoEm) return;
  const idade = diasDesde(item.dado.atualizadoEm);
  if (idade !== null && idade > item.limite) {
    recados.push(item.nome + ' foi conferido pela última vez há **' + idade +
      ' dias** (' + item.dado.atualizadoEm + '). Vale uma passada de olho e um novo ' +
      '`atualizadoEm`, que é o carimbo que o estudante lê.');
  }
});

/* ── 4. avisos vencidos ───────────────────────────────── */
const hojeISO = ANO + '-' + String(MES).padStart(2, '0') + '-' + String(hoje.getDate()).padStart(2, '0');
const vencidos = ((A && A.avisos) || []).filter(a => a.ate && a.ate < hojeISO && diasDesde(a.ate) > 120);
if (vencidos.length) {
  recados.push(vencidos.length + ' aviso(s) venceram há mais de 120 dias e continuam em ' +
    '`assets/dados-avisos.js`. Eles não aparecem mais na faixa do topo, só no mural. ' +
    'Se já não têm valor de arquivo, podem sair: ' +
    vencidos.map(a => '"' + String(a.texto).slice(0, 40) + '..."').join(', '));
}

/* ── 5. rodapé das páginas ────────────────────────────── */
const inicial = fs.readFileSync(path.join(RAIZ, 'index.html'), 'utf8');
const carimbo = inicial.match(/Site conferido e atualizado em ([^<]+)/);
if (carimbo) {
  const m = carimbo[1].match(/(\d{1,2}) de ([a-zçã]+) de (\d{4})/i);
  if (m) {
    const mes = MESES.indexOf(m[2].toLowerCase()) + 1;
    if (mes > 0) {
      const iso = m[3] + '-' + String(mes).padStart(2, '0') + '-' + String(m[1]).padStart(2, '0');
      const idade = diasDesde(iso);
      if (idade !== null && idade > 120) {
        recados.push('O rodapé diz "Site conferido e atualizado em ' + carimbo[1].trim() +
          '", ou seja, há **' + idade + ' dias**. Uma conferida geral e uma troca dessa data ' +
          'passam segurança a quem lê.');
      }
    }
  }
}

/* ── veredito ─────────────────────────────────────────── */
console.log('');
if (!recados.length) {
  console.log('  Frescor: os dados do site estão em dia.');
  console.log('  (semestre ' + (H && H.semestre) + ', calendário ' + (C && C.ano) +
              ', conferido em ' + (H && H.atualizadoEm) + ')\n');
  process.exit(0);
}

const relatorio = recados.map(r => '- ' + r).join('\n\n');
fs.writeFileSync(path.join(RAIZ, 'frescor.txt'), relatorio + '\n');

console.log('  Frescor: ' + recados.length + ' ponto(s) para a coordenação olhar:\n');
recados.forEach(r => console.log('  · ' + r.replace(/\*\*/g, '') + '\n'));
console.log('  (relatório salvo em frescor.txt)\n');
process.exit(1);
