const Rank = require('../models/movieRankModel');


//GET MOVIE RANK

module.exports = {
  getMovieRank(req, res) {
    const movieRank = async () => {
     let search = new Rank(1);

      try {
        await search.getData();
        return res.render('movieRank', {
        title: 'BAZA BAJEK',
        movies: search,
        });
      } catch (err) {
        console.log("Download error");
      }
    }
    movieRank();
  }
}
