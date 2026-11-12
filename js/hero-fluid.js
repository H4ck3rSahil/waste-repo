// ==========================================================
// The homepage hero's liquid background: soft colours drifting and melting
// into each other. Drawn on a tiny canvas (about 100 px wide) that the
// browser stretches and blurs, so it costs almost nothing; at most 30
// frames a second, and only while the hero is on screen and the tab is
// open. With "reduce motion" on (or no canvas) the still blobs stay.
// ==========================================================
(function () {
  const bg = document.querySelector('.hero-bg');
  const canvas = bg && bg.querySelector('.hero-fluid');
  if (!canvas || !canvas.getContext) return;
  if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const ctx = canvas.getContext('2d', { alpha: false });
  if (!ctx) return;

  // colour, strength, size and home (near the corners: the middle stays
  // white), and how it wanders around that home (two slow waves per axis)
  const BLOBS = [
    { c: [124, 58, 237], a: 0.55, r: 0.42, fx: 0.11, fy: 0.07, px: 0.0, py: 1.3, ox: 0.02, oy: 0.05 },
    { c: [236, 72, 153], a: 0.50, r: 0.40, fx: 0.08, fy: 0.12, px: 2.1, py: 0.4, ox: 0.98, oy: 0.10 },
    { c: [251, 146, 60], a: 0.22, r: 0.30, fx: 0.13, fy: 0.09, px: 4.0, py: 2.2, ox: 0.04, oy: 0.88 },
    { c: [167, 139, 250], a: 0.28, r: 0.30, fx: 0.06, fy: 0.10, px: 1.0, py: 3.6, ox: 0.55, oy: 1.02 },
    { c: [244, 114, 182], a: 0.30, r: 0.28, fx: 0.12, fy: 0.08, px: 3.3, py: 4.4, ox: 1.0, oy: 0.80 },
  ];

  let w = 0, h = 0;
  function size() {
    const r = bg.getBoundingClientRect();
    w = 96;
    h = Math.max(48, Math.round(96 * (r.height / Math.max(1, r.width))));
    canvas.width = w;
    canvas.height = h;
  }

  function draw(t) {
    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = '#fbf8ff';
    ctx.fillRect(0, 0, w, h);
    const span = Math.max(w, h);
    for (const b of BLOBS) {
      const x = (b.ox + 0.10 * Math.sin(t * b.fx + b.px) + 0.04 * Math.sin(t * b.fx * 2.3 + b.py)) * w;
      const y = (b.oy + 0.10 * Math.cos(t * b.fy + b.py) + 0.04 * Math.sin(t * b.fy * 1.7 + b.px)) * h;
      // the size breathes a little, which is what makes it read as liquid
      const rad = span * b.r * (0.88 + 0.14 * Math.sin(t * (b.fx + b.fy) + b.px));
      const g = ctx.createRadialGradient(x, y, 0, x, y, rad);
      const [r, gr, bl] = b.c;
      g.addColorStop(0, `rgba(${r},${gr},${bl},${b.a})`);
      g.addColorStop(0.55, `rgba(${r},${gr},${bl},${b.a * 0.45})`);
      g.addColorStop(1, `rgba(${r},${gr},${bl},0)`);
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);
    }
  }

  let visible = true;
  let last = 0;
  let raf = 0;
  const start = performance.now();
  function frame(now) {
    raf = 0;
    if (!visible || document.hidden) return;
    if (now - last >= 33) { last = now; draw((now - start) / 1000); }
    raf = requestAnimationFrame(frame);
  }
  const run = () => { if (!raf && visible && !document.hidden) raf = requestAnimationFrame(frame); };

  size();
  draw(0);
  bg.classList.add('fluid-on');
  if ('IntersectionObserver' in window) {
    new IntersectionObserver((entries) => { visible = entries[0].isIntersecting; run(); }).observe(bg);
  }
  document.addEventListener('visibilitychange', run);
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => { size(); draw((performance.now() - start) / 1000); }, 150);
  });
  run();
})();
