

export function handleRegister(e) {
  e.preventDefault();

  



  const newPassword = document.querySelector("#password");
  const repeatPassword = document.querySelector("#repeat-password");

  console.log(newPassword, repeatPassword);
 /*  if(newPassword.value !== repeatPassword.value) {
    alert("Passwords do not match");
    newPassword.value = "";
    repeatPassword.value = "";
    return;
  } */
  const submitRegisterFormBtn = document.querySelector("#register-submit_btn");
  const submitRegisterFormBtnSpinner = document.querySelector("#register-submit_btn-spinner");
  const submitRegisterFormBtnText = document.querySelector("#register-submit_btn-text");




  submitRegisterFormBtnText.textContent = "loading...";
  submitRegisterFormBtnSpinner.classList.remove("d-none");
  submitRegisterFormBtnSpinner.classList.add("d-block");


  console.log("register");
}