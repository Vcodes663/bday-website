const screens = {
  anticipation: document.getElementById("anticipation"),
  curiosity: document.getElementById("curiosity"),
  surprise: document.getElementById("surprise"),
  joy: document.getElementById("joy"),
  ending: document.getElementById("ending"),
};

function show(screenName) {
  Object.values(screens).forEach(s => s.classList.remove("active"));
  screens[screenName].classList.add("active");
}

/* ANTICIPATION → CURIOSITY (COUNTDOWN) */
let time = 10;
const countdownEl = document.getElementById("countdown");

const timer = setInterval(() => {
  time--;
  countdownEl.textContent = time;

  if (time <= 0) {
    clearInterval(timer);
    show("curiosity");
  }
}, 1000);

/* CURIOSITY → SURPRISE */
document.getElementById("curiosity-btn").addEventListener("click", () => {
  show("surprise");
  fireConfetti();

  // move to JOY after a short pause
  setTimeout(() => {
    show("joy");
  }, 3500);
});


/* JOY → ENDING */
document.getElementById("joy-btn").addEventListener("click", () => {
  show("ending");
});

/* CONFETTI */
function fireConfetti() {
  confetti({
    particleCount: 350,
    spread: 85,
    origin: { y: 0.6 },
    colors: ["#ff4d6d", "#d16ba5", "#b983ff", "#ffffff","#9494fd","#ff3b5c","#ffffff","#FFFF00","#87CEEB", "#0000FF","#00de00ff"],
  });
}

// Spotify Button
document.getElementById("spotify-btn").addEventListener("click", () => {
  window.open("https://open.spotify.com/playlist/0gFRvYoV9DwO6OLdnrr8Oz?si=c22cf1a4a84a45a5&pt=dca2252ea49eab487ca835310d354acb", "_blank");
});
