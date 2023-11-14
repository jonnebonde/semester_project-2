import { renderListingsPaginationButtons } from "../listings/renderListingsPagination.js";
import { renderListingsSortingOptions } from "../listings/renderListingsSortingOptions.js";
import { renderSearchByTags } from "../listings/renderSearchByTags.js";

export function renderListingsPage(updateApiListingsConfig, apiListingsConfig) {
  const data = updateApiListingsConfig(apiListingsConfig);

  const mainContainer = document.querySelector("main");
  mainContainer.classList.add("container");

  const mainGridContainer = document.createElement("div");
  mainGridContainer.classList.add("row", "main-grid-container");

  const searchMainContainer = document.createElement("div");
  searchMainContainer.classList.add("search-main-container", "col-12", "col-md-8", "m-auto");

  const filterAndSortMainContainer = document.createElement("div");
  filterAndSortMainContainer.classList.add("filter-and-sort-main-container", "col-12");

  const allListingMainContainer = document.createElement("section");
  allListingMainContainer.classList.add("all-listing-main-container", "container-fluid", "col-12");

  const allListingsCardsContainer = document.createElement("div");
  allListingsCardsContainer.classList.add("all-listings-cards-container", "justify-content-center", "gap-3", "flex-wrap", "d-flex");

  const loader = document.createElement("div");
  loader.classList.add("loader");

  allListingsCardsContainer.appendChild(loader);

  allListingMainContainer.appendChild(allListingsCardsContainer);

  const allListingsPaginationContainer = document.createElement("section");
  allListingsPaginationContainer.classList.add("all-listings-pagination-container", "col-12");

  mainGridContainer.appendChild(searchMainContainer);
  mainGridContainer.appendChild(filterAndSortMainContainer);
  mainGridContainer.appendChild(allListingMainContainer);
  mainGridContainer.appendChild(allListingsPaginationContainer);

  mainContainer.appendChild(mainGridContainer);

  renderListingsPaginationButtons(".all-listings-pagination-container", updateApiListingsConfig, apiListingsConfig, data);
  renderListingsSortingOptions(".filter-and-sort-main-container", updateApiListingsConfig, apiListingsConfig);
  renderSearchByTags(".search-main-container", updateApiListingsConfig, apiListingsConfig);
}
