// All /movies routes

const express = require('express');
const router = express.Router();

const { getSearchData } = require('../controllers/searchController');

// Note: this route is actually /movies/:movieId due to our index.js setup
router.post('/', getSearchData);
// router.post('/', getSearchData);

module.exports = router;
