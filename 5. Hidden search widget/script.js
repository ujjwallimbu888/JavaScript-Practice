"use strict";

const search = document.getElementById("search");
let input = document.querySelector(`#input`);

search.addEventListener("click", function (e) {
  e.preventDefault();

  const computedStyle = window.getComputedStyle(input);
  const inputWidth = computedStyle.getPropertyValue("width");

  if (inputWidth !== "103px") {
    input.style.width = "103px";
  } else {
    input.style.width = "0px";
  }
});
