export function setupTagInput() {
  const input = document.querySelector("#listing-tag-input");
  const output = document.querySelector(".tags");
  const addTagBtn = document.querySelector("#add-tag-btn");

  function createTagElement(tagFormat) {
    // Create div container for the tag
    const tagContainer = document.createElement("div");
    tagContainer.classList.add("tag", "border-1");

    // Create span for the tag text
    const tagText = document.createElement("span");
    tagText.textContent = tagFormat;

    // Create remove button icon
    const removeBtn = document.createElement("i");
    removeBtn.classList.add("fas", "fa-times", "remove-btn");

    // Append tagText and removeBtn to the tagContainer
    tagContainer.appendChild(tagText);
    tagContainer.appendChild(removeBtn);

    return tagContainer;
  }

  function outputTag(tagFormat) {
    const tagElement = createTagElement(tagFormat);
    output.appendChild(tagElement);
    input.value = "";
  }

  addTagBtn.addEventListener("click", (e) => {
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
      const tagValue = tag.firstChild.textContent;
      tagValues.push(tagValue.trim());
    }

    // Now, tagValues array contains the values of all the tags
    const tagObject = {
      tags: tagValues,
    };
    console.log(tagObject);
  }
}
