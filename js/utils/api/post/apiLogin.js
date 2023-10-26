import { baseUrl } from "../../../settings/api.js";
import displayMessage from "../../../components/ui/state_handlers/displayMessage.js";
import { addUserInfoToStorage } from "../../storage/userStorage.js";  

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

    console.log(response);

    if (response.status !== 200) {
      loader.hide();
      displayMessage("error", json.errors[0].message, ".message-container");
      return;
    }

    if (response.status === 200) {
      displayMessage("success", "You are now logged in", ".message-container");
      console.log(json);
      addUserInfoToStorage(json);
      location.href = "/index.html"; // redirect to all listings.html when page is done
    }
  } catch (error) {
    console.log(error);
  }
}