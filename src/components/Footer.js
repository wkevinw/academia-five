import { brand, nav, contact, footer, ctas } from '../data/site.js';
import { esc } from '../utils/html.js';
import { whatsappUrl, phoneUrl, linkAttrs } from '../utils/links.js';
import { Logo } from './Logo.js';
import { Icon } from './Icon.js';
import { Button } from './Button.js';
import { formatAddress } from './Contact.js';

function Social() {
  const items = [
    { icon: 'instagram', label: 'Instagram', href: contact.instagram },
    { icon: 'facebook', label: 'Facebook', href: contact.facebook },
    { icon: 'tiktok', label: 'TikTok', href: contact.tiktok },
    { icon: 'whatsapp', label: 'WhatsApp', href: contact.whatsapp ? whatsappUrl() : '' },
  ].filter((s) => s.href);

  if (!items.length) return '<p class="footer__muted">Redes sociais em breve.</p>';
  return `<ul class="social" role="list">${items
    .map((s) => `<li><a href="${esc(s.href)}" aria-label="${s.label}"${linkAttrs(s.href)}>${Icon(s.icon)}</a></li>`)
    .join('')}</ul>`;
}

export function Footer() {
  const year = new Date().getFullYear();
  const links = nav.map((n) => `<li><a href="${esc(n.href)}">${esc(n.label)}</a></li>`).join('');

  return `
  <footer class="site-footer">
    <div class="container footer__grid">
      <div class="footer__brand">
        ${Logo({ className: 'logo--footer' })}
        <p class="footer__tagline">${esc(footer.tagline)}</p>
        ${Social()}
      </div>
      <nav class="footer__col" aria-label="Links rápidos">
        <h2 class="footer__title">Links rápidos</h2>
        <ul role="list">${links}</ul>
      </nav>
      <div class="footer__col">
        <h2 class="footer__title">Contato</h2>
        <ul role="list">
          <li><a href="${esc(whatsappUrl())}"${linkAttrs(whatsappUrl())}>WhatsApp: ${esc(contact.whatsappDisplay)}</a></li>
          <li><a href="${esc(phoneUrl())}">Telefone: ${esc(contact.phoneDisplay)}</a></li>
          ${contact.email ? `<li><a href="mailto:${esc(contact.email)}">${esc(contact.email)}</a></li>` : ''}
        </ul>
      </div>
      <div class="footer__col">
        <h2 class="footer__title">Endereço</h2>
        <address>${esc(formatAddress())}</address>
        <div class="footer__cta">${Button(ctas.enroll, { variant: 'primary', size: 'sm' })}</div>
      </div>
    </div>
    <div class="container footer__bottom">
      <p>© ${year} ${esc(brand.name)}. Todos os direitos reservados.</p>
      <a href="#inicio" class="footer__top">Voltar ao topo ↑</a>
    </div>
  </footer>`;
}
