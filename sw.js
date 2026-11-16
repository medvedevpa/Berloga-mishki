// v11: cache the complete split app atomically before activation.
const CACHE='matvey-v11-forest-family-1';
const FILES=["./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png", "./apple-touch-icon.png", "./css/base.css", "./css/discovery.css", "./css/forest.css", "./css/montessori.css", "./css/parent-review.css", "./css/storybook.css", "./js/adventure-data.js", "./js/app.js", "./js/artwork.js", "./js/discovery-data.js", "./js/family-rewards.js", "./js/lesson-data.js", "./js/live-data.js", "./js/montessori-data.js", "./js/pwa.js", "./js/visuals.js", "./assets/animal-bear.webp", "./assets/animal-chicken.webp", "./assets/animal-cow.webp", "./assets/animal-duck.webp", "./assets/animal-fox.webp", "./assets/animal-frog.webp", "./assets/animal-goose.webp", "./assets/animal-mushroom.webp", "./assets/animal-rabbit.webp", "./assets/animal-sheep.webp", "./assets/animal-tit.webp", "./assets/animal-wolf.webp", "./assets/bear-hero.webp", "./assets/forest-animals.svg", "./assets/forest-plants.svg", "./assets/matvey-canonical-bear.png", "./assets/plant-bear2.webp", "./assets/plant-bush.svg", "./assets/plant-daisy.svg", "./assets/plant-fox2.webp", "./assets/plant-grass.svg", "./assets/plant-mushroom2.svg", "./assets/plant-mushrooms.webp", "./assets/plant-rabbit2.webp", "./assets/plant-river.webp", "./assets/plant-strawberry.svg", "./assets/plant-tit2.webp", "./assets/plant-tree.svg", "./assets/scene-4e8042a827.webp", "./assets/scene-8a4a915d6d.webp"];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('matvey-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{
 if(event.request.method!=='GET'||new URL(event.request.url).origin!==self.location.origin)return;
 event.respondWith(caches.open(CACHE).then(async cache=>{
  const cached=await cache.match(event.request);
  if(cached)return cached;
  return fetch(event.request);
 }));
});
