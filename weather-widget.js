/* ── Weather Widget + Dashboard Overlay ── */

#weather-widget {
  position: fixed;
  bottom: 28px;
  right: 24px;
  z-index: 100;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 11px 18px 11px 13px;
  background: rgba(6, 8, 18, 0.82);
  border: 1.5px solid rgba(0,255,224,0.5);
  border-radius: 50px;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  cursor: pointer;
  transition: border-color 0.3s, box-shadow 0.3s, transform 0.18s;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  user-select: none;
  /* Pulse llamativo — crece y brilla cada 2.5s */
  animation: widget-invite 2.5s ease-in-out infinite;
  box-shadow:
    0 0 0 0 rgba(0,255,224,0),
    0 6px 28px rgba(0,0,0,0.6),
    inset 0 1px 0 rgba(255,255,255,0.07);
}

@keyframes widget-invite {
  0%,100% {
    box-shadow:
      0 0 0 0 rgba(0,255,224,0),
      0 6px 28px rgba(0,0,0,0.6),
      inset 0 1px 0 rgba(255,255,255,0.07);
    border-color: rgba(0,255,224,0.45);
  }
  35% {
    box-shadow:
      0 0 0 7px rgba(0,255,224,0.09),
      0 6px 32px rgba(0,0,0,0.65),
      inset 0 1px 0 rgba(255,255,255,0.07),
      0 0 22px rgba(0,255,224,0.25);
    border-color: rgba(0,255,224,0.8);
  }
  60% {
    box-shadow:
      0 0 0 13px rgba(0,255,224,0.04),
      0 6px 36px rgba(0,0,0,0.65),
      inset 0 1px 0 rgba(255,255,255,0.07),
      0 0 30px rgba(0,255,224,0.15);
    border-color: rgba(0,255,224,0.6);
  }
}

#weather-widget:hover {
  border-color: rgba(0,255,224,1) !important;
  box-shadow:
    0 0 0 0 rgba(0,255,224,0),
    0 6px 40px rgba(0,0,0,0.7),
    0 0 36px rgba(0,255,224,0.3),
    inset 0 1px 0 rgba(255,255,255,0.1) !important;
  background: rgba(0,20,16,0.88);
  transform: translateY(-1px);
  animation: none;
}

#weather-widget:active { transform: scale(0.95) translateY(0); }

/* Etiqueta "TAP" parpadeante que incita al click */
.w-tap-hint {
  position: absolute;
  top: -22px;
  right: 0;
  font-family: 'Courier New', monospace;
  font-size: 8px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: rgba(0,255,224,0.7);
  background: rgba(0,255,224,0.08);
  border: 1px solid rgba(0,255,224,0.2);
  border-radius: 10px;
  padding: 2px 7px;
  pointer-events: none;
  animation: tap-blink 2.5s ease-in-out infinite;
  white-space: nowrap;
}
@keyframes tap-blink {
  0%,100% { opacity:0.7; }
  50% { opacity:0.15; }
}

/* Flecha animada que apunta hacia abajo→arriba */
.w-arrow {
  width: 22px;
  height: 22px;
  border: 1.5px solid rgba(0,255,224,0.45);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 2px;
  flex-shrink: 0;
  transition: background 0.25s, border-color 0.25s;
  animation: arrow-pop 2.5s ease-in-out infinite;
}
@keyframes arrow-pop {
  0%,100% { transform:scale(1); }
  35%      { transform:scale(1.18); }
  60%      { transform:scale(1.08); }
}

#weather-widget:hover .w-arrow {
  background: rgba(0,255,224,0.18);
  border-color: rgba(0,255,224,0.9);
  animation: none;
}

.w-arrow svg {
  width: 10px; height: 10px;
  fill: none;
  stroke: #00ffe0;
  stroke-width: 2.2;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: transform 0.3s;
  filter: drop-shadow(0 0 4px rgba(0,255,224,0.8));
}

/* Cloud icon */
.w-icon {
  width: 38px;
  height: 38px;
  position: relative;
  flex-shrink: 0;
}
.w-icon svg { width: 100%; height: 100%; }
.w-icon .drop {
  position: absolute;
  width: 2px;
  border-radius: 2px;
  background: #00ffe0;
  opacity: 0.7;
  animation: wdrop-fall linear infinite;
  box-shadow: 0 0 4px rgba(0,255,224,0.6);
}
.w-icon .drop:nth-child(2) { left: 10px; height: 6px; animation-duration: 0.9s; animation-delay: 0s; }
.w-icon .drop:nth-child(3) { left: 17px; height: 8px; animation-duration: 1.1s; animation-delay: 0.2s; }
.w-icon .drop:nth-child(4) { left: 24px; height: 6px; animation-duration: 0.95s; animation-delay: 0.4s; }
@keyframes wdrop-fall {
  0%   { top: 22px; opacity: 0.8; }
  100% { top: 38px; opacity: 0; }
}

.w-info {
  display: flex;
  flex-direction: column;
  gap: 1px;
  line-height: 1;
}

.w-temp {
  font-family: 'Courier New', monospace;
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  letter-spacing: -0.5px;
  text-shadow: 0 0 12px rgba(255,255,255,0.25);
}

.w-cond {
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.4);
}

.w-badge {
  position: absolute;
  top: -7px; right: -7px;
  background: linear-gradient(135deg, rgba(255,107,53,1), rgba(255,60,20,0.9));
  color: #fff;
  font-family: 'Courier New', monospace;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.05em;
  padding: 2px 6px;
  border-radius: 20px;
  white-space: nowrap;
  border: 1.5px solid rgba(255,255,255,0.2);
  pointer-events: none;
  box-shadow: 0 0 12px rgba(255,80,0,0.5);
  animation: badge-pulse 2.5s ease-in-out infinite;
}
@keyframes badge-pulse {
  0%,100% { box-shadow: 0 0 8px rgba(255,80,0,0.4); }
  50%      { box-shadow: 0 0 18px rgba(255,80,0,0.7); }
}

/* ── Backdrop ── */
#dash-backdrop {
  position: fixed;
  inset: 0;
  z-index: 199;
  background: rgba(0,0,0,0);
  pointer-events: none;
  transition: background 0.4s ease;
}
#dash-backdrop.open {
  background: rgba(0,0,0,0.65);
  pointer-events: all;
}

/* ── Dashboard Overlay ── */
#dash-overlay {
  position: fixed;
  inset: 0;
  z-index: 200;
  pointer-events: none;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

#dash-sheet {
  width: 100%;
  height: 90vh;
  background: #0a0d14;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  overflow: hidden;
  transform: translateY(110%);
  transition: transform 0.52s cubic-bezier(0.32, 0.72, 0, 1);
  box-shadow: 0 -8px 48px rgba(0,0,0,0.7), 0 -1px 0 rgba(0,255,224,0.2);
  display: flex;
  flex-direction: column;
  pointer-events: none;
}

#dash-overlay.open { pointer-events: all; }
#dash-overlay.open #dash-sheet {
  transform: translateY(0);
  pointer-events: all;
}

.sheet-handle {
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 20px 12px;
  flex-shrink: 0;
  border-bottom: 1px solid rgba(0,255,224,0.1);
  background: #0a0d14;
}

.handle-bar {
  width: 36px; height: 4px;
  border-radius: 4px;
  background: rgba(255,255,255,0.15);
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 8px;
}

.sheet-title {
  font-family: 'Courier New', monospace;
  font-size: 11px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #00ffe0;
}

.sheet-close {
  width: 28px; height: 28px;
  border-radius: 50%;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.12);
  color: rgba(255,255,255,0.6);
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  -webkit-tap-highlight-color: transparent;
  line-height: 1;
}
.sheet-close:hover { background: rgba(255,255,255,0.14); color: #fff; }

#dash-frame {
  flex: 1;
  width: 100%;
  border: none;
  display: block;
  overflow-y: auto;
}

#dash-sheet {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
#dash-sheet::-webkit-scrollbar { display: none; }

/* ── Desktop: panel lateral ── */
@media (min-width: 640px) {
  #dash-overlay {
    align-items: stretch;
    justify-content: flex-end;
  }
  #dash-sheet {
    width: min(680px, 60vw);
    height: 100%;
    border-radius: 0;
    border-left: 1px solid rgba(0,255,224,0.15);
    transform: translateX(110%);
    box-shadow: -8px 0 48px rgba(0,0,0,0.7);
    transition: transform 0.52s cubic-bezier(0.32, 0.72, 0, 1);
    overflow-y: auto;
  }
  #dash-overlay.open #dash-sheet { transform: translateX(0); }
  .handle-bar { display: none; }
  #dash-frame { overflow-y: auto; }
}

/* ── Mobile adjustments ── */
@media (max-width: 640px) {
  #weather-widget {
    bottom: auto !important;
    right: auto !important;
    left: 12px;
    padding: 8px 13px 8px 9px;
    gap: 7px;
  }
  .w-temp { font-size: 15px; }
  .w-cond { display: none; }
  .w-badge { font-size: 8px; top: -5px; right: -5px; }
  .w-tap-hint { display: none; }
}

@media (max-width: 639px) {
  #dash-sheet {
    height: 96vh;
    max-height: none;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
  }
}
