const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/reviews',
  { useNewUrlParser: true }, (error) => {
    if (error) {
      // eslint-disable-next-line no-console
      console.log('connection error: ', error);
    } else {
      // eslint-disable-next-line no-console
      console.log('Database connected');
    }
  });
const db = mongoose.connection;

module.exports = db;
