import { getCurrentUrl, setNewUrl } from "../../../utils/urlStates.js";

const nextPageBtn = document.querySelector("#all_listings_next_page-btn");
const prevPageBtn = document.querySelector("#all_listings_previous_page-btn");

let isAdded = false;

// this works fine, but i dont know how to clean this code up to make it more dynamic and reusable

export function renderListingsPagination(allListings) {
  if (!isAdded) {
    nextPageBtn.addEventListener("click", function () {
      handleNextPageClick(allListings);
    });

    prevPageBtn.addEventListener("click", function () {
      handlePrevPageClick(allListings);
    });

    isAdded = true;
  }

  checkListingsResultLength(allListings);
}

function handleNextPageClick(e) {
  let { limitUrl, offsetUrl, sortUrl, sortOrderUrl } = getCurrentUrl();

  let offset = parseInt(offsetUrl);
  let limit = parseInt(limitUrl);

  offset += limit;
  setNewUrl(limit, offset, sortUrl, sortOrderUrl);
  checkListingsResultLength(e);
}

function handlePrevPageClick(e) {
  let { limitUrl, offsetUrl, sortUrl, sortOrderUrl } = getCurrentUrl();

  let offset = parseInt(offsetUrl);
  let limit = parseInt(limitUrl);

  offset -= limit;
  setNewUrl(limit, offset, sortUrl, sortOrderUrl);
  checkListingsResultLength(e);
}

function checkListingsResultLength(allListings) {
  let { limitUrl, offsetUrl } = getCurrentUrl();

  let offset = parseInt(offsetUrl);
  let limit = parseInt(limitUrl);

  nextPageBtn.disabled = allListings.length < limit;
  prevPageBtn.disabled = offset === 0;
}
