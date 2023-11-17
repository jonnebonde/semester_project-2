/**
 * Renders the login/signup page with a navigation bar and login/signup forms.
 * If a user is already logged in, redirects to the index page.
 * @module loginSignup
 * @requires ../components/ui/navBar/renderNav.js
 * @requires ../components/ui/layout/renderRegisterLoginFormsPage.js
 * @requires ../utils/storage/userStorage.js
 */
import renderNavBar from "../components/ui/navBar/renderNav.js";
import { renderLoginRegisterFormsPage } from "../components/ui/layout/renderRegisterLoginFormsPage.js";
import { getUserInfoFromStorage, getSuperSecretToken } from "../utils/storage/userStorage.js";

const user = getUserInfoFromStorage();
const token = getSuperSecretToken();


if (user.length === 0 && token.length === 0) {
  renderNavBar();
  renderLoginRegisterFormsPage(); 
} else {
  location.href = "/index.html";
}

  

