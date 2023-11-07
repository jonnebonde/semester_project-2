/**
 * Sends a POST request to the server to place a bid on a listing.
 * @async
 * @function postBid
 * @param {Object} bidInfo - The bid information object.
 * @param {number} bidInfo.listingId - The ID of the listing to bid on.
 * @param {number} bidInfo.bid - The amount of the bid.
 * @returns {Promise<void>} - A Promise that resolves when the bid is successfully placed.
 */
import { getSuperSecretToken } from "../../storage/userStorage.js";
import { baseUrl } from "../../../settings/apiUrl.js";
import displayMessage from "../../../components/ui/state_handlers/displayMessage.js";
import { renderTimeAndBidContainer } from "../../../components/ui/listing/renderTimeAndBidContainer.js";
import { renderBidForm } from "../../../components/ui/forms/renderBidForm.js";
import { updateCredits } from "../../../components/ui/state_handlers/updateCredits.js";
import { renderListingBidsTable } from "../../../components/ui/listing/renderListingBidsTable.js";

export async function postBid(bidInfo) {
  const token = getSuperSecretToken().token;
  const listingId = bidInfo.listingId;
  const bidAmount = bidInfo.bid;
  const url = baseUrl + "/listings/" + listingId + "/bids?_bids=true&_seller=true";

  const biddingContainer = document.querySelector(".listing-time-bid-container");

  console.log(bidInfo)

  const options = {
    method: "POST",
    body: JSON.stringify({ amount: bidAmount }),
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await fetch(url, options);
    const json = await response.json();

    if (response.status === 200) {
      biddingContainer.innerHTML = "";
      confirmedBidHandler(json, biddingContainer);
      return;
    }

    console.log(response);
    console.log(json);
  } catch (error) {
    displayMessage("error", "Ooppps!! something went wrong, please try updating the page", ".listing-time-bid-container");

    console.log(error);
  }
}

function confirmedBidHandler(data, target) {

  console.log(data);
  displayMessage("success", "Bid was successfully placed", ".listing-time-bid-container");
  renderTimeAndBidContainer(data, target);
  renderBidForm(target, data);
  updateCredits();
  renderListingBidsTable(data)
}
