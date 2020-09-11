import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const RecommendedContainer = styled.div`
  .front {
    transform: rotate(-90deg);
    transform-origin: center;
    stroke: #FF9800;
    stroke-width: 2;
    stroke-dasharray: ${(props) => props.recommended}, 100;
    stroke-linecap: square;
    fill: none;
  }
  .back {
    stroke: #ecf0f1;
    stroke-width: 2;
    fill: none;
  }
  .percent-text {
    font-family: Roboto;
    font-size: 10px;
    font-weight: 300;
  }
  .sub-text {
    font-family: Roboto;
    font-size: 2px;
    font-weight: 400;

  }
`;

const Recommended = ({ recommended }) => (
  <RecommendedContainer recommended={recommended}>
    <svg className="circle-chart" viewBox="0 0 33.83098862 33.83098862" width="150" height="150">
      <circle className="back" cx="16.91549431" cy="16.91549431" r="15.91549431" />
      <circle className="front" cx="16.91549431" cy="16.91549431" r="15.91549431" />
      <text className="percent-text" x="16.91549431" y="15.5" alignmentBaseline="central" textAnchor="middle">
        {recommended}
        %
      </text>
      <text className="sub-text" x="16.91549431" y="20.5" alignmentBaseline="central" textAnchor="middle">RECOMMEND</text>
    </svg>
  </RecommendedContainer>
);

Recommended.propTypes = {
  recommended: PropTypes.number.isRequired,
};

export default Recommended;
