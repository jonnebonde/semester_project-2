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
