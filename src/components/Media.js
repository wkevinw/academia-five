import { esc } from '../utils/html.js';
import { Icon } from './Icon.js';

/**
 * Imagem com lazy loading ou, quando ainda não há foto,
 * um placeholder gráfico elegante e fácil de substituir.
 */
export function Media({ image, alt = '', label = '', className = '', eager = false}) {
  if (image) {
    return `<img class="media ${className}" src="${esc(image)}" alt="${esc(alt)}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">`;
  }
  return `
    <div class="media media--placeholder ${className}" role="img" aria-label="${esc(alt || label || 'Foto em breve')}">
      ${label ? `<span class="media__tag">${Icon('camera')}<span>Foto: ${esc(label)}</span></span>` : ''}
    </div>`;
}
