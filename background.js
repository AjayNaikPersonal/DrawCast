chrome.tabs.onActivated.addListener(function(activeInfo) {
    chrome.tabs.executeScript(activeInfo.tabId, {
        file: 'src/components/Injector.jsx',
        runAt: 'document_idle'
    });
});