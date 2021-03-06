'use strict'
EventTarget.prototype.on  = EventTarget.prototype.addEventListener
EventTarget.prototype.off = EventTarget.prototype.removeEventListener
const VERSION = 'v0.3.0'
const log = console.debug.bind(console)
log('sw.js')

// Service Worker
async function worker() {
  log('worker()', self)

  const ASSETS = [
    'https://mozaic.fm/assets/font/NotoSansCJKjp-Regular-Jxck-20200211.woff2',
    'https://mozaic.fm/assets/font/NotoSansCJKjp-Bold-Jxck-20200211.woff2',
    'https://mozaic.fm/assets/font/NotoSansMonoCJKjp-Regular-Jxck-20200211.woff2',
    'https://mozaic.fm/assets/font/NotoSansMonoCJKjp-Bold-Jxck-20200211.woff2',
    'https://mozaic.fm/assets/js/highlight.pack.js',
  ]

  self.on('install', async (e) => {
    log('install > skipWaiting', e)
    async function installing() {
      const cache = await caches.open(VERSION)
      // キャッシュされた URL の一覧
      const urls = Array.from(await cache.keys()).map((req) => req.url)
      log('exists', urls)
      // キャッシュされてない ASSETS 一覧
      const diff = ASSETS.filter((asset) => !urls.includes(asset))
      log('diff', diff)
      await cache.addAll(diff)
      return skipWaiting()
    }
    e.waitUntil(installing())
  })

  self.on('activate', async (e) => {
    log('activate > claim', e)
    async function clean_cache() {
      log('version', VERSION)

      // 不要なストアの抽出
      const stores        = await caches.keys()
      const old_stores    = stores.filter((store) => store !== VERSION)
      const stores_remove = old_stores.map((store) => {
        log('remove cache table', store)
        return caches.delete(store)
      })

      // 不要なエントリの抽出
      const cache           = await caches.open(VERSION)
      const requests        = await cache.keys()
      const old_requests    = requests.filter((req) => !ASSETS.includes(req.url))
      const requests_remove = old_requests.map((req) => {
        log('remove cache', req.url)
        return cache.delete(req)
      })

      // 一斉に削除
      const result = await Promise.allSettled(stores_remove.concat(requests_remove))
      log(result)

      return self.clients.claim()
    }
    e.waitUntil(clean_cache())
  })

  self.on('fetch', async (e) => {
    const req = e.request
    log(req)

    // Cache のリストになかった場合はブラウザにフォールバック
    if (!ASSETS.includes(req.url)) return

    // cache then fetch
    async function fetching(req) {
      // safari は fetch(req) が Range だと
      // mp3 の duration が取れず Infinity になり壊れる
      // そこでここをホワイトリストにした
      const res = await caches.match(req)
      log('cache match', res)
      return res || fetch(req)
    }
    e.respondWith(fetching(req))
  })
}
worker()
