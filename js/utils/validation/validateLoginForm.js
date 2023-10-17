import { baseUrl } from "../../settings/api.js";
import { validateEmail, validateLength } from "./validationTools.js";
import { addUserInfoToStorage } from "../storage/userStorage.js";
import { renderLoadingSpinner } from "../../components/ui/loadingIndicatorForButtons.js";
import displayMessage from "../../components/ui/displayMessage.js";
import changeInputStatus from "../../components/ui/changeInputStatus.js";

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
    password: passwordInput.value
  }


  if(email && password) {
    buttonSpinner.show();
    loginToService(loginInfo, buttonSpinner);
  }
  
 

}


export async function loginToService(loginInfo, loader) {

  const url = baseUrl + "/auth/login";

  const email = loginInfo.email;
  const password = loginInfo.password;

  const data = JSON.stringify({ email: email, password: password });

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

    console.log(json);

    if (response.status !== 200) {
      loader.hide();
      displayMessage("error", json.errors[0].message, ".message-container");
      return;
    }

    if(response.status === 200) {
      displayMessage("success", "You are now logged in", ".message-container");
      console.log(json);
      loader.hide();
      addUserInfoToStorage(json);
      location.href = "/index.html";
    }
    
    
  } catch (error) {
    console.log(error);
  }




}

