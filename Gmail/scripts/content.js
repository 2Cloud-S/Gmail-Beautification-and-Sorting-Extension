function observeEmails() {
    const emailContainers = document.querySelectorAll(".zA.aOv");
  
    emailContainers.forEach((container) => {
      const email = container.querySelector(".y6");
      const spam = container.querySelector(".zM");
      const important = container.querySelector(".J-J5-Ji");
  
      if (spam) {
        addSpamIndicator(spam);
      }
  
      if (important) {
        addImportantIndicator(important);
      }
    });
  }
  
  // Observe emails periodically
  setInterval(observeEmails, 1000);
  
  // Listen for messages from the background script
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === "undoChanges") {
      undoChanges();
    } else if (request.type === "resetChanges") {
      resetChanges();
    }
  });
  
  // Add event listeners for Gmail elements
  document.addEventListener("click", (event) => {
    if (event.target.matches(".template-button")) {
      const templateName = event.target.dataset.template;
      sendMessageToBackground({ type: "applyTemplate", templateName });
    }
  });
  
  document.addEventListener("change", (event) => {
    if (event.target.matches("#sorting-select")) {
      const sortingPreference = event.target.value;
      sendMessageToBackground({
        type: "applySorting",
       sortingPreference,
      });
    }
  });
  
  function sendMessageToBackground(message) {
    chrome.runtime.sendMessage(message);
  }