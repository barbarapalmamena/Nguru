---
name: client-inquiry
description: Usar esta skill al construir o modificar el botón/flujo de contacto vía WhatsApp de Ngürü. Trigger en tareas de "contacto", "botón de WhatsApp", "cotización", "lead".
---

# Client Inquiry — Ngürü (contacto vía WhatsApp)

Ngürü no usa formulario tradicional — el contacto se hace directo por WhatsApp mediante un link/botón que abre un chat con mensaje precargado.

## Implementación estándar

Usar el esquema de URL de WhatsApp (`wa.me`) con mensaje precargado vía query param, codificado:

\`\`\`
https://wa.me/<numero_con_codigo_pais>?text=<mensaje_urlencoded>
\`\`\`

- El número va sin espacios, sin \`+\`, con código de país (ej. Chile: \`56912345678\`).
- El mensaje precargado debe ser editable por el usuario — nunca enviar automáticamente sin que la persona confirme en WhatsApp.

## Mensaje precargado sugerido (ajustar tono con brand-identity)

\`\`\`
Hola Ngürü! Quiero contactarte por un proyecto de [bodas / retratos / naturaleza / comercial].
\`\`\`

Si el botón vive dentro de una página de servicio específica (ej. la sección "Bodas"), precargar ese contexto en el mensaje en vez de dejarlo genérico — reduce fricción y contextualiza la conversación desde el primer mensaje.

## Componente WhatsAppButton (Next.js)

- Componente reutilizable en \`/components/WhatsAppButton/\`.
- Props sugeridos: \`context\` (categoría de servicio, opcional) para variar el mensaje precargado por sección.
- Debe abrir en nueva pestaña (\`target="_blank" rel="noopener noreferrer"\`).
- Visualmente: usar el amarillo de marca (\`var(--color-yellow)\`) como acento del botón — es el CTA principal del sitio, debe destacar sin saturar.
- Incluir icono de WhatsApp reconocible, no solo texto — ayuda a que la persona identifique el canal antes de tocar.

## Dónde debe aparecer el botón

- Header o footer (fijo/sticky opcional, evaluar con `site-builder` si no compite con el hero).
- Al final de cada ficha de proyecto individual.
- En la sección de "Contacto" como CTA principal, grande y sin ambigüedad.

## Checklist

- [ ] ¿El número de WhatsApp está bien formateado (código país, sin \`+\`, sin espacios)?
- [ ] ¿El mensaje precargado es editable, no un envío automático?
- [ ] ¿El botón usa el amarillo de marca como acento?
- [ ] ¿Abre en nueva pestaña?
- [ ] ¿Se probó el link real en un celular (no solo desktop)?
