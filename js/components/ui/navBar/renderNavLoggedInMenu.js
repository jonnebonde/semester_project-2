import { getUserInfoFromStorage } from "../../../utils/storage/userStorage.js";

export function renderNavBarLoggedInMenu() {

  const loggedInUserName = getUserInfoFromStorage().name;
  const loggedInUserAvatar = getUserInfoFromStorage().avatar;
  const loggedInUserCredits = getUserInfoFromStorage().credits;


  const loggedInBtnGroup = document.createElement("div");
  loggedInBtnGroup.classList.add("btn-group");

  const loggedInBtn = document.createElement("button");
  loggedInBtn.classList.add("btn", "btn-primary", "dropdown-toggle");
  loggedInBtn.setAttribute("type", "button");
  loggedInBtn.textContent = `${loggedInUserName}`;
  loggedInBtn.setAttribute("data-bs-toggle", "dropdown");
  loggedInBtn.setAttribute("aria-expanded", "false");

  const loggedInBtnProfileImage = document.createElement("img");
  loggedInBtnProfileImage.classList.add("rounded");
  loggedInBtnProfileImage.setAttribute("src", loggedInUserAvatar);
  loggedInBtnProfileImage.setAttribute("alt", loggedInUserName);
  loggedInBtnProfileImage.setAttribute("width", "40");
  loggedInBtnProfileImage.setAttribute("height", "40");
  
  loggedInBtn.appendChild(loggedInBtnProfileImage);


  const loggedInBtnDropdownMenu = document.createElement("ul");
  loggedInBtnDropdownMenu.classList.add("dropdown-menu");

  const loggedInBtnDropdownMenuItem1 = document.createElement("li");
  loggedInBtnDropdownMenuItem1.classList.add("dropdown-item");

  const loggedInBtnDropdownMenuItemCredits = document.createElement("p");
  loggedInBtnDropdownMenuItemCredits.classList.add("dropdown-item");
  loggedInBtnDropdownMenuItemCredits.setAttribute("href", "#");
  loggedInBtnDropdownMenuItemCredits.textContent = `${loggedInUserCredits} kr`;

  const loggedInBtnDropdownMenuItem2 = document.createElement("li");
  loggedInBtnDropdownMenuItem2.classList.add("dropdown-item");

  const loggedInBtnDropdownMenuItemLogout = document.createElement("a");
  loggedInBtnDropdownMenuItemLogout.setAttribute("id", "logout-btn");
  loggedInBtnDropdownMenuItemLogout.classList.add("dropdown-item");
  loggedInBtnDropdownMenuItemLogout.setAttribute("href", "#");
  loggedInBtnDropdownMenuItemLogout.textContent = "Logout";


  loggedInBtnDropdownMenuItem1.appendChild(loggedInBtnDropdownMenuItemCredits);
  loggedInBtnDropdownMenuItem2.appendChild(loggedInBtnDropdownMenuItemLogout);

  loggedInBtnDropdownMenu.appendChild(loggedInBtnDropdownMenuItem1);
  loggedInBtnDropdownMenu.appendChild(loggedInBtnDropdownMenuItem2);

  loggedInBtnGroup.appendChild(loggedInBtn);
  loggedInBtnGroup.appendChild(loggedInBtnDropdownMenu);

  return loggedInBtnGroup;
}