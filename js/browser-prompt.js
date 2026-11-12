// Only the actual homepage should ever suggest leaving the in-app browser —
// a visitor opening a template link (customize page, or someone's shared
// /g/<id> page) is already exactly where they want to be, so this never
// runs there. Detection matches the same logic the lovearea bundle used to
// run on every one of its own pages, now scoped to just this one place.
(function () {
  var ua = navigator.userAgent || navigator.vendor || window.opera || '';
  var uaMatch = ua.indexOf('Instagram') > -1 || ua.indexOf('FBAN') > -1 || ua.indexOf('FBAV') > -1 || ua.indexOf('Messenger') > -1;
  // Android's Instagram opens links in a Chrome Custom Tab, which reports
  // a completely ordinary Chrome user-agent with no Instagram marker at
  // all — there's no reliable client-side way to detect that case. The
  // referrer is the only extra signal available: Instagram often (not
  // always) passes itself as the referrer when launching the tab.
  var referrerMatch = /instagram\.com|facebook\.com|fb\.com/i.test(document.referrer || '');
  if (!uaMatch && !referrerMatch) return;

  var overlay = document.getElementById('browserPromptOverlay');
  if (!overlay) return;

  setTimeout(function () {
    overlay.hidden = false;
  }, 1000);

  function currentUrlNoProtocol() {
    return location.href.replace(/^https?:\/\//, '');
  }

  document.getElementById('browserPromptChrome').addEventListener('click', function () {
    if (/Android/i.test(ua)) {
      location.href = 'intent://' + currentUrlNoProtocol() + '#Intent;scheme=https;package=com.android.chrome;end';
    } else {
      location.href = 'googlechrome://' + currentUrlNoProtocol();
    }
  });

  document.getElementById('browserPromptSafari').addEventListener('click', function () {
    if (/iPhone|iPad|iPod/i.test(ua)) {
      alert("Tap the (⋯) menu at the top right and select 'Open in Safari'.");
    } else {
      window.open(location.href, '_blank');
    }
  });

  document.getElementById('browserPromptCopy').addEventListener('click', function () {
    navigator.clipboard.writeText(location.href).catch(function () {});
    var label = document.querySelector('#browserPromptCopy span');
    var original = label.textContent;
    label.textContent = 'Copied ✓';
    setTimeout(function () { label.textContent = original; }, 1500);
  });

  document.getElementById('browserPromptClose').addEventListener('click', function () {
    overlay.hidden = true;
  });
})();
