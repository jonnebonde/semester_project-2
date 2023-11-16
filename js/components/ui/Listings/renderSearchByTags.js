export function renderSearchByTags(target, updateApiListingsConfig) {
  const container = document.querySelector(target);

  const searchByTagsContainer = document.createElement("div");
  searchByTagsContainer.classList.add("search-by-tags-container", "d-flex", "justify-content-center", "mb-5", "input-group");

  const searchByTagsInput = document.createElement("input");
  searchByTagsInput.setAttribute("type", "text");
  searchByTagsInput.classList.add("form-control");
  searchByTagsInput.setAttribute("placeholder", "Search by tags");
  searchByTagsInput.setAttribute("aria-label", "Search by tags");

  const searchByTagsBtn = document.createElement("button");
  searchByTagsBtn.classList.add("btn", "btn-primary");
  searchByTagsBtn.setAttribute("type", "button");
  searchByTagsBtn.textContent = "Search";
  searchByTagsBtn.addEventListener("click", function () {
    updateApiListingsConfig({
      offset: 0,
      sortOrder: "asc",
      _tag: searchByTagsInput.value,
    });
  });

  searchByTagsContainer.appendChild(searchByTagsInput);
  searchByTagsContainer.appendChild(searchByTagsBtn);
  container.appendChild(searchByTagsContainer);
}
