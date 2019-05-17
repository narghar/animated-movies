const Search = require('../models/searchModel');


//SEARCH MOVIES

module.exports = {
  getSearchData(req, res) {
    const query = encodeURIComponent(req.query.q);
    mountPath = req.baseUrl;
    if (query.length > 2) {
      const searchMovies = async () => {
        search = new Search(query);

        try {
          await search.getData();
          return res.render('search', {
            title: 'BAZA BAJEK',
            movie: search,
            path: mountPath
          });
        } catch (err) {
          console.log("Download error");
        }
      }
      searchMovies();
    } else {
      res.redirect("/");
    }
  },
};
