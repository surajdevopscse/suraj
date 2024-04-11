'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "6afa24d28e539074b3e62110ec156cc6",
"favicon.ico": "64dc01f6127f6f150c171bebb857d4b0",
"index.html": "f09c2be05bcea14a2e8c18366b121dc1",
"/": "f09c2be05bcea14a2e8c18366b121dc1",
"main.dart.js": "703509ed20249d28b20c450c58b508f1",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/favicon-16x16.png": "278d3229a77bd0a84fbd7af044afa22a",
"icons/android-chrome-192x192.png": "f07afba8bd2f3d0b6d19be44cfc13806",
"icons/apple-touch-icon.png": "dcf0e552fa46dede1e9fe62bdf740a5f",
"icons/android-chrome-512x512.png": "7857474e07125ddff709a65634b2f25e",
"icons/favicon-32x32.png": "d2da67067efe2dd3bd5df40f871c87a4",
"manifest.json": "b508104defd48a849fef9a65a47dc766",
".git/config": "8345397db3e643f7dfa87bcb3b1aac1b",
".git/objects/3d/708de6c5e97e9fe6003fd55998f2cbd141d3eb": "e6142c5a18f95a91f0c509385967aa57",
".git/objects/0b/15d4a15715470c6814896a16e6e154e3e814e0": "efb028a6b1304b451a23c73e4b3723c7",
".git/objects/94/a681e038bfdf7e23cbbe66b59716f182b2be43": "8b3f03292bcf2b2af8b1f19a3969b091",
".git/objects/b5/01c9fa032b39c348bb20c7ea3008d73b3a37dd": "83a5444958dbbeb1d771509e45726bbf",
".git/objects/f4/e7a28c2cae1ac30897abc0dfeba82f48d64611": "fd3929abe935afeab92df24ca4160f61",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/8a/03491c1ca21089f294c85a3372ab7d000923a8": "07bfd717a1ed7aa724b61f9e8a1df1a8",
".git/objects/36/7dce72de869b4100d7b1685da3b4780a595caa": "cef3df44a0013c58b9acd00764eb6491",
".git/objects/30/34e9b2b97f5e1956366280ca267eda0d3e0067": "64c46fc84102bebb196c677ba4a61564",
".git/objects/01/d812a46fd0b7d225c026f511615edbb11cb11d": "4ab99743ddaa664b0eb021f76317dfae",
".git/objects/b6/1de8ec5d966cbdd3a23e7a8f571a285e5fa28e": "fbc9cde92e70fdc2b0e84b5c0946a902",
".git/objects/d5/5957b83cd7b4a19df7c158447fb0ade907924a": "035a465012e1be7c9a80b4774f170bf9",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "749d1b6b2929a15bfadbfd5ffd028ff7",
".git/logs/refs/heads/main": "aebb810ffffed6419ddef9d3c829050a",
".git/logs/refs/remotes/origin/main": "10ac89f81aff44916ebd9b6d00f87261",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "7fe0e358ec6b6ebad2c50c2890643fa4",
".git/refs/remotes/origin/main": "7fe0e358ec6b6ebad2c50c2890643fa4",
".git/index": "9839d25afe27559ec87173b75301be6e",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"assets/AssetManifest.json": "b8e07c8b34049966740c11128534f645",
"assets/NOTICES": "3a2d426899f60320d98bea8b45ca3fa4",
"assets/FontManifest.json": "663783f541c46e7f04c244ce710d1b61",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/imgs/robinhood.png": "be431f8b32029860d500d8d050592a2c",
"assets/assets/imgs/hbsuper.png": "8337f422d448af67642d0d255403a006",
"assets/assets/imgs/desktop.png": "900507250cacea3aff269c7fe2911162",
"assets/assets/imgs/hbneo_icon.png": "d63237af67bdb3286403f9ccfec94b4e",
"assets/assets/imgs/suraj.png": "e213792750ec350bc2ec8665364a7d6f",
"assets/assets/imgs/flutter.png": "0b5a2f8d3f4d173805affaf9f84f6c87",
"assets/assets/imgs/04.png": "d38477d42dc77d62ff7a25744fd87d64",
"assets/assets/imgs/robinhood_icon.png": "aba33bb41b725044b5a573f300c69f52",
"assets/assets/imgs/BG01.png": "292fe68441561eae14b077f8f112acf9",
"assets/assets/imgs/hbneo.png": "5623cfb240d7b381fda05789c2778b1b",
"assets/assets/imgs/super_icon.png": "c9a12abedb17de535ead98ddfcd928ca",
"assets/assets/imgs/aahar_pos_icon.png": "6f8679546cf1bf7df09c70935ebd7395",
"assets/assets/imgs/aahar_pos.png": "5ce1345ad8edcb6fb703ade3248bb66e",
"assets/assets/imgs/bg.png": "479adb5025af1020760bb9332651ff5c",
"assets/assets/icons/android.svg": "e57e55c11155e0da56d4913db52486c7",
"assets/assets/icons/DOC-20230508-WA0001": "5b00db571b6b77a22ddfbef4aaf84c31",
"assets/assets/icons/graphic.svg": "6f05c1c6706df22c79a37a7ca4df3214",
"assets/assets/icons/website.svg": "421f827e65eb765b8ad10e386bf07849",
"assets/assets/icons/swift.png": "077379166993ea3d067842463b07d4df",
"assets/assets/icons/program.png": "bd32f054553603820f096d4ec584604c",
"assets/assets/icons/api.png": "0534a7727758ff13e40c7a69e5cad7b9",
"assets/assets/icons/apple.svg": "81afc16bd2183fcbdad794cd391e7f0d",
"assets/assets/fonts/montserrat/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/fonts/poppins/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/assets/fonts/poppins/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/assets/fonts/poppins/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/assets/fonts/poppins/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/assets/fonts/poppins/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/assets/fonts/poppins/Poppins-Italic.ttf": "5e956c44060a7b3c0e39819ae390ab15",
"assets/assets/gif/hi.gif": "cad5918d86b6a7e83f1fb4acead70e4c",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
