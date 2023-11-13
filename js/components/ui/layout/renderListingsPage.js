export function renderListingsPage(upDateApiListingsConfig) {

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

  const allListingsCardsContainer = document.createElement("div");
  allListingsCardsContainer.classList.add("all-listings-cards-container", "justify-content-center", "gap-3", "flex-wrap", "d-flex");

  allListingMainContainer.appendChild(allListingsCardsContainer);


  const allListingsPaginationContainer = document.createElement("section");
  allListingsPaginationContainer.classList.add("all-listings-pagination-container", "col-12");
  allListingsPaginationContainer.textContent = "Pagination";

  mainGridContainer.appendChild(allListingsFilterContainer);
  mainGridContainer.appendChild(allListingMainContainer);
  mainGridContainer.appendChild(allListingsPaginationContainer);

  mainContainer.appendChild(mainGridContainer);


  upDateApiListingsConfig({
    limit: 20,
    offset: 0,
    _sort: "title",
    sortOrder: "asc",
    _bids: true,
    _active: true,
    tag: "",
  });
};