import { getProfileInfo } from "../utils/api/get/getProfileInfo.js";

(async function () {
  try {
    

    const profileBidsOnListings = await getProfileInfo("/bids?_listings=true&_active=true");
    const profileListings = await getProfileInfo("/listings?_bids=true&_active=true");
    const profileInfo = await getProfileInfo("");
    console.log(profileListings, profileBidsOnListings);
  } catch (error) {
    console.log(error);
  }
})();
