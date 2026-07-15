document.addEventListener('DOMContentLoaded',()=>{

const home=document.getElementById('homeScreen'),
story=document.getElementById('storyScreen'),
relive=document.getElementById('reliveBtn'),
next=document.getElementById('nextStory'),
back=document.getElementById('backStory'),
card=document.getElementById('storyCard');

const date=document.getElementById('chapterDate'),
num=document.getElementById('chapterNumber'),
icon=document.getElementById('chapterIcon'),
title=document.getElementById('chapterTitle'),
subtitle=document.getElementById('chapterSubtitle'),
text=document.getElementById('chapterText'),
visual=document.getElementById('chapterVisual'),
progress=document.getElementById('progressBar'),
hint=document.getElementById('storyHint');

const chapters=[

{date:'20 July 2025',icon:'🌙',title:'The Night Everything Changed',subtitle:'The beginning of everything.',text:`<p>It all began with one tiny Instagram Note...</p><div class="chat"><div class="bubble them">💭 Ghumai.</div><div class="bubble me">💙 Ghuman.</div></div><p>Neither of us knew that one little reply would slowly become our favourite story.</p>`,visual:'<div class="visual-card">🌌 One reply. One night. A story that was only beginning.</div>'},

{date:'July 2025',icon:'💬',title:'Instagram Group Chat',subtitle:'Somewhere between a message and a late-night conversation.',text:`<p>Then one day, you seemed sad. You told me that Samuel had been rude to you.</p><p>I tried to comfort you, and somehow we kept talking late into the night.</p><p>That group chat became the place where our friendship really started to grow.</p>`,visual:'<div class="chat"><div class="bubble them">I am feeling bad today...</div><div class="bubble me">I am here. Tell me what happened.</div><div class="bubble them">You stayed and listened.</div></div>'},

{date:'July–August 2025',icon:'🎭',title:'Fake Couple',subtitle:'A joke that started feeling a little too real.',text:`<p>The group chat admin was being playful and made every girl his girlfriend.</p><p>So we decided to act like we were a couple too. Just for fun.</p><p>In the group chat, we played the part perfectly.</p>`,visual:'<div class="visual-card"><div class="chat"><div class="bubble me">Bro, she is my girlfriend. 😌</div><div class="bubble them">Oh really? 👀</div></div><p style="text-align:center">Everyone thought it was just a joke.</p></div>'},

{date:'The months that followed',icon:'❤️',title:'Real Feelings',subtitle:'Some feelings arrive quietly. Then suddenly, they are impossible to ignore.',text:`<p>Over time, our friendship became something deeper. I kept being there for you, especially on the days you needed someone.</p><p>Then came the argument that changed everything. You told me I might not love you anymore if I knew your real identity.</p><p>You finally told me the truth about yourself. Then you deactivated Instagram.</p><p>I wasn't angry. I was terrified that I had lost you. I tried everything I could think of to find out if you were okay.</p><div class="quote">Your identity changed. My feelings didn't.</div><p>That was when you realized my feelings were real. And I realized how much losing you scared me.</p>`,visual:'<div class="visual-card">📱 <b>Account unavailable.</b><br><br>But the connection was still there.</div>'},

{date:'1 October 2025',icon:'👀',title:'The First Glimpse',subtitle:'For one of us, it was an ordinary day. For the other, it was the first glimpse.',text:`<p>You came from Pabna to Dhaka with your family.</p><p>I saw you from a tong near your father's house as you passed by in a rickshaw.</p><p>You didn't see me.</p><div class="quote">For you, it was just another day. For me, it was the first time I saw the person who would change my life.</div>`,visual:'<div class="visual-card">🚲 → 👀<br><small>A glimpse. A moment. A memory that stayed.</small></div>'},

{date:'2 October 2025',icon:'🎡',title:'Toggy — First Meeting',subtitle:'Finally close enough to meet. Still too nervous to hold her hand.',text:`<p>After shopping with your family in Bashundhara, you went to Toggy Fun World with your sister.</p><p>I joined you there. I was so nervous that I couldn't even hold your hand.</p><p>We enjoyed a VR roller coaster ride together. I didn't have enough money for more rides, but even that one ride became unforgettable.</p><p>Then it was time for you to leave with your family.</p>`,visual:'<div class="visual-card">🎢 <b>First ride together.</b><br><br>Some beginnings are quiet. They still become unforgettable.</div>'},

{date:'6 November 2025',icon:'🌹',title:'White Rose',subtitle:'A small flower carrying a feeling too big for words.',text:`<p>You and your family visited Wari. I went there too.</p><p>I saw you from a distance as you visited Aarong and Shwapno.</p><p>Then, inside Shwapno, I finally got a few minutes with you.</p><p>And I gave you the white rose you had always wanted.</p>`,visual:'<div class="visual-card"><span class="rose">🌹</span><p>Some gifts are small. Some memories are not.</p></div>'},

{date:'7 November 2025',icon:'💍',title:'Engagement Band',subtitle:'A secret plan. A tiny exchange. A symbol that became ours.',text:`<p>The day before, I had asked for your hair band to wear on my hand as a bracelet. You forgot it and felt guilty.</p><p>The next day, your mother was asleep. You had the band, but there was no easy way to give it to me.</p><p>So I came up with a plan: I would buy snacks and come like a food delivery man.</p><p>You came downstairs, pretended to pay for the food, and placed the band into my hand. The guard was watching, but never suspected.</p><div class="quote">And that is how I got my Engagement Band.</div>`,visual:'<div class="visual-card"><span class="band">💍</span><p>Not just a band. <b>Our Engagement Band.</b></p></div>'},

{date:'22 January 2026',icon:'🚆',title:'Rajshahi',subtitle:'A journey made only to be near you.',text:`<p>I couldn't find a train seat, so I bought a standing ticket and left Dhaka at 11 PM.</p><p>I travelled alone through the night, with almost no phone charge and no sleep. I reached Rajshahi around 4–5 AM, found a charging port, and waited.</p><p>At 9 AM I went to Safina Park. When your school picnic finally arrived, I stood near the gate waiting to see you.</p><p>You were with your friends and teachers. We were close, but still couldn't properly meet.</p><p>I had brought Churi because you once sent me a reel saying, <i>"দেখা হলে চুরি দিয়ো."</i> I tried again and again to give them to you.</p><p>At T Badh, you went across the Padma by boat. I stayed behind because I was afraid I might miss you when you returned.</p><p>One last attempt failed. Then the bus left.</p><div class="quote">I wasn't heartbroken because I had travelled so far. I was heartbroken because I couldn't give you what I had carried all that way.</div><p>I kept the Churi. My love wasn't finished.</p><p>Then I travelled home by bus, reaching home around 6 AM.</p>`,visual:'<div class="journey"><span>🌃</span><div class="line"></div><span>🚆</span><div class="line"></div><span>🌅</span><div class="line"></div><span>🚗</span><div class="line"></div><span>❤️</span></div>'},

{date:'After January 2026',icon:'🪟',title:'Window Kisses',subtitle:'Sometimes distance was only a road between us.',text:`<p>There were times you came to Dhaka, but because of circumstances and pressure, we still couldn't properly meet.</p><p>Still, whenever you came, I went at least once to your father's house.</p><p>I stood on the road that could be seen from your window. We talked through Instagram, even though we were only a short distance apart.</p><p>And then I blew kisses toward your window.</p><div class="quote">We were separated by walls and distance, but never by our hearts.</div>`,visual:'<div class="window-scene"><div class="window-frame"></div><div class="window-person">🧍</div><div class="road-person">🧍‍♂️</div><div class="kiss">😘</div></div>'},

{date:'21 June 2026',icon:'🎡',title:'Toggy — Finally Together',subtitle:'After all the waiting, we finally got a day that felt like ours.',text:`<p>You came to Dhaka on your birthday. I had a Physics final that day, so I rushed to meet you after my exam.</p><p>We went to Toggy Fun World.</p><p>Laser Tag. Haunted House. Laughter. And finally, the kind of time together we had waited so long for.</p><p>And somewhere in that day, I kissed your cheek.</p><div class="quote">The first time at Toggy, I was too nervous to hold your hand. This time, we had a whole day together.</div>`,visual:'<div class="visual-card">🎯 Laser Tag &nbsp; • &nbsp; 👻 Haunted House &nbsp; • &nbsp; ❤️ A day together</div>'},

{date:'4:15 AM',icon:'🌅',title:'The Longest Call',subtitle:'The night that turned into morning.',text:`<p>We stayed on a late-night call for longer than any call before.</p><p>One conversation became another. The night kept moving, and neither of us wanted it to end.</p><p>Then suddenly, it was <b>4:15 AM.</b></p><div class="quote">That day, I had the best sleep of my life.</div>`,visual:'<div class="sunrise"><div class="sun"></div></div>'},

{date:'Forever',icon:'♾️',title:'Our Future',subtitle:'The story is still being written.',text:`<p>There have been distances, missed chances, long journeys, late-night calls, secret gifts, window kisses, and memories we will never forget.</p><p>But every chapter brought us here.</p><p>And the most beautiful thing about our story is that this isn't the end.</p><div class="quote">The best chapters are still waiting to be written.</div>`,visual:'<div class="visual-card"><div class="future">✦ ✧ ✦</div><p>Happy Anniversary, Tayeba ❤️</p><p>Thank you for making every distance worth crossing.</p><p><b>— Sumon</b></p></div>'}

];

let current=0;

function render(i,dir=1){

current=Math.max(0,Math.min(chapters.length-1,i));

const c=chapters[current];

card.style.animation='none';

void card.offsetWidth;

card.style.animation=dir>0
?'cardIn .45s ease both'
:'cardBack .45s ease both';

date.textContent=c.date;

num.textContent=
`CHAPTER ${String(current+1).padStart(2,'0')} / ${chapters.length}`;

icon.textContent=c.icon;

title.textContent=c.title;

subtitle.textContent=c.subtitle;

text.innerHTML=c.text;

visual.innerHTML=c.visual;


/* =====================================
   21 JUNE TOGGY MEMORY PHOTO
===================================== */

if(c.date==='21 June 2026'){

visual.innerHTML+=`

<div class="memoryPhotoWrap">

<img
class="memoryPhoto"
src="assets/images/toggy-21-june.jpg"
alt="A memory from our 21 June Toggy meetup">

<p class="photoCaption">
One of the memories from the day we finally got to spend time together.
</p>

</div>

`;

}


progress.style.width=
`${((current+1)/chapters.length)*100}%`;

back.disabled=current===0;

next.textContent=
current===chapters.length-1
?'Finish Our Story ❤️'
:'Continue ❤️';

hint.textContent=
current===chapters.length-1
?'One last moment...'
:'Your story, one memory at a time.';

story.querySelector('.storyCard').scrollTop=0;

}


function showFinale(){

story.classList.add('finale-mode');

const card=document.getElementById('storyCard');

card.innerHTML=`

<div class="finale-icon">❤️</div>

<div class="dateBadge">20 JULY 2026</div>

<div class="chapterNumber">THE STORY CONTINUES</div>

<h2>Not The End</h2>

<p class="chapterSubtitle">
Because our story is still being written.
</p>

<div class="finale-message">

<p>13 chapters.</p>

<p>Countless memories.</p>

<p>One story that is still ours.</p>

</div>

<div class="finale-stars">
✦ &nbsp; ✧ &nbsp; ✦
</div>

<p class="finale-note">
Thank you for every memory, every smile, every late-night conversation, and every moment that brought us here.
</p>

<div class="quote">
The best chapter is the one we're living now.
</div>

<p class="finale-sign">
Happy Anniversary, Tayeba ❤️<br>
<span>— Sumon</span>
</p>

<button id="finishBtn" class="finaleButton">
Stay Here ❤️
</button>

`;

document.getElementById('finishBtn').addEventListener('click',()=>{

card.classList.remove('finale-pulse');

void card.offsetWidth;

card.classList.add('finale-pulse');

});

back.disabled=false;

hint.textContent=
'Our story continues beyond this page.';

}


relive.addEventListener('click',()=>{

home.classList.add('hidden');

story.classList.remove('hidden');

story.classList.remove('finale-mode');

render(0);

});


next.addEventListener('click',()=>{

if(current===chapters.length-1){

showFinale();

return;

}

render(current+1,1);

});


back.addEventListener('click',()=>{

if(story.classList.contains('finale-mode')){

story.classList.remove('finale-mode');

render(chapters.length-1,-1);

return;

}

if(current>0){

render(current-1,-1);

}

});


document.addEventListener('keydown',e=>{

if(story.classList.contains('hidden'))return;

if(e.key==='ArrowRight')next.click();

if(e.key==='ArrowLeft')back.click();

});

});
