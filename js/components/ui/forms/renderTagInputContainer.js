export function renderTagInput() {
  // Create the outer div container
  const tagInputContainer = document.createElement("div");
  tagInputContainer.classList.add("mb-3", "tag-input");

  // Create the label element
  const label = document.createElement("label");
  label.setAttribute("for", "listing-tag-input");
  label.classList.add("form-label");
  label.textContent = "Tags";

  // Create a div for input and button
  const inputButtonDiv = document.createElement("div");
  inputButtonDiv.classList.add("input-button", "d-flex");

// fikse hva some skjedde med tags input og button


  // Create the input element
  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "Add a tag..");
  input.setAttribute("id", "listing-tag-input");
  input.setAttribute("autocomplete", "off");
  input.setAttribute("maxlength", "15");

  // Create the button element
  const addButton = document.createElement("button");
  addButton.setAttribute("type", "button");
  addButton.setAttribute("id", "add-tag-btn");
  addButton.textContent = "Add tag";

  // Append input and button to the div
  inputButtonDiv.appendChild(input);
  inputButtonDiv.appendChild(addButton);

  // Create the descriptionHelp div
  const descriptionHelp = document.createElement("div");
  descriptionHelp.setAttribute("id", "descriptionHelp");
  descriptionHelp.classList.add("form-text");
  descriptionHelp.textContent = "Add up to 8 relevant keywords or tags.";

  // Create the tags container div
  const tagsContainer = document.createElement("div");
  tagsContainer.classList.add("tags");

  // Append label, inputButtonDiv, descriptionHelp, and tagsContainer to the main container
  tagInputContainer.appendChild(label);
  tagInputContainer.appendChild(inputButtonDiv);
  tagInputContainer.appendChild(descriptionHelp);
  tagInputContainer.appendChild(tagsContainer);

  return tagInputContainer;
}

// used chatgpt to generate this code

