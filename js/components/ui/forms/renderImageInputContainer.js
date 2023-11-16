export function renderImageInputContainer() {
  // Create the outer div container
  const imageInputContainer = document.createElement("div");
  imageInputContainer.classList.add("mb-3", "image-input");

  // Create the label element
  const label = document.createElement("label");
  label.setAttribute("for", "listing-image-input");
  label.classList.add("form-label");
  label.textContent = "Images";

  // Create a div for input and button
  const inputButtonDiv = document.createElement("div");
  inputButtonDiv.classList.add("w-100", "d-flex");

  // Create the input element
  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "Example: https://www.example.com/image.jpg");
  input.setAttribute("id", "listing-image-input");
  input.setAttribute("autocomplete", "off");
  input.classList.add("w-75", "border-0");

  // Create the button element
  const addButton = document.createElement("button");
  addButton.setAttribute("type", "button");
  addButton.setAttribute("id", "add-image-btn");
  addButton.textContent = "Add image";
  addButton.classList.add("btn", "btn-primary", "w-25");

  // Append input and button to the div
  inputButtonDiv.appendChild(input);
  inputButtonDiv.appendChild(addButton);

  // Create the descriptionHelp div
  const descriptionHelp = document.createElement("div");
  descriptionHelp.setAttribute("id", "descriptionHelp");
  descriptionHelp.classList.add("form-text");
  descriptionHelp.textContent = "Add a image url";

  // Create the tags container div
  const imagesContainer = document.createElement("div");
  imagesContainer.classList.add("images", "d-flex", "flex-wrap", "align-items-center", "gap-2");

  const messageContainer = document.createElement("div");
  messageContainer.classList.add("image-message-container");

  // Append label, inputButtonDiv, descriptionHelp, and tagsContainer to the main container
  imageInputContainer.appendChild(label);
  imageInputContainer.appendChild(inputButtonDiv);
  imageInputContainer.appendChild(messageContainer);
  imageInputContainer.appendChild(descriptionHelp);
  imageInputContainer.appendChild(imagesContainer);

  return imageInputContainer;
}

// altered the createTagInput function to createImageInput

