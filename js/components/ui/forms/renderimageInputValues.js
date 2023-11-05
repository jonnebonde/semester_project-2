import displayMessage from "../../../components/ui/state_handlers/displayMessage.js";

export function setupImageInput() {
  const input = document.querySelector("#listing-image-input");
  const output = document.querySelector(".images");
  const addImageBtn = document.querySelector("#add-image-btn");

  function createImageElement(imageFormat) {
    // Create div container for the tag
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("form-image", "border-1");

    // Create span for the tag text
    const thumbnail = document.createElement("img");
    thumbnail.src = imageFormat;
    thumbnail.setAttribute("alt", "image");
    thumbnail.classList.add("thumbnail");
    thumbnail.setAttribute("width", "100px");
    thumbnail.setAttribute("height", "100px");


    // Create remove button icon
    const removeBtn = document.createElement("i");
    removeBtn.classList.add("fas", "fa-times", "remove-btn");

    // Append tagText and removeBtn to the tagContainer
    imageContainer.appendChild(thumbnail);
    imageContainer.appendChild(removeBtn);

    return imageContainer;
  }

  function outputImage(imageFormat) {
    const imageElement = createImageElement(imageFormat);
    output.appendChild(imageElement);
    input.value = "";
  }

  addImageBtn.addEventListener("click", (e) => {
    e.preventDefault();





    if (input.value === "") {
      e.preventDefault();
    } else if (output.children.length >= 7) {
      outputImage(input.value);
      collectImageValues();

      input.disabled = true;
      input.placeholder = "Max number of tags reached!";
    } else {
      outputImage(input.value);
      collectImageValues();
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
      collectImageValues();
    }
  });

  // Initialize an empty array to store tag values

  function collectImageValues() {
    const imageValues = [];
    // Iterate through the children of the output element (tags)
    for (const image of output.children) {
      // Extract the text content of each tag and push it to the tagValues array
      const imageValue = image.firstChild.textContent;
      imageValues.push(imageValue.trim());
    }

    // Now, tagValues array contains the values of all the tags
    const imageObject = {
      media: imageValues,
    };
    console.log(imageObject);
  }
}



