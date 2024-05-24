"use strict";

const container = document.querySelector(`.container`);
const splitLeft = document.querySelector(`.split-left`);
const splitRight = document.querySelector(`.split-right`);

//! Use event propogation
//! Learn what events can be used in AEL
//! Integration of seamless transition

container.addEventListener("mouseover", function (e) {
  //* Remove the focus if there's no mouse hovering on either of the section
  if (e.target === undefined) return;

  if (e.target === splitLeft) {
    splitRight.classList.remove("active");

    e.target.classList.add("active");
  } else {
    splitLeft.classList.remove("active");

    e.target.classList.add("active");
    console.log(e.target);
  }
});
