// Minimal service worker so Android installs the wrapper as an app.
// It caches nothing: the app always loads live data from Apps Script.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
