const axios = require('axios');
const data = require('../config/data')

class Search {
  constructor(releaseYear, releasedTillNow) {
    this.releaseYear = releaseYear;
    this.releasedTillNow = releasedTillNow;
  }
  async getData() {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${data.key}&language=pl-PL&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&primary_release_year=${this.releaseYear}&primary_release_date.lte=${this.releasedTillNow}&vote_count.gte=8&with_genres=16`);
      this.result =  response.data.results;
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = Search;
