// Background music
const music = document.getElementById("bgMusic");
document.getElementById("enterBtn").addEventListener("click", () => {
  music.play();
  window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
});

// Name typing
const name = "Tolu";
const nameText = document.getElementById("nameText");
let i = 0;

function typeName() {
  if (i < name.length) {
    nameText.textContent += name[i];
    i++;
    setTimeout(typeName, 300);
  }
}

window.addEventListener("scroll", () => {
  if (nameText.textContent === "" && nameText.getBoundingClientRect().top < window.innerHeight) {
    typeName();
  }
});

// Unlock letter
document.getElementById("unlockBtn").addEventListener("click", () => {
  document.querySelector(".letter-section").scrollIntoView({ behavior: "smooth" });
});

// Dev Easter Egg
document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.key === "l") {
    console.log("If you're reading this, I love you ❤️");
    alert("You found it. I love you.");
  }
});
