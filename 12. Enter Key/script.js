"use strict";

const eventKey = document.getElementById("eventKey");
const eventKeyCode = document.getElementById("eventKeyCode");
const eventCode = document.getElementById("eventCode");

console.log(eventKey, eventKeyCode, eventCode);

window.addEventListener("keyup", function (e) {
  eventKey.textContent = " ";
  eventKeyCode.textContent = "";
  eventCode.textContent = "";

  eventKey.insertAdjacentText("afterbegin", `${e.key}`);
  eventKeyCode.insertAdjacentText("afterbegin", `${e.keyCode}`);
  eventCode.insertAdjacentText("afterbegin", `${e.code}`);
  console.log(e);
});
