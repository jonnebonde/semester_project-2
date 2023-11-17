/**
 * Changes the status of an input element by adding or removing CSS classes.
 * @param {HTMLElement} target - The input element to change the status of.
 * @param {string} status - The status to set. Can be "error" or any other string for success status.
 */
export default function changeInputStatus(target, status) {
  if (status === "error") {
    target.classList.add("error-border");
    target.classList.remove("success-border");
  } else {
    target.classList.add("success-border");
    target.classList.remove("error-border");
  }
}
