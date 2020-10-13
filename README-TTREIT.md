# Documentation for System Design

## Reviews Form UI
- Do you recommend (checkbox)
- Star rating (1-5)
- Nickname
- Headline for Review
- Review Text
- Add photo

## Reviews - API Reference
GET /reviewData/:productId

GET /reviewSummary/:productId

GET /filterReviews/:productId/:starRating

POST /addReview/:productId

PATCH /updateReviewLikes/:productId

PATCH /updateReviewStars/:productId

PATCH /updateReviewTitle/:productId

PATCH /updateReviewAuthor/:productId

PATCH /updateReviewBody/:productId

PATCH /updateReviewRecommended/:productId

DELETE /deleteProduct/:productId

Note: The schema I inherited is not sustainable for large amounts of data so the schema will change in the future. Therefore I do not currently have a 'delete review' route (it was a little complicated and deemed not a good use of my time to delete a single review as it currently is implemented). I did a 'delete product' route as a placeholder to fill out the CRUD API.

## Node Version
14.13.1