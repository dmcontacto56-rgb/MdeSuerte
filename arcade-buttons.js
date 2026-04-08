/* ══ ARCADE BUTTONS — WhatsApp + CV ══════════════════════════════════════
   Requires: Boton_verde.png, Boton_azul.png in same folder
   Sounds:   money-soundfx.mp3, mac-quack.mp3 in same folder
   ══════════════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ── Audio helper ── */
  function playSound(src) {
    const a = new Audio(src);
    a.volume = 0.7;
    a.currentTime = 0;
    a.play().catch(() => {});
  }

  /* ── Press animation ── */
  function pressBtn(mount) {
    mount.classList.add('btn-pressed');
    setTimeout(() => mount.classList.remove('btn-pressed'), 180);
  }

  /* ── Attach events to a button ── */
  function initArcadeBtn(id, soundSrc, action) {
    const btn = document.getElementById(id);
    if (!btn) return;
    const mount = btn.querySelector('.arcade-mount');

    function trigger(e) {
      e.preventDefault();
      playSound(soundSrc);
      pressBtn(mount);
      setTimeout(action, 160); // small delay — feels like a real press
    }

    btn.addEventListener('click', trigger);
    btn.addEventListener('touchend', trigger, { passive: false });

    /* Keyboard: Enter/Space */
    btn.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') trigger(e);
    });
  }

  /* ── Init both buttons on DOM ready ── */
  function init() {
    /* WhatsApp — green */
    initArcadeBtn('btn-whatsapp', 'money-soundfx.mp3', () => {
      window.open('https://wa.me/5215629894842', '_blank', 'noopener');
    });

    /* CV — blue */
    initArcadeBtn('btn-cv', 'mac-quack.mp3', () => {
      window.open(
        'https://drive.google.com/file/d/1OAXlB97fISuBqANuq-OJSabIn_iJLCgi/view?usp=sharing',
        '_blank', 'noopener'
      );
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
