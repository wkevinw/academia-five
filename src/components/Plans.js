import { plans } from '../data/site.js';
import { esc } from '../utils/html.js';
import { SectionHeading } from './SectionHeading.js';
import { Button } from './Button.js';
import { Icon } from './Icon.js';

function PlanCard(plan, index) {
  const benefits = plan.benefits.map((b) => `<li>${Icon('check')}<span>${esc(b)}</span></li>`).join('');
  return `
    <article class="plan ${plan.featured ? 'plan--featured' : ''}" data-reveal style="--d:${index * 80}ms" aria-labelledby="plan-${index}">
      ${plan.badge ? `<p class="plan__badge">${esc(plan.badge)}</p>` : ''}
      <h3 class="plan__name" id="plan-${index}"><span>Plano</span> ${esc(plan.name)}</h3>
      <p class="plan__desc">${esc(plan.description)}</p>
      <p class="plan__price">
        <span class="plan__currency">${esc(plans.currency)}</span>
        <span class="plan__value">${esc(plan.price)}</span>
        <span class="plan__period">${esc(plan.period)}</span>
      </p>
      <ul class="plan__benefits" role="list">${benefits}</ul>
      ${Button(plan.cta, { variant: plan.featured ? 'primary' : 'outline', block: true })}
    </article>`;
}

export function Plans() {
  return `
  <section class="section plans" id="planos" aria-labelledby="plans-title">
    <div class="container">
      ${SectionHeading({ eyebrow: plans.eyebrow, title: plans.title, subtitle: plans.subtitle, id: 'plans-title', align: 'center' })}
      <div class="plans__grid">${plans.items.map(PlanCard).join('')}</div>
      <p class="plans__note">${esc(plans.note)}</p>
    </div>
  </section>`;
}
