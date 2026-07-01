/**
 * 🌌 1antix9 OMNIVERSE CORE SERVICE WORKER SHIELD
 * Zero-Lag Standalone Mobile Application Offline Caching Engine
 */

const CACHE_NAME = '1antix9-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/dashboard/index.html',
  '/dashboard/games.html',
  '/dashboard/vip.html',
  '/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('[1antix9 PWA]: Core assets successfully locked into local hardware cache flags.');
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      // Return cached asset instantly for 0ms latency, otherwise fallback to network streams natively
      return response || fetch(event.request).catch(() => {
        return caches.match('/index.html');
      });
    })
  );
});
