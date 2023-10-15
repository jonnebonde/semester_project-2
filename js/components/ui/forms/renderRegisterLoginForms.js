export function renderLoginSignupForms() {
  const currentUrl = new URLSearchParams(window.location.search);
  const register = currentUrl.get("register");




  const loginRegisterTopHeading = document.querySelector("#login_register-top_heading");
  const loginRegisterBottomHeading = document.querySelector("#login_register-bottom_heading");
  const loginRegisterChangeFormButton = document.querySelector("#login_register-change-form_btn");
  

  loginRegisterChangeFormButton.addEventListener("click", () => {
    if (register === "true") {
      window.location.href = "login-and-register.html?register=false";
    } else {
      window.location.href = "login-and-register.html?register=true";
    }

  });

  if (register === "true") {
    renderForm("register");
    loginRegisterTopHeading.textContent = "Register";
    loginRegisterBottomHeading.textContent = "Already have an account?";
    loginRegisterChangeFormButton.textContent = "Login";

  } else {
    loginRegisterTopHeading.textContent = "Login";
    loginRegisterBottomHeading.textContent = "Don't have an account yet?";
    loginRegisterChangeFormButton.textContent = "Register";
    renderForm("login");
  }
}

function renderForm(formType) {

  const loginRegisterContainer = document.querySelector(".login_register_form-container");

  const fields = [
    { label: "Email address", type: "email", id: "email", helpText: "We'll never share your email with anyone else..." },
    { label: "Username", type: "text", id: "username", helpText: "We'll never share your username with anyone else..." },
    { label: "Password", type: "password", id: "password", helpText: "Must be at least 8 characters long" },
    { label: "Repeat password", type: "password", id: "repeat-password", helpText: "Your password is safe with us.." },
  ];

  if (formType === "login") {
    fields.splice(1, 1);
    fields.splice(2, 1); 
  }

  const form = document.createElement("form");
  form.id = `${formType}-form`;


  fields.forEach((fieldData) => {
    const fieldContainer = document.createElement("div");
    fieldContainer.classList.add("mb-3");

    const label = document.createElement("label");
    label.setAttribute("for", fieldData.id);
    label.classList.add("form-label");
    label.textContent = fieldData.label;

    const input = document.createElement("input");
    input.type = fieldData.type;
    input.classList.add("form-control");
    input.setAttribute("aria-describedby", `${fieldData.id}Help`);
    input.setAttribute("required", true);

    if (fieldData.type === "password") {
      input.setAttribute("minlength", 8);
    } else {
      input.setAttribute("minlength", 3);
    }
    input.setAttribute("autocomplete", fields.id)
    input.id = fieldData.id;

    fieldContainer.appendChild(label);
    fieldContainer.appendChild(input);

    if (fieldData.helpText) {
      const helpText = document.createElement("div");
      helpText.id = `${fieldData.id}Help`;
      helpText.classList.add("form-text");
      helpText.textContent = fieldData.helpText;
      fieldContainer.appendChild(helpText);
    }

    form.appendChild(fieldContainer);
  });

  if (formType === "register") {
    const agreeContainer = document.createElement("div");
    agreeContainer.classList.add("mb-3", "form-check");

    const agreeInput = document.createElement("input");
    agreeInput.type = "checkbox";
    agreeInput.classList.add("form-check-input");
    agreeInput.id = "checkbox";
    agreeInput.setAttribute("required", true);

    const agreeLabel = document.createElement("label");
    agreeLabel.classList.add("form-check-label");
    agreeLabel.setAttribute("for", "checkbox");
    agreeLabel.textContent = "Agree";

    agreeContainer.appendChild(agreeInput);
    agreeContainer.appendChild(agreeLabel);
    form.appendChild(agreeContainer);
  }

  const submitButton = document.createElement("button");
  submitButton.id = `${formType}-submit_btn`;
  submitButton.type = "submit";
  submitButton.classList.add("btn", "btn-primary", "d-flex", "link-dark", "link-underline-opacity-0", "link-underline-opacity-100-hover");

  const submitButtonSpinner = document.createElement("span");
  submitButtonSpinner.id = `${formType}-submit_btn-spinner`;
  submitButtonSpinner.classList.add("spinner-border", "spinner-border-sm", "d-none");
  submitButtonSpinner.setAttribute("role", "status");
  submitButtonSpinner.setAttribute("aria-hidden", true);

  const submitButtonText = document.createElement("span");
  submitButtonText.id = `${formType}-submit_btn-text`;

  submitButtonText.textContent = "Submit";
  submitButtonText.setAttribute("role", "status");
  submitButtonText.setAttribute("aria-hidden", true);

  submitButton.appendChild(submitButtonText); 
  submitButton.appendChild(submitButtonSpinner);

  form.appendChild(submitButton);

  loginRegisterContainer.innerHTML = ""; 
  loginRegisterContainer.appendChild(form);

}