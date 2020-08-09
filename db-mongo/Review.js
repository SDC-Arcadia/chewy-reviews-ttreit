const mongoose = require('mongoose');

// eslint-disable-next-line no-unused-vars
const db = require('./index.js');

mongoose.Promise = global.Promise;

const reviewSchema = new mongoose.Schema(
  {
    product_id: String,
    average_rating: Number,
    reviews: [
      {
        author: String,
        create_date: String,
        body: String,
        likes: { type: Number, default: 0 },
        stars: { type: Number, default: 0 },
        recommended: Boolean,
      },
    ],
  },
);

const Reviews = mongoose.model('Reviews', reviewSchema);

module.exports = Reviews;
