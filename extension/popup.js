const DEFAULTS = {
  blockShorts: true,
  blockHomeRecommendations: true,
  blockSidebarRecommendations: true,
  blockComments: false,
  blockEndscreen: true
};

function restore() {
  chrome.storage.sync.get(DEFAULTS, (res) => {
    document.getElementById('blockShorts').checked = Boolean(res.blockShorts);
    document.getElementById('blockHomeRecommendations').checked = Boolean(res.blockHomeRecommendations);
    document.getElementById('blockSidebarRecommendations').checked = Boolean(res.blockSidebarRecommendations);
    document.getElementById('blockComments').checked = Boolean(res.blockComments);
    document.getElementById('blockEndscreen').checked = Boolean(res.blockEndscreen);
  });
}

function save(key, value) {
  chrome.storage.sync.set({ [key]: value });
  // Inform active YouTube tabs to re-apply rules by reloading content script logic indirectly
  chrome.tabs.query({ url: ['*://*.youtube.com/*', '*://youtube.com/*'] }, (tabs) => {
    tabs.forEach((tab) => {
      if (tab.id) {
        chrome.tabs.sendMessage(tab.id, { type: 'FOCUSTUBE_REFRESH' }, () => {});
      }
    });
  });
}

['blockShorts','blockHomeRecommendations','blockSidebarRecommendations','blockComments','blockEndscreen'].forEach((id) => {
  document.addEventListener('change', (e) => {
    if (e.target && e.target.id === id) {
      save(id, e.target.checked);
    }
  });
});

document.addEventListener('DOMContentLoaded', restore);
