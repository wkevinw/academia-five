import { brand } from '../data/site.js';
import { esc } from '../utils/html.js';

/**
 * Logomarca. Usa o arquivo original definido em site.js (brand.logo).
 * Enquanto o arquivo não existir, mostra o nome em texto.
 */
export function Logo({ className = '', eager = false } = {}) {
  const inner = brand.logo
    ? `<img src="${esc(brand.logo)}" alt="${esc(brand.logoAlt)}" width="${brand.logoWidth}" height="${brand.logoHeight}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">`
    : `<span class="logo__text">Academia <strong>Five</strong></span>`;
  return `<a class="logo ${className}" href="#inicio" aria-label="${esc(brand.name)} - voltar ao início">${inner}</a>`;
}
