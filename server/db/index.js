const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/NEWDATABASE');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
  console.log('sucessful mongoose connection');
});

// call on the schema
const Schema = mongoose.Schema;

// create a new schema
const newSchema = new Schema({
  number: { type: Number, unique: true }, // {unique: true}
  name: { type: String, unique: true }, // {unique: true}
  types: Array,
  imageUrl: String
});

// Register the schema with Mongoose as the 'newSchema' collection.
const NewModel = mongoose.model('NewModelName', newSchema);

module.exports = { db, NewModel };
