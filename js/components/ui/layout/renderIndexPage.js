/**
 * Renders the index page with the last chance and newest auctions.
 * @param {Array} listingsData - An array of objects containing data for the last chance auctions.
 * @param {Array} newestAuctionData - An array of objects containing data for the newest auctions.
 * @returns {void}
 */
import { renderProfileListings } from "../profile/renderProfileListings.js";
import { renderSectionHeading } from "../shared/renderSectionHeading.js";
import displayMessageNoTimer from "../state_handlers/displayMessage.js";
import { renderRegisterToast } from "../toast/renderToast.js";
import {
  getUserInfoFromStorage,
  getSuperSecretToken,
} from "../../../utils/storage/userStorage.js";

export function renderIndexPage(listingsData, newestAuctionData) {
  const loadingContainer = document.querySelector(".loading-container");
  const mainContainer = document.querySelector("main");

  mainContainer.removeChild(loadingContainer);

  const lastChanceListingsContainer = document.createElement("section");
  lastChanceListingsContainer.classList.add(
    "homepage-last_chance_listings-container",
  );

  const lastChanceListingsHeading = renderSectionHeading(
    "h1",
    "Last chance Auctions",
  );
  lastChanceListingsContainer.appendChild(lastChanceListingsHeading);

  mainContainer.appendChild(lastChanceListingsContainer);

  const lastChanceListingsResultsContainer = document.createElement("div");
  lastChanceListingsResultsContainer.classList.add(
    "last_chance-listings-results-container",
  );

  if (listingsData.errors) {
    displayMessageNoTimer(
      "error",
      "Ooppps!! something went wrong, please try updating the page",
      lastChanceListingsContainer,
    );
  } else if (listingsData.length === 0) {
    displayMessageNoTimer(
      "normal",
      "Received no listings, please refresh page",
      lastChanceListingsContainer,
    );
  } else {
    const lastChanceListings = renderProfileListings(listingsData, "");

    lastChanceListingsResultsContainer.appendChild(lastChanceListings);
    lastChanceListingsContainer.appendChild(lastChanceListingsResultsContainer);
  }

  const newestListingsContainer = document.createElement("section");
  newestListingsContainer.classList.add("homepage-newest_listings-container");

  const newestListingsHeading = renderSectionHeading("h2", "Newest Auctions");
  newestListingsContainer.appendChild(newestListingsHeading);

  mainContainer.appendChild(newestListingsContainer);

  const newestListingsResultContainer = document.createElement("div");
  newestListingsResultContainer.classList.add(
    "newest-listings-results-container",
  );

  if (newestAuctionData.errors) {
    displayMessageNoTimer(
      "error",
      "Ooppps!! something went wrong, please try updating the page",
      newestListingsContainer,
    );
  } else if (newestAuctionData.length === 0) {
    displayMessageNoTimer(
      "normal",
      "Received no listings, please refresh page",
      newestListingsContainer,
    );
  } else {
    const newestListings = renderProfileListings(newestAuctionData, "");

    newestListingsResultContainer.appendChild(newestListings);
    newestListingsContainer.appendChild(newestListingsResultContainer);
  }

  const toTopButtonContainer = document.createElement("div");
  toTopButtonContainer.classList.add(
    "to-top-btn-container",
    "d-flex",
    "justify-content-center",
  );

  const toTopButton = document.createElement("button");
  toTopButton.classList.add("btn", "btn-primary", "to-top-btn", "mt-5", "mb-5");
  toTopButton.setAttribute("aria-label", "Scroll to top of page");
  toTopButton.innerHTML = "To top ⬆";

  toTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  toTopButtonContainer.appendChild(toTopButton);
  mainContainer.appendChild(toTopButtonContainer);

  const toastContainer = renderRegisterToast();

  if (!getUserInfoFromStorage().name && !getSuperSecretToken().token) {
    mainContainer.appendChild(toastContainer);
    const toast = new bootstrap.Toast(
      toastContainer.querySelector("#welcomeToast"),
    );
    toast.show();
  }
}
