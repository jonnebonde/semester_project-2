export default function changeInputStatus(target, status) {



  if (status === "error") {
   
    target.classList.add("error-border");
    target.classList.remove("success-border");
  } else {

    target.classList.add("success-border");
    target.classList.remove("error-border");
  }
}