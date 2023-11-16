import { postBid } from "../api/post/postBid.js";

export function validateBid(e, target) {
  e.preventDefault();

  const listingId = new URLSearchParams(window.location.search).get("id");
  const bidInput = document.querySelector("#bid");

  const bidInfo = {
    bid: parseFloat(bidInput.value),
    listingId: listingId,
  };

  if (bidInput.value && listingId) {
    postBid(bidInfo, target);
  }
}
