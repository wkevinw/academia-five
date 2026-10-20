import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

/**
 * Plugin mínimo que gera o HTML da página a partir dos componentes
 * em src/components e dos dados de src/data/site.js (pré-renderização).
 */
function prerender() {
  let server;
  let root = process.cwd();
  const load = () =>
    server
      ? server.ssrLoadModule('/src/render.js')
      : import(/* @vite-ignore */ pathToFileURL(resolve(root, 'src/render.js')).href);

  return {
    name: 'five-prerender',
    configResolved(config) {
      root = config.root;
    },
    configureServer(s) {
      server = s;
    },
    async transformIndexHtml(html) {
      const { renderHead, renderBody } = await load();
      return html.replace('<!--app-head-->', renderHead()).replace('<!--app-body-->', renderBody());
    },
    handleHotUpdate({ file, server: s }) {
      if (/src[\\/](components|data|utils|render)/.test(file)) {
        s.ws.send({ type: 'full-reload' });
        return [];
      }
    },
  };
}

export default defineConfig({
  base: './',
  plugins: [prerender()],
  build: {
    cssCodeSplit: false,
    assetsInlineLimit: 4096,
  },
});
