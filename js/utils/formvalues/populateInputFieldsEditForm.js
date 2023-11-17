/**
 * Fills in the input fields of the edit listing form with the given data.
 *
 * @param {Object} data - The data to populate the form with.
 * @param {string} data.title - The title of the listing.
 * @param {string} data.description - The description of the listing.
 * @param {Array<string>} data.tags - The tags associated with the listing.
 * @param {Array<string>} data.media - The media associated with the listing.
 * @param {string} data.endsAt - The date the listing ends.
 */
export function fillInValuesToEditListingForm(data) {
  const form = document.querySelector("#sell-create-listing-form");
  const title = form.querySelector("#title");
  const description = form.querySelector("#description");
  const tags = form.querySelector(".tags");
  const images = form.querySelector(".images");
  const endDate = form.querySelector("#end-date");

  data.tags.forEach((tag) => {
    const tagElement = document.createElement("div");
    tagElement.classList.add("tag", "border-1");

    const tagText = document.createElement("span");
    tagText.textContent = tag;

    const removeBtn = document.createElement("i");
    removeBtn.classList.add("fas", "fa-times", "remove-btn");

    tagElement.appendChild(tagText);
    tagElement.appendChild(removeBtn);

    tags.appendChild(tagElement);
  });

  data.media.forEach((image) => {
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("form-image", "position-relative");

    const thumbnail = document.createElement("img");
    thumbnail.src = image;
    thumbnail.setAttribute("alt", "image");
    thumbnail.classList.add("thumbnail");
    thumbnail.setAttribute("width", "100px");
    thumbnail.setAttribute("height", "100px");

    const removeBtn = document.createElement("i");
    removeBtn.classList.add("fas", "fa-times", "remove-btn", "position-absolute");

    imageContainer.appendChild(thumbnail);
    imageContainer.appendChild(removeBtn);

    images.appendChild(imageContainer);
  });

  const formattedDate = new Date(data.endsAt).toISOString().slice(0, 16);

  title.value = data.title;
  description.value = data.description;
  endDate.value = formattedDate;
}
