/**
 * Renders the create listing page with a form to create a new listing.
 * @param {Object} data - Optional data to pre-fill the form for editing an existing listing.
 * @returns {Promise<void>}
 */
import { renderCreateListingForm } from "../forms/renderCreateListingForm.js";
import { setupTagInput } from "../forms/renderTagInputFieldValues.js";
import { setupImageInput } from "../forms/renderimageInputValues.js";
import { fillInValuesToEditListingForm } from "../../../utils/formvalues/populateInputFieldsEditForm.js";
import { renderSectionHeading } from "../shared/renderSectionHeading.js";

export async function renderCreatelistingPage(data) {
  const mainContainer = document.querySelector("main");

  const mainContainerHeadingContainer = document.createElement("section");
  mainContainerHeadingContainer.classList.add("section-heading");

  const mainContainerHeading = renderSectionHeading("h1", "Create Listing");

  mainContainerHeadingContainer.appendChild(mainContainerHeading);
  mainContainer.appendChild(mainContainerHeadingContainer);

  const formMainContainer = document.createElement("section");
  formMainContainer.classList.add("container", "row", "row-cols-lg-2", "row-cols-1", "m-auto");
  formMainContainer.id = "sell-create-listing-form-container";
  formMainContainer.textContent = "";

  mainContainer.appendChild(formMainContainer);

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
