/* eslint-disable no-console */
/* eslint-disable import/extensions */
import React from 'react';
import ReviewSummary from './ReviewSummary.jsx';
import ReviewList from './ReviewList.jsx';

const axios = require('axios');

const SERVER_URL = 'http://ec2-18-144-100-44.us-west-1.compute.amazonaws.com:3007';

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
    let productId = parsedUrl.searchParams.get('productId');
    if (productId === null || productId.length !== 4 || parseInt(productId.slice(1), 10) > 100) {
      productId = undefined;
    }
    this.getReviews(productId);
    this.getReviewSummary(productId);
  }

  getReviews(productId = 'P001') {
    const url = `${SERVER_URL}/reviewData/${productId}`;
    axios.get(url)
      .then((response) => this.setState({ reviewData: response.data }))
      .catch((err) => {
        console.log('Error calling endpoint! ', err);
      });
  }

  getReviewSummary(productId = 'P001') {
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
      <>
        <ReviewSummary
          summary={reviewSummary}
          allReviews={reviewData}
          stars={stars}
        />
        <ReviewList summary={reviewSummary} allReviews={reviewData} />
      </>

    );
  }
}

export default Reviews;
