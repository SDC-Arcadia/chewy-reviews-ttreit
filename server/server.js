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
  let { productId } = req.params;
  productId = parseInt(productId, 10);
  Reviews.find({ product_id: productId }, (err, result) => {
    if (!result) {
      console.log('Error querying database! ', err);
      res.sendStatus(404);
    } else {
      res.status(200);
      res.json(result);
    }
  });
});

app.get('/reviewSummary/:productId', (req, res) => {
  const starCount = {};
  const reviewData = {};
  let { productId } = req.params;
  productId = parseInt(productId, 10);
  Reviews.find({ product_id: productId }, (err, result) => {
    if (!result) {
      // eslint-disable-next-line no-console
      console.log('Error querying database! ', err);
      res.sendStatus(404);
    } else {
      const reviews = result;
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
  let { productId } = req.params;
  productId = parseInt(productId, 10);
  Reviews.find({ product_id: productId }, (err, result) => {
    if (!result) {
      console.log('Error querying database! ', err);
      res.sendStatus(404);
    } else {
      const match = result.filter((review) => review.stars === (Number(starRating)));
      res.status(200);
      res.json(match);
    }
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../react-client/dist', 'index.html'));
});

//  POST request
app.post('/addReview/', (req, res) => {
  // If I don't stringify req.body and then console.log req.body I get [object, Object]
  //  I don't understand why but if I stringify, then parse it works fine.
  //  TODO figure out why this is happening and fix it
  let reqBody = JSON.stringify(req.body);
  reqBody = JSON.parse(reqBody);
  const newReview = new Reviews(reqBody);
  newReview.save((err, review) => {
    if (err) {
      console.log('Error writing new document', err);
      res.sendStatus(404);
    } else {
      console.log('Added Review', review);
      res.sendStatus(200);
    }
  });
});

// Update Reviews routes - 1 per review field
app.patch('/updateReviewLikes/:id', (req, res) => {
  const { id } = req.params;
  const updateData = req.body;
  //  TODO Refactor - this method is deprecated
  Reviews.update(
    // eslint-disable-next-line
    { "_id": id },
    // eslint-disable-next-line
    { "$set": { "likes": updateData.likes } },
    (err) => {
      if (err) {
        console.log(err);
      } else {
        res.sendStatus(200);
      }
    },
  );
});

app.patch('/updateReviewStars/:id', (req, res) => {
  const { id } = req.params;
  const updateData = req.body;
  //  TODO Refactor - this method is deprecated
  console.log('STARS', updateData.stars);
  Reviews.update(
    // eslint-disable-next-line
    { "_id": id },
    // eslint-disable-next-line
    { "$set": { "stars": updateData.stars } },
    (err) => {
      if (err) {
        console.log(err);
      } else {
        res.sendStatus(200);
      }
    },
  );
});

app.patch('/updateReviewTitle/:id', (req, res) => {
  const { id } = req.params;
  const updateData = req.body;
  //  TODO Refactor - this method is deprecated
  Reviews.update(
    // eslint-disable-next-line
    { "_id": id },
    // eslint-disable-next-line
    { "$set": { "title": updateData.title } },
    (err) => {
      if (err) {
        console.log(err);
      } else {
        res.sendStatus(200);
      }
    },
  );
});

app.patch('/updateReviewAuthor/:id', (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  //  TODO Refactor - this method is deprecated
  Reviews.update(
    // eslint-disable-next-line
    { "_id": id },
    // eslint-disable-next-line
    { "$set": { "author": updateData.author } },
    (err) => {
      if (err) {
        console.log(err);
      } else {
        res.sendStatus(200);
      }
    },
  );
});

app.patch('/updateReviewBody/:id', (req, res) => {
  const { id } = req.params;
  const updateData = req.body;
  //  TODO Refactor - this method is deprecated
  Reviews.update(
    // eslint-disable-next-line
    { "_id": id },
    // eslint-disable-next-line
    { "$set": { "body": updateData.body } },
    (err) => {
      if (err) {
        console.log(err);
      } else {
        res.sendStatus(200);
      }
    },
  );
});

app.patch('/updateReviewRecommended/:id', (req, res) => {
  const { id } = req.params;
  const updateData = req.body;
  //  TODO Refactor - this method is deprecated
  Reviews.update(
    // eslint-disable-next-line
    { "_id": id },
    // eslint-disable-next-line
    { "$set": { "recommended": updateData.recommended } },
    (err) => {
      if (err) {
        console.log(err);
      } else {
        res.sendStatus(200);
      }
    },
  );
});

//  Delete review
app.delete('/deleteReview/:id', (req, res) => {
  const { id } = req.params;
  console.log('ID', id);
  Reviews.deleteOne({ _id: id },
    (err) => {
      if (err) {
        console.error(err);
        res.sendStatus(404);
      } else {
        res.sendStatus(200);
      }
    });
});

// Delete review route
// Help Desk with Troy - he said this is not a sustainable model and recommended I setup a way to
//  delete an item for now, rather than a review.
//  TODO - come back and learn how to delete from an array
//  Following app.patch is WIP
// app.patch('/updateReview/:productId', (req, res) => {
//   const { productId } = req.params;
//   const updateData = req.body;
//   const productNumber = productId.toUpperCase();
//   // eslint-disable-next-line
//   console.log('updateData', updateData._id);
//   console.log(res);

//   Reviews.updateOne(
//     { product_id: productNumber },
//     // eslint-disable-next-line
//     { $pullAll: { _id: [updateData._id] } },
//   );
// });

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port http://localhost:${PORT}`);
});
