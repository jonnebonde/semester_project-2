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
