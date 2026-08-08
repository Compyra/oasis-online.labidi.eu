/* Oasis Online SW — network-first, cache fallback, so visitors are never
   frozen on a stale build but the numbers still open with no connection.
   Bump VERSION together with the ?v= asset query in index.html. */
"use strict";

const VERSION = 10;
const CACHE = "oasis-online-v" + VERSION;
const SHELL = [
    "./",
    "index.html",
    "style.css?v=10",
    "data.js?v=10",
    "app.js?v=10",
    "icon.svg",
    "site.webmanifest"
];

self.addEventListener("install", e => {
    e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
    e.waitUntil(
        caches.keys()
            .then(keys => Promise.all(keys.filter(k => k.startsWith("oasis-online-") && k !== CACHE).map(k => caches.delete(k))))
            .then(() => self.clients.claim())
    );
});

self.addEventListener("fetch", e => {
    const url = new URL(e.request.url);
    if (e.request.method !== "GET" || url.origin !== location.origin) return;

    e.respondWith(
        fetch(e.request)
            .then(res => {
                const copy = res.clone();
                caches.open(CACHE).then(c => c.put(e.request, copy));
                return res;
            })
            .catch(() =>
                caches.match(e.request).then(hit =>
                    hit || (e.request.mode === "navigate" ? caches.match("index.html") : Response.error())
                )
            )
    );
});
