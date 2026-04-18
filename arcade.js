/* ── ARCADE BUTTONS JS ── */
(function(){
  function playSound(src){
    try { const a=new Audio(src); a.volume=0.7; a.currentTime=0; a.play().catch(()=>{}); } catch(e){}
  }
  function initBtn(id, sound, action){
    const el  = document.getElementById(id);
    if(!el) return;
    const img = el.querySelector('.arcade-img');
    function trigger(e){
      e.preventDefault();
      el.classList.add('pressed');
      if(img) img.src = img.dataset.on;
      playSound(sound);
      setTimeout(()=>{
        el.classList.remove('pressed');
        if(img) img.src = img.dataset.off;
        setTimeout(action, 80);
      }, 220);
    }
    el.addEventListener('click', trigger);
    el.addEventListener('touchend', trigger, {passive:false});
    el.setAttribute('tabindex','0');
    el.setAttribute('role','button');
    el.addEventListener('keydown', e=>{ if(e.key==='Enter'||e.key===' ') trigger(e); });
  }
  initBtn('btn-whatsapp','money-soundfx.mp3',()=>{
    window.open('https://wa.me/5215629894842','_blank','noopener');
  });
  initBtn('btn-cv','mac-quack.mp3',()=>{
    window.open('https://drive.google.com/file/d/1OAXlB97fISuBqANuq-OJSabIn_iJLCgi/view?usp=sharing','_blank','noopener');
  });
})();