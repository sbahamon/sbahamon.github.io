# Writing Blog Posts

Quick reference for creating blog posts in Markdown.

## Quick Start

1. Create Markdown file: `posts-markdown/en/my-post.md`
2. Add front matter (see below) and content
3. Commit → Pre-commit hook auto-generates HTML at `/posts/my-post.html`

## Front Matter Reference

All available fields with descriptions:

```yaml
---
# REQUIRED FIELDS
title: "Post Title"              # Appears in <h1>, listings, search
date: 2025-01-20                 # YYYY-MM-DD format
tags: ["Tag1", "Tag2", "Tag3"]   # Array of strings, used for search
excerpt: "Brief description..."  # Shows in listings and search results
readingTime: "8 min read"        # Manually estimated reading time
lang: en                         # "en" or "es"

# OPTIONAL FIELDS
prevPost: "/posts/prev.html"     # Link to previous post (or null)
nextPost: "/posts/next.html"     # Link to next post (or null)
---
```

### Field Details

- **title:** Title case, < 60 chars
- **date:** YYYY-MM-DD format
- **tags:** 2-5 consistent tags per post
- **excerpt:** 1-2 sentences for search/listings
- **readingTime:** Estimate ~200 words/min
- **lang:** "en" or "es" (determines output directory)
- **prevPost/nextPost:** Full URLs or `null` for navigation

## Markdown Syntax

Standard Markdown supported: headings (`##`), **bold**, *italic*, `inline code`, lists, [links](url), blockquotes (`>`), horizontal rules (`---`)

## Code Blocks

Use triple backticks with language identifier:

````markdown
```python
def hello():
    print("Hello!")
```
````

**Supported languages:** python, bash/sh, javascript/js, html, css, sql, yaml, json, plaintext

## Images

Add to `/images/` directory, then reference: `![Alt text](/images/file.png)`

Always include alt text. Optimize < 200KB, prefer WebP format.

## Bilingual Posts (English & Spanish)

**Note:** All main pages (index, about, now, projects, posts/index) are already fully translated into Spanish and located in the `/es/` directory. This section covers translating individual blog posts.

### Creating Spanish Versions

1. **Create Spanish Markdown file:**
   ```bash
   touch posts-markdown/es/my-post-slug.md
   ```

2. **Translate content and update front matter:**
   ```markdown
   ---
   title: "Tu Título en Español"
   date: 2025-01-20
   tags: ["Etiqueta1", "Etiqueta2"]
   excerpt: "Descripción breve en español..."
   readingTime: "8 min de lectura"
   lang: es
   prevPost: "/es/posts/anterior.html"
   nextPost: "/es/posts/siguiente.html"
   ---

   Tu contenido en español aquí...
   ```

3. **Commit:**
   ```bash
   git add posts-markdown/es/my-post-slug.md
   git commit -m "Add Spanish translation"
   ```

### URL Structure

- English: `/posts/my-post-slug.html`
- Spanish: `/es/posts/my-post-slug.html`

The language toggle button automatically links to the alternate version.

## Navigation Links

Set in front matter:
```yaml
prevPost: "/posts/prev-slug.html"
nextPost: "/posts/next-slug.html"
```

Use `null` for first/last posts. Spanish posts should link to Spanish posts.

## Example Post

````markdown
---
title: "Securing APIs with Python"
date: 2025-02-01
tags: ["Python", "Security"]
excerpt: "Build secure REST APIs with FastAPI and JWT authentication."
readingTime: "8 min read"
lang: en
prevPost: null
nextPost: null
---

APIs are critical infrastructure. Here's how to secure them properly.

## Setup

```bash
pip install fastapi uvicorn python-jose
```

```python
from fastapi import FastAPI
app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello!"}
```

## Key Takeaways

- Validate all input server-side
- Use HTTPS in production
- Never hardcode secrets
````

## Manual Build Commands

If you need to build without committing:

```bash
# Build all posts once
npm run build

# Watch mode - auto-rebuild on save
npm run watch

# Build script directly
node build-posts.js
```

## Troubleshooting

**Build fails on commit:**
- Check YAML syntax (colons, quotes, arrays)
- Verify required fields and date format (YYYY-MM-DD)
- Debug: `node build-posts.js`

**HTML formatting wrong:**
- Close code blocks with triple backticks
- Image paths start with `/`
- Space after `#` in headings

**Search not finding post:**
- Verify `data/posts.json` updated
- Check tags array syntax: `["Tag1", "Tag2"]`
- Clear browser cache

---

**Last updated:** January 2025
