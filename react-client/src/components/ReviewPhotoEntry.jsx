/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';

const ReviewPhotoEntry = ({ photo, handlePortalCreate }) => (
  <img onClick={() => handlePortalCreate(photo)} src={photo} alt="" height="70px" width="70px" />
);

ReviewPhotoEntry.propTypes = {
  photo: PropTypes.string.isRequired,
  handlePortalCreate: PropTypes.func.isRequired,
};

export default ReviewPhotoEntry;
