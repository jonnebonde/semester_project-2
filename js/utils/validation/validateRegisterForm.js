/**
 * Validates the registration form and registers a new user if all fields are valid.
 * @param {Event} e - The submit event triggered by the user.
 * @returns {void}
 */
import displayMessage from "../../components/ui/state_handlers/displayMessage.js";
import { renderLoadingSpinner } from "../../components/ui/state_handlers/loadingIndicator.js";
import changeInputStatus from "../../components/ui/state_handlers/changeInputStatus.js";
import {
  validateUserName,
  validateEmail,
  validateLength,
  validateRepeatedPassword,
} from "./validationTools.js";
import { regiserNewUser } from "../../utils/api/post/registerUser.js";

export function validateRegister(e) {
  e.preventDefault();

  const submitRegisterFormBtn = document.querySelector("#register-submit_btn");
  const buttonSpinner = renderLoadingSpinner(submitRegisterFormBtn);

  const emailInput = document.querySelector("#email");
  const usernameInput = document.querySelector("#username");
  const newPasswordInput = document.querySelector("#password");
  const repeatPasswordInput = document.querySelector("#repeat-password");

  const email = validateEmail(emailInput.value);
  const username = validateUserName(usernameInput.value, 3, 20);
  const newPassword = validateLength(newPasswordInput.value, 7);
  const repeatPassword = validateRepeatedPassword(
    newPassword,
    newPasswordInput.value,
    repeatPasswordInput.value,
  );
  const checkTerms = document.querySelector("#checkbox").checked;

  if (email) {
    displayMessage("success", "Email is valid", ".email-message-container");
    changeInputStatus(emailInput, "success");
  } else {
    displayMessage(
      "error",
      "The email must be a stud.noroff.no email address",
      ".email-message-container",
    );
    changeInputStatus(emailInput, "error");
  }

  if (newPassword) {
    displayMessage(
      "success",
      "Password is valid",
      ".password-message-container",
    );
    changeInputStatus(newPasswordInput, "success");
  } else {
    displayMessage(
      "error",
      "Password must be at least 8 characters long",
      ".password-message-container",
    );
    changeInputStatus(newPasswordInput, "error");
  }

  if (repeatPassword) {
    displayMessage(
      "success",
      "Passwords match",
      ".repeat-password-message-container",
    );
    changeInputStatus(repeatPasswordInput, "success");
  } else {
    displayMessage(
      "error",
      "Passwords do not match",
      ".repeat-password-message-container",
    );
    changeInputStatus(repeatPasswordInput, "error");
  }

  if (checkTerms) {
    displayMessage("success", "Terms are accepted", ".terms-message-container");
  } else {
    displayMessage(
      "error",
      "Please accept the terms",
      ".terms-message-container",
    );
  }

  const newUser = {
    userName: usernameInput.value,
    email: emailInput.value,
    avatar:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
    password: newPasswordInput.value,
  };

  if (email && username && newPassword && repeatPassword && checkTerms) {
    buttonSpinner.show();
    regiserNewUser(newUser, buttonSpinner);
  }
}
