/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["Note.txt","0d3187cb0e925cb9b6e818bdea52885b"],["README.md","631abdb7143bbff815a9176925d54b94"],["assets/fonts/Louis George Cafe Bold.ttf","37931f1a4b21c268033168ae2c816b08"],["assets/fonts/Louis George Cafe.ttf","a617b62cd8089465865a37c676da00e2"],["assets/fonts/louis_george_cafe-webfont.woff2","ac41ee3d5d630fbb2cb584e0af554d96"],["assets/fonts/louis_george_cafe_bold-webfont.woff2","ef76872206e03435737d9108cf1919a8"],["assets/fonts/louis_george_cafe_light-webfont.woff2","0bda395e4c84e7fe8ac86222a726a661"],["assets/gif's/CuttingVid.gif","a91c63d2ce859d60bda43e88ad2d4a7e"],["assets/gif's/DragVidTimeline.gif","bcc8ff7dc46b2823f8ed0b3ff346e948"],["assets/gif's/LensFlareDrag.gif","89539c837341622b9bd51eb1e71ac8fb"],["assets/gif's/LensFlareDrop.gif","29637c1ca8d231aac8c8394cf81e135a"],["assets/gif's/LumosWandFlick.gif","a47919d2196ef549ac1ec44d352a293c"],["assets/icons/Instagram.svg","2626bd784c562c386c3cfa2ccfc8c8d6"],["assets/icons/LinkedIn.svg","e972205ed2942387229f00b27ce90777"],["assets/icons/bx-zoom-in.svg","25d4b9f8a182441f2f9a9eadea27e934"],["assets/icons/cellphone-link.svg","5e128e7eab4e18e02e376593ccce2925"],["assets/icons/cv.svg","d9ae719ffd0795f5a5d1710e12ee5d4d"],["assets/icons/email.svg","402c3cb13243e3cba6baa1092a529e0c"],["assets/icons/github.svg","ff904ac260cd69e00eef59aa2814d9a3"],["assets/icons/icons8-facebook.svg","d3dd88cdf089b8cb7cb679b654c00116"],["assets/icons/lightbulb-outline.svg","a459e88bba70b4f9a513e45999ae3f36"],["assets/icons/rocket-sharp.svg","c2d809136e989ce7a1a959aa521de419"],["assets/icons/speedometer.svg","4ee4fb04d2474cd9430e4ca0de1edf26"],["assets/images/AfterEffects.png","dbc67cd7291cb06e400d0fda460d75b7"],["assets/images/Effect Controls.png","393bfd7ec4669a21078e017de1ca11be"],["assets/images/FileExplorer.png","d1292433ae40909d75566a70ae89317b"],["assets/images/MFM.jpg","1c64ac44e58afad6d5c6b669b909be0d"],["assets/images/MFM_Logo.png","39b14af11286c1b37fa8f7b430789639"],["assets/images/MakeNewProject.png","0a1b1c97f8ac72fde1fa6b9d7cc8df23"],["assets/images/ProjectVideoWindow.png","3a9b0d5ef4d17860abb0729dcf5e604e"],["assets/images/Quarantine_Explanation.jpg","24de50bade0f9fcf44a70740db533580"],["assets/images/Screenshots/Aanwezigheidslijst.jpg","bbcbb9910f2eb321afdd2ffbd5920097"],["assets/images/Screenshots/Bevestiging.jpg","70ecd364844286cb183575b59304c827"],["assets/images/Screenshots/FeedPlay.jpg","08d3d7da12de346b435b0d08dba34b4f"],["assets/images/Screenshots/Inlog.jpg","6c664adfdcdb76914b6da464b237fc5b"],["assets/images/Screenshots/Inlog.png","6f63effb438dce924e3b603218f9809b"],["assets/images/Screenshots/Match1.png","e81b78a0db5017a445c7ae3ba638332b"],["assets/images/Screenshots/Match2.png","7ee1b9a6fc8fd80c1dcbd220a03c92c5"],["assets/images/Screenshots/Match3.png","c2ab73c10e8129e67b47a3e3ed557850"],["assets/images/Screenshots/Speler Presentie Mockup.jpg","1479eb9b4fec8d1d9cfc8a97d322ceb5"],["assets/images/Screenshots/Speler Presentie.jpg","442e651dd75b62b30b47eb245390e36d"],["assets/images/Screenshots/Speler.jpg","e4deeb6fd46f8e2e73f57abbc6800db7"],["assets/images/Screenshots/Spelersprofiel.jpg","84a8348b77d4142cdf543afae1472730"],["assets/images/Screenshots/Spelersprofiel_voor.jpg","a23c05fb003dafdbeae2640aad3e9e4a"],["assets/images/TimeLineCursorOnClip.png","16e848f0589b84bd7037d7bfdb829f58"],["assets/images/Workspace.png","a48f2bb8eea7b020335173228e1b8708"],["assets/images/hp.jpg","863aa73afdb8ef5b38871d6ec1ab43fc"],["assets/images/hpTitle.png","b2c3c9f018d3c2a9467a3f23a60b249b"],["assets/images/ik/BlackWhiteEindhovenKerkPlein.jpg","42ccdba70aeac10c337bf28627d598df"],["assets/images/ik/BlackWhiteInHuis.png","41f3cbfb1f8674840b2e8b5ab8a47aa4"],["assets/images/ik/BlackWhiteTuinFoto.png","f7d26105d0826e3df42cb3a386be7f8b"],["assets/images/logo.png","682c10d7ee227352cf7d09a0bce34dbb"],["assets/images/p5.jpeg","3666ed370b7386f4d47ba9a8656b6c72"],["assets/images/p5.png","862fcf545786832ced16f0dead13ee13"],["assets/images/p5_tile.png","1d089f01712bd210c20b2029a217e938"],["assets/images/pixelart/AppleCiderPixel.png","a9d1d992b6060ff46fa9352986c12c61"],["assets/images/pixelart/adobe-illustrator-logo.png","e5356c9766b49e62e80a631f821611dd"],["assets/images/questionMark.jpg","f89925b8679399c064be42da53640c6a"],["assets/images/questionMarkArt.jpg","36c30bd11765958bff0a99d320db9195"],["assets/images/react-native.png","580ffd26ccaa16481ed87c1829c74943"],["assets/images/react-native2.png","1391b97a3c1c82ab93e5c89685c9b4a4"],["assets/images/screen1.png","8768c94324a9e394528c300b1772f270"],["assets/images/screen2.png","73b1be2cdeecaf5a8bf8ca3f11e7a1e2"],["assets/images/screen3.png","1edb7ea44681b245c115f88193544828"],["assets/images/screenshots.png","df7076ed224d79fdac7e601f23a38711"],["assets/images/solid.jpeg","bdf3ba8c4213499aa99168f7894b6d31"],["assets/images/solidsight.png","a68e9ff4a6c1c626e2a905e7d9897280"],["assets/images/solidsight/home_page.png","64d9082ffe75e1f1ee8d634528c825cc"],["assets/images/solidsight/landing_page.png","d462c2928212bbe14fdcff5017ceea72"],["assets/images/solidsight/setup1_page.png","38902e93dfa11e090a88f673954d6796"],["assets/images/solidsight/setup2_page.png","d29b4617e035e3915cc9a3dc5577428d"],["assets/images/solidsight/solid.png","51a4e42d5188933ac6dfb37f11631915"],["assets/images/solidsight/video_page.png","b524ef338f8f1550b77d69c188f7a74a"],["assets/images/solidsight/wireframe.png","02764e387ed01f851f7962746b25fda8"],["assets/images/swift.jpg","669a3085af4ebf5c561a5d20801ad869"],["assets/images/trainer.jpg","7203fcb3dd06a8a00769bcf8663ec35b"],["assets/vids/HarryPotterWithFullTitle.mp4","ee59882e3893308f2ef0b475281fa869"],["assets/vids/p5.mp4","3505f053f18743b4a8af0ae674a06d75"],["css/MediaQuery.css","8ad7dac9bfacc049dce30c99429d22a7"],["css/fontAwesome.css","04fd094b9165a9b3962efb0c8bc3b1e7"],["css/keyframes.css","25391f62872d586048204d57bdec829f"],["css/lightBox.css","6d745d9866b55bcbc50fa67fefb690d0"],["css/sprintx.css","6e5cc032fe98e44146202295edc95a82"],["css/style.css","7d51f2e0ffa475f50e4d4cd1619273f3"],["css/test.css","a8fd6fdaacdbbe1f6f84082c2fdf4a59"],["css/test2.css","bb7a0245cdcc55b4a984eedc4b14b491"],["favicon.ico","67750f2e3eff435c72420a287e24732c"],["features&issues.txt","0d3187cb0e925cb9b6e818bdea52885b"],["index.html","8ceddefef4dbb71d4a14070f8497e168"],["manifest.json","8a2b9ed069b411260ac836ae1120abfa"],["pdf/CV Rick van Wijk.pdf","e16c6e65024d1bbde423d12ef81226a3"],["pdf/WebDeveloperCV.pdf","8448a6b48c002d0f123caa6df543dc9f"],["scripts/app.js","bec438f2d95164aed1ea894434d89f21"],["scripts/bgAnimation.js","68144f419e4fa5f9257371c308118e35"],["scripts/core.js","22ef3df1326756518a1e97b913f359c2"],["scripts/lightBox.js","86ae561d973f63a6effcd2ecafb8725e"],["scripts/logo_dropdown.js","3a30a9be30d069777a86c8f8805d5104"],["scripts/modal.js","2b92ce29a0c64da2291333944bb23701"],["scripts/particles.js","f10f10368bb1407fe7a0b392952ee5ab"],["sprintx.html","40bfd064a258433e26086b607fd86068"],["test.html","91e9d72d42cf44bd831909ecb612913f"],["webfonts/fa-brands-400.eot","0fabb6606be4c45acfeedd115d0caca4"],["webfonts/fa-brands-400.svg","ccfdb9dc442be0c629d331e94497428b"],["webfonts/fa-brands-400.ttf","085b1dd8427dbeff10bd55410915a3f6"],["webfonts/fa-brands-400.woff","dc0bd022735ed218df547742a1b2f172"],["webfonts/fa-brands-400.woff2","cac68c831145804808381a7032fdc7c2"],["webfonts/fa-regular-400.eot","ad3a7c0d77e09602f4ab73db3660ffd8"],["webfonts/fa-regular-400.svg","e75dfd904d366a2560c63c23cfc98ef8"],["webfonts/fa-regular-400.ttf","1a78af4105d4d56e6c34f76dc70bf1bc"],["webfonts/fa-regular-400.woff","05b53beb21e3ef13d28244545977152d"],["webfonts/fa-regular-400.woff2","3a3398a6ef60fc64eacf45665958342e"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







