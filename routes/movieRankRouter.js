// All main rank routes

const express = require('express');
const router = express.Router();

const { getMovieRank } = require('../controllers/movieRankController');

router.get('/', getMovieRank);

module.exports = router;
