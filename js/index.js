import { baseUrl } from "./settings/api.js";
import { renderHeroCarousel } from "./components/ui/carousel/renderCarouselHomePage.js";
import displayMessage from "./components/ui/displayMessage.js";
import apiCall from "./components/api/apiCall.js";

(async function () {
  try {
    const carouselData = await apiCall(baseUrl + "/listings?sort=created");
    renderHeroCarousel(carouselData);
  } catch (error) {
    displayMessage("There was an error fetching the data, please try to refresh the page", ".message-container", "error");
    console.log(error);
  }
})();

(async function () {
  try {
    const carouselData = await apiCall(baseUrl + "/listings?limit=100&sort=endsAt&sortOrder=asc&_bids=true&_active=true");
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
      container.innerHTML += `<a href="details.html?id=${listing.id}">
                                  <div class="card"  >
                                      <img src="${listing.media[0]})" onerror="src='/assets/img/no-image-icon-23485.png'" class="card-img-top">
                                      <div class="listing-card-content">
                                          <h3>${listing.title}</h3>
                                          <p>Current bid: ${findHighestBid(listing.bids)} kr</p>
                                          <time>${listing.endsAt}</time>
                                      </div>
                                  </div>
                              <div>
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