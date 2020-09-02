/* eslint-disable no-console */
const mongoose = require('mongoose');

mongoose.connect('mongodb://reviews_mongo/reviews',
  { useNewUrlParser: true, useUnifiedTopology: true })
  .then(console.log('Database connected'))
  .catch((err) => console.log(err));
const db = mongoose.connection;

module.exports = db;
