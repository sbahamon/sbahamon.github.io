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
**Current feature branch:** `feature/lake-ocean-design`

## "Lake & Ocean" Design System

### Design Concept

The design connects **Lake Michigan (Chicago)** to the **Atlantic Ocean (Miami)**—two bodies of water that shaped Steffany's journey. The aesthetic is:

- **Calm and elegant** - Like still water, not busy
- **Fluid** - Gentle curves, flowing transitions
- **Subtly layered** - Depth without complexity
- **Warm in light mode** - Miami summer energy
- **Cool in dark mode** - Chicago winter contemplation
- **Grounded** - Professional and trustworthy

**Key principle:** Water references are abstract and elegant, never kitschy. No anchors, ship wheels, or overtly nautical elements.

### Color Palette

**Miami Summer (Light Mode):**

```css
--color-bg: #FFFCF7         /* Warm white with hint of sand */
--color-text: #0F172A       /* Deep navy/midnight */
--color-accent: #0D9488     /* Warm teal (tropical waters) */
--color-secondary: #D4C4A8  /* Sandy beige */
--color-highlight: #99F6E4  /* Bright seafoam */
```

Warm undertones throughout evoke Miami sunshine.

**Chicago Winter (Dark Mode):**

```css
--color-bg: #0A0F1E         /* Deep midnight blue (Lake Michigan at night) */
--color-text: #F1F5F9       /* Cool off-white */
--color-accent: #14B8A6     /* Cooler teal (winter lake water) */
--color-secondary: #64748B  /* Muted steel gray */
--color-highlight: #CCFBF1  /* Icy seafoam */
```

Cool undertones throughout evoke Chicago winter.

**Accessibility:** All color combinations meet WCAG AA (4.5:1 for body text, 3:1 for large text/UI).

### Typography

**Font choices:**

- **Headings:** Cormorant Garamond (refined serif, fluid, slightly editorial)
- **Body:** IBM Plex Sans (clean, highly readable sans-serif)
- **Code:** JetBrains Mono (monospace for code blocks)

**Loading strategy:**

- Google Fonts with `font-display: swap`
- System font stack fallbacks
- Limited font weights for performance

### Visual Motifs

**Wave patterns:** Gentle, layered wave shapes as section dividers (`.wave-divider`)

**Horizon lines:** Simple horizontal lines evoking water meeting sky

**Flowing curves:** Subtle curved elements in containers, buttons (`border-radius: var(--radius-lg)`)

**Water texture:** Very subtle gradients suggesting light on water (used sparingly)

**What to avoid:** Anchors, ship wheels, fish, or anything overtly "nautical themed."

### Layout Principles

- **Generous whitespace** - Content-focused, minimal distractions
- **Asymmetric balance** - Not rigidly centered
- **Optimal line length** - Max 65-70 characters for readability (`max-width: var(--content-max-width)`)
- **Mobile-first responsive** - Works beautifully on all devices
- **Fluid typography** - Uses `clamp()` for responsive sizing

### Design Implementation

All design tokens are CSS custom properties in `styles/main.css`:

```css
:root {
  /* Colors */
  --color-bg: #FFFCF7;
  --color-text: #0F172A;
  /* ... */

  /* Typography */
  --font-heading: 'Cormorant Garamond', Georgia, serif;
  --font-body: 'IBM Plex Sans', -apple-system, sans-serif;

  /* Spacing */
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2.5rem;
  /* ... */
}

[data-theme="dark"] {
  /* Dark mode overrides */
}
```

Theme switching handled by `js/theme.js`, which toggles `data-theme` attribute.

## Core Design Philosophy

### No Frameworks, By Design

This site intentionally uses **pure HTML, CSS, and vanilla JavaScript**. This decision is:

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

## Architecture Overview

### Frontend (Production)

**Static site served by GitHub Pages:**
- Pure HTML5 with semantic markup
- CSS with custom properties for theming
- Vanilla JavaScript for interactivity
- External CDN resources (fonts, syntax highlighting)

**Key features:**
- Light/dark theme toggle ("Miami Summer" / "Chicago Winter")
- Language toggle (EN/ES)
- Client-side search (Fuse.js from CDN)
- Mobile-responsive navigation

### Build System (Development)

**Lightweight Markdown-to-HTML converter:**
- Converts `.md` files to `.html` via `build-posts.js`
- Triggered by Git pre-commit hook
- Uses markdown-it, gray-matter, chokidar
- Generates HTML that matches existing site structure

**Important:** Generated HTML is committed to repo (GitHub Pages requirement).

## File Structure & What's Generated

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
│   └── posts/*.html              # Generated from Markdown
├── styles/
│   ├── main.css                  # Main stylesheet (edit directly)
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

### What to Edit Directly

- Main pages (index.html, about.html, now.html, projects.html)
- Spanish pages (es/index.html, es/about.html, etc.)
- Stylesheets (styles/*.css)
- JavaScript (js/*.js)
- Build script (build-posts.js)

### What NOT to Edit Directly

- Individual post HTML (posts/*.html, es/posts/*.html)
- Search index (data/posts.json)

**Why?** These are generated from Markdown. Edit the source .md files instead.

## Key Files Explained

### build-posts.js

**Purpose:** Converts Markdown posts to HTML

**How it works:**
1. Reads .md files from `posts-markdown/en/` and `posts-markdown/es/`
2. Parses YAML front matter (title, date, tags, etc.)
3. Converts Markdown to HTML using markdown-it
4. Injects content into template (header, nav, footer)
5. Writes to appropriate output directory
6. Updates data/posts.json for search

**When it runs:**
- Automatically on commit (via pre-commit hook)
- Manually: `npm run build`
- Watch mode: `npm run watch`

**Dependencies:**
- markdown-it: Markdown parser
- gray-matter: Front matter parser
- chokidar: File watcher (dev only)

### .git/hooks/pre-commit

**Purpose:** Auto-build posts on commit

**How it works:**
1. Checks if any .md files changed
2. Runs `node build-posts.js`
3. Stages generated HTML files
4. Continues with commit

**Fallback:** If Node.js not available, shows warning but allows commit.

### styles/main.css

**Purpose:** All site styling with "Lake & Ocean" design system

**Key features:**
- CSS custom properties for theming
- Light mode (--color-bg: #FFFCF7, warm tones)
- Dark mode ([data-theme="dark"], cool tones)
- Responsive design (mobile-first)
- Typography (Cormorant Garamond + IBM Plex Sans)

**Theme switching:** Controlled by js/theme.js, persisted to localStorage

### js/theme.js

**Purpose:** Light/dark mode toggle

**How it works:**
- Detects system preference (prefers-color-scheme)
- Loads saved preference from localStorage
- Toggles `data-theme="dark"` attribute on `<html>`
- Updates button text ("Miami Summer" / "Chicago Winter")

### js/language.js

**Purpose:** EN/ES language switching

**How it works:**
- Detects current language from URL path
- Provides links to alternate language version
- Saves language preference to localStorage
- Optional auto-redirect on homepage

### js/search.js

**Purpose:** Client-side blog post search

**How it works:**
- Loads Fuse.js from CDN
- Reads data/posts.json
- Filters by current language
- Provides fuzzy search on title, excerpt, tags
- Renders results dynamically

## Bilingual Structure

### Directory Layout

**English:**
- Main pages: `/index.html`, `/about.html`, etc.
- Posts: `/posts/*.html`
- Markdown sources: `posts-markdown/en/*.md`

**Spanish:**
- Main pages: `/es/index.html`, `/es/about.html`, etc.
- Posts: `/es/posts/*.html`
- Markdown sources: `posts-markdown/es/*.md`

### How Language Detection Works

1. URL path determines language:
   - `/` or `/posts/` → English
   - `/es/` or `/es/posts/` → Spanish

2. Language toggle links to alternate:
   - English page → `/es/` version
   - Spanish page → `/` (English) version

3. Build system uses `lang:` field in front matter:
   ```yaml
   lang: en  # outputs to /posts/
   lang: es  # outputs to /es/posts/
   ```

### Translation Workflow

1. Write English post: `posts-markdown/en/my-post.md`
2. Commit → generates `/posts/my-post.html`
3. Create Spanish version: `posts-markdown/es/my-post.md`
4. Commit → generates `/es/posts/my-post.html`

Both versions share the same slug, different directories.

## Common Tasks

### Adding a Blog Post

1. Create Markdown file:
   ```bash
   touch posts-markdown/en/my-post-slug.md
   ```

2. Add front matter and content (see WRITING_POSTS.md)

3. Commit:
   ```bash
   git add posts-markdown/en/my-post-slug.md
   git commit -m "Add post about X"
   ```

4. Pre-commit hook auto-generates HTML

### Updating Site Styles

1. Edit `styles/main.css` directly
2. Test locally (python3 -m http.server 8000)
3. Commit changes

**Theme colors:** CSS custom properties in `:root` and `[data-theme="dark"]`

### Modifying Navigation

**Challenge:** Navigation is duplicated in each HTML file

**Approach:**
1. Edit navigation in one file (e.g., index.html)
2. Use search-and-replace to update all other HTML files
3. Files to update:
   - All root pages (index.html, about.html, etc.)
   - All post HTML (posts/*.html)
   - All Spanish versions (es/*.html, es/posts/*.html)

**Better approach (future improvement):**
- Could use JavaScript to inject nav dynamically
- Or use a simple templating system
- Currently avoided for simplicity

### Adding a Project

Edit `projects.html` and add a card:

```html
<article class="card">
  <h3>Project Name</h3>
  <p class="meta">2025 | Category</p>
  <p>Description...</p>
  <div class="tags">
    <span class="tag">Tech1</span>
    <span class="tag">Tech2</span>
  </div>
</article>
```

### Translating a Page to Spanish

1. Copy English HTML to `/es/` directory
2. Change `<html lang="en">` to `<html lang="es">`
3. Update `<link rel="alternate">` to point to English version
4. Translate all content
5. Update navigation links to `/es/` URLs
6. Update meta descriptions and titles

## Important Rules for AI Assistants

### What to Preserve

1. **The no-framework philosophy** - This is intentional and valued
2. **CSS architecture** - Custom properties, no preprocessors
3. **Generated file pattern** - HTML is committed, Markdown is source
4. **Bilingual structure** - Separate directories, not combined files
5. **Performance** - Keep page weight < 100KB, load time < 1s

### What to Avoid

1. **Don't suggest frameworks** - No React, Vue, Svelte, Angular, etc.
2. **Don't add build complexity** - No Webpack, Parcel, Vite, Rollup
3. **Don't replace the Markdown system** - No Jekyll, 11ty, Hugo, Gatsby
4. **Don't edit generated files** - Edit .md sources, not .html outputs
5. **Don't add heavy dependencies** - Keep node_modules minimal

### When User Asks for Features

**Decision tree:**

1. Can it be done with vanilla JS? → Do it
2. Does it need a library? → Find lightweight option (< 10KB)
3. Does it require a framework? → Explain alternatives first
4. Would it compromise philosophy? → Discuss trade-offs honestly

**Example responses:**

❌ "We should use React for this dynamic feature"
✅ "Here's how to do this with vanilla JavaScript and Web Components"

❌ "Let's use Sass for better CSS"
✅ "CSS custom properties can achieve this, here's how"

❌ "Jekyll would make this easier"
✅ "The current build system is simpler; here's how to extend it"

### When Editing Code

**Before making changes:**
1. Read the full file context
2. Understand existing patterns
3. Match the current style (indentation, naming, comments)
4. Preserve accessibility features
5. Maintain bilingual structure

**After making changes:**
1. Test locally if possible
2. Verify HTML is valid
3. Check responsive design
4. Test theme toggle
5. Verify search still works

## Testing Locally

```bash
# Serve the site
python3 -m http.server 8000

# Visit in browser
open http://localhost:8000

# Test Spanish version
open http://localhost:8000/es/

# Watch mode for posts
npm run watch
```

### What to Test

- [ ] All pages load correctly
- [ ] Theme toggle works (light/dark)
- [ ] Language toggle navigates correctly
- [ ] Search finds posts (on /posts/index.html)
- [ ] Code blocks have syntax highlighting
- [ ] Mobile navigation (hamburger menu)
- [ ] Responsive design (resize browser)
- [ ] Links work (no 404s)

## Deployment

### GitHub Pages Setup

- **Repository:** sbahamon/sbahamon.github.io
- **Branch:** `main` (GitHub Pages serves from this branch)
- **Custom domain:** Configured via CNAME file (if applicable)
- **Build:** None required (static files served directly)

### Deployment Workflow

1. Work on feature branch (e.g., `feature/lake-ocean-design`)
2. Test locally
3. Commit changes
4. Merge to `main`:
   ```bash
   git checkout main
   git merge feature/lake-ocean-design
   git push origin main
   ```
5. GitHub Pages auto-deploys in ~1 minute

### What Gets Deployed

Everything in the repo except:
- `node_modules/` (gitignored)
- `.git/` (not served)
- `package.json`, `build-posts.js` (not served, but harmless)

HTML, CSS, JS, and images are served directly.

## Performance Characteristics

**Current metrics (goals):**
- Page weight: < 100KB (excluding images)
- Time to interactive: < 1 second
- Lighthouse score: 95+
- No render-blocking resources
- Minimal JavaScript: ~15KB total

**Why it's fast:**
- No framework overhead
- Minimal JavaScript
- CSS loaded in <head> (small file)
- Fonts optimized with `font-display: swap`
- Images lazy-loaded where appropriate

## Accessibility Features

- Semantic HTML (nav, main, article, aside)
- Proper heading hierarchy (h1 → h2 → h3, no skips)
- Alt text on all images
- ARIA labels on interactive elements
- Skip-to-content link
- Keyboard navigable
- Sufficient color contrast (both themes)
- Reduced motion support (prefers-reduced-motion)
- Works without JavaScript (except search)

## Future Improvements (Ideas, Not TODOs)

**If user asks for enhancements, consider:**

1. **RSS feed:** Generate from posts.json
2. **Dynamic nav injection:** Load header/footer via JS to avoid duplication
3. **Image optimization:** Automated WebP conversion
4. **Post templates:** Helper script to generate Markdown boilerplate
5. **Link checker:** Pre-commit hook to validate internal links
6. **Analytics:** Privacy-respecting analytics (Plausible, Fathom)

**Maintain philosophy:**
- Keep it simple
- Avoid frameworks
- Minimize dependencies
- Preserve performance

## Useful Commands Reference

```bash
# Development
npm run build          # Build all posts
npm run watch          # Watch mode
python3 -m http.server # Serve locally

# Git workflow
git status             # Check changes
git add .              # Stage all
git commit -m "msg"    # Commit (triggers build)
git push               # Deploy to GitHub

# Debugging
node build-posts.js    # Test build script
cat data/posts.json    # Check generated index
ls -la posts/          # See generated HTML

# Testing
open http://localhost:8000              # Test locally
open http://localhost:8000/es/          # Test Spanish
curl -I http://localhost:8000           # Check headers
```

## When Things Go Wrong

### Build fails on commit

1. Check syntax in .md file (front matter, code blocks)
2. Run manually to see error: `node build-posts.js`
3. Fix issue and re-commit

### Search not working

1. Check posts.json was generated
2. Verify Fuse.js loads from CDN (check browser console)
3. Test with browser devtools open

### Styles not applying

1. Check CSS file loaded (view source)
2. Verify theme attribute on <html> element
3. Clear browser cache
4. Check for CSS syntax errors

### Language toggle broken

1. Verify alternate language files exist
2. Check hreflang links in <head>
3. Test language.js loaded correctly

## Additional Resources

- **WRITING_POSTS.md** - How to write blog posts in Markdown
- **README.md** - Project overview and setup instructions
- **prompt.md** - Original design specification (very detailed!)
- **package.json** - Build system dependencies
- **build-posts.js** - Build script source code (well-commented)

---

## For Future Claude Instances

When you work on this repo:

1. **Read this file first** - It has context you need
2. **Respect the philosophy** - No frameworks, keep it simple
3. **Test locally** - Always verify changes work
4. **Ask before major changes** - Especially architectural decisions
5. **Document your changes** - Update this file if you add features

Remember: This site values simplicity, performance, and longevity over "modern" complexity. That's a feature, not a limitation.

**Good luck, and keep it simple!**

---

**Last updated:** January 2025
**Claude version:** Sonnet 4.5
**Repository state:** Markdown build system implemented, bilingual structure complete
