console.log("SW from Public");

const cacheName = "learn-pwa";

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll([
        "/static/js/vendors~main.chunk.js",
        "/static/js/main.chunk.js",
        "/static/js/bundle.js",
        "/manifest.json",
        "/logo192.png",
        "/favicon.ico",
        "/index.html",
        "/",
        "/user"
      ]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
      if (res) {
        return res;
      }
      fetch(e.request);
    })
  )
})