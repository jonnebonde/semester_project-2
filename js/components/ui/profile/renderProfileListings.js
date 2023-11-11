import { renderCards } from "../cards/renderCards.js";
import { renderProfileSectionHeading } from "../shared/renderSectionHeading.js";

export function renderProfileListings(data, type, heading) {
  console.log(data)
  const profileListingsContainer = document.createElement("div");
  profileListingsContainer.classList.add(`${type}` + "-container", "d-flex", "gap-3" , "flex-wrap", "justify-content-center");
  
  const profileListingsHeading = renderProfileSectionHeading("h2", heading);
  profileListingsContainer.appendChild(profileListingsHeading);

 data.forEach(function (listing) {
    renderCards(listing, profileListingsContainer, `${type}` + "-card");
  });

  return profileListingsContainer;
}


