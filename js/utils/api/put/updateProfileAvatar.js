import displayMessage from "../../../components/ui/state_handlers/displayMessage.js";
import { baseUrl } from "../../../settings/apiUrl.js";
import { getSuperSecretToken, getUserInfoFromStorage, addUserInfoToStorage } from "../../storage/userStorage.js";
import renderNavBar from "../../../components/ui/navBar/renderNav.js";

export async function updateProfileAvatar(avatarUrl) {
  const user = getUserInfoFromStorage().name;
  const token = getSuperSecretToken().token;
  const url = baseUrl + "/profiles/" + user + "/media";

  const avatarImage = document.querySelector(".profile-avatar");

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
     renderNavBar();
      displayMessage("success", "Avatar was successfully updated", ".avatar-form-input-message-container");
      avatarImage.src = avatarUrl;
    }
  } catch (error) {
    displayMessage("error", "Ooppps!! something went wrong, please try updating the page", ".avatar-form-input-message-container");
  }
}
