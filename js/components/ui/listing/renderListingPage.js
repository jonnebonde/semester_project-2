import { renderlistingInfoText } from "./listingTextContainer.js";
import { renderTimeAndBidContainer } from "./renderTimeAndBidContainer.js";
import { renderBidForm } from "../forms/renderBidForm.js";
import { renderCarousel } from "../carousel/renderCarousel.js";

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

  renderListingSellerInfo(data);

  listingInfoContainer.appendChild(timeAndBidContainer);
}

function renderListingSellerInfo(data) {
  const listingSellerInfoContainer = document.querySelector(".listing-seller-info-container");

  console.log(data);

  const sellerInfo = document.createElement("div");
  sellerInfo.classList.add(
    "listing-seller-info",
    "mx-5",
    "d-flex",
    "message",
    "flex-column",
    "flex-l-row",
    "justify-content-center",
    "align-items-center",
    "justify-content-md-start"
  );

  const sellerInfoAvatarContainer = document.createElement("div");
  sellerInfoAvatarContainer.classList.add(
    "listing-seller-avatar-container",
    "d-flex",
    "justify-content-center",
    "align-items-center",
    "justify-content-md-start"
  );

  const sellerInfoAvatar = document.createElement("img");
  sellerInfoAvatar.classList.add("listing-seller-avatar", "rounded");
  sellerInfoAvatar.setAttribute("src", data.seller.avatar);
  sellerInfoAvatar.setAttribute("alt", data.seller.name);
  sellerInfoAvatar.setAttribute("onerror", "src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png'");

  sellerInfoAvatarContainer.appendChild(sellerInfoAvatar);

  const sellerCredentialsContainer = document.createElement("div");
  sellerCredentialsContainer.classList.add("listing-seller-credentials-container", "d-flex", "flex-column", "text-break");

  const sellerName = document.createElement("span");
  sellerName.classList.add("listing-seller-name");
  sellerName.textContent = "Seller: " + data.seller.name;

  const sellerEmail = document.createElement("span");
  sellerEmail.classList.add("listing-seller-email");
  sellerEmail.textContent = "Email: " + data.seller.email;

  sellerCredentialsContainer.appendChild(sellerName);
  sellerCredentialsContainer.appendChild(sellerEmail);

  sellerInfo.appendChild(sellerInfoAvatarContainer);
  sellerInfo.appendChild(sellerCredentialsContainer);

  listingSellerInfoContainer.appendChild(sellerInfo);
}
