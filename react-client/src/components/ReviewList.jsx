/* eslint-disable no-underscore-dangle */
/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';

import ReviewEntry from './ReviewEntry.jsx';

const ReviewList = ({ summary: { reviewCount }, allReviews }) => (
  <section>
    <div>
      <h3>
        {reviewCount}
        {' '}
        reviews
      </h3>
      <header>
        <p>
          Showing 1-10 of
          {' '}
          {reviewCount}
          {' '}
          reviews
        </p>
        <div>Sort by:</div>
        <div>Filter by:</div>
      </header>
      <div>
        <ul>
          {allReviews.slice(0, 10).map((x) => (
            <ReviewEntry
              key={x._id}
              id={x._id}
              author={x.author}
              body={x.body}
              title={x.title}
              stars={x.stars}
              likes={x.likes}
              createdate={x.create_date}
              recommended={x.recommended}
            />
          ))}
        </ul>
      </div>
    </div>
  </section>
);

ReviewList.propTypes = {
  allReviews: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      author: PropTypes.string,
      body: PropTypes.string,
      create_date: PropTypes.string,
      likes: PropTypes.number,
      recommended: PropTypes.bool,
      title: PropTypes.string,
    }),
  ).isRequired,
  summary: PropTypes.shape({
    averageStars: PropTypes.number,
    product: PropTypes.string,
    recommended: PropTypes.number,
    reviewCount: PropTypes.number,
  }).isRequired,
};

export default ReviewList;
