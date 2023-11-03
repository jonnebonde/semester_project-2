import { baseUrl } from "../../../settings/apiUrl.js";
import displayMessage from "../../../components/ui/state_handlers/displayMessage.js";
import { loginToService } from "./loginUser.js";

export async function regiserNewUser(details, loader) {
  const url = baseUrl + "/auth/register";

  const userCredentials = {
    name: details.userName,
    email: details.email,
    password: details.password,
    avatar: details.avatar,
  };

  const data = JSON.stringify({
    name: userCredentials.name,
    email: userCredentials.email,
    password: userCredentials.password,
    avatar: userCredentials.avatar,
  });

  console.log(data);
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

    if (response.status !== 200 && response.status !== 201) {
      console.log(json);
      displayMessage("error", json.errors[0].message, ".message-container");
      loader.hide();
      return;
    }

    const loginInfo = {
      email: userCredentials.email,
      password: userCredentials.password,
    };

    console.log(json, loginInfo);
    displayMessage("success", "User created", ".message-container");

    loginToService(loginInfo, loader);
  } catch (error) {
    console.log(error);
  }
}
