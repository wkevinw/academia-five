/**
 * Monta a página a partir dos componentes. Executado no build (e no
 * servidor de desenvolvimento) para gerar HTML estático: melhor SEO
 * e nenhum JavaScript necessário para exibir o conteúdo.
 */
import { seo, brand, contact } from './data/site.js';
import { esc } from './utils/html.js';
import { Header } from './components/Header.js';
import { Hero } from './components/Hero.js';
import { About } from './components/About.js';
import { Plans } from './components/Plans.js';
import { Modalities } from './components/Modalities.js';
import { Facilities } from './components/Facilities.js';
import { CtaBanner } from './components/CtaBanner.js';
import { Contact } from './components/Contact.js';
import { Footer } from './components/Footer.js';
import { FloatingWhatsapp } from './components/FloatingWhatsapp.js';

export function renderHead() {
  const tags = [
    `<title>${esc(seo.title)}</title>`,
    `<meta name="description" content="${esc(seo.description)}">`,
    `<meta name="theme-color" content="${esc(seo.themeColor)}">`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:locale" content="${esc(seo.locale)}">`,
    `<meta property="og:site_name" content="${esc(brand.name)}">`,
    `<meta property="og:title" content="${esc(seo.title)}">`,
    `<meta property="og:description" content="${esc(seo.description)}">`,
    seo.url && `<link rel="canonical" href="${esc(seo.url)}">`,
    seo.url && `<meta property="og:url" content="${esc(seo.url)}">`,
    seo.ogImage && `<meta property="og:image" content="${esc(seo.ogImage)}">`,
    `<meta name="twitter:card" content="summary_large_image">`,
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ExerciseGym',
    name: brand.name,
    description: seo.description,
    ...(seo.url && { url: seo.url }),
    ...(contact.phone && { telephone: contact.phone }),
    address: { '@type': 'PostalAddress', streetAddress: contact.address.street, addressLocality: contact.address.city, addressRegion: contact.address.state, postalCode: contact.address.zip, addressCountry: 'BR' },
  };
  tags.push(`<script type="application/ld+json">${JSON.stringify(schema).replace(/</g, '\\u003c')}</script>`);
  return tags.filter(Boolean).join('\n    ');
}

export function renderBody() {
  return [
    `<a class="skip-link" href="#conteudo">Pular para o conteúdo</a>`,
    Header(),
    `<main id="conteudo">`,
    Hero(),
    About(),
    Plans(),
    Modalities(),
    Facilities(),
    CtaBanner(),
    Contact(),
    `</main>`,
    Footer(),
    FloatingWhatsapp(),
  ].join('\n');
}
