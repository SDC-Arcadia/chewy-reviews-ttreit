/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Graph from './Graph.jsx';
import Recommended from './Recommended.jsx';

const GraphContainer = styled.div`
  float: left;
  width: 25%;
  > p {
    font-family: Roboto, sans-serif;
    font-weight: 500;
    font-size: 15px;
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
  }
  > div {
    font-family: Roboto, sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: #666666;
    > span > button {
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

const ReviewSummary = ({
  summary: {
    reviewCount, averageStars, recommended,
  }, stars,
}) => (
  <>
    <ReviewSummaryHeader>
      <h1>
        Customer Reviews
      </h1>
      <div>
        <span>
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
          out of 5 stars
        </span>
      </div>
    </ReviewSummaryHeader>
    <Section>
      <GraphContainer>
        <Graph stars={stars} />
      </GraphContainer>
      <RecommendedContainer>
        <Recommended recommended={recommended} />
      </RecommendedContainer>
    </Section>
  </>
);

ReviewSummary.propTypes = {
  stars: PropTypes.arrayOf(Number).isRequired,
  summary: PropTypes.shape({
    averageStars: PropTypes.number,
    product: PropTypes.string,
    recommended: PropTypes.number,
    reviewCount: PropTypes.number,
  }).isRequired,
};

export default ReviewSummary;
