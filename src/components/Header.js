import { nav, ctas } from '../data/site.js';
import { esc } from '../utils/html.js';
import { Logo } from './Logo.js';
import { Button } from './Button.js';

export function Header() {
  const links = nav
    .map((item) => `<li><a class="nav__link" href="${esc(item.href)}">${esc(item.label)}</a></li>`)
    .join('');

  return `
  <header class="site-header" data-header>
    <div class="container site-header__inner">
      ${Logo({ eager: true })}
      <nav class="nav" id="menu" aria-label="Navegação principal" data-nav>
        <ul class="nav__list">${links}</ul>
        ${Button(ctas.enroll, { variant: 'primary', className: 'nav__cta' })}
      </nav>
      <button class="nav-toggle" type="button" aria-controls="menu" aria-expanded="false" aria-label="Abrir menu" data-nav-toggle>
        <span class="nav-toggle__bar"></span>
        <span class="nav-toggle__bar"></span>
        <span class="nav-toggle__bar"></span>
      </button>
    </div>
  </header>`;
}
