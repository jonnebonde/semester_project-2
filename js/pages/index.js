import { baseUrl } from "../settings/api.js";
import { renderHeroCarousel } from "../components/ui/carousel/renderCarouselHomePage.js";
import { renderListingsCards } from "../components/ui/Listings/renderListingsCards.js";
import displayMessage from "../components/ui/displayMessage.js";
import apiCall from "../utils/api/apiCall.js";
import renderNavBar from "../components/ui/navBar/renderNav.js";




// fix the fetches to use the flexiFetchApiDataFunction on a later date

renderNavBar();

(async function () {
  try {
    const newestAuctionData = await apiCall(baseUrl + "/listings?limit=8&sort=created&_bids=true&_active=true");
    renderHeroCarousel(newestAuctionData, ".carousel-inner");
    renderListingsCards(newestAuctionData, ".newest-listings-results-container");
  } catch (error) {
    displayMessage("There was an error fetching the data, please try to refresh the page", ".carousel-inner", "error");
    console.log(error);
  }
})();


(async function () {
  try {
    const listingsData = await apiCall(baseUrl + "/listings?limit=8&sort=endsAt&sortOrder=asc&_bids=true&_active=true");
    renderListingsCards(listingsData, ".last_chance-listings-results-container");
  } catch (error) {
    displayMessage("There was an error fetching the data, please try to refresh the page", ".message-container", "error");
    console.log(error);
  }
})();
