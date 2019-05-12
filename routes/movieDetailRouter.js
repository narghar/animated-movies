// All /movies routes

const express = require('express');
const router = express.Router();

const { getMovieDetail } = require('../controllers/movieDetailController');

// Note: this route is actually /movies/:movieId due to our index.js setup
router.get('/', getMovieDetail);

module.exports = router;
