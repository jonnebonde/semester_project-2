import apiCall from "./apiCall.js";
import { baseUrl } from "../../../settings/api.js";
import { renderListings } from "../../../components/ui/Listings/renderListings.js";
import { renderListingsPagination } from "../../../components/ui/Listings/renderListingsPagination.js";
import { getCurrentUrl } from "../../urlStates.js";
import displayMessage from "../../../components/ui/state_handlers/displayMessage.js";

let { sortUrl, sortOrderUrl, limitUrl, offsetUrl } = getCurrentUrl();

console.log(sortUrl, sortOrderUrl, limitUrl, offsetUrl);

export async function getListings(limit = limitUrl, offset = offsetUrl, sort = sortUrl, sortOrder = sortOrderUrl) {
  try {
    const allListings = await apiCall(baseUrl + `/listings?limit=${limit}&offset=${offset}&sortOrder=${sortOrder}&_bids=true&_active=true`);

    console.log(limit, offset, sort, sortOrder);
    console.log(allListings);

    renderListingsPagination(allListings);
    renderListings(allListings, ".listings-container", "card");
  } catch (error) {
    console.log(error);
    displayMessage("error", "Ooppps!! something went wrong, please try updating the page", ".listings-container");
  }
}