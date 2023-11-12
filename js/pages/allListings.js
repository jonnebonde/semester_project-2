import renderNavBar from "../components/ui/navBar/renderNav.js";
import { sortListingsOrder } from "../utils/listingFilters.js";
import { getListings } from "../utils/api/get/getListings.js";
import userLogout from "../components/userLogout.js";

renderNavBar();
getListings()
sortListingsOrder();
userLogout();



// bygge ny all listings side med search tags med feilmelding hvis ingen resultat
// bygge ny all listings side med filter og sortering kun med hjelp av apiet med feilmelding hvis ingen resultat
// bygge ny all listings side med pagination med feilmelding hvis ingen resultat
// bygge nye factory functions for alle elementene som skal rendres på siden
