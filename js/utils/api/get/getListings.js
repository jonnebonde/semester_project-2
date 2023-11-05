import apiCall from "./apiCall.js";
import { baseUrl } from "../../../settings/apiUrl.js";
import { renderListings } from "../../../components/ui/Listings/renderListings.js";
import { renderListingsPagination } from "../../../components/ui/Listings/renderListingsPagination.js";
import { getCurrentUrl, setNewUrl } from "../../urlStates.js";
import displayMessage from "../../../components/ui/state_handlers/displayMessage.js";

let { sortUrl, sortOrderUrl, limitUrl, offsetUrl, searchValue } = getCurrentUrl();

console.log(sortUrl, sortOrderUrl, limitUrl, offsetUrl, searchValue);

export async function getListings(limit = limitUrl, offset = offsetUrl, sort = sortUrl, sortOrder = sortOrderUrl, tag = "") {
  try {
    const allListings = await apiCall(baseUrl + `/listings?limit=${limit}&offset=${offset}&sortOrder=${sortOrder}&_bids=true&_active=true&_tag=${tag}`);

    renderListingsPagination(allListings);
    renderListings(allListings, ".listings-container", "card");
  } catch (error) {
    console.log(error);
    displayMessage("error", "Ooppps!! something went wrong, please try updating the page", ".listings-container");
  }
}


const searchInput = document.querySelector("#search-input");
const searchBtn = document.querySelector("#search-btn");

if (searchBtn) {
  searchBtn.addEventListener("click", () => {
    const searchInputValue = searchInput.value;
    setNewUrl(limitUrl, offsetUrl, sortUrl, sortOrderUrl, searchInputValue);
    getListings(limitUrl, offsetUrl, sortUrl, sortOrderUrl, searchInputValue);



  });
}

