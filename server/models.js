const { NewModel } = require('./db/index');

const addEntry = (obj, cb) => {
  NewModel.create(obj)
    .then(data => {
      cb(null, data);
    })
    .catch(err => cb(err));
};

const findAll = cb => {
  NewModel.find({})
    .then(data => {
      console.log('data from findAll', data);
      cb(null, data);
    })
    .catch(err => {
      console.log('err in models', err);
      cb(err);
    });
};

module.exports = { addEntry, findAll };
