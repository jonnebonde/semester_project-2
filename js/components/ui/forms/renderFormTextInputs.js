import { getUserInfoFromStorage } from "../../../utils/storage/userStorage.js";

export function renderFormTextInputs(fields, minBid, avatar) {
  const fieldContainers = [];

  fields.forEach((fieldData) => {
    const messageContainer = document.createElement("div");
    messageContainer.classList.add(`${fieldData.id}-message-container`);

    const fieldContainer = document.createElement("div");
    fieldContainer.id = `${fieldData.id}-container`;
    fieldContainer.classList.add("mb-3");

    const label = document.createElement("label");
    label.setAttribute("for", fieldData.id);
    label.classList.add("form-label");
    label.textContent = fieldData.label;

    if (fieldData.type === "textarea") {
      const textarea = document.createElement("textarea");
      textarea.classList.add("form-control");
      textarea.id = fieldData.id;
      textarea.rows = "3";

      const helpText = document.createElement("div");
      helpText.id = `${fieldData.id}Help`;
      helpText.classList.add("form-text");
      helpText.textContent = fieldData.helpText;
      fieldContainer.appendChild(helpText);

      fieldContainer.appendChild(label);
      fieldContainer.appendChild(textarea);
      fieldContainer.appendChild(messageContainer);
      fieldContainer.appendChild(helpText);

      fieldContainers.push(fieldContainer);

      return;
    }

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

    if (fieldData.id === "avatar-form-input") {
      input.value = avatar;
      input.addEventListener("click", (e) => {
        e.preventDefault();
        input.value = "";
      });
      input.addEventListener("input", (e) => {
        const avatarPreview = document.querySelector(".update-avatar-preview");
        avatarPreview.src = e.target.value;
      });
    }

    fieldContainer.appendChild(label);
    fieldContainer.appendChild(input);
    fieldContainer.appendChild(messageContainer);

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
