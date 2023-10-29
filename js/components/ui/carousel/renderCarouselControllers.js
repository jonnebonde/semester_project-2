export function renderCarouselBtns(className, target, slide) {
  const carouselBtn = document.createElement("button");
  carouselBtn.classList.add(className);

  carouselBtn.setAttribute("type", "button");
  carouselBtn.setAttribute("data-bs-target", target);
  carouselBtn.setAttribute("data-bs-slide", slide);
  carouselBtn.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
  carouselBtn.style.height = "20%";
  carouselBtn.style.marginTop = "auto";
  carouselBtn.style.marginBottom = "auto";

  if (slide === "prev") {
    carouselBtn.setAttribute("aria-label", "Previous");
  } else {
    carouselBtn.setAttribute("aria-label", "Next");
  }

  const carouselIcon = document.createElement("span");
  const carouselIconSpan = document.createElement("span");

  if (slide === "prev") {
    carouselIcon.classList.add("carousel-control-prev-icon");
    carouselIconSpan.textContent = "Previous";
  } else {
    carouselIcon.classList.add("carousel-control-next-icon");
    carouselIconSpan.textContent = "Next";
  }

  carouselIcon.setAttribute("aria-hidden", "true");
  carouselIconSpan.classList.add("visually-hidden");

  carouselBtn.appendChild(carouselIcon);
  carouselBtn.appendChild(carouselIconSpan);

  return carouselBtn;
}
