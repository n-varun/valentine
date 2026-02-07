const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const questionBox = document.getElementById("questionBox");
const surprise = document.getElementById("surprise");

function moveNoButton() {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

// For phones (touch)
noBtn.addEventListener("touchstart", moveNoButton);

// For laptops (mouse)
noBtn.addEventListener("mouseover", moveNoButton);

yesBtn.addEventListener("click", () => {
  questionBox.classList.add("hidden");
  surprise.classList.remove("hidden");
});
