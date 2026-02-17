const CACHE_NAME = 'procesador-imagenes-v2';

const urlsToCache = [
  '/Procesador-imagen/procesador-imagenes.html',
  '/Procesador-imagen/manifest.json',
  '/Procesador-imagen/icon-192.png',
  '/Procesador-imagen/icon-512.png',
  'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.3.2/papaparse.min.js',
  'https://cdn.jsdelivr.net/npm/piexifjs@1.0.6/piexif.min.js'
];

// Instalación - cachear recursos
self.addEventListener('install', event => {
  self.skipWaiting(); // Activar inmediatamente sin esperar
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
      .catch(err => console.log('Error cacheando:', err))
  );
});

// Activación - limpiar cachés antiguos y tomar control inmediatamente
self.addEventListener('activate', event => {
  event.waitUntil(
    Promise.all([
      caches.keys().then(cacheNames =>
        Promise.all(
          cacheNames
            .filter(name => name !== CACHE_NAME)
            .map(name => caches.delete(name))
        )
      ),
      self.clients.claim()
    ])
  );
});

// Fetch - estrategia Cache First con fallback a red
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        if (cachedResponse) return cachedResponse;

        return fetch(event.request)
          .then(networkResponse => {
            if (!networkResponse || networkResponse.status !== 200) {
              return networkResponse;
            }
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME)
              .then(cache => cache.put(event.request, responseToCache));
            return networkResponse;
          })
          .catch(() => caches.match('/Procesador-imagen/procesador-imagenes.html'));
      })
  );
});
