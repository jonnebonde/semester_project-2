import { getUserInfoFromStorage, getSuperSecretToken } from "../../../utils/storage/userStorage.js";
import { validateBid } from "../../../utils/validation/validateBidForm.js";
import { findHighestBid } from "../../../utils/tools.js";
import { renderFormSubmitBtn } from "./renderFormSubmitBtn.js";
import { renderFormTextInputs } from "./renderFormTextInputs.js";
import { submitBidForm } from "../../../settings/formKeys.js";

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

  bidForm.addEventListener("submit", validateBid);

  if (!user || !token) {
    bidForm.textContent = "Please register or login to bid on this listing";
    bidForm.style.fontWeight = "bold";
    bidForm.style.color = "red";
    return;
  }

  if (credits < highestCurrentBid + 1) {
    bidForm.textContent = "You don't have enough credits to bid on this listing";
    bidForm.style.fontWeight = "bold";
    bidForm.style.color = "red";
    return;
  }

  if (user.name === data.seller.name) {
    bidForm.textContent = "You can't bid on your own listing";
    bidForm.style.fontWeight = "bold";
    bidForm.style.color = "red";
    return;
  }
}
