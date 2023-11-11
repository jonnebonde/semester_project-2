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
