// Controller for all root / routes
const movies = [
  {
    name:  "Spirited Away: W krainie bogów",
    image: "https://image.tmdb.org/t/p/w300/oRvMaJOmapypFUcQqpgHMZA6qL9.jpg"
  },
  {
    name:  "Spider-Man Uniwersum",
    image: "https://image.tmdb.org/t/p/w300/uWb1OWabm8YSoLp1JGeJl0fF7DT.jpg"
  },
  {
    name:  "Grobowiec świetlików",
    image: "https://image.tmdb.org/t/p/w300/a8S5d5w7tzNAgSHDEybOJPwSey4.jpg"
  },
  {
    name:  "Księżniczka Mononoke",
    image: "https://image.tmdb.org/t/p/w300/oGZmGO4Q9HhoRXGRNGKduYvtL9h.jpg"
  },
  {
    name:  "Król Lew",
    image: "https://image.tmdb.org/t/p/w300/nGArwXth0dOH8AUZuPCyBBJEWoF.jpg"
  },
  {
    name:  "Coco",
    image: "https://image.tmdb.org/t/p/w300/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg"
  },
  {
    name:  "Paperman",
    image: "https://image.tmdb.org/t/p/w300/3TpMBcAYH4cxCw5WoRacWodMTCG.jpg"
  },

];

module.exports = {
  getIndexData(req, res) {
    return res.render('index', { title: 'Express', movies: movies });
  },
};
