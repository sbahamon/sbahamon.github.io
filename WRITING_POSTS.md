# Writing Blog Posts

Quick reference guide for creating new blog posts in Markdown.

## Quick Start (5 Steps)

1. **Create a Markdown file:**
   ```bash
   touch posts-markdown/en/my-post-slug.md
   ```

2. **Add front matter and content:**
   ```markdown
   ---
   title: "Your Post Title"
   date: 2025-01-20
   tags: ["Tag1", "Tag2"]
   excerpt: "Brief description for listings and search..."
   readingTime: "5 min read"
   lang: en
   prevPost: "/posts/previous-post.html"
   nextPost: "/posts/next-post.html"
   ---

   Your markdown content starts here...
   ```

3. **Write your post** using Markdown syntax (see below)

4. **Commit your changes:**
   ```bash
   git add posts-markdown/en/my-post-slug.md
   git commit -m "Add new blog post about X"
   ```

5. **Done!** The pre-commit hook automatically:
   - Generates HTML at `/posts/my-post-slug.html`
   - Updates `data/posts.json` for search
   - Stages the generated files

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

**title:** Use title case. Keep under 60 characters for SEO.

**date:** Must be valid date. Used for sorting in listings.

**tags:**
- Use 2-5 tags per post
- Keep tags consistent across posts
- Examples: "AI", "Cybersecurity", "Education", "Home Lab"

**excerpt:**
- Keep to 1-2 sentences (150-200 characters)
- This appears in search results and post listings
- Should entice readers to click

**readingTime:**
- Rough guideline: 200 words per minute
- Examples: "5 min read", "10 min read", "3 min read"

**lang:**
- Must be either "en" or "es"
- Determines output directory: en → `/posts/`, es → `/es/posts/`

**prevPost / nextPost:**
- Use full URLs: `/posts/slug.html` or `/es/posts/slug.html`
- Creates navigation at bottom of post
- Set to `null` if no prev/next post exists

## Markdown Syntax Guide

### Headings

```markdown
# H1 - Post Title (auto-generated from front matter)
## H2 - Major sections
### H3 - Subsections
#### H4 - Minor subsections
```

### Text Formatting

```markdown
**Bold text**
*Italic text*
~~Strikethrough~~
`Inline code`
```

### Lists

```markdown
Unordered list:
- Item 1
- Item 2
  - Nested item
- Item 3

Ordered list:
1. First item
2. Second item
3. Third item
```

### Links

```markdown
[Link text](https://example.com)
[Internal link](/about.html)
[Link with title](https://example.com "Title on hover")
```

### Blockquotes

```markdown
> This is a blockquote.
> It can span multiple lines.
>
> And have multiple paragraphs.
```

### Horizontal Rules

```markdown
---
```

## Code Blocks & Syntax Highlighting

### Inline Code

Use backticks for inline code: \`variable\` or \`function()\`

### Code Blocks

Use triple backticks with language identifier:

````markdown
```python
def hello_world():
    print("Hello, World!")
    return True
```
````

### Supported Languages

Common languages for cybersecurity blog:
- `python` - Python code
- `bash` / `sh` - Shell scripts
- `javascript` / `js` - JavaScript
- `html` - HTML markup
- `css` - CSS styles
- `sql` - SQL queries
- `yaml` - YAML config
- `json` - JSON data
- `plaintext` - No highlighting

### Code Block Examples

**Python example:**
````markdown
```python
import hashlib

def hash_password(password):
    return hashlib.sha256(password.encode()).hexdigest()
```
````

**Bash example:**
````markdown
```bash
# Scan network
nmap -sn 192.168.1.0/24

# Check open ports
nmap -p- localhost
```
````

**Multiple code blocks in one post:**
````markdown
First, install the package:

```bash
pip install requests
```

Then use it in your code:

```python
import requests
response = requests.get('https://api.example.com')
print(response.json())
```
````

## Images

```markdown
![Alt text](/images/screenshot.png)
![Alt text with title](/images/diagram.jpg "Diagram title")
```

**Image best practices:**
- Add images to `/images/` directory first
- Always include descriptive alt text
- Optimize images (< 200KB when possible)
- Use WebP format for best performance

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

## Navigation Links (prevPost / nextPost)

Set these manually in front matter to create post navigation:

```yaml
---
prevPost: "/posts/previous-post-slug.html"
nextPost: "/posts/next-post-slug.html"
---
```

**Tips:**
- Keep post navigation logical (chronological or by topic)
- Update previous post's `nextPost` when adding new post
- Set to `null` for first/last posts in series
- Spanish posts should link to Spanish posts

## Example Post Structure

Here's a complete example of a technical blog post with code:

````markdown
---
title: "Building Secure APIs with Python"
date: 2025-02-01
tags: ["Python", "Security", "API Development"]
excerpt: "Learn how to build secure REST APIs using Python, FastAPI, and modern authentication patterns."
readingTime: "10 min read"
lang: en
prevPost: null
nextPost: null
---

Modern web applications rely on APIs to communicate between services. In this post, we'll explore how to build secure APIs using Python and FastAPI.

## Why API Security Matters

API vulnerabilities are among the OWASP Top 10 for a reason...

## Setting Up FastAPI

First, install the required dependencies:

```bash
pip install fastapi uvicorn python-jose passlib
```

Then create your basic application:

```python
from fastapi import FastAPI, Depends, HTTPException
from fastapi.security import HTTPBearer

app = FastAPI()
security = HTTPBearer()

@app.get("/")
async def root():
    return {"message": "Hello, secure world!"}
```

## Implementing Authentication

Here's a complete JWT authentication example:

```python
from datetime import datetime, timedelta
from jose import JWTError, jwt

SECRET_KEY = "your-secret-key-here"  # Use environment variable in production
ALGORITHM = "HS256"

def create_access_token(data: dict):
    to_encode = data.copy()
    expire = datetime.utcnow() + timedelta(minutes=30)
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
```

> **Important:** Never hardcode secrets in production code. Always use environment variables or a secrets manager.

## Key Takeaways

- Always validate input on the server side
- Use HTTPS in production
- Implement rate limiting
- Keep dependencies updated
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

### "Build failed" on commit

**Symptoms:** Commit rejected, error message shown

**Solutions:**
1. Check front matter YAML syntax (colons, quotes, arrays)
2. Ensure required fields are present
3. Verify date format is YYYY-MM-DD
4. Check for special characters in title/excerpt

**Debug:**
```bash
# Test build manually to see full error
node build-posts.js
```

### Generated HTML looks wrong

**Symptoms:** Formatting issues in browser

**Solutions:**
1. Check Markdown syntax (close code blocks with \```)
2. Verify image paths start with `/`
3. Ensure headings have space after `#`

### Search not finding post

**Symptoms:** Post doesn't appear in search results

**Solutions:**
1. Verify `data/posts.json` was updated (check git status)
2. Ensure excerpt field is populated
3. Check tags array syntax: `["Tag1", "Tag2"]`
4. Clear browser cache and reload

### Pre-commit hook not running

**Symptoms:** Markdown committed but HTML not generated

**Solutions:**
1. Check hook is executable: `chmod +x .git/hooks/pre-commit`
2. Verify Node.js is installed: `node --version`
3. Try manual build: `npm run build`

## Tips & Best Practices

### Writing Tips

- **Start with the end:** Write excerpt first to clarify your message
- **Use concrete examples:** Code snippets and real scenarios
- **Break up text:** Use headings, lists, blockquotes
- **Show AND tell:** Combine code with explanations
- **Link to resources:** External references add value

### SEO Tips

- Use descriptive titles (not "Part 1", "My thoughts")
- Front-load important keywords in excerpt
- Use 2-5 relevant tags
- Write for humans, not search engines

### Code Block Tips

- Always specify language for syntax highlighting
- Keep code examples focused and brief
- Add comments to explain complex lines
- Test code before publishing

### Bilingual Tips

- Translate idioms, don't transliterate
- Technical terms: keep English or use accepted Spanish term
- Maintain same heading structure in both languages
- Update both versions when correcting errors

## Getting Help

- **Build script:** Read `build-posts.js` for implementation details
- **Examples:** Check existing Markdown files in `posts-markdown/en/`
- **README:** See `README.md` for overall project documentation
- **Claude context:** See `.claude/CLAUDE.md` for architectural decisions

---

**Last updated:** January 2025
