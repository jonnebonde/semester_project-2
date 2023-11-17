/**
 * Creates a new span element with the given tags and applies the necessary classes.
 * @param {string} tags - The tags to be displayed in the span element.
 * @returns {HTMLSpanElement} - The newly created span element.
 */
export function renderTags(tags) {
  const tag = document.createElement("span");
  tag.classList.add("listing-tag", "fw-normal");
  tag.textContent = tags + " ";

  return tag;
}