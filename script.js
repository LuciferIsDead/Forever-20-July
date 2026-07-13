const reliveBtn = document.getElementById("reliveBtn");
const homeScreen = document.getElementById("homeScreen");
const storyScreen = document.getElementById("storyScreen");

alert("script.js loaded");

reliveBtn.addEventListener("click", () => {
    alert("Button clicked");

    homeScreen.style.display = "none";
    storyScreen.style.display = "flex";
});
