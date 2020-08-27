/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import Graph from './Graph.jsx';
import Recommended from './Recommended.jsx';

const ReviewSummary = ({
  summary: {
    reviewCount, product, averageStars, recommended,
  }, stars,
}) => (
  <article>
    <header id="review-header">
      <h1>
        Customer Reviews
      </h1>
      <h2>
        {product}
      </h2>
      <div id="review-star-total">
        <span>
          {reviewCount}
          {' '}
          Reviews
        </span>
        <span>
          {averageStars}
          {' '}
          out of 5 stars
        </span>
      </div>
    </header>
    <section>
      <div>
        <p>Filter reviews by star rating</p>
        <Graph stars={stars} recommended={recommended} />
      </div>
      <span>
        <Recommended />
      </span>
    </section>
  </article>
);

ReviewSummary.propTypes = {
  stars: PropTypes.arrayOf(Number).isRequired,
  summary: PropTypes.shape({
    averageStars: PropTypes.number,
    product: PropTypes.string,
    recommended: PropTypes.number,
    reviewCount: PropTypes.number,
  }).isRequired,
};

export default ReviewSummary;
