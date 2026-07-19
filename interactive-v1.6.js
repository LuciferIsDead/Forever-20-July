/* VERSION 1.6 - ISOLATED INTERACTIVE LAYER
   This file intentionally does not modify Version 1.5 story logic.
*/
(function () {
  "use strict";

  function safeInit() {
    try {
      var music = document.getElementById("perfectMusic");
      var musicButton = document.getElementById("musicToggle");

      if (music && musicButton) {
        music.volume = 0.25;
        musicButton.addEventListener("click", function () {
          if (music.paused) {
            music.play().then(function () {
              musicButton.textContent = "🔊";
            }).catch(function () {
              musicButton.title = "Add assets/audio/perfect-edm.mp3 to enable music";
            });
          } else {
            music.pause();
            musicButton.textContent = "🎵";
          }
        });
      }

      var homeBg = document.querySelector("#homeScreen .background");
      if (homeBg && !document.getElementById("v16SecretStar")) {
        var star = document.createElement("button");
        star.id = "v16SecretStar";
        star.className = "v16-secret-star";
        star.type = "button";
        star.textContent = "✦";
        star.setAttribute("aria-label", "Hidden memory");

        var note = document.createElement("div");
        note.className = "v16-secret-note";
        note.hidden = true;
        note.textContent = "Some memories are hidden in the little things. ❤️";

        star.addEventListener("click", function () {
          note.hidden = !note.hidden;
        });

        homeBg.appendChild(star);
        homeBg.appendChild(note);
      }

      var introStars = document.querySelector("#introScreen .stars");
      if (introStars) {
        introStars.addEventListener("click", function () {
          introStars.classList.add("v16-star-flash");
          window.setTimeout(function () {
            introStars.classList.remove("v16-star-flash");
          }, 500);
        });
      }
    } catch (e) {
      /* Interactive extras must never affect the main story. */
      console.warn("Version 1.6 interactive layer disabled:", e);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", safeInit);
  } else {
    safeInit();
  }
})();
