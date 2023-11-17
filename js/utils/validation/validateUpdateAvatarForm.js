/**
 * Validates the avatar form input and updates the user's profile avatar.
 * @param {Event} e - The submit event.
 * @returns {void}
 */
import { validateImageUrl } from "./validationTools.js";
import { renderLoadingSpinner } from "../../components/ui/state_handlers/loadingIndicator.js";
import displayMessage from "../../components/ui/state_handlers/displayMessage.js";
import changeInputStatus from "../../components/ui/state_handlers/changeInputStatus.js";
import { updateProfileAvatar } from "../api/put/updateProfileAvatar.js";

export function validateAvatarForm(e) {
  e.preventDefault();

  const avatarInput = document.querySelector("#avatar-form-input");
  const avatarSubmitBtn = document.querySelector("#update-avatar-submit_btn");
  const spinner = renderLoadingSpinner(avatarSubmitBtn);
  const imageUrl = avatarInput.value;

  if (imageUrl === "") {
    displayMessage("error", "Please enter an image URL", ".avatar-form-input-message-container");
    changeInputStatus(avatarInput, "error");
    return;
  }

  validateImageUrl(imageUrl, spinner).then((result) => {
    if (result) {
      spinner.hide();
      displayMessage("success", "Image is valid", ".avatar-form-input-message-container");
      changeInputStatus(avatarInput, "success");
      updateProfileAvatar(imageUrl);
    } else {
      displayMessage("error", "Please enter a valid image URL", ".avatar-form-input-message-container");
      changeInputStatus(avatarInput, "error");
    }
  });
}
