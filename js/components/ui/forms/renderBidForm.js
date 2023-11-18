/**
 * Renders a bid form and appends it to the target element. Validates the form submission based on user information and listing details.
 * @param {HTMLElement} target - The element to which the bid form will be appended.
 * @param {Object} data - The listing data object containing information about the listing and its bids.
 */
import { getUserInfoFromStorage, getSuperSecretToken } from "../../../utils/storage/userStorage.js";
import { validateBid } from "../../../utils/validation/validateBidForm.js";
import { renderFormSubmitBtn } from "./renderFormSubmitBtn.js";
import { renderFormTextInputs } from "./renderFormTextInputs.js";
import { submitBidForm } from "../../../settings/formKeys.js";
import { setBidMessage } from "../../ui/state_handlers/displayBidMessages.js";
import { timeDifference, findHighestBid } from "../../../utils/tools.js";

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
  bidForm.addEventListener("submit", (e) => validateBid(e, target, data));

  const loginRegisterLinkContainer = document.createElement("div");
  loginRegisterLinkContainer.classList.add("loginRegisterLinkContainer", "d-flex", "gap-1", "flex-wrap");

  const textPlease = document.createElement("p");
  textPlease.textContent = "Please";

  const loginLink = document.createElement("a");
  loginLink.href = "/login-and-register.html?register=false";
  loginLink.textContent = "Login";

  const textOr = document.createElement("p");
  textOr.textContent = "or";

  const registerLink = document.createElement("a");
  registerLink.href = "/login-and-register.html?register=true";
  registerLink.textContent = "Register";

  switch (true) {
    case timeDifference(data.endsAt) === "Ended":
      setBidMessage("This listing has expired", bidForm);
      break;

    case user.length === 0 && token.length === 0:
      loginRegisterLinkContainer.appendChild(textPlease);
      loginRegisterLinkContainer.appendChild(loginLink);
      loginRegisterLinkContainer.appendChild(textOr);
      loginRegisterLinkContainer.appendChild(registerLink);

      target.removeChild(bidForm);
      target.appendChild(loginRegisterLinkContainer);

      break;

    case credits < highestCurrentBid + 1 && user.name !== data.seller.name:
      setBidMessage("You don't have enough credits to place a bid", bidForm);
      break;
  }
}
