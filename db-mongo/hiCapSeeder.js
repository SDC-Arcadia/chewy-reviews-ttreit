const faker = require('faker');
const { createReadStream, createWriteStream } = require('graceful-fs')

function generateFakeReviews (itemQuantity, filename) {
  let header = createWriteStream(filename);
  header.write('id,product_id,likes,stars,title,author,create_date,body,recommended\n');
  let counter = 0;

  const reviewsWriteStream = createWriteStream(filename, {flags: 'a'});


  (async () => {
      for (i = 0; i < itemQuantity; i++) {
        let randomNumberOfReviews = Math.floor(Math.random() * 5) + 1;

        for (j = randomNumberOfReviews; j > 0; j--) {
          let id = counter + 1;
          let productId = i + 1;
          let fakeLikes = faker.random.number(105);
          let fakeStars = faker.random.number(5);
          let fakeTitle = faker.lorem.sentence();
          let fakeAuthor = faker.name.findName();
          let fakeDate = faker.date.recent();
          let fakeBody = faker.lorem.paragraph();
          let fakeRecommended = faker.random.boolean();

          let review = `${id},${productId},${fakeLikes},${fakeStars},"${fakeTitle}","${fakeAuthor}","${fakeDate}","${fakeBody}",${fakeRecommended}\n`;
          counter ++;
          if (!reviewsWriteStream.write(review)) {
            await new Promise(resolve => reviewsWriteStream.once('drain', resolve));
          }
          }
        }
        console.log (`Total Reviews: ${counter}`)
    })();


}

generateFakeReviews(10000000, 'reviews.csv');

