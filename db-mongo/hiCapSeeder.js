const faker = require('faker');
const fs = require('fs');

function generateFakeReview () {
  let fakeReviews = [];
  for (i = 0; i < 10; i++) {
    let fakeLikes = faker.random.number(105);
    let fakeStars = faker.random.number(5);
    let fakeTitle = faker.lorem.sentence();
    let fakeAuthor = faker.name.findName();
    let fakeBody = faker.lorem.paragraph();
    let fakeRecommended = faker.random.boolean();
    fakeReviews.push(
      {
        "likes": fakeLikes,
        "stars": fakeStars,
        "title": fakeTitle,
        "author": fakeAuthor,
        "body": fakeBody,
        "recommended": fakeRecommended
      }
    )
  }
}



