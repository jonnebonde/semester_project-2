import { getUserInfoFromStorage } from "../../../utils/storage/userStorage.js";

export function renderFormTextInputs(fields, minBid) {
  const fieldContainers = [];

  console.log(fields);

  fields.forEach((fieldData) => {
    const fieldContainer = document.createElement("div");
    fieldContainer.id = `${fieldData.id}-container`;
    fieldContainer.classList.add("mb-3");

    const label = document.createElement("label");
    label.setAttribute("for", fieldData.id);
    label.classList.add("form-label");
    label.textContent = fieldData.label;

    const input = document.createElement("input");
    input.type = fieldData.type;
    input.classList.add("form-control");
    input.setAttribute("aria-describedby", `${fieldData.id}Help`);
    input.id = fieldData.id;

    const user = getUserInfoFromStorage();

    if (fieldData.type === "number" && fieldData.id === "bid") {
      input.min = minBid + 1;
      input.max = user.credits;
      input.value = minBid + 1;
    }
    fieldContainer.appendChild(label);
    fieldContainer.appendChild(input);

    if (fieldData.helpText) {
      const helpText = document.createElement("div");
      helpText.id = `${fieldData.id}Help`;
      helpText.classList.add("form-text");
      helpText.textContent = fieldData.helpText;
      fieldContainer.appendChild(helpText);
    }

    fieldContainers.push(fieldContainer);
  });

  return fieldContainers;
}
