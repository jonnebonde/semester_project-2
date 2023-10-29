import { renderForm } from "../../../components/ui/forms/renderForm.js";
import { submitBidForm } from "../../../settings/formKeys.js";
import { renderlistingInfoText } from "./listingTextContainer.js";
import { renderTimeAndBidContainer } from "./renderTimeAndBidContainer.js";
import { findHighestBid } from "../../../utils/tools.js";

export function renderListingPage(data) {
  const listingTitle = document.querySelector("#listing-title-container h1");
  listingTitle.textContent = data.title;

  const listingInfoContainer = document.querySelector(".listing-info-container");
  const textContainer = document.querySelector(".listing-text-container");

  renderlistingInfoText(data, textContainer);

  const timeAndBidContainer = document.createElement("div");
  timeAndBidContainer.classList.add("listing-time-bid-container", "mx-5", "d-flex", "flex-column");
  
  renderTimeAndBidContainer(data, timeAndBidContainer);


 
  renderForm(timeAndBidContainer, submitBidForm, "bid", findHighestBid(data.bids));

  listingInfoContainer.appendChild(timeAndBidContainer);


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
