let ALL_TEMPLATES = [];
let CATEGORIES = [];
let COPY = {}; // heading / sub-line / tab title per category key ('' = all), from the server
let activeCategory = ''; // '' = All
let searchQuery = '';

const galleryEl = document.getElementById('gallery');
const pillsEl = document.getElementById('categoryPills');
const categoryNavEl = document.getElementById('categoryNav');
const searchInput = document.getElementById('searchInput');
const searchClearBtn = document.getElementById('searchClear');
const resultCountEl = document.getElementById('resultCount');
const noResultsEl = document.getElementById('noResults');
const heroShowcaseEl = document.getElementById('heroShowcase');
const browseEl = document.getElementById('templates');
const topbarEl = document.getElementById('topbar');

// One id per browser (not per tab, unlike customize.js's previewId) so the
// admin panel's Preview Activity view can tell "same visitor looked at 3
// templates" from "3 different visitors" — purely a local label, never
// tied to anything personally identifying.
function getVisitorId() {
  try {
    let id = localStorage.getItem('visitorId');
    if (!id) {
      id = (crypto.randomUUID ? crypto.randomUUID() : String(Date.now()) + Math.random().toString(16).slice(2));
      localStorage.setItem('visitorId', id);
    }
    return id;
  } catch {
    return 'unknown'; // private-browsing / storage blocked — harmless no-op
  }
}

// Delegated so it covers every "Preview" link rendered now or re-rendered
// later (search/filter re-renders the whole gallery). Doesn't block or
// delay the actual navigation — target="_blank" already opens a new tab,
// this just fires alongside it.
document.addEventListener('click', (e) => {
  const link = e.target.closest('[data-preview-slug]');
  if (!link) return;
  fetch('/api/public/preview-click', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ slug: link.dataset.previewSlug, visitorId: getVisitorId() }),
  }).catch(() => {});
});

// a click on one of the maker's apps in the footer, for the admin panel's count
document.addEventListener('click', (e) => {
  const app = e.target.closest('.foot-apps [data-app]');
  if (!app) return;
  fetch('/api/public/track', {
    method: 'POST', keepalive: true,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ type: 'appclick', slug: app.dataset.app, tag: 'meow-footer' }),
  }).catch(() => {});
});

// category key straight out of the URL, e.g. /category/birthday -> "birthday"
function categoryFromPath() {
  const m = location.pathname.match(/^\/category\/([a-z0-9-]+)\/?$/i);
  return m ? m[1] : '';
}

// The server puts the template list inside the page (and has already drawn
// the cards), so normally there is nothing to fetch. The two requests are
// the fallback for when the page arrives without that.
function embeddedData() {
  try { return JSON.parse(document.getElementById('mwData').textContent); } catch { return null; }
}

async function loadGallery() {
  try {
    const data = embeddedData();
    if (data && Array.isArray(data.templates)) {
      ALL_TEMPLATES = data.templates;
      CATEGORIES = data.categories || [];
      COPY = data.copy || {};
    } else {
      const [templatesRes, categoriesRes] = await Promise.all([
        fetch('/api/public/templates'),
        fetch('/api/public/categories'),
      ]);
      if (!templatesRes.ok) throw new Error('failed to load templates (' + templatesRes.status + ')');
      ALL_TEMPLATES = await templatesRes.json();
      CATEGORIES = categoriesRes.ok ? await categoriesRes.json() : [];
    }

    activeCategory = categoryFromPath();
    renderPills();
    if (activeCategory) syncPills();
    renderGallery();
    renderHeroShowcase();
  } catch (e) {
    galleryEl.innerHTML = `<p class="muted" style="color:#dc2626">${escapeHtml(e.message)}</p>`;
  }
}

// "trending" / "recommended" are flags, not real categories — but they
// browse exactly like one (their own chip + their own /category/<key> URL),
// so they're handled as special pseudo-category keys throughout.
const SPECIAL_PILLS = MWCard.SPECIAL_PILLS;

function categoryByKey(key) {
  return CATEGORIES.find((c) => c.key === key);
}

function renderPills() {
  const known = new Set([...CATEGORIES.map((c) => c.key), ...SPECIAL_PILLS.map((p) => p.key)]);
  // if the URL points at a category with zero visible templates, fall back
  // to "All" rather than showing a pill row with nothing selected
  if (activeCategory && !known.has(activeCategory)) activeCategory = '';

  pillsEl.innerHTML = MWCard.pillsHtml(ALL_TEMPLATES, CATEGORIES, activeCategory);
}

// The chips are real links (each category has its own address). A plain
// tap switches in place without reloading; anything that means "open it
// somewhere else" — ctrl/cmd/shift click, middle click — is left alone.
pillsEl.addEventListener('click', (e) => {
  const pill = e.target.closest('a.pill');
  if (!pill || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
  e.preventDefault();
  selectCategory(pill.dataset.category);
});

// Heading, sub-line and tab title follow the chosen category.
function updateHeading() {
  const copy = COPY[activeCategory] || COPY[''];
  if (!copy) return;
  document.getElementById('browseTitle').textContent = copy.heading;
  document.getElementById('browseSub').textContent = copy.sub;
  document.title = copy.title;
}

function syncPills() {
  pillsEl.querySelectorAll('.pill').forEach((p) => {
    const on = p.dataset.category === activeCategory;
    p.classList.toggle('active', on);
    if (on) p.setAttribute('aria-current', 'page'); else p.removeAttribute('aria-current');
    // on a phone the chip row scrolls sideways; keep the chosen one in view
    if (on) {
      const target = p.offsetLeft - (categoryNavEl.clientWidth - p.offsetWidth) / 2;
      categoryNavEl.scrollTo({ left: Math.max(0, target), behavior: prefersReduced ? 'auto' : 'smooth' });
    }
  });
}

// After a filter change from far down the page, bring the start of the
// results back into view instead of leaving the visitor mid-list.
function scrollToResults() {
  const top = browseEl.getBoundingClientRect().top;
  if (top < -40) browseEl.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth', block: 'start' });
}

function selectCategory(key, { push = true } = {}) {
  if (key === activeCategory) return;
  activeCategory = key;
  if (push) history.pushState({ category: key }, '', key ? `/category/${key}` : '/');
  syncPills();
  updateHeading();
  renderGallery();
  scrollToResults();
}

window.addEventListener('popstate', () => {
  activeCategory = categoryFromPath();
  syncPills();
  updateHeading();
  renderGallery();
});

let searchDebounce;
searchInput.addEventListener('input', () => {
  searchClearBtn.hidden = !searchInput.value;
  clearTimeout(searchDebounce);
  searchDebounce = setTimeout(() => {
    searchQuery = searchInput.value.trim().toLowerCase();
    renderGallery();
  }, 120);
});
// "search" on a phone keyboard: put the keyboard away so results are visible
searchInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') searchInput.blur(); });

function clearSearch() {
  searchInput.value = '';
  searchQuery = '';
  searchClearBtn.hidden = true;
}
searchClearBtn.addEventListener('click', () => { clearSearch(); renderGallery(); searchInput.focus(); });
document.getElementById('clearFiltersBtn').addEventListener('click', () => {
  clearSearch();
  if (activeCategory) selectCategory(''); else renderGallery();
});

function filteredTemplates() {
  const specialKeys = new Set(SPECIAL_PILLS.map((p) => p.key));
  const list = ALL_TEMPLATES.filter((t) => {
    if (activeCategory) {
      if (specialKeys.has(activeCategory)) {
        if (!t[activeCategory]) return false;
      } else if (t.category !== activeCategory) {
        return false;
      }
    }
    if (searchQuery) {
      const cat = categoryByKey(t.category);
      const haystack = `${t.title} ${cat ? cat.label : ''} ${t.slug.replace(/-/g, ' ')}`.toLowerCase();
      if (!searchQuery.split(/\s+/).every((word) => haystack.includes(word))) return false;
    }
    return true;
  });
  // one category shows in its own order; All and the flags keep the All order
  return activeCategory && !specialKeys.has(activeCategory) ? list.sort(MWCard.inCategoryOrder) : list;
}

// Cards animate in only once they actually enter the viewport, instead of
// every card in an 80+ item grid firing its entrance animation at once.
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const card = entry.target;
    card.classList.add('in-view');
    revealObserver.unobserve(card);
    // the stagger delay is only for the entrance; left in place it would
    // also delay the hover lift
    setTimeout(() => { card.style.transitionDelay = ''; }, 900);
  });
}, { rootMargin: '0px 0px -30px 0px', threshold: 0.05 });

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// The very first draw replaces cards the server already put on the page
// with the same cards, so it must not fade them in again or cross-fade.
let firstDraw = true;

function renderGallery() {
  const list = filteredTemplates();
  const quiet = firstDraw && galleryEl.querySelector('.card') !== null;
  firstDraw = false;
  const doRender = () => {
    galleryEl.innerHTML = '';
    noResultsEl.hidden = list.length !== 0;

    const cat = categoryByKey(activeCategory) || SPECIAL_PILLS.find((p) => p.key === activeCategory);
    const n = `${list.length} template${list.length === 1 ? '' : 's'}`;
    resultCountEl.hidden = list.length === 0;
    resultCountEl.textContent = searchQuery
      ? `${n} for “${searchInput.value.trim()}”${cat ? ` in ${cat.label}` : ''}`
      : cat ? `${n} in ${cat.label}` : n;

    const visitor = getVisitorId();
    list.forEach((t, i) => {
      const card = document.createElement('article');
      // the markup itself lives in gallery-card.js, shared with the server
      card.innerHTML = MWCard.cardHtml(t, { category: categoryByKey(t.category), visitor });
      if (quiet) {
        card.className = 'card reveal in-view';
      } else {
        card.className = 'card reveal';
        card.style.transitionDelay = `${Math.min(i * 25, 250)}ms`;
        revealObserver.observe(card);
      }
      galleryEl.appendChild(card);
    });
  };

  // View Transitions API gives a soft cross-fade when the grid contents
  // change (category switch, search filter) — silently a plain re-render on
  // browsers without it, and skipped for users who've asked for less motion.
  if (!quiet && !prefersReduced && document.startViewTransition) {
    // a transition is skipped when the tab is in the background or another
    // one starts; the grid has still been updated, so there's nothing to report
    const transition = document.startViewTransition(doRender);
    [transition.ready, transition.finished, transition.updateCallbackDone].forEach((p) => p && p.catch(() => {}));
  } else {
    doRender();
  }
}

// three real template covers beside the headline — featured ones first
// (they're the ones worth showing off), padded out with whatever's next
function renderHeroShowcase() {
  if (!heroShowcaseEl || ALL_TEMPLATES.length === 0) return;
  if (heroShowcaseEl.querySelector('.phone-card')) return; // the server already drew them
  const featured = ALL_TEMPLATES.filter((t) => t.featured);
  const rest = ALL_TEMPLATES.filter((t) => !t.featured);
  const pick = [...featured, ...rest].slice(0, 3);
  // the best one goes in the middle, which is the phone in front
  if (pick.length === 3) [pick[0], pick[1]] = [pick[1], pick[0]];

  heroShowcaseEl.innerHTML = pick.map(({ slug }) => `
    <div class="phone-card"><img src="${MWCard.thumbUrl(ALL_TEMPLATES.find((t) => t.slug === slug))}" alt="" width="360" height="480" /></div>
  `).join('');
}

function escapeHtml(s) {
  return String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

// small click-ripple feedback on any .btn, including ones added later
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.btn');
  if (!btn) return;
  const rect = btn.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const ripple = document.createElement('span');
  ripple.className = 'ripple';
  ripple.style.width = ripple.style.height = size + 'px';
  ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
  ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
  btn.appendChild(ripple);
  ripple.addEventListener('animationend', () => ripple.remove());
});

// the header picks up a hairline once the page has scrolled under it
const onScroll = () => topbarEl.classList.toggle('scrolled', window.scrollY > 8);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

loadGallery();

// "3 people creating right now · 1,240 pages made with love" above the
// headline — starts hidden so a slow/failed first fetch never shows a
// flash of empty text, then stays up to date every few seconds.
async function refreshLiveStats() {
  const wrap = document.getElementById('liveStats');
  const textEl = document.getElementById('liveStatsText');
  if (!wrap) return;
  try {
    const res = await fetch('/api/public/stats');
    if (!res.ok) return;
    const { activeNow, totalCreated } = await res.json();
    // Both numbers always show. The wording has a long form for wide
    // screens and a short one for phones (site.css picks), so the line
    // stays on one row whatever the numbers grow to.
    textEl.innerHTML = `${Number(activeNow) || 0} `
      + `<span class="ls-long">${activeNow === 1 ? 'person' : 'people'} creating right now</span><span class="ls-short">creating now</span>`
      + '<span class="live-stats-sep">·</span>'
      + `${(Number(totalCreated) || 0).toLocaleString()} ${totalCreated === 1 ? 'page' : 'pages'} made<span class="ls-love"> with love</span>`;
    wrap.hidden = false;
  } catch {
    // leave the line hidden rather than show stale/broken numbers
  }
}
refreshLiveStats();
setInterval(refreshLiveStats, 10000);

// One event for the admin panel's Analytics tab (see analytics.js). Fire and
// forget: nothing on this page waits for it or cares whether it arrives.
// tz: the browser's time zone, for the visitor's country
try {
  let tz = '';
  try {
    tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    if (tz) document.cookie = `mw_tz=${encodeURIComponent(tz)}; Path=/; Max-Age=31536000; SameSite=Lax`;
  } catch {}
  fetch('/api/public/track', {
    method: 'POST', keepalive: true,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      type: 'visit',
      tz,
      ref: document.referrer,
      tag: new URLSearchParams(location.search).get('utm_source') || new URLSearchParams(location.search).get('src') || '',
    }),
  }).catch(() => {});
} catch {}
