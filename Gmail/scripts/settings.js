import { getSortingPreference, saveSortingPreference } from "./storage.js";

// settings.js


document.addEventListener("DOMContentLoaded", () => {
    const settingsContainer = document.getElementById("settings-container");

    // Load settings from storage
    getSortingPreference().then((sortingPreference) => {
        const sortingSelect = document.getElementById("sorting-select");
        sortingSelect.value = sortingPreference || "default";
    });

    settingsContainer.addEventListener("click", (event) => {
        if (event.target.id === "save-button") {
            // Save settings to storage
            const sortingSelect = document.getElementById("sorting-select");
            const sortingPreference = sortingSelect.value;
            saveSortingPreference(sortingPreference)
                .then(() => {
                    console.log("Settings saved successfully!");
                })
                .catch((error) => {
                    console.error("Error saving settings:", error);
                });
        }
    });
});