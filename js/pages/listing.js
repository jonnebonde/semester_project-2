/**
 * Renders the navigation bar, logs out the user, and gets the listing data.
 * @module listing
 */
import renderNavBar from "../components/ui/navBar/renderNav.js";
import userLogout from "../components/logout.js";
import { getListing } from "../utils/api/get/apiGetListing.js";

renderNavBar();
userLogout();
getListing();
