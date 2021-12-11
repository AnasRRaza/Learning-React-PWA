console.log("SW from Public");

const appCacheName = "learn-pwa";

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll([ // files that runs in offline mode
        "/static/js/vendors~main.chunk.js",
        "/static/js/main.chunk.js",
        "/static/js/bundle.js",
        "/manifest.json",
        "/logo192.png",
        "/favicon.ico",
        "/index.html",
        "/user",
        "/about",
        "/",
      ]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  if (!navigator.onLine) { // if internet is not available
    e.respondWith(
      caches.match(e.request).then((res) => {
        if (res) {
          return res;
        } else {
          fetch(e.request);
        }
      })
    )
  }
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (cachesName) {
      return Promise.all(
        cachesName
          .filter(function (cacheName) {
            return cacheName.startsWith("Offline-") && cacheName != appCacheName;
          })
          .map(function (cacheName) {
            return caches.delete(cacheName);
          })
      );
    })
  );
});