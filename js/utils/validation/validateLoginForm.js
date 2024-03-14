/**
 * Validates the login form by checking the email and password inputs.
 * If the email and password are valid, it logs the user in by sending a POST request to the server.
 * @param {Event} e - The submit event triggered by the user.
 * @returns {void}
 */
import { validateEmail, validateLength } from "./validationTools.js";
import { renderLoadingSpinner } from "../../components/ui/state_handlers/loadingIndicator.js";
import displayMessage from "../../components/ui/state_handlers/displayMessage.js";
import changeInputStatus from "../../components/ui/state_handlers/changeInputStatus.js";
import { loginToService } from "../../utils/api/post/loginUser.js";

export function validateLogin(e) {
  e.preventDefault();

  const submitLoginFormBtn = document.querySelector("#login-submit_btn");

  const buttonSpinner = renderLoadingSpinner(submitLoginFormBtn);

  const emailInput = document.querySelector("#email");
  const passwordInput = document.querySelector("#password");

  const email = validateEmail(emailInput.value);
  const password = validateLength(passwordInput.value, 7);

  if (email) {
    displayMessage("success", "Email is valid", ".email-message-container");
    changeInputStatus(emailInput, "success");
  } else {
    displayMessage(
      "error",
      "The email must be a noroff.no or stud.noroff.no email address",
      ".email-message-container",
    );
    changeInputStatus(emailInput, "error");
  }

  if (password) {
    displayMessage(
      "success",
      "Password is valid",
      ".password-message-container",
    );
    changeInputStatus(passwordInput, "success");
  } else {
    displayMessage(
      "error",
      "Password must be at least 8 characters long",
      ".password-message-container",
    );
    changeInputStatus(passwordInput, "error");
  }

  const loginInfo = {
    email: emailInput.value,
    password: passwordInput.value,
  };

  if (email && password) {
    buttonSpinner.show();
    loginToService(loginInfo, buttonSpinner);
  }
}
