import { renderCards } from "../cards/renderCards.js";

export function renderProfileListings(data, type) {
  console.log(data)
  const profileListingsContainer = document.createElement("div");
  profileListingsContainer.classList.add(`${type}` + "container", "d-flex", "gap-3" , "flex-wrap", "justify-content-center");

 data.forEach(function (listing) {
    renderCards(listing, profileListingsContainer, `${type}` + "card");
  });

  return profileListingsContainer;
}


