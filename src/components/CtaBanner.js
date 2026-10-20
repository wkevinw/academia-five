import { ctaBanner, ctas } from '../data/site.js';
import { esc } from '../utils/html.js';
import { Button } from './Button.js';

export function CtaBanner() {
  return `
  <section class="cta-banner" aria-labelledby="cta-title">
    <div class="container">
      <div class="cta-banner__box" data-reveal>
        <span class="cta-banner__numeral" aria-hidden="true">5</span>
        <div class="cta-banner__copy">
          <h2 class="cta-banner__title" id="cta-title">${esc(ctaBanner.title)}</h2>
          <p class="cta-banner__text">${esc(ctaBanner.text)}</p>
        </div>
        <div class="cta-banner__actions">
          ${Button(ctas.ctaEnroll, { variant: 'dark', size: 'lg', icon: 'arrow' })}
          ${Button(ctas.ctaWhatsapp, { variant: 'light', size: 'lg', icon: 'whatsapp' })}
        </div>
      </div>
    </div>
  </section>`;
}
