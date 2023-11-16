import { renderProfileInfo } from "../profile/renderProfileInfo.js";
import { renderUpdateAvatarModal } from "../modal/renderUpdateAvatarModal.js";
import { renderProfileListings } from "../profile/renderProfileListings.js";
import { filterProfileBiddings, findProfileListingsWon } from "../../../utils/tools.js";
import { renderProfileSectionHeading } from "../shared/renderSectionHeading.js";
import displayMessage from "../state_handlers/displayMessage.js";

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

  // profile info container
  if (profileInfo.errors) {
    displayMessage("error", "Ooppps!! something went wrong, please try updating the page", profileInfoMainContainer);
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

  if (profileListings.errors) {
    displayMessage("error", "Ooppps!! something went wrong, please try updating the page", profileListingsMainContainer);
  } else if (profileListings.length === 0) {
    displayMessage("normal", "No listings yet", profileListingsMainContainer);
  } else {
    const profileListingsContainer = renderProfileListings(profileListings, "profile-listings-");

    profileListingsMainContainer.appendChild(profileListingsContainer);
  }

  profileGridRowContainer.appendChild(profileListingsMainContainer);

  // profile bids container
  const profileBidsMainContainer = document.createElement("div");
  profileBidsMainContainer.classList.add("col-12", "col-lg-6");

  const profileBidsHeading = renderProfileSectionHeading("h2", "My bids");
  profileBidsMainContainer.appendChild(profileBidsHeading);

  if (profileBidsOnListings.errors) {
    displayMessage("error", "Ooppps!! something went wrong, please try updating the page", profileBidsMainContainer);
  } else if (profileInfo.length === 0) {
    displayMessage("normal", "No bids yet", profileBidsMainContainer);
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

  const profileListingsMessageContainer = document.createElement("div");
  profileListingsMessageContainer.classList.add("profile-listings-won-message-container");


  profileListingsWonMainContainer.appendChild(profileListingsWonHeading);
  profileListingsWonMainContainer.appendChild(profileListingsMessageContainer);


  if (profileBidsOnListings.errors) {
    displayMessage("error", "Ooppps!! something went wrong, please try updating the page", ".profile-listings-won-message-container");
  } else if (profileInfo.wins.length === 0) {
    displayMessage("normal", "No wins yet", profileListingsMessageContainer);
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
