"use strict";

const previous = document.getElementById("prev");
const next = document.getElementById("next");
const pBar = document.querySelector(".progress-bar");
const circles = document.querySelectorAll(".circle");
const num = [...circles];
let curCount = 0;

console.log(pBar);
// console.log(curCount);

// console.log(num);

//! Implementing next button functionality
next.addEventListener("click", function () {
  if (curCount === 3) return;

  console.log(curCount);
  num[++curCount].classList.add("active");
  console.log(curCount);

  pBar.style.backgroundImage = `linear-gradient(to right, #3498db ${
    curCount * 33
  }%, #e0e0e0 0%)`;
});

//!Implementing previous button functionality
previous.addEventListener("click", function () {
  if (curCount === 0) return;

  num[curCount--].classList.remove("active");
  console.log(curCount);

  pBar.style.backgroundImage = `linear-gradient(to right, #3498db ${
    (curCount + 1) * 33 - 33
  }%, #e0e0e0 0%)`;
});
