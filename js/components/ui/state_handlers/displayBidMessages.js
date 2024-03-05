/**
 * Sets the bid message on the target element.
 * @param {string} message - The message to display.
 * @param {HTMLElement} target - The target element to display the message on.
 * @returns {HTMLElement} The target element with the updated message.
 */
export function setBidMessage(message, target) {
  target.textContent = message;
  target.style.color = "red";
  target.style.fontWeight = "bold";
  return target;
}
