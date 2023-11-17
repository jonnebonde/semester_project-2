/**
 * Renders the login/signup page with a navigation bar and login/signup forms.
 * If a user is already logged in, redirects to the index page.
 * @module loginSignup
 * @requires ../components/ui/navBar/renderNav.js
 * @requires ../components/ui/layout/renderRegisterLoginFormsPage.js
 * @requires ../utils/storage/userStorage.js
 */
import renderNavBar from "../components/ui/navBar/renderNav.js";
import { renderLoginSignupFormsPage } from "../components/ui/layout/renderRegisterLoginFormsPage.js";
import { getUserInfoFromStorage } from "../utils/storage/userStorage.js";

const user = getUserInfoFromStorage();
const token = user.token;

if (user && token) {
  location.href = "/index.html";
} else {
  renderNavBar();
  renderLoginSignupFormsPage();
}
