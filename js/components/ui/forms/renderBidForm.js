import { getUserInfoFromStorage, getSuperSecretToken } from "../../../utils/storage/userStorage.js";
import { validateBid } from "../../../utils/validation/validateBidForm.js";
import { findHighestBid } from "../../../utils/tools.js";
import { renderFormSubmitBtn } from "./renderFormSubmitBtn.js";
import { renderFormTextInputs } from "./renderFormTextInputs.js";
import { submitBidForm } from "../../../settings/formKeys.js";
import { setBidMessage } from "../../ui/state_handlers/displayBidMessages.js";

export function renderBidForm(target, data) {
  const user = getUserInfoFromStorage("user");
  const token = getSuperSecretToken();
  const credits = user.credits;
  const highestCurrentBid = findHighestBid(data.bids);

  const bidForm = document.createElement("form");
  bidForm.id = "bid-form";

  const bidInput = renderFormTextInputs(submitBidForm, highestCurrentBid);

  const submitButton = renderFormSubmitBtn("bid");

  bidForm.appendChild(bidInput[0]);
  bidForm.appendChild(submitButton);

  target.appendChild(bidForm);

  target.appendChild(bidForm);
  bidForm.addEventListener("submit", validateBid);

  switch (true) {
    case user.length === 0 && token.length === 0:
      setBidMessage("Please register or login to place a bid", bidForm);
      break;

    case user.name === data.seller.name:
      setBidMessage("You can't bid on your own listing", bidForm);
      break;

    case credits < highestCurrentBid + 1:
      setBidMessage("You don't have enough credits to place a bid", bidForm);
      break;
  }
}
