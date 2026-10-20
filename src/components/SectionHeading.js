import { esc, highlight } from '../utils/html.js';

/** Cabeçalho padrão das seções (sobretítulo + título + subtítulo). */
export function SectionHeading({ eyebrow, title, subtitle, id, align = 'left', tone = '' }) {
  return `
    <header class="section-heading section-heading--${align} ${tone ? `section-heading--${tone}` : ''}" data-reveal>
      ${eyebrow ? `<p class="eyebrow">${esc(eyebrow)}</p>` : ''}
      <h2 class="section-title" ${id ? `id="${id}"` : ''}>${highlight(title)}</h2>
      ${subtitle ? `<p class="section-subtitle">${esc(subtitle)}</p>` : ''}
    </header>`;
}
