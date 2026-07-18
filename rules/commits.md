---
name: commits
description: Reglas obligatorias de commits para el repositorio del portafolio Ngürü. Todo agente que modifique archivos del proyecto debe seguir esto al confirmar cambios.
---

# Reglas de Commits — Ngürü

## Formato obligatorio

```
<tipo>(<alcance>): <descripción en minúscula, imperativo, sin punto final>
```

**Tipos permitidos:**

| Tipo | Uso |
|---|---|
| `feat` | Nueva funcionalidad o sección (ej. nueva galería, nuevo formulario) |
| `fix` | Corrección de un bug o comportamiento roto |
| `style` | Cambios visuales que no alteran funcionalidad (color, spacing, tipografía) |
| `content` | Cambios de copy, textos, categorías de proyectos |
| `seo` | Metadata, sitemap, alt text, Open Graph |
| `perf` | Optimización de imágenes/video, performance general |
| `a11y` | Accesibilidad (contraste, foco de teclado, alt text funcional) |
| `chore` | Configuración, dependencias, tareas de mantenimiento sin impacto visible |
| `docs` | Cambios en skills, agents o documentación del propio repo |

**Alcances sugeridos:** `hero`, `galeria`, `skills`, `contacto`, `about`, `seo`, `assets`, `global`

## Ejemplos válidos

```
feat(galeria): agregar filtro por categoría de servicio
fix(contacto): corregir validación de email en formulario
style(hero): ajustar contraste de overlay sobre video
content(skills): reescribir descripciones de servicios de bodas y retratos
seo(about): agregar meta description específica de la página
perf(assets): comprimir fotos de galería de naturaleza a webp
a11y(global): agregar foco visible en botones de navegación
```

## Reglas duras (no negociables)

1. **Un commit, un propósito.** No mezclar `feat` con `style` en el mismo commit. Si tocaste código y copy a la vez, sepáralos.
2. **Nunca commitear directo a `main`** si el proyecto tiene rama de producción — usar rama de trabajo (`feature/`, `fix/`, `content/`) y PR, salvo que el usuario indique lo contrario explícitamente.
3. **Nunca commitear assets sin optimizar** — toda imagen/video pasa por compresión (`perf`) antes o en el mismo commit en que se agrega, no después.
4. **Nunca commitear credenciales, API keys, ni datos de clientes** reales del formulario de contacto. Si algo así queda expuesto, es `fix` urgente + rotar credencial.
5. **El cuerpo del commit (opcional) explica el "por qué", no el "qué".** El "qué" ya está en el título. Ejemplo de cuerpo útil: "El overlay anterior no cumplía contraste AA sobre video claro."
6. **Cada commit debe dejar el sitio en estado funcional.** No commits a medio romper con la intención de "arreglar después".
7. **Referenciar la skill/agent relevante cuando aplique**, como pie de commit opcional:
   ```
   style(hero): ajustar tamaño de tipografía en mobile

   Ref: site-builder, brand-identity
   ```

## Antes de cada commit (checklist)

- [ ] ¿El tipo y alcance son correctos?
- [ ] ¿El commit tiene un solo propósito?
- [ ] ¿Pasa el checklist de la skill correspondiente (brand-identity, site-builder, etc.)?
- [ ] ¿No hay assets sin comprimir ni credenciales expuestas?
