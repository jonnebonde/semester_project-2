import apiCall from "../utils/api/get/apiCall.js";
import { baseUrl } from "../settings/api.js";
import renderNavBar from "../components/ui/navBar/renderNav.js";
import { renderHeroCarousel } from "../components/ui/carousel/renderCarouselHomePage.js";

renderNavBar();

const urlParams = new URLSearchParams(window.location.search);

const listingId = urlParams.get("id");

console.log(listingId, baseUrl);

async function getListing() {
  try {
    const listingData = await apiCall(baseUrl + `/listings/${listingId}`);
    console.log(listingData);

    sillyTitle(listingData);
  } catch (error) {
    console.log(error);
  }
}

getListing();

const listingTitle = document.querySelector("#listing-title-container h1");
const listingDescription = document.querySelector("#listing-description-text");
const listingImageCarouselContainer = document.querySelector(".listing-carousel-inner");

console.log(listingTitle);

function sillyTitle(data) {
  listingTitle.textContent = data.title;

  if (data.description.length === 0) listingDescription.textContent = "Seller has not written a description";
  else {
    listingDescription.textContent = data.description;
  }

  let dataImages = data.media

  for (let i = 0; i < dataImages.length; i++) {
    console.log(dataImages[i]);

    


    listingImageCarouselContainer.innerHTML += `<div class="carousel-item">
                        <img src="" class="d-block w-100" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                        </div>
                        </div>`;
  };
}
