import { collectImageValues } from "../../components/ui/forms/renderimageInputValues.js";
import { collectTagValues } from "../../components/ui/forms/renderTagInputFieldValues.js";
import { validateLength, validateDateInput } from "./validationTools.js";
import displayMessage from "../../components/ui/state_handlers/displayMessage.js";
import changeInputStatus from "../../components/ui/state_handlers/changeInputStatus.js";
import { registerNewListing } from "../api/post/registerNewListing.js";

export function validateCreateListing(e) {
  e.preventDefault();

  console.log("asdrfg");
  const titleInput = document.querySelector("#title");
  const descriptionInput = document.querySelector("#description");
  const dateInput = document.querySelector("#end-date");

  const tagArray = collectTagValues();
  const imageArray = collectImageValues();

  const title = validateLength(titleInput.value, 2, 30);
  const description = validateLength(descriptionInput.value, 4, 200);
  const date = validateDateInput(dateInput.value);

  console.log(tagArray, imageArray);

  if (title) {
    displayMessage("success", "Title is valid", "#titleHelp");
    changeInputStatus(titleInput, "success");
  } else {
    displayMessage("error", "Title must be between 3 and 30 characters long", "#titleHelp");
    changeInputStatus(titleInput, "error");
  }

  if (description) {
    displayMessage("success", "Description is valid", "#descriptionHelp");
    changeInputStatus(descriptionInput, "success");
  } else {
    displayMessage("error", "Description must be between 5 and 200 characters long", "#descriptionHelp");
    changeInputStatus(descriptionInput, "error");
  }

  if (date) {
    displayMessage("success", "Date is valid", "#end-dateHelp");
    changeInputStatus(dateInput, "success");
  } else {
    displayMessage("error", "Date must be in the future", "#end-dateHelp");
    changeInputStatus(dateInput, "error");
  }

  if (tagArray.tags.length === 0) {
    displayMessage("error", "Please add at least one tag", ".tags");
    changeInputStatus(document.querySelector("#listing-tag-input"), "error");
  } else {
    displayMessage("success", "Tags are valid", ".tags");
    changeInputStatus(document.querySelector("#listing-tag-input"), "success");
  }

  if (imageArray.media.length === 0) {
    displayMessage("error", "Please add at least one image", ".images");
    changeInputStatus(document.querySelector("#listing-image-input"), "error");
  } else {
    displayMessage("success", "Images are valid", ".images");
    changeInputStatus(document.querySelector("#listing-image-input"), "success");
  }
  console.log(imageArray, tagArray, titleInput.value, descriptionInput.value, dateInput.value);

  const newListingValues = {
    title: titleInput.value,
    description: descriptionInput.value,
    endDate: dateInput.value,
    tags: tagArray,
    images: imageArray,
  };

  console.log(newListingValues);

  if (title && description && date && tagArray.tags.length > 0 && imageArray.media.length > 0) {
    registerNewListing(newListingValues);
  }
}
