/**
 * Validates bid form and posts bid information to the server.
 * @param {Event} e - The event object.
 * @param {string} target - The target URL for the POST request.
 * @returns {void}
 */
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
