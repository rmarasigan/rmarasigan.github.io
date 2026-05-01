'use strict';

(function () {

  /* ── Reduced motion ──────────────────────────────────────────────────────────
     Respects the OS/browser "prefers-reduced-motion" setting for accessibility.
     When active, all reveal elements are shown instantly and particles are
     disabled so users with vestibular disorders aren't affected. */

  function handleReducedMotion() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.body.classList.add('no-motion');
      document.querySelectorAll('.reveal-fade, .reveal-slide-up').forEach(function (el) {
        el.classList.add('is-visible');
      });

      return true;
    }

    return false;
  }

  /* ── Footer year ─────────────────────────────────────────────────────────────
     Automatically keeps the copyright year current without manual updates. */

  function setFooterYear() {
    var el = document.getElementById('footer-year');
    if (el) el.textContent = new Date().getFullYear();
  }

  /* ── Scroll progress bar ─────────────────────────────────────────────────────
     Fills a thin bar at the top of the page as a visual indicator of how far
     the user has scrolled through the page. */

  function initScrollProgress() {
    var bar = document.getElementById('scroll-progress');
    if (!bar) return;

    window.addEventListener('scroll', function () {
      var total = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = total > 0 ? (window.scrollY / total * 100) + '%' : '0%';
    }, { passive: true });
  }

  /* ── Nav: scroll state + active link highlight ───────────────────────────────
     Adds a frosted-glass style to the nav bar once the user scrolls past 60px.
     Also tracks which section is in view and marks its nav link as active. */

  function initNav() {
    var body = document.body;
    var navLinks = document.querySelectorAll('.nav-link');
    var sections = document.querySelectorAll('section[id]');

    function updateActiveLink() {
      var scrollY = window.scrollY;

      sections.forEach(function (section) {
        var top = section.offsetTop - 100;
        var bottom = top + section.offsetHeight;

        if (scrollY >= top && scrollY < bottom) {
          navLinks.forEach(function (link) { link.classList.remove('active'); });
          var active = document.querySelector('.nav-link[href="#' + section.id + '"]');
          if (active) active.classList.add('active');
        }
      });
    }

    function onScroll() {
      body.dataset.scrolled = window.scrollY > 60 ? 'true' : 'false';
      updateActiveLink();
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── Mobile nav ──────────────────────────────────────────────────────────────
     Handles the hamburger toggle on narrow viewports. Closes the menu when a
     nav link is tapped or when the user presses Escape. */

  function initMobileNav() {
    var toggle = document.querySelector('.nav-toggle');
    var navLinks = document.querySelector('.nav-links');
    if (!toggle || !navLinks) return;

    function close() {
      navLinks.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }

    toggle.addEventListener('click', function () {
      var isOpen = navLinks.classList.toggle('open');

      toggle.classList.toggle('open', isOpen);
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    navLinks.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', close);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') close();
    });
  }

  /* ── Scroll reveal ───────────────────────────────────────────────────────────
     Uses IntersectionObserver to animate elements into view only when they enter
     the viewport. Stops watching each element after it has revealed once so the
     observer does not fire repeatedly for already-visible content. */

  function initScrollReveal() {
    var elements = document.querySelectorAll('.reveal-fade, .reveal-slide-up');
    if (!elements.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -48px 0px' });

    elements.forEach(function (el) { observer.observe(el); });
  }

  /* ── Particle canvas ─────────────────────────────────────────────────────────
     Renders a subtle golden mist of floating particles in the hero background.
     The animation loop is paused via IntersectionObserver when the hero is
     off-screen to avoid burning CPU while the user reads other sections. */

  var GOLD_COLORS = [
    'rgba(201,168,76,',
    'rgba(232,201,122,',
    'rgba(139,105,20,',
    'rgba(245,228,160,',
  ];

  function makeParticle(w, h) {
    return {
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.18 - 0.06,
      size: Math.random() * 2.4 + 0.8,
      alpha: Math.random() * 0.5 + 0.08,
      alphaDir: Math.random() > 0.5 ? 1 : -1,
      alphaSpeed: Math.random() * 0.005 + 0.002,
      hue: Math.floor(Math.random() * GOLD_COLORS.length),
    };
  }

  function initParticles(reducedMotion) {
    var canvas = document.getElementById('particle-canvas');
    if (!canvas) return;

    var ctx = canvas.getContext('2d');
    var raf = null;
    var particles = [];

    function resize() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;

      var count = Math.min(Math.floor(canvas.width * 0.055), 80);
      particles = [];

      for (var i = 0; i < count; i++) particles.push(makeParticle(canvas.width, canvas.height));
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(function (p) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = GOLD_COLORS[p.hue] + p.alpha.toFixed(2) + ')';
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -p.size) p.x = canvas.width + p.size;
        if (p.x > canvas.width + p.size) p.x = -p.size;
        if (p.y < -p.size) p.y = canvas.height + p.size;
        if (p.y > canvas.height + p.size) p.y = -p.size;

        p.alpha += p.alphaDir * p.alphaSpeed;
        if (p.alpha >= 0.65) { p.alpha = 0.65; p.alphaDir = -1; }
        if (p.alpha <= 0.04) { p.alpha = 0.04; p.alphaDir = 1; }
      });

      raf = requestAnimationFrame(draw);
    }

    function pause() { if (raf) { cancelAnimationFrame(raf); raf = null; } }
    function resume() { if (!raf) draw(); }

    resize();

    if (!reducedMotion) {
      draw();
      // Pause rendering when the hero is scrolled out of view to save CPU
      var heroObserver = new IntersectionObserver(function (entries) {
        entries[0].isIntersecting ? resume() : pause();
      }, { threshold: 0 });
      heroObserver.observe(document.getElementById('hero'));
    }

    // Debounced resize: rebuild particles to match the new canvas dimensions
    var resizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 200);
    });
  }

  /* ── Flip text + mantra stack highlight ──────────────────────────────────────
     Cycles the italic phrase next to the "Think / Create / Grow" stack with a
     3D flip animation, and highlights the corresponding word in the stack so the
     two elements feel visually connected. */

  function initFlipText() {
    var el = document.getElementById('flip-cycle');
    var items = document.querySelectorAll('.mantra-item');
    if (!el) return;

    var phrases = [
      'Think deeply.',
      'Create intentionally.',
      'Grow continuously.'
    ];

    var idx = 0;

    function setActive(i) {
      items.forEach(function (item, j) {
        item.classList.toggle('is-active', j === i);
      });
    }

    setActive(0);

    function flip() {
      el.classList.add('flipping-out');
      setTimeout(function () {
        idx = (idx + 1) % phrases.length;

        el.textContent = phrases[idx];
        el.classList.remove('flipping-out');
        el.classList.add('flipping-in');

        setActive(idx);
      }, 320);

      setTimeout(function () { el.classList.remove('flipping-in'); }, 820);
    }

    setInterval(flip, 4500);
  }

  /* ── Experience parallax ─────────────────────────────────────────────────────
     Fades and lifts timeline entries that have scrolled past the top of the
     viewport, giving a sense of "consumed" history while keeping entries
     readable as they enter view from below. */

  function initParallaxExperience() {
    var items = document.querySelectorAll('#experience .timeline-entry');
    if (!items.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.remove('parallax-out');
          entry.target.classList.add('is-visible');

        } else if (entry.boundingClientRect.top < 0) {
          // Only apply the exit style when scrolling past the top, not when below
          entry.target.classList.add('parallax-out');
        }
      });
    }, { threshold: 0.08 });

    items.forEach(function (el) { observer.observe(el); });
  }

  /* ── Skills carousel ─────────────────────────────────────────────────────────
     Allows mouse drag and touch swipe to scroll through skill cards on viewports
     too narrow to show all cards at once. Dot indicators sync with the current
     card so users know how many cards exist and where they are. */

  function initSkillsCarousel() {
    var track = document.getElementById('skills-track');
    var dots = document.querySelectorAll('.skills-dot');
    if (!track) return;

    var cards = Array.from(track.querySelectorAll('.skill-card'));
    var n = cards.length;
    if (!n) return;

    var current = 0;
    var dragging = false;
    var startX = 0;
    var dragDelta = 0;

    function cardStep() {
      var gap = parseInt(window.getComputedStyle(track).gap || '32', 10);
      return cards[0].offsetWidth + gap;
    }

    function moveTo(delta, animate) {
      var x = -(current * cardStep()) + (delta || 0);
      track.style.transition = animate
        ? 'transform 0.48s cubic-bezier(0.16,1,0.3,1)'
        : 'none';
      track.style.transform = 'translateX(' + x + 'px)';
    }

    function goTo(i, animate) {
      current = Math.max(0, Math.min(i, n - 1));
      moveTo(0, animate !== false);
      dots.forEach(function (d, j) { d.classList.toggle('active', j === current); });
    }

    track.addEventListener('mousedown', function (e) {
      dragging = true; startX = e.clientX; dragDelta = 0;
      track.classList.add('is-dragging');
    });

    document.addEventListener('mousemove', function (e) {
      if (!dragging) return;
      dragDelta = e.clientX - startX;
      moveTo(dragDelta, false);
    });

    function endDrag() {
      if (!dragging) return;
      dragging = false;
      track.classList.remove('is-dragging');

      goTo(current + (Math.abs(dragDelta) > 55 ? (dragDelta < 0 ? 1 : -1) : 0));

      dragDelta = 0;
    }
    document.addEventListener('mouseup', endDrag);

    track.addEventListener('touchstart', function (e) {
      startX = e.touches[0].clientX; dragDelta = 0;
    }, { passive: true });

    track.addEventListener('touchmove', function (e) {
      dragDelta = e.touches[0].clientX - startX;
      moveTo(dragDelta, false);
    }, { passive: true });

    track.addEventListener('touchend', function () {
      goTo(current + (Math.abs(dragDelta) > 45 ? (dragDelta < 0 ? 1 : -1) : 0));
      dragDelta = 0;
    });

    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () { goTo(i); });
    });

    goTo(0, false);

    // Recalculate card position on resize since card widths may change
    window.addEventListener('resize', function () { moveTo(0, false); });
  }

  /* ── Contact: coffee reveal + paper plane animation ──────────────────────────
     Clicking "Say hello" launches a paper plane along a cubic Bézier arc from
     the button to just above the email address, then slides the email into view.
     Positions are computed at click time via getBoundingClientRect so the
     animation is correct regardless of viewport size or scroll position.
     The panel auto-resets when the contact section scrolls out of view so the
     interaction feels fresh every time the user returns to it. */

  function initCoffeeReveal() {
    var btn = document.getElementById('coffee-btn');
    var panel = document.getElementById('contact-reveal');
    var status = document.getElementById('coffee-status');
    var plane = document.getElementById('paper-plane');
    var emailLink = document.getElementById('contact-email-link');
    var section = document.getElementById('contact');
    if (!btn || !panel) return;

    var isOpen = false;
    var rafId = null;
    var SZ = 26; /* plane SVG element size in px */

    /* Cubic Bézier point — evaluates position on the curve at parameter t */
    function bpt(P0, P1, P2, P3, t) {
      var m = 1 - t;
      return {
        x: m * m * m * P0.x + 3 * m * m * t * P1.x + 3 * m * t * t * P2.x + t * t * t * P3.x,
        y: m * m * m * P0.y + 3 * m * m * t * P1.y + 3 * m * t * t * P2.y + t * t * t * P3.y
      };
    }

    /* Cubic Bézier tangent — gives the direction vector at t so the plane
       can be rotated to always face along its path */
    function btan(P0, P1, P2, P3, t) {
      var m = 1 - t;
      return {
        x: 3 * m * m * (P1.x - P0.x) + 6 * m * t * (P2.x - P1.x) + 3 * t * t * (P3.x - P2.x),
        y: 3 * m * m * (P1.y - P0.y) + 6 * m * t * (P2.y - P1.y) + 3 * t * t * (P3.y - P2.y)
      };
    }

    function showPanel() {
      /* Do NOT hide the button with display:none — that removes it from layout
         flow and shifts the email position after we already measured it.
         The .launched class hides it via opacity:0 while preserving its space. */
      if (status) status.textContent = 'Something warm is waiting —';
      panel.classList.add('is-open');
      panel.removeAttribute('aria-hidden');
    }

    function openReveal() {
      if (isOpen) return;
      isOpen = true;
      btn.setAttribute('aria-expanded', 'true');
      btn.classList.add('launched');

      if (!plane || !emailLink) {
        setTimeout(showPanel, 400);
        return;
      }

      var wrapEl = btn.closest('.coffee-wrap');
      var wrapR = wrapEl.getBoundingClientRect();
      var btnR = btn.getBoundingClientRect();

      /* Temporarily set the panel to its final revealed state to measure the
         email's destination position accurately before the CSS transition runs */
      panel.style.transform = 'translateY(0)';
      var emailR = emailLink.getBoundingClientRect();
      panel.style.transform = '';

      /* P0 — plane starts at the button centre, relative to .coffee-wrap */
      var P0 = {
        x: btnR.left - wrapR.left + btnR.width / 2 - SZ / 2,
        y: btnR.top - wrapR.top + btnR.height / 2 - SZ / 2
      };

      /* P3 — plane lands 40px above the email top so it doesn't cover the link */
      var P3 = {
        x: emailR.right - wrapR.left - SZ / 2,
        y: emailR.top - wrapR.top - 40
      };

      /* Control points: launch upward then sweep in from the upper-right */
      var dx = P3.x - P0.x;
      var P1 = { x: P0.x + dx * 0.25, y: P0.y - 140 };
      var P2 = { x: P3.x + 90, y: P3.y - 90 };

      var DURATION = 1300;
      var t0 = null;

      plane.style.left = P0.x + 'px';
      plane.style.top = P0.y + 'px';
      plane.style.transform = 'rotate(-40deg)';
      plane.style.opacity = '1';

      function step(ts) {
        if (!t0) t0 = ts;
        var t = Math.min((ts - t0) / DURATION, 1);
        var ease = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; /* ease-in-out */

        var pos = bpt(P0, P1, P2, P3, ease);
        var tan = btan(P0, P1, P2, P3, ease);
        /* +45° offset because the SVG nose points upper-right at −45° naturally */
        var angle = Math.atan2(tan.y, tan.x) * 180 / Math.PI + 45;

        plane.style.left = pos.x.toFixed(1) + 'px';
        plane.style.top = pos.y.toFixed(1) + 'px';
        plane.style.transform = 'rotate(' + angle.toFixed(1) + 'deg)';
        plane.style.opacity = '1';

        if (t < 1) {
          rafId = requestAnimationFrame(step);
        } else {
          rafId = null;
          showPanel();
        }
      }

      rafId = requestAnimationFrame(step);
    }

    function resetReveal() {
      if (!isOpen) return;
      if (rafId) { cancelAnimationFrame(rafId); rafId = null; }

      isOpen = false;
      panel.classList.remove('is-open');
      panel.setAttribute('aria-hidden', 'true');

      if (plane) { plane.style.cssText = 'opacity:0;'; }

      btn.classList.remove('launched');
      btn.setAttribute('aria-expanded', 'false');

      if (status) status.textContent = 'Brewing something special…';
    }

    btn.addEventListener('click', openReveal);

    if (section) {
      new IntersectionObserver(function (entries) {
        if (!entries[0].isIntersecting) setTimeout(resetReveal, 400);
      }, { threshold: 0 }).observe(section);
    }
  }

  /* ── Butterfly orbit + sparkle trail ────────────────────────────────────────
     Moves the butterfly SVG in an ellipse around the hero name with pseudo-3D
     depth: smaller + dimmer + behind the text on the top arc, full-size + in
     front on the bottom arc. Turning is smoothed via lerp so the flip from
     right-facing to left-facing looks like a natural bank rather than a snap.
     Sparkle particles trail from the butterfly and fade on the canvas layer. */

  function initButterflyOrbit(reducedMotion) {
    var container = document.querySelector('.butterfly-container');
    var nameWrap = document.querySelector('.hero-name-wrap');
    var hero = document.getElementById('hero');
    var canvas = document.getElementById('butterfly-canvas');
    if (!container || !nameWrap || !hero || !canvas) return;

    var ctx = canvas.getContext('2d');
    var raf = null;
    var sparks = [];
    var angle = Math.PI;           // start at leftmost point
    var SPEED = (2 * Math.PI) / (24 * 60); // ~24-second orbit at 60 fps
    var currentScaleX = 1;         // lerped horizontal flip (1 = right, -1 = left)
    var heroName = document.querySelector('.hero-name');
    var currentNameRotY = 0;       // lerped perspective tilt on the name text

    var SPARK_COLORS = [
      'rgba(253,224,141,',
      'rgba(201,168,76,',
      'rgba(245,218,110,',
    ];

    // nameWrap's top-left corner in hero-canvas coordinates (updated on resize)
    var nwLeft = 0;
    var nwTop = 0;

    function updateLayout() {
      canvas.width = hero.offsetWidth;
      canvas.height = hero.offsetHeight;
      var heroRect = hero.getBoundingClientRect();
      var nwRect = nameWrap.getBoundingClientRect();
      nwLeft = nwRect.left - heroRect.left;
      nwTop = nwRect.top - heroRect.top;
    }

    function emitSpark(cx, cy) {
      sparks.push({
        x: cx + (Math.random() - 0.5) * 8,
        y: cy + (Math.random() - 0.5) * 8,
        vx: (Math.random() - 0.5) * 0.55,
        vy: (Math.random() - 0.5) * 0.5 - 0.22,
        size: Math.random() * 2 + 0.5,
        alpha: 0.55 + Math.random() * 0.3,
        decay: 0.007 + Math.random() * 0.005,
        hue: Math.floor(Math.random() * SPARK_COLORS.length),
      });
    }

    function draw() {
      var nwW = nameWrap.offsetWidth;
      var nwH = nameWrap.offsetHeight;
      var rx = nwW / 2 + 42;        // orbit extends ~42 px beyond each text edge
      var ry = nwH + 44;            // doubled: lemniscate max-y = ry/2 ≈ original ry

      var cosA  = Math.cos(angle);
      var sinA  = Math.sin(angle);
      var sin2A = Math.sin(2 * angle);

      // Lemniscate (∞) orbit: x = rx·cos(t),  y = ry·sin(2t)/2
      var bx = nwW / 2 + rx * cosA;
      var by = nwH / 2 + ry * sin2A / 2;

      var bw = container.offsetWidth || 52;
      var bh = container.offsetHeight || 58;
      container.style.left = (bx - bw / 2) + 'px';
      container.style.top  = (by - bh / 2) + 'px';

      // ── Smooth horizontal flip (lerp toward target) ────────────────────────
      // vx = -sin(angle): positive → moving right, negative → moving left.
      // Lerp factor 0.07 takes ~1 s to complete the flip — the butterfly appears
      // to bank into each turn rather than snapping direction.
      var targetScaleX = -sinA >= 0 ? 1 : -1;
      currentScaleX += (targetScaleX - currentScaleX) * 0.07;

      // ── Pseudo-3D depth ────────────────────────────────────────────────────
      // sin2A > 0 → y > 0 → upper arc of the ∞ → butterfly is behind the name.
      // sin2A < 0 → y < 0 → lower arc of the ∞ → butterfly is in front.
      // depth: 0 at the top peak (most behind), 1 at the bottom peak (most in front).
      var depth = (1 - sin2A) / 2;
      var scale3d = 0.70 + depth * 0.30;   // 0.70 (back) → 1.0 (front)
      var opacity = 0.45 + depth * 0.55;   // 0.45 (back) → 1.0 (front)

      // Combined transform: flip × perspective scale
      var sx = currentScaleX * scale3d;
      container.style.transform = 'scaleX(' + sx.toFixed(3) + ') scaleY(' + scale3d.toFixed(3) + ')';
      container.style.opacity = opacity.toFixed(2);

      // z-index relative to nameWrap's stacking context (isolation: isolate):
      //   1 → in front of h1 text; -1 → behind h1 text
      container.style.zIndex = sin2A > 0 ? '-1' : '1';

      angle += SPEED;

      // ── Subtle 3D perspective tilt on hero name ────────────────────────────
      // Tilts the name slightly toward the butterfly, giving the illusion that
      // the text is turning to face where the butterfly has flown.
      if (heroName) {
        var normX = (bx - nwW / 2) / (rx || 1);
        var targetNameRotY = -normX * 5;
        currentNameRotY += (targetNameRotY - currentNameRotY) * 0.025;
        var rotVal = container.offsetParent !== null ? currentNameRotY : 0;
        heroName.style.transform = 'perspective(700px) rotateY(' + rotVal.toFixed(2) + 'deg)';
      }

      // Emit sparkle at butterfly centre in hero-canvas space
      if (Math.random() < 0.55) {
        emitSpark(nwLeft + bx, nwTop + by);
      }

      // Draw and age sparkles
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (var i = sparks.length - 1; i >= 0; i--) {
        var s = sparks[i];
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = SPARK_COLORS[s.hue] + s.alpha.toFixed(2) + ')';
        ctx.fill();
        s.x += s.vx;
        s.y += s.vy;
        s.alpha -= s.decay;
        if (s.alpha <= 0) sparks.splice(i, 1);
      }

      raf = requestAnimationFrame(draw);
    }

    function pause() { if (raf) { cancelAnimationFrame(raf); raf = null; } }
    function resume() { if (!raf) draw(); }

    updateLayout();

    if (reducedMotion) {
      var bw = container.offsetWidth || 52;
      var bh = container.offsetHeight || 58;
      container.style.left = (-bw - 8) + 'px';
      container.style.top  = ((nameWrap.offsetHeight - bh) / 2) + 'px';
      container.style.transform = 'scaleX(1)';
      container.style.zIndex = '1';
      return;
    }

    draw();

    new IntersectionObserver(function (entries) {
      entries[0].isIntersecting ? resume() : pause();
    }, { threshold: 0 }).observe(hero);

    var resizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(updateLayout, 200);
    });
  }

  /* ── Boot ────────────────────────────────────────────────────────────────────
     Reduced-motion check runs first so all subsequent initialisers can branch
     on it. Particle and coffee reveal run regardless; the rest are skipped under
     reduced motion since they rely on CSS transitions and JS-driven animations. */

  document.addEventListener('DOMContentLoaded', function () {
    var rm = handleReducedMotion();
    setFooterYear();
    initScrollProgress();
    initNav();
    initMobileNav();
    if (!rm) {
      initScrollReveal();
      initFlipText();
      initParallaxExperience();
      initSkillsCarousel();
    }
    initParticles(rm);
    initButterflyOrbit(rm);
    initCoffeeReveal();
  });
}());
