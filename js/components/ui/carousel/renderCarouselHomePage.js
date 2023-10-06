import { carouselImageContainer } from "../../constants/constants.js";
import { renderCarouselHeadingOverlay } from "./renderCarouselHeadingOverlay.js";
import { renderCarouselBtns } from "./renderCarouselControllers.js";

export function renderHeroCarousel(data) {
  const carouselIndicatorsContainer = document.querySelector(".carousel-indicators");
  const carouselLoader = document.querySelector(".loader-carousel");

  const carouselItemsElementsArray = [];
  const carouselIndicatorsElementsArray = [];

  for (let i = 0; i < data.length; i++) {
    carouselLoader.classList.add("d-none");
    carouselImageContainer.classList.remove("justify-content-center", "align-items-center");

    if (i === 4) {
      break;
    }

    const item = data[i];

    const carouselIndicator = document.createElement("button");
    carouselIndicator.setAttribute("type", "button");
    carouselIndicator.setAttribute("data-bs-target", "#carouselExampleIndicators");
    carouselIndicator.setAttribute("data-bs-slide-to", i);
    carouselIndicator.setAttribute("aria-label", `Slide ${i}`);

    const carouselItemContainer = document.createElement("div");

    carouselItemContainer.classList.add("carousel-item");

    if (i === 0) {
      carouselItemContainer.classList.add("active");
      carouselIndicator.classList.add("active");
      carouselIndicator.setAttribute("aria-current", "true");
    }

    const carouselItem = document.createElement("img");
    carouselItem.classList.add("d-block", "w-100");
    carouselItem.setAttribute("src", item.media[0]);
    carouselItem.setAttribute("alt", item.title);

    carouselItemContainer.appendChild(carouselItem);

    carouselIndicatorsContainer.appendChild(carouselIndicator);
    carouselImageContainer.appendChild(carouselItemContainer);

    carouselIndicatorsElementsArray.push(carouselIndicator);
    carouselItemsElementsArray.push(carouselItemContainer);
  }

  const carouselHeadingOverlay = renderCarouselHeadingOverlay();
  carouselImageContainer.appendChild(carouselHeadingOverlay);

  const carouselBtnPrev = renderCarouselBtns("carousel-control-prev", "#carouselExampleIndicators", "prev");
  const carouselBtnNext = renderCarouselBtns("carousel-control-next", "#carouselExampleIndicators", "next");

  carouselImageContainer.appendChild(carouselBtnPrev);
  carouselImageContainer.appendChild(carouselBtnNext);
}
