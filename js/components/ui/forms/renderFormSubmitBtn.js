export function renderFormSubmitBtn(type) {
  const submitButton = document.createElement("button");
  submitButton.id = `${type}-submit_btn`;
  submitButton.type = "submit";
  submitButton.classList.add("btn", "btn-primary", "d-flex", "link-dark", "link-underline-opacity-0", "link-underline-opacity-100-hover");

  const submitButtonText = document.createElement("span");
  submitButtonText.id = `${type}-submit_btn-text`;

  submitButtonText.textContent = "Submit";
  submitButtonText.setAttribute("role", "status");
  submitButtonText.setAttribute("aria-hidden", true);

  submitButton.appendChild(submitButtonText);

  return submitButton;

}