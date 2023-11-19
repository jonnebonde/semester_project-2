export function renderRegisterToast() {
  const toastContainer = document.createElement("div");
  toastContainer.classList.add("toast-container", "position-fixed", "bottom-50", "end-0", "p-3");

  const liveToast = document.createElement("div");
  liveToast.id = "welcomeToast";
  liveToast.classList.add("toast");
  liveToast.setAttribute("role", "status");
  liveToast.setAttribute("aria-live", "polite");
  liveToast.setAttribute("aria-atomic", "true");
  liveToast.setAttribute("data-bs-delay", "9999999999");

  const toastHeader = document.createElement("div");
  toastHeader.classList.add("toast-header");
  toastHeader.setAttribute("data-bs-theme", "dark")

  const toastImage = document.createElement("img");
  toastImage.src = "/assets/img/ah_hero_img.jpg";
  toastImage.width = "20";
  toastImage.height = "20";
  toastImage.classList.add("rounded", "me-2");
  toastImage.alt = "...";

  toastHeader.appendChild(toastImage);

  const toastTitle = document.createElement("strong");
  toastTitle.classList.add("me-auto");
  toastTitle.textContent = "Welcome to Auction House";

  toastHeader.appendChild(toastTitle);

  const toastTime = document.createElement("small");
  toastTime.textContent = "Now";

  toastHeader.appendChild(toastTime);

  const closeButton = document.createElement("button");
  closeButton.type = "button";
  closeButton.classList.add("btn-close");
  closeButton.setAttribute("data-bs-dismiss", "toast");
  closeButton.setAttribute("aria-label", "Close");
  closeButton.style.color = "white";

  toastHeader.appendChild(closeButton);

  const toastBody = document.createElement("div");
  toastBody.classList.add("toast-body");
  toastBody.innerHTML = `<p>Register now and get 1000 credits</p>
  <a href="login-and-register.html?register=true" class="navlink link-offset-1 link-underline-opacity-0 link-underline-opacity-100-hover link-dark primary-link" >Register<a/>`;

  liveToast.appendChild(toastHeader);
  liveToast.appendChild(toastBody);

  toastContainer.appendChild(liveToast);

  return toastContainer;
}
