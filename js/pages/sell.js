import renderNavbar from "../components/ui/navBar/renderNav.js";
import { renderCreateListingForm } from "../components/ui/forms/renderCreateListingForm.js";
import { getUserInfoFromStorage, getSuperSecretToken } from "../utils/storage/userStorage.js";

const user = getUserInfoFromStorage("user");
const token = getSuperSecretToken();

if (!user || !token) {
  location.href = "/index.html";
} else {
  renderNavbar();
  renderCreateListingForm();
}

// Remove any existing carousel items

// Render the carousel with the new mediaObject

/* // mockup data for testing
const images = {
  media: [
    "https://images.unsplash.com/photo-1698863984285-7e8f781f6b7e?auto=format&fit=crop&q=80&w=2488&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1650943574955-ac02c65cfc71?auto=format&fit=crop&q=80&w=2371&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1693659087009-02aace3ce0d9?auto=format&fit=crop&q=80&w=2487&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1698765096815-ab47adb36208?auto=format&fit=crop&q=80&w=2487&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1698901241480-52223fbd8e8b?auto=format&fit=crop&q=80&w=2370&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1683009427470-a36fee396389?auto=format&fit=crop&q=80&w=2487&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1698778573735-0c8fc2d2554a?auto=format&fit=crop&q=80&w=2574&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1698781724966-9f69445fa76b?auto=format&fit=crop&q=80&w=2565&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ],
};



console.log(images);

const imageUrl = "https://images.unsplash.com/photo-1698863984285-7e8f781f6b7e?auto=format&fit=crop&q=80&w=2488&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";


// check if image url is valid author: https://stackoverflow.com/questions/9714525/javascript-image-url-verify
fetch(images.media)
  .then((response) => {
    if (response.ok) {
      console.log("Image URL is valid");
      return response.blob();
      
    } else {
      console.log("Image URL is invalid");
    }
  })

  .catch((error) => {
    console.error("Error validating image URL:", error);
  }); */
