/* 🔐 Password */
function unlock() {
  if (document.getElementById("password").value === "2002") {
    document.getElementById("lockScreen").style.display = "none";
    createHearts();
  } else {
    alert("Wrong password 😜");
  }
}

/* 💌 Typing text */
const text =
  "Baby, you are my peace, my happiness, my forever. Every heartbeat says your name ❤️";
let i = 0;

function typeText() {
  if (i < text.length) {
    document.getElementById("typingText").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeText, 40);
  }
}
typeText();

/* ❤️ Floating hearts */
function createHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
  }, 400);
}

/* 🎵 Music */
let playing = false;
function toggleMusic() {
  const music = document.getElementById("bgMusic");
  playing ? music.pause() : music.play();
  playing = !playing;
}

/* 🎁 Countdown */
const valentine = new Date("Feb 14, 2026 00:00:00").getTime();
setInterval(() => {
  const now = new Date().getTime();
  const diff = valentine - now;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  document.getElementById("countdown").innerText =
    days > 0 ? `${days} days left 💖` : "Happy Valentine’s Day Baby ❤️";
}, 1000);

/* 😈 NO button */
const noBtn = document.getElementById("noBtn");
const noZone = document.getElementById("noZone");
const popup = document.getElementById("surePopup");
let noCount = 0;

function moveNo() {
  noCount++;

  const maxX = noZone.clientWidth - noBtn.offsetWidth;
  const maxY = noZone.clientHeight - noBtn.offsetHeight;

  noBtn.style.left = Math.random() * maxX + "px";
  noBtn.style.top = Math.random() * maxY + "px";

  if (noCount === 1) noBtn.innerText = "NO 😟";
  else if (noCount === 2) noBtn.innerText = "NO 😢";
  else if (noCount === 3) {
    noBtn.innerText = "NO 😭";
    popup.classList.remove("hidden");
    popup.classList.add("flex");
  } else noBtn.innerText = "STOP 😭";
}

function closePopup() {
  popup.classList.add("hidden");
  popup.classList.remove("flex");
}

/* 💖 YES → GO TO NEW PAGE */
function sayYes() {
  window.location.href = "yes.html";
}
