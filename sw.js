/** An empty service worker! */
self.addEventListener('fetch', function(event) {
  /** An empty fetch handler! */
});
self.addEventListener('push', function(event) {
  event.waitUntil(
    self.registration.showNotification('Got Push?', {
      body: 'Push Message received'
   }));
});
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('the-magic-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/STENSOFT.png',
        '/assets/js/main.js',
        '/assets/css/main.css',
      ]);
    })
  );
});
