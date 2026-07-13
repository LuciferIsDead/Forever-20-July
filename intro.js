// ===============================
// ELEMENTS
// ===============================

const clock = document.getElementById("clock");
const introDate = document.getElementById("introDate");

const ghumai = document.getElementById("ghumai");
const ghuman = document.getElementById("ghuman");
const introSentence = document.getElementById("introSentence");

const introScreen = document.getElementById("introScreen");
const homeScreen = document.getElementById("homeScreen");

// ===============================
// COUNTDOWN
// ===============================

let second = 50;

clock.textContent = `11:59:${String(second).padStart(2,"0")} PM`;

const timer = setInterval(() => {

    second++;

    if(second <= 59){

        clock.textContent =
        `11:59:${String(second).padStart(2,"0")} PM`;

    }else{

        clearInterval(timer);

        midnight();

    }

},1000);

// ===============================
// MIDNIGHT
// ===============================

function midnight(){

    clock.textContent = "12:00:00 AM";

    introDate.textContent = "20 July 2025";

    // Ghumai
    setTimeout(() => {

        ghumai.classList.remove("hidden");
        ghumai.classList.add("show");

    },1000);

    // Ghuman
    setTimeout(() => {

        ghuman.classList.remove("hidden");
        ghuman.classList.add("show");

    },3000);

    // Intro Text
    setTimeout(() => {

    document.getElementById("line1").classList.add("visible");

},5000);

setTimeout(() => {

    document.getElementById("line2").classList.add("visible");

},6000);

setTimeout(() => {

    document.getElementById("line3").classList.add("visible");

},7000);

    // Home Screen
    setTimeout(() => {

        introScreen.classList.add("fadeOut");

        setTimeout(() => {

            introScreen.style.display = "none";

            homeScreen.style.display = "flex";

            homeScreen.classList.add("show");

        },900);

    },9000);

}
