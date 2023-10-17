import { baseUrl } from "../../settings/api.js";
import { loginToService } from "./validateLoginForm.js";
import displayMessage from "../../components/ui/displayMessage.js";
import { renderLoadingSpinner } from "../../components/ui/loadingIndicatorForButtons.js";
import changeInputStatus from "../../components/ui/changeInputStatus.js";
import { validateUserName, validateEmail, validateLength, validateRepeatedPassword } from "./validationTools.js";

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


  console.log(username);

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

  if(checkTerms) {
    displayMessage("success", "Terms are accepted", "#register-form-agree-label");
  } else {
    displayMessage("error", "Please accept the terms", "#register-form-agree-label");
  }


  /*   const newUser = {
      name: username.value,
      email: email.value,
      avatar: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
      password: newPassword.value,
    }; */

  /* ;


  buttonSpinner.show(); */

  /*  regiserNewUser(newUser, buttonSpinner); */
  if (email && username && newPassword && repeatPassword && checkTerms) {
    buttonSpinner.show();
    console.log("register");
  }
}

async function regiserNewUser(details, loader) {
  const url = baseUrl + "/auth/register";

  const name = details.name;
  const email = details.email;
  const password = details.password;
  const avatar = details.avatar;

  const data = JSON.stringify({ name: name, email: email, password: password, avatar: avatar });

  const options = {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();

    if (response.status !== 200) {
      displayMessage("error", json.errors[0].message, ".message-container");
      loader.hide();
      return;
    }

    console.log(json);
    displayMessage("success", "User created", ".message-container");

    loginToService(email, password);
  } catch (error) {
    console.log(error);
  }
}
