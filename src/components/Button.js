import { esc } from '../utils/html.js';
import { resolveHref, linkAttrs } from '../utils/links.js';
import { Icon } from './Icon.js';

/**
 * Botão/link reutilizável.
 * variant: 'primary' | 'outline' | 'ghost' | 'dark' | 'light'
 */
export function Button(cta, { variant = 'primary', icon = '', size = '', className = '', block = false } = {}) {
  const href = resolveHref(cta);
  const classes = ['btn', `btn--${variant}`, size && `btn--${size}`, block && 'btn--block', className]
    .filter(Boolean)
    .join(' ');
  const iconHtml = icon ? Icon(icon, 'btn__icon') : '';
  return `<a class="${classes}" href="${esc(href)}"${linkAttrs(href)}><span>${esc(cta.label)}</span>${iconHtml}</a>`;
}
