
function applySorting(emails) {
    // Call the categorizeEmails function to sort the emails
    const sortedEmails = categorizeEmails(emails);

    // Send the sorted emails to the content script
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {type: "sortedEmails", emails: sortedEmails}, function(response) {
            console.log(response);
        });
    });
}

const categorizeEmails = (emails) => {
    // Implement advanced sorting logic here
    return emails.sort((a, b) => {
        // First,S compare the priority of the emails
        if (a.priority > b.priority) {
            return -1;
        } else if (a.priority < b.priority) {
            return 1;
        }

        // If the priorities are the same, compare the dates
        return new Date(b.date) - new Date(a.date);
    });
};