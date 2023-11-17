/**
 * Creates a navigation link element with the given text, URL, and optional type and active state.
 * @param {string} text - The text to display in the link.
 * @param {string} url - The URL to link to.
 * @param {boolean} isActive - Whether the link should be marked as active.
 * @param {string} [type=""] - An optional type to add to the link's class list.
 * @returns {HTMLLIElement} The created list item element containing the link.
 */
export function renderNavlinks(text, url, isActive, type = "") {
  const li = document.createElement("li");
  li.classList.add("nav-item");

  const link = document.createElement("a");
  link.classList.add("navlink", "link-light", "link-offset-1", "link-underline-opacity-0", "link-underline-opacity-100-hover");

  if (type) {
    link.classList.add(type);
  }

  link.setAttribute("href", url);
  link.textContent = text;

  if (isActive) {
    link.classList.add("link-underline-opacity-100");
    link.setAttribute("aria-current", "page");
  }

  li.appendChild(link);

  return li;
}
