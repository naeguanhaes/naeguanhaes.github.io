/* ═══════════════════════════════════════════════════════
   NAE Guanhães · gerador dos dados estruturados (JSON-LD)
   ───────────────────────────────────────────────────────
   Rode depois de mexer no endereço, no telefone, no horário
   de atendimento ou em qualquer pergunta do FAQ:

       node ferramentas/gerar-dados-estruturados.js

   O que ele escreve, dentro do <head> de cada página, entre
   os comentários "dados estruturados: inicio" e "fim":

   1. index.html e contato.html: quem é o NAE, onde fica, o
      telefone, o e-mail e o horário de atendimento. É isso
      que faz o Google mostrar o cartão da unidade ao lado
      do resultado.
   2. email.html e sistemas.html: as perguntas do FAQ, para
      aparecerem já abertas na página de resultados.

   As perguntas NÃO são digitadas aqui: elas são lidas do
   próprio HTML da página (<details class="faq">). Assim o
   que o Google recebe é sempre igual ao que o estudante lê.
   ═══════════════════════════════════════════════════════ */
'use strict';

const fs = require('fs');
const path = require('path');

const RAIZ = path.join(__dirname, '..');
const SITE = 'https://naeguanhaes.github.io/';

const INICIO = '<!-- dados estruturados: inicio (gerado por ferramentas/gerar-dados-estruturados.js) -->';
const FIM = '<!-- dados estruturados: fim -->';

/* ── o NAE, em dados ──────────────────────────────────── */
const NUCLEO = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'NAE · Núcleo de Apoio ao Estudante',
  alternateName: 'NAE Guanhães',
  description: 'Núcleo de Apoio ao Estudante da UEMG, Unidade Guanhães: acolhimento, ' +
               'apoio pedagógico, assistência estudantil e acessibilidade.',
  url: SITE,
  logo: SITE + 'assets/logo-nae.png',
  image: SITE + 'assets/og-nae.jpg',
  email: 'nae.guanhaes@uemg.br',
  telephone: '+55-33-3450-0939',
  parentOrganization: {
    '@type': 'CollegeOrUniversity',
    name: 'Universidade do Estado de Minas Gerais, Unidade Guanhães',
    alternateName: 'UEMG Guanhães'
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Rodovia BR-259, nº 2250, Bairro Nova União',
    addressLocality: 'Guanhães',
    addressRegion: 'MG',
    postalCode: '39740-000',
    addressCountry: 'BR'
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['https://schema.org/Tuesday', 'https://schema.org/Thursday'],
      opens: '18:00',
      closes: '19:00'
    }
  ],
  areaServed: 'Guanhães e região, Minas Gerais',
  knowsLanguage: 'pt-BR'
};

/* ── perguntas lidas da própria página ────────────────── */
function limpar(html) {
  return html
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ')
    .trim();
}

function perguntasDe(texto) {
  const blocos = texto.match(/<details class="faq">[\s\S]*?<\/details>/g) || [];
  return blocos.map(b => {
    const q = b.match(/<summary>([\s\S]*?)<\/summary>/);
    const corpo = b.replace(/<summary>[\s\S]*?<\/summary>/, '')
                   .replace(/^<details[^>]*>/, '')
                   .replace(/<\/details>$/, '');
    if (!q) return null;
    return {
      '@type': 'Question',
      name: limpar(q[1]),
      acceptedAnswer: { '@type': 'Answer', text: limpar(corpo) }
    };
  }).filter(Boolean);
}

/* ── escrita no <head> ────────────────────────────────── */
function gravar(pagina, objetos) {
  const caminho = path.join(RAIZ, pagina);
  let texto = fs.readFileSync(caminho, 'utf8');

  const bloco = INICIO + '\n' +
    objetos.map(o => '<script type="application/ld+json">\n' +
      JSON.stringify(o, null, 2) + '\n</script>').join('\n') +
    '\n' + FIM;

  const antigo = new RegExp(INICIO.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') +
    '[\\s\\S]*?' + FIM.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));

  if (antigo.test(texto)) {
    texto = texto.replace(antigo, bloco);
  } else {
    texto = texto.replace('</head>', bloco + '\n</head>');
  }

  fs.writeFileSync(caminho, texto);
}

console.log('');

['index.html', 'contato.html'].forEach(p => {
  gravar(p, [NUCLEO]);
  console.log('  ' + p + ': cartão do NAE (endereço, telefone, atendimento)');
});

['email.html', 'sistemas.html'].forEach(p => {
  const texto = fs.readFileSync(path.join(RAIZ, p), 'utf8');
  const perguntas = perguntasDe(texto);
  if (!perguntas.length) {
    console.log('  ' + p + ': nenhuma pergunta encontrada, nada escrito');
    return;
  }
  gravar(p, [{ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: perguntas }]);
  console.log('  ' + p + ': ' + perguntas.length + ' perguntas do FAQ');
});

console.log('');
