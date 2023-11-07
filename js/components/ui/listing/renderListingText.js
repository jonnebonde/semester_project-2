
export function renderListingText(data, element) {
  const description = document.createElement(element);
  description.classList.add("listing-description", "mx-5");
  description.textContent = data.description;
  const textLoader = document.querySelector(".listing-info-container .loader");
  textLoader.classList.add("d-none");
  
  return description;
}
