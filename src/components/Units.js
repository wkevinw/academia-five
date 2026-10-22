import { brand, units } from '../data/site.js';
import { esc } from '../utils/html.js';
import { SectionHeading } from './SectionHeading.js';
import { Media } from './Media.js';
import { Button } from './Button.js';
import { Icon } from './Icon.js';

const cityLine = (u) => [u.neighborhood || u.region, [u.city, u.state].filter(Boolean).join('/')].filter(Boolean).join(' – ');

/** "Ver localização": abre o Google Maps; sem link configurado, fica desativado. */
function MapButton(unit) {
  if (unit.mapsUrl) return Button({ label: 'Ver localização', href: unit.mapsUrl }, { variant: 'outline', size: 'sm', icon: 'pin' });
  return `<span class="btn btn--outline btn--sm is-disabled" aria-disabled="true" title="Link do Google Maps ainda não configurado"><span>Ver localização</span>${Icon('pin', 'btn__icon')}</span>`;
}

function UnitCard(unit, index) {
  const soon = unit.status === 'soon';
  const address = soon && !unit.address ? '' : esc(unit.address);
  const media = Media({ image: unit.image, alt: `Fachada da ${brand.name} ${unit.name}`, label: soon ? 'fachada ou obra da nova unidade' : `fachada da ${unit.label.toLowerCase()}`, className: 'unit__photo' });

  return `
    <li class="unit ${soon ? 'unit--soon' : ''}" data-reveal style="--d:${index * 90}ms">
      <div class="unit__media">
        ${media}
        <span class="unit__label">${esc(unit.label)}</span>
        ${soon && unit.badge ? `<span class="unit__badge">${esc(unit.badge)}</span>` : ''}
      </div>
      <div class="unit__body">
        <p class="unit__brand">${esc(brand.name)}</p>
        <h3 class="unit__name">${esc(unit.name)}</h3>
        ${soon ? `<p class="unit__headline">${esc(unit.headline)}</p><p class="unit__text">${esc(unit.text)}</p>` : ''}
        <ul class="unit__info" role="list">
          <li>${Icon('pin')}<span>${address ? `${address}<br>` : ''}${esc(cityLine(unit))}</span></li>
          ${!soon && unit.hours ? `<li>${Icon('clock')}<span>${esc(unit.hours)}</span></li>` : ''}
        </ul>
        <div class="unit__actions">
          ${soon
            ? Button(unit.cta, { variant: 'primary', icon: 'arrow', block: true })
            : `${MapButton(unit)}${Button(unit.cta, { variant: 'primary', size: 'sm', icon: 'arrow' })}`}
        </div>
      </div>
    </li>`;
}

export function Units() {
  return `
  <section class="section units" id="unidades" aria-labelledby="units-title">
    <div class="container">
      <div class="units__head">
        ${SectionHeading({ eyebrow: units.eyebrow, title: units.title, subtitle: units.subtitle, id: 'units-title' })}
        <div class="carousel-nav" data-carousel-nav="units" aria-hidden="true">
          <button type="button" class="carousel-nav__btn" data-dir="-1" tabindex="-1">${Icon('arrow', 'is-flipped')}</button>
          <button type="button" class="carousel-nav__btn" data-dir="1" tabindex="-1">${Icon('arrow')}</button>
        </div>
      </div>
      <ul class="units__track" role="list" data-carousel="units" aria-label="Unidades da ${esc(brand.name)}">
        ${units.items.map(UnitCard).join('')}
      </ul>
    </div>
  </section>`;
}
