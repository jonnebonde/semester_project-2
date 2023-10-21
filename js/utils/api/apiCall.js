import { baseUrl } from "../../settings/api.js";

export default async function apiCall(url) {
  console.log("url", url);
  const response = await fetch(url);
  const result = await response.json();
  return result;
}

export async function getAllListings(limit, offset, sort = "title", sortOrder = "asc") {
  try {
    let allListings = [];

    while (true) {
      const auctionData = await apiCall(baseUrl + `/listings?limit=${limit}&offset=${offset}&sort=${sort}&sortOrder=${sortOrder}&_bids=true&_active=true`);;

      if (auctionData.length === 0) {
        break;
      }

      allListings.push(...auctionData);
      offset += limit;
    }

    return allListings;
  } catch (error) {
    throw error;
  }
}


//limit=${limit}&offset=${offset}&sort=${sort}&sortOrder=${sortOrder}&_bids=${bids}&_active=${active