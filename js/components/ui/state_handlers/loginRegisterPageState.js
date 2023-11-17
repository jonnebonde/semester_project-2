/**
 * Sets the state of the login/register form and updates the UI accordingly.
 * @param {boolean} state - The state of the form. True for register form, false for login form.
 */
export function loginRegisterFormState(state) {
  const isRegisterForm = state;

  const loginRegisterTopHeading = document.querySelector("#login_register-top_heading");
  const loginRegisterBottomHeading = document.querySelector("#login_register-bottom_heading");
  const loginRegisterChangeFormButton = document.querySelector("#login_register-change-form_btn");

  loginRegisterChangeFormButton.addEventListener("click", () => {
    if (isRegisterForm === false) {
      window.location.href = "login-and-register.html?register=true";
    } else {
      window.location.href = "login-and-register.html?register=false";
    }
  });

  if (isRegisterForm) {
    document.title = "Register | Auction House";
    loginRegisterTopHeading.textContent = "Register";
    loginRegisterBottomHeading.textContent = "Already have an account?";
    loginRegisterChangeFormButton.textContent = "Login";
  } else {
    document.title = "Login | Auction House";
    loginRegisterTopHeading.textContent = "Login";
    loginRegisterBottomHeading.textContent = "Don't have an account yet?";
    loginRegisterChangeFormButton.textContent = "Register";
  }
}
