const Version = "V1"

// // self.addEventListener("install", event => {
// //     event.waitUntil(precache())
// // })

// self.addEventListener("fetch", event => {
//     const request = event.request;
//     //only for GET request
//     if (!request.method === "GET") {
//         return;
//     }

//     // Search in Cache
//     console.log(request)
//     event.respondWith(cachedResponse(request))

//     // Update cache
//     event.waitUntil(updateCache(request))

// })
// // async function precache () {
// //     console.log("precache")
// //     const cache = await caches.open(Version)
// //     return cache.addAll([
// //         "./",
// //         "./index.html",
// //         "./assets/index.js",
// //         "./assets/MediaPlayer.js",
// //         "./assets/plugins/AutoPause.js",
// //         "./assets/plugins/AutoPlay.js",
// //         "./assets/index.css",
// //         "./assets/BigBuckBunny.mp4"
// //     ])
// // }

// async function cachedResponse(request) {
//     console.log("HOLA")
//     const cache = await caches.open(Version);
//     const response = await cache.match(request);
//     return response || fetch(request)
// }

// async function updateCache(request) {
//     console.log("HOLA2")
//     const cache = await caches.open(Version);
//     const response = await fetch(request);
//     return cache.put(request,response);
// }