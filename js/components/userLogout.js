/**
 * Logs out the user and deletes their information from storage.
 * @function
 * @returns {void}
 */
import { deleteUserInfoFromStorage } from "../utils/storage/userStorage.js";

export default function userLogout() {
  const logOutBtn = document.querySelector("#logout-btn");

  if (logOutBtn) {
    logOutBtn.addEventListener("click", logOut);
  }

  function logOut() {
    const logOutConfirm = confirm("Are you sure you want to log out?");

    if (logOutConfirm) {
      deleteUserInfoFromStorage();
      location.href = "/index.html";
    }
  }
}
