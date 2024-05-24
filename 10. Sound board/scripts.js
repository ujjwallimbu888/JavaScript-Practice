"use strict";
const buttons = document.getElementById("buttons");
const audio = document.querySelectorAll("audio");
let currentAudio = null; // Maintain a reference to the currently playing audio

buttons.addEventListener("click", function (e) {
  audio.forEach(function (el) {
    if (el.src.search(e.target.textContent.slice(3)) > -1) {
      console.log(el);

      // Pause and reset the current audio, if any
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }

      // Play the new audio
      el.play();
      currentAudio = el; // Update the reference to the currently playing audio
    }
  });
});
