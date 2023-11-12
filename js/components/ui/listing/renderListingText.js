export function renderListingText(data, element) {
  const description = document.createElement(element);
  description.classList.add("listing-description", "mx-5");
  description.textContent = data.description;

  return description;
}
