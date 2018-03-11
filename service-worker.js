//importScripts('/cache-polyfill.js');

self.addEventListener('install', function (e) {
    console.log("asda");
    e.waitUntil(
        caches.open('airhorner').then(function (cache) {
            console.log("asda");
            return cache.addAll([
                '/',
                '/index.html',
                '/app.js',
                '/manifest.json',
                '/service-worker.js',
                '/images/icons/icon-72x72.png',
                '/images/icons/icon-96x96.png',
                '/images/icons/icon-128x128.png',
                '/images/icons/icon-144x144.png',
                '/images/icons/icon-152x152.png',
                '/images/icons/icon-192x192.png',
                '/images/icons/icon-384x384.png',
                '/images/icons/icon-512x512.png',
            ]);
        })
    );
});
self.addEventListener('fetch', function (event) {
    console.log(event.request.url);
    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request);
        })
    );
});