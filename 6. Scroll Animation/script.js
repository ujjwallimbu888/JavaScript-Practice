"use strict";

const contents = document.querySelectorAll(".content");

const implement = function () {
  contents.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if ((window.innerHeight * 4) / 5 > boxTop) {
      box.classList.add("active");
    } else {
      box.classList.remove("active");
    }
  });
};

implement();
window.addEventListener("scroll", implement);
