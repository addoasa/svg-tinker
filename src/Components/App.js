import React from 'react';
import Scape from './Scape';
import Workspace from './Workspace';
import Tools from './Tools';
class App extends React.Component{
  constructor(){
    super()
  }
  render(){
    return(
      <div className = "start">
        <h2>This is from react</h2>
        <h3>Click here</h3>
        <Scape />
        <Tools />
        <Workspace />
      </div>
    )
  }
}

export default App;