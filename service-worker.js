const CACHE_NAME = 'procesador-imagenes-v4.4.2';

// Calcular base path dinámicamente desde la ubicación del service worker
const BASE_PATH = self.location.pathname.replace('service-worker.js', '');

const urlsToCache = [
  BASE_PATH + 'procesador-imagenes.html',
  BASE_PATH + 'manifest.json',
  BASE_PATH + 'icon-192.png',
  BASE_PATH + 'icon-512.png',
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
          .catch(() => caches.match(BASE_PATH + 'procesador-imagenes.html'));
      })
  );
});
