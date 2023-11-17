/**
 * Renders a form for creating a new listing.
 * @param {Object} data - The data for the listing to be created.
 * @returns {HTMLFormElement} - The HTML form element for creating a new listing.
 */
import { renderFormTextInputs } from "./renderFormTextInputs.js";
import { createListingFormTextInputs, createlistingFormDateInput } from "../../../settings/formKeys.js";
import { renderTagInput } from "./renderTagInputContainer.js";
import { renderImageInputContainer } from "./renderImageInputContainer.js";
import { renderFormSubmitBtn } from "../forms/renderFormSubmitBtn.js";
import { deleteListing } from "../../../utils/api/delete/deleteListing.js";
import { validateCreateListing } from "../../../utils/validation/validateCreateListingForm.js";

export function renderCreateListingForm(data) {
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

  createListingForm.addEventListener("submit", function (e) {
    e.preventDefault();
    validateCreateListing(data);
  });

  const messageContainer = document.createElement("div");
  messageContainer.classList.add("create-listing-message-container");

  createListingForm.appendChild(messageContainer);

  if (data) {
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("btn", "btn-danger", "mt-5");
    deleteBtn.id = "delete-listing-btn";

    const span = document.createElement("span");
    span.classList.add("mx-auto");

    span.textContent = "Delete Listing";
    deleteBtn.appendChild(span);
    createListingForm.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", function (e) {
      e.preventDefault();
      deleteListing(data.id);
    });
  }

  return createListingForm;
}
