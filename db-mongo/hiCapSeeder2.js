const faker = require('faker');
const { createReadStream, createWriteStream } = require('fs')

function generateFakeReviews(totalBatches, batchSize, fileName) {
  let header = createWriteStream(fileName);
  header.write('productid, likes, stars, title, author, body, recommended\n');
  let reviewCounter = 0;
  for (let k = totalBatches; k > 0; k--) {
    for (let i = 0; i < batchSize; i++) {
      let randomNumberOfReviews = Math.floor(Math.random() * 5) + 1;
      //let randomNumberOfReviews = 1;
      for (let j = randomNumberOfReviews; j > 0; j--) {
        let productId = i + 1;
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
  }
  console.log(`Total Reviews: ${reviewCounter}`)
}


generateFakeReviews(1, 100, 'reviews.csv');

