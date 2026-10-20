/**
 * Cabeçalho: estado ao rolar, menu mobile e destaque da seção ativa.
 */
export function initNav() {
  const header = document.querySelector('[data-header]');
  const toggle = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-nav]');
  const floatBtn = document.querySelector('[data-float]');
  if (!header || !toggle || !nav) return;

  // Fundo sólido após rolar + botão flutuante
  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle('is-scrolled', y > 24);
    floatBtn?.classList.toggle('is-visible', y > window.innerHeight * 0.6);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Menu mobile
  const setOpen = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    header.classList.toggle('is-open', open);
    document.body.classList.toggle('no-scroll', open);
  };
  toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
  nav.addEventListener('click', (e) => {
    if (e.target.closest('a')) setOpen(false);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && header.classList.contains('is-open')) {
      setOpen(false);
      toggle.focus();
    }
  });
  window.matchMedia('(min-width: 1024px)').addEventListener('change', (e) => e.matches && setOpen(false));

  // Link ativo conforme a seção visível
  const links = [...nav.querySelectorAll('.nav__link')];
  const sections = links
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);
  if (!('IntersectionObserver' in window) || !sections.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = `#${entry.target.id}`;
        links.forEach((link) => {
          const active = link.getAttribute('href') === id;
          link.classList.toggle('is-active', active);
          if (active) link.setAttribute('aria-current', 'true');
          else link.removeAttribute('aria-current');
        });
      });
    },
    { rootMargin: '-45% 0px -50% 0px' },
  );
  sections.forEach((s) => observer.observe(s));
}
