# Academia Five · Landing page

Landing page institucional da Academia Five. HTML estático pré-renderizado com
[Vite](https://vite.dev) e JavaScript puro (única dependência: Vite, só para desenvolvimento).

## Comandos

```bash
npm install
npm run dev      # servidor local com recarregamento
npm run build    # gera a versão final em dist/
npm run preview  # testa a versão final localmente
```

O conteúdo de `dist/` pode ser hospedado em qualquer serviço de site estático
(Netlify, Vercel, Hostinger, GitHub Pages etc.).

## Onde alterar cada coisa

| O que | Onde |
| --- | --- |
| WhatsApp, telefone, Instagram, endereço, horários, mapa | `src/data/site.js` → `contact` |
| Destino e texto de todos os botões | `src/data/site.js` → `ctas` |
| Planos (nomes, valores, benefícios, destaque) | `src/data/site.js` → `plans` |
| Modalidades | `src/data/site.js` → `modalities` |
| Fotos da estrutura | `src/data/site.js` → `facilities` |
| Título/descrição para o Google | `src/data/site.js` → `seo` |
| Cores, fontes, espaçamentos | `src/styles/tokens.css` |

### Logo

Coloque o arquivo original da logo em `public/` (ex.: `public/logo.png` ou `.svg`)
e preencha `brand.logo`, `brand.logoWidth` e `brand.logoHeight` em `src/data/site.js`.
Enquanto `brand.logo` estiver vazio, o nome aparece em texto.

### Fotos

Coloque as imagens em `public/images/` e informe o caminho (ex.: `/images/hero.jpg`)
no campo `image` correspondente. Sem foto, a página mostra um placeholder gráfico.
Recomendado: JPG ou WebP, até ~2400 px de largura para o banner e ~1200 px para os cards.

### Medidas recomendadas das fotos

Use JPG ou WebP com até ~300 KB cada (o banner pode ter até ~400 KB).

| Local | Medida | Formato | Observação |
| --- | --- | --- | --- |
| Banner principal (`hero.image`) | 2400 × 1350 px | 16:9 paisagem | Texto fica à esquerda: deixe a pessoa/ação do centro para a direita |
| Foto "Por que treinar na Five" (`about.image`) | 1200 × 1500 px | 4:5 retrato | |
| Modalidades em destaque (`modalities.items[].image`) | 1200 × 900 px | 4:3 | O texto fica na parte de baixo: assunto principal na metade de cima |
| Estrutura, bloco grande (`size: 'large'`) | 1400 × 1100 px | ~5:4 | |
| Estrutura, bloco alto (`size: 'tall'`) | 800 × 1300 px | retrato | |
| Estrutura, blocos pequenos (`size: ''`) | 800 × 640 px | 5:4 | |
| Estrutura, faixa inteira (`size: 'full'`) | 2400 × 600 px | 4:1 panorâmica | No celular é recortada no centro |
| Compartilhamento em redes (`seo.ogImage`) | 1200 × 630 px | | Imagem que aparece ao enviar o link no WhatsApp |
| Logo (`brand.logo`) | SVG, ou PNG com fundo transparente e 400 px+ de largura | | Exibida com 44 px de altura no topo |

### WhatsApp

Preencha `contact.whatsapp` só com números (DDI + DDD + número, ex.: `5511999999999`).
Enquanto estiver vazio, os botões de WhatsApp levam para a seção de contato.

## Estrutura

```
index.html                 modelo da página (head + ponto de montagem)
vite.config.js             plugin que pré-renderiza os componentes no HTML
public/                    arquivos servidos como estão (logo, fotos, favicon)
src/
  data/site.js             TODOS os dados e textos editáveis
  render.js                monta a página (SEO + seções)
  components/              uma função por seção/componente
  scripts/                 menu, link ativo e animações de entrada
  styles/                  tokens, base, componentes e um CSS por seção
  utils/                   helpers de HTML e de links (WhatsApp, telefone)
```
