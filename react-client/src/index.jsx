import React from 'react';
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(){
    super()
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