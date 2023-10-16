import renderNavBar from "./components/ui/navBar/renderNav.js";
import { renderLoginSignupForms } from "./components/ui/forms/renderRegisterLoginForms.js";
import { validateLogin } from "./utils/validation/validateLoginForm.js";
import { validateRegister } from "./utils/validation/validateRegisterForm.js";

renderNavBar();
renderLoginSignupForms();

const loginForm = document.querySelector("#login-form");
const registerForm = document.querySelector("#register-form");

/* const testBtn = document.querySelector("#register-submit_btn");

testBtn.addEventListener("click", validateRegister) */

 if (loginForm) {
  loginForm.addEventListener("submit", validateLogin);
} else if (registerForm) {
  registerForm.addEventListener("submit", validateRegister);
} 
