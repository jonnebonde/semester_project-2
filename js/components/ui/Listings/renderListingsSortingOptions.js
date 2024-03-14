/**
 * Renders the sorting options for the listings.
 * @param {string} target - The selector for the container where the sorting options will be rendered.
 * @param {Function} updateApiListingsConfig - The function to update the API listings configuration.
 * @param {Object} apiListingsConfig - The current API listings configuration.
 */
export function renderListingsSortingOptions(
  target,
  updateApiListingsConfig,
  apiListingsConfig,
) {
  const container = document.querySelector(target);
  container.innerHTML = "";

  const sortingOptionsContainer = document.createElement("div");
  sortingOptionsContainer.classList.add(
    "sorting-options-container",
    "d-flex",
    "justify-content-center",
    "gap-3",
    "mb-5",
    "flex-wrap",
  );

  const searchByTagsInput = document.querySelector(
    ".search-by-tags-container input",
  );

  const loadingContainer = document.querySelector(".loading-container");

  const showAllBtn = document.createElement("button");
  showAllBtn.classList.add("btn", "btn-primary");
  showAllBtn.setAttribute("type", "button");
  showAllBtn.textContent = "Show all";
  showAllBtn.addEventListener("click", function () {
    updateApiListingsConfig({
      offset: 0,
      sort: "title",
      sortOrder: "asc",
      _tag: "",
    });
    searchByTagsInput.value = "";
  });

  const sortAtoZBtn = document.createElement("button");
  sortAtoZBtn.classList.add("btn", "btn-primary");
  sortAtoZBtn.setAttribute("type", "button");
  sortAtoZBtn.textContent = "Sort A to Z";
  sortAtoZBtn.disabled =
    apiListingsConfig.sortOrder === "asc" && apiListingsConfig.sort === "title";
  sortAtoZBtn.addEventListener("click", function () {
    updateApiListingsConfig({
      offset: 0,
      sort: "title",
      sortOrder: "asc",
    });
  });

  const sortZtoABtn = document.createElement("button");
  sortZtoABtn.classList.add("btn", "btn-primary");
  sortZtoABtn.setAttribute("type", "button");
  sortZtoABtn.textContent = "Sort Z to A";
  sortZtoABtn.disabled =
    apiListingsConfig.sortOrder === "desc" &&
    apiListingsConfig.sort === "title";
  sortZtoABtn.addEventListener("click", function () {
    updateApiListingsConfig({
      offset: 0,
      sort: "title",
      sortOrder: "desc",
    });
  });

  const sortNewestBtn = document.createElement("button");
  sortNewestBtn.classList.add("btn", "btn-primary");
  sortNewestBtn.setAttribute("type", "button");
  sortNewestBtn.textContent = "Newest";
  sortNewestBtn.disabled =
    apiListingsConfig.sortOrder === "desc" &&
    apiListingsConfig.sort === "created";
  sortNewestBtn.addEventListener("click", function () {
    updateApiListingsConfig({
      offset: 0,
      sort: "created",
      sortOrder: "desc",
    });
  });

  const sortLastChanceBtn = document.createElement("button");
  sortLastChanceBtn.classList.add("btn", "btn-primary");
  sortLastChanceBtn.setAttribute("type", "button");
  sortLastChanceBtn.textContent = "Last chance";
  sortLastChanceBtn.disabled =
    apiListingsConfig.sortOrder === "asc" &&
    apiListingsConfig.sort === "endsAt";
  sortLastChanceBtn.addEventListener("click", function () {
    updateApiListingsConfig({
      offset: 0,
      sort: "endsAt",
      sortOrder: "asc",
    });
  });

  sortingOptionsContainer.appendChild(showAllBtn);
  sortingOptionsContainer.appendChild(sortAtoZBtn);
  sortingOptionsContainer.appendChild(sortZtoABtn);
  sortingOptionsContainer.appendChild(sortNewestBtn);
  sortingOptionsContainer.appendChild(sortLastChanceBtn);

  container.appendChild(sortingOptionsContainer);
}
