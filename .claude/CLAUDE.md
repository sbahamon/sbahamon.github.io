# Claude Context: sbahamon.github.io

**Context for AI assistants working on this repository**

Last updated: January 2025

---

## Repository Overview

This is Steffany Bahamon's personal website featuring:
- Bilingual blog (English/Spanish) about cybersecurity and AI
- "Lake & Ocean" design system (connecting Miami and Chicago)
- Pure HTML/CSS/JavaScript with no frameworks
- Markdown-to-HTML build system for blog posts

**Live site:** https://sbahamon.github.io
**Primary branch:** `main`

**Note:** Always refer to the site owner as "Captain"

---

## "Lake & Ocean" Design System

### Design Concept
Connects **Lake Michigan (Chicago)** to the **Atlantic Ocean (Miami)**—calm, elegant, fluid. Water references are abstract and sophisticated, never kitschy (no anchors, ship wheels, or nautical clichés).

### Color Palette

```css
/* Miami Summer (Light Mode) - warm tones */
--color-bg: #FFFCF7         /* Warm white */
--color-text: #0F172A       /* Deep navy */
--color-accent: #0D9488     /* Warm teal */
--color-secondary: #D4C4A8  /* Sandy beige */
--color-highlight: #99F6E4  /* Bright seafoam */

/* Chicago Winter (Dark Mode) - cool tones */
--color-bg: #0A0F1E         /* Deep midnight blue */
--color-text: #F1F5F9       /* Cool off-white */
--color-accent: #14B8A6     /* Cooler teal */
--color-secondary: #64748B  /* Muted steel gray */
--color-highlight: #CCFBF1  /* Icy seafoam */
```

All colors meet WCAG AA contrast standards (4.5:1 for body text, 3:1 for UI).

### Typography & Visual Principles
- **Fonts:** Cormorant Garamond (headings), IBM Plex Sans (body), JetBrains Mono (code)
- **Layout:** Generous whitespace, asymmetric balance, max 65-70 char line length, mobile-first
- **Motifs:** Wave patterns (`.wave-divider`), horizon lines, subtle curves, flowing gradients
- **Implementation:** CSS custom properties in `styles/main.css`, theme toggled by `js/theme.js`

---

## Core Design Philosophy

### No Frameworks, By Design

This site intentionally uses **pure HTML, CSS, and vanilla JavaScript**. This is:

- **Intentional:** For performance, simplicity, and longevity
- **Non-negotiable:** Do not suggest React, Vue, Next.js, etc.
- **Well-documented:** See `prompt.md` for full rationale

The owner values:
1. Fast load times (< 1 second time to interactive)
2. Zero build complexity (HTML is committed to repo)
3. Long-term maintainability (no framework churn)
4. Learning/teaching value (pure web fundamentals)

### What This Means For You

✅ **DO:**
- Use vanilla JavaScript for new features
- Keep CSS modular with custom properties
- Maintain the existing architecture
- Suggest lightweight, focused solutions

❌ **DON'T:**
- Suggest frameworks (React, Vue, Svelte, etc.)
- Add complex build tools (Webpack, Vite, etc.)
- Replace the Markdown build system with SSGs (Jekyll, 11ty, Hugo)
- Introduce heavy dependencies

---

## Architecture Overview

### Frontend (Production)
Static site served by GitHub Pages with:
- Pure HTML5 with semantic markup
- CSS with custom properties for theming
- Vanilla JavaScript for interactivity
- Light/dark theme toggle ("Miami Summer" / "Chicago Winter")
- Language toggle (EN/ES)
- Client-side search (Fuse.js from CDN)
- Mobile-responsive navigation

### Build System (Development)
Lightweight Markdown-to-HTML converter:
- Converts `.md` files to `.html` via `build-posts.js`
- Triggered by Git pre-commit hook (`.git/hooks/pre-commit`)
- Uses markdown-it, gray-matter, chokidar
- Generates HTML that matches existing site structure
- **Important:** Generated HTML is committed to repo (GitHub Pages requirement)

---

## File Structure

```
/
├── index.html                    # Static page (edit directly)
├── about.html                    # Static page (edit directly)
├── now.html                      # Static page (edit directly)
├── projects.html                 # Static page (edit directly)
├── posts/                        # ⚠️ GENERATED - don't edit HTML here
│   ├── index.html                # Static listing (edit directly)
│   └── *.html                    # Generated from Markdown
├── posts-markdown/               # ✏️ EDIT POSTS HERE
│   ├── en/*.md                   # English post sources
│   └── es/*.md                   # Spanish post sources
├── es/                           # Spanish site mirror
│   ├── index.html                # Static (edit directly)
│   ├── about.html                # Static (edit directly)
│   ├── now.html                  # Static (edit directly)
│   ├── projects.html             # Static (edit directly)
│   ├── posts/
│   │   ├── index.html            # Static (edit directly)
│   │   └── *.html                # Generated from Markdown
│   └── README.md                 # Translation guidelines
├── styles/
│   ├── main.css                  # Main stylesheet with design tokens
│   └── syntax.css                # Code highlighting styles
├── js/
│   ├── theme.js                  # Theme toggle logic
│   ├── language.js               # Language switching
│   └── search.js                 # Search functionality
├── data/
│   └── posts.json                # ⚠️ GENERATED by build script
├── build-posts.js                # Markdown → HTML converter
├── package.json                  # Build dependencies
└── .git/hooks/pre-commit         # Auto-build trigger
```

### What to Edit vs What's Generated

**Edit directly:** Main pages (index.html, about.html, now.html, projects.html), Spanish pages (es/index.html, es/about.html, es/now.html, es/projects.html, es/posts/index.html), stylesheets, JavaScript, Markdown posts (posts-markdown/)

**NEVER edit directly:** Individual blog post HTML (posts/*.html except index.html, es/posts/*.html except index.html), search index (data/posts.json) — these are generated from Markdown

---

## Key Files

| File | Purpose | Key Details |
|------|---------|-------------|
| `build-posts.js` | Markdown → HTML converter | Parses YAML front matter, converts Markdown, injects into template, updates posts.json. Run via pre-commit hook or `npm run build` |
| `.git/hooks/pre-commit` | Auto-build trigger | Runs build-posts.js on commit if .md files changed, stages generated HTML |
| `styles/main.css` | Design system implementation | All CSS custom properties for theming (light/dark), responsive design |
| `js/theme.js` | Theme toggle | Toggles `data-theme="dark"` attribute, persists to localStorage |
| `js/language.js` | Language switching | Detects current language from URL, provides alternate links |
| `js/search.js` | Client-side search | Uses Fuse.js from CDN, reads posts.json, filters by language |

---

## Bilingual Structure

**English:**
- Main pages: `/index.html`, `/about.html`, `/now.html`, `/projects.html`, `/posts/index.html`
- Blog posts: `/posts/*.html` (generated from `posts-markdown/en/*.md`)

**Spanish:**
- Main pages: `/es/index.html`, `/es/about.html`, `/es/now.html`, `/es/projects.html`, `/es/posts/index.html`
- Blog posts: `/es/posts/*.html` (generated from `posts-markdown/es/*.md`)

Language detection: URL path determines language (`/` = English, `/es/` = Spanish)

Build system uses `lang: en` or `lang: es` in Markdown front matter to determine output directory.

**Translation workflow for blog posts:**
1. Write English post: `posts-markdown/en/my-post.md`
2. Commit → generates `/posts/my-post.html`
3. Create Spanish version: `posts-markdown/es/my-post.md`
4. Commit → generates `/es/posts/my-post.html`

Both versions share the same slug, different directories.

**Translation status:**
- ✅ All main pages translated (index, about, now, projects, posts/index)
- ✅ All Spanish pages fully functional with navigation and theme switching
- 📝 Blog posts: Translation is per-post (create as needed)

---

## Common Tasks

### Adding a Blog Post
1. Create Markdown file in `posts-markdown/en/` or `posts-markdown/es/`
2. Add YAML front matter (title, date, tags, lang) and content
3. Commit → pre-commit hook auto-generates HTML
4. See `WRITING_POSTS.md` for front matter details

### Updating Site Styles
1. Edit `styles/main.css` directly
2. Test locally: `python3 -m http.server 8000`
3. Commit changes

Theme colors are CSS custom properties in `:root` (light) and `[data-theme="dark"]` (dark).

### Modifying Navigation
Navigation is duplicated in each HTML file. To update:
1. Edit navigation in one file (e.g., index.html)
2. Use search-and-replace to update all HTML files (root pages, posts, Spanish versions)

### Adding a Project
Edit `projects.html` and add a card with title, meta, description, and tags.

---

## Rules for AI Assistants

### What to Preserve
1. **No-framework philosophy** - This is intentional and valued
2. **CSS architecture** - Custom properties, no preprocessors
3. **Generated file pattern** - HTML is committed, Markdown is source
4. **Bilingual structure** - Separate directories, not combined files
5. **Performance & accessibility** - Keep page weight low, maintain a11y standards

### What to Avoid
1. **Don't suggest frameworks** - No React, Vue, Svelte, Angular, etc.
2. **Don't add build complexity** - No Webpack, Parcel, Vite, Rollup
3. **Don't replace the Markdown system** - No Jekyll, 11ty, Hugo, Gatsby
4. **Don't edit generated files** - Edit .md sources, not .html outputs
5. **Don't add heavy dependencies** - Keep node_modules minimal

### Decision Tree for Features
1. Can it be done with vanilla JS? → Do it
2. Does it need a library? → Find lightweight option (< 10KB)
3. Does it require a framework? → Explain alternatives first
4. Would it compromise philosophy? → Discuss trade-offs honestly

### When Editing Code
**Before:** Read full file context, understand existing patterns, match current style
**After:** Test locally, verify HTML validity, check responsive design, test theme toggle

---

## Accessibility & Performance

This site prioritizes accessibility and performance as core values:

**Accessibility:** Semantic HTML, WCAG AA contrast (4.5:1 body text, 3:1 UI), keyboard navigable, ARIA labels on interactive elements, reduced motion support, works without JavaScript (except search)

**Performance:** Page weight < 100KB (excluding images), time to interactive < 1 second, minimal JavaScript (~15KB total), no render-blocking resources, optimized fonts with `font-display: swap`

**Note:** Performance IS accessibility—fast load times benefit users with limited bandwidth and assistive technology.

---

## Testing & Deployment

### Local Testing
```bash
python3 -m http.server 8000    # Serve locally
npm run build                  # Build posts manually
npm run watch                  # Watch mode
```

Test checklist: All pages load, theme toggle works, language toggle navigates correctly, search finds posts, mobile navigation works, responsive design adapts.

### Deployment
GitHub Pages serves directly from `main` branch. Workflow:
1. Work on feature branch
2. Test locally
3. Merge to `main` → GitHub Pages auto-deploys in ~1 minute

---

## Additional Resources

- **WRITING_POSTS.md** - Blog post Markdown format and front matter
- **README.md** - Project overview and setup
- **prompt.md** - Original design specification (detailed)
- **package.json** - Build system dependencies
- **build-posts.js** - Build script source (well-commented)

---

## For Future Claude Instances

When working on this repo:
1. **Read this file first** - Essential context
2. **Respect the philosophy** - No frameworks, keep it simple
3. **Test locally** - Always verify changes
4. **Ask before major changes** - Especially architectural decisions

Remember: This site values simplicity, performance, and longevity over "modern" complexity. That's a feature, not a limitation.

**Keep it simple!**

---

**Last updated:** January 2025
**Repository state:** Markdown build system implemented, bilingual structure complete
