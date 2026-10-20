import { modalities, ctas } from '../data/site.js';
import { esc } from '../utils/html.js';
import { SectionHeading } from './SectionHeading.js';
import { Icon } from './Icon.js';
import { Media } from './Media.js';
import { Button } from './Button.js';

/** Card grande com foto (modalidades em destaque). */
function FeaturedCard(item, index) {
  return `
    <li class="modality" data-reveal style="--d:${index * 80}ms">
      ${Media({ image: item.image, alt: item.name, label: item.image ? '' : item.name, className: 'modality__media' })}
      <div class="modality__body">
        <span class="modality__icon">${Icon(item.icon)}</span>
        ${item.tag ? `<p class="modality__tag">${esc(item.tag)}</p>` : ''}
        <h3 class="modality__name">${esc(item.name)}</h3>
        <p class="modality__text">${esc(item.text)}</p>
      </div>
    </li>`;
}

/** Card compacto (demais modalidades). */
function CompactCard(item, index) {
  return `
    <li class="modality-mini" data-reveal style="--d:${index * 60}ms">
      <span class="modality-mini__icon">${Icon(item.icon)}</span>
      <div>
        <h3 class="modality-mini__name">${esc(item.name)}</h3>
        <p class="modality-mini__text">${esc(item.text)}</p>
      </div>
    </li>`;
}

export function Modalities() {
  const featured = modalities.items.filter((m) => m.featured);
  const others = modalities.items.filter((m) => !m.featured);

  return `
  <section class="section modalities" id="modalidades" aria-labelledby="modalities-title">
    <div class="container">
      <div class="modalities__head">
        ${SectionHeading({ eyebrow: modalities.eyebrow, title: modalities.title, subtitle: modalities.subtitle, id: 'modalities-title' })}
        <div data-reveal>${Button(ctas.trial, { variant: 'outline', icon: 'arrow' })}</div>
      </div>
      ${featured.length ? `<ul class="modalities__featured" role="list">${featured.map(FeaturedCard).join('')}</ul>` : ''}
      ${others.length ? `<ul class="modalities__grid" role="list">${others.map(CompactCard).join('')}</ul>` : ''}
    </div>
  </section>`;
}
