/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import ReviewPhotoEntry from './ReviewPhotoEntry.jsx';
// import PropTypes from 'prop-types';

const ReviewPhotosContainer = styled.div`
  width: 100%;
  display: block;
  .header-div {
  display: block;
  margin-bottom: 1.6rem;
}
> div > h3 {
  display: inline-block;
  font-family: Roboto;
  font-weight: 600;
  font-size: 18px;
  color: #333333;
}
  div > button {
    margin-left: 75px;
    &:hover {
      text-decoration: underline;
    }
    font-family: Roboto;
    font-weight: 400;
    font-size: 14px;
    border: 0;
    padding: 0;
    cursor: pointer;
    background: none;
    color: #0B70BE;
  }
`;

const ReviewPhotoEntryGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 0px;
`;

const ReviewPhotos = ({ reviewPhotos }) => (
  <ReviewPhotosContainer>
    <div className="header-div">
      <h3>Customer Photos</h3>
      <button type="button">
        <span>See All Photos</span>
      </button>
    </div>
    <ReviewPhotoEntryGrid>
      {reviewPhotos.slice(0, 8).map((photo) => (
        <ReviewPhotoEntry photo={photo} />
      ))}
    </ReviewPhotoEntryGrid>
  </ReviewPhotosContainer>
);

export default ReviewPhotos;
