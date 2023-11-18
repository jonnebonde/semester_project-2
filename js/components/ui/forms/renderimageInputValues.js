/**
 * Sets up the image input functionality for a form.
 * @returns {Object} An object containing an array of image URLs.
 */

// ...

/**
 * Collects the image URLs from the form.
 * @returns {Object} An object containing an array of image URLs.
 */

// ...

import { renderLoadingSpinner } from "../state_handlers/loadingIndicator.js";
import { validateImageUrl } from "../../../utils/validation/validationTools.js";
import displayMessageTimer from "../state_handlers/displayMessageTimer.js";

export function setupImageInput() {
  const input = document.querySelector("#listing-image-input");
  const output = document.querySelector(".images");
  const addImageBtn = document.querySelector("#add-image-btn");
  const spinner = renderLoadingSpinner(addImageBtn);
  const maxImages = 7;

  if (output.childElementCount >= maxImages) {
    input.disabled = true;
    input.placeholder = "Max number of images reached!";
  }

  function createImageElement(imageFormat) {
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("form-image", "position-relative");

    const thumbnail = document.createElement("img");
    thumbnail.src = imageFormat;
    thumbnail.setAttribute("alt", "Thumbnail image");
    thumbnail.classList.add("thumbnail");
    thumbnail.setAttribute("width", "100px");
    thumbnail.setAttribute("height", "100px");

    const removeBtn = document.createElement("i");
    removeBtn.classList.add("fas", "fa-times", "remove-btn", "position-absolute");

    imageContainer.appendChild(thumbnail);
    imageContainer.appendChild(removeBtn);

    return imageContainer;
  }

  function addImageToOutput(imageFormat) {
    const imageElement = createImageElement(imageFormat);
    output.appendChild(imageElement);
    input.value = "";
  }

  function removeImageFromOutput(imageElement) {
    imageElement.remove();
    input.disabled = false;
    input.placeholder = "Add a tag..";
    collectImageValues();
  }

  function validateImageUrlAndHandleImage(imageUrl) {
    if (imageUrl === "") {
      spinner.hide();
      displayMessageTimer("error", "Please enter an image URL", ".image-message-container");
    } else {
      validateImageUrl(imageUrl, spinner).then((result) => {
        if (result) {
          spinner.hide();
          handleImageIfExist();
        } else {
          displayMessageTimer("error", "Please enter a valid image URL", ".image-message-container");
        }
      });
    }
  }

  function handleImageIfExist() {
    if (output.children.length >= maxImages) {
      addImageToOutput(input.value);
      collectImageValues();
      input.disabled = true;
      input.placeholder = "Max number of images reached!";
    } else {
      addImageToOutput(input.value);
      collectImageValues();
    }
  }

  function handleAddImageBtnClick(e) {
    e.preventDefault();
    spinner.show();
    const imageUrl = input.value;
    validateImageUrlAndHandleImage(imageUrl);
  }

  function handleRemoveBtnClick(e) {
    if (e.target.classList.contains("remove-btn")) {
      const imageElement = e.target.parentElement;
      removeImageFromOutput(imageElement);
    }
  }

  if (addImageBtn) {
    addImageBtn.addEventListener("click", handleAddImageBtnClick);
  }

  window.addEventListener("click", handleRemoveBtnClick);
}

export function collectImageValues() {
  const imageValues = [];
  const output = document.querySelector(".images");
  const imageElements = output.children;

  for (const image of imageElements) {
    console.log(image.children[0].src);
    const imageValue = image.children[0].src;
    imageValues.push(imageValue.trim());
  }

  const imageObject = {
    media: imageValues,
  };
  return imageObject;
}
