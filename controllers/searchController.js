const Search = require('../models/searchModel');


//SEARCH MOVIES

module.exports = {
  getSearchData(req, res) {
    const query = encodeURIComponent(req.body.query);
      if(query.length > 2) {

      const movieList = {};
      const searchMovies = async() => {
      search = new Search(query);
      try {
        await search.getData();
        movieList.result = search.result;
        // console.log(search.result);
        return res.render('search', { title: 'BAZA BAJEK', movie: search });
    } catch(err) {
        console.log("Download error");
  }
}
  searchMovies();
} else {
  res.redirect("/");
}


  },
};

