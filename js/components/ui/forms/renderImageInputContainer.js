/**
 * Creates a container for an image input field with an "Add image" button, a description help text, and a container for displaying added images.
 * @returns {HTMLDivElement} The image input container element.
 */
export function renderImageInputContainer() {
  const imageInputContainer = document.createElement("div");
  imageInputContainer.classList.add("mb-3", "image-input");

  const label = document.createElement("label");
  label.setAttribute("for", "listing-image-input");
  label.classList.add("form-label");
  label.textContent = "Images";

  const inputButtonDiv = document.createElement("div");
  inputButtonDiv.classList.add("w-100", "d-flex");

  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute(
    "placeholder",
    "Example: https://www.example.com/image.jpg",
  );
  input.setAttribute("id", "listing-image-input");
  input.setAttribute("autocomplete", "off");
  input.classList.add("w-75", "border-0");

  const addButton = document.createElement("button");
  addButton.setAttribute("type", "button");
  addButton.setAttribute("id", "add-image-btn");
  addButton.textContent = "Add image";
  addButton.classList.add("btn", "btn-primary", "w-25");

  inputButtonDiv.appendChild(input);
  inputButtonDiv.appendChild(addButton);

  const descriptionHelp = document.createElement("div");
  descriptionHelp.setAttribute("id", "descriptionHelp");
  descriptionHelp.classList.add("form-text");
  descriptionHelp.textContent = "Add a image url";

  const imagesContainer = document.createElement("div");
  imagesContainer.classList.add(
    "images",
    "d-flex",
    "flex-wrap",
    "align-items-center",
    "gap-2",
  );

  const messageContainer = document.createElement("div");
  messageContainer.classList.add("image-message-container");

  imageInputContainer.appendChild(label);
  imageInputContainer.appendChild(inputButtonDiv);
  imageInputContainer.appendChild(messageContainer);
  imageInputContainer.appendChild(descriptionHelp);
  imageInputContainer.appendChild(imagesContainer);

  return imageInputContainer;
}
