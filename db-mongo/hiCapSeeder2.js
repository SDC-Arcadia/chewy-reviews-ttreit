const faker = require('faker');
const { createReadStream, createWriteStream } = require('fs')
const { Readable } = require('stream');
const { pipeline } = require('stream');
const util = require('util');
//const fs = require('fs');

function generateFakeReviews (filename) {
  let header = createWriteStream(filename);
  header.write('productid, likes, stars, title, author, body, recommended\n');
  let counter = 0;
  for (i = 0; i < 10000000; i++) {
    let randomNumberOfReviews = Math.floor(Math.random() * 5) + 1;
    for (j = randomNumberOfReviews; j > 0; j--) {
      let productId = i + 1;
      let fakeLikes = faker.random.number(105);
      let fakeStars = faker.random.number(5);
      let fakeTitle = faker.lorem.sentence();
      let fakeAuthor = faker.name.findName();
      let fakeBody = faker.lorem.paragraph();
      let fakeRecommended = faker.random.boolean();

      let review = `${productId}, ${fakeLikes}, ${fakeStars}, ${fakeTitle}, ${fakeAuthor}, ${fakeBody}, ${fakeRecommended}\n`;
      //console.log('generator i', i);
      //console.log('generator review', review);
      counter ++;
      //  console.log('total reviews', counter);
      //  console.log('**', review);
      let reviewsWriteStream = createWriteStream(filename, {flags: 'a'});
      reviewsWriteStream.write(review);
    }
  }
  console.log (`Total Reviews: ${counter}`)
}

generateFakeReviews('reviews.csv');

//TODO review stream pipeline and how streaming and pipeline work

// const testLine = 'Likes, Stars, Title, Author, Body, Recommended\n'
// const testLine2 = '12, 3, My Title, Tammy, Body of review, true\n'
// let testWriteStream = fs.createWriteStream(__dirname + '/testCsvDoc.csv');

// testWriteStream.write(testLine);
// testWriteStream.write(testLine2);
