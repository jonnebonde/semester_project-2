import { getSuperSecretToken } from "../../storage/userStorage.js";
import { baseUrl } from "../../../settings/apiUrl.js";
import displayMessage from "../../../components/ui/state_handlers/displayMessage.js";

export async function updateListing(data) {

  const token = getSuperSecretToken().token;
  const url = baseUrl + "/listings/" + data.id;

  console.log(data);
  console.log("update listing")
  console.log(url);

  const updateListingData = JSON.stringify({
    title: data.title,
    description: data.description,
    endsAt: data.endsAt,
    id: data.id,
    tags: data.tags.tags,
    images: data.images.media,
  });

  console.log(updateListingData);

  const options = {
    method: "PUT",
    body: updateListingData,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();
    console.log(json);
    if (response.status === 200) {
      displayMessage("success", "Listing was successfully updated", ".create-listing-message-container");
      return;
    }

  } catch (error) {
    displayMessage("error", "Ooppps!! something went wrong, please try updating the page", ".create-listing-message-container");
  }





}