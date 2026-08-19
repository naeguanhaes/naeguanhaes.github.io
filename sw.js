/* ═══════════════════════════════════════════════════════
   NAE Guanhães · trabalhador de serviço (offline)
   Guarda o site no aparelho para funcionar sem internet.
   Ao publicar mudanças, troque o número da VERSAO abaixo:
   isso apaga o cache antigo e busca tudo de novo.
   ═══════════════════════════════════════════════════════ */

var VERSAO = 'nae-v37';

/* Arquivos de dados (avisos, horários, calendário, editais, semestres).
   Estes NÃO seguem a regra do cache primeiro: um aviso urgente precisa
   chegar ao aluno na mesma visita, mesmo que a VERSAO acima não tenha
   sido trocada. Vão pela rede, com prazo curto e queda para o guardado. */
var PADRAO_DADOS = /\/assets\/dados-[a-z-]+\.js$|\/historico\/semestres\/indice\.js$/;
var PRAZO_DADOS = 2500;

var ESSENCIAIS = [
  './',
  './index.html',
  './email.html',
  './sistemas.html',
  './moodle.html',
  './lyceum.html',
  './horarios.html',
  './calendario.html',
  './calculadora.html',
  './cronometro.html',
  './requerimentos.html',
  './mapa.html',
  './sobre.html',
  './contato.html',
  './apoio.html',
  './avisos.html',
  './privacidade.html',
  './curso.html',
  './matriz.html',
  './atividades.html',
  './estagio.html',
  './tcc.html',
  './declaracao-ia.html',
  './secretaria.html',
  './planner.html',
  './editais.html',
  './extensao.html',
  './auxilios.html',
  './calouro.html',
  './semestres.html',
  './cartaz.html',
  './guia.html',
  './404.html',
  './offline.html',
  './manifest.webmanifest',
  './assets/min/estilo.min.css',
  './assets/min/edital-hero.min.js',
  './assets/min/site.min.js',
  './assets/min/horarios.min.js',
  './assets/min/calendario.min.js',
  './assets/min/mapa.min.js',
  './assets/dados-horarios.js',
  './assets/dados-calendario.js',
  './assets/dados-avisos.js',
  './assets/dados-novidades.js',
  './assets/dados-busca.js',
  './assets/dados-editais.js',
  './assets/dados-curso.js',
  './assets/dados-ementas.js',
  './assets/dados-requerimentos.js',
  './assets/min/busca.min.js',
  './assets/min/planner.min.js',
  './assets/min/curso.min.js',
  './assets/min/requerimentos.min.js',
  './assets/min/qr.min.js',
  './historico/semestres/indice.js',
  './assets/logo-topo.webp',
  './assets/simbolo-nae.webp',
  './assets/logo-nae.png',
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

/* Sincronização periódica, onde o navegador oferece (Android com o site
   instalado). O sistema acorda o trabalhador de tempos em tempos, ele
   busca o calendário novo e avisa dos prazos dos próximos três dias.
   Sem isso, o aviso só aparece quando o estudante abre o site. */
self.addEventListener('periodicsync', function (e) {
  if (e.tag !== 'conferir-prazos') return;
  e.waitUntil(conferirPrazos());
});

function conferirPrazos() {
  return fetch('./assets/dados-calendario.js', { cache: 'reload' })
    .then(function (r) { return r.text(); })
    .then(function (texto) {
      var dados = {};
      /* o arquivo atribui a window.DADOS_CALENDARIO: aqui não há window */
      new Function('window', texto)(dados);
      var eventos = (dados.DADOS_CALENDARIO && dados.DADOS_CALENDARIO.eventos) || [];

      var hoje = new Date();
      var iso = function (d) {
        return d.getFullYear() + '-' +
               String(d.getMonth() + 1).padStart(2, '0') + '-' +
               String(d.getDate()).padStart(2, '0');
      };
      var limite = new Date();
      limite.setDate(limite.getDate() + 3);

      var proximos = eventos.filter(function (ev) {
        return !ev.semData && ev.tipo !== 'feriado' && ev.ini >= iso(hoje) && ev.ini <= iso(limite);
      });

      return Promise.all(proximos.map(function (ev) {
        var dias = Math.round((new Date(ev.ini + 'T12:00:00') - new Date(iso(hoje) + 'T12:00:00')) / 86400000);
        var quando = dias === 0 ? 'é hoje' : dias === 1 ? 'é amanhã' : 'em ' + dias + ' dias';
        return self.registration.showNotification('NAE Guanhães', {
          body: ev.titulo + ', ' + quando + '.',
          icon: './assets/icone-192.png',
          badge: './assets/favicon-nae.png',
          tag: 'prazo-' + ev.ini
        });
      }));
    })
    .catch(function () {});
}

/* tocar no aviso abre o calendário */
self.addEventListener('notificationclick', function (e) {
  e.notification.close();
  e.waitUntil(self.clients.matchAll({ type: 'window' }).then(function (abertas) {
    for (var i = 0; i < abertas.length; i++) {
      if (abertas[i].url.indexOf('calendario.html') !== -1) return abertas[i].focus();
    }
    return self.clients.openWindow('./calendario.html');
  }));
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
          return caches.match(req).then(function (r) { return r || caches.match('./offline.html'); });
        })
    );
    return;
  }

  /* dados: rede primeiro, com prazo. Passou do prazo ou faltou rede,
     entrega o que estiver guardado e atualiza o cache em segundo plano */
  if (PADRAO_DADOS.test(url.pathname)) {
    e.respondWith(
      caches.open(VERSAO).then(function (c) {
        return c.match(req).then(function (guardado) {
          return new Promise(function (resolver) {
            var entregue = false;
            function entregar(resp) {
              if (!entregue && resp) { entregue = true; resolver(resp); }
            }
            var relogio = setTimeout(function () { entregar(guardado); }, PRAZO_DADOS);
            fetch(req).then(function (resp) {
              clearTimeout(relogio);
              if (resp && resp.ok) c.put(req, resp.clone());
              entregar(resp);
            }).catch(function () {
              clearTimeout(relogio);
              entregar(guardado);
              /* sem rede e sem cópia guardada: não há o que entregar */
              if (!entregue) { entregue = true; resolver(Response.error()); }
            });
          });
        });
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
