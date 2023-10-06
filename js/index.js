import { baseUrl } from "./settings/api.js";
import  { renderHeroCarousel } from "./components/ui/carousel/renderCarouselHomePage.js";
import displayMessage from "./components/ui/displayMessage.js";



/* const homePageUrlArray = [
  fetch(baseUrl + "/listings?limit=8&sort=created"),
  fetch(baseUrl + "/listings?limit=8&sort=endsAt&sortOrder=asc&_active=true"),
]

async function multiUrlFetch(array) {
  try {
    const results = await Promise.allSettled(array);
    console.log(results);
    const successResultData = [];
    results.map(obj => {
      if(obj.status === "fulfilled") {
        successResultData.push(obj.value);
      }
    })

    const successData = await Promise.all(successResultData.map((item) => {
      return item.json();
    }));

    renderHeroCarousel(successData[0]);
    console.log(successData);

  } catch (error) {
    console.log(error);
  }
}

multiUrlFetch(homePageUrlArray); */


async function fetchHomePageData() {
  try {
    const carouselImages = await fetch(baseUrl + "/listings?limit=8&sort=created");
    if(!carouselImages.ok) {
      throw new Error(displayMessage("Something went wrong..", ".carousel-inner", "An error occured" ));
    }
    const carouselData = await carouselImages.json();
    console.log(carouselData);

    renderHeroCarousel(carouselData);

    const lastChanceAuctions = await fetch(baseUrl + "/listings?limit=8&sort=endsAt&sortOrder=asc&_active=true");
    if(!lastChanceAuctions.ok) {
      throw new Error(displayMessage("Something went wrong..", ".carousel-inner", "An error occured" ));
    }
    const lastChanceAuctionsData = await lastChanceAuctions.json();

    console.log(lastChanceAuctionsData);
  }
  catch(error) {
    console.log(error);
  }
}

fetchHomePageData();



