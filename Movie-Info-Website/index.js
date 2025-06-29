// collected DOM
let SearchInput = document.getElementById("movie-name");
let SearchBtn = document.getElementById("search-btn");
let MovieResult = document.getElementById("result");

// collected DOM for Display Result
const MovieImage = document.querySelector(".poster");
const MovieTitle = document.querySelector("#Title");
const imdbRating = document.querySelector("#imdbRating");

const Rated = document.querySelector("#Rated");
const Year = document.querySelector("#Year");
const RunTime = document.querySelector("#RunTime");

const Genre = document.querySelector("#Genre");

const Plot = document.querySelector("#Plot");
const Actor = document.querySelector("#Actors");

// My API Key
let key = "76fa880f";

// Function to get Data from API
let getMovie = () => {
  let movieName = SearchInput.value;
  let url = `https://www.omdbapi.com/?t=${movieName}&apikey=${key}`;

  // If input field is empty
  if (movieName.length <= 0) {
    result.innerHTML = `<h3 class='msg>Please Enter a Movie Name</h3>`;
  } else {
    // If input is not empty
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        displayData(data);
      })
      // If Error Occurs
      .catch(() => {
        result.innerHTML = `<h3 class='msg'>Error: Unable to fetch data, plz reload or insert another search word </h3>`;
      });
  }

  //   Functionality to the fetch data
  function displayData(data) {
    // If Movie exist in Database
    if (data.Response == "True") {
      //   Appending JS content Into the DOM
      MovieImage.src = data.Poster;
      MovieTitle.textContent = data.Title;
      imdbRating.textContent = data.imdbRating;

      Rated.textContent = data.Rated;
      Year.textContent = data.Year;
      RunTime.textContent = data.Runtime;

      Genre.innerHTML = data.Genre.split(",").join(`<div></div>`);

      Plot.textContent = data.Plot;
      Actor.textContent = data.Actors;
    } else {
      // If Movie  does not exist in Database
      result.innerHTML = `<h3 class='msg'>${data.error}</h3>`;
    }
  }
};

// When web page load and search button is clicked getMovie();
SearchBtn.addEventListener("click", getMovie);
window.addEventListener("load", getMovie);
