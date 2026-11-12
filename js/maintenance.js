// ==========================================================
// The "Website under maintenance" pop-up. Loaded by the gallery and both
// customize pages; asks the server whether maintenance mode is on (the
// admin panel's switch, see site-settings.js) and covers the page if it is.
//
// The pop-up can't be closed: while it is up nothing behind it can be
// used. It goes away by itself once maintenance is switched off. The site's
// owner, logged in to the admin panel, keeps seeing the site and gets a
// small bar instead, with a way to look at the pop-up.
// ==========================================================
(function () {
  if (window.MWMaintenance) return;

  const STYLE = `
#mwMaint{position:fixed;inset:0;z-index:2147483000;display:grid;place-items:center;padding:20px;
  background:rgba(35,20,70,.62);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);
  font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;animation:mwMaintIn .25s ease-out}
#mwMaint .mw-card{width:min(420px,100%);background:#fff;border-radius:24px;padding:30px 26px 26px;text-align:center;
  box-shadow:0 24px 70px rgba(40,15,90,.35);color:#2a1f47}
#mwMaint .mw-badge{width:64px;height:64px;margin:0 auto 14px;border-radius:20px;display:grid;place-items:center;
  font-size:30px;background:#f3ecff}
#mwMaint h2{margin:0 0 10px;font:700 23px/1.25 Georgia,"Times New Roman",serif;color:#3b1d8a}
#mwMaint p{margin:0;font-size:15.5px;line-height:1.55;color:#4b4263;overflow-wrap:anywhere}
#mwMaint .mw-note{margin-top:14px;padding-top:14px;border-top:1px solid #ece6fa;font-size:13.5px;color:#766c92}
#mwMaint .mw-close{margin-top:18px;border:0;border-radius:999px;padding:11px 22px;font:600 14.5px/1 inherit;
  background:#7c3aed;color:#fff;cursor:pointer}
#mwMaintBar{position:fixed;left:12px;right:12px;bottom:12px;z-index:2147482000;display:flex;align-items:center;gap:10px;flex-wrap:wrap;
  justify-content:center;padding:10px 14px;border-radius:14px;background:#2a1f47;color:#fff;
  font:500 13.5px/1.4 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;box-shadow:0 10px 30px rgba(20,10,50,.35)}
#mwMaintBar button{border:1px solid rgba(255,255,255,.45);background:transparent;color:#fff;border-radius:999px;padding:6px 12px;
  font:600 12.5px/1 inherit;cursor:pointer}
@keyframes mwMaintIn{from{opacity:0}to{opacity:1}}
@media (prefers-reduced-motion: reduce){#mwMaint{animation:none}}
@media (max-width:420px){#mwMaint .mw-card{padding:26px 20px 22px;border-radius:20px}#mwMaint h2{font-size:21px}}
`;

  let overlay = null;
  let bar = null;
  let timer = null;
  let previewing = false;
  let lastMessage = '';
  const hidden = []; // what was made inert behind the pop-up

  function addStyle() {
    if (document.getElementById('mwMaintStyle')) return;
    const el = document.createElement('style');
    el.id = 'mwMaintStyle';
    el.textContent = STYLE;
    document.head.appendChild(el);
  }

  function show(message, closable) {
    addStyle();
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'mwMaint';
      overlay.setAttribute('role', 'alertdialog');
      overlay.setAttribute('aria-modal', 'true');
      overlay.setAttribute('aria-labelledby', 'mwMaintTitle');
      overlay.setAttribute('aria-describedby', 'mwMaintText');
      overlay.innerHTML = '<div class="mw-card" tabindex="-1"><div class="mw-badge" aria-hidden="true">🛠️</div>'
        + '<h2 id="mwMaintTitle">Website under maintenance</h2><p id="mwMaintText"></p>'
        + '<p class="mw-note">Pages that were already shared still open normally.</p></div>';
      document.body.appendChild(overlay);
      // nothing behind the pop-up can be reached by keyboard or screen reader
      for (const el of document.body.children) {
        if (el !== overlay && el !== bar && !el.inert) { el.inert = true; hidden.push(el); }
      }
      document.documentElement.style.overflow = 'hidden';
      overlay.querySelector('.mw-card').focus();
    }
    overlay.querySelector('#mwMaintText').textContent = message;
    const old = overlay.querySelector('.mw-close');
    if (old) old.remove();
    if (closable) {
      const close = document.createElement('button');
      close.type = 'button';
      close.className = 'mw-close';
      close.textContent = 'Close preview';
      close.addEventListener('click', () => { previewing = false; hide(); });
      overlay.querySelector('.mw-card').appendChild(close);
    }
  }

  function hide() {
    if (!overlay) return;
    overlay.remove();
    overlay = null;
    hidden.splice(0).forEach((el) => { el.inert = false; });
    document.documentElement.style.overflow = '';
  }

  // the owner's own reminder that visitors are seeing the pop-up
  function ownerBar(on) {
    if (!on) { if (bar) { bar.remove(); bar = null; } return; }
    if (bar) return;
    addStyle();
    bar = document.createElement('div');
    bar.id = 'mwMaintBar';
    bar.innerHTML = '<span>🛠️ Maintenance mode is ON. Visitors see a pop-up; you still see the site because you are logged in as admin.</span>';
    const see = document.createElement('button');
    see.type = 'button';
    see.textContent = 'See the pop-up';
    see.addEventListener('click', () => { previewing = true; show(lastMessage, true); });
    bar.appendChild(see);
    document.body.appendChild(bar);
  }

  async function check() {
    clearTimeout(timer);
    try {
      const res = await fetch('/api/public/site-status', { cache: 'no-store' });
      if (!res.ok) return;
      const status = await res.json();
      const m = status.maintenance || {};
      lastMessage = m.message || '';
      if (m.on && !status.owner) show(lastMessage, false);
      else if (!previewing) hide();
      ownerBar(!!(m.on && status.owner));
      // while it is on, keep looking so the pop-up goes away by itself
      if (m.on) timer = setTimeout(check, 30000);
    } catch {
      // offline or a hiccup: leave things as they are
    }
  }

  document.addEventListener('visibilitychange', () => { if (!document.hidden) check(); });
  window.MWMaintenance = { check };
  if (document.body) check(); else document.addEventListener('DOMContentLoaded', check);
})();
