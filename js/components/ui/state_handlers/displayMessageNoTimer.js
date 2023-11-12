export default function displayMessageNoTimer(type, message, target) {
  const messageElement = document.createElement("div");
  messageElement.classList.add("message", type);
  messageElement.textContent = message;

  console.log(target)

  target.appendChild(messageElement);
}
