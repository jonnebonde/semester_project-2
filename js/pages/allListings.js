import renderNavBar from "../components/ui/navBar/renderNav.js";
import { getAllListings } from "../utils/api/apiCall.js";


renderNavBar();

async function getListings(limit = 100, offset = 0, sort = "title", sortOrder = "asc") {
  try {
    const allListings = await getAllListings(limit, offset, sort, sortOrder);
    console.log("All Listings", allListings);
  } catch (error) {
    console.log(error);
  }
}

/* getListings(); */


// pagination and filtering next