import { baseUrl } from "../../../settings/api.js";
import displayMessage from "../../../components/ui/state_handlers/displayMessage.js";
import { addUserInfoToStorage, getSuperSecretToken, getUserInfoFromStorage } from "../../storage/userStorage.js";
import { updateCredits } from "../../../components/ui/state_handlers/updateCredits.js";

export async function getProfileInfo() {
  const user = getUserInfoFromStorage();
  const token = getSuperSecretToken().token;
  const userName = user.name;

  const url = baseUrl + "/profiles/" + userName;

  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  console.log(token, userName);

  try {
    const response = await fetch(url, options);
    const json = await response.json();

    console.log(json.credits);
    addUserInfoToStorage(json);
    updateCredits(json.credits);
  } catch (error) {
    console.log(error);
    displayMessage("error", "Ooppps!! something went wrong, please try updating the page", ".listings-container");
  }
}
