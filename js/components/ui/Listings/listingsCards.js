import { findHighestBid, timeDifference } from "../../../utils/tools.js";

export function renderListingsCards(data, target) {
  const container = document.querySelector(target);



  data.forEach(function (listing) {

    const card = document.createElement("a");
    card.classList.add("card");
    card.setAttribute("href", `details.html?id=${listing.id}`);

    const cardImg = document.createElement("img");
    cardImg.classList.add("card-img-top");
    cardImg.setAttribute("src", listing.media[0]);
    cardImg.setAttribute("alt", listing.title);
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