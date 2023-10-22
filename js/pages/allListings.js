import renderNavBar from "../components/ui/navBar/renderNav.js";
import { setNewUrl } from "../utils/urlStates.js";
import { sortListingsOrder } from "../utils/filters.js";

renderNavBar();
setNewUrl(20, 0, "title", "asc");
sortListingsOrder();



