"use strict";

const bumpEffect = document.querySelectorAll(".bump-effect");
const bumpEffectP = document.querySelectorAll(".bump-effectP");
const emailInput = document.getElementById("emailID");
const passwordInput = document.getElementById("passwordID");

emailInput.addEventListener("focus", function () {
  bumpEffect.forEach(function (el) {
    el.classList.add("active");

    emailInput.addEventListener("focusout", function () {
      if (emailInput.value === "") {
        bumpEffect.forEach(function (el) {
          el.classList.remove("active");
        });
      }
    });
  });
});

passwordInput.addEventListener("focus", function () {
  bumpEffectP.forEach(function (el) {
    el.classList.add("active");

    passwordInput.addEventListener("focusout", function () {
      if (passwordInput.value === "") {
        bumpEffectP.forEach(function (el) {
          el.classList.remove("active");
        });
      }
    });
  });
});
