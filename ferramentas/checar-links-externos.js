/* ═══════════════════════════════════════════════════════
   NAE Guanhães · vigia dos links externos
   ───────────────────────────────────────────────────────
   Testa toda semana se os endereços de fora do site continuam
   respondendo: UEMG, AVA Moodle, Lyceum, lojas de aplicativo,
   CAPS, CVV e as plataformas de psicologia.

   À mão:  node ferramentas/checar-links-externos.js

   Se algum link morrer, o robô abre uma tarefa no GitHub
   avisando, antes que o estudante descubra pelo caminho ruim.
   Endereços que bloqueiam robô mas funcionam no navegador
   estão na lista TOLERADOS e não geram alarme falso.
   ═══════════════════════════════════════════════════════ */
'use strict';

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const RAIZ = path.join(__dirname, '..');

/* sites que respondem 403 a robôs mas funcionam para gente.
   O portal www.uemg.br fica atrás de proteção contra automação:
   confirmado que abre normalmente no navegador. */
const TOLERADOS = [/apps\.apple\.com/, /play\.google\.com/, /instagram\.com/, /^https:\/\/www\.uemg\.br/];

const paginas = fs.readdirSync(RAIZ).filter(f => f.endsWith('.html'));
const enderecos = new Map();

paginas.forEach(nome => {
  const t = fs.readFileSync(path.join(RAIZ, nome), 'utf8');
  const padrao = /href="(https?:\/\/[^"]+)"/g;
  let m;
  while ((m = padrao.exec(t)) !== null) {
    const url = m[1].replace(/&amp;/g, '&');
    if (!enderecos.has(url)) enderecos.set(url, []);
    if (enderecos.get(url).indexOf(nome) === -1) enderecos.get(url).push(nome);
  }
});

function testar(url) {
  return new Promise(resolve => {
    let feito = false;
    const responder = r => { if (!feito) { feito = true; resolve(r); } };
    const lib = url.startsWith('https:') ? https : http;

    const req = lib.request(url, {
      method: 'GET',
      timeout: 20000,
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; NAE-Guanhaes-LinkCheck/1.0; +https://naeguanhaes.github.io/)',
        'Accept': 'text/html,application/xhtml+xml'
      }
    }, res => {
      res.resume();
      responder({ url, status: res.statusCode });
    });

    req.on('timeout', () => { req.destroy(); responder({ url, status: 0, erro: 'tempo esgotado' }); });
    req.on('error', e => responder({ url, status: 0, erro: e.code || e.message }));
    req.end();
  });
}

(async () => {
  const lista = Array.from(enderecos.keys());
  console.log('\n  Testando ' + lista.length + ' endereços externos...\n');

  const quebrados = [];
  for (const url of lista) {
    const r = await testar(url);
    const tolerado = TOLERADOS.some(p => p.test(url));
    const ok = (r.status >= 200 && r.status < 400) || (tolerado && r.status === 403);
    console.log('  ' + (ok ? '✓' : '✗') + ' ' + (r.status || r.erro) + '  ' + url);
    if (!ok) quebrados.push({ url, motivo: r.status || r.erro, paginas: enderecos.get(url) });
  }

  console.log('');
  if (quebrados.length) {
    console.log('  ' + quebrados.length + ' endereço(s) com problema:\n');
    quebrados.forEach(q => {
      console.log('  ✗ ' + q.url);
      console.log('    motivo: ' + q.motivo + ' | usado em: ' + q.paginas.join(', '));
    });
    /* deixa o resumo pronto para o robô abrir a tarefa */
    fs.writeFileSync(path.join(RAIZ, 'links-quebrados.txt'),
      quebrados.map(q => '- ' + q.url + '\n  motivo: ' + q.motivo + '\n  usado em: ' + q.paginas.join(', ')).join('\n'),
      'utf8');
    process.exit(1);
  }
  console.log('  Todos os endereços externos estão respondendo.\n');
})();
