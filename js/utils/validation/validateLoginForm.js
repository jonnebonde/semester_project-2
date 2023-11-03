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
    displayMessage("success", "Email is valid", "#emailHelp");
    changeInputStatus(emailInput, "success");
  } else {
    displayMessage("error", "The email must be a noroff.no or stud.noroff.no email address", "#emailHelp");
    changeInputStatus(emailInput, "error");
  }

  if (password) {
    displayMessage("success", "Password is valid", "#passwordHelp");
    changeInputStatus(passwordInput, "success");
  } else {
    displayMessage("error", "Password must be at least 8 characters long", "#passwordHelp");
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
