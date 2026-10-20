import { hero, ctas } from '../data/site.js';
import { esc, highlight } from '../utils/html.js';
import { Button } from './Button.js';
import { Icon } from './Icon.js';

export function Hero() {
  const bg = hero.image
    ? `<img class="hero__img" src="${esc(hero.image)}" alt="${esc(hero.imageAlt)}" fetchpriority="high" decoding="async">`
    : `<div class="hero__placeholder" aria-hidden="true"><span class="hero__numeral">5</span></div>`;

  const highlights = hero.highlights
    .map((item) => `<li>${Icon('check')}<span>${esc(item)}</span></li>`)
    .join('');

  return `
  <section class="hero" id="inicio" aria-labelledby="hero-title">
    <div class="hero__bg">${bg}<div class="hero__overlay"></div></div>
    <div class="container hero__content">
      <p class="eyebrow eyebrow--light hero__eyebrow" data-reveal>${esc(hero.eyebrow)}</p>
      <h1 class="hero__title" id="hero-title" data-reveal>${highlight(hero.title)}</h1>
      <p class="hero__subtitle" data-reveal>${esc(hero.subtitle)}</p>
      <div class="hero__actions" data-reveal>
        ${Button(ctas.start, { variant: 'primary', size: 'lg', icon: 'arrow' })}
        ${Button(ctas.plans, { variant: 'light', size: 'lg' })}
      </div>
      <ul class="hero__highlights" role="list" data-reveal>${highlights}</ul>
    </div>
    <a class="hero__scroll" href="#academia" aria-label="Rolar para a próxima seção"><span></span></a>
  </section>`;
}
