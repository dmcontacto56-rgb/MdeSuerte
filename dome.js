(function(){
  var wrap = document.getElementById("dome-campanas");
  if (!wrap) return;

  var IMGS = [
    { src:"https://raw.githubusercontent.com/dmcontacto56-rgb/MdeSuerte/45c944be8298bf43d8517cf94db35ef899fabef4/WhatsApp%20Image%202025-11-12%20at%205.14.28%20PM.jpeg", alt:"WhatsApp%20Image%202" },
    { src:"https://raw.githubusercontent.com/dmcontacto56-rgb/MdeSuerte/36d9ed200b8f0d87776505c8a18317f71b54d266/CAT%C3%81LOGO%20FROMIT_compressed-44.jpg", alt:"CAT%C3%81LOGO%20FROM" },
    { src:"https://raw.githubusercontent.com/dmcontacto56-rgb/MdeSuerte/8596465f5987674330fa93775ec30dc05d5d0e10/480494416_122204684606155638_4959184769512499521_n.jpg", alt:"480494416_1222046846" },
    { src:"https://raw.githubusercontent.com/dmcontacto56-rgb/MdeSuerte/45c944be8298bf43d8517cf94db35ef899fabef4/LETRAS%20Finales.png", alt:"LETRAS%20Finales" },
    { src:"https://raw.githubusercontent.com/dmcontacto56-rgb/MdeSuerte/45c944be8298bf43d8517cf94db35ef899fabef4/WhatsApp%20Image%202025-11-12%20at%205.14.28%20PM(3).jpeg", alt:"WhatsApp%20Image%202" },
    { src:"https://raw.githubusercontent.com/dmcontacto56-rgb/MdeSuerte/45c944be8298bf43d8517cf94db35ef899fabef4/WhatsApp%20Image%202025-11-12%20at%205.14.28%20PM(1).jpeg", alt:"WhatsApp%20Image%202" },
    { src:"https://raw.githubusercontent.com/dmcontacto56-rgb/MdeSuerte/36d9ed200b8f0d87776505c8a18317f71b54d266/CAT%C3%81LOGO%20FROMIT_compressed-316.jpg", alt:"CAT%C3%81LOGO%20FROM" },
    { src:"https://raw.githubusercontent.com/dmcontacto56-rgb/MdeSuerte/45c944be8298bf43d8517cf94db35ef899fabef4/WhatsApp%20Image%202024-09-19%20at%2012.37.52.jpeg", alt:"WhatsApp%20Image%202" },
    { src:"https://raw.githubusercontent.com/dmcontacto56-rgb/MdeSuerte/36d9ed200b8f0d87776505c8a18317f71b54d266/Captura%20de%20pantalla%202024-12-12%20173044.png", alt:"Captura%20de%20panta" },
    { src:"https://raw.githubusercontent.com/dmcontacto56-rgb/MdeSuerte/36d9ed200b8f0d87776505c8a18317f71b54d266/Captura%20de%20pantalla%202024-08-10%20131844.png", alt:"Captura%20de%20panta" },
    { src:"https://raw.githubusercontent.com/dmcontacto56-rgb/MdeSuerte/45c944be8298bf43d8517cf94db35ef899fabef4/Recurso%202%403x.png", alt:"Recurso%202%403x" },
    { src:"https://raw.githubusercontent.com/dmcontacto56-rgb/MdeSuerte/45c944be8298bf43d8517cf94db35ef899fabef4/Ideen-Plus-1-abr-2025-22-may-2025.png", alt:"Ideen-Plus-1-abr-202" },
    { src:"https://raw.githubusercontent.com/dmcontacto56-rgb/MdeSuerte/45c944be8298bf43d8517cf94db35ef899fabef4/Recurso%201%403x.png", alt:"Recurso%201%403x" },
    { src:"https://raw.githubusercontent.com/dmcontacto56-rgb/MdeSuerte/8596465f5987674330fa93775ec30dc05d5d0e10/481665096_122206646270155638_7506463479312409191_n.jpg", alt:"481665096_1222066462" },
    { src:"https://raw.githubusercontent.com/dmcontacto56-rgb/MdeSuerte/8596465f5987674330fa93775ec30dc05d5d0e10/70d0bb9c-78b6-4129-bfde-9646dc0c7074.jpg", alt:"70d0bb9c-78b6-4129-b" },
    { src:"https://raw.githubusercontent.com/dmcontacto56-rgb/MdeSuerte/8596465f5987674330fa93775ec30dc05d5d0e10/5.png", alt:"5" },
    { src:"https://raw.githubusercontent.com/dmcontacto56-rgb/MdeSuerte/45c944be8298bf43d8517cf94db35ef899fabef4/WhatsApp%20Image%202024-09-05%20at%2015.58.29.jpeg", alt:"WhatsApp%20Image%202" },
    { src:"https://raw.githubusercontent.com/dmcontacto56-rgb/MdeSuerte/36d9ed200b8f0d87776505c8a18317f71b54d266/IMG20240320180954.jpg", alt:"IMG20240320180954" },
    { src:"https://raw.githubusercontent.com/dmcontacto56-rgb/MdeSuerte/36d9ed200b8f0d87776505c8a18317f71b54d266/CAT%C3%81LOGO%20FROMIT_compressed-670.jpg", alt:"CAT%C3%81LOGO%20FROM" },
    { src:"https://raw.githubusercontent.com/dmcontacto56-rgb/MdeSuerte/36d9ed200b8f0d87776505c8a18317f71b54d266/Captura%20de%20pantalla%202024-08-10%20113601.png", alt:"Captura%20de%20panta" },
    { src:"https://raw.githubusercontent.com/dmcontacto56-rgb/MdeSuerte/45c944be8298bf43d8517cf94db35ef899fabef4/lovely1.jpg", alt:"lovely1" },
    { src:"https://raw.githubusercontent.com/dmcontacto56-rgb/MdeSuerte/45c944be8298bf43d8517cf94db35ef899fabef4/WhatsApp%20Image%202024-09-21%20at%2013.31.18.jpeg", alt:"WhatsApp%20Image%202" },
    { src:"https://raw.githubusercontent.com/dmcontacto56-rgb/MdeSuerte/36d9ed200b8f0d87776505c8a18317f71b54d266/Captura%20de%20pantalla%202024-08-08%20170032.png", alt:"Captura%20de%20panta" },
    { src:"https://raw.githubusercontent.com/dmcontacto56-rgb/MdeSuerte/8596465f5987674330fa93775ec30dc05d5d0e10/1.png", alt:"1" },
    { src:"https://raw.githubusercontent.com/dmcontacto56-rgb/MdeSuerte/45c944be8298bf43d8517cf94db35ef899fabef4/WhatsApp%20Image%202024-11-23%20at%2011.56.59.jpeg", alt:"WhatsApp%20Image%202" },
    { src:"https://raw.githubusercontent.com/dmcontacto56-rgb/MdeSuerte/8596465f5987674330fa93775ec30dc05d5d0e10/480596092_122206645802155638_8054174788954857786_n.jpg", alt:"480596092_1222066458" },
    { src:"https://raw.githubusercontent.com/dmcontacto56-rgb/MdeSuerte/8596465f5987674330fa93775ec30dc05d5d0e10/3.png", alt:"3" },
    { src:"https://raw.githubusercontent.com/dmcontacto56-rgb/MdeSuerte/36d9ed200b8f0d87776505c8a18317f71b54d266/Captura%20de%20pantalla%202024-08-09%20164039.png", alt:"Captura%20de%20panta" },
    { src:"https://raw.githubusercontent.com/dmcontacto56-rgb/MdeSuerte/8596465f5987674330fa93775ec30dc05d5d0e10/480442154_122203198406155638_6286351663400314554_n.jpg", alt:"480442154_1222031984" },
    { src:"https://raw.githubusercontent.com/dmcontacto56-rgb/MdeSuerte/45c944be8298bf43d8517cf94db35ef899fabef4/Recurso%203%403x.png", alt:"Recurso%203%403x" },
    { src:"https://raw.githubusercontent.com/dmcontacto56-rgb/MdeSuerte/36d9ed200b8f0d87776505c8a18317f71b54d266/Captura%20de%20pantalla%202024-07-17%20132015.png", alt:"Captura%20de%20panta" },
    { src:"https://raw.githubusercontent.com/dmcontacto56-rgb/MdeSuerte/45c944be8298bf43d8517cf94db35ef899fabef4/carpeta%202%20CM-4.jpg", alt:"carpeta%202%20CM-4" },
    { src:"https://raw.githubusercontent.com/dmcontacto56-rgb/MdeSuerte/8596465f5987674330fa93775ec30dc05d5d0e10/480096511_122203198778155638_6155624335471257938_n.jpg", alt:"480096511_1222031987" },
    { src:"https://raw.githubusercontent.com/dmcontacto56-rgb/MdeSuerte/8596465f5987674330fa93775ec30dc05d5d0e10/480857715_122206627112155638_3421769648112862345_n.jpg", alt:"480857715_1222066271" },
    { src:"https://raw.githubusercontent.com/dmcontacto56-rgb/MdeSuerte/45c944be8298bf43d8517cf94db35ef899fabef4/rhurbar%202.jpg", alt:"rhurbar%202" },
    { src:"https://raw.githubusercontent.com/dmcontacto56-rgb/MdeSuerte/45c944be8298bf43d8517cf94db35ef899fabef4/nvwiy1gvxcm9gypo1kn5.jpg", alt:"nvwiy1gvxcm9gypo1kn5" },
    { src:"https://raw.githubusercontent.com/dmcontacto56-rgb/MdeSuerte/45c944be8298bf43d8517cf94db35ef899fabef4/Ideen%20KPI%20insta.png", alt:"Ideen%20KPI%20insta" },
    { src:"https://raw.githubusercontent.com/dmcontacto56-rgb/MdeSuerte/45c944be8298bf43d8517cf94db35ef899fabef4/rhurbar%202.3.jpg", alt:"rhurbar%202" },
    { src:"https://raw.githubusercontent.com/dmcontacto56-rgb/MdeSuerte/8596465f5987674330fa93775ec30dc05d5d0e10/2%20(2).png", alt:"2%20(2)" },
    { src:"https://raw.githubusercontent.com/dmcontacto56-rgb/MdeSuerte/8596465f5987674330fa93775ec30dc05d5d0e10/1141dbfd-c5cf-49bc-af70-99218baeb05b.jpg", alt:"1141dbfd-c5cf-49bc-a" },
    { src:"https://raw.githubusercontent.com/dmcontacto56-rgb/MdeSuerte/8596465f5987674330fa93775ec30dc05d5d0e10/1.1.1.png", alt:"1" },
    { src:"https://raw.githubusercontent.com/dmcontacto56-rgb/MdeSuerte/45c944be8298bf43d8517cf94db35ef899fabef4/Recurso%2011%403x.png", alt:"Recurso%2011%403x" },
    { src:"https://raw.githubusercontent.com/dmcontacto56-rgb/MdeSuerte/8596465f5987674330fa93775ec30dc05d5d0e10/22.png", alt:"22" },
    { src:"https://raw.githubusercontent.com/dmcontacto56-rgb/MdeSuerte/8596465f5987674330fa93775ec30dc05d5d0e10/12.png", alt:"12" },
    { src:"https://raw.githubusercontent.com/dmcontacto56-rgb/MdeSuerte/45c944be8298bf43d8517cf94db35ef899fabef4/ea99684d-2adf-4251-9b67-080cf931a16d.jpg", alt:"ea99684d-2adf-4251-9" },
    { src:"https://raw.githubusercontent.com/dmcontacto56-rgb/MdeSuerte/45c944be8298bf43d8517cf94db35ef899fabef4/IMG_0855.jpg", alt:"IMG_0855" },
    { src:"https://raw.githubusercontent.com/dmcontacto56-rgb/MdeSuerte/45c944be8298bf43d8517cf94db35ef899fabef4/Recurso%204%403x.png", alt:"Recurso%204%403x" },
    { src:"https://raw.githubusercontent.com/dmcontacto56-rgb/MdeSuerte/36d9ed200b8f0d87776505c8a18317f71b54d266/CAT%C3%81LOGO%20FROMIT_compressed-1.jpg", alt:"CAT%C3%81LOGO%20FROM" },
    { src:"https://raw.githubusercontent.com/dmcontacto56-rgb/MdeSuerte/45c944be8298bf43d8517cf94db35ef899fabef4/Recurso%2012%403x.png", alt:"Recurso%2012%403x" },
    { src:"https://raw.githubusercontent.com/dmcontacto56-rgb/MdeSuerte/8596465f5987674330fa93775ec30dc05d5d0e10/18.png", alt:"18" },
    { src:"https://raw.githubusercontent.com/dmcontacto56-rgb/MdeSuerte/45c944be8298bf43d8517cf94db35ef899fabef4/despu%C3%A9s%20de%20los%2040's.png", alt:"despu%C3%A9s%20de%20" },
    { src:"https://raw.githubusercontent.com/dmcontacto56-rgb/MdeSuerte/36d9ed200b8f0d87776505c8a18317f71b54d266/CAT%C3%81LOGO%20FROMIT_compressed-239.jpg", alt:"CAT%C3%81LOGO%20FROM" },
    { src:"https://raw.githubusercontent.com/dmcontacto56-rgb/MdeSuerte/8596465f5987674330fa93775ec30dc05d5d0e10/2.png", alt:"2" },
    { src:"https://raw.githubusercontent.com/dmcontacto56-rgb/MdeSuerte/8596465f5987674330fa93775ec30dc05d5d0e10/21.png", alt:"21" },
  ];

  var SEG   = 24;
  var R     = 480;
  var TW    = 100;
  var TH    = 100;
  var SENS  = 0.08;
  var MAX_X = 12;

  /* BUILD DOM */
  var inner  = document.createElement("div"); inner.className  = "dg-wrap-inner";
  var stage  = document.createElement("div"); stage.className  = "dg-stage";
  var sphere = document.createElement("div"); sphere.className = "dg-sphere";
  var scrim  = document.createElement("div"); scrim.className  = "dg-scrim";
  var hint   = document.createElement("div"); hint.className   = "dg-hint";
  hint.textContent = "Arrastra · Doble click para ampliar";

  var ov = document.createElement("div"); ov.className = "dg-overlay-radial";
  var ft = document.createElement("div"); ft.className = "dg-fade-top";
  var fb = document.createElement("div"); fb.className = "dg-fade-bot";

  stage.appendChild(sphere);
  inner.appendChild(stage);
  inner.appendChild(ov);
  inner.appendChild(ft);
  inner.appendChild(fb);
  inner.appendChild(hint);
  inner.appendChild(scrim);
  wrap.appendChild(inner);

  /* TILES */
  var unit = 360 / SEG;
  var tiles = [];
  var tileData = []; // ← FIX: declarado ANTES del loop para que esté disponible
  var ii = 0;

  for (var c = 0; c < SEG; c++) {
    var rows = (c % 2 === 0) ? [-16,-8,0,8,16] : [-12,-4,4,12,20];
    var ry = c * unit;
    rows.forEach(function(rx) {
      var item = document.createElement("div"); item.className = "dg-item";
      item.style.transform = "rotateY("+ry+"deg) rotateX("+(-rx)+"deg) translateZ("+R+"px)";
      item.style.zIndex = Math.round(50 - Math.abs(rx));
      var tile = document.createElement("div"); tile.className = "dg-tile";
      var gap = 6;
      tile.style.width  = (TW - gap)+"px";
      tile.style.height = (TH - gap)+"px";
      tile.style.left   = (-(TW-gap)/2)+"px";
      tile.style.top    = (-(TH-gap)/2)+"px";
      var imgData = IMGS[ii % IMGS.length];
      var img = document.createElement("img");
      img.src = imgData.src; img.alt = imgData.alt; img.draggable = false;
      tile.appendChild(img);
      item.appendChild(tile);
      sphere.appendChild(item);
      tiles.push({ tile:tile, src:imgData.src });
      tileData.push({ item:item, ry:ry, rx:(-rx) });
      ii++;
    });
  }

  /* ROTATION */
  var rotX = 0, rotY = 0;

  function applyT() {
    sphere.style.transform = "rotateX("+rotX+"deg) rotateY("+rotY+"deg)";
    // Depth sort: reorder DOM so back tiles are first (painter's algorithm)
    var ryRad = rotY * Math.PI / 180;
    var rxRad = rotX * Math.PI / 180;
    tileData.sort(function(a, b) {
      // z = cos(item_ry + sphere_ry) * cos(item_rx + sphere_rx)
      // lower z = further back = render first
      var za = Math.sin(a.ry * Math.PI/180 + ryRad) * Math.cos(a.rx * Math.PI/180 + rxRad);
      var zb = Math.sin(b.ry * Math.PI/180 + ryRad) * Math.cos(b.rx * Math.PI/180 + rxRad);
      return za - zb; // back to front
    });
    tileData.forEach(function(d) { sphere.appendChild(d.item); });
  }
  applyT();

  /* ── IDLE DRIFT — gentle random motion when not dragging ── */
  var idleVx = 0.04, idleVy = 0.008;
  var idleTargetVx = 0.04, idleTargetVy = 0.008;
  var idleTimer = 0;
  var idleRAF = null;
  function idleTick() {
    idleTimer++;
    if (idleTimer % 300 === 0) {
      idleTargetVx = (Math.random() * 0.10 + 0.02) * (Math.random() < 0.15 ? -1 : 1);
      idleTargetVy = (Math.random() * 0.015 - 0.007);
    }
    idleVx += (idleTargetVx - idleVx) * 0.005;
    idleVy += (idleTargetVy - idleVy) * 0.005;
    if (!dragging && !iRAF) {
      rotY += idleVx;
      rotX = Math.max(-MAX_X, Math.min(MAX_X, rotX + idleVy));
      applyT();
    }
    idleRAF = requestAnimationFrame(idleTick);
  }
  idleRAF = requestAnimationFrame(idleTick);

  /* INERTIA */
  var iRAF = null;
  function stopInertia() { if (iRAF) { cancelAnimationFrame(iRAF); iRAF = null; } }
  function startInertia(vx, vy) {
    stopInertia();
    var friction = 0.97;
    function step() {
      vx *= friction; vy *= friction;
      if (Math.abs(vx) < 0.003 && Math.abs(vy) < 0.003) { iRAF = null; return; }
      rotY += vx;
      rotX = Math.max(-MAX_X, Math.min(MAX_X, rotX - vy));
      applyT();
      iRAF = requestAnimationFrame(step);
    }
    iRAF = requestAnimationFrame(step);
  }

  /* DRAG */
  var dragging = false, moved = false;
  var sx = 0, sy = 0, srX = 0, srY = 0;
  var lastDragEnd = 0;
  var velSamples = [], lastMoveTime = 0, lastMoveX = 0, lastMoveY = 0;

  function onDown(cx, cy) {
    stopInertia();
    dragging = true; moved = false;
    sx = cx; sy = cy; srX = rotX; srY = rotY;
    velSamples = []; lastMoveX = cx; lastMoveY = cy; lastMoveTime = performance.now();
  }
  function onMove(cx, cy) {
    if (!dragging) return;
    var dx = cx - sx, dy = cy - sy;
    if (!moved && dx*dx + dy*dy > 16) moved = true;
    rotY = srY + dx * SENS;
    rotX = Math.max(-MAX_X, Math.min(MAX_X, srX - dy * SENS));
    applyT();
    var now = performance.now(), dt = now - lastMoveTime;
    if (dt > 0) {
      velSamples.push({ vx:(cx-lastMoveX)*SENS/dt*16, vy:(cy-lastMoveY)*SENS/dt*16, t:now });
      if (velSamples.length > 5) velSamples.shift();
    }
    lastMoveX = cx; lastMoveY = cy; lastMoveTime = performance.now();
  }
  function onUp() {
    if (!dragging) return;
    dragging = false;
    if (moved) {
      lastDragEnd = performance.now();
      var cutoff = performance.now() - 80;
      var recent = velSamples.filter(function(s){ return s.t > cutoff; });
      if (recent.length > 0) {
        var avgVx = recent.reduce(function(a,s){ return a+s.vx; },0) / recent.length;
        var avgVy = recent.reduce(function(a,s){ return a+s.vy; },0) / recent.length;
        startInertia(avgVx, avgVy);
      }
    }
    moved = false;
  }

  stage.addEventListener("mousedown",   function(e){ onDown(e.clientX, e.clientY); });
  document.addEventListener("mousemove",function(e){ onMove(e.clientX, e.clientY); });
  document.addEventListener("mouseup",  function()  { onUp(); });
  stage.addEventListener("touchstart",  function(e){ var t=e.touches[0]; onDown(t.clientX,t.clientY); },{passive:true});
  stage.addEventListener("touchmove",   function(e){ var t=e.touches[0]; onMove(t.clientX,t.clientY); },{passive:true});
  stage.addEventListener("touchend",    function()  { onUp(); });

  /* LIGHTBOX */
  var lb = null, lbOpen = false, lbAt = 0;

  function openLightbox(tile, src) {
    if (lbOpen) return;
    lbOpen = true; lbAt = performance.now();
    var r  = tile.getBoundingClientRect();
    var wr = inner.getBoundingClientRect();
    lb = document.createElement("div"); lb.className = "dg-lightbox";
    var img = document.createElement("img");
    img.style.cssText = "display:block;max-width:100%;max-height:100%;object-fit:contain;";
    lb.appendChild(img);
    lb.style.left       = (r.left - wr.left)+"px";
    lb.style.top        = (r.top  - wr.top )+"px";
    lb.style.width      = r.width +"px";
    lb.style.height     = r.height+"px";
    lb.style.opacity    = "0";
    lb.style.background = "transparent";
    lb.style.minWidth   = "0";
    lb.style.minHeight  = "0";
    inner.appendChild(lb);
    scrim.classList.add("on");
    tile.style.visibility = "hidden";
    lb._tile = tile;
    img.onload = function() {
      var natW = img.naturalWidth  || 600;
      var natH = img.naturalHeight || 600;
      var maxW = wr.width  * 0.92;
      var maxH = wr.height * 0.92;
      var scale = Math.min(1, maxW / natW, maxH / natH);
      var fw = Math.round(natW * scale);
      var fh = Math.round(natH * scale);
      lb.style.transition = "left .35s cubic-bezier(.23,1,.32,1), top .35s cubic-bezier(.23,1,.32,1), width .35s cubic-bezier(.23,1,.32,1), height .35s cubic-bezier(.23,1,.32,1), opacity .3s ease";
      lb.style.left    = ((wr.width  - fw) / 2)+"px";
      lb.style.top     = ((wr.height - fh) / 2)+"px";
      lb.style.width   = fw+"px";
      lb.style.height  = fh+"px";
      lb.style.opacity = "1";
    };
    img.src = src;
  }

  function closeLightbox() {
    if (!lbOpen || !lb) return;
    if (performance.now() - lbAt < 300) return;
    lb.style.opacity = "0";
    scrim.classList.remove("on");
    if (lb._tile) lb._tile.style.visibility = "";
    var _lb = lb; lb = null; lbOpen = false;
    setTimeout(function(){ if(_lb) _lb.remove(); }, 300);
  }

  scrim.addEventListener("click", closeLightbox);
  document.addEventListener("keydown", function(e){ if(e.key==="Escape") closeLightbox(); });

  tiles.forEach(function(t) {
    t.tile.addEventListener("dblclick", function() {
      if (moved) return;
      openLightbox(t.tile, t.src);
    });
    var lastTap = 0;
    t.tile.addEventListener("touchend", function(e) {
      var now = performance.now();
      if (now - lastTap < 300) { e.preventDefault(); if (!moved) openLightbox(t.tile, t.src); }
      lastTap = now;
    }, {passive:false});
  });

})();
