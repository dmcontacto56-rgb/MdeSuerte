/* weather-widget.js — Widget flotante del clima + Dashboard overlay */
(function () {
  const widget   = document.getElementById('weather-widget');
  const overlay  = document.getElementById('dash-overlay');
  const backdrop = document.getElementById('dash-backdrop');
  const closeBtn = document.getElementById('dash-close');
  const arrow    = widget.querySelector('.w-arrow svg');

  function openDash() {
    overlay.classList.add('open');
    backdrop.classList.add('open');
    arrow.style.transform = 'rotate(180deg)';
    document.body.style.overflow = 'hidden';
  }

  function closeDash() {
    overlay.classList.remove('open');
    backdrop.classList.remove('open');
    arrow.style.transform = '';
    document.body.style.overflow = '';
  }

  widget.addEventListener('click', openDash);
  widget.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') openDash();
  });
  closeBtn.addEventListener('click', closeDash);
  backdrop.addEventListener('click', closeDash);

  /* Swipe-down para cerrar en móvil */
  let startY = 0;
  const sheet = document.getElementById('dash-sheet');
  sheet.addEventListener('touchstart', e => {
    startY = e.touches[0].clientY;
  }, { passive: true });
  sheet.addEventListener('touchend', e => {
    if (e.changedTouches[0].clientY - startY > 60) closeDash();
  }, { passive: true });
})();
