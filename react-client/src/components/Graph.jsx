import React from 'react';
import PropTypes from 'prop-types';

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
  stars: PropTypes.arrayOf(Number),
};

Graph.defaultProps = {
  stars: PropTypes.arrayOf(Number),
};

export default Graph;
