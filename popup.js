console.log("Popup loaded."); // Log when the popup is loaded

document.getElementById('startButton').addEventListener('click', () => {
    console.log("Start button clicked."); // Log when the button is clicked
    // Send a message to the content script to start autofilling
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs.length > 0) {
            console.log("Sending message to content script."); // Log before sending the message
            chrome.tabs.sendMessage(tabs[0].id, { action: "startAutofill" });
        } else {
            console.error("No active tab found."); // Log if no active tab is found
        }
    });
}); 