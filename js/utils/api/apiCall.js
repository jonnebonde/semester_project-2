export default async function apiCall(url) {
  const response = await fetch(url);
  const result = await response.json();
  return result;
}


export async function flexiFetchApiDataFunction(baseUrl, limit, sort, sortOrder, bids, active) {
  try {
    const data = await apiCall(baseUrl + `/listings?limit=${limit}&sort=${sort}&sortOrder=${sortOrder}&_bids=${bids}&_active=${active}`);
    return data;
  } catch (error) {
    displayMessage("There was an error fetching the data, please try to refresh the page", ".message-container", "error");
    console.log(error);
  }
}
