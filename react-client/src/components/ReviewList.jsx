/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import PropTypes from 'prop-types';

import ReviewEntry from './ReviewEntry.jsx';

const Header = styled.header`
  padding: 15px;
  background-color: #f9f9f9;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
    > p {
      font-family: Roboto, sans-serif;
      font-weight: 400;
      font-size: 15px;
      color: #333333;
      text-align: left;
      display: inline-block;
    }
    > div {
      float: right;
      margin: 16px 0px;
    }
    > div > label {
      font-family: Roboto, sans-serif;
      font-weight: 400;
      font-size: 15px;
      color: #333333;
    }
`;

const LabelDiv = styled.div`
  > select {
    border: 1px solid #ccc;
    > option {
      font-family: Roboto;
      font-weight: 400;
    }
  }
`;

const ReviewList = ({
  summary: { reviewCount },
  allReviews,
  // eslint-disable-next-line react/prop-types
  handleSelect,
}) => (
  <>
    <h2>
      {reviewCount}
      {' '}
      Reviews
    </h2>
    <Header>
      <p>
        Showing 1-10 of
        {' '}
        {reviewCount}
        {' '}
        Reviews
      </p>
      <LabelDiv>
        <label htmlFor="sort-by">Sort by:</label>
        <select id="sort" onChange={handleSelect}>
          <option value="relevant">Most relevant</option>
          <option value="newest">Newest</option>
          <option value="top_contributor">Top contributors</option>
          <option value="featured">Featured reviews</option>
          <option value="oldest">Oldest</option>
          <option value="highest_rating">Highest rating</option>
          <option value="lowest_rating">Lowest rating</option>
          <option value="photo_reviews">Photo reviews</option>
        </select>
      </LabelDiv>
      <LabelDiv>
        <label htmlFor="filter-by">Filter by:</label>
        <select id="filter" onChange={handleSelect}>
          <option value="all">All stars</option>
          <option value="5">5 stars only</option>
          <option value="4">4 stars only</option>
          <option value="3">3 stars only</option>
          <option value="2">2 stars only</option>
          <option value="1">1 star only</option>
          <option value="">All positive</option>
          <option value="">All critical</option>
        </select>
      </LabelDiv>
    </Header>
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
            createdate={moment(x.create_date).fromNow()}
            recommended={x.recommended}
          />
        ))}
      </ul>
    </div>
  </>
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
