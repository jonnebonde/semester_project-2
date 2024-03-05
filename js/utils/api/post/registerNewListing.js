/**
 * Registers a new listing by sending a POST request to the API.
 * @async
 * @function registerNewListing
 * @param {Object} newListingValues - An object containing the values for the new listing.
 * @param {string} newListingValues.title - The title of the new listing.
 * @param {string} newListingValues.description - The description of the new listing.
 * @param {Object[]} newListingValues.tags - An array of tag objects for the new listing.
 * @param {string} newListingValues.tags[].tags - The tag name.
 * @param {Object[]} newListingValues.images - An array of image objects for the new listing.
 * @param {string} newListingValues.images[].media - The image URL.
 * @param {string} newListingValues.endDate - The end date of the new listing.
 * @returns {void}
 */
import displayMessage from "../../../components/ui/state_handlers/displayMessageTimer.js";
import { baseUrl } from "../../../settings/apiUrl.js";
import { getSuperSecretToken } from "../../storage/userStorage.js";

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
      displayMessage(
        "error",
        json.errors[0].message,
        ".create-listing-message-container",
      );
    }

    if (response.status === 200 || response.status === 201) {
      displayMessage(
        "success",
        "Listing was successfully created",
        ".create-listing-message-container",
      );
      setTimeout(() => {
        location.reload();
      }, 2000);

      return;
    }
  } catch (error) {
    displayMessage(
      "error",
      "Ooppps!! something went wrong, please try updating the page",
      ".create-listing-message-container",
    );
  }
}
