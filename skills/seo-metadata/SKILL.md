---
name: seo-metadata
description: Usar esta skill al publicar o modificar páginas del sitio Ngürü para asegurar metadata correcta (title, description, Open Graph, alt text, sitemap). Trigger en cualquier tarea de "publicar página", "SEO", "compartir en redes", "og-image".
---

# SEO & Metadata — Ngürü

## Por página

Cada página necesita:
- `<title>` único, formato: `{Página} — Ngürü Fotografía & Film`
- `meta description` de 120-155 caracteres, específica al contenido de esa página (no repetir la misma en todo el sitio)
- Open Graph: `og:title`, `og:description`, `og:image` (usar una foto representativa, no el logo solo)
- `alt` descriptivo en cada imagen — describir la escena real, útil también para SEO de imágenes

## Home / Portfolio

- Title: `Ngürü — Fotografía y Filmación`
- Description debe mencionar el rango de trabajo (bodas, retratos, naturaleza, comercial) y la ubicación si Ngürü quiere captar búsquedas locales.

## Páginas de proyecto individual

- Title: `{Nombre del proyecto} — Ngürü`
- `og:image`: la foto hero de ese proyecto específico, no una genérica.

## Técnico

- Generar/actualizar `sitemap.xml` cuando se agreguen páginas nuevas.
- `robots.txt` permitiendo indexación completa salvo que el usuario pida lo contrario.
- Comprimir imágenes antes de usarlas como `og:image` (bajo 1MB, ratio 1.91:1 recomendado por redes sociales).

## Checklist antes de publicar

- [ ] ¿Title y description son únicos para esta página?
- [ ] ¿Hay `og:image` específica (no genérica)?
- [ ] ¿Todas las imágenes nuevas tienen `alt`?
- [ ] ¿El sitemap se actualizó si se agregó una página?
