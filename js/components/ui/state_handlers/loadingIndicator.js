/**
 * Renders a loading spinner inside a target element and returns show and hide functions to control its visibility.
 * @param {HTMLElement} targetElement - The element where the spinner will be appended.
 * @returns {{show: Function, hide: Function}} - An object containing show and hide functions to control the spinner visibility.
 */
export function renderLoadingSpinner(targetElement) {
  const buttonSpinner = document.createElement("span");
  buttonSpinner.classList.add("spinner-border", "spinner-border-sm");
  buttonSpinner.setAttribute("role", "status");
  buttonSpinner.setAttribute("aria-hidden", true);

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
