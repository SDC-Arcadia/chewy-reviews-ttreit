const faker = require('faker');
const { createReadStream, createWriteStream } = require('fs')
const { Readable } = require('stream');
const { pipeline } = require('stream');
const util = require('util');
//const fs = require('fs');

async function * generateFakeReviews () {
  let counter = 0;
  for (i = 0; i < 10; i++) {
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
    }
  }
}

const readable = Readable.from(generateFakeReviews());

readable.on('data', (chunk) => {
  console.log('readable', chunk);
});


const writable = createWriteStream('./review.csv');

pipeline(readable, writable, (err, value) => {
  if (err) {
    console.error(err);
  } else {

  }
});

const pipelinePromise = util.promisify(pipeline);
pipelinePromise(readable, writable)
  .then((value) => {
    console.log(value, 'value returned');
  })
  .catch(console.error);


//TODO review stream pipeline and how streaming and pipeline work

// const testLine = 'Likes, Stars, Title, Author, Body, Recommended\n'
// const testLine2 = '12, 3, My Title, Tammy, Body of review, true\n'
// let testWriteStream = fs.createWriteStream(__dirname + '/testCsvDoc.csv');

// testWriteStream.write(testLine);
// testWriteStream.write(testLine2);
