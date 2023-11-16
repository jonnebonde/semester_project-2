export default function displayMessage(type, message, target) {
  const messageContainer = document.querySelector(target);

  if (messageContainer.classList.contains("error") || messageContainer.classList.contains("success")) {
    messageContainer.classList.remove("error", "success");
  }

  messageContainer.textContent = message;
  messageContainer.classList.add(type);
}
