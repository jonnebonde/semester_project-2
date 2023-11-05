import { collectImageValues } from "../../components/ui/forms/renderimageInputValues.js";

export function validateCreateListing(e) {
  e.preventDefault();

  console.log("asdrfg");
  const titleInput = document.querySelector("#title");
  const descriptionInput = document.querySelector("#description");

  const imageArray = collectImageValues();



  console.log(imageArray);





}