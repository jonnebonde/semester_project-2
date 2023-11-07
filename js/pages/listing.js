/**
 * Renders the navigation bar, logs out the user, and gets the listing data.
 * @module listing
 */
import renderNavBar from "../components/ui/navBar/renderNav.js";
import userLogout from "../components/userLogout.js";
import { getListing } from "../utils/api/get/getListing.js";

renderNavBar();
userLogout();
getListing();
