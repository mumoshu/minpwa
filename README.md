# MinPWA

This is a minimal Progressive Web App (PWA) that demonstrates:

- How to create a PWA
- How to install a PWA as a desktop app
- How to call a Chrome extension from a PWA

I manually tested this works via localhost or over a ngrrok tunnel.

The service worker in the PWA won't work if you open the index.html file directly in the browser, or if it's served over HTTP (not HTTPS) on non-localhost.
