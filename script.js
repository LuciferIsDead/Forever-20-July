// =====================================
// ELEMENTS
// =====================================

const reliveBtn = document.getElementById("reliveBtn");
const homeScreen = document.getElementById("homeScreen");
const storyScreen = document.getElementById("storyScreen");

const chapterTitle = document.getElementById("chapterTitle");
const chapterText = document.getElementById("chapterText");
const nextStory = document.getElementById("nextStory");

// =====================================
// CHAPTER 1 CONTENT
// =====================================

chapterTitle.textContent = "The Night Everything Changed";

chapterText.innerHTML = `
It all began with one tiny Instagram Note...<br><br>

💭 <b>Ghumai.</b><br><br>

💙 <b>Ghuman.</b><br><br>

Neither of us knew that one little reply
would slowly become the most beautiful
story of our lives.
`;

// =====================================
// OPEN STORY
// =====================================

reliveBtn.addEventListener("click", () => {

    homeScreen.classList.add("hidden");

    storyScreen.classList.remove("hidden");
    storyScreen.style.display = "flex";

});

// =====================================
// NEXT BUTTON
// =====================================

nextStory.addEventListener("click", () => {

    chapterTitle.textContent = "Chapter 02";

    chapterText.innerHTML = `
The story continues...

In Version 1.2 we'll add:

• Instagram Group Chat
<br><br>
• Samuel
<br><br>
• Fake Couple
<br><br>
• First Feelings ❤️
`;

});
