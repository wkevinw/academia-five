/**
 * Setas para os carrosséis horizontais (scroll-snap em CSS).
 * Sem JS, o carrossel continua funcionando com o toque/rolagem.
 */
export function initCarousels() {
  document.querySelectorAll('[data-carousel-nav]').forEach((nav) => {
    const track = document.querySelector(`[data-carousel="${nav.dataset.carouselNav}"]`);
    if (!track) return;
    const [prev, next] = nav.querySelectorAll('[data-dir]');

    const update = () => {
      const max = track.scrollWidth - track.clientWidth - 2;
      nav.classList.toggle('is-active', max > 0);
      prev.disabled = track.scrollLeft <= 2;
      next.disabled = track.scrollLeft >= max;
    };

    nav.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-dir]');
      if (!btn) return;
      const card = track.firstElementChild;
      const step = card ? card.getBoundingClientRect().width + parseFloat(getComputedStyle(track).columnGap || 0) : track.clientWidth;
      track.scrollBy({ left: step * Number(btn.dataset.dir), behavior: 'smooth' });
    });
    track.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
  });
}
