document.addEventListener("DOMContentLoaded", () => {
    // greeting text changer
const msgs = [
    "hey",
    "what's up",
    "greetings",
    "hello",
    "hi",
    "welcome",
    "howdy"
];

  const messageEl = document.getElementById("hey");
  let currentText = "";
  let currentIndex = 0;

  function typeForward(text, i = 0) {
    if (i <= text.length) {
      messageEl.textContent = text.slice(0, i);
      setTimeout(() => typeForward(text, i + 1), 100);
    } else {
      setTimeout(() => typeBackward(text.length), 2500);
    }
  }

  function typeBackward(i) {
    if (i >= 0) {
      messageEl.textContent = messageEl.textContent.slice(0, i);
      setTimeout(() => typeBackward(i - 1), 30);
    } else {
      showNextMessage();
    }
  }

  function showNextMessage() {
    const nextMessage = msgs[Math.floor(Math.random() * msgs.length)];
    if (nextMessage === currentText) return showNextMessage();
    currentText = nextMessage;
    typeForward(nextMessage);
  }

  showNextMessage();
// introduction slidey

const slideIns = document.querySelectorAll(".slide-in");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 1,
    }
  );

  slideIns.forEach(el => observer.observe(el));
});