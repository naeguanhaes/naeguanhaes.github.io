/* ═══════════════════════════════════════════════════════
   NAE Guanhães · inspetor dos arquivos compactados
   ───────────────────────────────────────────────────────
   Roda no workflow antes de publicar e pode ser rodado à mão:

       node ferramentas/checar-minificados.js

   As páginas carregam assets/min/, não os arquivos de
   origem. Quem edita assets/site.js e esquece de rodar o
   minificar publica o código ANTIGO, sem erro nenhum na
   tela: a falha mais silenciosa que este projeto pode ter.

   Como funciona: o minificar.js grava em assets/min/origem.json
   a impressão digital (sha256) de cada arquivo de origem.
   Aqui a conta é refeita e comparada. Se não bate, é porque
   a origem mudou depois da última compactação.

   Encontrou problema? Sai com erro e a publicação NÃO acontece.
   ═══════════════════════════════════════════════════════ */
'use strict';

const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const RAIZ = path.join(__dirname, '..');
const ORIGEM = path.join(RAIZ, 'assets');
const DESTINO = path.join(ORIGEM, 'min');
const MANIFESTO = path.join(DESTINO, 'origem.json');

const JS = ['site.js', 'busca.js', 'horarios.js', 'calendario.js', 'mapa.js', 'planner.js', 'curso.js', 'requerimentos.js'];
const CSS = ['estilo.css'];
const FONTES = JS.concat(CSS);

const problemas = [];

/* A impressão digital ignora o fim de linha.

   O Windows guarda os arquivos com CR LF e o Linux só com LF, e o git
   converte de um para o outro na hora do checkout. Sem normalizar, o mesmo
   arquivo tem duas impressões diferentes: a inspeção passava na máquina do
   coordenador e reprovava no servidor, dizendo que o compactado estava
   desatualizado quando não estava. */
function digital(arquivo) {
  const texto = fs.readFileSync(arquivo, 'utf8').replace(/\r\n/g, '\n');
  return crypto.createHash('sha256').update(texto, 'utf8').digest('hex');
}

console.log('');

if (!fs.existsSync(MANIFESTO)) {
  console.log('  Falta assets/min/origem.json.');
  console.log('  Rode uma vez: node ferramentas/minificar.js\n');
  process.exit(1);
}

let guardadas;
try {
  guardadas = JSON.parse(fs.readFileSync(MANIFESTO, 'utf8'));
} catch (e) {
  console.log('  assets/min/origem.json está ilegível: ' + e.message);
  console.log('  Rode: node ferramentas/minificar.js\n');
  process.exit(1);
}

FONTES.forEach(nome => {
  const fonte = path.join(ORIGEM, nome);
  const compactado = path.join(DESTINO, nome.replace(/\.js$/, '.min.js').replace(/\.css$/, '.min.css'));

  if (!fs.existsSync(compactado)) {
    problemas.push('FALTA o compactado de ' + nome);
    return;
  }
  if (!guardadas[nome]) {
    problemas.push('SEM REGISTRO: ' + nome + ' não aparece em assets/min/origem.json');
    return;
  }
  if (guardadas[nome] !== digital(fonte)) {
    problemas.push('DESATUALIZADO: assets/' + nome + ' mudou depois da última compactação');
  }
});

/* sobra no manifesto: arquivo que saiu da lista e ficou para trás */
Object.keys(guardadas).forEach(nome => {
  if (FONTES.indexOf(nome) === -1) {
    problemas.push('SOBRA: origem.json ainda registra ' + nome + ', que não está mais na lista do minificar');
  }
});

if (problemas.length) {
  console.log('  Compactados: ' + problemas.length + ' problema(s) encontrado(s):\n');
  problemas.forEach(p => console.log('  ✗ ' + p));
  console.log('\n  Rode: node ferramentas/minificar.js\n');
  process.exit(1);
}

console.log('  Compactados: assets/min/ está em dia com as origens.');
console.log('  (' + FONTES.length + ' arquivos conferidos por impressão digital)\n');
