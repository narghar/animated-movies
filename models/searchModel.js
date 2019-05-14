const axios = require('axios');
const data = require('../config/data');


class Search {
  constructor(query) {
    this.query = query;
  }
  async getData() {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${data.key}&language=pl-PL&query=${this.query}&page=1&include_adult=false`);
      // this.result =  response.data.results;
       const resData = response.data.results;
       // Themoviedb api doesn't provide searching based on categories
       // Filter response data result to find movies with genre contain animation
       // id category === 16.
      this.result = resData.filter(resData => resData.genre_ids.some(id => id === 16));

      } catch (error) {
      console.error(error);
    }
  }
}

module.exports = Search;
