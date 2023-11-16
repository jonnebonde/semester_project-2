import { getProfileInfo } from "../utils/api/get/getProfileInfo.js";
import renderNavBar from "../components/ui/navBar/renderNav.js";
import userLogout from "../components/userLogout.js";
import { renderProfilePage } from "../components/ui/layout/renderProfilePage.js";
import displayMessage from "../components/ui/state_handlers/displayMessage.js";

renderNavBar();
userLogout();

async function getMultipleProfileInfo() {
  try {
    const profileBidsOnListings = await getProfileInfo("/bids?_listings=true&_bids=true&_active=true");
    const profileListings = await getProfileInfo("/listings?_bids=true&_active=true");
    const profileInfo = await getProfileInfo("");

    renderProfilePage(profileBidsOnListings, profileListings, profileInfo);
  } catch (error) {
    console.log(error);
    displayMessage("error", "Ooppps!! something went wrong, please try updating the page", "main");
  }
}

getMultipleProfileInfo();
