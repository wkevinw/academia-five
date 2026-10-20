import { about, ctas } from '../data/site.js';
import { esc } from '../utils/html.js';
import { SectionHeading } from './SectionHeading.js';
import { Icon } from './Icon.js';
import { Button } from './Button.js';
import { Media } from './Media.js';

export function About() {
  const features = about.features
    .map(
      (f, i) => `
      <li class="feature" data-reveal style="--d:${i * 60}ms">
        <span class="feature__icon">${Icon(f.icon)}</span>
        <h3 class="feature__title">${esc(f.title)}</h3>
        <p class="feature__text">${esc(f.text)}</p>
      </li>`,
    )
    .join('');

  return `
  <section class="section about" id="academia" aria-labelledby="about-title">
    <div class="container">
      <div class="about__intro">
        <div class="about__copy">
          ${SectionHeading({ eyebrow: about.eyebrow, title: about.title, id: 'about-title' })}
          <p class="about__text" data-reveal>${esc(about.text)}</p>
          <div class="about__actions" data-reveal>
            ${Button(ctas.trial, { variant: 'dark', icon: 'arrow' })}
            ${Button(ctas.visit, { variant: 'ghost' })}
          </div>
        </div>
        <figure class="about__media" data-reveal>
          ${Media({ image: about.image, alt: about.imageAlt, label: 'ambiente da academia' })}
          <figcaption class="about__badge"><strong>Do 1º treino</strong><span>ao seu melhor resultado</span></figcaption>
        </figure>
      </div>
      <ul class="features" role="list">${features}</ul>
    </div>
  </section>`;
}
