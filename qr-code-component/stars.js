// Generate stars
const starsContainer = document.getElementById("stars");
const starCount = 100;

for (let i = 0; i < starCount; i++) {
  const star = document.createElement("div");
  star.className = "star";

  // Random size between 1-3px
  const size = Math.random() * 5;
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;

  // Random position
  star.style.left = `${Math.random() * 100}%`;
  star.style.top = `${Math.random() * 100}%`;

  // Random opacity
  star.style.opacity = `${Math.random()}`;

  starsContainer.appendChild(star);
}
