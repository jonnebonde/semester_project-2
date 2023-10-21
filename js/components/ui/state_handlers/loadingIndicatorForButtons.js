export function renderLoadingSpinner(targetElement) {
  const buttonSpinner = document.createElement("span");
  buttonSpinner.classList.add("spinner-border", "spinner-border-sm");
  buttonSpinner.setAttribute("role", "status");
  buttonSpinner.setAttribute("aria-hidden", true);

  function show() {
    targetElement.textContent = "loading...";
    targetElement.appendChild(buttonSpinner);
  }

  function hide() {
    if (buttonSpinner.parentNode === targetElement) {
      targetElement.removeChild(buttonSpinner);
      targetElement.textContent = "Submit";
    }
  }

  return { show, hide };
}
