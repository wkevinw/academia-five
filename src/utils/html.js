/** Escapa texto vindo da configuração antes de inserir no HTML. */
export function esc(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/** Converte "Texto [destaque]" em "Texto <span class="hl">destaque</span>". */
export function highlight(text = '') {
  return esc(text).replace(/\[(.+?)\]/g, '<span class="hl">$1</span>');
}

/** Remove os colchetes de destaque (para atributos e textos simples). */
export function plain(text = '') {
  return String(text).replace(/\[(.+?)\]/g, '$1');
}

/** Junta pedaços de HTML ignorando valores vazios. */
export const join = (parts) => parts.filter(Boolean).join('');
