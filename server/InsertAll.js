const { NewModel } = require('./db/index.js');
const Helpers = require('./helpers/helpers.js');

const insertAll = function() {
  // populating a database
  // Helpers.somefunctiontogetAPI
  NewModel.create({});
};

// Possibly invoke if adding a series of information to our database
insertAll();
