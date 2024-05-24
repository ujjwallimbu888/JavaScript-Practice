"use strict";

const container = document.querySelector(`.container`);

container.addEventListener("click", function (e) {
  if (e.target.nodeName !== "BUTTON") return;

  e.target.closest(".card").classList.toggle("active");
  e.target.previousElementSibling.classList.toggle("active");
  e.target.classList.toggle("active");
});
