// Controller for all root / routes
const Latest = require('../models/indexModel');



//SEARCH FOR NEW MOVIES
const movies = {};
let dateObj = new Date();
let releaseYear = dateObj.getFullYear();

function getMonth(date) { // Get Month in 2 digit format
  var month = date.getMonth() + 1;
  return month < 10 ? '0' + month : '' + month;
}

let releasedTillNow = dateObj.getFullYear() + "-" + getMonth(dateObj) + "-" + dateObj.getDate();

const latestMovies = async () => {

  search = new Latest(releaseYear, releasedTillNow);
  try {
    await search.getData();
    movies.result = search.result;
  } catch (err) {
    // console.log(movies.result);
    console.log("Download error");
  }
}
latestMovies();



module.exports = {
  getIndexData(req, res) {
    return res.render('index', {
      title: 'BAZA BAJEK',
      movies: movies
    });
  },
};
