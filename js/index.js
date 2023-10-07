import { baseUrl } from "./settings/api.js";
import { renderHeroCarousel } from "./components/ui/carousel/renderCarouselHomePage.js";
import displayMessage from "./components/ui/displayMessage.js";
import apiCall from "./components/api/apiCall.js";

(async function () {
  try {
    const carouselData = await apiCall(baseUrl + "/listings?limit=8&sort=created");
    renderHeroCarousel(carouselData);
  } catch (error) {
    displayMessage("There was an error fetching the data, please try to refresh the page", ".message-container", "error");
    console.log(error);
  }
})();

(async function () {
  try {
    const carouselData = await apiCall(baseUrl + "/listings?limit=8&_bids=true");
    renderListingsCards(carouselData);
  } catch (error) {
    displayMessage("There was an error fetching the data, please try to refresh the page", ".message-container", "error");
    console.log(error);
  }
})();

function renderListingsCards(data) {

  console.log(data);
    
    const container = document.querySelector(".listings-results-container");
    container.innerHTML = "";

    data.forEach(function (listing) {
      container.innerHTML += `
                                  <a class="card " style="width: 18rem;" href="details.html?id=${listing.id}">
                                      <div class="listing-card-image" style="background-image: url(${listing.media[0]})"></div>
                                      <div class="listing-card-content">
                                          <h4>${listing.title}</h4>
                                          <p>${findHighestBid(listing.bids)} kr</p>
                                      </div>
                                  </a>
                            `;
    });
}

function findHighestBid(bids) {

  let highestBid = 0;
  bids.forEach(function (bid) {
    if (bid.amount > highestBid) {
      highestBid = bid.amount;
    }
  });

  return highestBid;
}