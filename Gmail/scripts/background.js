
// Import the functions from other scripts
importScripts('template.js');
importScripts('sorting.js');

chrome.runtime.onMessage.addListener((request, _sender, sendResponse) => {
    try {
        switch (request.type) {
            case "applyTemplate":
                // Call the function from template.js
                applyTemplate(request.templateName);
                break;
            case "applySorting":
                // Call the function from sorting.js
                applySorting(request.sortingPreferences);
                break;
            default:
                console.log("Unknown message type:", request.type);
        }
    } catch (error) {
        console.error("An error occurred:", error);
    }
});