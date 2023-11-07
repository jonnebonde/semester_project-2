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
    console.log(error);
    displayMessage("error", "Ooppps!! something went wrong, please try updating the page", ".nav-credit");
  }
}
