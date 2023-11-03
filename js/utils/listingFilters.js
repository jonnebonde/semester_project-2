import { setNewUrl, getCurrentUrl } from "./urlStates.js";
import { getListings } from "./api/get/getListings.js";

let { sortUrl, limitUrl } = getCurrentUrl();

export function sortListingsOrder() {
  const sortOrderBtn = document.querySelector(".all-listings-sortorder-btn-group");

  sortOrderBtn.addEventListener("click", function (e) {
    console.log(e.target.textContent);

    if (e.target.textContent === "Ascending") {
      setNewUrl(limitUrl, 0, sortUrl, "asc");
      getListings(limitUrl, 0, sortUrl, "asc")
    } else {
      setNewUrl(limitUrl, 0, sortUrl, "desc");
      getListings(limitUrl, 0, sortUrl, "desc")
    }
  });
}
