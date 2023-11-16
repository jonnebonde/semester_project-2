import displayMessage from "../../../components/ui/state_handlers/displayMessageTimer.js";
import { baseUrl } from "../../../settings/apiUrl.js";
import { getSuperSecretToken } from "../../storage/userStorage.js";
import { renderCreateListingForm } from "../../../components/ui/forms/renderCreateListingForm.js";

export async function registerNewListing(newListingValues) {
  const url = baseUrl + "/listings";
  const token = getSuperSecretToken().token;

  console.log(newListingValues);

  const listingDetails = JSON.stringify({
    title: newListingValues.title,
    description: newListingValues.description,
    tags: newListingValues.tags.tags,
    media: newListingValues.images.media,
    endsAt: newListingValues.endDate,
  });

  console.log(listingDetails);

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

    if(response.status !== 200 && response.status !== 201) {
      console.log(json);
      displayMessage("error", json.errors[0].message, ".create-listing-message-container")
      }

    if (response.status === 200 || response.status === 201) {
      displayMessage("success", "Listing was successfully created", ".create-listing-message-container");
      setTimeout(() => {
        renderCreateListingForm();
      }, 2000);
      
      return;
    }


    console.log(response, json);
  } catch(error) {
    console.log(error);
  }
}
