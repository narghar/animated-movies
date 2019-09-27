const MovieDetail = require('../models/movieDetailModel');


// Get movie Details

module.exports = {

  getMovieDetail(req, res) {

  const getMovieDetail = async() => {

      let movie = new MovieDetail(movieId);
      try {
        await movie.getData();
        return res.render('movieDetail', {title: movie.title, movie: movie});
       } catch(err) {
         console.log("Download error");
      }

    }
    getMovieDetail();

  },
};


