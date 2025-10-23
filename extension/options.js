const DEFAULTS = {
  blockShorts: true,
  blockHomeRecommendations: true,
  blockSidebarRecommendations: true,
  blockComments: false,
  blockEndscreen: true
};

function restore() {
  chrome.storage.sync.get(DEFAULTS, (res) => {
    Object.keys(DEFAULTS).forEach((k) => {
      const el = document.getElementById(k);
      if (el) el.checked = Boolean(res[k]);
    });
  });
}

function saveAll() {
  const data = {};
  Object.keys(DEFAULTS).forEach((k) => {
    const el = document.getElementById(k);
    if (el) data[k] = el.checked;
  });
  chrome.storage.sync.set(data);
}

document.addEventListener('change', (e) => {
  if (e.target && e.target.matches('input[type="checkbox"]')) {
    saveAll();
  }
});

document.addEventListener('DOMContentLoaded', restore);
