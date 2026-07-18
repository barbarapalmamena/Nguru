---
name: brand-identity
description: Usar esta skill siempre que se cree o modifique cualquier pieza visual (HTML, CSS, componentes, imágenes, banners) del portafolio de Ngürü, para garantizar consistencia de marca. Trigger en cualquier tarea de diseño, maquetación o generación de copy para el sitio.
---

# Brand Identity — Ngürü

Ngürü es un estudio de fotografía y filmación con un portafolio diverso (bodas, retratos, naturaleza, comercial). La marca debe sentirse editorial, cinematográfica y con carácter — nunca genérica ni tipo plantilla.

## Paleta de color (fuente de verdad)

| Uso | Token | Hex |
|---|---|---|
| Acento / CTA / detalles | `--nguru-yellow` | `#FFD600` |
| Fondo principal / texto sobre claro | `--nguru-black` | `#121212` |
| Fondo secundario / texto sobre oscuro | `--nguru-white` | `#FFFFFF` |

Reglas de uso:
- El amarillo `#FFD600` es un acento, no un fondo extenso. Úsalo en máx. 5-10% del viewport por sección: subrayados, botones, marcos de foto, cursores custom, hover states.
- El negro `#121212` (no `#000000` puro) es el fondo dominante por defecto — da profundidad tipo "sala de proyección".
- Nunca combinar amarillo sobre blanco puro para texto — falla contraste/legibilidad. Amarillo va sobre negro, o como borde/acento sobre blanco.
- No introducir colores nuevos sin justificar contra este archivo. Grises intermedios permitidos solo como variantes de `#121212` (ej. `#1a1a1a`, `#2a2a2a`) para jerarquía de superficies.

## Tipografía

- Display: una serif o sans-serif condensada con carácter editorial (ej. estilo revista de fotografía) — nunca la fuente por defecto del sistema.
- Body: sans-serif neutra de alta legibilidad.
- Mantener jerarquía clara: títulos grandes y confiados, cuerpo discreto. El texto nunca compite con la fotografía.

## Tono de copy

- Voz en primera persona del estudio, directa, sin relleno.
- Nombrar lo que la persona controla ("agenda una sesión", no "solicitud de booking").
- Evitar clichés de fotógrafo ("capturamos momentos únicos"). Ser específico sobre el trabajo real.

## Checklist antes de dar por terminada cualquier pieza visual

- [ ] ¿El amarillo se usa como acento, no como fondo masivo?
- [ ] ¿El negro de fondo es `#121212`, no `#000`?
- [ ] ¿La tipografía tiene personalidad, no es Arial/system-ui por defecto?
- [ ] ¿La foto/video es la protagonista, no el layout?
