/* eslint-disable no-console */
import React from 'react';
import ReactDOM from 'react-dom';

class Reviews extends React.Component {
  // constructor(props){
  //   super (props)
  // }

  componentDidMount() {
    this.getReviews('P020');
  }

  getReviews = (productId) => {
    const url = `/reviewData/${productId}`;
    fetch(url, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => console.log('Data from fetch: ', data));
  }

  render() {
    return (
      <h1>Hi from App!</h1>
    );
  }
}

export default Reviews;

ReactDOM.render(
  <Reviews />,
  document.getElementById('reviews'),
);
