"use strict";

const choices = document.querySelector(`.choices`);
const enterChoices = document.getElementsByTagName("textarea")[0];
let prevRando;
let intervalId; //for tracking the interval and clearing the interval on max interval

//#Creates a random number based on the numbers of words seperated by the comma
let randomChoice = function () {
  //Creating arr to track the length of the arr of words and return the random number based on that
  const arrValue = enterChoices.value.split(",");
  let rando = Math.ceil(Math.random() * [arrValue.length]);

  //use of recursion function(function that calls itself), if the prevRando is the same as the new one.
  if (prevRando === rando) return randomChoice();

  prevRando = rando;
  return rando;
};

enterChoices.addEventListener("keyup", function (e) {
  // e.preventDefault();

  let currentRepeat = 0; //created to track the current timer and to stop the timer once it reaches certain limit
  let prevSelected; //Creating function scope for previously chosen random word

  //# Implementing the update feature on the choice elements
  choices.textContent = ""; //Clearing the collection of choice with each keyup

  //Entering the newly added el with each keyup
  enterChoices.value
    .split(",")
    .forEach((el) =>
      choices.insertAdjacentHTML(
        "afterbegin",
        `<div class="choice">${el}</div>`
      )
    );

  //# Getting the elements inside the choices box ie collection of choice and HTML collection => arr
  let choicesHTMLCollection = choices.children;
  let choiceArr = [];

  for (const key in choicesHTMLCollection) {
    choiceArr.push(choicesHTMLCollection[key]);
  }

  //removing the extra elements that came from HTML collection
  choiceArr.slice(0, -3);

  //#Implementing the functionality of random choice choosing once enter key is pressed
  if (e.key === "Enter") {
    intervalId = setInterval(() => {
      //Stops this setinterval after the specified limit
      if (currentRepeat > 8) {
        clearInterval(intervalId);
      }

      //Generating the unique random number
      randomChoice();

      //Selecting the prv random choice and restoring the style to initial state
      if (prevSelected !== undefined) {
        prevSelected.style.backgroundColor = "orange";
      }

      //Selecting the current random choice and applying style to it
      let selected = choiceArr[prevRando - 1];
      selected.style.backgroundColor = "rgb(39, 60, 117)";

      //For tracking the current iteration and prev selected
      prevSelected = selected;
      ++currentRepeat;
    }, 500);
  }
});
