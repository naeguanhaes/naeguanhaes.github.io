/* ═══════════════════════════════════════════════════════
   NAE Guanhães — trabalhador de serviço (offline)
   Guarda o site no aparelho para funcionar sem internet.
   Ao publicar mudanças, troque o número da VERSAO abaixo:
   isso apaga o cache antigo e busca tudo de novo.
   ═══════════════════════════════════════════════════════ */

var VERSAO = 'nae-v8';

var ESSENCIAIS = [
  './',
  './index.html',
  './email.html',
  './sistemas.html',
  './horarios.html',
  './calendario.html',
  './mapa.html',
  './sobre.html',
  './contato.html',
  './404.html',
  './manifest.webmanifest',
  './assets/estilo.css',
  './assets/site.js',
  './assets/horarios.js',
  './assets/calendario.js',
  './assets/mapa.js',
  './assets/dados-horarios.js',
  './assets/dados-calendario.js',
  './assets/dados-avisos.js',
  './assets/dados-novidades.js',
  './assets/logo-nae.png',
  './assets/simbolo-nae.png',
  './assets/favicon-nae.png',
  './assets/icone-192.png',
  './assets/icone-512.png'
];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(VERSAO)
      .then(function (c) { return c.addAll(ESSENCIAIS); })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (chaves) {
      return Promise.all(chaves.map(function (k) {
        return k === VERSAO ? null : caches.delete(k);
      }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;

  var url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  /* páginas: rede primeiro, para o aluno ver a versão nova;
     sem rede, entrega o que estiver guardado */
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req)
        .then(function (resp) {
          var copia = resp.clone();
          caches.open(VERSAO).then(function (c) { c.put(req, copia); });
          return resp;
        })
        .catch(function () {
          return caches.match(req).then(function (r) { return r || caches.match('./index.html'); });
        })
    );
    return;
  }

  /* demais arquivos: cache primeiro, é o que deixa rápido */
  e.respondWith(
    caches.match(req).then(function (guardado) {
      return guardado || fetch(req).then(function (resp) {
        var copia = resp.clone();
        caches.open(VERSAO).then(function (c) { c.put(req, copia); });
        return resp;
      });
    })
  );
});
