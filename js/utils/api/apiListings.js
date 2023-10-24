import apiCall from "./apiCall.js";
import { baseUrl } from "../../settings/api.js";
import { renderListingsCards } from "../../components/ui/Listings/renderListingsCards.js";
import { renderListingsPagination } from "../../components/ui/Listings/renderListingsPagination.js";
import { getCurrentUrl } from "../urlStates.js";

let { sortUrl, sortOrderUrl, limitUrl, offsetUrl } = getCurrentUrl();

console.log(sortUrl, sortOrderUrl, limitUrl, offsetUrl);

export async function getListings(limit = limitUrl, offset = offsetUrl, sort = sortUrl, sortOrder = sortOrderUrl) {
  try {
    const allListings = await apiCall(
      baseUrl + `/listings?limit=${limit}&offset=${offset}&sort=${sort}&sortOrder=${sortOrder}&_bids=true&_active=true`
    );

    console.log(limit, offset, sort, sortOrder);

    renderListingsPagination(allListings);
    renderListingsCards(allListings, ".listings-container");
  } catch (error) {
    console.log(error);
  }
}

