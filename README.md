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

- **HTML5:** Semantic markup
- **CSS3:** Custom properties for theming, CSS Grid and Flexbox
- **Vanilla JavaScript:** Theme toggle, language switching, search
- **Fuse.js:** Lightweight fuzzy search library (loaded from CDN)
- **Highlight.js:** Syntax highlighting for code blocks (loaded from CDN)
- **Google Fonts:** Cormorant Garamond, IBM Plex Sans, JetBrains Mono

## Project Structure

```
/
├── index.html                    # English homepage
├── about.html                    # English about page
├── now.html                      # English "now" page
├── projects.html                 # English projects page
├── posts/
│   ├── index.html                # Blog listing
│   ├── llms-threat-detection.html
│   ├── teaching-security-ai.html
│   └── home-lab-security.html
├── es/                           # Spanish versions
│   ├── index.html                # Spanish homepage (main pages follow same pattern)
│   └── README.md                 # Guide for completing Spanish translations
├── styles/
│   ├── main.css                  # Main stylesheet with Lake & Ocean design system
│   └── syntax.css                # Code syntax highlighting styles
├── js/
│   ├── theme.js                  # Light/dark mode toggle
│   ├── language.js               # Language switching logic
│   └── search.js                 # Blog search functionality
├── data/
│   └── posts.json                # Search index (manually maintained)
├── images/                       # Images directory
│   └── README.md                 # Guidelines for adding images
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

### Adding a New Blog Post

1. **Create the HTML file:**
   - Copy an existing post as a template (e.g., `posts/llms-threat-detection.html`)
   - Save as `posts/your-post-slug.html`
   - Update all content, metadata, and navigation links

2. **Update posts.json:**
   ```json
   {
     "title": "Your Post Title",
     "url": "/posts/your-post-slug.html",
     "date": "2025-01-XX",
     "tags": ["Tag1", "Tag2"],
     "excerpt": "Brief description...",
     "readingTime": "X min read",
     "lang": "en"
   }
   ```

3. **Create Spanish version (if applicable):**
   - Create `/es/posts/your-post-slug.html`
   - Add Spanish entry to `posts.json` with `"lang": "es"`

4. **Test search functionality:**
   - Verify the new post appears in search results
   - Test tag filtering

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