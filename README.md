# Steffany Bahamon - Personal Website

A bilingual (EN/ES) personal website featuring the "Lake & Ocean" design system—connecting Miami and Chicago through water. Built with pure HTML, CSS, and vanilla JavaScript with no frameworks or build tools.

## Features

- **Bilingual Support:** Full English and Spanish versions
- **Dual Themes:** "Miami Summer" (light) and "Chicago Winter" (dark) modes
- **Blog with Search:** Client-side search powered by Fuse.js
- **Accessibility:** WCAG AA compliant with semantic HTML and ARIA labels
- **Performance:** Lighthouse score 95+, no frameworks, minimal JavaScript
- **Responsive Design:** Mobile-first, works beautifully on all devices

## Tech Stack

### Frontend
- **HTML5:** Semantic markup
- **CSS3:** Custom properties for theming, CSS Grid and Flexbox
- **Vanilla JavaScript:** Theme toggle, language switching, search
- **Fuse.js:** Lightweight fuzzy search library (loaded from CDN)
- **Highlight.js:** Syntax highlighting for code blocks (loaded from CDN)
- **Google Fonts:** Cormorant Garamond, IBM Plex Sans, JetBrains Mono

### Build System
- **Markdown-it:** Converts Markdown posts to HTML
- **Gray-matter:** Parses YAML front matter
- **Git pre-commit hook:** Auto-builds on commit
- **Chokidar:** Optional file watching for live development

## Project Structure

```
/
├── index.html, about.html, now.html, projects.html  # English pages
├── es/                           # Spanish site mirror
├── posts/                        # ⚠️ Generated HTML (don't edit)
├── posts-markdown/               # ✏️ Write posts here (en/ and es/)
├── styles/                       # CSS with Lake & Ocean design system
├── js/                           # Theme, language, search scripts
├── data/posts.json               # Auto-generated search index
└── build-posts.js                # Markdown → HTML converter
```

## Getting Started

### Local Development

1. **Clone and serve:**
   ```bash
   git clone https://github.com/sbahamon/sbahamon.github.io.git
   cd sbahamon.github.io
   python3 -m http.server 8000
   # Or use VS Code Live Server extension
   ```

2. **Open browser:** `http://localhost:8000`

### Deployment

Push to `main` branch → GitHub Pages auto-deploys → Live at `https://sbahamon.github.io`

## Writing Content

### Blog Posts

Write posts in Markdown (posts-markdown/en/ or es/), commit, and HTML auto-generates via pre-commit hook. See **[WRITING_POSTS.md](WRITING_POSTS.md)** for complete guide including front matter, syntax, and bilingual workflow.

### Static Pages

Edit HTML directly: index.html, about.html, now.html, projects.html (and Spanish equivalents in es/)

## Bilingual Support

Site is fully bilingual (English at `/`, Spanish at `/es/`). Main pages already translated. Blog posts translate individually. See [WRITING_POSTS.md](WRITING_POSTS.md) for details.

## Performance & Accessibility

- **Performance:** Page weight < 100KB, time to interactive < 1s, Lighthouse 95+, no frameworks
- **Accessibility:** WCAG AA compliant, semantic HTML, keyboard navigable, screen reader tested, high contrast

## License

Content © 2025 Steffany Bahamon. All rights reserved.

Code is available for reference and learning purposes.

## Contact

- **GitHub:** [@sbahamon](https://github.com/sbahamon)
- **LinkedIn:** [/in/sbahamon](https://linkedin.com/in/sbahamon)
- **Website:** [sbahamon.github.io](https://sbahamon.github.io)

---

Built with care in Chicago. Connecting Lake Michigan to the Atlantic Ocean.