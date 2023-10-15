

export function handleLogin(e) {
  e.preventDefault();

  const submitLoginFormBtn = document.querySelector("#login-submit_btn");
  const submitLoginFormBtnSpinner = document.querySelector("#login-submit_btn-spinner");
  const submitLoginFormBtnText = document.querySelector("#login-submit_btn-text");

  submitLoginFormBtnText.textContent = "loading...";
  submitLoginFormBtnSpinner.classList.remove("d-none");
  submitLoginFormBtnSpinner.classList.add("d-block");

  console.log("login");
}