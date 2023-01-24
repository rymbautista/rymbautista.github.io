console.log("Hello Frog!");

function listen(eventType, selector, callback) {
  document.querySelector(selector).addEventListener(eventType, callback);
}

function openOptionsPage(optionsHTML) {
  if (chrome.runtime.openOptionsPage) {
    chrome.runtime.openOptionsPage();
  } else {
    window.open(chrome.runtime.getURL(optionsHTML));
  }
}

async function sendMessageToContentScript(message) {
  const [tab] = await chrome.tabs.query({
    active: true,
    lastFocusedWindow: true,
  });
  const response = await chrome.tabs.sendMessage(tab.id, message);
  // You can do something with response from the content script here
  console.log(response);
}

listen("click", "#open-options", (e) =>
  openOptionsPage("../home/home.html")
);