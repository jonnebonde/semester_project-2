/**
 * Renders the login and register forms page with a modal for terms and conditions.
 * @function
 * @returns {void}
 */
import { renderLoginRegisterForms } from "../forms/renderLoginRegisterForms.js";
import { termsAndConditionsText } from "../../../settings/termsAndConditionsText.js";

export function renderLoginRegisterFormsPage() {
  const main = document.querySelector("main");

  const modalDiv = document.createElement("div");
  modalDiv.classList.add("modal", "fade");
  modalDiv.id = "exampleModal";
  modalDiv.tabIndex = "-1";
  modalDiv.setAttribute("aria-labelledby", "exampleModalLabel");
  modalDiv.setAttribute("aria-hidden", "true");

  const modalDialog = document.createElement("div");
  modalDialog.classList.add("modal-dialog", "modal-dialog-scrollable");

  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");

  const modalHeader = document.createElement("div");
  modalHeader.classList.add("modal-header");

  const modalTitle = document.createElement("h1");
  modalTitle.classList.add("modal-title", "fs-5");
  modalTitle.id = "exampleModalLabel";
  modalTitle.textContent = "Terms and Conditions";

  const closeButton = document.createElement("button");
  closeButton.type = "button";
  closeButton.classList.add("btn-close");
  closeButton.setAttribute("data-bs-dismiss", "modal");
  closeButton.setAttribute("aria-label", "Close");

  modalHeader.appendChild(modalTitle);
  modalHeader.appendChild(closeButton);

  const modalBody = document.createElement("div");
  modalBody.classList.add("modal-body");
  modalBody.innerHTML = termsAndConditionsText;

  const modalFooter = document.createElement("div");
  modalFooter.classList.add("modal-footer");

  const closeButtonFooter = document.createElement("button");
  closeButtonFooter.type = "button";
  closeButtonFooter.classList.add("btn", "btn-primary");
  closeButtonFooter.setAttribute("data-bs-dismiss", "modal");
  closeButtonFooter.textContent = "Close";

  modalFooter.appendChild(closeButtonFooter);

  modalContent.appendChild(modalHeader);
  modalContent.appendChild(modalBody);
  modalContent.appendChild(modalFooter);

  modalDialog.appendChild(modalContent);
  modalDiv.appendChild(modalDialog);

  const loginRegisterContainer = document.createElement("section");
  loginRegisterContainer.classList.add("login_register_container");

  const sectionHeadingTop = document.createElement("div");
  sectionHeadingTop.classList.add("section-heading");
  const h1Top = document.createElement("h1");
  h1Top.id = "login_register-top_heading";
  sectionHeadingTop.appendChild(h1Top);

  const messageContainer = document.createElement("div");
  messageContainer.classList.add("message-container", "text-center");

  const loginRegisterFormContainer = document.createElement("div");
  loginRegisterFormContainer.classList.add("login_register_form-container");

  const sectionHeadingBottom = document.createElement("div");
  sectionHeadingBottom.classList.add("section-heading");
  const h2Bottom = document.createElement("h2");
  h2Bottom.id = "login_register-bottom_heading";
  sectionHeadingBottom.appendChild(h2Bottom);

  const changeFormContainer = document.createElement("div");
  changeFormContainer.classList.add("login_register_change_form-container", "container", "d-flex", "justify-content-center");

  const changeFormButton = document.createElement("button");
  changeFormButton.id = "login_register-change-form_btn";
  changeFormButton.type = "button";
  changeFormButton.classList.add("btn", "btn-primary", "link-dark", "link-underline-opacity-0", "link-underline-opacity-100-hover");
  changeFormButton.textContent = "Login";

  changeFormContainer.appendChild(changeFormButton);

  loginRegisterContainer.appendChild(sectionHeadingTop);
  loginRegisterContainer.appendChild(messageContainer);
  loginRegisterContainer.appendChild(loginRegisterFormContainer);
  loginRegisterContainer.appendChild(sectionHeadingBottom);
  loginRegisterContainer.appendChild(changeFormContainer);

  main.appendChild(modalDiv);
  main.appendChild(loginRegisterContainer);

  renderLoginRegisterForms();
}
