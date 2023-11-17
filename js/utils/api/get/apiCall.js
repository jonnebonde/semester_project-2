/**
 * Makes an API call to the specified URL and returns the result as a JSON object.
 * @param {string} url - The URL to make the API call to.
 * @returns {Promise<object>} - A Promise that resolves to the JSON object returned by the API.
 */
export default async function apiCall(url) {
  const response = await fetch(url);
  const result = await response.json();
  return result;
}
