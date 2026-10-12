const CACHE_NAME = 'portfolio-v2'

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.add('/'))
      .catch(() => {})
      .then(() => self.skipWaiting()),
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)),
        ),
      )
      .then(() => self.clients.claim()),
  )
})

self.addEventListener('fetch', (event) => {
  const { request } = event

  if (request.method !== 'GET') return

  const url = new URL(request.url)

  // Only handle same-origin requests.
  if (url.origin !== self.location.origin) return

  // Let the browser handle Next.js build assets directly (they are content-hashed
  // and immutable). Intercepting them was the cause of stale/blank pages.
  if (url.pathname.startsWith('/_next/')) return

  // Network-first: always try to serve fresh content. Fall back to the cache
  // only when the network is unavailable (offline support).
  event.respondWith(
    fetch(request)
      .then((response) => {
        // Only cache valid, complete, same-origin responses.
        if (response && response.status === 200 && response.type === 'basic') {
          const copy = response.clone()
          caches
            .open(CACHE_NAME)
            .then((cache) => cache.put(request, copy))
            .catch(() => {})
        }
        return response
      })
      .catch(async () => {
        const cached = await caches.match(request)
        if (cached) return cached

        // Offline fallback only for page navigations.
        if (request.mode === 'navigate') {
          const shell = await caches.match('/')
          if (shell) return shell
        }

        // Never return the app shell for an image/script request — that produced
        // broken images. Surface a real network error instead.
        return Response.error()
      }),
  )
})
