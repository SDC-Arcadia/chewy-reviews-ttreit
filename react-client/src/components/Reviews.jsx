/* eslint-disable no-console */
/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import ReviewSummary from './ReviewSummary.jsx';
import ReviewPhotos from './ReviewPhotos.jsx';
import ReviewList from './ReviewList.jsx';

const ArticleContainer = styled.article`
  margin: 32px 121.5px 0px;
  padding: 0px 60px;
`;

const SectionContainer = styled.section`
  margin: 0px 0px 24px;
  padding 55px 24px 16px;
`;

const axios = require('axios');

const SERVER_URL = 'http://ec2-204-236-154-81.us-west-1.compute.amazonaws.com:3007';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewData: [],
      reviewSummary: {},
      stars: [],
    };
    this.getReviews = this.getReviews.bind(this);
    this.getReviewSummary = this.getReviewSummary.bind(this);
  }

  componentDidMount() {
    // eslint-disable-next-line no-undef
    const parsedUrl = new URL(window.location.href);
    const productId = parsedUrl.searchParams.get('productId');
    this.getReviews(productId);
    this.getReviewSummary(productId);
  }

  getReviews(productId) {
    const url = `${SERVER_URL}/reviewData/${productId}`;
    axios.get(url)
      .then((response) => this.setState({ reviewData: response.data }))
      .catch((err) => {
        console.log('Error calling endpoint! ', err);
      });
  }

  getReviewSummary(productId) {
    const url = `${SERVER_URL}/reviewSummary/${productId}`;
    axios.get(url)
      .then((response) => {
        const percentageStarred = [];
        const averageStars = response.data.average_stars;
        const { recommended } = response.data;
        const totalStars = response.data.total_stars;
        const reviewCount = response.data.review_count;
        const product = response.data.product_id;
        Object.entries(totalStars).forEach((x) => {
          percentageStarred.push(Math.round((x[1] / reviewCount) * 100));
        });
        this.setState({ stars: percentageStarred });
        this.setState({
          reviewSummary: {
            averageStars,
            reviewCount,
            recommended,
            totalStars,
            product,
          },
        });
      })
      .catch((err) => {
        console.log('Error calling endpoint! ', err);
      });
  }

  render() {
    const { reviewSummary, reviewData } = this.state;
    const { stars } = this.state;

    return (
      <ArticleContainer>
        {
          reviewData.length ? (
            <>
              <ReviewSummary
                summary={reviewSummary}
                allReviews={reviewData}
                stars={stars}
              />
              <SectionContainer>
                <ReviewList summary={reviewSummary} allReviews={reviewData} />
                <ReviewPhotos />
              </SectionContainer>
            </>
          )
            : <div>Loading Reviews...</div>
        }
      </ArticleContainer>
    );
  }
}

export default Reviews;
