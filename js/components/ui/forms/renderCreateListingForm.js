import { renderFormSubmitBtn } from "./renderFormSubmitBtn.js";
import { renderFormTextInputs } from "./renderFormTextInputs.js";
import { createListingFormTextInputs, createlistingFormDateInput } from "../../../settings/formKeys.js";
import { renderTagInput } from "./renderTagInputContainer.js";
import { setupTagInput } from "./renderTagInputFieldValues.js";
import { renderImageInputContainer } from "./renderImageInputContainer.js";
import { setupImageInput } from "./renderimageInputValues.js";



export function renderCreateListingForm() {
  const formMainContainer = document.querySelector("#sell-create-listing-form-container");

  const createListingForm = document.createElement("form");
  createListingForm.id = "sell-create-listing-form";
  createListingForm.classList.add("row", "row-cols-md-2", "row-cols-1");

  const formContainerOne = document.createElement("div");
  formContainerOne.classList.add("col");
  formContainerOne.id = "sell-create-form-one";

  const formContainerTwo = document.createElement("div");
  formContainerTwo.classList.add("col");
  formContainerTwo.id = "sell-create-form-two";

  const submitBtnContainer = document.createElement("div");
  submitBtnContainer.classList.add("col", "d-flex", "justify-content-center");

  createListingForm.appendChild(formContainerOne);
  createListingForm.appendChild(formContainerTwo);
  createListingForm.appendChild(submitBtnContainer);

  formMainContainer.appendChild(createListingForm);

  // formcontainerOne content

  const formTextInputs = renderFormTextInputs(createListingFormTextInputs);

  formTextInputs.forEach((input) => {
    formContainerOne.appendChild(input);
  });

  const tagContainer = renderTagInput();
  formContainerOne.appendChild(tagContainer);

  setupTagInput();

  const imageInputContainer = renderImageInputContainer();
  formContainerOne.appendChild(imageInputContainer);

  setupImageInput();




  const dateInput = renderFormTextInputs(createlistingFormDateInput);
  formContainerOne.appendChild(dateInput[0]);

  // formcontainerTwo content





  // submitBtnContainer content

  const submitButton = renderFormSubmitBtn("create-listing");
  submitBtnContainer.appendChild(submitButton);

  createListingForm.addEventListener("submit", validateCreateListing);
}

function validateCreateListing(e) {
  e.preventDefault();

  console.log("asdrfg");
}
