#!/usr/bin/env node

/**
 * Build Script for Markdown to HTML Conversion
 * Converts Markdown posts to HTML with bilingual support
 */

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const MarkdownIt = require('markdown-it');

// Initialize Markdown parser with basic features
// Syntax highlighting will be done by highlight.js in the browser
const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  highlight: function (str, lang) {
    if (lang && lang.length > 0) {
      return `<pre><code class="language-${lang}">${escapeHtml(str)}</code></pre>`;
    }
    return `<pre><code>${escapeHtml(str)}</code></pre>`;
  }
});

// HTML escape function
function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}

// Paths
const MARKDOWN_DIR = path.join(__dirname, 'posts-markdown');
const POSTS_DIR = path.join(__dirname, 'posts');
const ES_POSTS_DIR = path.join(__dirname, 'es', 'posts');
const DATA_DIR = path.join(__dirname, 'data');
const POSTS_JSON = path.join(DATA_DIR, 'posts.json');

/**
 * Get template HTML with proper structure
 */
function getTemplate(lang = 'en') {
  const isSpanish = lang === 'es';
  const langPath = isSpanish ? '/es' : '';
  const altLangPath = isSpanish ? '' : '/es';

  return {
    header: (title, description, url, altUrl) => `<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="${description}">
  <title>${title} - Steffany Bahamon</title>

  <!-- Favicon -->
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">

  <!-- Alternate language -->
  <link rel="alternate" hreflang="${isSpanish ? 'en' : 'es'}" href="${altUrl}">

  <!-- Stylesheets -->
  <link rel="stylesheet" href="/styles/main.css">
  <link rel="stylesheet" href="/styles/syntax.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600&family=IBM+Plex+Sans:wght@400;500;600&family=JetBrains+Mono&display=swap" rel="stylesheet">
  <script src="/js/theme.js"></script>
</head>
<body>
  <a href="#main" class="skip-link">${isSpanish ? 'Saltar al contenido' : 'Skip to content'}</a>

  <header class="site-header">
    <nav class="nav-container">
      <h1 class="site-title">
        <a href="${langPath}/index.html">Steffany Bahamon</a>
      </h1>

      <button class="mobile-menu-toggle" aria-label="${isSpanish ? 'Alternar menú' : 'Toggle menu'}" id="mobile-menu-toggle">☰</button>

      <div class="nav-main" id="nav-main">
        <a href="${langPath}/about.html">${isSpanish ? 'Sobre Mí' : 'About'}</a>
        <a href="${langPath}/now.html">${isSpanish ? 'Ahora' : 'Now'}</a>
        <a href="${langPath}/posts/index.html" class="active">${isSpanish ? 'Publicaciones' : 'Posts'}</a>
        <a href="${langPath}/projects.html">${isSpanish ? 'Proyectos' : 'Projects'}</a>
      </div>

      <div class="nav-controls">
        <button id="theme-toggle" class="theme-toggle" aria-label="${isSpanish ? 'Cambiar tema' : 'Toggle theme'}">❄️ ${isSpanish ? 'Invierno de Chicago' : 'Chicago Winter'}</button>
        <a href="${altUrl}" id="lang-toggle" class="lang-toggle" aria-label="${isSpanish ? 'Switch to English' : 'Cambiar a español'}">${isSpanish ? 'EN' : 'ES'}</a>
      </div>
    </nav>
  </header>

  <main id="main" class="main-content">
    <article>`,

    footer: (prevPost, nextPost) => {
      const isSpanish = lang === 'es';
      return `
      <div class="wave-divider" style="margin: 3rem 0;"></div>

      <p class="text-muted">
        <em>${isSpanish ? 'Conéctate conmigo en' : 'Connect with me on'}
        <a href="https://linkedin.com/in/sbahamon" target="_blank" rel="noopener">LinkedIn</a> ${isSpanish ? 'o' : 'or'}
        <a href="https://github.com/sbahamon" target="_blank" rel="noopener">GitHub</a>.</em>
      </p>

      <nav style="margin-top: 3rem; padding-top: 2rem; border-top: 1px solid var(--color-border);">
        <div style="display: flex; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
          ${prevPost ? `<a href="${prevPost}" class="btn btn-secondary">← ${isSpanish ? 'Anterior' : 'Previous Post'}</a>` : '<span></span>'}
          ${nextPost ? `<a href="${nextPost}" class="btn btn-secondary">${isSpanish ? 'Siguiente' : 'Next Post'} →</a>` : `<a href="${langPath}/posts/index.html" class="btn btn-secondary">${isSpanish ? 'Todas las Publicaciones' : 'All Posts'}</a>`}
        </div>
      </nav>
    </article>
  </main>

  <footer class="site-footer">
    <div class="footer-content">
      <div class="social-links">
        <a href="https://github.com/sbahamon" aria-label="GitHub" target="_blank" rel="noopener">GitHub</a>
        <a href="https://linkedin.com/in/sbahamon" aria-label="LinkedIn" target="_blank" rel="noopener">LinkedIn</a>
      </div>
      <p>&copy; 2025 Steffany Bahamon. ${isSpanish ? 'Conectando el Lago Michigan con el Océano Atlántico.' : 'Connecting Lake Michigan to the Atlantic Ocean.'}</p>
    </div>
  </footer>

  <script src="/js/language.js" defer></script>
  <script>
    document.getElementById('mobile-menu-toggle')?.addEventListener('click', function() {
      document.getElementById('nav-main')?.classList.toggle('active');
    });

    function copyCode(button) {
      const codeBlock = button.parentElement.nextElementSibling;
      const code = codeBlock.textContent;
      navigator.clipboard.writeText(code).then(() => {
        button.textContent = '${isSpanish ? 'Copiado!' : 'Copied!'}';
        setTimeout(() => button.textContent = '${isSpanish ? 'Copiar' : 'Copy'}', 2000);
      });
    }
  </script>

  <!-- Syntax highlighting -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>
  <script>hljs.highlightAll();</script>
</body>
</html>`
    }
  };
}

/**
 * Format date for display
 */
function formatDate(dateString, lang = 'en') {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString(lang === 'es' ? 'es-ES' : 'en-US', options);
}

/**
 * Generate post header HTML
 */
function generatePostHeader(frontMatter, lang = 'en') {
  const { title, date, readingTime, tags } = frontMatter;
  const tagsHtml = tags.map(tag => `<span class="tag">${tag}</span>`).join('\n          ');

  return `      <header>
        <h1>${title}</h1>
        <div class="post-meta">
          <time datetime="${date}">${formatDate(date, lang)}</time>
          <span class="reading-time">${readingTime}</span>
        </div>
        <div class="tags">
          ${tagsHtml}
        </div>
      </header>

      <div class="wave-divider"></div>

`;
}

/**
 * Process a single markdown file
 */
function processMarkdownFile(filePath, lang = 'en') {
  console.log(`Processing: ${filePath} (${lang})`);

  // Read and parse markdown
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data: frontMatter, content } = matter(fileContent);

  // Convert markdown to HTML
  const contentHtml = md.render(content);

  // Generate file slug from filename
  const slug = path.basename(filePath, '.md');
  const url = lang === 'es' ? `/es/posts/${slug}.html` : `/posts/${slug}.html`;
  const altUrl = lang === 'es' ? `/posts/${slug}.html` : `/es/posts/${slug}.html`;

  // Get template
  const template = getTemplate(lang);

  // Build complete HTML
  const html =
    template.header(frontMatter.title, frontMatter.excerpt, url, altUrl) +
    generatePostHeader(frontMatter, lang) +
    contentHtml +
    template.footer(frontMatter.prevPost, frontMatter.nextPost);

  // Write to appropriate directory
  const outputDir = lang === 'es' ? ES_POSTS_DIR : POSTS_DIR;
  const outputPath = path.join(outputDir, `${slug}.html`);

  fs.writeFileSync(outputPath, html, 'utf8');
  console.log(`✓ Generated: ${outputPath}`);

  // Return metadata for posts.json
  return {
    title: frontMatter.title,
    url,
    date: frontMatter.date,
    tags: frontMatter.tags || [],
    excerpt: frontMatter.excerpt || '',
    readingTime: frontMatter.readingTime || '5 min read',
    lang
  };
}

/**
 * Build all posts
 */
function buildPosts() {
  console.log('🔨 Building posts...\n');

  const postsMetadata = [];

  // Process English posts
  const enDir = path.join(MARKDOWN_DIR, 'en');
  if (fs.existsSync(enDir)) {
    const enFiles = fs.readdirSync(enDir).filter(f => f.endsWith('.md'));
    enFiles.forEach(file => {
      const metadata = processMarkdownFile(path.join(enDir, file), 'en');
      postsMetadata.push(metadata);
    });
  }

  // Process Spanish posts
  const esDir = path.join(MARKDOWN_DIR, 'es');
  if (fs.existsSync(esDir)) {
    const esFiles = fs.readdirSync(esDir).filter(f => f.endsWith('.md'));
    esFiles.forEach(file => {
      const metadata = processMarkdownFile(path.join(esDir, file), 'es');
      postsMetadata.push(metadata);
    });
  }

  // Update posts.json
  fs.writeFileSync(POSTS_JSON, JSON.stringify(postsMetadata, null, 2), 'utf8');
  console.log(`\n✓ Updated: ${POSTS_JSON}`);
  console.log(`\n✨ Build complete! Generated ${postsMetadata.length} posts.`);
}

/**
 * Watch mode
 */
function watchMode() {
  console.log('👀 Watch mode enabled. Watching for changes...\n');
  const chokidar = require('chokidar');

  const watcher = chokidar.watch(path.join(MARKDOWN_DIR, '**', '*.md'), {
    persistent: true,
    ignoreInitial: false
  });

  watcher.on('change', () => {
    console.log('\n📝 Changes detected, rebuilding...\n');
    buildPosts();
  });

  watcher.on('add', () => {
    console.log('\n📝 New file detected, rebuilding...\n');
    buildPosts();
  });
}

// Main execution
if (process.argv.includes('--watch')) {
  watchMode();
} else {
  buildPosts();
}
