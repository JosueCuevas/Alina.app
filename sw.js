const CACHE_NAME = "v1_cache_alina.app",
  urlsToCache = [
    "./",
    "https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,400;0,500;0,600;1,700&display=swap",
    "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0",
    "./css/style.css",
    "./script.js",
    "./js/index.js",
    "./assets/images/logo-1024px.png",
    "./assets/images/logo-512px.png",
    "./assets/images/logo-384px.png",
    "./assets/images/logo-256px.png",
    "./assets/images/logo-192px.png",
    "./assets/images/logo-128px.png",
    "./assets/images/logo-96px.png",
    "./assets/images/logo-64px.png",
    "./assets/images/logo-32px.png",
    "./assets/images/favicon.png",
  ];

// Durante la fase de instalación, generalmente se almacena en caché todos los activos estáticos
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache).then(() => self.skipWaiting());
      })
      .catch((err) => console.error(`Falló registro de caché ${err}`))
  );
});
// Una vez instalado, se activa y busca los recursos para hacer que funcione sin conexion
self.addEventListener("activate", (e) => {
  const cacheWhitelist = [CACHE_NAME];
  e.waitUntil(
    caches
      .keys()
      .then((cachesNames) => {
        cachesNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        });
      })
      .then(() => self.clients.claim())
  );
});
// cuando el navegador recupere la conexion
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches
      .match(e.request)
      .then((res) => {
        if (res) {
          return res;
        }
        return fetch(e.request);
      })
      .catch((err) => {
        console.error(err);
      })
  );
});
