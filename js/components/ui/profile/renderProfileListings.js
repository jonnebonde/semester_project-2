/**
 * Renders a container with listings of a certain type for a user profile.
 * @param {Array} data - An array of listing objects to be rendered.
 * @param {string} type - The type of listing to be rendered (e.g. "favorite", "recent").
 * @returns {HTMLElement} - The container element with the rendered listings.
 */
import { renderCards } from "../cards/renderCards.js";

export function renderProfileListings(data, type) {
  const profileListingsContainer = document.createElement("div");
  profileListingsContainer.classList.add(`${type}` + "container", "d-flex", "gap-3" , "flex-wrap", "justify-content-center");

 data.forEach(function (listing) {
    renderCards(listing, profileListingsContainer, `${type}` + "card");
  });

  return profileListingsContainer;
}


