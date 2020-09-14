import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import thumbsUp from '../images/thumbs-up.png';

const ReviewTitle = styled.div`
  > h4 {
    display: inline-block;
    font-family: Roboto;
    font-weight: 600;
    font-size: 16px;
  }
`;

const AuthorInfo = styled.p`
  margin: 5px 0;
  > span {
    font-family: Roboto;
    font-weight: 400;
    font-size: 14px;
    color: #999999;
  }
`;

const ListStyle = styled.li`
  list-style: none;
  padding-top: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid #ddd;
  > p {
    font-family: Roboto;
    font-weight: 400;
    font-size: 16px;
    color: #555555;
    margin-top: -6px;
    margin-bottom: 20px;
  }
`;
const LikeButton = styled.button`
  &:hover {
    color: #163977;
    border-color: #163977;
  }
  background: #ffffff;
  cursor: pointer;
  border: 0.1rem solid #dddddd;
  border-radius: 4px;
  box-shadow: 0 0.1rem 0 0 #dddddd;
  padding: 11px 16px;
  margin-right: 0.5rem;
  text-align: center;
  font-family: Roboto;
  font-weight: 400;
  > span {
    margin-right: 0.5rem;
  }
`;

const ReviewEntry = ({
  author, body, title, stars, likes, createdate, id,
}) => (
  <ListStyle key={id}>
    <ReviewTitle>
      <span>
        {stars}
        {' '}
        out of 5 stars
      </span>
      <h4>{title}</h4>
    </ReviewTitle>
    <AuthorInfo>
      <span>
        By
        {' '}
        {author}
        on
        {' '}
        {createdate}
      </span>
    </AuthorInfo>
    <p>
      {body}
    </p>
    <footer>
      <LikeButton type="button">
        <span>{likes}</span>
        <img src={thumbsUp} alt="" height="17px" />
      </LikeButton>
    </footer>
  </ListStyle>
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
