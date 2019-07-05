import React from 'react';
import Scape from './Scape';
import Workspace from './Workspace';
import Tools from './Tools';
import LiveCode from './LiveCode';
import Header from './Header';
import "../styles/App.css";

class App extends React.Component{
  constructor(){
    super()
  }
  render(){
    return(
      <div className = "start">
        <Header />
        <Scape />
        <main className ="main-layout">
          <Tools />
          <Workspace />
          <LiveCode />
        </main>
      </div>
    )
  }
}

export default App;