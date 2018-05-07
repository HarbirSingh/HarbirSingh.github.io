//importScripts('/cache-polyfill.js');

self.addEventListener('install', function (e) {
    //console.log("asda");
    e.waitUntil(
        caches.open('airhorner').then(function (cache) {
            //console.log("asda");
            return cache.addAll([
                '/',
                '/angle_config.js',
                '/app.js',
                '/app2.js',
                '/index.html',
                '/mystyle.css',
                '/manifest.json',
                '/service-worker.js',
                '/importjs/d3.min.js',
                '/importjs/function-plot@1.14.0',
                '/importjs/katex.min.css',
                '/importjs/katex.min.js',
                '/importjs/math.min.js',
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