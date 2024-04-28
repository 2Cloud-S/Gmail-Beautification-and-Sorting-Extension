function addSpamIndicator(email) {
    const spamIndicator = document.createElement("span");
    spamIndicator.classList.add("spam-indicator");
    spamIndicator.textContent = "SPAM";
    email.appendChild(spamIndicator);
  }
  
  function addImportantIndicator(email) {
    const importantIndicator = document.createElement("span");
    importantIndicator.classList.add("important-indicator");
    importantIndicator.textContent = "IMPORTANT";
    email.appendChild(importantIndicator);
  }