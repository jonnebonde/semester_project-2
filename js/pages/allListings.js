import renderNavBar from "../components/ui/navBar/renderNav.js";
import { baseUrl } from "../settings/api.js";
import { getAllListings } from "../utils/api/apiCall.js";
import apiCall from "../utils/api/apiCall.js";
import { renderListingsCards } from "../components/ui/Listings/renderListingsCards.js";

renderNavBar();

/* async function getListings(limit = 100, offset = 0, sort = "title", sortOrder = "asc") {
  try {
    const allListings = await getAllListings(limit, offset, sort, sortOrder);
    console.log("All Listings", allListings);
  } catch (error) {
    console.log(error);
  }
}

/* getListings(); */

const nextPageBtn = document.querySelector("#all_listings_next_page-btn");
const prevPageBtn = document.querySelector("#all_listings_previous_page-btn");

async function getListings(limit = 20, offset = 0, sort = "title", sortOrder = "asc") {
  try {
    const allListings = await apiCall(
      baseUrl + `/listings?limit=${limit}&offset=${offset}&sort=${sort}&sortOrder=${sortOrder}&_bids=true&_active=true`
    );

    renderListingsCards(allListings, ".listings-container");
    checkListingsResultLength(allListings);
  } catch (error) {
    console.log(error);
  }
}

getListings();
// pagination and filtering next

let limit = 20;
let offset = 0;

function checkListingsResultLength(allListings) {
  nextPageBtn.disabled = allListings.length < limit;
  prevPageBtn.disabled = offset === 0;
}

nextPageBtn.addEventListener("click", function () {
  offset += limit;

  getListings(limit, offset);
  checkListingsResultLength(allListings);
});

prevPageBtn.addEventListener("click", function () {
  offset -= limit;

  console.log("Offset", offset);
  console.log("Limit", limit);

  getListings(limit, offset);
  checkListingsResultLength(allListings);
});
