import apiCall from "./utils/api/apiCall.js";


// pagination url example = ?limit=20&offset=20
// sorting url example = ?sort=title&sortOrder=asc
// 

const baseUrl = "https://api.noroff.dev/api/v1/auction";

const apiUrl = baseUrl + "/listings?limit=6&sort=created" ;

(async function () {
  try {
    const data = await apiCall(apiUrl);
    console.log(data);
    renderHeroCarousel(data)
  } catch (error) {
    console.log(error);
  }
})();


function renderHeroCarousel(data) {

  console.log(data)

  const carouselImageContainer = document.querySelector(".carousel-inner");
  const carouselIndicatorsContainer = document.querySelector(".carousel-indicators");

  const carouselItemsElementsArray = [];
  const carouselIndicatorsElementsArray = [];

  for (let i = 0; i < data.length; i++) {

    if(i === 4) {
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

    if(i === 0) {
      carouselItemContainer.classList.add("active");
      carouselIndicator.classList.add("active");
      carouselIndicator.setAttribute("aria-current", "true");
    }

    const carouselItem = document.createElement("img");
    carouselItem.classList.add("d-block");
    carouselItem.classList.add("w-100");
    carouselItem.setAttribute("src", item.media[0]);
    carouselItem.setAttribute("alt", item.title);

    carouselItemContainer.appendChild(carouselItem);

    carouselIndicatorsContainer.appendChild(carouselIndicator);
    carouselImageContainer.appendChild(carouselItemContainer);

    carouselIndicatorsElementsArray.push(carouselIndicator);
    carouselItemsElementsArray.push(carouselItemContainer);
  }
}


