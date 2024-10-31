# MinPWA

This is a minimal Progressive Web App (PWA) that demonstrates:

- How to create a PWA
- How to install a PWA as a desktop app
- How to call a Chrome extension from a PWA

I manually tested this works via localhost or over a ngrrok tunnel.

The service worker in the PWA won't work if you open the index.html file directly in the browser, or if it's served over HTTP (not HTTPS) on non-localhost.

To run the HTTP server that serves the PWA, run:

```sh
go run .
```

Then open http://localhost:8080 in your browser.

If you are developing over a remote connection, you can use ngrok to tunnel the localhost to a public URL:

```sh
ngrok http http://localhost:8080
```

Then open the ngrok URL in your browser.
