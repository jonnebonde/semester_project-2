
export function renderFormTermsCheckBox() {
  const agreeContainer = document.createElement("div");
    agreeContainer.classList.add("mb-3", "form-check");

    const agreeInput = document.createElement("input");
    agreeInput.type = "checkbox";
    agreeInput.classList.add("form-check-input");
    agreeInput.id = "checkbox";

    const agreeLabel = document.createElement("label");
    agreeLabel.id = "register-form-agree-label";
    agreeLabel.classList.add("form-check-label");
    agreeLabel.setAttribute("data-bs-toggle", "modal");
    agreeLabel.setAttribute("data-bs-target", "#exampleModal");
    agreeLabel.textContent = "Agree to terms and conditions";

    const messageContainer = document.createElement("div");
    messageContainer.classList.add("terms-message-container");

    agreeContainer.appendChild(agreeInput);
    agreeContainer.appendChild(agreeLabel);
    agreeContainer.appendChild(messageContainer);

    return agreeContainer;
}