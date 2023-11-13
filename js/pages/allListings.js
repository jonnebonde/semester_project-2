import { renderListingsPage } from "../components/ui/layout/renderListingsPage.js";
import { getListings } from "../utils/api/get/getListings.js";
import renderNavBar from "../components/ui/navBar/renderNav.js";
import userLogout from "../components/userLogout.js";
import { renderListings } from "../components/ui/Listings/renderListings.js";

renderNavBar();
userLogout();

let apiListingsConfig = {
  limit: 20,
  offset: 0,
  _sort: "title",
  sortOrder: "desc",
  _bids: true,
  _active: true,
  tag: "",
};

async function upDateApiListingsConfig(newConfig) {
  apiListingsConfig = { ...apiListingsConfig, ...newConfig };
  const allListings = await getListings(apiListingsConfig);
  if (allListings) {
    console.log(allListings);
    renderListings(allListings, ".all-listings-cards-container", "card");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderListingsPage(upDateApiListingsConfig);
});

// sorting and filtering options

// sort by title asc and desc
// sort by newest and oldest(last chance)
// search by tags
