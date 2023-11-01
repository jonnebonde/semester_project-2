import { renderlistingInfoText } from "./listingTextContainer.js";
import { renderTimeAndBidContainer } from "./renderTimeAndBidContainer.js";
import { renderBidForm } from "../forms/renderBidForm.js";
import { renderCarousel } from "../carousel/renderCarousel.js";
import { renderListingSellerInfo } from "./renderListingSellerInfo.js";
import { renderListingBidsTable } from "./renderListingBidsTable.js";
import { getUserInfoFromStorage } from "../../../utils/storage/userStorage.js";
import { getSuperSecretToken } from "../../../utils/storage/userStorage.js";

export function renderListingPage(data) {
  renderCarousel(data, ".carousel-inner");
  const listingTitle = document.querySelector("#listing-title-container h1");
  listingTitle.textContent = data.title;

  const listingInfoContainer = document.querySelector(".listing-info-container");
  const textContainer = document.querySelector(".listing-text-container");

  renderlistingInfoText(data, textContainer);

  const timeAndBidContainer = document.createElement("div");
  timeAndBidContainer.classList.add("listing-time-bid-container", "mx-5", "d-flex", "flex-column", "message");

  renderTimeAndBidContainer(data, timeAndBidContainer);

  renderBidForm(timeAndBidContainer, data);

  listingInfoContainer.appendChild(timeAndBidContainer);

  const token = getSuperSecretToken();
  const user = getUserInfoFromStorage("user");

  if (token.length !== 0 && user.length !== 0) {
    const listingSellerInfoContainer = document.querySelector(".listing-seller-info-container");
    const listingBidHistoryContainer = document.querySelector(".listing-bid-history-container");

    listingSellerInfoContainer.classList.remove("d-none");
    listingBidHistoryContainer.classList.remove("d-none");

    renderListingSellerInfo(data, listingSellerInfoContainer);
    renderListingBidsTable(data);
  }
}
