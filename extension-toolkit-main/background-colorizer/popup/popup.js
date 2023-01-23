// This is the function that will send our message to the content script.
// It is asyncronous because we want to use the "await" keyword inside it,
// which lets us wait for something to complete. In this case we wait for
// a response from the content script.
async function sendMessageToContentScript(message) {
  // This code came from the Chrome extension documentation. It just gets
  // the currently active tab on the last focused window to ensure that we
  // send the message to the right place.
  const [tab] = await chrome.tabs.query({
    active: true,
    lastFocusedWindow: true,
  });

  // We use the "await" keyword to wait for a response from the content
  // script. If you don't need a response, you can just run
  // "chrome.tabs.sendMessage(tab.id, message)" and omit the "const response = await"
  const response = await chrome.tabs.sendMessage(tab.id, message);

  // You can do something with response from the content script here,
  // if you chose to wait for it.
  console.log(response);
}

const messageButton = document.getElementById("send-message");
const colorInput = document.getElementById("color-input");

const sendMessage = (e) => {
  // colorInput.value is whatever the value of colorInput is when this code runs
  sendMessageToContentScript({ color: colorInput.value });
};

// Add an event listener to the message button that will send a message
// to the content script when the button is clicked.
messageButton.addEventListener("click", sendMessage);

// It is much more common to see an arrow function passed directly in as
// a parameter without assigning it to a variable:
//
// messageButton.addEventListener("click", (e) => {
//   sendMessageToContentScript({ test: messageText.value });
// });
