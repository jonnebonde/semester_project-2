import { getProfileInfo } from "../utils/api/get/getProfileInfo.js";

(async function () {
  try {
    const profileBidsOnListings = await getProfileInfo("/bids?_listings=true&_active=true");
    const profileListings = await getProfileInfo("/listings?_bids=true&_active=true");
    const profileInfo = await getProfileInfo("");
       

    console.log(profileListings, profileBidsOnListings, profileInfo);
    renderProfilePage(userArray);
  } catch (error) {
    console.log(error);
  }
})();

function renderProfilePage(data) {
  const profileMainContainer = document.querySelector("main");
  const profileWrappingContainer = document.createElement("section");
  profileWrappingContainer.classList.add("container", "text-center");

  const profileGridRowContainer = document.createElement("div");
  profileGridRowContainer.classList.add("row");

  // profile info container
  const profileInfoContainer = document.createElement("div");
  profileInfoContainer.classList.add("col-12");

  const profileListingsContainer = document.createElement("div");
  profileListingsContainer.classList.add("col-12", "col-md-6");
  profileListingsContainer.textContent = "My listings";

  const profileBidsContainer = document.createElement("div");
  profileBidsContainer.classList.add("col-12", "col-md-6");
  profileBidsContainer.textContent = "My bids";

  const profileListingsWonContainer = document.createElement("div");
  profileListingsWonContainer.classList.add("col-12");
  profileListingsWonContainer.textContent = "Listings won";

  profileGridRowContainer.appendChild(profileInfoContainer);
  profileGridRowContainer.appendChild(profileListingsContainer);
  profileGridRowContainer.appendChild(profileBidsContainer);
  profileGridRowContainer.appendChild(profileListingsWonContainer);

  profileWrappingContainer.appendChild(profileGridRowContainer);

  profileMainContainer.appendChild(profileWrappingContainer);


  console.log(data)
}




