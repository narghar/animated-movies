// Controller for all root / routes
const Search = require('../models/indexModel');

//SEARCH FOR NEW MOVIES
const movies = {};
let dateObj = new Date();
let releaseYear = dateObj.getFullYear();
let releasedTillNow = dateObj.getFullYear() + "-" + (dateObj.getMonth() + 1) + "-" + dateObj.getDate();

const controlMovies = async() => {

  search = new Search(releaseYear, releasedTillNow);
  try {
    await search.getData();
    movies.result = search.result;
    // console.log(movies.result);
    } catch(err) {
        console.log("Download error");
  }
}
controlMovies();


// async function testWow() {
//   let query = 16;
// const movies = new Search(query);
// try {
//  await movies.getData();
//   console.log(movies.result);
// } catch(err) {
//   console.log('Blad');
// }
// }
// testWow();


// console.log(movies);
// const movies = [
//   {
//     id: 1,
//     name:  "Spirited Away: W krainie bogów",
//     image: "https://image.tmdb.org/t/p/w300/oRvMaJOmapypFUcQqpgHMZA6qL9.jpg"
//   },
//   {
//     id: 2,
//     name:  "Spider-Man Uniwersum",
//     image: "https://image.tmdb.org/t/p/w300/uWb1OWabm8YSoLp1JGeJl0fF7DT.jpg"
//   },
//   {
//     id: 3,
//     name:  "Grobowiec świetlików",
//     image: "https://image.tmdb.org/t/p/w300/a8S5d5w7tzNAgSHDEybOJPwSey4.jpg"
//   },
//   {
//     id: 4,
//     name:  "Księżniczka Mononoke",
//     image: "https://image.tmdb.org/t/p/w300/oGZmGO4Q9HhoRXGRNGKduYvtL9h.jpg"
//   },
//   {
//     id: 5,
//     name:  "Król Lew",
//     image: "https://image.tmdb.org/t/p/w300/nGArwXth0dOH8AUZuPCyBBJEWoF.jpg"
//   },
//   {
//     id: 6,
//     name:  "Coco",
//     image: "https://image.tmdb.org/t/p/w300/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg"
//   },
//   {
//     id: 7,
//     name:  "Paperman",
//     image: "https://image.tmdb.org/t/p/w300/3TpMBcAYH4cxCw5WoRacWodMTCG.jpg"
//   },

// ];

module.exports = {
  getIndexData(req, res) {
    return res.render('index', { title: 'BAZA BAJEK', movies: movies });
  },
};
