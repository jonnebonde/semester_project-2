/**
 * Creates a section heading element with the specified size and text content.
 * @param {string} size - The size of the section heading element (e.g. "h1", "h2", etc.).
 * @param {string} text - The text content of the section heading.
 * @returns {HTMLDivElement} - The container element for the section heading.
 */
export function renderSectionHeading(size, text) {
  const SectionHeadingContainer = document.createElement("div");
  SectionHeadingContainer.classList.add("section-heading");

  const SectionHeading = document.createElement(size);
  SectionHeading.textContent = text;

  SectionHeadingContainer.appendChild(SectionHeading);

  return SectionHeadingContainer;
}
