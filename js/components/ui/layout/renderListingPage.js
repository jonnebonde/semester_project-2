import { renderListingText } from "../listing/renderListingText.js";
import { renderTimeAndBidContainer } from "../listing/renderTimeAndBidContainer.js";
import { renderBidForm } from "../forms/renderBidForm.js";
import { renderCarousel } from "../carousel/renderCarousel.js";
import { renderListingSellerInfo } from "../listing/renderListingSellerInfo.js";
import { renderListingBidsTable } from "../listing/renderListingBidsTable.js";
import { getUserInfoFromStorage } from "../../../utils/storage/userStorage.js";
import { getSuperSecretToken } from "../../../utils/storage/userStorage.js";
import { renderListingTags } from "../listing/renderListingTags.js";

export function renderListingPage(data) {
  renderCarousel(data, ".carousel-inner");
  const listingTitle = document.querySelector("#listing-title-container h1");
  listingTitle.textContent = data.title;
  document.title = data.title + " | Auction House";

  const listingInfoContainer = document.querySelector(".listing-info-container");
  const textContainer = document.querySelector(".listing-text-container");

  const description = renderListingText(data, "p");
  textContainer.appendChild(description);

  const tagsContainer = renderListingTags(data);
  textContainer.appendChild(tagsContainer);

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

    const sellerInfo = renderListingSellerInfo(data);
    listingSellerInfoContainer.appendChild(sellerInfo);

    renderListingBidsTable(data);
  }
}
