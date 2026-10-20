import { ctas } from '../data/site.js';
import { resolveHref, linkAttrs } from '../utils/links.js';
import { Icon } from './Icon.js';

/** Botão flutuante de WhatsApp (aparece após rolar a página). */
export function FloatingWhatsapp() {
  const href = resolveHref(ctas.ctaWhatsapp);
  return `<a class="float-wa" href="${href}"${linkAttrs(href)} aria-label="${ctas.ctaWhatsapp.label}" data-float>${Icon('whatsapp')}</a>`;
}
