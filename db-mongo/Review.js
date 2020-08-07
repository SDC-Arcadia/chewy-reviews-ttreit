const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const reviewSchema = new mongoose.Schema({
  productId: String,
  averageRating: Number,
  reviews: [
    {
      author: String,
      body: String,
      likes: { type: Number, default: 0 },
      stars: { type: Number, default: 0 },
      recommended: Boolean,
    }
  ]
},
{
  timestamps: true
}
);

const Reviews = mongoose.model('Reviews', reviewSchema);

module.exports = Reviews;

