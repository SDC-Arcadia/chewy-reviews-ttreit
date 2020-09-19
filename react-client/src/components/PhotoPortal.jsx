import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Photo = styled.div`
  background-color: rgba(0,0,0,0.5);
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: grid;
  align-content: center;
  justify-content: center;
  z-index: 999;
`;

const PhotoPortal = ({ photo, handlePortalClose }) => (
  <Photo onClick={handlePortalClose}>
    <img src={photo} alt="" />
  </Photo>
);

PhotoPortal.propTypes = {
  photo: PropTypes.string.isRequired,
  handlePortalClose: PropTypes.func.isRequired,
};

export default PhotoPortal;
