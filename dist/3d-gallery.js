/**
 * 3D Gallery - Standalone JS (use on any website)
 * Author: Molla Samser | rskworld.in | 2026
 * Include this file after your HTML. Works with or without .rsk-3d-gallery wrapper.
 * Use data attributes: data-3d-theme-toggle, data-3d-back-to-top, data-3d-smooth-scroll, data-3d-customizer
 */
(function () {
  'use strict';

  var ROOT = document.documentElement;
  var STORAGE_THEME = 'rskworld-3d-gallery-theme';
  var STORAGE_CUSTOM = 'rskworld-3d-gallery-custom';

  function find(selector, scope) {
    var el = scope || document;
    return el.querySelector(selector);
  }

  function findAll(selector, scope) {
    var el = scope || document;
    return el.querySelectorAll(selector);
  }

  function themeInit() {
    var stored = localStorage.getItem(STORAGE_THEME);
    var dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = stored || (dark ? 'dark' : 'light');
    ROOT.setAttribute('data-theme', theme);
    return theme;
  }

  function themeUpdateBtn(theme) {
    findAll('[data-3d-theme-toggle]').forEach(function (btn) {
      btn.textContent = theme === 'light' ? '\u263E' : '\u9728';
    });
  }

  function themeToggle() {
    var current = ROOT.getAttribute('data-theme') || 'dark';
    var next = current === 'dark' ? 'light' : 'dark';
    ROOT.setAttribute('data-theme', next);
    localStorage.setItem(STORAGE_THEME, next);
    themeUpdateBtn(next);
  }

  function backToTopInit() {
    findAll('[data-3d-back-to-top]').forEach(function (btn) {
      function check() { btn.classList.toggle('visible', window.scrollY > 300); }
      window.addEventListener('scroll', check, { passive: true });
      check();
      btn.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
    });
  }

  function smoothScrollInit(scope) {
    var container = scope || document;
    findAll('a[href^="#"]', container).forEach(function (link) {
      var id = link.getAttribute('href');
      if (id === '#') return;
      link.addEventListener('click', function (e) {
        var el = document.querySelector(id);
        if (el) { e.preventDefault(); el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
      });
    });
  }

  function customizerInit() {
    var toggle = find('[data-3d-customizer-toggle]');
    var overlay = find('[data-3d-customizer-overlay]');
    var panel = find('[data-3d-customizer-panel]');
    if (!toggle || !overlay || !panel) return;

    function open() { overlay.classList.add('open'); panel.classList.add('open'); toggle.setAttribute('aria-expanded', 'true'); }
    function close() { overlay.classList.remove('open'); panel.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }

    toggle.addEventListener('click', function () { if (panel.classList.contains('open')) close(); else open(); });
    overlay.addEventListener('click', close);
    var closeBtn = find('[data-3d-customizer-close]', panel);
    if (closeBtn) closeBtn.addEventListener('click', close);
  }

  function run() {
    themeUpdateBtn(themeInit());
    findAll('[data-3d-theme-toggle]').forEach(function (btn) {
      btn.addEventListener('click', themeToggle);
    });
    backToTopInit();
    var wrapper = find('.rsk-3d-gallery');
    smoothScrollInit(wrapper || document);
    customizerInit();
    if (typeof window.RSK3DGalleryReady === 'function') window.RSK3DGalleryReady();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
})();
