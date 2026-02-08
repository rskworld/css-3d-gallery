/**
 * =============================================================================
 * Project: 3D Transform Gallery - Theme, Back to top, Smooth scroll
 * Author: Molla Samser | rskworld.in | 2026
 * - Website: https://rskworld.in
 * - Email: help@rskworld.in | support@rskworld.in
 * - Phone: +91 93305 39277
 * - Address: Nutanhat, Mongolkote, Purba Burdwan, West Bengal, India, 713147
 * =============================================================================
 */

(function () {
  'use strict';

  function initTheme() {
    var stored = localStorage.getItem('rskworld-3d-gallery-theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = stored || (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
    updateThemeButton(theme);
  }

  function updateThemeButton(theme) {
    var btn = document.getElementById('theme-toggle');
    if (btn) btn.textContent = theme === 'light' ? '\u263E' : '\u9728';
  }

  function toggleTheme() {
    var current = document.documentElement.getAttribute('data-theme') || 'dark';
    var next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('rskworld-3d-gallery-theme', next);
    updateThemeButton(next);
  }

  function initBackToTop() {
    var btn = document.getElementById('back-to-top');
    if (!btn) return;
    function check() {
      btn.classList.toggle('visible', window.scrollY > 300);
    }
    window.addEventListener('scroll', check, { passive: true });
    check();
    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  function initSmoothScroll() {
    document.querySelectorAll('.gallery-nav a[href^="#"], .navbar-nav a[href^="#"]').forEach(function (link) {
      var id = link.getAttribute('href');
      if (id === '#') return;
      link.addEventListener('click', function (e) {
        var el = document.querySelector(id);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  function initActiveNav() {
    var navLinks = document.querySelectorAll('.gallery-nav a[href^="#"], .navbar-nav a[href^="#"]');
    function updateActive() {
      var y = window.scrollY;
      navLinks.forEach(function (a) {
        var id = a.getAttribute('href');
        if (id === '#') return;
        var section = document.querySelector(id);
        if (!section) return;
        var top = section.offsetTop - 80;
        var bottom = top + section.offsetHeight;
        a.classList.toggle('active', y >= top && y < bottom);
      });
    }
    window.addEventListener('scroll', updateActive, { passive: true });
    updateActive();
  }

  function initCopyButtons() {
    document.querySelectorAll('.btn-copy').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var wrap = btn.closest('.code-block-wrap');
        var pre = wrap ? wrap.querySelector('pre') : null;
        var code = pre ? (pre.querySelector('code') || pre) : null;
        var text = code ? code.textContent : '';
        if (!text) return;
        navigator.clipboard.writeText(text).then(function () {
          var label = btn.textContent;
          btn.textContent = 'Copied!';
          btn.classList.add('copied');
          setTimeout(function () {
            btn.textContent = label;
            btn.classList.remove('copied');
          }, 2000);
        });
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initTheme();
    var themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) themeBtn.addEventListener('click', toggleTheme);
    initBackToTop();
    initSmoothScroll();
    initActiveNav();
    initCopyButtons();
    console.info('3D Transform Gallery — rskworld.in © 2026');
  });
})();
