/**
 * Renders a form with given fields and type, and attaches it to the target element.
 * @param {HTMLElement} target - The target element to attach the form to.
 * @param {Array} fields - An array of objects representing the form fields.
 * @param {string} type - The type of form to render.
 * @param {Object} data - An object containing data to pre-fill the form fields.
 * @returns {HTMLFormElement} - The rendered form element.
 */
import { renderFormTextInputs } from "./renderFormTextInputs.js";
import { renderFormSubmitBtn } from "./renderFormSubmitBtn.js";
import { renderFormTermsCheckBox } from "./renderFormTermsCheckBox.js";
import { validateLogin } from "../../../utils/validation/validateLoginForm.js";
import { validateRegister } from "../../../utils/validation/validateRegisterForm.js";
import { validateAvatarForm } from "../../../utils/validation/validateUpdateAvatarForm.js";

export function renderForm(target, fields, type, data) {
  const formContainer = target;
  const form = document.createElement("form");
  form.id = `${type}-form`;

  const formInputs = renderFormTextInputs(fields, "", data);

  formInputs.forEach((input) => {
    form.appendChild(input);
  });

  if (type === "register") {
    const termsCheckBox = renderFormTermsCheckBox();
    form.appendChild(termsCheckBox);
  }

  const submitButton = renderFormSubmitBtn(type);

  form.appendChild(submitButton);
  formContainer.appendChild(form);

  switch (type) {
    case "register":
      form.addEventListener("submit", validateRegister);
      break;

    case "login":
      form.addEventListener("submit", validateLogin);
      break;

    case "update-avatar":
      form.addEventListener("submit", validateAvatarForm);
      break;
    default:
      console.log("no type");
  }

  return form;
}
