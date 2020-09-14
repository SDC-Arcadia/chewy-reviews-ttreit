import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const RadialGraphContainer = styled.div`
  float: left;
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
    font-family: Roboto, sans-serif;
    font-size: 10px;
    font-weight: 300;
  }
  .sub-text {
    font-family: Roboto, sans-serif;
    font-size: 2px;
    font-weight: 400;
  }
`;

const ButtonContainer = styled.div`
  float: right;
  display: block;
  > button {
    display: inline-block;
    border: 0.1rem solid #163977;
    margin: 0px 15px 0 0;
    padding: 14px 35px;
    color: #163977;
    border-radius 4px;
    background-color: #ffffff;
    cursor: pointer;
    vertical-align: middle;
    font-family: Roboto;
    font-weight: 400;
    font-size: 18px;
  }
  > p {
    font-family: Roboto;
    font-weight: 500;
    font-size: 13px;
    display: block
    text-align: right;
  }
  > p > span {
    display: block;
  }
`;

const Recommended = ({ recommended }) => (
  <>
    <RadialGraphContainer recommended={recommended}>
      <svg className="circle-chart" viewBox="0 0 33.83098862 33.83098862" width="150" height="150">
        <circle className="back" cx="16.91549431" cy="16.91549431" r="15.91549431" />
        <circle className="front" cx="16.91549431" cy="16.91549431" r="15.91549431" />
        <text className="percent-text" x="16.91549431" y="15.5" alignmentBaseline="central" textAnchor="middle">
          {recommended}
          %
        </text>
        <text className="sub-text" x="16.91549431" y="20.5" alignmentBaseline="central" textAnchor="middle">RECOMMEND</text>
      </svg>
    </RadialGraphContainer>
    <ButtonContainer>
      <p>
        <span>
          {recommended}
          % OF REVIEWERS
        </span>
        RECOMMEND THIS PRODUCT
      </p>
      <button type="button">
        Write a Review
      </button>
    </ButtonContainer>
  </>
);

Recommended.propTypes = {
  recommended: PropTypes.number.isRequired,
};

export default Recommended;
