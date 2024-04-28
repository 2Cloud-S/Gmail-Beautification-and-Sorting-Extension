document.addEventListener("DOMContentLoaded", () => {
    const templateList = document.getElementById("template-list");
  
    // Fetch templates from a server or use predefined templates
    const templates = [
      { name: "template1", url: "template1.html" },
  { name: "template2", url: "template2.html" },
      // Add more templates here
    ];
  
    templates.forEach((template) => {
      const li = document.createElement("li");
      const button = document.createElement("button");
      button.dataset.template = template.name;
      button.textContent = template.name;
      li.appendChild(button);
      templateList.appendChild(li);
    });
  
    templateList.addEventListener("click", (event) => {
      if (event.target.tagName.toLowerCase() === "button") {
        const templateName = event.target.dataset.template;
        currentTemplate = templateName;
        loadTemplatePreview(templateName);
      }
    });
  });
  
  function loadTemplatePreview(templateName) {
    // Find the template object by its name
    const template = templates.find(t => t.name === templateName);

    // Fetch the template HTML
    fetch(template.url)
        .then(response => response.text())
        .then(html => {
            // Get the preview element
            const preview = document.getElementById('template-preview');

            // Set the preview HTML
            preview.innerHTML = html;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}