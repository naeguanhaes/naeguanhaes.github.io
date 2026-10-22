/* ═══════════════════════════════════════════════════════
   Gerador das imagens dos Stories (1080x1920)
   ───────────────────────────────────────────────────────
   Lê ferramentas/stories/stories.json e escreve, para cada
   item, uma página em _stories_tmp/<id>.html com a identidade
   do NAE: faixa, título, texto, o print da página num celular
   (ou o cartaz, ou a logo do evento), os selos e o endereço.

       node ferramentas/stories/gerar.js

   Depois: sirva a raiz do site, capture cada página em
   1080x1920 e salve como JPG em assets/stories/<id>.jpg
   (o LEIA-ME desta pasta explica). Os prints dos celulares
   (print: "horarios") ficam em _stories_tmp/print-<nome>.png,
   capturados da página com 390 px de largura e zoom 2.
   Apague _stories_tmp/ no fim: ela não vai para o site.
   ═══════════════════════════════════════════════════════ */
const fs = require('fs');
const path = require('path');
const RAIZ = path.join(__dirname, '..', '..');
const SAIDA = path.join(RAIZ, '_stories_tmp');
const itens = JSON.parse(fs.readFileSync(path.join(__dirname, 'stories.json'), 'utf8'));
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
fs.mkdirSync(SAIDA, { recursive: true });

itens.forEach((d) => {
  let midia = '';
  if (d.print) midia = '<div class=cel><img src="print-' + d.print + '.png" alt=""></div>';
  else if (d.cartaz) midia = '<img class=cartaz src="' + d.cartaz + '" alt="">';
  else if (d.logo) midia = '<img class=logo src="' + d.logo + '" alt="">';
  const selos = (d.selos || []).map((s) => '<span><b>' + esc(s[0]) + '</b>' + esc(s[1]) + '</span>').join('');
  const link = 'naeguanhaes.github.io' + (d.link ? '/' + d.link.split('#')[0] : '');
  const html = `<!doctype html><html lang=pt-BR><head><meta charset=utf-8><link rel=stylesheet href="/assets/min/estilo.min.css"><style>
html,body{margin:0;width:1080px;height:1920px;overflow:hidden}
.st{position:relative;width:1080px;height:1920px;overflow:hidden;color:#fff;font-family:var(--sans);box-sizing:border-box;
 background:linear-gradient(160deg,${d.escura} 0%,${d.cor} 62%,${d.cor} 100%);display:flex;flex-direction:column;align-items:center;text-align:center;padding:220px 80px 0}
.b1,.b2{position:absolute;background:#F2B544;opacity:.95}
.b1{width:560px;height:560px;border-radius:46% 54% 60% 40%/50% 42% 58% 50%;top:-330px;left:-250px}
.b2{width:520px;height:520px;border-radius:58% 42% 40% 60%/45% 55% 45% 55%;bottom:-300px;right:-230px}
.b3{position:absolute;width:300px;height:300px;border-radius:50%;border:3px solid rgba(255,255,255,.18);top:340px;right:-90px}
.faixa{position:relative;font-weight:800;letter-spacing:.14em;text-transform:uppercase;font-size:30px;color:#16303F;background:#F2B544;padding:12px 32px;border-radius:99px}
h1{position:relative;font-family:var(--serif);font-weight:600;font-size:${d.titulo.length > 26 ? 80 : 92}px;line-height:1.04;margin:30px 0 18px;max-width:900px;color:#fff;text-wrap:balance}
p{position:relative;font-size:36px;line-height:1.3;margin:0;max-width:860px;color:rgba(255,255,255,.92);text-wrap:balance}
.midia{position:relative;margin-top:44px;flex:1;min-height:0;display:flex;align-items:flex-start;justify-content:center;max-height:${(d.selos || []).length ? 780 : 900}px}
.cel{width:500px;height:100%;max-height:900px;border:16px solid #0B1620;border-radius:64px;overflow:hidden;background:#fff;box-shadow:0 40px 80px -24px rgba(0,0,0,.6);transform:rotate(-3deg)}
.cel img{width:100%;display:block}
.cartaz{max-height:100%;max-width:640px;border-radius:24px;box-shadow:0 40px 80px -24px rgba(0,0,0,.6)}
.logo{width:820px;align-self:center}
.selos{position:relative;margin-top:40px;display:flex;gap:18px;flex-wrap:wrap;justify-content:center}
.selos span{background:rgba(255,255,255,.12);border:2px solid rgba(255,255,255,.35);border-radius:22px;padding:14px 26px;font-size:32px}
.selos b{font-family:var(--serif);font-size:50px;margin-right:12px}
.rodape{position:relative;margin:40px 0 230px;display:flex;align-items:center;gap:22px;background:#fff;border-radius:28px;padding:16px 30px 16px 22px;box-shadow:0 16px 40px -12px rgba(0,0,0,.45)}
.rodape img{height:74px;width:auto}
.rodape span{font-size:32px;font-weight:700;color:#16303F}
</style></head><body><div class=st><span class=b1></span><span class=b2></span><span class=b3></span>
<span class=faixa>${esc(d.faixa)}</span>
<h1>${esc(d.titulo)}</h1>
<p>${esc(d.texto)}</p>
<div class=midia>${midia}</div>
${selos ? '<div class=selos>' + selos + '</div>' : ''}
<div class=rodape><img src="/assets/logo-topo.webp" alt=""><span>${esc(link)}</span></div>
</div></body></html>`;
  fs.writeFileSync(path.join(SAIDA, d.id + '.html'), html);
});
console.log(itens.length + ' modelos em _stories_tmp/');
