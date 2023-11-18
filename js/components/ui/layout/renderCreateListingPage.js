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
  mainContainer.innerHTML = "";

  const mainContainerHeadingContainer = document.createElement("section");
  mainContainerHeadingContainer.classList.add("section-heading");

  const mainContainerHeading = renderSectionHeading("h1", "Create Listing");

  mainContainerHeadingContainer.appendChild(mainContainerHeading);
  mainContainer.appendChild(mainContainerHeadingContainer);

  const formMainContainer = document.createElement("section");
  formMainContainer.classList.add("container", "row", "m-auto");
  formMainContainer.id = "sell-create-listing-form-container";
  formMainContainer.textContent = "";

  mainContainer.appendChild(formMainContainer);

  const formContainer = document.createElement("div");
  formContainer.classList.add("col-12", "col-lg-6","col-md-8","m-auto");
  formContainer.id = "sell-create-form";

  formMainContainer.appendChild(formContainer);

  if (data) {
    const createListingForm = renderCreateListingForm(data);
    formContainer.appendChild(createListingForm);
    fillInValuesToEditListingForm(data);
  } else {
    const createListingForm = renderCreateListingForm();
    formContainer.appendChild(createListingForm);
  }

  setupTagInput();
  setupImageInput();
}
