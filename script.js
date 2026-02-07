const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const questionBox = document.getElementById("questionBox");
const surprise = document.getElementById("surprise");

function moveNoButton() {
  const padding = 20;

  const maxX = window.innerWidth - noBtn.offsetWidth - padding;
  const maxY = window.innerHeight - noBtn.offsetHeight - padding;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;

  // tiny playful scale effect
  noBtn.style.transform = "scale(0.9)";
  setTimeout(() => {
    noBtn.style.transform = "scale(1)";
  }, 150);
}

// Mobile
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault(); // prevents accidental tap
  moveNoButton();
});

// Desktop
noBtn.addEventListener("mouseover", moveNoButton);

yesBtn.addEventListener("click", () => {
  questionBox.classList.add("hidden");
  surprise.classList.remove("hidden");
});
