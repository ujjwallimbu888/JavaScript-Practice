"use strict";

const API_KEY = "37153a486788dafbb90b90b4ed4ae4a1";
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&page=1&api_key=${API_KEY}`;

//! Fetching the movie
const fetchMovies = async function () {
  const response = await fetch(API_URL);
  if (response.status !== 200) {
    throw new Error("Error occured during the fetching process.");
  }

  const val = await response.json();
  return val;
};

//! Using the promise object for
fetchMovies()
  .then(function (data) {
    const movies = data.results; //Storing the movies information

    //!Using APIs to add  information to the skeletons
    movies.forEach(function (el) {
      const [main] = document.getElementsByTagName("main"); //Section for the movies with array destructuring
      const poster = `https://image.tmdb.org/t/p/original/${el.poster_path}`;
      const movieName = el.original_title;
      const rating = el.vote_average;
      const overview = el.overview;
      const ratingIndicator =
        rating <= 4
          ? "text-red-500"
          : rating < 8
          ? "text-orange-500"
          : "text-green-500"; //Selecting the color of the rating in the movie card based on its rating

      //! Adding card skeletons and styles to the webpage
      main.insertAdjacentHTML(
        "afterbegin",
        `<div class="film h-[538px] w-[300px] m-4 bg-[#373b69] rounded-lg group overflow-hidden">
    <img
      src="${poster}"
      alt="film Poster"
      class="h-[450px]"
    />
    <div class="description flex justify-around h-[88px] items-center">
      <h2 class="text-white text-xl font-bold">${movieName}</h2>
      <div
        class="rating ${ratingIndicator} bg-[#22254b] h-7 w-16 text-center rounded-lg text-lg font-bold"
      >
        ${rating}
      </div>
    </div>
    <div
      class="overview flex justify-center items-center h-4/6 bg-white rounded-xl relative duration-100  group-hover:translate-y-[-358px]"
    >
      <div class="container">
        <h3 class="mb-3 ml-3 mt-8 text-lg font-bold">Overview</h3>
        <p class="mb-5 ml-3">
          ${overview}
        </p>
      </div>
    </div>
  </div>`
      );
    });
  })
  .catch((err) => console.log(err));
