# Prompt: Build a Personal Website with Blog

## Overview

Create a fast, accessible, static personal website with a blog for Steffany Bahamon—a Colombian-American cybersecurity professional and educator who grew up in Miami and has lived in Chicago for the past 10 years. The site should be hosted on GitHub Pages.

---

## Design System: "Lake & Ocean"

The design concept connects Lake Michigan (Chicago) to the Atlantic Ocean (Miami)—two bodies of water that shaped Steffany's journey. The aesthetic is calm, elegant, and fluid, with subtle nautical references that never feel kitschy.

### Color Palette

Use these as a starting point, with flexibility to adjust for contrast and harmony:

**Light Mode ("Miami Summer"):**
- Background: Warm white with a hint of sand (#FFFCF7 or similar)
- Primary text: Deep navy/midnight (#0F172A)
- Accent/links: Warm teal, reminiscent of tropical waters (#0D9488)
- Secondary accent: Sandy beige (#D4C4A8)
- Highlight/hover: Bright seafoam (#99F6E4)
- Consider subtle warm undertones throughout to evoke Miami sunshine

**Dark Mode ("Chicago Winter"):**
- Background: Deep midnight blue, like Lake Michigan at night (#0F172A or deeper)
- Primary text: Cool off-white (#F1F5F9)
- Accent/links: Cooler teal, like winter lake water (#14B8A6 or similar)
- Secondary accent: Muted steel gray (#64748B)
- Highlight/hover: Icy seafoam (#CCFBF1)
- Consider cooler undertones throughout to evoke Chicago winter

Ensure all color combinations meet WCAG AA contrast requirements (4.5:1 for body text, 3:1 for large text and UI elements).

### Typography

Choose fonts that feel elegant and readable. Recommendations:

- **Headings:** A refined serif with personality—consider Cormorant Garamond, Libre Baskerville, or Lora. Should feel fluid and slightly editorial.
- **Body text:** A clean, highly readable sans-serif—consider IBM Plex Sans, Source Sans Pro, or Inter.
- **Monospace (for code blocks):** JetBrains Mono, Fira Code, or IBM Plex Mono.

Use system font stacks as fallbacks for performance. Prioritize loading speed—consider using `font-display: swap` and limiting font weights.

### Visual Motifs

Incorporate these subtly—the design should feel refined, not busy:

- **Wave patterns:** Gentle, layered wave shapes as section dividers or footer decoration. Think calm waters, not crashing surf.
- **Horizon lines:** Simple horizontal lines that evoke the meeting of water and sky. Can be used as decorative dividers.
- **Flowing curves:** Subtle curved elements in containers, buttons, or decorative accents.
- **Water texture:** Very subtle background texture or gradient that suggests light on water (use sparingly).

Avoid: Anchors, ship wheels, fish, or anything overtly "nautical themed." The water references should be abstract and elegant.

### Layout Principles

- Clean, generous whitespace
- Content-focused with minimal distractions
- Asymmetric balance (not rigidly centered)
- Maximum content width of ~65-70 characters for readability
- Responsive design that works beautifully on mobile

---

## Site Structure

### Pages Required

1. **Home (/)** 
   - Brief introduction with name and tagline
   - Links/navigation to other sections
   - Optional: Featured or recent blog posts

2. **About (/about)**
   - Bio covering Colombian-American heritage, Miami upbringing, Chicago life
   - Professional background in cybersecurity and education
   - Personal interests
   - Link to download resume as PDF (the PDF will be added separately)
   - Photo placeholder

3. **Now (/now)**
   - "What I'm doing now" page (see nownownow.com for the concept)
   - Current focus areas, what Steffany is learning, reading, working on
   - Should be easy to update frequently

4. **Posts (/posts)**
   - Blog listing page showing all posts
   - Topics: AI and Cybersecurity
   - Each post should display: title, date, tags, estimated reading time
   - Simple search functionality (client-side JavaScript search is fine)
   - Tags for organization (simpler than categories)
   
5. **Individual Post (/posts/[slug])**
   - Clean reading experience
   - Syntax highlighting for code blocks
   - Previous/next post navigation
   - Display tags with links to filtered views

6. **Projects (/projects)**
   - Grid or list of projects
   - Each project: title, description, tags/technologies, link to repo or demo
   - Can be simple cards

### Navigation

- Simple top navigation with: About, Now, Posts, Projects
- Include toggles for:
  - Light/dark mode (Miami Summer ☀️ / Chicago Winter ❄️)
  - Language (EN / ES)
- Mobile: Hamburger menu or similar accessible pattern
- Include skip-to-content link for accessibility

---

## Features

### Light/Dark Mode Toggle

- Default to system preference (`prefers-color-scheme`)
- Allow manual override that persists (localStorage)
- Smooth transition between modes
- Consider subtle theming differences beyond just colors:
  - Light mode: warmer, brighter, more energetic
  - Dark mode: cooler, calmer, more contemplative

### Language Toggle (English/Spanish)

- Simple toggle between EN and ES
- Persist preference in localStorage
- All UI text should be translatable
- Blog posts can be:
  - Option A: Single post with both languages (simpler)
  - Option B: Separate post files per language (more flexible)
- Recommend Option B for cleaner URLs and SEO, but implement whichever is simpler for the chosen tech stack

### Search

- Client-side search for blog posts using vanilla JavaScript
- Use Fuse.js (lightweight, ~7kb) loaded from CDN
- Search by title, tags, and excerpt
- Simple search input on the Posts page
- Reads from a `posts.json` file that the site author maintains manually
- No server required—fully static

### Code Blocks

- Syntax highlighting for common languages (Python, JavaScript, Bash, SQL, etc.)
- Copy-to-clipboard button
- Support for code block titles/filenames
- Style consistently with the design system

---

## Technical Requirements

### Stack

**Plain HTML, CSS, and vanilla JavaScript only.** No frameworks, no build steps, no dependencies.

- Pure HTML5 files for each page
- Single CSS file (or one base + one for syntax highlighting)
- Vanilla JavaScript for interactivity (theme toggle, language toggle, search)
- No npm, no node_modules, no build process
- Edit and deploy directly—what you write is what gets served

This approach is:
- The fastest possible (no framework overhead)
- The most maintainable long-term (no dependencies to update)
- The easiest to understand and modify
- Truly portable (works anywhere, forever)

### JavaScript Guidelines

Keep JavaScript minimal and progressive:

- Site should be fully functional with JavaScript disabled (except search)
- Use `<script defer>` to avoid blocking page render
- No jQuery, no large libraries
- For search: use a lightweight library like Fuse.js (~7kb) that reads from a `posts.json` file
- Total JavaScript should be under 15kb

### Search Implementation

Since there's no build step, search requires a manually maintained JSON file:

1. Create a `posts.json` file containing all posts:
```json
[
  {
    "title": "How LLMs Are Changing Threat Detection",
    "url": "/posts/llms-threat-detection.html",
    "date": "2025-01-15",
    "tags": ["AI", "threat-detection", "machine-learning"],
    "excerpt": "A brief description of the post...",
    "lang": "en"
  }
]
```

2. Use Fuse.js (or similar lightweight fuzzy search) to search this file client-side
3. When adding a new post, the author must also add an entry to `posts.json`
4. Document this workflow clearly in the README

### Handling Repeated Elements (Header, Footer, Nav)

Since there's no templating, the header/footer/navigation will be duplicated across HTML files. Two approaches:

**Option A: Simple Duplication (Recommended)**
- Copy the header/footer into each HTML file
- When updating navigation, use find-and-replace across files
- Simpler, no JavaScript required for core layout

**Option B: JavaScript Includes**
- Create `header.html` and `footer.html` as fragments
- Use a small script to fetch and inject them
- Reduces duplication but adds JavaScript dependency for layout

Recommend Option A for maximum simplicity and accessibility. Document which files need updating when navigation changes.

### CSS Architecture

Keep styles simple and maintainable:

```
styles/
├── main.css          # All styles (or split below if preferred)
├── variables.css     # CSS custom properties for theming
└── syntax.css        # Code block syntax highlighting
```

Use CSS custom properties (variables) for theming:
```css
:root {
  --color-bg: #FFFCF7;
  --color-text: #0F172A;
  --color-accent: #0D9488;
  /* ... */
}

[data-theme="dark"] {
  --color-bg: #0F172A;
  --color-text: #F1F5F9;
  --color-accent: #14B8A6;
  /* ... */
}
```

### Language Toggle Implementation

For bilingual support without a framework:

**Recommended approach:** Separate HTML files per language
```
/index.html           # English home
/es/index.html        # Spanish home
/about.html           # English about
/es/about.html        # Spanish about
/posts/               # English posts
/es/posts/            # Spanish posts
```

- Language toggle links to the equivalent page in the other language
- Use `<link rel="alternate" hreflang="es" href="/es/...">` for SEO
- Store language preference in localStorage to redirect on future visits (optional)

### Performance Goals

- Lighthouse performance score: 95+
- Total page weight under 100kb (excluding images)
- Time to interactive: under 1 second
- No render-blocking resources
- Images: lazy loading, appropriate formats (WebP with fallbacks)

### Accessibility (WCAG AA)

- Semantic HTML throughout (`<nav>`, `<main>`, `<article>`, `<aside>`, etc.)
- Proper heading hierarchy (h1 → h2 → h3, no skipped levels)
- Alt text for all images
- Keyboard navigable with visible focus states
- Skip-to-content link as first focusable element
- ARIA labels where needed (toggles, search, icons)
- Sufficient color contrast in both themes (test both!)
- Reduced motion support (`prefers-reduced-motion`)
- Works without JavaScript (except search)
- Test with screen reader

### Hosting

- GitHub Pages compatible (static files only)
- No server-side functionality
- Include instructions for custom domain setup
- Include a proper `.nojekyll` file to prevent GitHub's Jekyll processing

---

## Content Placeholders

Include placeholder content so the site is functional immediately:

### Home
- Name: Steffany Bahamon
- Tagline: "Cyber Defense Educator & Software Engineer" (or similar)
- Brief intro: 2-3 sentences about bridging cultures and building secure systems

### About
- Placeholder bio (can reference: Colombian-American, Miami upbringing, Chicago resident, cybersecurity educator, bilingual English/Spanish, interests in F1, Chicago history, travel)
- Placeholder for photo
- "Download Resume (PDF)" link

### Now
- Placeholder sections: "Currently working on...", "Currently learning...", "Currently reading..."

### Posts
- 2-3 sample blog posts with realistic AI/cybersecurity titles:
  - "How LLMs Are Changing Threat Detection"
  - "Teaching Security in the Age of AI"
  - "Building a Home Lab for Security Research"
- Include sample code blocks, headings, and tags

### Projects
- 2-3 placeholder projects with titles, descriptions, and technology tags

---

## File Structure

```
/
├── index.html                    # English home
├── about.html                    # English about
├── now.html                      # English now
├── projects.html                 # English projects
├── posts/
│   ├── index.html                # English posts listing
│   ├── llms-threat-detection.html
│   ├── teaching-security-ai.html
│   └── home-lab-security.html
├── es/                           # Spanish versions
│   ├── index.html
│   ├── about.html
│   ├── now.html
│   ├── projects.html
│   └── posts/
│       ├── index.html
│       └── [spanish post files]
├── styles/
│   ├── main.css                  # Primary stylesheet
│   └── syntax.css                # Code syntax highlighting
├── js/
│   ├── theme.js                  # Light/dark mode toggle
│   ├── language.js               # Language preference handling
│   └── search.js                 # Search functionality
├── data/
│   └── posts.json                # Search index (manually maintained)
├── images/
│   ├── profile.jpg               # Placeholder for photo
│   └── [project screenshots]
├── resume.pdf                    # Linked from About page
├── .nojekyll                     # Prevents GitHub Jekyll processing
├── CNAME                         # For custom domain (optional)
└── README.md                     # Documentation
```

### Key Files Explained

- **HTML files:** Each page is a complete, standalone HTML document with repeated header/footer
- **main.css:** All styling including CSS custom properties for theming
- **theme.js:** Handles toggle, saves to localStorage, respects `prefers-color-scheme`
- **language.js:** Handles language toggle links and optional redirect based on saved preference
- **search.js:** Loads Fuse.js, reads posts.json, renders results
- **posts.json:** Manually updated whenever a new post is added

---

## Deliverables

1. **Complete source code** — All HTML, CSS, and JS files ready to deploy
2. **README.md** with:
   - How to deploy to GitHub Pages
   - How to add a new blog post (create HTML file + update posts.json)
   - How to update the Now page
   - How to add new projects
   - How to modify translations (which files to edit)
   - How to update navigation across all pages (list of files to edit)
   - How to set up a custom domain
3. **Working site** — All pages functional with placeholder content
4. **Both language versions** — English and Spanish placeholders in place

---

## Design Inspiration Summary

Remember: This is "Lake & Ocean"—connecting two bodies of water, two cities, two cultures. The design should feel:

- **Calm and confident** — Like still water
- **Elegant but approachable** — Not cold or corporate
- **Subtly layered** — Depth without complexity
- **Warm in light mode** — Miami summer energy
- **Cool in dark mode** — Chicago winter contemplation
- **Fluid** — Gentle curves and flowing transitions
- **Grounded** — Professional and trustworthy

The person behind this site is a bilingual cybersecurity educator who has delivered 600+ classes, bridges technical and non-technical audiences, and carries the warmth of Colombian and Miami culture into the Midwest. The design should reflect that journey.