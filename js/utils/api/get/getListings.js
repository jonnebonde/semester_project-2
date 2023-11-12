import apiCall from "./apiCall.js";
import { baseUrl } from "../../../settings/apiUrl.js";
import { renderListings } from "../../../components/ui/listings/renderListings.js";
import { renderListingsPagination } from "../../../components/ui/listings/renderListingsPagination.js";
import { getCurrentUrl, setNewUrl } from "../../urlStates.js";
import displayMessage from "../../../components/ui/state_handlers/displayMessage.js";

let { sortUrl, sortOrderUrl, limitUrl, offsetUrl, searchValue } = getCurrentUrl();

console.log(sortUrl, sortOrderUrl, limitUrl, offsetUrl, searchValue);

export async function getListings(limit = limitUrl, offset = offsetUrl, sort = sortUrl, sortOrder = sortOrderUrl, tag = "") {
  try {
    const allListings = await apiCall(
      baseUrl + `/listings?limit=${limit}&offset=${offset}&sortOrder=${sortOrder}&_sort=${sort}&_bids=true&_active=true&_tag=${tag}`
    );

    /*   renderListingsPagination(allListings); */
    /*     renderListings(allListings, ".listings-container", "card"); */
  } catch (error) {
    console.log(error);
    /*     displayMessage("error", "Ooppps!! something went wrong, please try updating the page", ".listings-container"); */
  }
}

/* const searchInput = document.querySelector("#search-input");
const searchBtn = document.querySelector("#search-btn");

if (searchBtn) {
  searchBtn.addEventListener("click", () => {
    const searchInputValue = searchInput.value;
    setNewUrl(limitUrl, offsetUrl, sortUrl, sortOrderUrl, searchInputValue);
    getListings(limitUrl, offsetUrl, sortUrl, sortOrderUrl, searchInputValue);
  });
} */

function renderListingsPage() {
  const mainContainer = document.querySelector("main");
  mainContainer.classList.add("container");

  const mainGridContainer = document.createElement("div");
  mainGridContainer.classList.add("row");

  const allListingsFilterContainer = document.createElement("section");
  allListingsFilterContainer.classList.add("all-listings-filter-container", "container-fluid", "col-12");
  allListingsFilterContainer.textContent = "Filter";

  const searchByTagsContainer = document.createElement("div");
  searchByTagsContainer.classList.add("search-by-tags-container", "col-12");
  searchByTagsContainer.textContent = "Search by tags";

  const filterAndSortMainContainer = document.createElement("div");
  filterAndSortMainContainer.classList.add("filter-and-sort-main-container", "col-12");
  filterAndSortMainContainer.textContent = "Filter and sort";

  const allListingMainContainer = document.createElement("section");
  allListingMainContainer.classList.add("all-listing-main-container", "container-fluid", "col-12");
  allListingMainContainer.textContent = "All listings";

  const allListingsPaginationContainer = document.createElement("section");
  allListingsPaginationContainer.classList.add("all-listings-pagination-container", "col-12");
  allListingsPaginationContainer.textContent = "Pagination";

  mainGridContainer.appendChild(allListingsFilterContainer);
  mainGridContainer.appendChild(allListingMainContainer);
  mainGridContainer.appendChild(allListingsPaginationContainer);

  mainContainer.appendChild(mainGridContainer);
}

renderListingsPage();
