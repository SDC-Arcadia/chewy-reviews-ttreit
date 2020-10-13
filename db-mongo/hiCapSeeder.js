const faker = require('faker');
const { createReadStream, createWriteStream } = require('fs')

function generateFakeReviews () {
  //  create source
  for (i = 0; i < 5; i++) {
    let fakeLikes = faker.random.number(105);
    let fakeStars = faker.random.number(5);
    let fakeTitle = faker.lorem.sentence();
    let fakeAuthor = faker.name.findName();
    let fakeBody = faker.lorem.paragraph();
    let fakeRecommended = faker.random.boolean();

    let review = `${fakeLikes}, ${fakeStars}, ${fakeTitle}, ${fakeAuthor}, ${fakeBody}, ${fakeRecommended}`;
    console.log(i);
    console.log(review);
  }
}
generateFakeReviews();

//TODO review stream pipeline and how streaming and pipeline work

// const testLine = 'Likes, Stars, Title, Author, Body, Recommended\n'
// const testLine2 = '12, 3, My Title, Tammy, Body of review, true\n'
// let testWriteStream = fs.createWriteStream(__dirname + '/testCsvDoc.csv');

// testWriteStream.write(testLine);
// testWriteStream.write(testLine2);
