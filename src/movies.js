// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directors = moviesArray
    .map((movieArray) => {
      return movieArray.director;
    })
    .filter((value, index, originalArray) => {
      return originalArray.indexOf(value) === index;
    });
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  const StevenSpielbergMovies = moviesArray.filter(function(movie)  {
    const StevenSpielbergMovies = movie.director === "Steven Spielberg";
    const isMovieADrama = movie.genre.indexOf("Drama")  > -1;

    return StevenSpielbergMovies && isMovieADrama;
  });
  return StevenSpielbergMovies.length;
}

const round = (value, digits) =>
  Math.round(value * 10 ** digits) / 10 ** digits;

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }

  const sumOfScores = moviesArray.reduce((accumulator, moviesArray) => {
    if (moviesArray.score) {
      return accumulator + moviesArray.score;
    } else {
      return accumulator;
    }
  }, 0);

  const averageScore = sumOfScores / moviesArray.length;
  return round(averageScore, 2);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((moviesArray) => {
    return moviesArray.genre.includes("Drama");
  });
  averageScore = scoresAverage(dramaMovies);
  return averageScore;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const moviesClone = [...moviesArray];
  moviesClone.sort((first, second) => {
    if (first.year > second.year) {
      return 1;
    } else if (first.year < second.year) {
      return -1;
    } else {
      return first.title.localeCompare(second.title);
    }
  });
  return moviesClone;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  return moviesArray
    .map(function (movie) {
      return movie.title;
    })
    .sort()
    .slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
