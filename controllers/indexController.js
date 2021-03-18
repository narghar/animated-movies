// Controller for all root / routes
const Latest = require("../models/indexModel");

//SEARCH FOR NEW MOVIES
const movies = {};
let dateObj = new Date();
let releaseYear = dateObj
  .getFullYear()
  .toString();

function getMonth(date) {
  // Get Month in 2 digit format
  var month = date.getMonth() + 1;
  return month < 10 ? "0" + month : "" + month;
}

function getDay(date) {
  // Get Day in 2 digit format
  var day = date.getDate();
  return day < 10 ? "0" + day : "" + day;
}

let releasedTillNow =
  dateObj.getFullYear() + "-" + getMonth(dateObj) + "-" + getDay(dateObj);

const latestMovies = async () => {
  let search = new Latest(releaseYear, releasedTillNow);
  try {
    await search.getData();
    movies.result = search.result;
  } catch (err) {
    console.log("Download error");
  }
};
latestMovies();

module.exports = {
  getIndexData(req, res) {
    return res.render("index", {
      title: "BAZA BAJEK",
      movies: movies
    });
  }
};
