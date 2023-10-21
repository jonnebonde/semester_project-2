import { deleteFromLocalStorage } from "../utils/storage/localStorage.js";

export default function userLogout() {
  const logOutBtn = document.querySelector("#logout-btn");
  if (logOutBtn) {

    function logOut() {
      const logOutConfirm = confirm("Are you sure you want to log out?");

      if (logOutConfirm) {
        deleteFromLocalStorage("user");
        location.href = "/index.html";
      }
    }
    logOutBtn.addEventListener("click", logOut);
  }

}