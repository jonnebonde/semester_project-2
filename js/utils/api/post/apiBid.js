import { getUserInfoFromStorage, getSuperSecretToken } from "../../storage/userStorage.js";
import { baseUrl } from "../../../settings/api.js";
import displayMessage from "../../../components/ui/state_handlers/displayMessage.js";
import { renderTimeAndBidContainer } from "../../../components/ui/listing/renderTimeAndBidContainer.js";
import { renderBidForm } from "../../../components/ui/forms/renderBidForm.js";
import { getProfileInfo } from "../get/apiGetProfileInfo.js";

export async function postBid(bidInfo) {
  const token = getSuperSecretToken().token;
  const listingId = bidInfo.listingId;
  const bidAmount = bidInfo.bid;
  const url = baseUrl + "/listings/" + listingId + "/bids?_bids=true&_seller=true";

  const biddingContainer = document.querySelector(".listing-time-bid-container");

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
      console.log(json);
      displayMessage("success", "Bid was successfully placed", ".listing-time-bid-container");
      biddingContainer.innerHTML = "";

      renderTimeAndBidContainer(json, biddingContainer);
      renderBidForm(biddingContainer, json);
      getProfileInfo();

      return;
    }

    console.log(response);
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}
