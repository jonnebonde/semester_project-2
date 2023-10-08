import { baseUrl } from "./settings/api.js";
import { renderHeroCarousel } from "./components/ui/carousel/renderCarouselHomePage.js";
import displayMessage from "./components/ui/displayMessage.js";
import apiCall from "./components/api/apiCall.js";

async function fetchCarouselData() {
  try {
    const carouselData = await apiCall(baseUrl + "/listings?sort=created");
    renderHeroCarousel(carouselData);
  } catch (error) {
    displayMessage("There was an error fetching the data, please try to refresh the page", ".message-container", "error");
    console.log(error);
  }
};
fetchCarouselData()

async function fetchListings() {
  try {
    const listingsData = await apiCall(baseUrl + "/listings?limit=8&sort=endsAt&sortOrder=asc&_bids=true&_active=true");
    renderLastChanceCards(listingsData);
  } catch (error) {
    displayMessage("There was an error fetching the data, please try to refresh the page", ".message-container", "error");
    console.log(error);
  }
};
fetchListings();

function renderLastChanceCards(data) {
  const container = document.querySelector(".last_chance-listings-results-container");
  container.innerHTML = "";

renderListingsCards(data, ".last_chance-listings-results-container");
}


function renderListingsCards(data, target) {
  
  const container = document.querySelector(target);


  data.forEach(function (listing) {

    const card = document.createElement("a");
    card.classList.add("card");
    card.setAttribute("href", `details.html?id=${listing.id}`);

    const cardImg = document.createElement("img");
    cardImg.classList.add("card-img-top");
    cardImg.setAttribute("src", listing.media[0]);
    cardImg.setAttribute("onerror", "src='/assets/img/no-image-icon-23485.png'");
    card.appendChild(cardImg);

    const cardContent = document.createElement("div");
    cardContent.classList.add("listing-card-content");

    const cardTitle = document.createElement("h3");
    cardTitle.textContent = listing.title;

    const cardBid = document.createElement("p");
    cardBid.textContent = `Current bid: ${findHighestBid(listing.bids)} kr`;

    const cardTime = document.createElement("time");
    cardTime.textContent = timeDifference(listing.endsAt);

    cardContent.appendChild(cardTitle);
    cardContent.appendChild(cardBid);
    cardContent.appendChild(cardTime);

    card.appendChild(cardContent);
    
    container.appendChild(card);

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

function timeDifference(timeUntilEnds) {
  let timeDifference = new Date(timeUntilEnds) - new Date();

  function convertTimeToDays(timeDifference) {
    let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    return "Ends in " + days + " days and " + hours + " hours";
  }

  return convertTimeToDays(timeDifference);
}
