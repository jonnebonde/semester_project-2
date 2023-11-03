import { baseUrl } from "../../../settings/apiUrl.js";
import displayMessage from "../../../components/ui/state_handlers/displayMessage.js";
import { getSuperSecretToken, getUserInfoFromStorage } from "../../storage/userStorage.js";

export async function getProfileInfo() {
  const user = getUserInfoFromStorage();
  const token = getSuperSecretToken().token;
  const userName = user.name;

  const url = baseUrl + "/profiles/" + userName + "?_listings=true&_count";
 /*  const url = baseUrl + "/profiles/" + userName + "/bids?_listings=true"; */

  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();

    console.log(json);
    return json;
  } catch (error) {
    console.log(error);
    displayMessage("error", "Ooppps!! something went wrong, please try updating the page", ".listings-container");
  }
}
