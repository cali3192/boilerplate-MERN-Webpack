const { NewModel } = require('./db/index');

// Complete each of the following controller methods
module.exports.createOne = (req, res) => {
  // call NewModel and some mongoose function
};

module.exports.retrieve = (req, res) => {
  console.log('inside retrieve');
  NewModel.find({})
    .then(data => {
      res.send(data).status(200);
    })
    .catch(err => res.send().status(500));
};

module.exports.retrieveOne = (req, res) => {
  const { name, number } = req.body;
  console.log('retrieve one number', number);
  NewModel.find({ number: number })
    .then(data => {
      res.send(data).status(200);
    })
    .catch(err => res.send().status(500));
};
