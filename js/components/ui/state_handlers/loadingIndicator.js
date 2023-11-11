export function renderLoadingSpinner(targetElement) {
  const buttonSpinner = document.createElement("span");
  buttonSpinner.classList.add("spinner-border", "spinner-border-sm");
  buttonSpinner.setAttribute("role", "status");
  buttonSpinner.setAttribute("aria-hidden", true);

  console.log(targetElement)

  function show() {
    targetElement.appendChild(buttonSpinner);
  }

  function hide() {
    if (buttonSpinner.parentNode === targetElement) {
      targetElement.removeChild(buttonSpinner);
    }
  }

  return {
    show,
    hide,
  };
}
