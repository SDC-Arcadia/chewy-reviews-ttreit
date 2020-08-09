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
      console.log('result! ', result);
      res.sendStatus(200);
      return result;
    }
  });
});

app.get('/review', (req, res) => {
  const productId = req.body.product_id;
  Reviews.findOne({ product_id: productId }, (err, result) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.log('Error! ', err);
      res.sendStatus(404);
      throw new Error(err);
    } else {
      // eslint-disable-next-line no-console
      console.log('results!! ', result);
      res.sendStatus(200);
      return result;
    }
  });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port http://localhost:${PORT}`);
});
