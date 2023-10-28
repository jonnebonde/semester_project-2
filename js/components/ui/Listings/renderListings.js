import { renderCards } from "../cards/renderCards.js";

export function renderListings(data, target, type) {
  const container = document.querySelector(target);

  container.innerHTML = "";

  data.forEach(function (listing) {
    renderCards(listing, container, type);
  });
}
