const CACHE = 'healing-rpg-v1';
const ASSETS = ['/', '/index.html','/quests.html','/badges.html','/community.html','/growth.html','/manifest.json'];

self.addEventListener('install', e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));
});

self.addEventListener('fetch', e=>{
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
