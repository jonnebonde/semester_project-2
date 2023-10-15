import renderNavBar from "./components/ui/navBar/renderNav.js";
import { renderLoginSignupForms } from "./components/ui/forms/renderRegisterLoginForms.js";
import { handleLogin } from "./utils/forms/handleLoginForm.js";
import { handleRegister } from "./utils/forms/handleRegisterForm.js";

renderNavBar();
renderLoginSignupForms();

const loginForm = document.querySelector("#login-form");
const registerForm = document.querySelector("#register-form");

if (loginForm) {
  loginForm.addEventListener("submit", handleLogin);
} else if (registerForm) {
  registerForm.addEventListener("submit", handleRegister);
}
