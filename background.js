chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return {cancel: true}; },
    { urls: ["*://*.doubleclick.net/*"] },
    ["blocking"]
);