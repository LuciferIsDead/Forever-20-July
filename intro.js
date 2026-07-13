// ===============================
// ELEMENTS
// ===============================

const clock = document.getElementById("clock");
const introDate = document.getElementById("introDate");

const ghumai = document.getElementById("ghumai");
const ghuman = document.getElementById("ghuman");

const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");

const introScreen = document.getElementById("introScreen");

// ===============================
// START TIME
// ===============================

let second = 50;

// ===============================
// CLOCK
// ===============================

const timer = setInterval(() => {

    second++;

    if (second > 59) {

        clearInterval(timer);

        clock.textContent = "12:00:00 AM";
        introDate.textContent = "20 July 2025";

        startSequence();

        return;

    }

    clock.textContent = `11:59:${String(second).padStart(2, "0")} PM`;

}, 1000);

// ===============================
// INTRO SEQUENCE
// ===============================

function startSequence() {

    setTimeout(() => {

        ghumai.classList.remove("hidden");
        ghumai.classList.add("show");

    }, 800);

    setTimeout(() => {

        ghuman.classList.remove("hidden");
        ghuman.classList.add("show");

    }, 2500);

    setTimeout(() => {

        line1.classList.add("visible");

    }, 4200);

    setTimeout(() => {

        line2.classList.add("visible");

    }, 5200);

    setTimeout(() => {

        line3.classList.add("visible");

    }, 6200);

    // Fade out intro
setTimeout(() => {

    introScreen.style.transition = "opacity 1.5s ease";

    introScreen.style.opacity = "0";

    setTimeout(() => {

        introScreen.style.display = "none";

    }, 1500);

}, 9000);
