(() => {
  const DEFAULTS = {
    blockShorts: true,
    blockHomeRecommendations: true,
    blockSidebarRecommendations: true,
    blockComments: false,
    blockEndscreen: true
  };

  let settings = { ...DEFAULTS };

  const hide = (el) => {
    if (!el) return;
    el.style.setProperty('display', 'none', 'important');
    el.setAttribute('data-focustube-hidden', '1');
  };

  const shouldHideShelf = (node) => {
    if (!node) return false;
    try {
      const text = (node.innerText || '').toLowerCase();
      return text.includes('shorts');
    } catch (_) {
      return false;
    }
  };

  const selectors = {
    shorts: [
      'ytd-reel-shelf-renderer',
      'ytd-rich-shelf-renderer[is-shorts]',
      'ytd-rich-section-renderer:has(ytd-reel-shelf-renderer)',
      'ytd-guide-entry-renderer:has(a[href*="shorts"])',
      'a[href*="/shorts"]',
      'ytd-mini-guide-entry-renderer:has(a[title="Shorts"])'
    ],
    homeRecommendations: [
      'ytd-rich-grid-renderer',
      '#contents ytd-rich-item-renderer',
      '#chips-wrapper',
      '#primary[role=main] ytd-browse'
    ],
    sidebarRecommendations: [
      '#related',
      'ytd-watch-next-secondary-results-renderer',
      '#secondary #items ytd-compact-video-renderer',
      'ytd-compact-autoplay-renderer'
    ],
    comments: ['#comments', 'ytd-comments'],
    endscreen: ['.ytp-endscreen-content', '.ytp-ce-element']
  };

  const applyRules = () => {
    try {
      if (settings.blockShorts) {
        selectors.shorts.forEach((sel) => document.querySelectorAll(sel).forEach(hide));
        // Remove any remaining shelves containing the word "Shorts"
        document.querySelectorAll('ytd-rich-section-renderer, ytd-rich-shelf-renderer').forEach((n) => {
          if (shouldHideShelf(n)) hide(n);
        });
      }

      if (settings.blockHomeRecommendations) {
        // On home page—replace main grid with a calm message
        const homeGrid = document.querySelector('ytd-rich-grid-renderer');
        if (homeGrid && !homeGrid.hasAttribute('data-focustube-replaced')) {
          hide(homeGrid);
          const container = document.createElement('div');
          container.setAttribute('data-focustube-replaced', '1');
          container.style.cssText = 'margin: 24px; padding: 32px; border-radius: 16px; background: #0f172a0d; font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif; color: #0f172a;';
          container.innerHTML = '<div style="font-size:18px;font-weight:600;margin-bottom:8px">Stay focused</div><div style="opacity:.8">Home recommendations are hidden. Use search to find exactly what you need.</div>';
          const parent = document.querySelector('#primary ytd-two-column-browse-results-renderer #contents') || homeGrid.parentElement;
          parent && parent.insertBefore(container, homeGrid);
        }
      }

      if (settings.blockSidebarRecommendations) {
        selectors.sidebarRecommendations.forEach((sel) => document.querySelectorAll(sel).forEach(hide));
      }

      if (settings.blockComments) {
        selectors.comments.forEach((sel) => document.querySelectorAll(sel).forEach(hide));
      }

      if (settings.blockEndscreen) {
        selectors.endscreen.forEach((sel) => document.querySelectorAll(sel).forEach(hide));
        // Also disable endscreen via player API if available
        const player = document.querySelector('video');
        if (player) {
          const css = `.ytp-endscreen-content, .ytp-ce-element { display: none !important; }`;
          injectStyle(css, 'focustube-endscreen-style');
        }
      }
    } catch (e) {
      // fail-safe
    }
  };

  const injectStyle = (cssText, id) => {
    if (id && document.getElementById(id)) return;
    const style = document.createElement('style');
    if (id) style.id = id;
    style.textContent = cssText;
    document.documentElement.appendChild(style);
  };

  const observe = () => {
    const obs = new MutationObserver(() => applyRules());
    obs.observe(document.documentElement, { childList: true, subtree: true });
    window.addEventListener('yt-navigate-finish', applyRules);
    window.addEventListener('spfdone', applyRules);
    window.addEventListener('load', applyRules);
  };

  const loadSettings = () => new Promise((resolve) => {
    try {
      chrome.storage.sync.get(DEFAULTS, (res) => {
        settings = { ...DEFAULTS, ...res };
        resolve(settings);
      });
    } catch (_) {
      resolve(settings);
    }
  });

  const listenForChanges = () => {
    try {
      chrome.storage.onChanged.addListener((changes, area) => {
        if (area === 'sync') {
          let needsApply = false;
          Object.keys(changes).forEach((k) => {
            settings[k] = changes[k].newValue;
            needsApply = true;
          });
          if (needsApply) applyRules();
        }
      });
    } catch (_) {}
  };

  // Initialize
  loadSettings().then(() => {
    applyRules();
    observe();
    listenForChanges();
  });
})();
