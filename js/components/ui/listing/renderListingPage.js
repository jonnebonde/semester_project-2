import { renderlistingInfoText } from "./listingTextContainer.js";
import { renderTimeAndBidContainer } from "./renderTimeAndBidContainer.js";
import { renderBidForm } from "../forms/renderBidForm.js";

export function renderListingPage(data) {
  const listingTitle = document.querySelector("#listing-title-container h1");
  listingTitle.textContent = data.title;

  const listingInfoContainer = document.querySelector(".listing-info-container");
  const textContainer = document.querySelector(".listing-text-container");

  renderlistingInfoText(data, textContainer);

  const timeAndBidContainer = document.createElement("div");
  timeAndBidContainer.classList.add("listing-time-bid-container", "mx-5", "d-flex", "flex-column");

  renderTimeAndBidContainer(data, timeAndBidContainer);

  renderBidForm(timeAndBidContainer, data);

  listingInfoContainer.appendChild(timeAndBidContainer);
}
