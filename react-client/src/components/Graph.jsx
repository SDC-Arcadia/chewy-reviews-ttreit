/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const GraphBars = styled.div`
  display: flex;
  height: 30px;
  max-width: 800px;
  margin: 0 0 0px;
  line-height: 30px;
  font-size: 16px;
  color: white;
  padding: none;
  position: relative;
  &::before {
    border-radius: 3px;
    content: '';
    width: 100%;
    position: absolute;
    left: 0;
    height: 20px;
    top: 0;
    z-index: -2;
    background: #ecf0f1;
  }
  &::after {
    border-radius: 3px;
    content: '';
    background: #FF9800;
    height: 20px;
    display: block;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    max-width: ${(props) => props.percentage}%;
  }
`;

// eslint-disable-next-line react/prop-types
const Graph = ({ stars, handleGraphSelect }) => (
  <>
    <p>Filter reviews by star rating</p>
    {Object.entries(stars).reverse().map((star) => (
      <>
        <a onClick={handleGraphSelect} role="button" tabIndex={0} onKeyPress={handleGraphSelect}>
          <span id={star[0]} className="left-span">
            {star[0]}
            {' '}
            Star
          </span>
          <span id={star[0]} className="right-span">
            {star[1]}
            %
          </span>
        </a>
        <GraphBars key={star[1]} percentage={star[1]} />
      </>
    ))}
  </>
);

Graph.propTypes = {
  stars: PropTypes.shape({
    1: PropTypes.number,
    2: PropTypes.number,
    3: PropTypes.number,
    4: PropTypes.number,
    5: PropTypes.number,
  }).isRequired,
};

export default Graph;
