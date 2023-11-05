import { collectImageValues } from "../../components/ui/forms/renderimageInputValues.js";

export function validateCreateListing(e) {
  e.preventDefault();

  console.log("asdrfg");
  const titleInput = document.querySelector("#title");
  const descriptionInput = document.querySelector("#description");

  const imageArray = collectImageValues();

  //fortsette med å få tags array inn i en variabel 


  console.log(imageArray);





}