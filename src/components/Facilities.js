import { facilities, ctas } from '../data/site.js';
import { esc } from '../utils/html.js';
import { SectionHeading } from './SectionHeading.js';
import { Media } from './Media.js';
import { Button } from './Button.js';

export function Facilities() {
  const tiles = facilities.items
    .map(
      (item, i) => `
      <figure class="gallery__item ${item.size ? `gallery__item--${item.size}` : ''}" data-reveal style="--d:${i * 60}ms">
        ${Media({ image: item.image, alt: `${item.label} da Academia Five`, label: item.label })}
        <figcaption class="gallery__caption">${esc(item.label)}</figcaption>
      </figure>`,
    )
    .join('');

  return `
  <section class="section facilities" id="estrutura" aria-labelledby="facilities-title">
    <div class="container">
      <div class="facilities__head">
        ${SectionHeading({ eyebrow: facilities.eyebrow, title: facilities.title, subtitle: facilities.subtitle, id: 'facilities-title', tone: 'dark' })}
        <div data-reveal>${Button(ctas.visit, { variant: 'light', icon: 'arrow' })}</div>
      </div>
      <div class="gallery">${tiles}</div>
    </div>
  </section>`;
}
