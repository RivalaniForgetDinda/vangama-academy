'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "79bac3b4fd7e473b8f88203f86ac9f63",
"assets/AssetManifest.bin.json": "f9cc72df0f66692ded1ee9bf63cf7fd6",
"assets/AssetManifest.json": "f0dc1644f6e4c8003a5d29d25a5a0e87",
"assets/assets/gallery/photo1.png": "74c246c3b4f0702b5748d74d5940f28f",
"assets/assets/gallery/photo10.png": "6dde1cee77f6bdf5abecdd56d9e73f40",
"assets/assets/gallery/photo11.png": "699507e1aa2de7a3d82af588f3268084",
"assets/assets/gallery/photo12.png": "97ab150e67b48935f96d84eb3de740d4",
"assets/assets/gallery/photo13.png": "6f79575a8e85b4ae1a0a88f18aa3e76a",
"assets/assets/gallery/photo14.png": "2ee13f4130b74312aa2b0d0e16a0fbfc",
"assets/assets/gallery/photo15.png": "007d21d6f207f5a9b6ec0ac1084cddd5",
"assets/assets/gallery/photo16.png": "fdca8174d5c900ebef8018212c0a8903",
"assets/assets/gallery/photo17.png": "8bd58174f3b86c61fbb197ac3be00e8e",
"assets/assets/gallery/photo2.png": "0e4bb20c7964718975c19a008feadafc",
"assets/assets/gallery/photo3.png": "1676dc9677c684420f1ed023284fb5eb",
"assets/assets/gallery/photo4.png": "5c3e5f0b9c42f8ec74377f46e01bd1c9",
"assets/assets/gallery/photo5.png": "6de563ae7e2bfe4d8bb78ac82a82ee6e",
"assets/assets/gallery/photo6.png": "24c7d50e09d9aa9a9ea9fcc039bb280a",
"assets/assets/gallery/photo7.png": "290bd158afd556d94f9d17f5bbbfa0fe",
"assets/assets/gallery/photo8.png": "58d0e772f4de2be80ba9c9595df41708",
"assets/assets/gallery/photo9.png": "baee3b2790a8376190554d7763eb3661",
"assets/assets/icons/chatbot.png": "3366881d48ea92a4ee83c39e70d5eaa0",
"assets/assets/icons/email.png": "df7c13d7f77771ff70a71d69bb1f58c6",
"assets/assets/icons/facebook.png": "28cf8c716086aaf89954b324faf627ee",
"assets/assets/icons/whatsapp.png": "0f26e92b88d9b96d0cab442c141e4169",
"assets/assets/images/female_teacher.png": "97a6849ac35887ea9bbf555659e71297",
"assets/assets/images/graduate.jpg": "631424547e07a35df4d3aa7ef20c6fa2",
"assets/assets/images/logo.png": "05a2136a9dbe56ec8119cf986b8f8fb7",
"assets/assets/images/male_teacher.png": "f1b240a1cd3087eb27a3a7661fad976d",
"assets/assets/videos/video1.mp4": "eb3aabc44d1cec1ee88c7e9835921316",
"assets/assets/videos/video2.mp4": "c733432a6e6e990447317fa35f4f0622",
"assets/assets/videos/video3.mp4": "58ea5dd4a63eea4ceccae8397e3f5f15",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "a34ad80a42d40b83e7c1931a48f3c5a5",
"assets/NOTICES": "a7ca2d45cd5f563ac321b348e6a5da57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "15d54d142da2f2d6f2e90ed1d55121af",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "262525e2081311609d1fdab966c82bfc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "269f971cec0d5dc864fe9ae080b19e23",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "fcab80cd6352d119b228bfa279b6c616",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8eab9d9700d79c95048edb07d2b313a8",
"/": "8eab9d9700d79c95048edb07d2b313a8",
"main.dart.js": "bc20ee28a4fc226a1cb5c6595a868b43",
"manifest.json": "4f4ddb8222da9a1eab35ceb5090c3173",
"splash/img/dark-3x.png": "171035e163c1fd33adeb67a9076c03aa",
"splash/img/dark-4x.png": "762e92421eb6abdcae6ad32d7fcd563d",
"splash/img/light-1x.png": "f4a9b4102f31810e3305f4f0e4636260",
"splash/img/light-2x.png": "cc8b1bb6a6fc7180044d905c508a07a8",
"splash/img/light-3x.png": "171035e163c1fd33adeb67a9076c03aa",
"splash/img/light-4x.png": "762e92421eb6abdcae6ad32d7fcd563d",
"version.json": "2801712c3d84668bbe65b6b009e2f41e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
