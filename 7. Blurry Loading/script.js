"use strict";

const backImage = document.querySelector(`.image`);
const loadingText = document.querySelector(`.loading-text`);

console.log(loadingText);

let count = 0;

const unblur = function () {
  backImage.classList.add("active");
};

unblur();

setInterval(function () {
  if (count > 99) return;
  count += 1;
  loadingText.innerHTML = `${count}%`;

  loadingText.style.opacity = `${1 - count / 100}`;
}, 20);

console.log(count);
