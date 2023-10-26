import { baseUrl } from "../settings/api.js";
import { renderListingsCards } from "../components/ui/Listings/renderListingsCards.js";
import displayMessage from "../components/ui/state_handlers/displayMessage.js";
import apiCall from "../utils/api/get/apiCall.js";
import renderNavBar from "../components/ui/navBar/renderNav.js";
import userLogout from "../components/logout.js";

// fix the fetches to use the flexiFetchApiDataFunction on a later date

renderNavBar();
userLogout();

(async function () {
  try {
    const newestAuctionData = await apiCall(baseUrl + "/listings?limit=8&sort=created&_bids=true&_active=true");

    renderListingsCards(newestAuctionData, ".newest-listings-results-container");
  } catch (error) {
    displayMessage("There was an error fetching the data, please try to refresh the page", ".newest-listings-results-container", "error");
    console.log(error);
  }
})();

(async function () {
  try {
    const listingsData = await apiCall(baseUrl + "/listings?limit=8&sort=endsAt&sortOrder=asc&_bids=true&_active=true");
    renderListingsCards(listingsData, ".last_chance-listings-results-container");
  } catch (error) {
    displayMessage("There was an error fetching the data, please try to refresh the page", ".last_chance-listings-results-container", "error");
    console.log(error);
  }
})();
