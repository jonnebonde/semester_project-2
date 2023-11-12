import { renderProfileListings } from "../profile/renderProfileListings.js";
import { renderProfileSectionHeading } from "../shared/renderSectionHeading.js";
import displayMessageNoTimer from "../state_handlers/displayMessageNoTimer.js";

export function renderIndexPage(newestAuctionData, listingsData) {
  const mainContainer = document.querySelector("main");

  // last chance listings container

  const lastChanceListingsContainer = document.createElement("section");
  lastChanceListingsContainer.classList.add("homepage-last_chance_listings-container");

  const lastChanceListingsHeading = renderProfileSectionHeading("h2", "Last chance Auctions");
  lastChanceListingsContainer.appendChild(lastChanceListingsHeading);

  mainContainer.appendChild(lastChanceListingsContainer);

  const lastChanceListingsResultsContainer = document.createElement("div");
  lastChanceListingsResultsContainer.classList.add("last_chance-listings-results-container");

  if (listingsData.errors) {
    displayMessageNoTimer("error", "Ooppps!! something went wrong, please try updating the page", lastChanceListingsContainer);
  } else if (listingsData.length === 0) {
    displayMessageNoTimer("normal", "Received no listings, please refresh page", lastChanceListingsContainer);
  } else {
    const lastChanceListings = renderProfileListings(listingsData, "");

    lastChanceListingsResultsContainer.appendChild(lastChanceListings);
    lastChanceListingsContainer.appendChild(lastChanceListingsResultsContainer);
  }

  // newest listings container

  const newestListingsContainer = document.createElement("section");
  newestListingsContainer.classList.add("homepage-newest_listings-container");

  const newestListingsHeading = renderProfileSectionHeading("h2", "Newest Auctions");
  newestListingsContainer.appendChild(newestListingsHeading);

  mainContainer.appendChild(newestListingsContainer);

  const newestListingsResultContainer = document.createElement("div");
  newestListingsResultContainer.classList.add("newest-listings-results-container");

  if(newestAuctionData.errors) {
    displayMessageNoTimer("error", "Ooppps!! something went wrong, please try updating the page", newestListingsContainer);
  } else if(newestAuctionData.length === 0) {
    displayMessageNoTimer("normal", "Received no listings, please refresh page", newestListingsContainer)
  } else {
    const newestListings = renderProfileListings(newestAuctionData, "");

    newestListingsResultContainer.appendChild(newestListings);
    newestListingsContainer.appendChild(newestListingsResultContainer);
  }


}
