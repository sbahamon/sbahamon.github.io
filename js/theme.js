/**
 * Lake & Ocean Theme Toggle
 * Handles light/dark mode switching between Miami Summer and Chicago Winter
 */

(function() {
  'use strict';

  const THEME_KEY = 'sbahamon-theme';
  const THEME_LIGHT = 'light';
  const THEME_DARK = 'dark';

  /**
   * Get initial theme preference
   * Priority: localStorage > system preference > default (light)
   */
  function getInitialTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY);
    if (savedTheme) {
      return savedTheme;
    }

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return THEME_DARK;
    }

    return THEME_LIGHT;
  }

  /**
   * Apply theme to document
   */
  function applyTheme(theme) {
    if (theme === THEME_DARK) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }

    // Update toggle button text if it exists
    updateToggleButton(theme);
  }

  /**
   * Update toggle button text and aria-label
   */
  function updateToggleButton(theme) {
    const toggleBtn = document.getElementById('theme-toggle');
    if (!toggleBtn) return;

    if (theme === THEME_DARK) {
      toggleBtn.textContent = '☀️ Miami Summer';
      toggleBtn.setAttribute('aria-label', 'Switch to light mode (Miami Summer)');
    } else {
      toggleBtn.textContent = '❄️ Chicago Winter';
      toggleBtn.setAttribute('aria-label', 'Switch to dark mode (Chicago Winter)');
    }
  }

  /**
   * Toggle between light and dark themes
   */
  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') === 'dark'
      ? THEME_DARK
      : THEME_LIGHT;

    const newTheme = currentTheme === THEME_LIGHT ? THEME_DARK : THEME_LIGHT;

    localStorage.setItem(THEME_KEY, newTheme);
    applyTheme(newTheme);
  }

  /**
   * Initialize theme on page load
   */
  function init() {
    const initialTheme = getInitialTheme();
    applyTheme(initialTheme);

    // Set up toggle button event listener
    const toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', toggleTheme);
    }

    // Listen for system theme changes
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        // Only auto-switch if user hasn't set a preference
        if (!localStorage.getItem(THEME_KEY)) {
          const newTheme = e.matches ? THEME_DARK : THEME_LIGHT;
          applyTheme(newTheme);
        }
      });
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Also apply theme immediately to prevent flash
  const initialTheme = getInitialTheme();
  applyTheme(initialTheme);

})();
