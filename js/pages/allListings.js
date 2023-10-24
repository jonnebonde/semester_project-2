import renderNavBar from "../components/ui/navBar/renderNav.js";
import { setNewUrl } from "../utils/urlStates.js";
import { sortListingsOrder } from "../utils/filters.js";
import { getListings } from "../utils/api/apiListings.js";

renderNavBar();
getListings()
sortListingsOrder();



