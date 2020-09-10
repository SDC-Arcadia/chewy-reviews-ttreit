import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

const ReviewPhotosContainer = styled.div`
  font-family: Roboto;
  font-weight: 600;
  font-size: 18px;
  float: right;
  display: block;
`;

const ReviewPhotos = () => (
  <ReviewPhotosContainer>
    <h3>Customer Photos</h3>
    <p>Content Here</p>
  </ReviewPhotosContainer>
);

export default ReviewPhotos;
