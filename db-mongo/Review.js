const mongoose = require('mongoose');

// eslint-disable-next-line no-unused-vars
const db = require('./index.js');

mongoose.Promise = global.Promise;

const reviewSchema = new mongoose.Schema(
  {
    product_id: String,
    reviews:
      {
        product_id: { type: Number, required: true },
        title: { type: String, required: true },
        author: { type: String, required: true },
        create_date: { type: Date, default: Date.now },
        body: { type: String, required: true },
        likes: { type: Number, default: 0, required: true },
        stars: { type: Number, default: 0, required: true },
        recommended: Boolean,
      },
  },
);

const Reviews = mongoose.model('Reviews', reviewSchema);

module.exports = Reviews;
