import { renderProfileInfo } from "./renderProfileInfo.js";
import { renderUpdateAvatarModal } from "../modal/renderUpdateAvatarModal.js";
import { renderProfileListings } from "./renderProfileListings.js";
import displayMessage from "../state_handlers/displayMessage.js";
import { filterProfileBiddings } from "../../../utils/tools.js";

export function renderProfilePage(profileBidsOnListings, profileListings, profileInfo) {
  const profileMainContainer = document.querySelector("main");
  const profileWrappingContainer = document.createElement("section");
  profileWrappingContainer.classList.add("container");

  const updateAvatarModal = renderUpdateAvatarModal(profileInfo.avatar);
  profileWrappingContainer.appendChild(updateAvatarModal);

  const profileGridRowContainer = document.createElement("div");
  profileGridRowContainer.classList.add("row");

  const profileInfoMainContainer = document.createElement("div");
  profileInfoMainContainer.classList.add("col-12", "profile-main-container");

  // profile info container
  if (profileInfo.errors) {
    profileInfoMainContainer.textContent = "no profile info";

    profileGridRowContainer.appendChild(profileInfoMainContainer);
    console.log("no profile info");
  } else {
    const profileInfoContainer = renderProfileInfo(profileInfo);
    profileInfoMainContainer.appendChild(profileInfoContainer);
    profileGridRowContainer.appendChild(profileInfoMainContainer);
  }

  // profile listings container
  const profileListingsMainContainer = document.createElement("div");
  profileListingsMainContainer.classList.add("col-12", "col-lg-6");

  if (profileListings.errors) {
    profileListingsMainContainer.textContent = "No listings";

    profileGridRowContainer.appendChild(profileListingsMainContainer);
  } else {
    const profileListingsContainer = renderProfileListings(profileListings, "profile-listings", "My listings");
    profileListingsMainContainer.appendChild(profileListingsContainer);
    profileGridRowContainer.appendChild(profileListingsMainContainer);
  }

  // profile bids container
  const profileBidsMainContainer = document.createElement("div");
  profileBidsMainContainer.classList.add("col-12", "col-lg-6");

  if (profileBidsOnListings.errors) {
    profileBidsMainContainer.textContent = "no bids";

    profileGridRowContainer.appendChild(profileBidsMainContainer);
  } else {
    const filteredProfileBidsOnListings = filterProfileBiddings(profileBidsOnListings);
    const profileBidsContainer = renderProfileListings(filteredProfileBidsOnListings, "profile-bids", "My bids");
    profileBidsMainContainer.appendChild(profileBidsContainer);
    profileGridRowContainer.appendChild(profileBidsMainContainer);
  }

  // profile listings won container
  const profileListingsWonContainer = document.createElement("div");
  profileListingsWonContainer.classList.add("col-12");
  profileListingsWonContainer.textContent = "Listings won";

  profileGridRowContainer.appendChild(profileListingsWonContainer);

  profileWrappingContainer.appendChild(profileGridRowContainer);

  profileMainContainer.appendChild(profileWrappingContainer);
}
