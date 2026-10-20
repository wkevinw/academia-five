import { contact, contactSection, ctas } from '../data/site.js';
import { esc } from '../utils/html.js';
import { whatsappUrl, phoneUrl, linkAttrs } from '../utils/links.js';
import { SectionHeading } from './SectionHeading.js';
import { Icon } from './Icon.js';
import { Button } from './Button.js';

export const formatAddress = (a = contact.address) =>
  `${a.street} - ${a.district}, ${a.city} - ${a.state}, ${a.zip}`;

function ContactItem({ icon, label, value, href }) {
  const content = `
    <span class="contact-item__icon">${Icon(icon)}</span>
    <span class="contact-item__body">
      <span class="contact-item__label">${esc(label)}</span>
      <span class="contact-item__value">${value}</span>
    </span>`;
  return href && href !== '#contato'
    ? `<li><a class="contact-item" href="${esc(href)}"${linkAttrs(href)}>${content}</a></li>`
    : `<li><div class="contact-item">${content}</div></li>`;
}

export function Contact() {
  const hours = contact.hours
    .map((h) => `<li><span>${esc(h.days)}</span><strong>${esc(h.time)}</strong></li>`)
    .join('');

  const map = contact.mapsEmbed
    ? `<iframe class="contact__map-frame" src="${esc(contact.mapsEmbed)}" title="Mapa de localização da Academia Five" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>`
    : `<div class="contact__map-placeholder">${Icon('pin')}<p>O mapa aparece aqui assim que o endereço for configurado.</p></div>`;

  return `
  <section class="section contact" id="contato" aria-labelledby="contact-title">
    <div class="container contact__grid">
      <div class="contact__info">
        ${SectionHeading({ eyebrow: contactSection.eyebrow, title: contactSection.title, subtitle: contactSection.subtitle, id: 'contact-title' })}
        <ul class="contact-list" role="list" data-reveal>
          ${ContactItem({ icon: 'whatsapp', label: 'WhatsApp', value: esc(contact.whatsappDisplay), href: whatsappUrl() })}
          ${ContactItem({ icon: 'phone', label: 'Telefone', value: esc(contact.phoneDisplay), href: phoneUrl() })}
          ${ContactItem({ icon: 'instagram', label: 'Instagram', value: esc(contact.instagramDisplay), href: contact.instagram })}
          ${ContactItem({ icon: 'pin', label: 'Endereço', value: esc(formatAddress()), href: contact.mapsLink })}
        </ul>
        <div class="hours" data-reveal>
          <h3 class="hours__title">${Icon('clock')} Horário de funcionamento</h3>
          <ul class="hours__list" role="list">${hours}</ul>
        </div>
      </div>
      <div class="contact__map" data-reveal>
        ${map}
        <div class="contact__map-actions">
          ${Button(ctas.ctaWhatsapp, { variant: 'primary', icon: 'whatsapp' })}
          ${contact.mapsLink ? Button({ label: 'Como chegar', href: contact.mapsLink }, { variant: 'outline', icon: 'pin' }) : ''}
        </div>
      </div>
    </div>
  </section>`;
}
