import { contact } from '../data/site.js';

const digits = (value = '') => String(value).replace(/\D/g, '');

/** Link do WhatsApp. Sem número configurado, cai na seção de contato. */
export function whatsappUrl(message = contact.whatsappMessage) {
  const number = digits(contact.whatsapp);
  if (!number) return '#contato';
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function phoneUrl() {
  const number = digits(contact.phone);
  return number ? `tel:+${number}` : '#contato';
}

/** Resolve o destino de um CTA definido em site.js. */
export function resolveHref(cta) {
  if (!cta) return '#';
  if (cta.href === 'whatsapp') return whatsappUrl(cta.message);
  return cta.href;
}

export function isExternal(href) {
  return /^https?:\/\//.test(href);
}

/** Atributos extras para links externos. */
export function linkAttrs(href) {
  return isExternal(href) ? ' target="_blank" rel="noopener noreferrer"' : '';
}
