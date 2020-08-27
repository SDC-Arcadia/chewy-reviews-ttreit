/* eslint-disable no-console */
/* eslint-disable import/extensions */
import React from 'react';
import Graph from './Graph.jsx';

const axios = require('axios');

class Reviews extends React.Component {
  constructor() {
    super();
    this.state = {
      reviewData: [],
      reviewSummary: [],
      stars: [],
      search: '',
    };
    this.onChange = this.onChange.bind(this);
    this.getReviews = this.getReviews.bind(this);
    this.getReviewSummary = this.getReviewSummary.bind(this);
  }

  componentDidMount() {
    this.getReviews('P020');
    this.getReviewSummary('P020');
  }

  onChange(e) {
    const store = this.state;
    store[e.target.name] = e.target.value;
    this.setState(store);
  }

  getReviews(productId) {
    const url = `/reviewData/${productId}`;
    axios.get(url)
      .then((data) => this.setState({ reviewData: data.data }))
      .catch((err) => {
        if (err) {
          console.log('Error! ', err);
        }
      });
  }

  getReviewSummary(e) {
    // e.preventDefault();
    // const { search } = this.state;
    const url = `/reviewSummary/${e}`;
    axios.get(url)
      .then((data) => {
        const percentageStarred = [];
        const starObj = data.data.total_stars;
        const reviewCount = data.data.review_count;
        Object.entries(starObj).forEach((x) => {
          percentageStarred.push(Math.round((x[1] / reviewCount) * 100));
        });
        this.setState({ stars: percentageStarred });
        this.setState({ reviewSummary: data.data });
      })
      .catch((err) => {
        if (err) {
          console.log('Error! ', err);
        }
      });
  }

  render() {
    const styles = {
      color: 'blue',
      paddingRight: '0.5em',
    };
    const { reviewSummary } = this.state;
    const { stars } = this.state;
    const { search } = this.state;
    return (
      <article>
        <form onSubmit={this.getReviewSummary}>
          <input type="text" name="search" value={search} onChange={this.onChange} />
        </form>
        <header id="review-header">
          <h2 id="customer-header">Customer Reviews</h2>
          <div id="review-star-total">
            <span id="total_stars" style={styles}>
              {reviewSummary.review_count}
              {' '}
              Reviews
            </span>
            <span id="average_stars" style={styles}>
              {reviewSummary.average_stars}
              {' '}
              out of 5 stars
            </span>
          </div>
        </header>
        <section>
          <div>
            <p>Filter reviews by star rating</p>
            <Graph stars={stars} />
          </div>
        </section>
      </article>
    );
  }
}

/**
 * <article>
 *  <header>
 *    <h2>Customer Reviews</h2>
 *    <div>Total Reviews | Stars</div>
 *  </header>
 *  <section>
 *   <div class="left graph">
 *    <a/>
 *    <a/>
 *    <a/>
 *    <a/>
 *    <a/>
 *   </div>
 *   <div class="right radial dial">
 *     <div clas="radial dial div wrapper">
 *      <div class="radial dial"></div>
 *      <p>94% of reviewers recommend this product</p>
 *      <button>Write a Review</button>
 *     </div>
 *   </div>
 *  </section>
 * </article>
 */

export default Reviews;
