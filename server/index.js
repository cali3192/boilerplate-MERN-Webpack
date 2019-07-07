var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var pathfinderUI = require('pathfinder-ui');
const path = require('path');

const router = require('./router');

// An instance of express
var app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use('/', router);
app.use(express.static(path.join(__dirname, './../client/dist')));

app.use(
  '/pathfinder',
  function(req, res, next) {
    pathfinderUI(app);
    next();
  },
  pathfinderUI.router
);

const port = 4000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
