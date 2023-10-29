import { renderTags } from "./renderTags.js";

export function renderlistingInfoText(data, target) {
  const description = document.createElement("p");
  description.classList.add("listing-description", "mx-5");
  description.textContent = data.description;

  const tagsContainer = document.createElement("div");
  tagsContainer.classList.add("listing-tags", "fw-bold", "mx-5");
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

  target.appendChild(description);
  target.appendChild(tagsContainer);
}
