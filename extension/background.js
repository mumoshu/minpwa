console.log('MinPWA extension background script loaded');

chrome.runtime.onMessageExternal.addListener(function (request, sender, sendResponse) {
  console.log('MinPWA extension received message from external script:', request);
});

chrome.action.onClicked.addListener(tab => {
  chrome.tabs.create({
    url: chrome.runtime.getURL("index.html")
  });
});
