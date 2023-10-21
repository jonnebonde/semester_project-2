import displayMessage from "../../components/ui/state_handlers/displayMessage.js";
import { renderLoadingSpinner } from "../../components/ui/state_handlers/loadingIndicatorForButtons.js";
import changeInputStatus from "../../components/ui/state_handlers/changeInputStatus.js";
import { validateUserName, validateEmail, validateLength, validateRepeatedPassword } from "./validationTools.js";
import { regiserNewUser } from "../../utils/api/apiRegister.js";

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
  const repeatPassword = validateRepeatedPassword(newPassword, newPasswordInput.value, repeatPasswordInput.value);
  const checkTerms = document.querySelector("#checkbox").checked;

  if (email) {
    displayMessage("success", "Email is valid", "#emailHelp");
    changeInputStatus(emailInput, "success");
  } else {
    displayMessage("error", "The email must be a noroff.no or stud.noroff.no email address", "#emailHelp");
    changeInputStatus(emailInput, "error");
  }

  if (newPassword) {
    displayMessage("success", "Password is valid", "#passwordHelp");
    changeInputStatus(newPasswordInput, "success");
  } else {
    displayMessage("error", "Password must be at least 8 characters long", "#passwordHelp");
    changeInputStatus(newPasswordInput, "error");
  }

  if (repeatPassword) {
    displayMessage("success", "Passwords match", "#repeat-passwordHelp");
    changeInputStatus(repeatPasswordInput, "success");
  } else {
    displayMessage("error", "Passwords do not match", "#repeat-passwordHelp");
    changeInputStatus(repeatPasswordInput, "error");
  }

  if (checkTerms) {
    displayMessage("success", "Terms are accepted", "#register-form-agree-label");
  } else {
    displayMessage("error", "Please accept the terms", "#register-form-agree-label");
  }

  const newUser = {
    userName: usernameInput.value,
    email: emailInput.value,
    avatar: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
    password: newPasswordInput.value,
  };

  if (email && username && newPassword && repeatPassword && checkTerms) {
    buttonSpinner.show();
    regiserNewUser(newUser, buttonSpinner);
  }
}
