// FocusTube background service worker (MV3)
// Currently minimal: reserved for future features like schedule-based blocking.
self.addEventListener('install', () => {
  // eslint-disable-next-line no-console
  console.log('FocusTube installed');
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});
