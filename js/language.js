/**
 * Language Toggle (EN/ES)
 * Handles bilingual navigation and preference persistence
 */

(function() {
  'use strict';

  const LANG_KEY = 'sbahamon-lang';
  const LANG_EN = 'en';
  const LANG_ES = 'es';

  /**
   * Get current language from URL path
   * Returns 'es' if URL starts with /es/, otherwise 'en'
   */
  function getCurrentLanguage() {
    const path = window.location.pathname;
    return path.startsWith('/es/') || path === '/es' ? LANG_ES : LANG_EN;
  }

  /**
   * Get saved language preference
   */
  function getSavedLanguage() {
    return localStorage.getItem(LANG_KEY);
  }

  /**
   * Save language preference
   */
  function saveLanguage(lang) {
    localStorage.setItem(LANG_KEY, lang);
  }

  /**
   * Get the alternate language URL for the current page
   */
  function getAlternateUrl(currentLang) {
    const path = window.location.pathname;
    const hash = window.location.hash;

    if (currentLang === LANG_EN) {
      // Switch to Spanish: prepend /es
      if (path === '/' || path === '/index.html') {
        return '/es/index.html' + hash;
      }
      return '/es' + path + hash;
    } else {
      // Switch to English: remove /es
      let newPath = path.replace(/^\/es/, '');
      if (newPath === '' || newPath === '/') {
        newPath = '/index.html';
      }
      return newPath + hash;
    }
  }

  /**
   * Update language toggle button
   */
  function updateToggleButton(currentLang) {
    const toggleBtn = document.getElementById('lang-toggle');
    if (!toggleBtn) return;

    const targetLang = currentLang === LANG_EN ? LANG_ES : LANG_EN;
    const alternateUrl = getAlternateUrl(currentLang);

    toggleBtn.textContent = targetLang.toUpperCase();
    toggleBtn.setAttribute('href', alternateUrl);
    toggleBtn.setAttribute('aria-label',
      currentLang === LANG_EN ? 'Cambiar a español' : 'Switch to English'
    );
  }

  /**
   * Update all alternate language links in the page
   */
  function updateAlternateLinks(currentLang) {
    const alternateUrl = getAlternateUrl(currentLang);

    // Update hreflang links
    let alternateLinkTag = document.querySelector('link[rel="alternate"]');
    if (alternateLinkTag) {
      alternateLinkTag.setAttribute('href', alternateUrl);
      alternateLinkTag.setAttribute('hreflang', currentLang === LANG_EN ? 'es' : 'en');
    }
  }

  /**
   * Handle language toggle click
   */
  function handleLanguageToggle(e) {
    const currentLang = getCurrentLanguage();
    const targetLang = currentLang === LANG_EN ? LANG_ES : LANG_EN;

    saveLanguage(targetLang);

    // Navigation will happen via the link href
    // No need to preventDefault
  }

  /**
   * Optional: Auto-redirect based on saved preference
   * Only runs on the home page to avoid disrupting navigation
   */
  function checkAutoRedirect() {
    const savedLang = getSavedLanguage();
    const currentLang = getCurrentLanguage();
    const path = window.location.pathname;

    // Only auto-redirect from home page
    if ((path === '/' || path === '/index.html' || path === '/es/' || path === '/es/index.html')
        && savedLang && savedLang !== currentLang) {
      const alternateUrl = getAlternateUrl(currentLang);
      window.location.href = alternateUrl;
    }
  }

  /**
   * Initialize language handling
   */
  function init() {
    const currentLang = getCurrentLanguage();

    // Save current language as the preference when user navigates
    saveLanguage(currentLang);

    // Update toggle button
    updateToggleButton(currentLang);

    // Update alternate links
    updateAlternateLinks(currentLang);

    // Set up toggle button event listener
    const toggleBtn = document.getElementById('lang-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', handleLanguageToggle);
    }

    // Optional: check for auto-redirect
    // Uncomment the line below to enable auto-redirect based on preference
    // checkAutoRedirect();
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
