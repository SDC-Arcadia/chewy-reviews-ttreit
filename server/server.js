/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const Reviews = require('../db-mongo/Review.js');

const PORT = process.env.PORT || 3007;
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/../react-client/dist')));

//  GET Requests
app.get('/reviewData/:productId', (req, res) => {
  const { productId } = req.params;
  Reviews.findOne({ product_id: productId.toUpperCase() }, (err, result) => {
    if (!result) {
      console.log('Error querying database! ', err);
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
      console.log('Error querying database! ', err);
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

app.get('/filterReviews/:productId/:starRating', (req, res) => {
  const { starRating } = req.params;
  const { productId } = req.params;
  Reviews.findOne({ product_id: productId.toUpperCase() }, (err, result) => {
    if (!result) {
      console.log('Error querying database! ', err);
      res.sendStatus(404);
    } else {
      const match = result.reviews.filter((reviews) => reviews.stars === (Number(starRating)));
      res.status(200);
      res.json(match);
    }
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../react-client/dist', 'index.html'));
});

//  POST request
app.post('/addReview/:productId', (req, res) => {
  const { productId } = req.params;
  // If I don't stringify req.body and then console.log req.body I get [object, Object]
  //  I don't understand why but if I stringify, then parse it works fine.
  //  TODO figure out why this is happening and fix it
  let reqBody = JSON.stringify(req.body);
  reqBody = JSON.parse(reqBody);
  const query = productId.toUpperCase();

  //  I was not able to figure out findOneAndUpdate when pushing to an array.
  //  TODO refactor to use findOneAndUpdate
  Reviews.findOne(
    { product_id: query },
    (err, result) => {
      if (err) {
        console.log(`Error querying database for product # ${query}`);
        console.error(err);
        res.sendStatus(404);
      } else {
        result.reviews.push(reqBody);
        result.save((saveError, updatedReviews) => {
          if (saveError) {
            console.error(saveError);
          } else {
            const { reviews } = updatedReviews;
            //  log last insertion
            console.log(reviews[reviews.length - 1]);
            res.sendStatus(200);
          }
        });
      }
    },
  );
});

// Update Reviews routes - 1 per review field
app.patch('/updateReviewlikes/:productId', (req, res) => {
  const { productId } = req.params;
  const updateData = req.body;
  const productNumber = productId.toUpperCase();
  //  TODO Refactor - this method is deprecated
  Reviews.update(
    // eslint-disable-next-line
    { "product_id": productNumber, "reviews._id": updateData._id },
    // eslint-disable-next-line
    { "$set": { "reviews.$.likes": updateData.likes }},
    (err) => {
      if (err) {
        console.log(err);
      } else {
        res.sendStatus(200);
      }
    },
  );
});

app.patch('/updateReviewStars/:productId', (req, res) => {
  const { productId } = req.params;
  const updateData = req.body;
  const productNumber = productId.toUpperCase();
  //  TODO Refactor - this method is deprecated
  Reviews.update(
    // eslint-disable-next-line
    { "product_id": productNumber, "reviews._id": updateData._id },
    // eslint-disable-next-line
    { "$set": { "reviews.$.stars": updateData.stars }},
    (err) => {
      if (err) {
        console.log(err);
      } else {
        res.sendStatus(200);
      }
    },
  );
});

app.patch('/updateReviewTitle/:productId', (req, res) => {
  const { productId } = req.params;
  const updateData = req.body;
  const productNumber = productId.toUpperCase();
  //  TODO Refactor - this method is deprecated
  Reviews.update(
    // eslint-disable-next-line
    { "product_id": productNumber, "reviews._id": updateData._id },
    // eslint-disable-next-line
    { "$set": { "reviews.$.title": updateData.title }},
    (err) => {
      if (err) {
        console.log(err);
      } else {
        res.sendStatus(200);
      }
    },
  );
});

app.patch('/updateReviewAuthor/:productId', (req, res) => {
  const { productId } = req.params;
  const updateData = req.body;
  const productNumber = productId.toUpperCase();
  //  TODO Refactor - this method is deprecated
  Reviews.update(
    // eslint-disable-next-line
    { "product_id": productNumber, "reviews._id": updateData._id },
    // eslint-disable-next-line
    { "$set": { "reviews.$.author": updateData.author }},
    (err) => {
      if (err) {
        console.log(err);
      } else {
        res.sendStatus(200);
      }
    },
  );
});

app.patch('/updateReviewBody/:productId', (req, res) => {
  const { productId } = req.params;
  const updateData = req.body;
  const productNumber = productId.toUpperCase();
  //  TODO Refactor - this method is deprecated
  Reviews.update(
    // eslint-disable-next-line
    { "product_id": productNumber, "reviews._id": updateData._id },
    // eslint-disable-next-line
    { "$set": { "reviews.$.body": updateData.body }},
    (err) => {
      if (err) {
        console.log(err);
      } else {
        res.sendStatus(200);
      }
    },
  );
});

app.patch('/updateReviewRecommended/:productId', (req, res) => {
  const { productId } = req.params;
  const updateData = req.body;
  const productNumber = productId.toUpperCase();
  //  TODO Refactor - this method is deprecated
  Reviews.update(
    // eslint-disable-next-line
    { "product_id": productNumber, "reviews._id": updateData._id },
    // eslint-disable-next-line
    { "$set": { "reviews.$.recommended": updateData.recommended }},
    (err) => {
      if (err) {
        console.log(err);
      } else {
        res.sendStatus(200);
      }
    },
  );
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port http://localhost:${PORT}`);
});
