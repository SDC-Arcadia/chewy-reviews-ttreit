/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PhotoContainer = styled.div`
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
  border-radius: 2px;
`;

const Header = styled.header`
> span > h2 {
  margin-top: 0;
}
  background-color: #F5F5F5;
`;

const Container = styled.div`
  margin: auto;
  background-color: #FFFFFF;
  width: 30%;
`;

const PhotoDiv = styled.div`
  float: left;
`;
const ReviewDiv = styled.div`
  overflow: hidden;
`;

const randomNum = (min, max) => Math.floor(Math.random() * (max - min) + min);

const PhotoPortal = ({ photo, handlePortalClose, allReviews }) => (
  <PhotoContainer>
    <Container>
      <Header>
        <span>
          <h2>All Photos</h2>
        </span>
        <span>
          <span>
            <button type="button">Previous</button>
          </span>
          <span>
            <button type="button">Next</button>
          </span>
        </span>
      </Header>
      <article>
        <PhotoDiv>
          <img src={photo} alt="" onClick={handlePortalClose} />
        </PhotoDiv>
        <ReviewDiv>
          <span>
            {allReviews[randomNum(0, 800)].body}
          </span>
        </ReviewDiv>
      </article>
    </Container>
  </PhotoContainer>
);

PhotoPortal.propTypes = {
  photo: PropTypes.string.isRequired,
  handlePortalClose: PropTypes.func.isRequired,
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
};

export default PhotoPortal;
