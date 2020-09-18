import React from 'react';
import styled from 'styled-components';

const PhotoBox = styled.div`
`;

const ReviewPhotoEntry = ({ photo }) => (
  <PhotoBox>
    <span><img src={photo} alt="" height="70px" width="70px" /></span>
  </PhotoBox>
);

export default ReviewPhotoEntry;
