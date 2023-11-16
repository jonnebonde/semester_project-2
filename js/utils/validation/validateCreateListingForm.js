import { collectImageValues } from "../../components/ui/forms/renderimageInputValues.js";
import { collectTagValues } from "../../components/ui/forms/renderTagInputFieldValues.js";
import { validateLength, validateDateInput } from "./validationTools.js";
import displayMessage from "../../components/ui/state_handlers/displayMessage.js";
import changeInputStatus from "../../components/ui/state_handlers/changeInputStatus.js";
import { registerNewListing } from "../api/post/registerNewListing.js";

export function validateCreateListing(e) {
  e.preventDefault();

  const titleInput = document.querySelector("#title");
  const descriptionInput = document.querySelector("#description");
  const dateInput = document.querySelector("#end-date");

  const tagArray = collectTagValues();
  const imageArray = collectImageValues();

  const title = validateLength(titleInput.value, 2, 30);
  const description = validateLength(descriptionInput.value, 4, 200);
  const date = validateDateInput(dateInput.value);

  if (title) {
    displayMessage("success", "Title is valid", ".title-message-container");
    changeInputStatus(titleInput, "success");
  } else {
    displayMessage("error", "Title must be between 3 and 30 characters long", ".title-message-container");
    changeInputStatus(titleInput, "error");
  }

  if (description) {
    displayMessage("success", "Description is valid", ".description-message-container");
    changeInputStatus(descriptionInput, "success");
  } else {
    displayMessage("error", "Description must be between 5 and 200 characters long", ".description-message-container");
    changeInputStatus(descriptionInput, "error");
  }

  if (date) {
    displayMessage("success", "Date is valid", ".end-date-message-container");
    changeInputStatus(dateInput, "success");
  } else {
    displayMessage("error", "Date must be in the future", ".end-date-message-container");
    changeInputStatus(dateInput, "error");
  }

  if (tagArray.tags.length === 0) {
    displayMessage("error", "Please add at least one tag", ".tags-message-container");
    changeInputStatus(document.querySelector("#listing-tag-input"), "error");
  } else {
    displayMessage("success", "Tags are valid", ".tags-message-container");
    changeInputStatus(document.querySelector("#listing-tag-input"), "success");
  }

  if (imageArray.media.length === 0) {
    displayMessage("error", "Please add at least one image", ".image-message-container");
    changeInputStatus(document.querySelector("#listing-image-input"), "error");
  } else {
    displayMessage("success", "Images are valid", ".image-message-container");
    changeInputStatus(document.querySelector("#listing-image-input"), "success");
  }


  const newListingValues = {
    title: titleInput.value,
    description: descriptionInput.value,
    endDate: dateInput.value,
    tags: tagArray,
    images: imageArray,
  };

  if (title && description && date && tagArray.tags.length > 0 && imageArray.media.length > 0) {
    registerNewListing(newListingValues);
  }
}
