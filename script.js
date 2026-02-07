const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const questionBox = document.getElementById("questionBox");
const surprise = document.getElementById("surprise");

let noClickCount = 0;

const noTexts = [
  "Hmm… 🤔",
  "Wait… 😳",
  "Okay yes 💘"
];

noBtn.addEventListener("click", () => {
  if (noClickCount < noTexts.length) {
    noBtn.textContent = noTexts[noClickCount];
    noBtn.style.transform = "scale(0.9)";
    setTimeout(() => {
      noBtn.style.transform = "scale(1)";
    }, 150);
    noClickCount++;
  } else {
    // Final betrayal 😈
    yesAction();
  }
});

yesBtn.addEventListener("click", yesAction);

function yesAction() {
  questionBox.classList.add("hidden");
  surprise.classList.remove("hidden");

  // romantic hearts 💕
  for (let i = 0; i < 20; i++) {
    createHeart();
  }
}

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "❤️";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 3 + Math.random() * 2 + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}
