// const { addEntry, findAll } = require('./models.js');
const Models = require('./models.js');

// Complete each of the following controller methods
module.exports.addEntry = (req, res) => {
  // const { property1, property2 } = req.body
  const newEntry = {
    number: property1,
    name: property2
  };
  Models.addEntry(newEntry, (err, results) => {
    if (err) {
      console.log('err in the add Entry controller', err);
      res.send(err).status(500);
    } else {
      console.log('results from create one', results);
      res.send(results).status(201);
    }
  });
};

module.exports.retrieve = (req, res) => {
  console.log('inside retrieve');
  Models.findAll((err, results) => {
    if (err) {
      console.log('err in controllers', err);
      res.send().status(500);
    } else {
      console.log('results from findAll', results);
      res.send(results).status(201);
    }
  });
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
