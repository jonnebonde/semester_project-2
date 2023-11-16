import displayMessage from "../../../components/ui/state_handlers/displayMessageTimer.js";
import { baseUrl } from "../../../settings/apiUrl.js";
import { getSuperSecretToken } from "../../storage/userStorage.js";
import { renderCreateListingForm } from "../../../components/ui/forms/renderCreateListingForm.js";

export async function registerNewListing(newListingValues) {
  const url = baseUrl + "/listings";
  const token = getSuperSecretToken().token;

  const listingDetails = JSON.stringify({
    title: newListingValues.title,
    description: newListingValues.description,
    tags: newListingValues.tags.tags,
    media: newListingValues.images.media,
    endsAt: newListingValues.endDate,
  });

  const options = {
    method: "POST",
    body: listingDetails,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();

    if (response.status !== 200 && response.status !== 201) {
      displayMessage("error", json.errors[0].message, ".create-listing-message-container");
    }

    if (response.status === 200 || response.status === 201) {
      displayMessage("success", "Listing was successfully created", ".create-listing-message-container");
      setTimeout(() => {
        location.reload();
      }, 2000);

      return;
    }
  } catch (error) {
    displayMessage("error", "Ooppps!! something went wrong, please try updating the page", ".create-listing-message-container");
    console.log(error);
  }
}
