export function renderSectionHeading(size, text) {
  const SectionHeadingContainer = document.createElement("div");
  SectionHeadingContainer.classList.add("section-heading");

  const SectionHeading = document.createElement(size);
  SectionHeading.textContent = text;

  SectionHeadingContainer.appendChild(SectionHeading);

  return SectionHeadingContainer;
}