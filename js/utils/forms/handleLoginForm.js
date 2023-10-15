import { baseUrl } from "../../settings/api.js";
import { emailChecker } from "./emailChecker.js";
import { addUserInfoToStorage } from "../storage/userStorage.js";

export function handleLogin(e) {
  e.preventDefault();

  const submitLoginFormBtn = document.querySelector("#login-submit_btn");
  const submitLoginFormBtnSpinner = document.querySelector("#login-submit_btn-spinner");
  const submitLoginFormBtnText = document.querySelector("#login-submit_btn-text");

  submitLoginFormBtnText.textContent = "loading...";
  submitLoginFormBtnSpinner.classList.remove("d-none");
  submitLoginFormBtnSpinner.classList.add("d-block");

  console.log("login");

  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  if (!emailChecker(email)) {
    alert("The email must be a noroff.no or stud.noroff.no email address");
    return;
  }
  loginToService(email, password);

}


export async function loginToService(email, password) {

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
      addUserInfoToStorage(json);
    
    }
  } catch (error) {
    console.log(error);
  }




}

