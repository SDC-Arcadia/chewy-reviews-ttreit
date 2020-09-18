/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Graph from './Graph.jsx';
import Recommended from './Recommended.jsx';

import oneStar from '../images/rating-1.svg';
import twoStar from '../images/rating-2.svg';
import threeStar from '../images/rating-3.svg';
import fourStar from '../images/rating-4.svg';
import fiveStar from '../images/rating-5.svg';

const GraphContainer = styled.div`
  float: left;
  width: 25%;
  > a > span {
    font-family: Roboto, sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: #0e70be;
    cursor: pointer;
  }
  > p {
    font-family: Roboto, sans-serif;
    font-weight: 500;
    font-size: 15px;
    color: #333333;
  }
  .left-span {
    float: left;
    padding-right: 15px;
  }
  .right-span {
    float: right;
    padding-left: 15px;
  }
`;

const Section = styled.section`
  overflow: auto;
`;

const RecommendedContainer = styled.div`
  float: right;
  width: 30%;
`;

const ReviewSummaryHeader = styled.header`
  > h1 {
    font-family: Roboto, sans-serif;
    font-weight: 300;
    font-size: 36px;
    color: #333333;
  }
  > div {
    font-family: Roboto, sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: #666666;
    > span > button {
      &:hover {
        text-decoration: underline;
      }
      font-family: inherit;
      font-size: 100%;
      border: 0;
      padding: 0;
      cursor: pointer;
      background: none;
      color: #0B70BE;
    }
  }
  padding: 0px 0px 40px;
`;

const starPicker = {
  1: oneStar,
  2: twoStar,
  3: threeStar,
  4: fourStar,
  5: fiveStar,
};

const ReviewSummary = ({
  summary: {
    reviewCount, averageStars, recommended,
  // eslint-disable-next-line react/prop-types
  }, stars, handleGraphSelect,
}) => (
  <>
    <ReviewSummaryHeader>
      <h1>
        Customer Reviews
      </h1>
      <div>
        <span>
          <img src={starPicker[averageStars]} alt="" />
          <button type="button">
            {reviewCount}
            {' '}
            Reviews
          </button>
        </span>
        <span>
          {' '}
          {'|'}
          {' '}
          {averageStars}
          {' '}
          out of 5 Stars
        </span>
      </div>
    </ReviewSummaryHeader>
    <Section>
      <GraphContainer>
        <Graph stars={stars} handleGraphSelect={handleGraphSelect} />
      </GraphContainer>
      <RecommendedContainer>
        <Recommended recommended={recommended} />
      </RecommendedContainer>
    </Section>
  </>
);

ReviewSummary.propTypes = {
  stars: PropTypes.shape({
    1: PropTypes.number,
    2: PropTypes.number,
    3: PropTypes.number,
    4: PropTypes.number,
    5: PropTypes.number,
  }).isRequired,
  summary: PropTypes.shape({
    averageStars: PropTypes.number,
    product: PropTypes.string,
    recommended: PropTypes.number,
    reviewCount: PropTypes.number,
  }).isRequired,
};

export default ReviewSummary;
