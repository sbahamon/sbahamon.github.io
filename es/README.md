# Spanish Language Pages (Páginas en Español)

This directory contains Spanish translations of all site content.

## Current Status

- ✅ `/es/index.html` - Spanish homepage (COMPLETE)
- 🔲 `/es/about.html` - About page (TO BE CREATED - follow English version pattern)
- 🔲 `/es/now.html` - Now page (TO BE CREATED - follow English version pattern)
- 🔲 `/es/projects.html` - Projects page (TO BE CREATED - follow English version pattern)
- 🔲 `/es/posts/index.html` - Blog listing (TO BE CREATED - follow English version pattern)
- 🔲 `/es/posts/*.html` - Individual blog posts (TO BE CREATED - translate from English versions)

## Creating Spanish Pages

To create additional Spanish pages:

1. Copy the corresponding English page
2. Update `<html lang="en">` to `<html lang="es">`
3. Update the `<link rel="alternate" hreflang="...">` to point to the English version
4. Translate all content while maintaining HTML structure
5. Update navigation links to point to `/es/` URLs
6. Update the language toggle to point back to English version

## Translation Guidelines

- Maintain technical accuracy - cybersecurity terms should be translated consistently
- Keep the warm, professional tone of the English versions
- Preserve all HTML structure, classes, and IDs
- Update meta descriptions and titles in Spanish
- Ensure all aria-labels are translated for accessibility

## Sample Translation Patterns

**Navigation:**
- About → Sobre Mí
- Now → Ahora
- Posts → Publicaciones
- Projects → Proyectos

**Common Phrases:**
- "Read more" → "Leer más"
- "min read" → "min de lectura"
- "Posted on" → "Publicado el"

**Theme Toggle:**
- "Miami Summer" → "Verano de Miami"
- "Chicago Winter" → "Invierno de Chicago"
