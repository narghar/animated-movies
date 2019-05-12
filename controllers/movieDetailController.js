
module.exports = {
  getMovieDetail(req, res) {
    return res.render('movieDetail', {title: 'Baza Bajek', data: 'reached /albums index route!' });
  },
};
