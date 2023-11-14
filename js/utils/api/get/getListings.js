import apiCall from "./apiCall.js";
import { baseUrl } from "../../../settings/apiUrl.js";
import displayMessageNoTimer from "../../../components/ui/state_handlers/displayMessageNoTimer.js";


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
