/**
 * Renders the profile page with the user's bid on listings, listings, and profile information.
 * @async
 * @function getMultipleProfileInfo
 * @throws {Error} If an error occurs while fetching the profile information.
 * @returns {Promise<void>}
 */
import { getProfileInfo } from "../utils/api/get/getProfileInfo.js";
import renderNavBar from "../components/ui/navBar/renderNav.js";
import userLogout from "../components/userLogout.js";
import { renderProfilePage } from "../components/ui/layout/renderProfilePage.js";
import displayMessage from "../components/ui/state_handlers/displayMessage.js";
import { getSuperSecretToken, getUserInfoFromStorage } from "../utils/storage/userStorage.js";

renderNavBar();
userLogout();

const user = getUserInfoFromStorage();
const token = getSuperSecretToken();

if (user.length === 0 && token.length === 0) {
  location.href = "/index.html";
} else {
  getMultipleProfileInfo();
}

async function getMultipleProfileInfo() {
  try {
    const profileBidsOnListings = await getProfileInfo("/bids?_listings=true&_bids=true&_active=true");
    const profileListings = await getProfileInfo("/listings?_bids=true&_active=true");
    const profileInfo = await getProfileInfo("");

    renderProfilePage(profileBidsOnListings, profileListings, profileInfo);
  } catch (error) {
    displayMessage("error", "Ooppps!! something went wrong, please try updating the page", "main");
  }
}
