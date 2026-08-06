/* ═══════════════════════════════════════════════════════
   NAE Guanhães · inspetor de acessibilidade
   ───────────────────────────────────────────────────────
   Roda no workflow antes de publicar e pode ser rodado à mão:

       node ferramentas/checar-acessibilidade.js

   O que ele fiscaliza, com base nas WCAG 2.1 nível AA:

   1. Idioma declarado na página (lang no html).
   2. Imagem sem alternativa em texto (alt), que deixa o
      leitor de tela mudo.
   3. Campo de formulário sem rótulo associado.
   4. Botão ou link sem nome acessível (só ícone, sem texto
      nem aria-label).
   5. Ordem dos títulos: pular de h1 para h3 desorienta quem
      navega por cabeçalhos.
   6. Um h1 por página, nem zero nem dois.
   7. Identificadores repetidos, que quebram a associação
      entre rótulo e campo.
   8. Contraste das cores da folha de estilo contra o branco,
      exigindo pelo menos 4,5 para texto normal.
   9. Link que abre em outra aba sem rel de segurança.

   Encontrou problema? Sai com erro e a publicação NÃO acontece.
   ═══════════════════════════════════════════════════════ */
'use strict';

const fs = require('fs');
const path = require('path');

const RAIZ = path.join(__dirname, '..');
const problemas = [];
const rel = p => path.relative(RAIZ, p).replace(/\\/g, '/');

const paginas = fs.readdirSync(RAIZ)
  .filter(f => f.endsWith('.html'))
  .map(f => path.join(RAIZ, f));

/* ── contraste ────────────────────────────────────────── */
function canal(v) {
  v /= 255;
  return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
}
function luminancia(hex) {
  const n = hex.replace('#', '');
  const r = parseInt(n.slice(0, 2), 16), g = parseInt(n.slice(2, 4), 16), b = parseInt(n.slice(4, 6), 16);
  return 0.2126 * canal(r) + 0.7152 * canal(g) + 0.0722 * canal(b);
}
function contraste(a, b) {
  const la = luminancia(a), lb = luminancia(b);
  const claro = Math.max(la, lb), escuro = Math.min(la, lb);
  return (claro + 0.05) / (escuro + 0.05);
}

/* cores de texto da folha de estilo que precisam funcionar sobre o branco */
const CSS = fs.readFileSync(path.join(RAIZ, 'assets/estilo.css'), 'utf8');
const TOKENS_TEXTO = ['--ink', '--ink-2', '--muted', '--azul', '--azul-esc',
  '--turquesa', '--verde', '--coral', '--lilas', '--petroleo', '--rosa', '--vermelho', '--marca-azul'];

/* pega apenas o bloco :root principal, não o de alto contraste */
const bloco = CSS.slice(CSS.indexOf(':root {'), CSS.indexOf('/* ── Base'));
TOKENS_TEXTO.forEach(nome => {
  const m = bloco.match(new RegExp(nome.replace('-', '\\-') + ':\\s*(#[0-9A-Fa-f]{6})'));
  if (!m) return;
  const razao = contraste(m[1], '#FFFFFF');
  /* o âmbar é usado só em faixas e ícones grandes, nunca em texto corrido */
  if (razao < 4.5 && nome !== '--ambar') {
    problemas.push('CONTRASTE: ' + nome + ' (' + m[1] + ') tem razão ' +
      razao.toFixed(2) + ' sobre o branco, abaixo dos 4.5 exigidos');
  }
});

/* ── página a página ──────────────────────────────────── */
paginas.forEach(arq => {
  const bruto = fs.readFileSync(arq, 'utf8');
  /* o que está dentro de <script> é código, não marcação da página */
  const t = bruto.replace(/<script[\s\S]*?<\/script>/g, '');
  const nome = rel(arq);
  const erro = msg => problemas.push(nome + ': ' + msg);

  /* 1. idioma */
  if (!/<html[^>]+lang="[a-z]{2}(-[A-Z]{2})?"/.test(bruto)) erro('a tag html não declara o idioma (lang)');

  /* 2. imagens sem alt */
  (t.match(/<img\b[^>]*>/g) || []).forEach(img => {
    if (!/\balt=/.test(img)) erro('imagem sem alt: ' + img.slice(0, 90));
  });

  /* 3. campos sem rótulo */
  (t.match(/<(input|select|textarea)\b[^>]*>/g) || []).forEach(campo => {
    if (/type="(hidden|submit|button)"/.test(campo)) return;
    const id = (campo.match(/\bid="([^"]+)"/) || [])[1];
    const temAria = /aria-label=|aria-labelledby=/.test(campo);
    const temLabel = id && new RegExp('<label[^>]+for="' + id + '"').test(t);
    if (!temAria && !temLabel) erro('campo sem rótulo: ' + campo.slice(0, 90));
  });

  /* 4. botões e links sem nome acessível */
  const semNome = /<(button|a)\b([^>]*)>([\s\S]*?)<\/\1>/g;
  let m;
  while ((m = semNome.exec(t)) !== null) {
    const atributos = m[2], dentro = m[3];
    if (/aria-label=|aria-labelledby=|aria-hidden="true"/.test(atributos)) continue;
    /* uma imagem com alt preenchido já dá nome ao link, como na marca do topo */
    const imgComAlt = (dentro.match(/<img\b[^>]*>/g) || [])
      .some(img => /\balt="[^"]+"/.test(img));
    if (imgComAlt) continue;
    const texto = dentro
      .replace(/<svg[\s\S]*?<\/svg>/g, '')
      .replace(/<[^>]+>/g, '')
      .replace(/&[a-z]+;/g, '')
      .trim();
    if (!texto) erro('elemento clicável sem nome acessível: <' + m[1] + atributos.slice(0, 70) + '>');
  }

  /* 5 e 6. títulos */
  const titulos = (t.match(/<h([1-6])\b/g) || []).map(h => parseInt(h.slice(2), 10));
  const h1 = titulos.filter(n => n === 1).length;
  if (h1 === 0) erro('a página não tem h1');
  if (h1 > 1) erro('a página tem ' + h1 + ' elementos h1, deveria ter só um');
  for (let i = 1; i < titulos.length; i++) {
    if (titulos[i] - titulos[i - 1] > 1) {
      erro('salto na ordem dos títulos: h' + titulos[i - 1] + ' seguido de h' + titulos[i]);
      break;
    }
  }

  /* 7. identificadores repetidos */
  const ids = (t.match(/\bid="([^"]+)"/g) || []).map(s => s.slice(4, -1));
  const vistos = {}, repetidos = [];
  ids.forEach(id => {
    if (vistos[id]) { if (repetidos.indexOf(id) === -1) repetidos.push(id); }
    vistos[id] = true;
  });
  if (repetidos.length) erro('identificadores repetidos: ' + repetidos.join(', '));

  /* 9. links para fora sem rel de segurança */
  (t.match(/<a\b[^>]*target="_blank"[^>]*>/g) || []).forEach(a => {
    if (!/rel="[^"]*noopener/.test(a)) erro('link com target _blank sem rel noopener: ' + a.slice(0, 80));
  });
});

/* ── veredito ─────────────────────────────────────────── */
console.log('');
if (problemas.length) {
  console.log('  Acessibilidade: ' + problemas.length + ' problema(s) encontrado(s):\n');
  problemas.forEach(p => console.log('  ✗ ' + p));
  console.log('\n  Corrija antes de publicar.\n');
  process.exit(1);
}
console.log('  Acessibilidade: nenhum problema encontrado.');
console.log('  (' + paginas.length + ' páginas verificadas: idioma, alt, rótulos, nomes,');
console.log('   ordem dos títulos, identificadores, contraste e links externos)\n');
