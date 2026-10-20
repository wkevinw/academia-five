/**
 * Ícones em SVG inline (traço), sem dependências externas.
 * Uso: Icon('dumbbell') ou Icon('dumbbell', 'classe-extra')
 */
const paths = {
  dumbbell: '<path d="M6.5 6.5v11M17.5 6.5v11M3.5 9v6M20.5 9v6M6.5 12h11"/>',
  spark: '<path d="M12 3l1.9 5.6L19.5 10l-5.6 1.9L12 17.5l-1.9-5.6L4.5 10l5.6-1.4z"/><path d="M19 17v4M17 19h4"/>',
  medal: '<circle cx="12" cy="14.5" r="5.5"/><path d="M8.5 10L6 3h4l2 5 2-5h4l-2.5 7"/><path d="M12 12.5v4"/>',
  target: '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/>',
  chart: '<path d="M4 20h16"/><path d="M6 16l4-5 3 3 5-7"/><path d="M15 7h3v3"/>',
  heart: '<path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.3a4.3 4.3 0 0 1 7.5 2.5C19.5 15.4 12 20 12 20z"/>',
  bolt: '<path d="M13 2.5L5 13.5h6l-1 8 8-11h-6z"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4.5 20.5a7.5 7.5 0 0 1 15 0"/>',
  check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  whatsapp:
    '<path d="M4 20l1.2-4.1A8 8 0 1 1 8.4 19z"/><path d="M9.2 8.6c.2-.4.5-.5.8-.5h.5l.9 2.1-.7.9a5.4 5.4 0 0 0 2.6 2.4l.8-.8 2 .9v.5c0 .6-.6 1.3-1.5 1.3a6.3 6.3 0 0 1-5.6-5.4c0-.6.1-1 .2-1.4z"/>',
  phone: '<path d="M5 4h3.5l1.5 4-2 1.5a10 10 0 0 0 6.5 6.5L16 14l4 1.5V19a1.5 1.5 0 0 1-1.5 1.5A15.5 15.5 0 0 1 3.5 5.5 1.5 1.5 0 0 1 5 4z"/>',
  instagram: '<rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r=".8" fill="currentColor"/>',
  facebook: '<path d="M14.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4a20 20 0 0 0-2.4-.1c-2.3 0-3.9 1.4-3.9 4v2.2H8.7v3h2.6V21"/>',
  tiktok: '<path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5"/><path d="M14 3c.4 2.6 2.2 4.4 5 4.6"/>',
  pin: '<path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.5"/>',
  clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
  camera: '<path d="M4 8h3l1.8-2.5h6.4L17 8h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  close: '<path d="M6 6l12 12M18 6L6 18"/>',
  mail: '<rect x="3.5" y="5.5" width="17" height="13" rx="2"/><path d="M4 7l8 6 8-6"/>',
};

export function Icon(name, className = '') {
  const body = paths[name] ?? paths.spark;
  return `<svg class="icon ${className}" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${body}</svg>`;
}
