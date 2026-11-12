// ==========================================================
// The markup for one gallery card and one category chip, in ONE place.
// The server uses it to put the templates straight into the page's HTML
// (so the gallery is there before any script runs, and for search engines
// and AI crawlers that never run scripts); site.js uses the very same
// functions when it filters and re-draws. Loaded with a <script> tag in
// the browser (window.MWCard) and with require() on the server.
// ==========================================================
(function (root) {
  const BADGE_ICON = { featured: 'icon-star', trending: 'icon-flame', recommended: 'icon-heart' };

  function escapeHtml(s) {
    return String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  // t: one entry of /api/public/templates
  function thumbUrl(t) {
    return `/admin-thumbs/${encodeURIComponent(t.slug)}.${t.thumbExt || 'png'}${t.thumbV ? `?v=${t.thumbV}` : ''}`;
  }

  // The inside of a card's <article>.
  //   opts.category  {emoji, label} of the template's category, if known
  //   opts.visitor   this browser's visitor id, carried to the customize
  //                  page so the admin panel can follow one visitor's path
  //                  (left out when the server draws the card)
  function cardHtml(t, opts) {
    const { slug, title, editable, previewUrl, isLovearea, featured, trending, recommended } = t;
    const category = opts && opts.category;
    const visitor = opts && opts.visitor;

    const previewHref = previewUrl || `/templates/${encodeURIComponent(slug)}.html`;
    const customizeHref = `/site/${isLovearea ? 'customize-love' : 'customize'}.html?slug=${encodeURIComponent(slug)}`
      + (visitor ? `&visitor=${encodeURIComponent(visitor)}` : '');
    const canCustomize = editable !== false;

    // only one ribbon shows at a time — featured beats trending beats
    // recommended — so a triple-flagged card doesn't get a stack of badges
    const badge = featured ? { cls: 'featured', label: 'Featured' }
      : trending ? { cls: 'trending', label: 'Trending' }
      : recommended ? { cls: 'recommended', label: 'Recommended' }
      : null;

    const safeTitle = escapeHtml(title);
    const safeSlug = escapeHtml(slug);
    // tapping the cover goes straight to making it; templates that can't be
    // edited open their demo instead. rel="nofollow" on both: neither the
    // customize form nor a demo full of sample text is a page for search.
    const coverLink = canCustomize
      ? `<a class="thumb-wrap" href="${customizeHref}" rel="nofollow" aria-label="Customize ${safeTitle}">`
      : `<a class="thumb-wrap" href="${previewHref}" target="_blank" rel="noopener nofollow" data-preview-slug="${safeSlug}" aria-label="Preview ${safeTitle}">`;

    return `
      ${coverLink}
        ${badge ? `<span class="featured-badge ${badge.cls}"><svg><use href="#${BADGE_ICON[badge.cls]}"/></svg>${badge.label}</span>` : ''}
        <img class="thumb" src="${escapeHtml(t.thumbSrc || thumbUrl(t))}" alt="${safeTitle}${category ? ` — ${escapeHtml(category.label.toLowerCase())}` : ''} website template" width="360" height="480" loading="lazy" decoding="async"
             onerror="this.style.visibility='hidden'" />
      </a>
      <div class="card-body">
        <div>
          <h3>${safeTitle}</h3>
          ${category ? `<p class="card-cat">${category.emoji} ${escapeHtml(category.label)}</p>` : ''}
        </div>
        <div class="card-actions">
          <a class="btn secondary" href="${previewHref}" target="_blank" rel="noopener nofollow"
             data-preview-slug="${safeSlug}" aria-label="Preview ${safeTitle}"><svg><use href="#icon-eye"/></svg>Preview</a>
          ${canCustomize ? `<a class="btn primary" href="${customizeHref}" rel="nofollow"><svg><use href="#icon-pencil"/></svg>Customize</a>` : ''}
        </div>
      </div>`;
  }

  // One category chip. A real link (so each category has an address a
  // crawler can follow); site.js takes over the click to switch in place.
  //   labelHtml is trusted markup (emoji + already-escaped name)
  function pillHtml(key, labelHtml, count, icon, active) {
    return `<a class="pill${active ? ' active' : ''}" href="${key ? `/category/${escapeHtml(key)}` : '/'}" data-category="${escapeHtml(key)}"`
      + `${active ? ' aria-current="page"' : ''}>`
      + `${icon ? `<svg class="pill-icon"><use href="#${icon}"/></svg>` : ''}${labelHtml} <span class="pill-count">${count}</span></a>`;
  }

  // "trending" / "recommended" are flags, not real categories — but they
  // browse exactly like one (their own chip + their own /category/<key>
  // address), so they sit in the same row.
  const SPECIAL_PILLS = [
    { key: 'trending', label: 'Trending', icon: 'icon-flame' },
    { key: 'recommended', label: 'Recommended', icon: 'icon-heart' },
  ];

  function pillsHtml(templates, categories, activeKey) {
    const out = [pillHtml('', 'All', templates.length, 'icon-grid', !activeKey)];
    SPECIAL_PILLS.forEach((p) => {
      const count = templates.filter((t) => t[p.key]).length;
      if (count > 0) out.push(pillHtml(p.key, p.label, count, p.icon, activeKey === p.key));
    });
    categories.forEach((c) => out.push(pillHtml(c.key, `${c.emoji} ${escapeHtml(c.label)}`, c.count, null, activeKey === c.key)));
    return out.join('');
  }

  // The order templates show in. In one category: featured ones first, then
  // the admin's arrangement of that category ("order"). On All: the admin's
  // own arrangement of every template ("rank"); a template never placed
  // there comes after the ones that were, in its category order.
  function inCategoryOrder(a, b) {
    return (b.featured - a.featured) || ((a.order || 0) - (b.order || 0));
  }
  function inAllOrder(a, b) {
    const ra = typeof a.rank === 'number';
    const rb = typeof b.rank === 'number';
    if (ra && rb) return a.rank - b.rank;
    if (ra !== rb) return ra ? -1 : 1;
    return inCategoryOrder(a, b);
  }

  const api = { cardHtml, pillsHtml, thumbUrl, escapeHtml, SPECIAL_PILLS, inCategoryOrder, inAllOrder };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.MWCard = api;
})(typeof window !== 'undefined' ? window : this);
