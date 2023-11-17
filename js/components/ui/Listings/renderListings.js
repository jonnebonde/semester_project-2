/**
 * Renders a list of listings to the specified target element.
 * @param {Array} data - The array of listings to render.
 * @param {string} target - The CSS selector for the target element.
 * @param {string} type - The type of listings being rendered.
 * @returns {void}
 */
import { renderCards } from "../cards/renderCards.js";

export function renderListings(data, target, type) {
  const container = document.querySelector(target);
  
  if(data.length === 0) {
    container.innerHTML = `<div class="no-listings">No ${type} listings found</div>`;
    return;
  }

  container.innerHTML = "";
  data.forEach(function (listing) {
    renderCards(listing, container, type);
  });
}
