/**
 * Renders the tags for a listing.
 * @param {Object} data - The data object containing the tags.
 * @returns {HTMLDivElement} - The div element containing the rendered tags.
 */
import { renderTags } from "./renderTags.js";

export function renderListingTags(data) {
  const tagsContainer = document.createElement("div");
  tagsContainer.classList.add("listing-tags", "fw-bold", "mx-2", "mx-sm-5");
  tagsContainer.appendChild(document.createTextNode("Tags: "));

  if (data.tags.length === 0) {
    const noTags = document.createElement("span");
    noTags.classList.add("listing-tag", "fw-normal");
    noTags.textContent = "No tags";
    tagsContainer.appendChild(noTags);
  } else {
    for (const tag of data.tags) {
      tagsContainer.appendChild(renderTags(tag));
    }
  }

  return tagsContainer;
}
