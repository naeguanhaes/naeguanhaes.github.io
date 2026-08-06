/* ═══════════════════════════════════════════════════════
   Checagem dos dados do site
   ───────────────────────────────────────────────────────
   Rode depois de editar qualquer arquivo assets/dados-*.js:

       node ferramentas/checar-dados.js

   Ele procura os erros que passam despercebidos ao olho:
   duas turmas na mesma sala no mesmo horário, um professor
   em dois lugares ao mesmo tempo, sigla de professor que não
   existe, horário invertido, data fora do ano, etc.
   ═══════════════════════════════════════════════════════ */

const fs = require('fs');
const path = require('path');

const RAIZ = path.join(__dirname, '..');
const janela = {};
global.window = janela;

['dados-horarios.js', 'dados-calendario.js', 'dados-avisos.js'].forEach((f) => {
  const arq = path.join(RAIZ, 'assets', f);
  if (!fs.existsSync(arq)) { console.error('não encontrei ' + f); process.exit(1); }
  eval(fs.readFileSync(arq, 'utf8'));
});

const H = janela.DADOS_HORARIOS;
const C = janela.DADOS_CALENDARIO;
const A = janela.DADOS_AVISOS;

const erros = [];
const alertas = [];
const DIAS = ['segunda', 'terça', 'quarta', 'quinta', 'sexta', 'EaD'];

const min = (hhmm) => {
  const p = String(hhmm).split(':');
  return parseInt(p[0], 10) * 60 + parseInt(p[1], 10);
};

/* ── Horários ─────────────────────────────────────────── */
const ocupacaoSala = {};   // sala|dia -> [{ini,fim,turma}]
const ocupacaoProf = {};   // prof|dia -> [{ini,fim,turma,disciplina}]
const ids = new Set();

H.turmas.forEach((t) => {
  if (ids.has(t.id)) erros.push(`id repetido: "${t.id}"`);
  ids.add(t.id);

  t.linhas.forEach((l, iLinha) => {
    if (!Array.isArray(l.celulas) || l.celulas.length !== 6) {
      erros.push(`${t.id}, linha ${iLinha + 1} (${l.rotulo}): esperava 6 células, achei ${l.celulas ? l.celulas.length : 0}`);
      return;
    }
    if (l.ini && l.fim && min(l.ini) >= min(l.fim)) {
      erros.push(`${t.id}, linha ${l.rotulo}: horário invertido (${l.ini}-${l.fim})`);
    }

    l.celulas.forEach((cel, dia) => {
      if (!cel) return;
      if (!Array.isArray(cel) || cel.length !== 2) {
        erros.push(`${t.id}, ${DIAS[dia]}, ${l.rotulo}: célula deveria ser ['Disciplina','SIGLA']`);
        return;
      }
      if (!H.professores[cel[1]]) {
        erros.push(`${t.id}, ${DIAS[dia]}, ${l.rotulo}: sigla de professor desconhecida "${cel[1]}" (${cel[0]})`);
        return;
      }
      if (dia === 5 || !l.ini) return;   /* EaD não ocupa sala nem horário presencial */

      const faixa = { ini: min(l.ini), fim: min(l.fim), turma: t.id, disciplina: cel[0], rotulo: l.rotulo };

      if (t.salaId) {
        const chave = t.salaId + '|' + dia;
        (ocupacaoSala[chave] = ocupacaoSala[chave] || []).push(faixa);
      }
      const chaveP = cel[1] + '|' + dia;
      (ocupacaoProf[chaveP] = ocupacaoProf[chaveP] || []).push(faixa);
    });
  });
});

function conflitos(mapa, rotulo, nomeDe) {
  Object.keys(mapa).forEach((chave) => {
    const [quem, dia] = chave.split('|');
    const faixas = mapa[chave];
    for (let i = 0; i < faixas.length; i++) {
      for (let j = i + 1; j < faixas.length; j++) {
        const a = faixas[i], b = faixas[j];
        if (a.turma === b.turma) continue;
        if (a.ini < b.fim && b.ini < a.fim) {
          erros.push(
            `${rotulo} ${nomeDe(quem)} · ${DIAS[dia]}: "${a.turma}" (${a.rotulo}, ${a.disciplina}) ` +
            `e "${b.turma}" (${b.rotulo}, ${b.disciplina}) se sobrepõem`
          );
        }
      }
    }
  });
}

conflitos(ocupacaoSala, 'Sala', (s) => 'nº ' + s);
conflitos(ocupacaoProf, 'Professor', (s) => H.professores[s] || s);

const usados = new Set();
H.turmas.forEach((t) => t.linhas.forEach((l) => l.celulas.forEach((c) => { if (c) usados.add(c[1]); })));
Object.keys(H.professores).forEach((k) => {
  if (!usados.has(k)) alertas.push(`professor cadastrado e não usado: ${k} · ${H.professores[k]}`);
});

if (!/^\d{4}-\d{2}-\d{2}$/.test(H.atualizadoEm || '')) erros.push('dados-horarios: atualizadoEm ausente ou fora do formato AAAA-MM-DD');

/* ── Calendário ───────────────────────────────────────── */
if (C) {
  C.eventos.forEach((ev, i) => {
    const ok = (d) => /^\d{4}-\d{2}-\d{2}$/.test(d);
    if (!ok(ev.ini) || !ok(ev.fim)) { erros.push(`calendário, evento ${i + 1} (${ev.titulo}): data fora do formato AAAA-MM-DD`); return; }
    if (ev.fim < ev.ini) erros.push(`calendário: "${ev.titulo}" termina antes de começar`);
    if (parseInt(ev.ini.slice(0, 4), 10) !== C.ano) alertas.push(`calendário: "${ev.titulo}" está fora do ano ${C.ano}`);
    if (!['letivo', 'prazo', 'feriado'].includes(ev.tipo)) erros.push(`calendário: "${ev.titulo}" com tipo inválido "${ev.tipo}"`);
  });
}

/* ── Avisos ───────────────────────────────────────────── */
if (A) {
  (A.avisos || []).forEach((av, i) => {
    if (av.ate && !/^\d{4}-\d{2}-\d{2}$/.test(av.ate)) erros.push(`aviso ${i + 1}: campo "ate" fora do formato AAAA-MM-DD`);
    if (!['urgente', 'atencao', 'novidade'].includes(av.tipo)) erros.push(`aviso ${i + 1}: tipo inválido "${av.tipo}"`);
    if (!av.texto) erros.push(`aviso ${i + 1}: sem texto`);
  });
}

/* ── Relatório ────────────────────────────────────────── */
const turmas = H.turmas.length;
const aulas = H.turmas.reduce((n, t) => n + t.linhas.reduce((m, l) => m + l.celulas.filter(Boolean).length, 0), 0);

console.log('');
console.log('  Horários ' + H.semestre + ' · ' + turmas + ' turmas, ' + aulas + ' aulas, ' + Object.keys(H.professores).length + ' professores');
if (C) console.log('  Calendário ' + C.ano + ' · ' + C.eventos.length + ' datas');
if (A) console.log('  Avisos · ' + (A.avisos || []).length + ' cadastrados');
console.log('');

if (alertas.length) {
  console.log('  ATENÇÃO (não impede a publicação):');
  alertas.forEach((a) => console.log('   · ' + a));
  console.log('');
}

if (erros.length) {
  console.log('  ERROS (' + erros.length + '):');
  erros.forEach((e) => console.log('   ✗ ' + e));
  console.log('');
  process.exit(1);
}

console.log('  Nenhum erro encontrado.');
console.log('');
