/**
 * Renders the listing page with the given listing ID.
 * @module listingPage
 * @requires renderNavBar
 * @requires userLogout
 * @requires getListing
 * @requires renderListingPage
 * @requires displayMessage
 * @param {string} id - The ID of the listing to be rendered.
 * @throws {Error} If an error occurs while fetching the listing.
 */
import renderNavBar from "../components/ui/navBar/renderNav.js";
import userLogout from "../components/userLogout.js";
import { getListing } from "../utils/api/get/getListing.js";
import { renderListingPage } from "../components/ui/layout/renderListingPage.js";
import displayMessage from "../components/ui/state_handlers/displayMessage.js";

renderNavBar();
userLogout();

const params = new URLSearchParams(document.location.search);
const listingId = params.get("id");

(async function () {
  try {
    const listing = await getListing(listingId);
    renderListingPage(listing);
  } catch (error) {
    displayMessage(
      "error",
      "Ooppps!! something went wrong, please try updating the page",
      "main",
    );
  }
})();
