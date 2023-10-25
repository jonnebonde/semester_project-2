import apiCall from "./apiCall.js";
import { baseUrl } from "../../settings/api.js";
import { renderListingsCards } from "../../components/ui/Listings/renderListingsCards.js";
import { renderListingsPagination } from "../../components/ui/Listings/renderListingsPagination.js";
import { getCurrentUrl } from "../urlStates.js";
import displayMessage from "../../components/ui/state_handlers/displayMessage.js";

let { sortUrl, sortOrderUrl, limitUrl, offsetUrl } = getCurrentUrl();

console.log(sortUrl, sortOrderUrl, limitUrl, offsetUrl);

export async function getListings(limit = limitUrl, offset = offsetUrl, sort = sortUrl, sortOrder = sortOrderUrl) {
  try {
    const allListings = await apiCall(
      baseUrl + `/listings?limit=${limit}&offset=${offset}&sortOrder=${sortOrder}&_tag=car&_bids=true&_active=true`
    );

    console.log(limit, offset, sort, sortOrder);
    console.log(allListings);

    renderListingsPagination(allListings);
    renderListingsCards(allListings, ".listings-container");
  } catch (error) {
    console.log(error);
    displayMessage("error", "Ooppps!! something went wrong, please try updating the page", ".listings-container");
  }
}


