import React from 'react';
import PropTypes from 'prop-types';

const ReviewEntry = ({
  author, body, title, stars, likes, createdate, id,
}) => (
  <li key={id}>
    <span>
      {stars}
      {' '}
      out of 5 stars
      <h1>{title}</h1>
    </span>
    <p>
      <small>
        By
        {' '}
        {author}
        on
        {' '}
        {createdate}
      </small>
    </p>
    <p>
      {body}
    </p>
    <span>
      Likes:
      {likes}
    </span>
  </li>
);

ReviewEntry.propTypes = {
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdate: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,

};

export default ReviewEntry;
