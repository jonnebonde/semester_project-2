/**
 * Renders the logged-in user's menu in the navigation bar.
 * @returns {HTMLDivElement} The HTML element containing the logged-in user's menu.
 */
import { getUserInfoFromStorage } from "../../../utils/storage/userStorage.js";

export function renderNavBarLoggedInMenu() {
  const loggedInUserName = getUserInfoFromStorage().name;
  const loggedInUserAvatar = getUserInfoFromStorage().avatar;
  const loggedInUserCredits = getUserInfoFromStorage().credits;

  const loggedInBtnGroup = document.createElement("div");
  loggedInBtnGroup.classList.add("btn-group");
  loggedInBtnGroup.id = "logged-in-btn-group";

  const loggedInBtn = document.createElement("button");
  loggedInBtn.classList.add("btn", "btn-secondary", "dropdown-toggle");
  loggedInBtn.setAttribute("type", "button");
  loggedInBtn.textContent = `${loggedInUserName}`;
  loggedInBtn.setAttribute("data-bs-toggle", "dropdown");

  loggedInBtn.setAttribute("aria-expanded", "false");

  const loggedInBtnProfileImage = document.createElement("img");
  loggedInBtnProfileImage.classList.add("rounded", "m-1", "position-relative");
  loggedInBtnProfileImage.setAttribute("src", loggedInUserAvatar);
  loggedInBtnProfileImage.setAttribute("alt", loggedInUserName);
  loggedInBtnProfileImage.setAttribute("width", "40");
  loggedInBtnProfileImage.setAttribute("height", "40");

  const loggedInBtnbadgeCredits = document.createElement("span");
  loggedInBtnbadgeCredits.classList.add("nav-credit", "position-absolute", "rounded-pill", "bg-secondary", "badge");
  loggedInBtnbadgeCredits.setAttribute("href", "#");
  loggedInBtnbadgeCredits.textContent = `${loggedInUserCredits} kr`;

  loggedInBtn.appendChild(loggedInBtnbadgeCredits);
  loggedInBtn.appendChild(loggedInBtnProfileImage);

  const loggedInBtnDropdownMenu = document.createElement("ul");
  loggedInBtnDropdownMenu.classList.add("dropdown-menu");
  loggedInBtnDropdownMenu.setAttribute("data-bs-theme", "dark");

  const loggedInBtnDropdownMenuItem1 = document.createElement("li");

  const loggedInBtnDropdownMenuItemProfile = document.createElement("a");
  loggedInBtnDropdownMenuItemProfile.classList.add("dropdown-item", "text-center", "border-top", "p-2");
  loggedInBtnDropdownMenuItemProfile.setAttribute("href", "profile.html");
  loggedInBtnDropdownMenuItemProfile.textContent = "Profile";

  const loggedInBtnDropdownMenuItem2 = document.createElement("li");

  const loggedInBtnDropdownMenuItemLogout = document.createElement("a");
  loggedInBtnDropdownMenuItemLogout.setAttribute("id", "logout-btn");
  loggedInBtnDropdownMenuItemLogout.classList.add("dropdown-item", "text-center", "p-2");
  loggedInBtnDropdownMenuItemLogout.setAttribute("href", "#");
  loggedInBtnDropdownMenuItemLogout.textContent = "Logout";

  loggedInBtnDropdownMenuItem1.appendChild(loggedInBtnDropdownMenuItemProfile);
  loggedInBtnDropdownMenuItem2.appendChild(loggedInBtnDropdownMenuItemLogout);

  loggedInBtnDropdownMenu.appendChild(loggedInBtnDropdownMenuItem1);
  loggedInBtnDropdownMenu.appendChild(loggedInBtnDropdownMenuItem2);

  loggedInBtnGroup.appendChild(loggedInBtn);
  loggedInBtnGroup.appendChild(loggedInBtnDropdownMenu);

  return loggedInBtnGroup;
}
