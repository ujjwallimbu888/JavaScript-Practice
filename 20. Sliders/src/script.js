"use strict";

const links = [
  "https://50projects-50-days.netlify.app/18.%20background%20slider/images/1.jpg",
  "https://50projects-50-days.netlify.app/18.%20background%20slider/images/2.jpg",
  "https://50projects-50-days.netlify.app/18.%20background%20slider/images/3.jpg",
  "https://50projects-50-days.netlify.app/18.%20background%20slider/images/4.jpg",
  "https://50projects-50-days.netlify.app/18.%20background%20slider/images/5.jpg",
];
let val = 0;
let controls = document.querySelector(`.controls`);

controls.addEventListener("click", function (e) {
  const main_container = document.querySelector(`.back_image`);
  e.target.closest(".next");

  //Implementing next button
  if (e.target && e.target.closest(".next")) {
    val = val < 4 ? ++val : 0;
  }

  //Implementing prev button
  if (e.target && e.target.closest(".prev")) {
    val = val > 0 ? --val : 4;
  }

  let curImg = links[val];

  document.querySelector(`.links`).innerHTML = "";
  document.querySelector(`.links`).insertAdjacentHTML(
    "afterbegin",
    `<div
    class="slider h-full w-full bg-[url('${curImg}')] bg-cover bg-center"
  ></div>`,
  );

  main_container.style.backgroundImage = `url('${curImg}')`;
});
