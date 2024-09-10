chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getPageContent") {
    const pageContent = document.body.innerText;
    console.log("Content script: Page content length:", pageContent.length);
    chrome.runtime.sendMessage({action: "pageContent", content: pageContent});
  }
});