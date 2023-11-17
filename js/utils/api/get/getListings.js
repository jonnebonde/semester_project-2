/**
 * Retrieves a list of listings from the API based on the provided URL parameters configuration.
 * @param {Object} urlParamsConfig - The configuration object for URL parameters.
 * @returns {Promise<Array>} - A promise that resolves to an array of listings.
 */
import apiCall from "./apiCall.js";
import { baseUrl } from "../../../settings/apiUrl.js";
import displayMessageNoTimer from "../../../components/ui/state_handlers/displayMessage.js";

export async function getListings(urlParamsConfig) {
  const params = new URLSearchParams({ ...urlParamsConfig }).toString();
  const url = baseUrl + `/listings?${params}`;

  try {
    const allListings = await apiCall(url);
    return allListings;
  } catch (error) {
    displayMessageNoTimer("error", "Ooppps!! something went wrong, please try updating the page", "main");
  }
}
