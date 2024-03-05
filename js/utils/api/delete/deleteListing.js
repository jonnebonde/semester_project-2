/**
 * Deletes a listing from the server.
 * @async
 * @function deleteListing
 * @param {number} id - The ID of the listing to be deleted.
 * @returns {Promise<void>} - A Promise that resolves when the listing is successfully deleted.
 */
import { baseUrl } from "../../../settings/apiUrl.js";
import { getSuperSecretToken } from "../../storage/userStorage.js";
import displayMessage from "../../../components/ui/state_handlers/displayMessage.js";

export async function deleteListing(id) {
  const areUsure = confirm("Are you sure you want to delete this listing?");
  const token = getSuperSecretToken().token;
  const url = baseUrl + "/listings/" + id;

  if (areUsure) {
    const options = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await fetch(url, options);
      if (response) {
        displayMessage(
          "success",
          "Listing was successfully deleted",
          ".create-listing-message-container",
        );
      }
    } catch (error) {
      displayMessage(
        "error",
        "Ooppps!! something went wrong, please try updating the page",
        ".create-listing-message-container",
      );
    }
  }
}
