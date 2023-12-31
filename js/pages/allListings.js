/**
 * Renders the all listings page with pagination, sorting options, and filter options.
 * @param {Function} updateApiListingsConfig - Function to update the API listings configuration.
 * @param {Object} apiListingsConfig - Object containing the API listings configuration.
 * @returns {void}
 */
import { renderListingsPage } from "../components/ui/layout/renderListingsPage.js";
import { getListings } from "../utils/api/get/getListings.js";
import renderNavBar from "../components/ui/navBar/renderNav.js";
import userLogout from "../components/userLogout.js";
import { renderListings } from "../components/ui/Listings/renderListings.js";
import { renderListingsPaginationButtons } from "../components/ui/listings/renderListingsPagination.js";
import { renderListingsSortingOptions } from "../components/ui/listings/renderListingsSortingOptions.js";
import displayMessage from "../components/ui/state_handlers/displayMessage.js";

renderNavBar();
userLogout();

let apiListingsConfig = {
  limit: 20,
  offset: 0,
  sort: "title",
  sortOrder: "asc",
  _bids: true,
  _active: true,
  _tag: "",
};


// im unsure if this is the best solution, but it worked the best of the other options i tried.
async function updateApiListingsConfig(newConfig) {
  apiListingsConfig = { ...apiListingsConfig, ...newConfig };

  try {
    const allListings = await getListings(apiListingsConfig);

    renderListingsSortingOptions(".filter-and-sort-main-container", updateApiListingsConfig, apiListingsConfig);
    renderListings(allListings, ".all-listings-cards-container", "card");
    renderListingsPaginationButtons(".all-listings-pagination-container", updateApiListingsConfig, apiListingsConfig, allListings);
  } catch (error) {
    displayMessage("error", "Ooppps!! something went wrong, please try updating the page", ".message-container");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderListingsPage(updateApiListingsConfig, apiListingsConfig);
});
