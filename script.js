// =====================================
// ELEMENTS
// =====================================

const reliveBtn = document.getElementById("reliveBtn");

// CHANGE THIS NAME
const home = document.getElementById("homeScreen");

const storyScreen = document.getElementById("storyScreen");

const chapterTitle = document.getElementById("chapterTitle");
const chapterText = document.getElementById("chapterText");
const nextStory = document.getElementById("nextStory");

// =====================================
// CHAPTER 1
// =====================================

chapterTitle.textContent = "The Night Everything Changed";

chapterText.innerHTML = `
It all began with one tiny Instagram Note...

<br><br>

💭 <b>Ghumai.</b>

<br><br>

💙 <b>Ghuman.</b>

<br><br>

Neither of us knew that one little reply
would slowly become the most beautiful
story of our lives.
`;

// =====================================
// OPEN STORY
// =====================================

reliveBtn.onclick = function () {

    home.style.display = "none";
    storyScreen.style.display = "flex";

};

// =====================================
// NEXT BUTTON
// =====================================

nextStory.onclick = function () {

    chapterTitle.textContent = "Chapter 02";

    chapterText.innerHTML = `
The story continues...

<br><br>

Version 1.2 will include:

<br><br>

• Instagram Group Chat
<br>
• Samuel
<br>
• Fake Couple
<br>
• First Feelings ❤️
`;

};
