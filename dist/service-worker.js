var staticCacheName="wa-static-v0.6";self.addEventListener("install",function(t){t.waitUntil(caches.open(staticCacheName).then(function(t){return t.addAll(["./","./src/style/bootstrap.min.css","./src/style/react-star-rating.min.css","./src/style/mdb.min.css","./src/style/style.css","./src/img/dish-512.png","./src/img/dish.png","./src/img/restaurant-detail.jpg","./src/img/restaurant-list.jpg","./src/img/user-female.png","./src/img/user-male.png","./bundle.js"])}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(t){t.waitUntil(caches.keys().then(function(t){return Promise.all(t.filter(function(t){return t.startsWith("wa-")&&t!=staticCacheName}).map(function(t){return caches.delete(t)}))}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){var e=new URL(t.request.url);return e.origin===location.origin&&"/"===e.pathname?void t.respondWith(caches.match("/")):void t.respondWith(caches.match(t.request).then(function(e){return e||fetch(t.request)}))}),self.addEventListener("message",function(t){"skipWaiting"===t.data.action&&self.skipWaiting()});