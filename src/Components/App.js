import React from "react";
import Workspace from "./Workspace";
import Tools from "./Tools";
import LiveCode from "./LiveCode";
import SideNav from "./SideNav";
import Header from "./Header";
import { connect } from "react-redux";
import "../styles/App.scss";

const mapStateToProps = (store)=>({
  uiState:store.uiState
});

class App extends React.Component{
  constructor(){
    super();
  }
  render(){
    return(
      <div className = "start">
        <Header />
        <SideNav />
        {/* <Scape /> */}
        <main className ="main-layout" style={this.props.uiState.isSideNavExtended ? {"margin-left":"21vw"}:{"margin-left":"12vw"}}>
          <Tools />
          <Workspace />
          <LiveCode />
        </main>
      </div>
    )
  }
}

export default connect(mapStateToProps,null)(App);