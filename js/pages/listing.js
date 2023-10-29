import apiCall from "../utils/api/get/apiCall.js";
import { baseUrl } from "../settings/api.js";
import renderNavBar from "../components/ui/navBar/renderNav.js";
import { renderCarousel } from "../components/ui/carousel/renderCarousel.js";
import { renderListingPage } from "../components/ui/listing/renderListingPage.js";
import userLogout from "../components/logout.js";

renderNavBar();
userLogout();

const urlParams = new URLSearchParams(window.location.search);

const listingId = urlParams.get("id");

async function getListing() {
  try {
    const listingData = await apiCall(baseUrl + `/listings/${listingId}?_bids=true&_seller=true`);
    console.log(listingData);

    renderListingPage(listingData);
    renderCarousel(listingData, ".carousel-inner");
  } catch (error) {
    console.log(error);
  }
}

getListing();
