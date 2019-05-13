const MovieDetail = require('../models/movieDetailModel');


// Get movie Details

module.exports = {

  getMovieDetail(req, res) {

  const getMovieDetail = async() => {

      let movie = new MovieDetail(movieId);
      try {
        await movie.getData();
        return res.render('movieDetail', {title: movieId, movie: movie});
       } catch(err) {
            // console.log("Download error");
      }

    }
    getMovieDetail();

  },
};


