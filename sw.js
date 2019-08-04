//Service worker

const cacheName = 'Fallback-Web-Shell';
// Array of asset top cache
const assets =[
  '/',
  '/index.html',
 '/restaurant.html',
  '/css/restaurantResponsive.css',
  '/css/mainResponsive.css',
  '/css/styles.css',
  '/img/1.jpg',
  '/img/2.jpg',
  '/img/3.jpg',
  '/img/4.jpg',
  '/img/5.jpg',
  '/img/6.jpg',
  '/img/7.jpg',
  '/img/8.jpg',
  '/img/9.jpg',
  '/img/10.jpg',
  '/js/main.js',
  '/js/restaurant_info.js',
  '/js/dbhelper.js',
  '/js/app.js',
  '/data/restaurants.json',
  'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css',
  'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js'
];

self.addEventListener('install', evt =>{
  //fetch for the items to cache
  evt.waitUntil(
    caches.open(cacheName).then(cache => {
    cache.addAll(assets);
    })
  );

});

self.addEventListener('activate', evt => {
});

self.addEventListener('fetch', evt => {
   evt.respondWith(
// matches the request with the cache
     caches.match(evt.request).then(cacheResponse =>{
       return cacheResponse || fetch(evt.request);
     })
   );
});
