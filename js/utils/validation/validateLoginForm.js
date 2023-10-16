import { baseUrl } from "../../settings/api.js";
import { validateEmail } from "./validateEmail.js";
import { addUserInfoToStorage } from "../storage/userStorage.js";
import { renderLoadingSpinner } from "../../components/ui/loadingIndicatorForButtons.js";
import displayMessage from "../../components/ui/displayMessage.js";

export function validateLogin(e) {
  e.preventDefault();

  const submitLoginFormBtn = document.querySelector("#login-submit_btn");

  const buttonSpinner = renderLoadingSpinner(submitLoginFormBtn);
  buttonSpinner.show();


  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  if (!emailChecker(email)) {
    displayMessage("error", "The email must be a noroff.no or stud.noroff.no email address", ".message-container");
    return;
  }
  loginToService(email, password, buttonSpinner);

}


export async function loginToService(email, password, loader) {

  const url = baseUrl + "/auth/login";

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

    if (json.error) {
      alert(json.message);
      return;
    }

    if (json) {
      console.log(json);
      loader.hide();
      addUserInfoToStorage(json);
    
    }
  } catch (error) {
    console.log(error);
  }




}

