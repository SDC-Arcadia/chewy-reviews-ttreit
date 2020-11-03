# Documentation for System Design

## Reviews Form UI
- Do you recommend (checkbox)
- Star rating (1-5)
- Nickname
- Headline for Review
- Review Text
- Add photo

## Reviews - API Reference
### GET /reviewData/:productId
- http://chewy.com/reviewData/?productId=71
- Returns an array of all of the review documents related to the requested product

### GET /reviewSummary/:productId
- http://chewy.com/reviewSummary/?productId=71
- Returns specific data for display including average stars, total stars, percentage of reviewers that recommended the product, and how many reviews the product has.

### GET /filterReviews/:productId/:starRating
- http://chewy.com/filterReviews/?productId=71&starRating=3
- Returns reviews for the specified product that have the specified star rating.

### POST /addReview/
- http://chewy.com/addReview/
-  schema: {
    product_id: { type: Number, required: true },
    title: { type: String, required: true },
    author: { type: String, required: true },
    create_date: { type: Date, default: Date.now },
    body: { type: String, required: true },
    likes: { type: Number, default: 0, required: true },
    stars: { type: Number, default: 0, required: true },
    recommended: Boolean,
  }

**Note :id for all Patch requests is the review id. See schema above for data types**
### PATCH /updateReviewLikes/:id
- http://chewy.com/updateReviewLikes/5f8e66e49efa78d77e9d0400
- { "likes": 23 }

### PATCH /updateReviewStars/:id
- http://chewy.com/updateReviewStars/5f8e66e49efa78d77e9d0400
- { "stars": 4 }

### PATCH /updateReviewTitle/:id
- http://chewy.com/updateReviewTitle/5f8e66e49efa78d77e9d0400
- { "title": "New Title" }

### PATCH /updateReviewAuthor/:id
- http://chewy.com/updateReviewAuthor/5f8e66e49efa78d77e9d0400
- { "author": "John McClane" }

### PATCH /updateReviewBody/:id
- http://chewy.com/updateReviewBody/5f8e66e49efa78d77e9d0400
- { "body": "This is a review of a product." }

### PATCH /updateReviewRecommended/:id
- http://chewy.com/updateReviewRecommended/5f8e66e49efa78d77e9d0400
- { "recommended": true }

### DELETE /deleteReview/:id
- - http://chewy.com/deleteReview/5f8e66e49efa78d77e9d0400
- Deletes specified review

## Node Version
14.13.1