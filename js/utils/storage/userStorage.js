import { addLocalStorage, getFromLocalStorage } from "./localStorage.js";


export function addUserInfoToStorage(user) {

  const userInfo = {
    name: user.name,
    email: user.email,
    credits: user.credits,
    avatar: user.avatar,
    token: user.accessToken,
  };

  addLocalStorage(userInfo, "user");

}

export function getUserInfoFromStorage() {
  return getFromLocalStorage("user");
}

export function deleteUserInfoFromStorage() {
  deleteFromLocalStorage("user");
}
