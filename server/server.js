/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const cors = require('cors');
const Reviews = require('../db-mongo/Review.js');

const PORT = 3007;
const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, '/../react-client/dist')));

app.get('/reviewData/:productId', (req, res) => {
  const { productId } = req.params;
  Reviews.findOne({ product_id: productId.toUpperCase() }, (err, result) => {
    if (!result) {
      console.log('Error! ', err);
      res.sendStatus(404);
    } else {
      const { reviews } = result;
      res.status(200);
      res.json(reviews);
    }
  });
});

app.get('/reviewSummary/:productId', (req, res) => {
  const starCount = {};
  const reviewData = {};
  const { productId } = req.params;
  Reviews.findOne({ product_id: productId.toUpperCase() }, (err, result) => {
    if (!result) {
      // eslint-disable-next-line no-console
      console.log('Error! ', err);
      res.sendStatus(404);
    } else {
      const { reviews } = result;
      let recommendedCount = 0;
      reviews.forEach((review) => {
        const { stars, recommended } = review;
        if (recommended) {
          recommendedCount += 1;
        }
        if (starCount[stars] === undefined) {
          starCount[stars] = 1;
        } else {
          starCount[stars] += 1;
        }
      });
      let count = 0;
      Object.entries(starCount).forEach((review) => {
        count += (review[0] * review[1]);
      });
      count /= reviews.length;
      recommendedCount = (recommendedCount / reviews.length) * 100;
      reviewData.average_stars = Math.round(count);
      reviewData.review_count = reviews.length;
      reviewData.recommended = Math.round(recommendedCount);
      reviewData.total_stars = starCount;
      reviewData.product_id = result.product_id;
      res.status(200);
      res.json(reviewData);
    }
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../react-client/dist', 'index.html'));
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port http://localhost:${PORT}`);
});
