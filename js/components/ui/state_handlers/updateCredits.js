/**
 * Updates the user's credits by fetching the user's profile information from the API and updating the credits container in the UI.
 * @async
 * @function updateCredits
 * @throws {Error} If an error occurs while fetching the user's profile information.
 * @returns {Promise<void>}
 */
import { getProfileInfo } from "../../../utils/api/get/getProfileInfo.js";
import { addUserInfoToStorage } from "../../../utils/storage/userStorage.js";
import displayMessage from "./displayMessage.js";

export async function updateCredits() {
  try {
    const userInfoUrl = "?_listings=true&_count";
    const userInfo = await getProfileInfo(userInfoUrl);
    addUserInfoToStorage(userInfo);

    const creditsContainer = document.querySelector(".nav-credit");
    creditsContainer.textContent = userInfo.credits + " kr";
  } catch (error) {
    displayMessage(
      "error",
      "Ooppps!! something went wrong, please try updating the page",
      ".nav-credit",
    );
  }
}
