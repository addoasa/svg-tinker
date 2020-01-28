import React from "react";
import Scape from "./Scape";
import Workspace from "./Workspace";
import Tools from "./Tools";
import LiveCode from "./LiveCode";
import SideNav from "./SideNav";
import Header from "./Header";

import "../styles/App.scss";

class App extends React.Component{
  constructor(){
    super()
  }
  render(){
    return(
      <div className = "start">
        <Header />
        <SideNav />
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