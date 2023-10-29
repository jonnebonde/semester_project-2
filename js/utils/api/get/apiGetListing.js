import apiCall from "../get/apiCall.js";
import { baseUrl } from "../../../settings/api.js";
import { renderListingPage } from "../../../components/ui/listing/renderListingPage.js";
import { renderCarousel } from "../../../components/ui/carousel/renderCarousel.js";
import displayMessage from "../../../components/ui/state_handlers/displayMessage.js";

const urlParams = new URLSearchParams(window.location.search);

const listingId = urlParams.get("id");

export async function getListing() {
  try {
    const listingData = await apiCall(baseUrl + `/listings/${listingId}?_bids=true&_seller=true&_active=true`);
    console.log(listingData);

    renderListingPage(listingData);
    renderCarousel(listingData, ".carousel-inner");
  } catch (error) {
    displayMessage("error", "Ooppps!! something went wrong, please try updating the page", "main");
    console.log(error);
  }
}
