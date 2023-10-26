import { renderFormTextInputs } from "./renderFormTextInputs.js";
import { renderFormSubmitBtn } from "./renderFormSubmitBtn.js";
import { renderFormTermsCheckBox } from "./renderFormTermsCheckBox.js";
import { validateLogin } from "../../../utils/validation/validateLoginForm.js";
import { validateRegister } from "../../../utils/validation/validateRegisterForm.js";

export function renderForm(target, fields, type) {
  const formContainer = target;
  const form = document.createElement("form");
  form.id = `${type}-form`;

  const formInputs = renderFormTextInputs(fields);

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

  if (type === "register") {
    form.addEventListener("submit", validateRegister);
  } else {
    form.addEventListener("submit", validateLogin);
  }
}
