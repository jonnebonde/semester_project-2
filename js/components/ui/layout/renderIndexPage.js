/**
 * Renders the index page with the last chance and newest auctions.
 * @param {Array} listingsData - An array of objects containing data for the last chance auctions.
 * @param {Array} newestAuctionData - An array of objects containing data for the newest auctions.
 * @returns {void}
 */
import { renderProfileListings } from "../profile/renderProfileListings.js";
import { renderSectionHeading } from "../shared/renderSectionHeading.js";
import displayMessageNoTimer from "../state_handlers/displayMessage.js";

export function renderIndexPage(listingsData, newestAuctionData) {
  const mainContainer = document.querySelector("main");

  const lastChanceListingsContainer = document.createElement("section");
  lastChanceListingsContainer.classList.add("homepage-last_chance_listings-container");

  const lastChanceListingsHeading = renderSectionHeading("h2", "Last chance Auctions");
  lastChanceListingsContainer.appendChild(lastChanceListingsHeading);

  mainContainer.appendChild(lastChanceListingsContainer);

  const lastChanceListingsResultsContainer = document.createElement("div");
  lastChanceListingsResultsContainer.classList.add("last_chance-listings-results-container");

  const loader = document.createElement("div");
  loader.classList.add("loader");

  lastChanceListingsResultsContainer.appendChild(loader);

  console.log(listingsData);

  if (listingsData.errors) {
    displayMessageNoTimer("error", "Ooppps!! something went wrong, please try updating the page", lastChanceListingsContainer);
  } else if (listingsData.length === 0) {
    displayMessageNoTimer("normal", "Received no listings, please refresh page", lastChanceListingsContainer);
  } else {
    const lastChanceListings = renderProfileListings(listingsData, "");

    lastChanceListingsResultsContainer.removeChild(loader);
    lastChanceListingsResultsContainer.appendChild(lastChanceListings);
    lastChanceListingsContainer.appendChild(lastChanceListingsResultsContainer);
  }

  const newestListingsContainer = document.createElement("section");
  newestListingsContainer.classList.add("homepage-newest_listings-container");

  const newestListingsHeading = renderSectionHeading("h2", "Newest Auctions");
  newestListingsContainer.appendChild(newestListingsHeading);

  mainContainer.appendChild(newestListingsContainer);

  const newestListingsResultContainer = document.createElement("div");
  newestListingsResultContainer.classList.add("newest-listings-results-container");

  const loader2 = document.createElement("div");
  loader2.classList.add("loader");

  newestListingsResultContainer.appendChild(loader2);

  if (newestAuctionData.errors) {
    displayMessageNoTimer("error", "Ooppps!! something went wrong, please try updating the page", newestListingsContainer);
  } else if (newestAuctionData.length === 0) {
    displayMessageNoTimer("normal", "Received no listings, please refresh page", newestListingsContainer);
  } else {
    const newestListings = renderProfileListings(newestAuctionData, "");

    newestListingsResultContainer.removeChild(loader2);
    newestListingsResultContainer.appendChild(newestListings);
    newestListingsContainer.appendChild(newestListingsResultContainer);
  }
}
