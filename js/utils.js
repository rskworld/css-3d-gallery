/**
 * =============================================================================
 * Project: 3D Transform Gallery - Utility helpers
 * Author: Molla Samser | rskworld.in | 2026
 * - Website: https://rskworld.in
 * - Email: help@rskworld.in | support@rskworld.in
 * - Phone: +91 93305 39277
 * - Address: Nutanhat, Mongolkote, Purba Burdwan, West Bengal, India, 713147
 * =============================================================================
 */

(function (global) {
  'use strict';

  // Project info - rskworld.in | 2026
  var PROJECT = {
    name: '3D Transform Gallery',
    author: 'Molla Samser',
    website: 'https://rskworld.in',
    year: 2026
  };

  function getProjectInfo() {
    return Object.assign({}, PROJECT);
  }

  // Optional: smooth scroll to element (fallback if needed)
  function scrollToElement(id) {
    var el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // Export for optional use
  global.GalleryUtils = {
    getProjectInfo: getProjectInfo,
    scrollToElement: scrollToElement
  };
})(typeof window !== 'undefined' ? window : this);
