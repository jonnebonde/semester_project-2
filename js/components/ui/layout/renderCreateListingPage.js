import { renderCreateListingForm } from "../forms/renderCreateListingForm.js";
import { setupTagInput } from "../forms/renderTagInputFieldValues.js";
import { setupImageInput } from "../forms/renderimageInputValues.js";
import { fillInValuesToEditListingForm } from "../../../utils/formvalues/populateInputFieldsEditForm.js";

export async function renderCreatelistingPage(data) {
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

  if (data) {
    const createListingForm = renderCreateListingForm(data);
    formContainer.appendChild(createListingForm);
    formContainer.appendChild(messageContainer);
    fillInValuesToEditListingForm(data);
  } else {
    const createListingForm = renderCreateListingForm();
    formContainer.appendChild(createListingForm);
    formContainer.appendChild(messageContainer);
  }

  setupTagInput();
  setupImageInput();
}


