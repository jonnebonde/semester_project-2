/**
 * Renders the text content of a listing.
 *
 * @param {Object} data - The data object containing the listing information.
 * @param {string} element - The HTML element to create for the listing description.
 * @returns {HTMLElement} The HTML element containing the listing description.
 */
export function renderListingText(data, element) {
  const description = document.createElement(element);
  description.classList.add("listing-description", "mx-2", "mx-sm-5");
  description.textContent = data.description;

  return description;
}
