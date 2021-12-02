console.log("SW from Public");

const cacheName = "learn-pwa";

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
          const requestUrl = e.request.clone()
          fetch(requestUrl).then((res) => {
            return res.json().then((result) => {
              return result;
            });
          });
        }
      })
    )
  }
})