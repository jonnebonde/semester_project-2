import { renderCreateListingForm } from "../../forms/renderCreateListingForm.js";
import { setupTagInput } from "../../forms/renderTagInputFieldValues.js";
import { setupImageInput } from "../../forms/renderimageInputValues.js";
import { renderListingInfoText } from "../listingTextContainer.js";


export function renderCreatelistingPage() {
  const formMainContainer = document.querySelector("#sell-create-listing-form-container");
  formMainContainer.classList.add("row", "row-cols-lg-2", "row-cols-1", "m-auto");
  formMainContainer.textContent = "";

  const formContainer = document.createElement("div");
  formContainer.classList.add("col");
  formContainer.id = "sell-create-form";

  const previewContainer = document.createElement("div");
  previewContainer.classList.add("col");
  previewContainer.id = "sell-create-preview";

  const messageContainer = document.createElement("div");
  messageContainer.classList.add("create-listing-message-container");

  formMainContainer.appendChild(formContainer);
  formMainContainer.appendChild(previewContainer);
  formMainContainer.appendChild( messageContainer);

  const createListingForm = renderCreateListingForm();
  formContainer.appendChild(createListingForm);

 // continue on preview container



  setupTagInput();
  setupImageInput();

  let data = {
    title: "",
    description: "",
    price: "",
    tags: [],
    images: [],
  };


  const titleInput = document.querySelector("#listing-title-input");
  const descriptionInput = document.querySelector("#listing-description-input");
  const dateInput = document.querySelector("#listing-date-input");

  titleInput.addEventListener("input", (e) => {
    data.title = e.target.value;
    renderListingInfoText(data, previewContainer);
  });

  descriptionInput.addEventListener("input", (e) => {
    data.description = e.target.value;
    renderListingInfoText(data, previewContainer);
  });

  dateInput.addEventListener("input", (e) => {
    data.date = e.target.value;
    renderListingInfoText(data, previewContainer);
  });


 




  const tagsArray = setupTagInput();
  const imagesArray = setupImageInput();

  console.log(tagsArray, imagesArray);


}
