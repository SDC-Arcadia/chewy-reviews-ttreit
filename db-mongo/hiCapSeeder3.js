const faker = require('faker');
const { createReadStream, createWriteStream } = require('fs')
let reviewCounter = 0;

function generateFakeReviews(fileName, id) {
      let randomNumberOfReviews = Math.floor(Math.random() * 5) + 1;
      //let randomNumberOfReviews = 1;
      for (let i = randomNumberOfReviews; i > 0; i--) {
        let productId = id;
        let fakeLikes = faker.random.number(105);
        let fakeStars = faker.random.number(5);
        let fakeTitle = faker.lorem.sentence();
        let fakeAuthor = faker.name.findName();
        let fakeBody = faker.lorem.paragraph();
        let fakeRecommended = faker.random.boolean();
        let review = `${productId}, ${fakeLikes}, ${fakeStars}, ${fakeTitle}, ${fakeAuthor}, ${fakeBody}, ${fakeRecommended}\n`;
        reviewCounter++;
        let reviewsWriteStream = createWriteStream(fileName, { flags: 'a' });
        reviewsWriteStream.write(review);
      }
    }

function createAllReviews(itemsPerBatch, totalBatches, fileName) {
  let header = createWriteStream(fileName);
  header.write('productid, likes, stars, title, author, body, recommended\n');
  for (let i = totalBatches; i > 0; i--) {
    for (let id = 0; id < itemsPerBatch; id++) {
      generateFakeReviews(fileName, id + 1)
    }
  }
  console.log(`Total Reviews: ${reviewCounter}`)

}

createAllReviews(100, 5, 'newreviewtest.csv');



