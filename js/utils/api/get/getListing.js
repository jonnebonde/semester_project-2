import apiCall from "./apiCall.js";
import { baseUrl } from "../../../settings/apiUrl.js";
import displayMessage from "../../../components/ui/state_handlers/displayMessage.js";

export async function getListing(listingId) {
  try {
    const listingData = await apiCall(baseUrl + `/listings/${listingId}?_bids=true&_seller=true&_active=true`);

    return listingData;
  } catch (error) {
    displayMessage("error", "Ooppps!! something went wrong, please try updating the page", "main");
  }
}
