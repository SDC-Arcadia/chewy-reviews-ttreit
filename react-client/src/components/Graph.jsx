import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line no-unused-vars
const Graph = ({ stars }) => (
  <table>
    <tbody>
      <tr>
        <td>5 Stars</td>
        <td>Insert Graph Here</td>
        <td>
          {stars[4]}
          %
        </td>
      </tr>
      <tr>
        <td>4 Stars</td>
        <td>Insert Graph Here</td>
        <td>
          {stars[3]}
          %
        </td>
      </tr>
      <tr>
        <td>3 Stars</td>
        <td>Insert Graph Here</td>
        <td>
          {stars[2]}
          %
        </td>
      </tr>
      <tr>
        <td>2 Stars</td>
        <td>Insert Graph Here</td>
        <td>
          {stars[1]}
          %
        </td>
      </tr>
      <tr>
        <td>1 Stars</td>
        <td>Insert Graph Here</td>
        <td>
          {stars[0]}
          %
        </td>
      </tr>
    </tbody>
  </table>
);

Graph.propTypes = {
  stars: PropTypes.arrayOf(Number).isRequired,
};

export default Graph;
