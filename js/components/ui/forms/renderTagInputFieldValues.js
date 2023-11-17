/**
 * Sets up a tag input field with a maximum of 7 tags. Allows the user to add and remove tags.
 * @function setupTagInput
 * @returns {void}
 */

/**
 * Collects all the tag values and returns them in an object.
 * @function collectTagValues
 * @returns {{tags: string[]}} An object containing an array of tag values.
 * built with the help of chatGPT on the regex and learning about childElementCount
 */
export function setupTagInput() {
  const input = document.querySelector("#listing-tag-input");
  const output = document.querySelector(".tags");
  const addTagBtn = document.querySelector("#add-tag-btn");
  const numberOfTags = output.childElementCount;

  if (numberOfTags >= 7) {
    input.disabled = true;
    input.placeholder = "Max number of tags reached!";
  }

  function createTagElement(tagFormat) {
    const tagContainer = document.createElement("div");
    tagContainer.classList.add("tag", "border-1");

    const tagText = document.createElement("span");
    tagText.textContent = tagFormat;

    const removeBtn = document.createElement("i");
    removeBtn.classList.add("fas", "fa-times", "remove-btn");

    tagContainer.appendChild(tagText);
    tagContainer.appendChild(removeBtn);

    return tagContainer;
  }

  function outputTag(tagFormat) {
    const tagElement = createTagElement(tagFormat);
    output.appendChild(tagElement);
    input.value = "";
  }

  if (addTagBtn) {
    addTagBtn.addEventListener("click", (e) => {
      e.preventDefault();

      if (input.value === "") {
        e.preventDefault();
      } else if (output.children.length >= 7) {
        outputTag(input.value);
        collectTagValues(input, output);
        input.disabled = true;
        input.placeholder = "Max number of tags reached!";
      } else {
        outputTag(input.value);
        collectTagValues(input, output);
      }
    });
  }

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
      collectTagValues(input, output);
    }
  });
}

export function collectTagValues() {
  const tagValues = [];
  const output = document.querySelector(".tags");

  for (const tag of output.children) {
    const tagValue = tag.firstChild.textContent;
    tagValues.push(tagValue.trim());
  }

  const tagObject = {
    tags: tagValues,
  };
  return tagObject;
}
