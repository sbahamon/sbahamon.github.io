# Images Directory

This directory contains images for the website.

## Required Images

- **profile.jpg** - Profile photo for the About page (recommended: 400x400px, optimized WebP or JPG)
- **project-*.jpg** - Screenshots for project cards on the Projects page

## Image Optimization Guidelines

For best performance:
- Use WebP format when possible with JPG fallback
- Optimize images to keep file sizes under 200KB
- Use appropriate dimensions (no need for 4K images on web)
- Add `loading="lazy"` attribute for images below the fold

## Adding Images

1. Add your optimized images to this directory
2. Reference them in HTML with `/images/filename.jpg`
3. Always include descriptive `alt` text for accessibility
