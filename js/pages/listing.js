import apiCall from "../utils/api/get/apiCall.js";
import { baseUrl } from "../settings/api.js";
import renderNavBar from "../components/ui/navBar/renderNav.js";
import { renderCarousel } from "../components/ui/carousel/renderCarousel.js";
import { getUserInfoFromStorage } from "../utils/storage/userStorage.js";

renderNavBar();

const urlParams = new URLSearchParams(window.location.search);

const listingId = urlParams.get("id");

console.log(listingId, baseUrl);

async function getListing() {
  try {
    const listingData = await apiCall(baseUrl + `/listings/${listingId}?_bids=true&_seller=true`);
    console.log(listingData);

    renderListingPage(listingData);
    renderCarousel(listingData, ".carousel-inner");
  } catch (error) {
    console.log(error);
  }
}

getListing();

function renderListingPage(data) {
  const listingTitle = document.querySelector("#listing-title-container h1");
  listingTitle.textContent = data.title;

  const listingInfoContainer = document.querySelector(".listing-info-container");


  const textContainer = document.createElement("div");
  textContainer.classList.add("listing-text-container");

  

  const description = document.createElement("p");
  description.classList.add("listing-description", "mx-5");
  description.textContent = data.description;

  const tagsContainer = document.createElement("div");
  tagsContainer.classList.add("listing-tags", "mx-5", "fw-bold");
  tagsContainer.appendChild(document.createTextNode("Tags: "));

  for (const tag of data.tags) {
    tagsContainer.appendChild(createTags(tag));
  }

  textContainer.appendChild(description);
  textContainer.appendChild(tagsContainer);

  listingInfoContainer.appendChild(textContainer);


  const timeAndBidContainer = document.createElement("div");
  timeAndBidContainer.classList.add("listing-time-bid-container");


  


  
  /*   listingInfoContainer.innerHTML = `
  <div 
        <p>description</p>
        <span>tags</span>
        <div>
        <div>
          <time>time left</time>
        <span>current bid</span>
          <label><input>
          </label>
        </div>`;
} */




}

function createTags(tags) {
  const tag = document.createElement("span");
  tag.classList.add("listing-tag", "fw-normal");
  tag.textContent = tags + " ";

  return tag;
}

/* const createBtn = document.querySelector("#create");

createBtn.addEventListener("click", createListing); */

/* async function createListing() {
  const url = baseUrl + "/profiles/john_wick/media";
  const token = getUserInfoFromStorage().token;

  /*   const data = JSON.stringify({
    title: "a real test",
    endsAt: "2023-12-28T14:52:12.436Z",
    description:
      "A Porsche is a luxurious and iconic sports car known for its sleek design, precision engineering, and exhilarating performance. It combines elegance, speed, and innovation, setting the standard for automotive excellence.",
    tags: ["car", "porsche", "nice", "fast", "test", "good", "sound", "driving"],
    
    media: [
      "https://cdn.pixabay.com/photo/2020/06/22/19/30/automobile-5330343_640.jpg",
      "https://cdn.pixabay.com/photo/2016/11/22/23/44/porsche-1851246_640.jpg",
      "https://cdn.pixabay.com/photo/2018/04/07/16/30/auto-3298890_640.jpg",
      "https://cdn.pixabay.com/photo/2020/10/18/16/45/porsche-5665390_640.jpg",
      "https://cdn.pixabay.com/photo/2019/09/28/12/41/porsche-4510684_6400.jpg",
      "https://cdn.pixabay.com/photo/2017/07/01/18/45/porsche-918-spyder-2462278_640.jpg",
      "https://cdn.pixabay.com/photo/2018/01/11/17/32/porsche-911-gt2rs-3076518_640.jpg",
      "https://cdn.pixabay.com/photo/2019/10/07/16/16/porsche-4533006_640.jpg",
    ],
  }); 

  const data = JSON.stringify({
    avatar: "https://cdn.pixabay.com/photo/2017/02/04/23/02/candle-2038736_640.jpg",
  });

  console.log(data);

  const options = {
    method: "PUT",
    body: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();

    console.log(json);
  } catch (error) {
    console.log(error);
  }
}
  */
