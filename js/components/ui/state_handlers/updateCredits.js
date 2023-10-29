export function updateCredits(credits) {
  const creditsContainer = document.querySelector(".nav-credit");
  creditsContainer.textContent = credits + " kr";
}