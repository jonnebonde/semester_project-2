import renderNavBar from "../components/ui/navBar/renderNav.js";
import { sortListingsOrder } from "../utils/listingFilters.js";
import { getListings } from "../utils/api/get/getListings.js";
import userLogout from "../components/userLogout.js";

renderNavBar();
getListings()
sortListingsOrder();
userLogout();


