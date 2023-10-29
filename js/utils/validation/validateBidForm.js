import { postBid } from "../api/post/apiBid.js";

export function validateBid(e) {
  e.preventDefault();

  console.log("validateBid");

  const listingId = new URLSearchParams(window.location.search).get("id");
  const bidInput = document.querySelector("#bid");

  const bidInfo = {
    bid: parseFloat(bidInput.value),
    listingId: listingId,
  };

  console.log(bidInput.value);

  if (bidInput.value && listingId) {
    console.log(typeof bidInfo.bid);
    postBid(bidInfo);
  }
}
