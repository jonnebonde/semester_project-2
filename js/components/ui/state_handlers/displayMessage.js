export default function displayMessage(type, message, target) {
  const messageContainer = document.querySelector(target);

  const messageElement = document.createElement("div");

  messageElement.classList.add("message", type);
  messageElement.textContent = message;

  messageContainer.appendChild(messageElement);

  setTimeout(function () {
    messageElement.remove();
  }, 3000);
}
