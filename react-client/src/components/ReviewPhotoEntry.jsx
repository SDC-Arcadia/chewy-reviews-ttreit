import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const PhotoBox = styled.div`
`;

const ReviewPhotoEntry = ({ photo }) => (
  <PhotoBox>
    <span><img src={photo} alt="" height="70px" width="70px" /></span>
  </PhotoBox>
);

ReviewPhotoEntry.propTypes = {
  photo: PropTypes.string.isRequired,
};

export default ReviewPhotoEntry;
