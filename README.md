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
├── index.html                    # English homepage
├── about.html                    # English about page
├── now.html                      # English "now" page
├── projects.html                 # English projects page
├── posts/                        # Generated HTML (DO NOT EDIT DIRECTLY)
│   ├── index.html                # Blog listing
│   ├── llms-threat-detection.html
│   ├── teaching-security-ai.html
│   └── home-lab-security.html
├── posts-markdown/               # 📝 WRITE YOUR POSTS HERE
│   ├── en/                       # English Markdown posts
│   │   ├── llms-threat-detection.md
│   │   ├── teaching-security-ai.md
│   │   └── home-lab-security.md
│   └── es/                       # Spanish Markdown posts
├── es/                           # Spanish versions
│   ├── index.html                # Spanish homepage
│   ├── posts/                    # Generated Spanish HTML
│   └── README.md                 # Translation guide
├── styles/
│   ├── main.css                  # Main stylesheet with Lake & Ocean design system
│   └── syntax.css                # Code syntax highlighting styles
├── js/
│   ├── theme.js                  # Light/dark mode toggle
│   ├── language.js               # Language switching logic
│   └── search.js                 # Blog search functionality
├── data/
│   └── posts.json                # Auto-generated search index
├── images/                       # Images directory
│   └── README.md                 # Guidelines for adding images
├── build-posts.js                # Markdown → HTML build script
├── package.json                  # Build dependencies
├── .git/hooks/pre-commit         # Auto-build on commit
├── .gitignore                    # Ignore node_modules
├── .nojekyll                     # Prevents GitHub Pages Jekyll processing
└── README.md                     # This file
```

## Getting Started

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sbahamon/sbahamon.github.io.git
   cd sbahamon.github.io
   ```

2. **Serve locally:**
   ```bash
   # Option 1: Python 3
   python3 -m http.server 8000

   # Option 2: Python 2
   python -m SimpleHTTPServer 8000

   # Option 3: Node.js (if you have http-server installed)
   npx http-server -p 8000

   # Option 4: VS Code Live Server extension
   # Right-click index.html → "Open with Live Server"
   ```

3. **Open in browser:**
   Navigate to `http://localhost:8000`

### Deploying to GitHub Pages

1. Push changes to the `main` branch
2. GitHub Pages will automatically deploy from `main`
3. Site will be available at `https://sbahamon.github.io`

### Custom Domain Setup

1. Add `CNAME` file to root with your domain:
   ```
   yourdomain.com
   ```

2. Configure DNS with your domain provider:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   Value: 185.199.109.153
   Value: 185.199.110.153
   Value: 185.199.111.153

   Type: CNAME
   Name: www
   Value: sbahamon.github.io
   ```

3. Enable HTTPS in GitHub Pages settings (automatic with custom domain)

## Content Management

### Adding a New Blog Post (Markdown Workflow)

**Write posts in Markdown, HTML auto-generates on commit!**

1. **Create a Markdown file:**
   ```bash
   # Create file in posts-markdown/en/
   touch posts-markdown/en/my-new-post.md
   ```

2. **Add front matter and content:**
   ```markdown
   ---
   title: "Your Post Title"
   date: 2025-01-XX
   tags: ["Tag1", "Tag2", "Tag3"]
   excerpt: "Brief description that appears in listings and search..."
   readingTime: "X min read"
   lang: en
   prevPost: "/posts/previous-post.html"
   nextPost: "/posts/next-post.html"
   ---

   Your markdown content here...

   ## Headings work
   - Lists work
   - **Bold** and *italic* work

   ```python
   # Code blocks with syntax highlighting work
   def hello():
       print("Hello!")
   \```
   ```

3. **Commit your changes:**
   ```bash
   git add posts-markdown/en/my-new-post.md
   git commit -m "Add new blog post"
   ```

4. **Magic happens automatically!**
   - Pre-commit hook runs `node build-posts.js`
   - HTML file generated at `/posts/my-new-post.html`
   - `data/posts.json` automatically updated
   - Generated files auto-staged and committed

5. **For Spanish translations:**
   - Create `posts-markdown/es/my-new-post.md`
   - Set `lang: es` in front matter
   - Commit → Auto-generates `/es/posts/my-new-post.html`

### Manual Build (Optional)

```bash
# Build all posts
npm run build

# Watch mode - rebuilds on save
npm run watch
```

### Updating the "Now" Page

Simply edit `now.html` (English) and `es/now.html` (Spanish) directly. Don't forget to update the "Last updated" date!

### Adding a Project

Edit `projects.html` and add a new card within the `.card-grid`:

```html
<article class="card">
  <h3>Project Title</h3>
  <p class="meta">Year | Category</p>
  <p>Description...</p>
  <div class="tags">
    <span class="tag">Tech 1</span>
    <span class="tag">Tech 2</span>
  </div>
</article>
```

### Adding Images

1. Optimize images (recommended: WebP format, under 200KB)
2. Add to `/images/` directory
3. Reference with `/images/filename.jpg` in HTML
4. Always include descriptive `alt` text

## Customization

### Changing Colors

Edit CSS custom properties in `styles/main.css`:

```css
:root {
  --color-bg: #FFFCF7;           /* Background color */
  --color-text: #0F172A;         /* Text color */
  --color-accent: #0D9488;       /* Accent/link color */
  /* ... more variables ... */
}
```

### Changing Fonts

Update Google Fonts link in HTML `<head>` and CSS variables:

```css
:root {
  --font-heading: 'Your Font', serif;
  --font-body: 'Your Font', sans-serif;
}
```

### Modifying Navigation

Navigation is duplicated in each HTML file. To update:

1. Edit the navigation in one file
2. Use find-and-replace to update all other files
3. Files to update: all HTML files in root, `/posts/`, and `/es/` directories

## Completing Spanish Translations

The Spanish site structure is set up, but most pages need translation:

1. Copy English page to `/es/` directory
2. Change `<html lang="en">` to `<html lang="es">`
3. Update `hreflang` alternate link
4. Translate all content
5. Update all internal links to point to `/es/` URLs
6. See `/es/README.md` for detailed translation guidelines

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- **Page weight:** < 100KB (excluding images)
- **Time to interactive:** < 1 second
- **Lighthouse score:** 95+ across all metrics
- **No framework overhead**
- **Minimal JavaScript:** < 15KB total

## Accessibility

- WCAG AA compliant
- Semantic HTML throughout
- Keyboard navigable
- Screen reader tested
- Sufficient color contrast in both themes
- Reduced motion support
- Skip-to-content link

## License

Content © 2025 Steffany Bahamon. All rights reserved.

Code is available for reference and learning purposes.

## Contact

- **GitHub:** [@sbahamon](https://github.com/sbahamon)
- **LinkedIn:** [/in/sbahamon](https://linkedin.com/in/sbahamon)
- **Website:** [sbahamon.github.io](https://sbahamon.github.io)

---

Built with care in Chicago. Connecting Lake Michigan to the Atlantic Ocean.