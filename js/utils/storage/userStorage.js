import {
  addLocalStorage,
  deleteFromLocalStorage,
  getFromLocalStorage,
} from "./localStorage.js";

export function addUserInfoToStorage(user) {
  const userInfo = {
    name: user.name,
    email: user.email,
    credits: user.credits,
    avatar: user.avatar,
  };

  addLocalStorage(userInfo, "user");
}

export function saveSuperSecretToken(key) {
  const superSecretToken = {
    token: key,
  };

  addLocalStorage(superSecretToken, "token");
}

export function getSuperSecretToken() {
  return getFromLocalStorage("token");
}

export function getUserInfoFromStorage() {
  return getFromLocalStorage("user");
}

export function deleteUserInfoFromStorage() {
  deleteFromLocalStorage("user");
  deleteFromLocalStorage("token");
}
