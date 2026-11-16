// v16: local parent voice library; preserve progress, notes and existing clips.
const CACHE='matvey-v16-local-voice-1';
const FILES=["./release-v16.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png", "./apple-touch-icon.png", "./css/stylesheet-v16-9fdf0ce6df.css", "./assets/animal-bear.webp", "./assets/animal-chicken.webp", "./assets/animal-cow.webp", "./assets/animal-duck.webp", "./assets/animal-fox.webp", "./assets/animal-frog.webp", "./assets/animal-goose.webp", "./assets/animal-mushroom.webp", "./assets/animal-rabbit.webp", "./assets/animal-sheep.webp", "./assets/animal-tit.webp", "./assets/animal-wolf.webp", "./assets/bear-hero.webp", "./assets/forest-animals.svg", "./assets/forest-backdrop-v14.png", "./assets/forest-plants.svg", "./assets/matvey-canonical-bear.png", "./assets/models/berry-v15.glb", "./assets/models/bunny-chef-v15.glb", "./assets/models/cottage-v15.glb", "./assets/models/pea-v15.glb", "./assets/models/produce-v15.glb", "./assets/models/sunflower-v15.glb", "./assets/plant-bear2.webp", "./assets/plant-bush.svg", "./assets/plant-daisy.svg", "./assets/plant-fox2.webp", "./assets/plant-grass.svg", "./assets/plant-mushroom2.svg", "./assets/plant-mushrooms.webp", "./assets/plant-rabbit2.webp", "./assets/plant-river.webp", "./assets/plant-strawberry.svg", "./assets/plant-tit2.webp", "./assets/plant-tree.svg", "./assets/scene-4e8042a827.webp", "./assets/scene-8a4a915d6d.webp", "./assets/world-covers-v14.png", "./js/release/v16/app-N76U7TPY.js", "./js/release/v16/chunk-234DPLNW.js", "./js/release/v16/chunk-6CGWP5HI.js", "./js/release/v16/chunk-EZIX3QWK.js", "./js/release/v16/chunk-HM6NJ3IU.js", "./js/release/v16/chunk-SDOYCOCV.js"];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(async c=>{
 await c.addAll(FILES.map(file=>new Request(new URL(file,self.location.href),{cache:'reload'})));
 const path=FILES.find(file=>/^\.\/release-v\d+\.html$/.test(file));
 const shell=path&&await c.match(path);if(!shell)throw Error('Release shell missing');
 await c.put('./',shell.clone());await c.put('./index.html',shell.clone());
}).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil((async()=>{
 await self.clients.claim();
 const keys=await caches.keys();await Promise.all(keys.filter(k=>k.startsWith('matvey-')&&k!==CACHE).map(k=>caches.delete(k)));
})()));
self.addEventListener('message',event=>{if(event.data?.type==='MATVEY_VERSION')event.ports[0]?.postMessage(CACHE);});
self.addEventListener('fetch',event=>{
 if(event.request.method!=='GET'||new URL(event.request.url).origin!==self.location.origin)return;
 event.respondWith(caches.open(CACHE).then(async cache=>{
  const isPage=event.request.mode==='navigate';
  const cached=await cache.match(event.request,{ignoreSearch:event.request.mode!=='navigate'});
  if(isPage&&new URL(event.request.url).searchParams.has('update')){try{return await fetch(event.request,{cache:'no-store'});}catch(e){return cached||await cache.match('./index.html');}}
  if(cached)return cached;
  try{return await fetch(event.request);}catch(e){if(isPage)return cache.match('./index.html');throw e;}
 }));
});
