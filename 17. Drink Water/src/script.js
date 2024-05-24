"use strict";

const glasses = document.querySelector(`.glasses `);
const glass = document.querySelectorAll(`.glass`);
const goal = document.querySelector(`#container`);
const percentage = document.getElementById(`percentage`);
const remaining = document.getElementById("remaining");

glasses.addEventListener("click", function (e) {
  if (!e.target.classList.contains("glass")) return;

  const glassArr = Array.from(glass);
  const curGlass = glassArr.indexOf(e.target);
  const height = ((curGlass + 1) / 8) * 100;

  //! Adding height dynamically as the number of glasses of water are consumed or decreased
  remaining.style.height = `${100 - height}%`;
  percentage.style.height = `${height}%`;

  //! Narrating water consumption and remaining
  percentage.innerText = `${height}%`;
  remaining.firstElementChild.innerText = `${2 - (curGlass * 250) / 1000 - 0.25}L`;

  //! Decreasing the remaining water consumption
  if (e.target.classList.contains("fill")) {
    glassArr
      .filter(function (val, i) {
        return i >= curGlass;
      })
      .map(function (val) {
        val.classList.remove("fill");
      });
  }

  //! Increasing the water consumption
  glassArr
    .filter(function (val, i) {
      return i <= curGlass;
    })
    .map(function (val) {
      val.classList.add("fill");
    });
});
