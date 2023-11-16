import { renderProfileInfo } from "../profile/renderProfileInfo.js";
import { renderUpdateAvatarModal } from "../modal/renderUpdateAvatarModal.js";
import { renderProfileListings } from "../profile/renderProfileListings.js";
import { filterProfileBiddings, findProfileListingsWon } from "../../../utils/tools.js";
import { renderProfileSectionHeading } from "../shared/renderSectionHeading.js";

export function renderProfilePage(profileBidsOnListings, profileListings, profileInfo) {
  const profileMainContainer = document.querySelector("main");
  const profileWrappingContainer = document.createElement("section");
  profileWrappingContainer.classList.add("container");

  const updateAvatarModal = renderUpdateAvatarModal(profileInfo.avatar);
  profileWrappingContainer.appendChild(updateAvatarModal);

  const profileGridRowContainer = document.createElement("div");
  profileGridRowContainer.classList.add("row");

  const profileInfoMainContainer = document.createElement("div");
  profileInfoMainContainer.classList.add("col-12");

  const profileInfoContainer = document.createElement("div");
  profileInfoContainer.classList.add("profile-info-container");

  const profileMessageContainer = document.createElement("div");
  profileMessageContainer.classList.add("profile-message-container", "text-center");

  profileInfoContainer.appendChild(profileMessageContainer);

  // profile info container
  if (profileInfo.errors) {
    profileMessageContainer.textContent = "Ooppps!! something went wrong, please try updating the page";
  } else {
    const profileInfoContainer = renderProfileInfo(profileInfo);
    profileInfoMainContainer.appendChild(profileInfoContainer);
  }
  profileGridRowContainer.appendChild(profileInfoMainContainer);

  // profile listings container
  const profileListingsMainContainer = document.createElement("div");
  profileListingsMainContainer.classList.add("col-12", "col-lg-6", "profile-listings-main-container");

  const profileListingsHeading = renderProfileSectionHeading("h2", "My listings");
  profileListingsMainContainer.appendChild(profileListingsHeading);

  const profileListingMessageContainer = document.createElement("div");
  profileListingMessageContainer.classList.add("profile-listings-message-container", "text-center");

  profileListingsMainContainer.appendChild(profileListingMessageContainer);

  if (profileListings.errors) {
    profileListingMessageContainer.textContent = "Ooppps!! something went wrong, please try updating the page";
  } else if (profileListings.length === 0) {
    profileListingMessageContainer.textContent = "No listings yet";
  } else {
    const profileListingsContainer = renderProfileListings(profileListings, "profile-listings-");

    profileListingsMainContainer.appendChild(profileListingsContainer);
  }

  profileGridRowContainer.appendChild(profileListingsMainContainer);

  // profile bids container
  const profileBidsMainContainer = document.createElement("div");
  profileBidsMainContainer.classList.add("col-12", "col-lg-6");

  const profileBidsHeading = renderProfileSectionHeading("h2", "My bids");

  const profileBidsMessageContainer = document.createElement("div");
  profileBidsMessageContainer.classList.add("profile-bids-message-container", "text-center");

  profileBidsMainContainer.appendChild(profileBidsHeading);
  profileBidsMainContainer.appendChild(profileBidsMessageContainer);

  if (profileBidsOnListings.errors) {
    profileBidsMessageContainer.textContent = "Ooppps!! something went wrong, please try updating the page";
  } else if (profileInfo.length === 0) {
    profileBidsMessageContainer.textContent = "No bids yet";
  } else {
    const filteredProfileBidsOnListings = filterProfileBiddings(profileBidsOnListings);
    const profileBidsContainer = renderProfileListings(filteredProfileBidsOnListings, "profile-bids-");

    profileBidsMainContainer.appendChild(profileBidsContainer);
  }

  profileGridRowContainer.appendChild(profileBidsMainContainer);

  // profile listings won container

  const profileListingsWonMainContainer = document.createElement("div");
  profileListingsWonMainContainer.classList.add("col-12", "profile-listings-won-main-container");

  const profileListingsWonHeading = renderProfileSectionHeading("h2", "My wins");

  const profileListingsWonMessageContainer = document.createElement("div");
  profileListingsWonMessageContainer.classList.add("profile-listings-won-message-container", "text-center");

  profileListingsWonMainContainer.appendChild(profileListingsWonHeading);
  profileListingsWonMainContainer.appendChild(profileListingsWonMessageContainer);

  if (profileBidsOnListings.errors) {
    profileListingsWonMessageContainer.textContent = "Ooppps!! something went wrong, please try updating the page";
  } else if (profileInfo.wins.length === 0) {
    profileListingsWonMessageContainer.textContent = "No wins yet";
  } else {
    const profileListingsBiddings = filterProfileBiddings(profileBidsOnListings);
    const profileListingsWonArray = findProfileListingsWon(profileListingsBiddings, profileInfo);
    const profileListingsWonContainer = renderProfileListings(profileListingsWonArray, "profile-listings-won-");

    if (profileListingsWonArray.length === 0) {
      profileListingsMessageContainer.textContent = "No wins yet";
    }

    profileListingsWonMainContainer.appendChild(profileListingsWonContainer);
  }

  profileGridRowContainer.appendChild(profileListingsWonMainContainer);

  profileWrappingContainer.appendChild(profileGridRowContainer);
  profileMainContainer.appendChild(profileWrappingContainer);
}
