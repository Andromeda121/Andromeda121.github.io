/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "b45d6b21a7ad5aab5223ac6863fb1f15"
  },
  {
    "url": "assets/css/0.styles.bfd62ff8.css",
    "revision": "ae2091e16a740727342387df46a4b4d6"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.2f8d0059.js",
    "revision": "63ee03f03d39c47d65ac67485a27a829"
  },
  {
    "url": "assets/js/10.0f1a6214.js",
    "revision": "aed2ce279cb8069139b9ce0b4c0d8761"
  },
  {
    "url": "assets/js/11.1dcef5e3.js",
    "revision": "b44c80b1e90dd1fea3953864833ff464"
  },
  {
    "url": "assets/js/12.6b98eb08.js",
    "revision": "8e0eee022a448151912136003c905799"
  },
  {
    "url": "assets/js/13.4ab2683e.js",
    "revision": "7208e8294b490b53b99964be4640a8ae"
  },
  {
    "url": "assets/js/14.a4f14ad7.js",
    "revision": "414390e3837d548064f4ffd1c4809a7b"
  },
  {
    "url": "assets/js/15.54c65796.js",
    "revision": "31f6354b53226bdfec8eac4ce8fa2e15"
  },
  {
    "url": "assets/js/16.ed258a1e.js",
    "revision": "3715c071cd9357e79000b7b5a054ef35"
  },
  {
    "url": "assets/js/17.dd519a46.js",
    "revision": "ae2039acff2a28a34427d168746b4c61"
  },
  {
    "url": "assets/js/18.5dd2ba73.js",
    "revision": "4e7c6eed2cd1035eb0452c6068c17d61"
  },
  {
    "url": "assets/js/4.77359946.js",
    "revision": "e10459d3809dba98c1bba49ef9ec64c3"
  },
  {
    "url": "assets/js/5.e4ba4151.js",
    "revision": "7347dfdedba2d017c568c7b51150269e"
  },
  {
    "url": "assets/js/6.85d73b9b.js",
    "revision": "6663f4417c923daea0fe08aad64d7c09"
  },
  {
    "url": "assets/js/7.6503cb7d.js",
    "revision": "fe02ddd8bfbd811354a0d6b7f3f2a35d"
  },
  {
    "url": "assets/js/8.fc5b7506.js",
    "revision": "868cb4ce0a0a9291b4a5dade91da3cf6"
  },
  {
    "url": "assets/js/9.d898caf8.js",
    "revision": "c6abf0f2268fd16ebac5d1a16ddc286e"
  },
  {
    "url": "assets/js/app.fb0bd494.js",
    "revision": "0861370457bd4b93a7bb1ee0c3cef52f"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.fe7c321e.js",
    "revision": "a64ebb2f4c1ee386f2eed5d866fffdab"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "bb311141707bb7f57ba8f90cbaeef011"
  },
  {
    "url": "categories/java/index.html",
    "revision": "3052107861d0d2565d7d4d5d70ab0af1"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "6ae237fe6c6198d6889452480c004732"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "aaa243e50974f0fb97f7ce790f57301a"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "f7bc1c7e465d28b0de717dc9d338f442"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "51a86f379d36678987b18aaef842b13e"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "330947cc56a1b3311084bbb6784f602f"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "146f73e56b81a6cc08bdd28d64be6587"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "f783184ca83da1a64e2770831361ae82"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "f32e43b15adcc8165e23070cce853f96"
  },
  {
    "url": "tags/js/index.html",
    "revision": "45c4deac1ddee41e16788c4379aaea3c"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "f32e7b03c81d2914699316257bee0651"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "712911411de2afbfe4f81cc295cfc9e8"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "bf4b44cccfc22708db207fb5d2b623a0"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "04a7b1b65d477d0795b35ca15fbd152e"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "259cbcc1a5a46f4e231b95d68165ab2c"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "4556936faec2e846dde59171d28170d4"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "f025df63b70d04855070410e6be3b097"
  },
  {
    "url": "timeline/index.html",
    "revision": "2ff5565f006badd9842ec5cfede9c32a"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "978dcd8d651a5dc8494b8502ea6e4875"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "32b8ff40fb25f0650d13f0cd3cf8d730"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "3c2b37c90fb652a0f7e42a560299b219"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "d6879f3d474251928e6a860fdd51ec09"
  },
  {
    "url": "生活分享/life.html",
    "revision": "b30b4862952b41de8a1758c3f2a8806e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
