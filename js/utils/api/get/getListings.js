import apiCall from "./apiCall.js";
import { baseUrl } from "../../../settings/apiUrl.js";
import displayMessage from "../../../components/ui/state_handlers/displayMessage.js";


export async function getListings(urlParamsConfig) {
  const params = new URLSearchParams({ ...urlParamsConfig }).toString();

  try {
    const allListings = await apiCall(baseUrl + `/listings?${params}`);
    return allListings;
  } catch (error) {
    console.log(error);
    /* displayMessage("error", "Ooppps!! something went wrong, please try updating the page", ".listings-container"); */
  }
}
