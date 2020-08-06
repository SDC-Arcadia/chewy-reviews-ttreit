const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const reviewSchema = new mongoose.Schema({
  author: String,
  averageRating: Number,
  body: String,
  likes: { type: Number, default: 0 },
  stars: { type: Number, default: 0 },
  recommended: Boolean,
  productId: String
},
{
  timestamps: true
}
);

const Reviews = mongoose.model('Reviews', reviewSchema);

module.exports = Reviews;