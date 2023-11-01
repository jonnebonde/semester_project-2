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
  collectTagValues()
  if (input.value === "") {
    e.preventDefault();
  } else if (output.children.length >= 7) {
    outputTag(input.value);
    collectTagValues()

    input.disabled = true;
    input.placeholder = "Max number of tags reached!";
  } else {
    outputTag(input.value);
  }

  console.log(output)
});

if (input) {
  input.addEventListener("input", () => {
    const rmvWhitespace = input.value.replace(/\s/g, "");
    input.value = rmvWhitespace.replace(/\s[^a-zA-Z0-9]/g, "");
  });
}

window.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove-btn")) {
    console.log(e.target.parentElement);
    e.target.parentElement.remove();
    input.disabled = false;
    input.placeholder = "Add a tag..";
    collectTagValues()
  }
});

// Initialize an empty array to store tag values



function collectTagValues() {
  const tagValues = [];
  // Iterate through the children of the output element (tags)
for (const tag of output.children) {
  // Extract the text content of each tag and push it to the tagValues array
  const tagValue = tag.querySelector('span').textContent;
  tagValues.push(tagValue.trim()); // Trim to remove extra whitespace
}

// Now, tagValues array contains the values of all the tags
console.log(tagValues);

}


