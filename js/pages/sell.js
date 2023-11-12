import renderNavbar from "../components/ui/navBar/renderNav.js";
import { renderCreatelistingPage } from "../components/ui/layout/renderCreateListingPage.js";
import { getUserInfoFromStorage, getSuperSecretToken } from "../utils/storage/userStorage.js";

const user = getUserInfoFromStorage("user");
const token = getSuperSecretToken();

if (!user || !token) {
  location.href = "/index.html";
} else {
  renderNavbar();
  renderCreatelistingPage();
}