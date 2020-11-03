# Documentation for System Design

## Node Version
14.13.1

## Reviews - API Reference
### GET /reviewData/:productId
- http://localhost:3007/reviewData/?productId=71
- Returns an array of all of the review documents related to the requested product

### GET /reviewSummary/:productId
- http://localhost:3007/reviewSummary/?productId=71
- Returns specific data for display including average stars, total stars, percentage of reviewers that recommended the product, and how many reviews the product has.

### GET /filterReviews/:productId/:starRating
- http://localhost:3007/filterReviews/?productId=71&starRating=3
- Returns reviews for the specified product that have the specified star rating.

### POST /addReview/
- http://localhost:3007/addReview/
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

### PATCH Requests
**Note :id for all Patch requests is the review id. See schema in the POST /addReview/ section for data types**
### PATCH /updateReviewLikes/:id
- http://localhost:3007/updateReviewLikes/5f8e66e49efa78d77e9d0400
- { "likes": 23 }

### PATCH /updateReviewStars/:id
- http://localhost:3007/updateReviewStars/5f8e66e49efa78d77e9d0400
- { "stars": 4 }

### PATCH /updateReviewTitle/:id
- http://localhost:3007/updateReviewTitle/5f8e66e49efa78d77e9d0400
- { "title": "New Title" }

### PATCH /updateReviewAuthor/:id
- http://localhost:3007/updateReviewAuthor/5f8e66e49efa78d77e9d0400
- { "author": "John McClane" }

### PATCH /updateReviewBody/:id
- http://localhost:3007/updateReviewBody/5f8e66e49efa78d77e9d0400
- { "body": "This is a review of a product." }

### PATCH /updateReviewRecommended/:id
- http://localhost:3007/updateReviewRecommended/5f8e66e49efa78d77e9d0400
- { "recommended": true }

### DELETE /deleteReview/:id
- http://localhost:3007/deleteReview/5f8e66e49efa78d77e9d0400
- Deletes specified review

