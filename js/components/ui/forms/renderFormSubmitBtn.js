/**
 * Creates and returns a submit button element for a form.
 * @param {string} type - The type of form.
 * @returns {HTMLButtonElement} The submit button element.
 */
export function renderFormSubmitBtn(type) {
  const submitButton = document.createElement("button");
  submitButton.id = `${type}-submit_btn`;
  submitButton.type = "submit";
  submitButton.classList.add("btn", "btn-primary", "d-flex", "link-dark", "link-underline-opacity-0", "link-underline-opacity-100-hover", "w-100");

  const submitButtonText = document.createElement("span");
  submitButtonText.classList.add("mx-auto");
  submitButtonText.id = `${type}-submit_btn-text`;
  submitButtonText.textContent = "Submit";

  submitButtonText.setAttribute("role", "status");
  submitButtonText.setAttribute("aria-hidden", true);

  submitButton.appendChild(submitButtonText);

  return submitButton;
}
