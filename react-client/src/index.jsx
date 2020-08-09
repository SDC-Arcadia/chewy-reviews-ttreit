import React from 'react';
import ReactDOM from 'react-dom';

class Review extends React.Component {
  // constructor(props){
  //   super (props)
  // }

  componentDidMount() {
    this.get();
  }

  get = () => {

  }

  render() {
    return (
      <h1>Hi from App!</h1>
    );
  }
}

export default Review;

ReactDOM.render(
  <Review />,
  document.getElementById('review'),
);
