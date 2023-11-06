import { renderFormTextInputs } from "./renderFormTextInputs.js";
import { createListingFormTextInputs, createlistingFormDateInput } from "../../../settings/formKeys.js";
import { renderTagInput } from "./renderTagInputContainer.js";
import { renderImageInputContainer } from "./renderImageInputContainer.js";
import { validateCreateListing } from "../../../utils/validation/validateCreateListingForm.js";
import { renderFormSubmitBtn } from "../forms/renderFormSubmitBtn.js";

/**
 * Renders a form for creating a new listing.
 * @returns {void}
 */
export function renderCreateListingForm() {
  const createListingForm = document.createElement("form");
  createListingForm.id = "sell-create-listing-form";

  const formTextInputs = renderFormTextInputs(createListingFormTextInputs);

  formTextInputs.forEach((input) => {
    createListingForm.appendChild(input);
  });

  const tagContainer = renderTagInput();
  createListingForm.appendChild(tagContainer);

  const imageInputContainer = renderImageInputContainer();
  createListingForm.appendChild(imageInputContainer);

  const dateInput = renderFormTextInputs(createlistingFormDateInput);
  createListingForm.appendChild(dateInput[0]);

  const submitBtn = renderFormSubmitBtn("create-listing");

  createListingForm.appendChild(submitBtn);

  createListingForm.addEventListener("submit", validateCreateListing);

  return createListingForm;
}
