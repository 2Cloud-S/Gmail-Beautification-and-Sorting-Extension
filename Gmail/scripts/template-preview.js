document.addEventListener("DOMContentLoaded", () => {
    const colorPicker = document.getElementById("color-picker");
  
    // Load the current template and customization options
    loadTemplatePreview(currentTemplate);
  
    colorPicker.addEventListener("input", () => {
      // Update the preview with the new color
    });
  
    // Add event listeners for other customization options
    const fontSelector = document.getElementById("font-selector");
    const sizeSelector = document.getElementById("size-selector");

    fontSelector.addEventListener("change", () => {
      // Update the preview with the new font
    });

    sizeSelector.addEventListener("change", () => {
      // Update the preview with the new size
    });
});
  
function loadTemplatePreview(templateName) {
    // Fetch the template HTML and display it in the template-preview
    fetch(`path/to/templates/${templateName}.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('template-preview').innerHTML = data;
        });
}