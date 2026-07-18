---
name: site-builder
description: Usar esta skill al crear, estructurar o modificar páginas del sitio web del portafolio Ngürü en Next.js con CSS plano. Cubre estructura de carpetas, convenciones de componentes, responsive y performance de imágenes/video. Trigger en cualquier tarea de "crear página", "agregar sección", "nueva galería", "landing".
---

# Site Builder — Ngürü (Next.js + CSS plano)

Referencia siempre `brand-identity` antes de tocar esta skill.

## Stack

- **Framework:** Next.js (App Router)
- **Estilos:** CSS plano — módulos CSS (`.module.css`) por componente/sección. Nada de Tailwind, styled-components, ni CSS-in-JS.
- **Imágenes:** `next/image` siempre, nunca `<img>` plano — Next.js optimiza formato y lazy-load automáticamente.

## Estructura de proyecto esperada

\`\`\`
/app
  /page.js              → home
  /portfolio/page.js    → galería completa
  /portfolio/[slug]/page.js → ficha de proyecto individual
  /about/page.js
  /layout.js            → layout raíz + import de globals.css
  /globals.css          → tokens de marca (variables CSS) + reset + estilos base
/components
  Header/
    Header.jsx
    Header.module.css
  Footer/
  GalleryGrid/
  VideoEmbed/
  WhatsAppButton/
/sections
  Hero/
  Skills/
  Gallery/
  About/
/public
  /images   → fotos optimizadas (ver convención de nombres abajo)
  /video    → clips/reels comprimidos para web
\`\`\`

## Tokens de marca en CSS (globals.css)

\`\`\`css
:root {
  --color-yellow: #FFD600;
  --color-black: #121212;
  --color-white: #FFFFFF;
  --color-surface-1: #1a1a1a;
  --color-surface-2: #2a2a2a;
}
\`\`\`

Cada componente usa estas variables vía \`var(--color-yellow)\`, nunca hex hardcodeado repetido en cada módulo.

## Convención de nombres de assets

\`{categoria}-{slug-descriptivo}-{numero}.{ext}\`

Categorías válidas: \`bodas\`, \`retratos\`, \`naturaleza\`, \`comercial\`, \`bts\` (behind the scenes).

Ejemplo: \`bodas-valle-nevado-03.jpg\`, \`comercial-cerveceria-austral-01.mp4\`

## Secciones estándar del portafolio

1. **Hero** — una pieza fuerte (foto o video en loop) que defina el tono, no un carrusel genérico.
2. **Skills** — ver \`portfolio-content\` skill para estructura de contenido.
3. **Galería / Portfolio** — filtrable por categoría (bodas, retratos, naturaleza, comercial).
4. **Sobre Ngürü** — quién está detrás, enfoque de trabajo.
5. **Contacto** — botón/enlace directo a WhatsApp (ver \`client-inquiry\`), no formulario.

## Reglas técnicas

- Usar \`next/image\` con \`sizes\` correcto por breakpoint — nunca una sola imagen gigante servida igual en mobile y desktop.
- Video: comprimir para web (H.264/H.265), poster image mientras carga, nunca autoplay con sonido.
- CSS Modules por componente — nombres de clase locales, evitar CSS global salvo en \`globals.css\` para tokens/reset.
- Mobile-first: escribir el CSS base para mobile y usar \`@media (min-width: ...)\` para escalar hacia arriba, no al revés.
- Foco de teclado visible en todos los elementos interactivos (accesibilidad no negociable).
- Respetar \`prefers-reduced-motion\` en cualquier animación de scroll o hover.

## Antes de terminar cualquier página

- [ ] ¿Se usó \`next/image\` en vez de \`<img>\`?
- [ ] ¿El CSS usa las variables de marca en vez de hex sueltos?
- [ ] ¿Se probó en mobile (viewport ~375px)?
- [ ] ¿Las imágenes tienen \`alt\` descriptivo (no "imagen1.jpg")?
- [ ] ¿El focus de teclado es visible?
- [ ] ¿Cumple \`brand-identity\`?
