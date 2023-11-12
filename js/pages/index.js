import { baseUrl } from "../settings/apiUrl.js";
import { renderListings } from "../components/ui/Listings/renderListings.js";
import displayMessage from "../components/ui/state_handlers/displayMessage.js";
import apiCall from "../utils/api/get/apiCall.js";
import renderNavBar from "../components/ui/navBar/renderNav.js";
import userLogout from "../components/userLogout.js";
import { renderIndexPage } from "../components/ui/layout/renderIndexPage.js";

renderNavBar();
userLogout();

(async function () {
  try {
    const newestAuctionData = await apiCall(baseUrl + "/listings?limit=8&sort=created&_bids=true&_active=true");
    const listingsData = await apiCall(baseUrl + "/listings?limit=8&sort=endsAt&sortOrder=asc&_bids=true&_active=true");

    renderIndexPage(newestAuctionData, listingsData);

  } catch (error) {
    console.log(error);
  }
})();
