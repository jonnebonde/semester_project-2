export function renderTags(tags) {
  const tag = document.createElement("span");
  tag.classList.add("listing-tag", "fw-normal");
  tag.textContent = tags + " ";

  return tag;
}