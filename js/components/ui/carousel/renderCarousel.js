/**
 * Renders a carousel with the given data and appends it to the target element.
 * @param {Array} data - An array of objects containing media information.
 * @param {string} targetElement - The selector for the target element where the carousel will be appended.
 * @returns {void}
 */
import { renderCarouselBtns } from "./renderCarouselControllers.js";

export function renderCarousel( targetElement, data = []) {
  const carouselIndicatorsContainer = document.querySelector(".carousel-indicators");
  const carouselImageContainer = document.querySelector(targetElement);

  carouselImageContainer.textContent = "";
  carouselIndicatorsContainer.textContent = "";

  carouselImageContainer.classList.remove("d-grid", "justify-content-center", "align-content-center");

  let carouselImages = data.media;

  if (carouselImages.length === 0 || carouselImages === undefined) {
    carouselImages = ["/assets/img/no-image-icon-23485.jpg"];
  }

  const carouselItemsElementsArray = [];
  const carouselIndicatorsElementsArray = [];

  for (let i = 0; i < carouselImages.length; i++) {
    carouselImageContainer.classList.remove("justify-content-center", "align-items-center");

    const item = carouselImages[i];

    const carouselIndicator = document.createElement("button");
    carouselIndicator.classList.add("p-1", "carousel-indicator");
    carouselIndicator.setAttribute("type", "button");
    carouselIndicator.setAttribute("data-bs-target", "#carousel-listing");
    carouselIndicator.setAttribute("data-bs-slide-to", i);
    carouselIndicator.setAttribute("aria-label", `Slide ${i}`);
    carouselIndicator.style.backgroundImage = `url(${item})`;
    carouselIndicator.style.backgroundSize = "cover";

    const carouselItemContainer = document.createElement("div");

    carouselItemContainer.classList.add("carousel-item");

    if (i === 0) {
      carouselItemContainer.classList.add("active");
      carouselIndicator.classList.add("active");
      carouselIndicator.setAttribute("aria-current", "true");
    }

    const carouselItem = document.createElement("img");
    carouselItem.classList.add("d-block");
    carouselItem.setAttribute("src", item);
    carouselItem.setAttribute("alt", item.title);
    carouselItem.setAttribute("onerror", "src='/assets/img/no-image-icon-23485.jpg'");

    carouselItemContainer.appendChild(carouselItem);

    carouselIndicatorsContainer.appendChild(carouselIndicator);
    carouselImageContainer.appendChild(carouselItemContainer);

    carouselIndicatorsElementsArray.push(carouselIndicator);
    carouselItemsElementsArray.push(carouselItemContainer);

    if (carouselImages.length >= 2) {
      const carouselBtnPrev = renderCarouselBtns("carousel-control-prev", "#carousel-listing", "prev");
      const carouselBtnNext = renderCarouselBtns("carousel-control-next", "#carousel-listing", "next");

      carouselImageContainer.appendChild(carouselBtnPrev);
      carouselImageContainer.appendChild(carouselBtnNext);
    }
  }
}
