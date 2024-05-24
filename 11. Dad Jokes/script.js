"use strict";

const limit = 1; // Number of jokes to retrieve
const apiKey = "3IJ2IeLqRWuzn5/0eAHE0A==9daNn8CSU4Jn0ak5"; // Replace with your actual API key
const jokePlacehldr = document.getElementById(`joke`);
const anotherJoke = document.querySelector(`button`);

fetch(`https://api.api-ninjas.com/v1/dadjokes?limit=${limit}`, {
  headers: {
    "X-Api-Key": apiKey,
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json()) // Parse JSON response
  .then((data) => {
    // Access jokes from the data object (structure may vary)
    console.log([data]); // Log the entire response for now
    // You can iterate over the jokes array or extract specific properties
    // for display or further processing.

    const [joke] = data;
    console.log(joke.joke);

    jokePlacehldr.insertAdjacentText("afterbegin", joke.joke);

    anotherJoke.addEventListener("click", function () {
      jokePlacehldr.textContent = "";

      jokePlacehldr.insertAdjacentText("afterbegin", joke.joke[0]);
    });
  })
  .catch((error) => console.error("Error fetching dad jokes:", error));
