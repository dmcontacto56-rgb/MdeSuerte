// CURSOR
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top  = e.clientY + 'px';
});
document.querySelectorAll('a, button, img').forEach(el => {
  el.addEventListener('mouseenter', () => cursor.classList.add('big'));
  el.addEventListener('mouseleave', () => cursor.classList.remove('big'));
});
 
// SCROLL REVEAL
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.07, rootMargin: '0px 0px -30px 0px' });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
 
// LIGHTBOX
const lb      = document.getElementById('lightbox');
const lbImg   = document.getElementById('lightbox-img');
const lbClose = document.getElementById('lightbox-close');
lb.addEventListener('click', () => lb.classList.remove('open'));
lbClose.addEventListener('click', e => { e.stopPropagation(); lb.classList.remove('open'); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') lb.classList.remove('open'); });
 
function openLightbox(src) { lbImg.src = src; lb.classList.add('open'); }
 
// Gallery strip / grid — single click opens lightbox
document.querySelectorAll('.gallery-grid img, .gallery-strip img, .gallery-featured img').forEach(img => {
  img.addEventListener('click', () => openLightbox(img.src));
});
 
// EXPANDING PANELS — 1 tap/click = expand | 2 taps/dblclick = lightbox
document.querySelectorAll('.options').forEach(opts => {
  opts.querySelectorAll('.option').forEach(opt => {
 
    // Single click — expand panel
    opt.addEventListener('click', (e) => {
      if (!opt.classList.contains('active')) {
        opts.querySelectorAll('.option').forEach(o => {
          o.classList.remove('active');
          const v = o.querySelector('video'); if (v) v.pause();
        });
        opt.classList.add('active');
        const vid = opt.querySelector('video');
        if (vid) vid.play().catch(()=>{});
      }
    });
 
    // Double click (desktop) — open lightbox
    opt.addEventListener('dblclick', () => {
      if (!opt.classList.contains('active')) return;
      const img = opt.querySelector('img');
      const vid = opt.querySelector('video');
      if (img) openLightbox(img.src);
      else if (vid && vid.requestFullscreen) vid.requestFullscreen().catch(()=>{});
    });
 
    // Double tap (mobile/tablet)
    let lastTap = 0;
    opt.addEventListener('touchend', (e) => {
      const now = Date.now();
      if (opt.classList.contains('active') && now - lastTap < 320) {
        const img = opt.querySelector('img');
        const vid = opt.querySelector('video');
        if (img) { e.preventDefault(); openLightbox(img.src); }
        else if (vid && vid.requestFullscreen) { e.preventDefault(); vid.requestFullscreen().catch(()=>{}); }
      }
      lastTap = now;
    }, { passive: false });
  });
 
  const firstVid = opts.querySelector('.option.active video');
  if (firstVid) firstVid.play().catch(()=>{});
});
 
// ── PARALLAX SCROLL + MOUSE ──
(function() {
  const seps = document.querySelectorAll('.parallax-sep .par-bg');
  if (!seps.length) return;

  let mouseX = 0, mouseY = 0;

  document.addEventListener('mousemove', e => {
    mouseX = (e.clientX / window.innerWidth  - 0.5) * 2;  // -1 to 1
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2;  // -1 to 1
    updateAll();
  }, { passive: true });

  function updateAll() {
    seps.forEach(bg => {
      const rect = bg.closest('.parallax-sep').getBoundingClientRect();
      const vh = window.innerHeight;
      if (rect.bottom < 0 || rect.top > vh) return;
      const progress = (vh - rect.top) / (vh + rect.height);
      const scrollOffset = (progress - 0.5) * 80;
      const mx = mouseX * 18;
      const my = mouseY * 12;
      bg.style.transform = 'translate(' + mx + 'px, ' + (scrollOffset + my) + 'px)';
    });
  }

  function onScroll() { updateAll(); }
  window.addEventListener('scroll', onScroll, { passive: true });
  updateAll();
})();
 
// ── SMOOTH SECTION TRANSITIONS ──
(function() {
  const sections = document.querySelectorAll('section, .anim-module, .gallery-section, .parallax-sep');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.05, rootMargin: '0px 0px -40px 0px' });
  sections.forEach(s => {
    if (!s.classList.contains('reveal')) {
      s.style.transition = 'opacity 1s cubic-bezier(.22,1,.36,1), transform 1s cubic-bezier(.22,1,.36,1)';
      s.style.opacity = '0';
      s.style.transform = 'translateY(40px)';
      io.observe(s);
    }
  });
})();
 
// NAV: links visible only at hero | trebol visible only at contact
const navLinks = document.querySelector('nav ul');
const navLogo  = document.querySelector('nav .logo');
 
// Links: show only at hero
new IntersectionObserver(entries => {
  navLinks.classList.toggle('show', entries[0].isIntersecting);
}, { threshold: 0.1 }).observe(document.getElementById('hero'));
 
// Logo: show ONLY when #hero or #contact is intersecting
// Logo visible immediately on load
navLogo.classList.add('show');
// Hide when leaving hero
new IntersectionObserver(e => {
  if (!e[0].isIntersecting) navLogo.classList.remove('show');
  else navLogo.classList.add('show');
}, {threshold:0.05}).observe(document.getElementById('hero'));
// Show again at contact
new IntersectionObserver(e => {
  if (e[0].isIntersecting) navLogo.classList.add('show');
  else navLogo.classList.remove('show');
}, {threshold:0.05}).observe(document.getElementById('contact'));