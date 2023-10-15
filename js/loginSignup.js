import renderNavBar from "./components/ui/navBar/renderNav.js";
import { renderLoginSignupForms } from "./components/ui/forms/renderRegisterLoginForms.js";

renderNavBar();
renderLoginSignupForms();


const loginForm = document.querySelector("#login-form");
const registerForm = document.querySelector("#register-form");

if(loginForm) {
  loginForm.addEventListener("submit", handleLogin);
} else if(registerForm) {
  registerForm.addEventListener("submit", handleRegister);
}



function handleLogin(e) {
  e.preventDefault();

  const submitLoginFormBtn = document.querySelector("#login-submit_btn");
  const submitLoginFormBtnSpinner = document.querySelector("#login-submit_btn-spinner");
  const submitLoginFormBtnText = document.querySelector("#login-submit_btn-text");

  submitLoginFormBtnText.textContent = "loading...";
  submitLoginFormBtnSpinner.classList.remove("d-none");
  submitLoginFormBtnSpinner.classList.add("d-block");

  console.log("login");
}

function handleRegister(e) {
  e.preventDefault();

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


  console.log("register");
}


