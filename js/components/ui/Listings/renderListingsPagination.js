/**
 * Renders pagination buttons for a listings container.
 *
 * @param {string} target - The CSS selector for the listings container.
 * @param {Function} updateApiListingsConfig - A function to update the API listings configuration.
 * @param {Object} apiListingsConfig - The current API listings configuration.
 * @param {Array} data - The data to be displayed in the listings container.
 */
export function renderListingsPaginationButtons(target, updateApiListingsConfig, apiListingsConfig, data) {
  const container = document.querySelector(target);
  container.innerHTML = "";

  const paginationContainer = document.createElement("div");
  paginationContainer.classList.add("pagination-container", "d-flex", "justify-content-center", "gap-3", "mt-3");

  const prevBtn = document.createElement("button");
  prevBtn.classList.add("btn", "btn-primary");
  prevBtn.setAttribute("type", "button");
  prevBtn.textContent = "Previous";
  prevBtn.disabled = apiListingsConfig.offset === 0;
  prevBtn.addEventListener("click", function () {
    updateApiListingsConfig({
      offset: apiListingsConfig.offset - apiListingsConfig.limit,
    });
  });

  const nextBtn = document.createElement("button");
  nextBtn.classList.add("btn", "btn-primary");
  nextBtn.setAttribute("type", "button");
  nextBtn.textContent = "Next";
  nextBtn.disabled = data.length < apiListingsConfig.limit;
  nextBtn.addEventListener("click", function () {
    if (data.length === 0) {
      updateApiListingsConfig({
        offset: apiListingsConfig.offset - apiListingsConfig.limit,
      });
      nextBtn.disabled = true;
    } else {
      updateApiListingsConfig({
        offset: apiListingsConfig.offset + apiListingsConfig.limit,
      });
    }
  });

  paginationContainer.appendChild(prevBtn);
  paginationContainer.appendChild(nextBtn);
  container.appendChild(paginationContainer);
}
