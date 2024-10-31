# minpwa extension

This is an example Chrome extention that is called from minpwa.

The purpose of this extention is illustrate what's written in:

https://chromeos.dev/en/kiosk/connecting-an-extension-from-a-kiosk-pwa

To install this extension, browse chrome://extensions/ and enable Developer mode. Then click on Load unpacked and select the extension folder.

To test the extension, click the extension icon in the Chrome toolbar. This will open a new tab with the extension's popup.html.

You'll find a button labeled "Send Immediately". Clicking this button will send a message to the minpwa server listening on localhost:8080. The server will respond with a message that will be logged to the console.

## Implementation notes

Note that unlike the example in the link above, this extension does not specify:

```json
    "kiosk_enabled": true,
```

This is because Chrome warned that it is not supported for an extension, saying:

```
'kiosk_enabled' is only allowed for packaged apps, but this is a extension.
```

We don't use `browser_action` because we use manifest version 3 and Chrome says:

```
'browser_action' requires manifest version of 2 or lower.
```
