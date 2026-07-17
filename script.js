document.addEventListener('DOMContentLoaded',()=>{
const home=document.getElementById('homeScreen'),story=document.getElementById('storyScreen'),relive=document.getElementById('reliveBtn'),next=document.getElementById('nextStory'),back=document.getElementById('backStory'),card=document.getElementById('storyCard');
const date=document.getElementById('chapterDate'),num=document.getElementById('chapterNumber'),icon=document.getElementById('chapterIcon'),title=document.getElementById('chapterTitle'),subtitle=document.getElementById('chapterSubtitle'),text=document.getElementById('chapterText'),visual=document.getElementById('chapterVisual'),progress=document.getElementById('progressBar'),hint=document.getElementById('storyHint');
const chapters=[
{date:'20 July 2025',icon:'🌙',title:'The Night Everything Changed',subtitle:'The beginning of everything.',text:`<p>It all began with one tiny Instagram Note...</p><div class="chat"><div class="bubble them">💭 Ghumai.</div><div class="bubble me">💙 Ghuman.</div></div><p>Neither of us knew that one little reply would slowly become our favourite story.</p>`,visual:'<div class="visual-card">🌌 One reply. One night. A story that was only beginning.</div>'},
{date:'July 2025',icon:'💬',title:'Instagram Group Chat',subtitle:'Somewhere between a message and a late-night conversation.',text:`<p>Then one day, you seemed sad. You told me that Samuel had been rude to you.</p><p>I tried to comfort you, and somehow we kept talking late into the night.</p><p>That group chat became the place where our friendship really started to grow.</p>`,visual:'<div class="interactive-chat" data-interactive="chat"><div class="bubble them">I am feeling bad today...</div><div class="bubble me">I am here. Tell me what happened.</div><button class="reveal-btn" data-reveal="chat">Tap to continue the conversation ✨</button><div class="hidden-reveal" id="reveal-chat"><div class="bubble them">You stayed and listened.</div><p class="micro-note">And somehow, we kept talking late into the night.</p></div></div>'},
{date:'July–August 2025',icon:'🎭',title:'Fake Couple',subtitle:'A joke that started feeling a little too real.',text:`<p>The group chat admin was being playful and made every girl his girlfriend.</p><p>So we decided to act like we were a couple too. Just for fun.</p><p>In the group chat, we played the part perfectly.</p>`,visual:'<div class="interactive-card fake-couple"><div class="chat"><div class="bubble me">Bro, she is my girlfriend. 😌</div><div class="bubble them">Oh really? 👀</div></div><button class="reveal-btn" data-reveal="couple">Tap the message ✨</button><div class="hidden-reveal" id="reveal-couple"><div class="reaction-row">👀 &nbsp; 😂 &nbsp; 👀 &nbsp; ❤️</div><p>Everyone thought it was just a joke.</p><p class="micro-note">At least, that's how it started.</p></div></div>'},
{date:'The months that followed',icon:'❤️',title:'Real Feelings',subtitle:'Some feelings arrive quietly. Then suddenly, they are impossible to ignore.',text:`<p>Over time, our friendship became something deeper. I kept being there for you, especially on the days you needed someone.</p><p>Then came the argument that changed everything. You told me I might not love you anymore if I knew your real identity.</p><p>You finally told me the truth about yourself. Then you deactivated Instagram.</p><p>I wasn't angry. I was terrified that I had lost you. I tried everything I could think of to find out if you were okay.</p><div class="quote">Your identity changed. My feelings didn't.</div><p>That was when you realized my feelings were real. And I realized how much losing you scared me.</p>`,visual:'<div class="interactive-card"><button class="heart-button" data-reveal="feelings">❤️</button><p>Tap the heart.</p><div class="hidden-reveal" id="reveal-feelings"><div class="quote">Somewhere along the way... the joke stopped being a joke.</div></div></div>'},
{date:'1 October 2025',icon:'👀',title:'The First Glimpse',subtitle:'For one of us, it was an ordinary day. For the other, it was the first glimpse.',text:`<p>You came from Pabna to Dhaka with your family.</p><p>I saw you from a tong near your father's house as you passed by in a rickshaw.</p><p>You didn't see me.</p><div class="quote">For you, it was just another day. For me, it was the first time I saw the person who would change my life.</div>`,visual:'<div class="interactive-card glimpse-card"><button class="reveal-btn" data-reveal="glimpse">Look closer 👀</button><div class="hidden-reveal" id="reveal-glimpse"><div class="glimpse-line">🚲 &nbsp; → &nbsp; 👀</div><p>You didn't see me.</p><div class="quote">But I saw you.</div></div></div>'},
{date:'2 October 2025',icon:'🎡',title:'Toggy — First Meeting',subtitle:'Finally close enough to meet. Still too nervous to hold her hand.',text:`<p>After shopping with your family in Bashundhara, you went to Toggy Fun World with your sister.</p><p>I joined you there. I was so nervous that I couldn't even hold your hand.</p><p>We enjoyed a VR roller coaster ride together. I didn't have enough money for more rides, but even that one ride became unforgettable.</p><p>Then it was time for you to leave with your family.</p>`,visual:'<div class="visual-card">🎢 <b>First ride together.</b><br><br>Some beginnings are quiet. They still become unforgettable.</div>'},
{date:'6 November 2025',icon:'🌹',title:'White Rose',subtitle:'A small flower carrying a feeling too big for words.',text:`<p>You and your family visited Wari. I went there too.</p><p>I saw you from a distance as you visited Aarong and Shwapno.</p><p>Then, inside Shwapno, I finally got a few minutes with you.</p><p>And I gave you the white rose you had always wanted.</p>`,visual:'<div class="interactive-card rose-card"><button class="object-button" data-reveal="rose">🌹</button><p>Tap the rose.</p><div class="hidden-reveal" id="reveal-rose"><p>6 November 2025</p><div class="quote">You wanted a white rose. So I made sure you got one.</div></div></div>'},
{date:'7 November 2025',icon:'💍',title:'Engagement Band',subtitle:'A secret plan. A tiny exchange. A symbol that became ours.',text:`<p>The day before, I had asked for your hair band to wear on my hand as a bracelet. You forgot it and felt guilty.</p><p>The next day, your mother was asleep. You had the band, but there was no easy way to give it to me.</p><p>So I came up with a plan: I would buy snacks and come like a food delivery man.</p><p>You came downstairs, pretended to pay for the food, and placed the band into my hand. The guard was watching, but never suspected.</p><div class="quote">And that is how I got my Engagement Band.</div>`,visual:'<div class="interactive-card band-card"><button class="object-button" data-reveal="band">💍</button><p>Tap the band.</p><div class="hidden-reveal" id="reveal-band"><div class="quote">Not just a band.<br><b>Our Engagement Band. ❤️</b></div></div></div>'},
{date:'22 January 2026',icon:'🚆',title:'Rajshahi',subtitle:'A journey made only to be near you.',text:`<p>I couldn't find a train seat, so I bought a standing ticket and left Dhaka at 11 PM.</p><p>I travelled alone through the night, with almost no phone charge and no sleep. I reached Rajshahi around 4–5 AM, found a charging port, and waited.</p><p>At 9 AM I went to Safina Park. When your school picnic finally arrived, I stood near the gate waiting to see you.</p><p>You were with your friends and teachers. We were close, but still couldn't properly meet.</p><p>I had brought Churi because you once sent me a reel saying, <i>"দেখা হলে চুরি দিয়ো."</i> I tried again and again to give them to you.</p><p>At T Badh, you went across the Padma by boat. I stayed behind because I was afraid I might miss you when you returned.</p><p>One last attempt failed. Then the bus left.</p><div class="quote">I wasn't heartbroken because I had travelled so far. I was heartbroken because I couldn't give you what I had carried all that way.</div><p>I kept the Churi. My love wasn't finished.</p><p>Then I travelled home by bus, reaching home around 6 AM.</p>`,visual:'<div class="interactive-journey"><p class="micro-note">Tap each stop of the journey.</p><div class="journey-stops"><button data-stop="dhaka">🌃<small>Dhaka</small></button><span>→</span><button data-stop="train">🚆<small>Train</small></button><span>→</span><button data-stop="rajshahi">🌅<small>Rajshahi</small></button><span>→</span><button data-stop="you">❤️<small>You</small></button></div><div class="journey-message" id="journeyMessage">Choose a stop.</div></div>'},
{date:'After January 2026',icon:'🪟',title:'Window Kisses',subtitle:'Sometimes distance was only a road between us.',text:`<p>There were times you came to Dhaka, but because of circumstances and pressure, we still couldn't properly meet.</p><p>Still, whenever you came, I went at least once to your father's house.</p><p>I stood on the road that could be seen from your window. We talked through Instagram, even though we were only a short distance apart.</p><p>And then I blew kisses toward your window.</p><div class="quote">We were separated by walls and distance, but never by our hearts.</div>`,visual:'<div class="interactive-card window-interactive"><button class="object-button window-button" data-reveal="window">🪟</button><p>Tap the window.</p><div class="hidden-reveal" id="reveal-window"><div class="window-scene"><div class="window-frame"></div><div class="window-person">🧍</div><div class="road-person">🧍‍♂️</div><div class="kiss">😘</div></div><div class="quote">Even when we couldn't meet, I still found a way to be close to you.</div></div></div>'},
{date:'21 June 2026',icon:'🎡',title:'Toggy — Finally Together',subtitle:'After all the waiting, we finally got a day that felt like ours.',text:`<p>You came to Dhaka on your birthday. I had a Physics final that day, so I rushed to meet you after my exam.</p><p>We went to Toggy Fun World.</p><p>Laser Tag. Haunted House. Laughter. And finally, the kind of time together we had waited so long for.</p><p>And somewhere in that day, I kissed your cheek.</p><div class="quote">The first time at Toggy, I was too nervous to hold your hand. This time, we had a whole day together.</div>`,visual:'<div class="interactive-card toggy-interactive"><p>Choose a memory from that day.</p><div class="choice-row"><button data-choice="laser">🎯<small>Laser Tag</small></button><button data-choice="haunted">👻<small>Haunted House</small></button><button data-choice="kiss">❤️<small>One special moment</small></button></div><div class="choice-message" id="choiceMessage">Tap one.</div></div>'},
{date:'4:15 AM',icon:'🌅',title:'The Longest Call',subtitle:'The night that turned into morning.',text:`<p>We stayed on a late-night call for longer than any call before.</p><p>One conversation became another. The night kept moving, and neither of us wanted it to end.</p><p>Then suddenly, it was <b>4:15 AM.</b></p><div class="quote">That day, I had the best sleep of my life.</div>`,visual:'<div class="interactive-card clock-memory"><button class="clock-button" data-reveal="clock">4:14 AM</button><p>Tap the time.</p><div class="hidden-reveal" id="reveal-clock"><div class="big-time">4:15 AM</div><div class="quote">The longest call we ever had.<br><br>And somehow... I had the best sleep of my life.</div></div></div>'},
{date:'Forever',icon:'♾️',title:'Our Future',subtitle:'The story is still being written.',text:`<p>There have been distances, missed chances, long journeys, late-night calls, secret gifts, window kisses, and memories we will never forget.</p><p>But every chapter brought us here.</p><p>And the most beautiful thing about our story is that this isn't the end.</p><div class="quote">The best chapters are still waiting to be written.</div>`,visual:'<div class="interactive-card future-interactive"><p>Tap the stars.</p><div class="future-stars"><button data-future="More">✦</button><button data-future="Memories">✧</button><button data-future="Us">✦</button></div><div class="future-words" id="futureWords">Our story is still being written.</div></div>'}
];
let current=0;

const homeStars=document.querySelector('.background .stars');
if(homeStars){
  homeStars.addEventListener('click',()=>{
    if(document.getElementById('homeSecret')) return;
    const secret=document.createElement('div'); secret.id='homeSecret'; secret.className='home-secret'; secret.textContent='You found a little secret. ❤️'; document.body.appendChild(secret);
    setTimeout(()=>secret.classList.add('show'),20); setTimeout(()=>{secret.classList.remove('show');setTimeout(()=>secret.remove(),500)},3000);
  });
}

function render(i,dir=1){current=Math.max(0,Math.min(chapters.length-1,i));const c=chapters[current];card.style.animation='none';void card.offsetWidth;card.style.animation=dir>0?'cardIn .45s ease both':'cardBack .45s ease both';date.textContent=c.date;num.textContent=`CHAPTER ${String(current+1).padStart(2,'0')} / ${chapters.length}`;icon.textContent=c.icon;title.textContent=c.title;subtitle.textContent=c.subtitle;text.innerHTML=c.text;visual.innerHTML=c.visual;progress.style.width=`${((current+1)/chapters.length)*100}%`;back.disabled=current===0;next.textContent=current===chapters.length-1?'Finish Our Story ❤️':'Continue ❤️';hint.textContent=current===chapters.length-1?'One last moment...':'Your story, one memory at a time.';story.querySelector('.storyCard').scrollTop=0; bindInteractiveElements()}
function showFinale(){
  story.classList.add('finale-mode');
  const card=document.getElementById('storyCard');
  card.innerHTML=`
    <div class="finale-icon">❤️</div>
    <div class="dateBadge">20 JULY 2026</div>
    <div class="chapterNumber">THE STORY CONTINUES</div>
    <h2>Not The End</h2>
    <p class="chapterSubtitle">Because our story is still being written.</p>
    <div class="finale-message">
      <p>13 chapters.</p>
      <p>Countless memories.</p>
      <p>One story that is still ours.</p>
    </div>
    <div class="finale-stars">✦ &nbsp; ✧ &nbsp; ✦</div>
    <p class="finale-note">Thank you for every memory, every smile, every late-night conversation, and every moment that brought us here.</p>
    <div class="quote">The best chapter is the one we're living now.</div>
    <p class="finale-sign">Happy Anniversary, Tayeba ❤️<br><span>— Sumon</span></p>
    <button id="finishBtn" class="finaleButton">Open Memory Vault 🔐</button>
  `;
  document.getElementById('finishBtn').addEventListener('click',showVault);
  back.disabled=false;
  hint.textContent='Our story continues beyond this page.';
}

function showVault(){
  story.classList.add('vault-mode');
  const card=document.getElementById('storyCard');
  card.innerHTML=`
    <div class="vault-icon">🔐</div>
    <div class="chapterNumber">A LITTLE PLACE FOR US</div>
    <h2>Memory Vault</h2>
    <p class="chapterSubtitle">Some things are too special to leave behind.</p>

    <div class="vault-grid">
      <button class="vault-card" data-memory="first-night">
        <span>🌙</span>
        <strong>The First Night</strong>
        <small>Where everything quietly began.</small>
      </button>

      <button class="vault-card" data-memory="never-forget">
        <span>🌹</span>
        <strong>Things I Never Want to Forget</strong>
        <small>A few memories I will always carry.</small>
      </button>

      <button class="vault-card" data-memory="letter">
        <span>💌</span>
        <strong>A Letter From Me</strong>
        <small>Something I wanted to tell you myself.</small>
      </button>
    </div>

    <button id="vaultBack" class="finaleButton vaultBackButton">← Back to Our Story</button>
  `;

  document.querySelectorAll('.vault-card').forEach(button=>{
    button.addEventListener('click',()=>openMemory(button.dataset.memory));
  });

  document.getElementById('vaultBack').addEventListener('click',()=>{
    story.classList.remove('vault-mode');
    showFinale();
  });

  back.disabled=false;
  hint.textContent='A few things I never want you to forget.';
}

function openMemory(type){
  const card=document.getElementById('storyCard');
  let content='';

  if(type==='first-night'){
    content=`
      <div class="memory-detail-icon">🌙</div>
      <div class="chapterNumber">20 JULY 2025</div>
      <h2>The First Night</h2>
      <p class="chapterSubtitle">Some stories begin with a grand moment. Ours didn't.</p>
      <div class="first-night-timeline">
        <div><strong>11:59 PM</strong><span>A conversation began.</span></div>
        <div><strong>12:00 AM</strong><span>A story began.</span></div>
        <div><strong>After that...</strong><span>Nothing was ever quite the same.</span></div>
      </div>
    `;
  }

  if(type==='never-forget'){
    content=`
      <div class="memory-detail-icon">🌹</div>
      <div class="chapterNumber">THE MEMORIES I CARRY</div>
      <h2>Things I Never Want to Forget</h2>
      <p class="chapterSubtitle">Some moments may have been small. They never felt small to me.</p>
      <div class="memory-list">
        <div><span>🌹</span><p><b>The White Rose</b><small>The flower you had always wanted.</small></p></div>
        <div><span>💍</span><p><b>The Engagement Band</b><small>A tiny secret exchange that became something special to me.</small></p></div>
        <div><span>💛</span><p><b>The Churi I Carried to Rajshahi</b><small>Because even when I couldn't give it to you, the feeling behind it was still there.</small></p></div>
        <div><span>😘</span><p><b>Window Kisses</b><small>When distance was only a road between us.</small></p></div>
        <div><span>🌅</span><p><b>4:15 AM</b><small>The longest call, followed by the best sleep of my life.</small></p></div>
      </div>
    `;
  }

  if(type==='letter'){
    content=`
      <div class="memory-detail-icon">💌</div>
      <div class="chapterNumber">FROM ME, TO YOU</div>
      <h2>A Letter From Me</h2>
      <div class="letter">
        <p><b>Dear Tayeba,</b></p>
        <p>First of all, <b>Happy Anniversary.</b> ❤️</p>
        <p>Secondly, you've read a lot of English so far. Now let me tell you some things from my heart.</p>
        <p>Etokkhon ja kichu porla, you know ei moment gulo amader life-e koto importance rakhe. Amader story-er main part egula. Onek kichui hoyto vule jetam ami, jodi eta normal kichu hoito. But jekhane tumi related, oita ki ar vula jay bolo?</p>
        <p>Jaihok, it's been a long journey with you, but it was just a beginning. Shamne aro onek kichu ashbe. Amra onek kichu face korbo. Kintu amra jodi ekshathe thaki, eishob kono badha-i hobe na. Easily par kore chole jabo.</p>
        <p>And ejonnoi amar tomake dorkar. I always want you by my side.</p>
        <p>Ei long distance asholeo onek pera dey. Chaileo dekha kora jay na. Ettodin por por dekha hoy, tao olpo kichu shomoyer jonno. Amar valo lage na eka Dhaka-e thakte, tomake chara.</p>
        <p><b>Please, chole asho Dhaka. Amra onek fun korbo.</b> 🥹❤️</p>
        <p>I know, bollei shob kichu possible hoy na. Kintu tumi asho tao. I'm missing you <b>soo much.</b></p>
        <p>Ekhane ar beshi kichu na boli.</p>
        <p><b>I love you, sweetheart.</b> ❤️</p>
        <p>And once again,</p>
        <p class="letter-ending"><b>Happy Anniversary, Babe. ❤️</b></p>
        <p class="letter-sign">— Sumon</p>
      </div>
    `;
  }

  card.innerHTML=`
    ${content}
    <button id="memoryBack" class="finaleButton vaultBackButton">← Back to Memory Vault</button>
  `;

  document.getElementById('memoryBack').addEventListener('click',showVault);
  hint.textContent='A memory from the vault.';
}

function bindInteractiveElements(){
  document.querySelectorAll('[data-reveal]').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const key=btn.dataset.reveal;
      const target=document.getElementById('reveal-'+key);
      if(target){
        target.classList.add('revealed');
        btn.classList.add('used');
        if(key==='feelings') btn.textContent='❤️';
        if(key==='rose') btn.classList.add('bloomed');
        if(key==='band') btn.classList.add('spinning');
      }
    });
  });
  document.querySelectorAll('[data-stop]').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const messages={dhaka:'I left alone.',train:'No proper seat. Almost no charge. No sleep.',rajshahi:'I travelled all that way just to be near you.',you:'And even though I could not give you the Churi... I still carried the love back home.'};
      const box=document.getElementById('journeyMessage');
      if(box) box.textContent=messages[btn.dataset.stop];
      document.querySelectorAll('[data-stop]').forEach(x=>x.classList.remove('active'));
      btn.classList.add('active');
    });
  });
  document.querySelectorAll('[data-choice]').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const messages={laser:'Laser Tag. A little chaos, a lot of fun.',haunted:'The Haunted House. Screams, laughter, and a day that finally felt like ours.',kiss:'And somewhere in that day, I kissed your cheek. ❤️'};
      const box=document.getElementById('choiceMessage');
      if(box) box.textContent=messages[btn.dataset.choice];
      document.querySelectorAll('[data-choice]').forEach(x=>x.classList.remove('active'));
      btn.classList.add('active');
    });
  });
  document.querySelectorAll('[data-future]').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const box=document.getElementById('futureWords');
      if(box) box.textContent=btn.dataset.future;
      btn.classList.add('active');
    });
  });
}

function addMusicControl(){
  if(document.getElementById('musicControl')) return;
  const audio=document.createElement('audio');
  audio.id='bgMusic'; audio.loop=true; audio.preload='none';
  audio.innerHTML='<source src="assets/audio/perfect-edm.mp3" type="audio/mpeg">';
  document.body.appendChild(audio);
  const button=document.createElement('button');
  button.id='musicControl'; button.className='music-control'; button.setAttribute('aria-label','Play music'); button.textContent='🎵';
  document.body.appendChild(button);
  button.addEventListener('click',()=>{
    if(audio.paused){
      audio.play().then(()=>{button.textContent='⏸️';button.classList.add('playing')}).catch(()=>{
        showMusicNotice('Add your licensed EDM version of Perfect as assets/audio/perfect-edm.mp3 to play music here.');
      });
    }else{audio.pause();button.textContent='🎵';button.classList.remove('playing')}
  });
}

function showMusicNotice(message){
  const n=document.createElement('div'); n.className='music-notice'; n.textContent=message; document.body.appendChild(n);
  setTimeout(()=>n.classList.add('show'),20); setTimeout(()=>{n.classList.remove('show');setTimeout(()=>n.remove(),400)},4200);
}

relive.addEventListener('click',()=>{home.classList.add('hidden');story.classList.remove('hidden');story.classList.remove('finale-mode');addMusicControl();render(0)});
next.addEventListener('click',()=>{if(current===chapters.length-1){showFinale();return}render(current+1,1)});
back.addEventListener('click',()=>{
  if(story.classList.contains('vault-mode')){
    story.classList.remove('vault-mode');
    showFinale();
    return;
  }
  if(story.classList.contains('finale-mode')){
    story.classList.remove('finale-mode');
    render(chapters.length-1,-1);
    return;
  }
  if(current>0)render(current-1,-1);
});document.addEventListener('keydown',e=>{if(story.classList.contains('hidden'))return;if(e.key==='ArrowRight')next.click();if(e.key==='ArrowLeft')back.click()});
});
