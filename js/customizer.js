/**
 * =============================================================================
 * Project: 3D Transform Gallery - 100% Customizer
 * Author: Molla Samser | rskworld.in | 2026
 * - Website: https://rskworld.in
 * - Email: help@rskworld.in | support@rskworld.in
 * - Phone: +91 93305 39277
 * - Address: Nutanhat, Mongolkote, Purba Burdwan, West Bengal, India, 713147
 * =============================================================================
 */

(function () {
  'use strict';

  var STORAGE_KEY = 'rskworld-3d-gallery-custom';

  var ACCENT_PRESETS = {
    blue: { accent: '#0d6efd', accentLight: '#6ea8fe', accentDim: 'rgba(13, 110, 253, 0.25)', shadowAccent: 'rgba(13, 110, 253, 0.25)' },
    green: { accent: '#198754', accentLight: '#75b798', accentDim: 'rgba(25, 135, 84, 0.25)', shadowAccent: 'rgba(25, 135, 84, 0.25)' },
    purple: { accent: '#6f42c1', accentLight: '#a78bfa', accentDim: 'rgba(111, 66, 193, 0.25)', shadowAccent: 'rgba(111, 66, 193, 0.25)' },
    orange: { accent: '#fd7e14', accentLight: '#fd9843', accentDim: 'rgba(253, 126, 20, 0.25)', shadowAccent: 'rgba(253, 126, 20, 0.25)' },
    pink: { accent: '#d63384', accentLight: '#e685b5', accentDim: 'rgba(214, 51, 132, 0.25)', shadowAccent: 'rgba(214, 51, 132, 0.25)' },
    teal: { accent: '#20c997', accentLight: '#63e6be', accentDim: 'rgba(32, 201, 151, 0.25)', shadowAccent: 'rgba(32, 201, 151, 0.25)' }
  };

  var DEFAULT = {
    accent: 'blue',
    animSpeed: 1,
    radius: 10,
    theme: 'auto'
  };

  function load() {
    try {
      var s = localStorage.getItem(STORAGE_KEY);
      return s ? Object.assign({}, DEFAULT, JSON.parse(s)) : Object.assign({}, DEFAULT);
    } catch (e) {
      return Object.assign({}, DEFAULT);
    }
  }

  function save(opts) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(opts));
    } catch (e) {}
  }

  function applyAccent(key) {
    var p = ACCENT_PRESETS[key] || ACCENT_PRESETS.blue;
    var r = document.documentElement;
    r.style.setProperty('--accent', p.accent);
    r.style.setProperty('--accent-light', p.accentLight);
    r.style.setProperty('--accent-dim', p.accentDim);
    r.style.setProperty('--shadow-accent', p.shadowAccent);
  }

  function applyAnimSpeed(value) {
    document.documentElement.style.setProperty('--anim-speed', String(value));
  }

  function applyRadius(px) {
    var r = document.documentElement;
    r.style.setProperty('--radius-sm', px * 0.6 + 'px');
    r.style.setProperty('--radius-md', px + 'px');
    r.style.setProperty('--radius-lg', px * 1.4 + 'px');
    r.style.setProperty('--radius-xl', px * 2 + 'px');
  }

  function applyTheme(theme) {
    var r = document.documentElement;
    if (theme === 'auto') {
      r.setAttribute('data-theme', window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    } else if (theme) {
      r.setAttribute('data-theme', theme);
    } else {
      r.removeAttribute('data-theme');
    }
  }

  function applyAll(opts) {
    applyAccent(opts.accent);
    applyAnimSpeed(opts.animSpeed);
    applyRadius(opts.radius);
    applyTheme(opts.theme);
  }

  function buildPanel() {
    var opts = load();
    applyAll(opts);

    var toggle = document.getElementById('customizer-toggle');
    var overlay = document.getElementById('customizer-overlay');
    var panel = document.getElementById('customizer-panel');
    if (!toggle || !overlay || !panel) return;

    function open() {
      overlay.classList.add('open');
      panel.classList.add('open');
      toggle.setAttribute('aria-expanded', 'true');
    }

    function close() {
      overlay.classList.remove('open');
      panel.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }

    toggle.addEventListener('click', function () {
      if (panel.classList.contains('open')) close(); else open();
    });
    overlay.addEventListener('click', close);

    var closeBtn = panel.querySelector('.customizer-close');
    if (closeBtn) closeBtn.addEventListener('click', close);

    // Accent presets
    Object.keys(ACCENT_PRESETS).forEach(function (key) {
      var btn = panel.querySelector('[data-accent="' + key + '"]');
      if (btn) {
        btn.style.background = ACCENT_PRESETS[key].accent;
        if (opts.accent === key) btn.classList.add('active');
        btn.addEventListener('click', function () {
          panel.querySelectorAll('.accent-presets button').forEach(function (b) { b.classList.remove('active'); });
          btn.classList.add('active');
          opts.accent = key;
          applyAccent(key);
          save(opts);
        });
      }
    });

    // Animation speed
    var speedSlider = panel.querySelector('#customizer-speed');
    var speedValue = panel.querySelector('#customizer-speed-value');
    if (speedSlider) {
      speedSlider.value = opts.animSpeed;
      if (speedValue) speedValue.textContent = opts.animSpeed + 'x';
      speedSlider.addEventListener('input', function () {
        var v = parseFloat(speedSlider.value) || 1;
        opts.animSpeed = v;
        applyAnimSpeed(v);
        save(opts);
        if (speedValue) speedValue.textContent = v + 'x';
      });
    }

    // Radius
    var radiusSlider = panel.querySelector('#customizer-radius');
    var radiusValue = panel.querySelector('#customizer-radius-value');
    if (radiusSlider) {
      radiusSlider.value = opts.radius;
      if (radiusValue) radiusValue.textContent = opts.radius + 'px';
      radiusSlider.addEventListener('input', function () {
        var v = parseInt(radiusSlider.value, 10) || 10;
        opts.radius = v;
        applyRadius(v);
        save(opts);
        if (radiusValue) radiusValue.textContent = v + 'px';
      });
    }

    // Theme
    var themeSelect = panel.querySelector('#customizer-theme');
    if (themeSelect) {
      themeSelect.value = opts.theme || 'auto';
      themeSelect.addEventListener('change', function () {
        var v = themeSelect.value;
        opts.theme = v;
        applyTheme(opts.theme);
        save(opts);
      });
    }

    // Reset
    var resetBtn = panel.querySelector('.customizer-reset');
    if (resetBtn) {
      resetBtn.addEventListener('click', function () {
        localStorage.removeItem(STORAGE_KEY);
        var def = Object.assign({}, DEFAULT);
        applyAll(def);
        if (speedSlider) { speedSlider.value = def.animSpeed; if (speedValue) speedValue.textContent = def.animSpeed + 'x'; }
        if (radiusSlider) { radiusSlider.value = def.radius; if (radiusValue) radiusValue.textContent = def.radius + 'px'; }
        if (themeSelect) themeSelect.value = def.theme || 'auto';
        panel.querySelectorAll('.accent-presets button').forEach(function (b) { b.classList.remove('active'); });
        var activeAccent = panel.querySelector('[data-accent="' + def.accent + '"]');
        if (activeAccent) activeAccent.classList.add('active');
        opts.accent = def.accent;
        opts.animSpeed = def.animSpeed;
        opts.radius = def.radius;
        opts.theme = def.theme;
        applyTheme(def.theme);
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildPanel);
  } else {
    buildPanel();
  }
})();
