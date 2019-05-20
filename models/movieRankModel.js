const axios = require('axios');
const data = require('../config/data')


class Rank {
  constructor(page) {
    this.page = page;
  }
  async getData() {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${data.key}&language=pl-PL&sort_by=vote_average.desc&include_adult=false&include_video=false&page=${this.page}&vote_count.gte=200&with_genres=16`);
      this.result =  response.data.results;
      this.totalPages = response.data.total_pages;
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = Rank;
