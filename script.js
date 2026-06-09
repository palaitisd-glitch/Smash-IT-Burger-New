/* ═══════════════════════════════════════════
   SMASH IT BURGERS — script.js
═══════════════════════════════════════════ */

// ─── HERO ANIMATION ────────────────────────
(function initHero() {
  const headline   = document.querySelector('.hero-headline');
  const pill       = document.querySelector('.halal-pill');
  const content    = document.querySelector('.hero-content');
  const scrollHint = document.querySelector('.hero-scroll-hint');

  // Trigger the staggered load animation
  window.addEventListener('load', function () {
    // Pill fades in first
    if (pill) pill.classList.add('loaded');

    // Headline "smash" effect — slight delay
    setTimeout(function () {
      if (headline) headline.classList.add('loaded');
    }, 150);

    // Sub-content fades in after headline lands
    setTimeout(function () {
      if (content) content.classList.add('hero-loaded');
      if (scrollHint) scrollHint.style.opacity = '1';
    }, 750);
  });
})();

// ─── SCROLL REVEAL ──────────────────────────
(function initReveal() {
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(function (el) {
    observer.observe(el);
  });
})();

// ─── TODAY'S HOURS HIGHLIGHT ───────────────
(function initHoursToday() {
  var today = new Date().getDay(); // 0=Sun, 1=Mon … 6=Sat

  var hoursMap = {
    0: '11:30 AM – 12:00 AM',
    1: '11:30 AM – 12:00 AM',
    2: 'Closed',
    3: '11:30 AM – 12:00 AM',
    4: '11:30 AM – 2:00 AM',
    5: '11:30 AM – 2:00 AM',
    6: '11:30 AM – 10:00 PM'
  };

  // Highlight today in hours table
  document.querySelectorAll('.hours-row').forEach(function (row) {
    if (parseInt(row.dataset.day, 10) === today) {
      row.classList.add('is-today');
    }
  });

  // Update "Today's Hours" in Find Us section
  var todayEl = document.getElementById('todayHours');
  if (todayEl) {
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var hours = hoursMap[today] || '—';
    todayEl.textContent = days[today] + ': ' + hours;
    if (hours === 'Closed') todayEl.style.color = 'var(--muted-light)';
  }
})();

// ─── NAV: SCROLL STYLE ──────────────────────
(function initNavScroll() {
  var nav = document.getElementById('nav');
  if (!nav) return;

  function onScroll() {
    if (window.scrollY > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // Run once on init
})();

// ─── MOBILE NAV TOGGLE ──────────────────────
(function initMobileNav() {
  var btn    = document.getElementById('hamburger');
  var menu   = document.getElementById('mobileMenu');
  var links  = document.querySelectorAll('.mobile-link');

  if (!btn || !menu) return;

  function openMenu() {
    menu.classList.add('is-open');
    btn.classList.add('is-open');
    btn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden'; // prevent scroll when menu open
  }

  function closeMenu() {
    menu.classList.remove('is-open');
    btn.classList.remove('is-open');
    btn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  btn.addEventListener('click', function () {
    var isOpen = menu.classList.contains('is-open');
    isOpen ? closeMenu() : openMenu();
  });

  links.forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // Close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menu.classList.contains('is-open')) {
      closeMenu();
      btn.focus();
    }
  });
})();

// ─── SMOOTH SCROLL (fixed nav offset) ───────
(function initSmoothScroll() {
  var NAV_HEIGHT = 66;

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var id = this.getAttribute('href');
      if (id === '#' || id === '#top') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      var y = target.getBoundingClientRect().top + window.pageYOffset - NAV_HEIGHT - 16;
      window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
    });
  });
})();

// ─── FOOTER YEAR ────────────────────────────
(function initYear() {
  var el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
})();

// ─── REVIEW CARDS: DRAG TO SCROLL ───────────
(function initDragScroll() {
  var track = document.querySelector('.reviews-track');
  if (!track) return;

  var isDown  = false;
  var startX  = 0;
  var scrollL = 0;

  track.addEventListener('mousedown', function (e) {
    isDown  = true;
    startX  = e.pageX - track.offsetLeft;
    scrollL = track.scrollLeft;
    track.style.cursor = 'grabbing';
    track.style.userSelect = 'none';
  });

  track.addEventListener('mouseleave', function () {
    isDown = false;
    track.style.cursor = '';
    track.style.userSelect = '';
  });

  track.addEventListener('mouseup', function () {
    isDown = false;
    track.style.cursor = '';
    track.style.userSelect = '';
  });

  track.addEventListener('mousemove', function (e) {
    if (!isDown) return;
    e.preventDefault();
    var x    = e.pageX - track.offsetLeft;
    var walk = (x - startX) * 1.4;
    track.scrollLeft = scrollL - walk;
  });
})();
