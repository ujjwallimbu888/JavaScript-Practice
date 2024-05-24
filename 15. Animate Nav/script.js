"use strict";

const button = document.querySelector(`button`);

button.addEventListener("click", function () {
  document.querySelector(`.navigations`).classList.toggle("active");
  console.log(document.querySelectorAll(`a`));
  document.querySelectorAll(`a`).forEach((el) => el.classList.toggle("active"));
  document.querySelector(`button`).classList.toggle("active");
  document
    .querySelectorAll(`.line`)
    .forEach((el) => el.classList.toggle("active"));
});
