/**
 * Displays a message for a specified amount of time and then removes it from the DOM.
 * @param {string} type - The type of message (e.g. "success", "error", "warning").
 * @param {string} message - The message to display.
 * @param {string} target - The CSS selector for the message container element.
 * @returns {void}
 */
export default function displayMessageTimer(type, message, target) {
  const messageContainer = document.querySelector(target);

  // Check if message element already exists in the container - fixed this with help from copilot.
  const existingMessageElement = messageContainer.querySelector(".message");
  if (existingMessageElement) {
    existingMessageElement.classList.add(type);
    existingMessageElement.textContent = message;
    return;
  }

  const messageElement = document.createElement("div");

  messageElement.classList.add("message", type);
  messageElement.textContent = message;

  messageContainer.appendChild(messageElement);

  setTimeout(() => {
    messageContainer.removeChild(messageElement);
  }, 6000);
}
