/**
 * This module is responsible for rendering the sell page.
 * @module sellPage
 * @requires ../components/ui/navBar/renderNav.js
 * @requires ../components/ui/layout/renderCreateListingPage.js
 * @requires ../components/userLogout.js
 * @requires ../utils/storage/userStorage.js
 * @requires ../components/ui/state_handlers/displayMessage.js
 * @requires ../utils/api/get/getListing.js
 */
import renderNavbar from "../components/ui/navBar/renderNav.js";
import { renderCreatelistingPage } from "../components/ui/layout/renderCreateListingPage.js";
import userLogout from "../components/userLogout.js";
import {
  getUserInfoFromStorage,
  getSuperSecretToken,
} from "../utils/storage/userStorage.js";
import displayMessage from "../components/ui/state_handlers/displayMessage.js";
import { getListing } from "../utils/api/get/getListing.js";

if (!getUserInfoFromStorage().name && !getSuperSecretToken().token) {
  location.href = "/index.html";
} else {
  initializePage();
}

async function initializePage() {
  const urlParams = new URLSearchParams(window.location.search);
  const listingId = urlParams.get("id");
  renderNavbar();
  userLogout();

  if (!listingId) {
    renderCreatelistingPage();
  } else {
    try {
      const data = await getListing(listingId);
      renderCreatelistingPage(data);
    } catch (error) {
      displayMessage(
        "error",
        "Ooppps!! something went wrong, please try updating the page",
        ".create-listing-message-container",
      );
    }
  }
}
