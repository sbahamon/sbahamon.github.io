/**
 * Blog Search using Fuse.js
 * Client-side fuzzy search for blog posts
 */

(function() {
  'use strict';

  let fuse = null;
  let allPosts = [];

  /**
   * Load Fuse.js from CDN
   */
  function loadFuse() {
    return new Promise((resolve, reject) => {
      if (window.Fuse) {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/fuse.js@7.0.0/dist/fuse.min.js';
      script.integrity = 'sha256-9bz8qGcy0sPPbUNA/yC2YPB3tqPLjCNxLxYKVo+7kiI=';
      script.crossOrigin = 'anonymous';
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  /**
   * Load posts data from posts.json
   */
  async function loadPosts() {
    try {
      const currentLang = window.location.pathname.startsWith('/es/') ? 'es' : 'en';
      const dataPath = currentLang === 'es' ? '/data/posts.json' : '/data/posts.json';

      const response = await fetch(dataPath);
      if (!response.ok) {
        throw new Error('Failed to load posts data');
      }

      const posts = await response.json();

      // Filter posts by current language
      allPosts = posts.filter(post => post.lang === currentLang);

      return allPosts;
    } catch (error) {
      console.error('Error loading posts:', error);
      return [];
    }
  }

  /**
   * Initialize Fuse.js with posts data
   */
  async function initializeFuse() {
    try {
      await loadFuse();
      const posts = await loadPosts();

      if (posts.length === 0) {
        console.warn('No posts found for search');
        return;
      }

      const options = {
        keys: ['title', 'excerpt', 'tags'],
        threshold: 0.4,
        includeScore: true,
        minMatchCharLength: 2,
      };

      fuse = new Fuse(posts, options);
    } catch (error) {
      console.error('Error initializing search:', error);
    }
  }

  /**
   * Perform search and display results
   */
  function performSearch(query) {
    const resultsContainer = document.getElementById('search-results');
    const postList = document.getElementById('post-list');

    if (!fuse) {
      console.warn('Search not initialized');
      return;
    }

    // If query is empty, show all posts
    if (!query || query.trim().length === 0) {
      if (postList) {
        postList.style.display = 'block';
      }
      if (resultsContainer) {
        resultsContainer.innerHTML = '';
        resultsContainer.style.display = 'none';
      }
      return;
    }

    // Hide the original post list
    if (postList) {
      postList.style.display = 'none';
    }

    // Perform search
    const results = fuse.search(query);

    // Display results
    if (resultsContainer) {
      resultsContainer.style.display = 'block';

      if (results.length === 0) {
        resultsContainer.innerHTML = '<p class="text-muted">No posts found matching your search.</p>';
        return;
      }

      const resultsHTML = results.map(result => {
        const post = result.item;
        const tagsHTML = post.tags
          .map(tag => `<span class="tag">${tag}</span>`)
          .join(' ');

        return `
          <article class="post-list-item">
            <h2><a href="${post.url}">${post.title}</a></h2>
            <div class="post-meta">
              <time datetime="${post.date}">${formatDate(post.date)}</time>
              <span class="reading-time">${post.readingTime || '5 min read'}</span>
            </div>
            <p class="excerpt">${post.excerpt}</p>
            <div class="tags">${tagsHTML}</div>
          </article>
        `;
      }).join('');

      resultsContainer.innerHTML = resultsHTML;
    }
  }

  /**
   * Format date for display
   */
  function formatDate(dateString) {
    const date = new Date(dateString);
    const currentLang = window.location.pathname.startsWith('/es/') ? 'es' : 'en';

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(currentLang === 'es' ? 'es-ES' : 'en-US', options);
  }

  /**
   * Debounce function to limit search frequency
   */
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  /**
   * Initialize search functionality
   */
  async function init() {
    const searchInput = document.getElementById('search-input');

    if (!searchInput) {
      // Not on the posts page
      return;
    }

    // Show loading state
    searchInput.placeholder = 'Loading search...';
    searchInput.disabled = true;

    // Initialize Fuse.js
    await initializeFuse();

    // Update placeholder and enable input
    const currentLang = window.location.pathname.startsWith('/es/') ? 'es' : 'en';
    searchInput.placeholder = currentLang === 'es'
      ? 'Buscar publicaciones...'
      : 'Search posts...';
    searchInput.disabled = false;

    // Set up search input handler with debounce
    const debouncedSearch = debounce((query) => {
      performSearch(query);
    }, 300);

    searchInput.addEventListener('input', (e) => {
      debouncedSearch(e.target.value);
    });

    // Handle clearing the search
    searchInput.addEventListener('keyup', (e) => {
      if (e.key === 'Escape') {
        searchInput.value = '';
        performSearch('');
      }
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
