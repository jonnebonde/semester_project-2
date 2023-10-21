import { renderForm } from "./renderForm.js";
import { loginForm, registerForm } from "../../../settings/formKeys.js";
import { loginRegisterFormState } from "../state_handlers/loginRegisterPageState.js";

export function renderLoginSignupFormsPage() {
  const currentUrl = new URLSearchParams(window.location.search);
  const register = currentUrl.get("register");

  const loginRegisterContainer = document.querySelector(".login_register_form-container");

  if (register === "true") {
    loginRegisterFormState(true);
    renderForm(loginRegisterContainer, registerForm, "register")
  } else {
    loginRegisterFormState(false);
    renderForm(loginRegisterContainer, loginForm, "login")
  }
}


