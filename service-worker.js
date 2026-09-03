const CACHE = 'canada-explorer-shell-v3';
const CORE = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon-192.svg',
  './icons/icon-512.svg',
  './assets/calm_ambient.mp3',
  './assets/canada_map.png',
  './assets/canada_population_41m.svg',
  './assets/english_french_words.svg',
  './assets/british_columbia_lesson.mp4'
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
    const copy = response.clone();
    caches.open(CACHE).then(cache => cache.put(event.request, copy));
    return response;
  }).catch(() => caches.match('./index.html'))));
});
