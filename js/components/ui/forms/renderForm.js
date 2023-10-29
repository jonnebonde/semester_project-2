import { renderFormTextInputs } from "./renderFormTextInputs.js";
import { renderFormSubmitBtn } from "./renderFormSubmitBtn.js";
import { renderFormTermsCheckBox } from "./renderFormTermsCheckBox.js";
import { validateLogin } from "../../../utils/validation/validateLoginForm.js";
import { validateRegister } from "../../../utils/validation/validateRegisterForm.js";
import { getUserInfoFromStorage } from "../../../utils/storage/userStorage.js";

export function renderForm(target, fields, type, minBid) {
  const formContainer = target;
  const form = document.createElement("form");
  form.id = `${type}-form`;

  const user = getUserInfoFromStorage();

  const formInputs = renderFormTextInputs(fields, minBid);

  formInputs.forEach((input) => {
    form.appendChild(input);
  });

  if (type === "register") {
    const termsCheckBox = renderFormTermsCheckBox();
    form.appendChild(termsCheckBox);
  }

 

  const submitButton = renderFormSubmitBtn(type);

  form.appendChild(submitButton);

  if(type === "bid" && !user.token) {
    form.textContent = "You need to be logged in to place a bid";
    form.style.fontWeight = "bold";
  }

  formContainer.appendChild(form);

  switch (type) {
    case "register":
      form.addEventListener("submit", validateRegister);
      break;
    case "login":
      form.addEventListener("submit", validateLogin);
      break;
    case "bid":
      form.addEventListener("submit", validateBid);
      break;
    case "createListing":
      form.addEventListener("submit", validateCreateListing);
      break;
  }
}

function validateBid(e) {
  e.preventDefault();

  console.log("validateBid");
}

function validateCreateListing() {}
