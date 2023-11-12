import { renderCreateListingForm } from "../forms/renderCreateListingForm.js";
import { setupTagInput } from "../forms/renderTagInputFieldValues.js";
import { setupImageInput } from "../forms/renderimageInputValues.js";
import { collectTagValues } from "../forms/renderTagInputFieldValues.js";

export function renderCreatelistingPage() {
  const formMainContainer = document.querySelector("#sell-create-listing-form-container");
  formMainContainer.classList.add("row", "row-cols-lg-2", "row-cols-1", "m-auto");
  formMainContainer.textContent = "";

  const formContainer = document.createElement("div");
  formContainer.classList.add("col");
  formContainer.id = "sell-create-form";

  const previewContainer = document.createElement("div");
  previewContainer.classList.add("col");
  previewContainer.id = "sell-create-preview";

  const messageContainer = document.createElement("div");
  messageContainer.classList.add("create-listing-message-container");

  formMainContainer.appendChild(formContainer);
  formMainContainer.appendChild(previewContainer);
  formMainContainer.appendChild(messageContainer);

  const createListingForm = renderCreateListingForm();
  formContainer.appendChild(createListingForm);

  // continue on preview container

  setupTagInput();
  setupImageInput();

  // 1. rendre all preview elements
  // 2. Have all event listeners on form elements
  // 3. Have all event listeners on preview elements

  const addTagBtn = document.querySelector("#add-tag-btn");

  addTagBtn.addEventListener("click", (e) => {
    const inputTags = collectTagValues();
  });

  const titleInput = document.querySelector("#title");

  titleInput.addEventListener("input", (e) => {
    const title = e.target.value;
  });
}