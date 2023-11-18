/**
 * Renders the listing page with all the necessary information including the title, images, description, tags, time and bid container, seller info, and bid history.
 * @param {Object} data - The data object containing all the information about the listing.
 * @returns {void}
 */
import { renderListingText } from "../listing/renderListingText.js";
import { renderTimeAndBidContainer } from "../listing/renderTimeAndBidContainer.js";
import { renderBidForm } from "../forms/renderBidForm.js";
import { renderCarousel } from "../carousel/renderCarousel.js";
import { renderListingSellerInfo } from "../listing/renderListingSellerInfo.js";
import { renderListingBidsTable } from "../listing/renderListingBidsTable.js";
import { getUserInfoFromStorage, getSuperSecretToken } from "../../../utils/storage/userStorage.js";
import { renderListingTags } from "../listing/renderListingTags.js";
import { renderSectionHeading } from "../shared/renderSectionHeading.js";

export function renderListingPage(data) {
  const mainContainer = document.querySelector("main");
  const section1 = document.createElement("section");
  const listingTitle = renderSectionHeading("h1", data.title);

  const token = getSuperSecretToken();
  const user = getUserInfoFromStorage("user");

  section1.appendChild(listingTitle);

  document.title = data.title + " | Auction House";

  mainContainer.appendChild(section1);

  const section2 = document.createElement("section");
  section2.classList.add("container");

  const rowDiv = document.createElement("div");
  rowDiv.classList.add("row", "row-cols-lg-2", "row-cols-md-1", "row-cols-1", "row-gap-5");

  section2.appendChild(rowDiv);
  mainContainer.appendChild(section2);

  const carouselContainer = document.createElement("div");
  carouselContainer.classList.add("col", "carousel-container", "carousel", "slide");
  carouselContainer.id = "carousel-listing";

  const carouselInnerContainer = document.createElement("div");
  carouselInnerContainer.classList.add("carousel-inner", "d-grid", "justify-content-center", "align-content-center");

  const carouselIndicatorsContainer = document.createElement("div");
  carouselIndicatorsContainer.classList.add("carousel-indicators");

  carouselContainer.appendChild(carouselInnerContainer);
  carouselContainer.appendChild(carouselIndicatorsContainer);

  carouselContainer.appendChild(carouselInnerContainer);
  carouselContainer.appendChild(carouselIndicatorsContainer);

  rowDiv.appendChild(carouselContainer);

  renderCarousel(data, "#carousel-listing .carousel-inner");

  const listingInfoContainer = document.createElement("div");
  listingInfoContainer.classList.add("col", "listing-info-container", "d-flex", "flex-column", "justify-content-between");

  const listingTextContainer = document.createElement("div");
  listingTextContainer.classList.add("listing-text-container");

  const listingDescriptionHeading = renderSectionHeading("h2", "Description");

  listingTextContainer.appendChild(listingDescriptionHeading);

  const description = renderListingText(data, "p");
  listingTextContainer.appendChild(description);

  const tagsContainer = renderListingTags(data);
  listingTextContainer.appendChild(tagsContainer);

  const timeAndBidContainer = document.createElement("div");
  timeAndBidContainer.classList.add("listing-time-bid-container", "mx-2","mx-sm-5" , "d-flex", "flex-column", "justify-content-between");

  renderTimeAndBidContainer(data, timeAndBidContainer);

  if (data.seller.name === user.name) {
    const updateBtnContainer = document.createElement("div");
    updateBtnContainer.classList.add("update-btn-container", "d-flex", "justify-content-center", "align-items-center");

    const updateBtn = document.createElement("button");
    updateBtn.classList.add("btn", "btn-accent", "update-btn", "w-75");
    updateBtn.textContent = "Update";

    updateBtn.addEventListener("click", function () {
      window.location.href = `sell.html?id=${data.id}`;
    });

    updateBtnContainer.appendChild(updateBtn);

    timeAndBidContainer.appendChild(updateBtnContainer);
  } else {
    renderBidForm(timeAndBidContainer, data);
  }

  listingInfoContainer.appendChild(listingTextContainer);
  listingInfoContainer.appendChild(timeAndBidContainer);

  rowDiv.appendChild(listingInfoContainer);

  const messageContainer = document.createElement("div");
  messageContainer.classList.add("listing-message-container");
  listingInfoContainer.appendChild(messageContainer);

  if (token.length !== 0 && user.length !== 0) {
    const listingSellerInfoContainer = document.createElement("div");
    listingSellerInfoContainer.classList.add("listing-seller-info-container", "col");

    const listingSellerSectionHeading = renderSectionHeading("h2", "Seller info");
    listingSellerInfoContainer.appendChild(listingSellerSectionHeading);

    const listingBidHistoryContainer = document.createElement("div");
    listingBidHistoryContainer.classList.add("listing-bid-history-container", "col");

    const listingBidHistorySectionHeading = renderSectionHeading("h2", "Bid history");
    listingBidHistoryContainer.appendChild(listingBidHistorySectionHeading);

    const listingBidHistoryTableContainer = document.createElement("div");
    listingBidHistoryTableContainer.classList.add("listing-bid-table-container");

    listingBidHistoryContainer.appendChild(listingBidHistoryTableContainer);

    rowDiv.appendChild(listingSellerInfoContainer);
    rowDiv.appendChild(listingBidHistoryContainer);

    const sellerInfo = renderListingSellerInfo(data);
    listingSellerInfoContainer.appendChild(sellerInfo);

    console.log(listingBidHistoryContainer);

    renderListingBidsTable(data, ".listing-bid-table-container");
  }
}
