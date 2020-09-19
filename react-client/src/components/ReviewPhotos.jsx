/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ReviewPhotoEntry from './ReviewPhotoEntry.jsx';
import PortalWrapper from './PortalWrapper.jsx';
import PhotoPortal from './PhotoPortal.jsx';

// import PropTypes from 'prop-types';

const ReviewPhotosContainer = styled.div`
  width: 100%;
  display: block;
  .header-div {
  display: block;
  margin-bottom: 1.6rem;
}
> div > h3 {
  text-align: left;
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
  grid-gap: 5px;
`;

class ReviewPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      portalOn: false,
      portalImage: '',
    };
    this.handlePortalCreate = this.handlePortalCreate.bind(this);
    this.handlePortalClose = this.handlePortalClose.bind(this);
  }

  handlePortalCreate(photo) {
    this.setState({
      portalOn: true,
      portalImage: photo,
    });
  }

  handlePortalClose() {
    this.setState({
      portalOn: false,
    });
  }

  render() {
    const { portalOn, portalImage } = this.state;
    const { reviewPhotos, allReviews } = this.props;
    return (
      <>
        <ReviewPhotosContainer>
          <div className="header-div">
            <h3>Customer Photos</h3>
            <button type="button">
              <span>See All Photos</span>
            </button>
          </div>
        </ReviewPhotosContainer>
        <ReviewPhotoEntryGrid>
          {reviewPhotos.slice(0, 8).map((photo) => (
            <ReviewPhotoEntry
              photo={photo}
              handlePortalCreate={this.handlePortalCreate}
            />
          ))}
        </ReviewPhotoEntryGrid>
        {
          portalOn
          && (
            <PortalWrapper>
              <PhotoPortal
                photo={portalImage}
                handlePortalClose={this.handlePortalClose}
                allReviews={allReviews}
              />
            </PortalWrapper>
          )
        }
      </>
    );
  }
}

ReviewPhotos.propTypes = {
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
  reviewPhotos: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};

export default ReviewPhotos;
