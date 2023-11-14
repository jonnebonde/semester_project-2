/**
 * Renders the navigation bar based on the user's authentication status and current page location.
 * @returns {void}
 */

import { getSuperSecretToken, getUserInfoFromStorage } from "../../../utils/storage/userStorage.js";
import { renderNavBarLoggedInMenu } from "./renderNavLoggedInMenu.js";
import { renderNavlinks } from "./renderNavLinks.js";

const token = getSuperSecretToken();
const username = getUserInfoFromStorage().name;

export default function renderNavBar() {
  const { pathname } = document.location;

  const currentUrl = new URLSearchParams(window.location.search);

  const register = currentUrl.get("register");

  const topNavContainer = document.querySelector(".top-nav-container");

  const topNavUl = document.createElement("ul");
  topNavUl.classList.add("navbar-nav", "flex-row");

  const registerLink = renderNavlinks("Register", "login-and-register.html?register=true", register === "true", "primary-link");
  const loginLink = renderNavlinks("Login", "login-and-register.html?register=false", register === "false", "secondary-link");

  topNavUl.appendChild(registerLink);
  topNavUl.appendChild(loginLink);

  topNavContainer.appendChild(topNavUl);

  const bottomNavContainer = document.querySelector(".bottom-nav-container");

  const bottomNavUl = document.createElement("ul");
  bottomNavUl.classList.add("navbar-nav", "flex-row", "justify-content-between", "gap-5");

  const homeLink = renderNavlinks("Home", "index.html", pathname === "index.html");
  const buyLink = renderNavlinks("Buy", "all-listings.html", pathname === "all-listings.html");

  bottomNavUl.appendChild(homeLink);
  bottomNavUl.appendChild(buyLink);

  bottomNavContainer.appendChild(bottomNavUl);

  if (token && username) {
    topNavContainer.removeChild(topNavUl);

    const loggedInBtnGroup = renderNavBarLoggedInMenu();

    topNavContainer.appendChild(loggedInBtnGroup);

    const sellLink = renderNavlinks("Sell", "sell.html", pathname === "sell.html");

    bottomNavUl.removeChild(buyLink);

    bottomNavUl.appendChild(sellLink);
    bottomNavUl.appendChild(buyLink);
  }
}
