import { renderCarousel } from "../components/ui/carousel/renderCarousel.js";

const tagForm = document.querySelector("#tag-form");
const input = document.querySelector("#tagInput");
const output = document.querySelector(".tags");
const max = document.querySelector(".max");

function outputTag(tagFormat) {
  const tag = `
  <button class="tag ">
  <span>${tagFormat} </span>
  <i class="fas fa-times remove-btn"></i>
  </button>
  `;

  output.innerHTML += tag;

  input.value = "";
}

tagForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (input.value === "") {
    e.preventDefault();
  } else if (output.children.length >= 7) {
    outputTag(input.value);
    collectTagValues();

    input.disabled = true;
    input.placeholder = "Max number of tags reached!";
  } else {
    outputTag(input.value);
    collectTagValues();
  }

  console.log(output);
});

if (input) {
  input.addEventListener("input", () => {
    const rmvWhitespace = input.value.replace(/\s/g, "");
    input.value = rmvWhitespace.replace(/\s[^a-zA-Z0-9]/g, "");
  });
}

window.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove-btn")) {
    e.target.parentElement.remove();
    input.disabled = false;
    input.placeholder = "Add a tag..";
    collectTagValues();
  }
});

// Initialize an empty array to store tag values

function collectTagValues() {
  const tagValues = [];
  // Iterate through the children of the output element (tags)
  for (const tag of output.children) {
    // Extract the text content of each tag and push it to the tagValues array
    const tagValue = tag.querySelector("span").textContent;
    tagValues.push(tagValue.trim());
  }

  // Now, tagValues array contains the values of all the tags
  const mediaObject = {
    media: tagValues,
  };
  console.log(mediaObject);

  // Remove any existing carousel items

  // Render the carousel with the new mediaObject
  renderCarousel(mediaObject, ".carousel-inner");
}


// mockup data for testing
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
  });
