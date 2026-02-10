(function () {
  'use strict';

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
