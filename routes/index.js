// Main router entry point, sets up all route modules

const express = require('express');
const router = express.Router();

const indexRouter = require('./indexRouter');
const movieDetailRouter = require('./movieDetailRouter');
const movieRankRouter = require('./movieRankRouter');
const searchRouter = require('./searchRouter');

router.use('/', indexRouter);
router.use('/search/',  searchRouter);
router.use('/rank', movieRankRouter);
router.use('/movie/:movieId', function (req, res, next) {
  movieId = req.params.movieId;
  next();
}, movieDetailRouter);


module.exports = router;
