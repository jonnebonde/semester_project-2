export function setBidMessage(message, target) {
  target.textContent = message;
  target.style.color = "red";
  target.style.fontWeight = "bold";
  return target;
}