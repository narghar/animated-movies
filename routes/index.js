// Main router entry point, sets up all route modules

const express = require('express');
const router = express.Router();

const indexRouter = require('./indexRouter');
const movieDetailRouter = require('./movieDetailRouter');

router.use('/', indexRouter);
router.use('/movie/:movieId', movieDetailRouter);


module.exports = router;
