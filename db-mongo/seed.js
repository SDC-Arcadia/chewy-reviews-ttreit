const db = require('./index.js');
const Reviews = require('./Review.js');
const fetch = require('node-fetch');

var count = 0;
const insertSampleData = function (type = 'hipster-centric', paras = 5) {
  const randomNum = (max) => {
    return Math.floor(Math.random() * Math.floor(max))
  }
  const sampleReviews = [];

  const url = `https://hipsum.co/api/?type=${type}&paras=${paras}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      data.forEach((x, i) => {
        const review = {
          author: 'Chris',
          averageRating: randomNum(100),
          body: x,
          likes: randomNum(50),
          stars: 6,
          recommended: false,
          productId: `${randomNum(501).toString().length}`
        }
        sampleReviews.push(review)
      })
      return sampleReviews;
    })
    .then(data => {
      Reviews.create(data)
        .then(() => db.disconnect());
    })
};

const loopSampleData = (num, type, paras) => {
  for (var i = 0; i < num; i++ ) {
    insertSampleData(type, paras);
  }
}

loopSampleData(10, 'hipster-centric', 50);