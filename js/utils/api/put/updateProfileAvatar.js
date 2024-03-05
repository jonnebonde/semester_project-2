/**
 * Updates the user's profile avatar with the provided URL.
 * @async
 * @function
 * @param {string} avatarUrl - The URL of the new avatar image.
 * @returns {Promise<void>}
 */
import displayMessage from "../../../components/ui/state_handlers/displayMessage.js";
import { baseUrl } from "../../../settings/apiUrl.js";
import {
  getSuperSecretToken,
  getUserInfoFromStorage,
  addUserInfoToStorage,
} from "../../storage/userStorage.js";

export async function updateProfileAvatar(avatarUrl) {
  const user = getUserInfoFromStorage().name;
  const token = getSuperSecretToken().token;
  const url = baseUrl + "/profiles/" + user + "/media";

  const avatarImage = document.querySelector(".profile-avatar");
  const navBarImg = document.querySelector("#logged-in-btn-group img");

  const avatar = JSON.stringify({
    avatar: avatarUrl,
  });

  const options = {
    method: "PUT",
    body: avatar,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();

    if (response.status === 200) {
      addUserInfoToStorage(json);
      navBarImg.src = avatarUrl;
      avatarImage.src = avatarUrl;
      displayMessage(
        "success",
        "Avatar was successfully updated",
        ".avatar-form-input-message-container",
      );
    }
  } catch (error) {
    displayMessage(
      "error",
      "Ooppps!! something went wrong, please try updating the page",
      ".avatar-form-input-message-container",
    );
  }
}
