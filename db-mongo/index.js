const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/reviews';

const db = mongoose.connect(mongoUri);

module.exports = db;
