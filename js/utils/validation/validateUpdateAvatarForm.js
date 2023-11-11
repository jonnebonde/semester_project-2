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

  console.log(avatarInput.value, avatarSubmitBtn, spinner);

  const imageUrl = avatarInput.value;

  if (imageUrl === "") {
    displayMessage("error", "Please enter an image URL", "#avatar-form-inputHelp");
    changeInputStatus(avatarInput, "error");
    return;
  }

  validateImageUrl(imageUrl, spinner).then((result) => {
    if (result) {
      spinner.hide();
      displayMessage("success", "Image is valid", "#avatar-form-inputHelp");
      changeInputStatus(avatarInput, "success");
      updateProfileAvatar(imageUrl);
    } else {
      displayMessage("error", "Please enter a valid image URL", "#avatar-form-inputHelp");
      changeInputStatus(avatarInput, "error");
    }
  });


  console.log("validate avatar form");
}


