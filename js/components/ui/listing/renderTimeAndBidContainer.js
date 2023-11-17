/**
 * Renders the time left and highest bid for a listing.
 * @param {Object} data - The data object for the listing.
 * @param {HTMLElement} target - The target element to append the time left and highest bid to.
 * @returns {void}
 */
import { findHighestBid, timeDifference } from "../../../utils/tools.js";

export function renderTimeAndBidContainer(data, target) {
  const timeLeft = document.createElement("time");
  timeLeft.classList.add("listing-time-left");
  timeLeft.textContent = "Time left: " + timeDifference(data.endsAt);

  const highestBid = findHighestBid(data.bids);

  const currentBid = document.createElement("span");
  currentBid.classList.add("listing-current-bid");

  if (highestBid === 0) {
    currentBid.textContent = "No bids yet";
  } else {
    currentBid.textContent = "Current bid: " + highestBid + " kr";
  }

  target.appendChild(timeLeft);
  target.appendChild(currentBid);
}
