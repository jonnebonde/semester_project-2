import renderNavBar from "../components/ui/navBar/renderNav.js";
import { sortListingsOrder } from "../utils/listingFilters.js";
import { getListings } from "../utils/api/get/apiGetListings.js";
import userLogout from "../components/logout.js";

renderNavBar();
getListings()
sortListingsOrder();
userLogout();


