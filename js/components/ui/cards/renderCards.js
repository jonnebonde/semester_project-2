import { findHighestBid, timeDifference } from "../../../utils/tools.js";

/**
 * Renders a card for a given listing and appends it to a container element.
 *
 * @param {Object} listing - The listing object to render a card for.
 * @param {HTMLElement} container - The container element to append the card to.
 * @param {string} type - The type of card to render (e.g. "small", "large").
 */
export function renderCards(listing, container, type) {
  const card = document.createElement("a");
  card.classList.add(type, "listing-card", "link-dark", "link-underline-opacity-0");
  card.setAttribute("href", `listing.html?id=${listing.id}`);

  const cardImg = document.createElement("img");
  cardImg.classList.add(`${type}` + "-img-top");
  cardImg.setAttribute("src", listing.media[0]);
  cardImg.setAttribute("alt", listing.title);
  cardImg.setAttribute("onerror", "src='/assets/img/no-image-icon-23485.jpg'");
  card.appendChild(cardImg);

  const cardContent = document.createElement("div");
  cardContent.classList.add(`${type}` + "-card-content");

  const cardTitle = document.createElement("h4");
  cardTitle.textContent = listing.title;

  if (listing.title.length >= 30) {
    cardTitle.classList.add("text-truncate");
  } else if (listing.title.length >= 21) {
    cardTitle.style.fontSize = "17px";
  }

  const cardBid = document.createElement("p");
  cardBid.textContent = `Current bid: ${findHighestBid(listing.bids)} kr`;

  const cardTime = document.createElement("time");
  cardTime.textContent = "Ends in: " + timeDifference(listing.endsAt);

  cardContent.appendChild(cardTitle);
  cardContent.appendChild(cardBid);
  cardContent.appendChild(cardTime);

  card.appendChild(cardContent);

  container.appendChild(card);
}
