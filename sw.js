// v10: app shell and icon assets; no external runtime dependencies
const CACHE='matvey-v10-voice-review-12-games';
const FILES=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./apple-touch-icon.png'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',event=>{if(event.request.method!=='GET')return;event.respondWith(fetch(event.request).then(r=>{if(r.ok&&new URL(event.request.url).origin===self.location.origin){const c=r.clone();caches.open(CACHE).then(x=>x.put(event.request,c))}return r}).catch(()=>caches.match(event.request)))})
