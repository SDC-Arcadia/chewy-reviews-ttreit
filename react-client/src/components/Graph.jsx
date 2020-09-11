/* eslint-disable react/no-array-index-key */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const GraphBars = styled.div`
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

const Graph = ({ stars }) => (
  <>
    <p>Filter reviews by star rating</p>
    {stars.map((star, i) => (
      <GraphBars key={i} percentage={star} />
    ))}
  </>
);

Graph.propTypes = {
  stars: PropTypes.arrayOf(Number).isRequired,
};

export default Graph;
