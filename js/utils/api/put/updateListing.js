/**
 * Updates a listing on the server.
 * @async
 * @function updateListing
 * @param {Object} data - The data of the listing to be updated.
 * @param {string} data.title - The title of the listing.
 * @param {string} data.description - The description of the listing.
 * @param {string} data.endsAt - The end date of the listing.
 * @param {string} data.id - The id of the listing.
 * @param {Array} data.tags - The tags of the listing.
 * @param {Array} data.images - The images of the listing.
 * @returns {Promise<void>} - A Promise that resolves when the listing is successfully updated.
 */

import { getSuperSecretToken } from "../../storage/userStorage.js";
import { baseUrl } from "../../../settings/apiUrl.js";
import displayMessage from "../../../components/ui/state_handlers/displayMessage.js";
import displayMessageTimer from "../../../components/ui/state_handlers/displayMessageTimer.js";

export async function updateListing(data) {
  const token = getSuperSecretToken().token;
  const url = baseUrl + "/listings/" + data.id;

  const updateListingData = JSON.stringify({
    title: data.title,
    description: data.description,
    endsAt: data.endsAt,
    id: data.id,
    tags: data.tags.tags,
    images: data.images.media,
  });

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
    if (response.status === 200) {
      displayMessageTimer("success", "Listing was successfully updated", ".create-listing-message-container");
      location.reload();
      return;
    }
  } catch (error) {
    displayMessage("error", "Ooppps!! something went wrong, please try updating the page", ".create-listing-message-container");
  }
}
