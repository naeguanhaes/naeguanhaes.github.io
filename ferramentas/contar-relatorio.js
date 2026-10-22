/* ═══════════════════════════════════════════════════════
   Números do relatório de extensão, contados sozinhos
   ───────────────────────────────────────────────────────
   Conta, direto nos arquivos do site, os indicadores do
   quadro "8.1 Conteúdo disponibilizado" do relatório do
   projeto Conexão Universitária, para não contar à mão a
   cada nova versão:

       node ferramentas/contar-relatorio.js
       node ferramentas/contar-relatorio.js 2026-10-21   (até uma data)

   A data limita só as publicações (commits); o resto é o
   estado atual dos arquivos. Saída em texto, pronta para
   copiar para a tabela do relatório.
   ═══════════════════════════════════════════════════════ */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const RAIZ = path.join(__dirname, '..');
global.window = {};
['curso', 'horarios', 'ementas', 'calendario', 'novidades', 'avisos', 'editais', 'busca'].forEach((f) => {
  eval(fs.readFileSync(path.join(RAIZ, 'assets', 'dados-' + f + '.js'), 'utf8'));
});
const W = global.window;
const ate = process.argv[2] || new Date().toISOString().slice(0, 10);
const milhar = (n) => n.toLocaleString('pt-BR');

/* páginas: 404 e offline são telas de erro, não contam */
const paginas = fs.readdirSync(RAIZ).filter((f) => f.endsWith('.html') && f !== '404.html' && f !== 'offline.html');
const ocultas = paginas.filter((f) => /<meta name="robots" content="noindex"/.test(fs.readFileSync(path.join(RAIZ, f), 'utf8')));

/* publicações: cada commit na main vira um deploy */
const datas = execSync('git log --until="' + ate + ' 23:59" --format=%ad --date=short', { cwd: RAIZ, encoding: 'utf8' })
  .trim().split('\n').filter(Boolean);

/* ementas e referências */
let ementas = 0, refs = 0;
['direito', 'engenharia'].forEach((k) => {
  Object.values(W.DADOS_EMENTAS[k]).forEach((e) => {
    ementas++;
    refs += (e.basica || []).length + (e.complementar || []).length;
  });
});

/* matrizes e atividades complementares */
const porCurso = {};
W.DADOS_CURSO.cursos.forEach((c) => {
  porCurso[c.id] = {
    disciplinas: c.periodos.reduce((s, p) => s + p.disciplinas.length, 0),
    atividades: c.atividades.tabela.length,
  };
});
const d = porCurso.direito, e = porCurso.engenharia;

/* horários: aula semanal = célula preenchida da grade */
const H = W.DADOS_HORARIOS;
let aulas = 0;
H.turmas.forEach((t) => t.linhas.forEach((l) => l.celulas.forEach((c) => { if (c && c[0]) aulas++; })));

/* inspeções: checar-*.js; vigias: workflows agendados */
const inspecoes = new Set(fs.readFileSync(path.join(RAIZ, '.github', 'workflows', 'publicar.yml'), 'utf8')
  .match(/checar-[a-z-]+\.js/g) || []).size;
const vigias = fs.readdirSync(path.join(RAIZ, '.github', 'workflows'))
  .filter((f) => /schedule:/.test(fs.readFileSync(path.join(RAIZ, '.github', 'workflows', f), 'utf8')));

const linhas = [
  ['Páginas do portal', paginas.length + ', sendo ' + (paginas.length - ocultas.length) + ' públicas'],
  ['Publicações de atualização no período', datas.length + ', em ' + new Set(datas).size + ' dias diferentes'],
  ['Ementas de disciplinas transcritas dos PPCs', String(ementas)],
  ['Referências bibliográficas organizadas', milhar(refs)],
  ['Disciplinas nas matrizes curriculares', (d.disciplinas + e.disciplinas) + ' (' + d.disciplinas + ' de Direito e ' + e.disciplinas + ' de Engenharia Civil)'],
  ['Modalidades de atividade complementar detalhadas', (d.atividades + e.atividades) + ' (' + d.atividades + ' de Direito e ' + e.atividades + ' de Engenharia Civil)'],
  ['Turmas com grade de horários', H.turmas.length + ', com ' + Object.keys(H.professores).length + ' professores e ' + aulas + ' aulas semanais'],
  ['Datas no calendário acadêmico', String(W.DADOS_CALENDARIO.eventos.length)],
  ['Novidades comunicadas aos estudantes', String(W.DADOS_NOVIDADES.itens.length)],
  ['Inspeções automáticas de qualidade', inspecoes + ' a cada publicação e ' + vigias.length + ' vigias periódicas'],
];

const extras = [
  ['Avisos cadastrados', W.DADOS_AVISOS.avisos.length],
  ['Editais e eventos divulgados (inclui encerrados)', W.DADOS_EDITAIS.itens.length],
  ['Entradas no índice da busca', W.DADOS_BUSCA.itens.length],
  ['Páginas ocultas (rascunhos)', ocultas.map((f) => f.replace('.html', '')).join(', ')],
  ['Primeira publicação', datas.length ? datas[datas.length - 1].split('-').reverse().join('/') : '?'],
];

const larg = Math.max(...linhas.map((l) => l[0].length));
console.log('\n  Quadro 8.1 do relatório · publicações contadas até ' + ate.split('-').reverse().join('/') + '\n');
linhas.forEach((l) => console.log('  ' + l[0].padEnd(larg) + '  ' + l[1]));
console.log('\n  Para conferência\n');
extras.forEach((l) => console.log('  ' + l[0].padEnd(larg) + '  ' + l[1]));
console.log('');
