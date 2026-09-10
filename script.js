const CORRECT_PASSWORD = "september 11";

const lockScreen = document.getElementById("lockScreen");
const birthdayPage = document.getElementById("birthdayPage");
const passwordForm = document.getElementById("passwordForm");
const passwordInput = document.getElementById("password");
const errorMessage = document.getElementById("errorMessage");
const confettiButton = document.getElementById("confettiButton");

passwordForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const enteredPassword = passwordInput.value.trim().toLowerCase();

    if (enteredPassword === CORRECT_PASSWORD || enteredPassword === "september11") {
        lockScreen.classList.add("hidden");
        birthdayPage.classList.remove("hidden");

        launchConfetti(140);
        window.scrollTo(0, 0);
    } else {
        errorMessage.textContent = "Oops! Wrong code. Try again 💗";
        passwordInput.value = "";
        passwordInput.focus();
    }
});

function launchConfetti(amount = 100) {
    const pieces = ["💗", "✨", "🎉", "💕", "⭐", "🎀"];

    for (let i = 0; i < amount; i++) {
        const confetti = document.createElement("div");
        confetti.className = "confetti";

        confetti.textContent = pieces[Math.floor(Math.random() * pieces.length)];

        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.fontSize = (12 + Math.random() * 18) + "px";
        confetti.style.animationDuration = (3 + Math.random() * 4) + "s";
        confetti.style.animationDelay = Math.random() * 1.5 + "s";

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 8000);
    }
}

confettiButton.addEventListener("click", function () {
    launchConfetti(180);
});

/* Small text animation */
const words = [
    "favorite person",
    "best friend",
    "beautiful girl",
    "happiness"
];

let wordIndex = 0;

setInterval(() => {
    wordIndex = (wordIndex + 1) % words.length;
    document.getElementById("changingWord").textContent = words[wordIndex];
}, 2500);
