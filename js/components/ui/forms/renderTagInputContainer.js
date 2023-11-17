/**
 * Renders a tag input container with a label, input field, button, description help, and tags container.
 * @returns {HTMLDivElement} The tag input container element.
 */
export function renderTagInput() {
  const tagInputContainer = document.createElement("div");
  tagInputContainer.classList.add("mb-3", "tag-input");

  const label = document.createElement("label");
  label.setAttribute("for", "listing-tag-input");
  label.classList.add("form-label");
  label.textContent = "Tags";

  const inputButtonDiv = document.createElement("div");
  inputButtonDiv.classList.add("w-100", "d-flex");

  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "Add a tag..");
  input.setAttribute("id", "listing-tag-input");
  input.setAttribute("autocomplete", "off");
  input.setAttribute("maxlength", "15");
  input.classList.add("w-75");

  const addButton = document.createElement("button");
  addButton.setAttribute("type", "button");
  addButton.setAttribute("id", "add-tag-btn");
  addButton.textContent = "Add tag";
  addButton.classList.add("btn", "btn-primary", "w-25");

  inputButtonDiv.appendChild(input);
  inputButtonDiv.appendChild(addButton);

  const descriptionHelp = document.createElement("div");
  descriptionHelp.setAttribute("id", "descriptionHelp");
  descriptionHelp.classList.add("form-text");
  descriptionHelp.textContent = "Add up to 8 relevant keywords or tags.";

  const tagsContainer = document.createElement("div");
  tagsContainer.classList.add("tags", "d-flex", "flex-wrap", "align-items-center");

  const messageContainer = document.createElement("div");
  messageContainer.classList.add("tags-message-container");

  tagInputContainer.appendChild(label);
  tagInputContainer.appendChild(inputButtonDiv);
  tagInputContainer.appendChild(messageContainer);
  tagInputContainer.appendChild(descriptionHelp);

  tagInputContainer.appendChild(tagsContainer);

  return tagInputContainer;
}
