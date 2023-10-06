export function renderCarouselHeadingOverlay() {

  const carouselHeadingOverlay = document.createElement("h1");
  carouselHeadingOverlay.classList.add('home-hero-overlay-container', 'position-absolute', 'z-2', 'rounded-end');
  carouselHeadingOverlay.textContent = 'Uncover hidden treasures';
  
  return carouselHeadingOverlay;

}
