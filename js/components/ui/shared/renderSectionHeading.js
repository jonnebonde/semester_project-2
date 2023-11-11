export function renderProfileSectionHeading(size, text) {
  const profileSectionHeadingContainer = document.createElement("div");
  profileSectionHeadingContainer.classList.add("section-heading");

  const profileSectionHeading = document.createElement(size);
  profileSectionHeading.textContent = text;

  profileSectionHeadingContainer.appendChild(profileSectionHeading);

  return profileSectionHeadingContainer;
}