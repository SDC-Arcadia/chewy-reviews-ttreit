import React from 'react';
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.get()
  }

  get = () => {
    fetch('http://google.com/')
    // console.log('hi')
  }

  render(){
    return(
      <h1>Hi from App!</h1>
    )
  }
}

export default App;

ReactDOM.render(
  <App />,
  document.getElementById('app')
  )