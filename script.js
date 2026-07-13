// 20 July Project v1.1
document.addEventListener("DOMContentLoaded", () => {

const reliveBtn = document.getElementById("reliveBtn");
const home = document.getElementById("homeScreen");
const storyScreen = document.getElementById("storyScreen");
const chapterTitle = document.getElementById("chapterTitle");
const chapterText = document.getElementById("chapterText");
const nextStory = document.getElementById("nextStory");
const closeMemory = document.getElementById("closeMemory");

if (reliveBtn) {
    reliveBtn.addEventListener("click", () => {
        home.classList.add("hidden");
        storyScreen.classList.remove("hidden");
        storyScreen.classList.add("show");
    });
}

if (nextStory) {
    nextStory.addEventListener("click", () => {
        chapterTitle.textContent = "Chapter 02";
        chapterText.innerHTML = `
        The next chapter of our journey is waiting... ❤️
        <br><br>
        More memories will be added in Version 1.2.
        `;
        nextStory.textContent = "Coming Soon ✨";
        nextStory.disabled = true;
    });
}

if (closeMemory) {
    closeMemory.addEventListener("click",()=>{
        document.getElementById("memoryOverlay")?.classList.add("hidden");
    });
}

});
