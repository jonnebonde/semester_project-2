/**
 * Adds an item to the local storage with the given key.
 * @param {any} item - The item to be added to the local storage.
 * @param {string} key - The key to be used for storing the item in the local storage.
 */
export function addLocalStorage(item, key) {
  localStorage.setItem(key, JSON.stringify(item));
}

/**
 * Retrieves an item from the local storage with the given key.
 * If the item is not found or is an empty array, the key is removed from the local storage and an empty array is returned.
 * @param {string} key - The key to be used for retrieving the item from the local storage.
 * @returns {Array} - The retrieved item from the local storage or an empty array if the item is not found or is an empty array.
 */
export function getFromLocalStorage(key) {
  const data = localStorage.getItem(key);

  if (!data || JSON.parse(data).length <= 0) {
    localStorage.removeItem(key);
    return [];
  } else {
    return JSON.parse(data);
  }
}

/**
 * Deletes an item from the local storage with the given key.
 * @param {string} key - The key to be used for deleting the item from the local storage.
 */
export function deleteFromLocalStorage(key) {
  localStorage.removeItem(key);
}