const express = require('express');
const path = require('path');
const routes = require('./routes');
const app = express();
const port = 3000;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Hook up all routes
app.use('/', routes);



app.listen(port, () => console.log(`Example app listening on port ${port}!`))
