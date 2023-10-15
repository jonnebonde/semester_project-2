import { addUserInfoToStorage } from "../storage/userStorage.js";
import { baseUrl } from "../../settings/api.js";
import { emailChecker } from "./emailChecker.js";
import { loginToService } from "./handleLoginForm.js";

export function handleRegister(e) {
  e.preventDefault();

  
  const email = document.querySelector("#email").value;

  if (!emailChecker(email)) {
    alert("The email must be a noroff.no or stud.noroff.no email address");
    return;
  }


  const newPassword = document.querySelector("#password");
  const repeatPassword = document.querySelector("#repeat-password");

  console.log(newPassword, repeatPassword);
  /*  if(newPassword.value !== repeatPassword.value) {
    alert("Passwords do not match");
    newPassword.value = "";
    repeatPassword.value = "";
    return;
  } */
  const submitRegisterFormBtn = document.querySelector("#register-submit_btn");
  const submitRegisterFormBtnSpinner = document.querySelector("#register-submit_btn-spinner");
  const submitRegisterFormBtnText = document.querySelector("#register-submit_btn-text");

  submitRegisterFormBtnText.textContent = "loading...";
  submitRegisterFormBtnSpinner.classList.remove("d-none");
  submitRegisterFormBtnSpinner.classList.add("d-block");

  const newUser = {
    name: document.querySelector("#username").value,
    email: document.querySelector("#email").value,
    avatar: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
    password: document.querySelector("#password").value
  };

  console.log(newUser);


  regiserNewUser(newUser);


  console.log("register");
}


async function regiserNewUser(details) {

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
      "Content-Type": "application/json"
    }
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();

    if(json) {

      console.log(json);
     
      //display message
      loginToService(email, password);
    }

    if(json.error) {
      alert(json.message);
    }

  } catch (error) {
    console.log(error);
  }

}