const express = require('express');
const bodyParser = require('body-parser');

const path = require('path');
const Reviews = require('../db-mongo/Review.js');

const app = express();
const PORT = 3007;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/../react-client/dist')));

app.get('/reviews', (req, res) => {
  Reviews.find((err, result) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.log('Error! ', err);
      res.sendStatus(404);
      throw new Error(err);
    } else {
      // eslint-disable-next-line no-console
      res.sendStatus(200);
      return result;
    }
  });
});

app.get('/review/:productId', (req, res) => {
  const starCount = {};
  const reviewData = {};
  const { productId } = req.params;
  Reviews.findOne({ product_id: productId.toUpperCase() }, (err, result) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.log('Error! ', err);
      res.sendStatus(404);
      throw new Error(err);
    } else {
      const { reviews } = result;
      reviews.forEach((review) => {
        const { stars } = review;
        if (starCount[stars] === undefined) {
          starCount[stars] = 1;
        } else {
          starCount[stars] += 1;
        }
      });
      let count = 0;
      Object.entries(starCount).forEach((x) => {
        count += (x[0] * x[1]);
      });
      count /= reviews.length;
      // eslint-disable-next-line no-console
      reviewData.average_stars = Math.round(count);
      reviewData.review_count = reviews.length;
      res.status(200);
      res.json(reviewData);
    }
  });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port http://localhost:${PORT}`);
});
