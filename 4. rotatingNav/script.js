"use strict";

const openBar = document.getElementsByClassName("open-bar");
const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");
const blogPost = document.getElementsByClassName("content");
const container = document.getElementsByClassName("container");
const menu = document.getElementsByClassName("menu");
const nav = document.getElementsByClassName("open-sans");

openBtn.addEventListener("click", function () {
  container[0].style.transform = "rotate(-20deg)";
  container[0].style.transformOrigin = "0% 0%";

  openBar[0].style.transform = "translate(-30px, -27px) rotate(94deg)";
  closeBtn.style.transform = "rotate(-179deg) translate(-20px, -55px)";

  menu[0].style.position = "relative";
  menu[0].style.transform = "rotate(20deg)";
  menu[0].style.transformOrigin = "0% 0%";

  nav[0].style.transform = "translateX(-19px)";
  nav[0].style.transition = "0.5s ease-in";
});

closeBtn.addEventListener("click", function () {
  container[0].style.transform = "rotate(0deg)";
  container[0].style.transformOrigin = "0% 0%";

  openBar[0].style.transform = "translate(-30px, -27px) rotate(0deg)";
  closeBtn.style.transform = "rotate(-103deg) translate(-20px, -55px)";

  menu[0].style.position = "sticky";
  menu[0].style.transform = "rotate(0deg)";
  menu[0].style.transformOrigin = "0% 0%";

  nav[0].style.transform = "translateX(-170px)";
});
