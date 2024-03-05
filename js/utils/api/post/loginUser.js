/**
 * Sends a POST request to the login endpoint of the API with the provided login information.
 * If the request is successful, saves the user's information and access token to local storage and redirects to the profile page.
 * If the request fails, displays an error message.
 *
 * @param {Object} loginInfo - An object containing the user's email and password.
 * @param {Object} loader - An object representing a loader to display while the request is being processed.
 * @returns {void}
 */
import { baseUrl } from "../../../settings/apiUrl.js";
import displayMessage from "../../../components/ui/state_handlers/displayMessage.js";
import {
  addUserInfoToStorage,
  saveSuperSecretToken,
} from "../../storage/userStorage.js";

export async function loginToService(loginInfo, loader) {
  const url = baseUrl + "/auth/login";
  const email = loginInfo.email;
  const password = loginInfo.password;
  const data = JSON.stringify({ email: email, password: password });

  const options = {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();

    if (response.status !== 200) {
      loader.hide();
      displayMessage("error", json.errors[0].message, ".message-container");
      return;
    }

    if (response.status === 200) {
      displayMessage("success", "You are now logged in", ".message-container");
      addUserInfoToStorage(json);
      saveSuperSecretToken(json.accessToken);
      location.href = "/profile.html";
    }
  } catch (error) {
    displayMessage(
      "error",
      "Ooppps!! something went wrong, please try updating the page",
      ".message-container",
    );
  }
}
