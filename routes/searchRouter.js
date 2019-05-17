// All /movies routes

const express = require('express');
const router = express.Router();

const { getSearchData } = require('../controllers/searchController');

// Note: this route is actually /search/?q=query due to our index.js setup
router.get('/', getSearchData);


module.exports = router;
