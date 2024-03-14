/**
 * Displays a message in a specified target element with a specified type.
 * @param {string} type - The type of the message (e.g. "error", "success").
 * @param {string} message - The message to be displayed.
 * @param {string} target - The selector for the target element where the message will be displayed.
 * @returns {void}
 */
export default function displayMessage(type, message, target) {
  const messageContainer = document.querySelector(target);

  if (
    messageContainer.classList.contains("error") ||
    messageContainer.classList.contains("success")
  ) {
    messageContainer.classList.remove("error", "success");
  }

  messageContainer.textContent = message;
  messageContainer.classList.add(type);
}
