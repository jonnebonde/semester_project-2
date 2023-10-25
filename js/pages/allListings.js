import renderNavBar from "../components/ui/navBar/renderNav.js";
import { sortListingsOrder } from "../utils/listingFilters.js";
import { getListings } from "../utils/api/apiListings.js";

renderNavBar();
getListings()
sortListingsOrder();


