(function () {
  'use strict';

  // #region agent log
  var DEBUG_ENDPOINT = 'http://127.0.0.1:7243/ingest/59a059e3-57c3-40e4-a587-c8c56c6b9c95';
  function debugLog(location, message, data, hypothesisId) {
    fetch(DEBUG_ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ location: location, message: message, data: data || {}, timestamp: Date.now(), sessionId: 'debug-session', hypothesisId: hypothesisId || null }) }).catch(function() {});
  }
  function captureHeaderState() {
    var header = document.querySelector('.site-header');
    var inner = document.querySelector('.header-inner');
    var nav = document.querySelector('.main-nav');
    var nameEl = document.querySelector('.church-name');
    if (!header || !inner || !nav) return;
    var navList = nav.querySelector('ul');
    var links = nav.querySelectorAll('a');
    var innerRect = inner.getBoundingClientRect();
    var navRect = nav.getBoundingClientRect();
    var style = window.getComputedStyle(inner);
    var nameStyle = nameEl ? window.getComputedStyle(nameEl) : null;
    var navWrap = navList ? window.getComputedStyle(navList).flexWrap : '';
    var totalNavWidth = 0;
    for (var i = 0; i < links.length; i++) totalNavWidth += links[i].getBoundingClientRect().width;
    var gap = parseFloat(style.gap) || 0;
    var navGap = navList ? (parseFloat(window.getComputedStyle(navList).gap) || 0) : 0;
    var availableForNav = innerRect.width - (innerRect.width - navRect.left + innerRect.left) + navRect.width;
    debugLog('script.js:captureHeaderState', 'Header layout snapshot', { innerWidth: window.innerWidth, headerHeight: header.getBoundingClientRect().height, innerWidth_inner: innerRect.width, flexDirection: style.flexDirection, flexWrap: style.flexWrap, nameOrder: nameStyle ? nameStyle.order : null, nameWidth: nameEl ? nameEl.getBoundingClientRect().width : null, navWrap: navWrap, navLinksCount: links.length, totalNavLinksWidth: Math.round(totalNavWidth), navWidth: Math.round(navRect.width), navRows: navRect.height > 40 ? 'likelyWrapped' : 'singleRow', viewportCategory: window.innerWidth <= 639 ? 'mobile' : window.innerWidth >= 900 ? 'desktop' : 'tablet' }, 'H1');
    var logoWidth = document.querySelector('.logo-img') ? document.querySelector('.logo-img').getBoundingClientRect().width : 56;
    debugLog('script.js:captureHeaderState', 'Nav fit check', { innerWidth: window.innerWidth, innerMaxWidth: 900, innerActualWidth: Math.round(innerRect.width), logoWidth: Math.round(logoWidth), nameWidth: nameEl ? Math.round(nameEl.getBoundingClientRect().width) : 0, totalNavLinksWidth: Math.round(totalNavWidth + navGap * (links.length - 1)), navWidth: Math.round(navRect.width), navHeight: Math.round(navRect.height) }, 'H3');
    debugLog('script.js:captureHeaderState', 'Mobile order', { innerWidth: window.innerWidth, flexDirection: style.flexDirection, churchNameOrder: nameStyle ? nameStyle.order : null, headerInnerChildren: inner.children.length, isColumn: style.flexDirection === 'column' }, 'H2');
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function() { captureHeaderState(); });
  else captureHeaderState();
  var resizeTimer;
  window.addEventListener('resize', function() { clearTimeout(resizeTimer); resizeTimer = setTimeout(captureHeaderState, 150); });
  // #endregion

  // Set footer year
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Smooth scroll for anchor links (respects prefers-reduced-motion)
  var navLinks = document.querySelectorAll('.main-nav a[href^="#"]');
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function handleNavClick(e) {
    var href = this.getAttribute('href');
    if (href === '#') return;
    var target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    if (prefersReducedMotion) {
      target.scrollIntoView({ block: 'start' });
    } else {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', handleNavClick);
  }

  // Contact map: 176 East Davis Street, Culpeper, VA 22701
  var mapEl = document.getElementById('contact-map');
  if (mapEl && typeof L !== 'undefined') {
    var map = L.map('contact-map').setView([38.4729, -77.9962], 16);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    L.marker([38.4729, -77.9962]).addTo(map)
      .bindPopup('Free Gospel Church of Culpeper<br>176 East Davis Street');
  }
})();
