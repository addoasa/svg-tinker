import React from "react";
import Workspace from "./Workspace";
import Tools from "./Tools";
import LiveCode from "./LiveCode";
import SideNav from "./SideNav";
import Header from "./Header";
import NavMenuModal from "./NavMenuModal";
import { connect } from "react-redux";

const mapStateToProps = (store)=>({
  uiState:store.uiState
});

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      windowWidth: 0
    }
  }
  componentDidMount(){
    setInterval(()=>{
      if(window.innerWidth != this.state.windowWidth){
        console.log("hit");
        this.setState({
          windowWidth:window.innerWidth
        });
      }
    },1)
    
  }
  render(){
    console.log(window.outerWidth);
    return(
      <div className = "start">
        
        <Header />
        <SideNav windowWidth={this.state.windowWidth}/>
        {/* ----------------------------------------------------------- */}
          {/* If the user triggered a modal to be active, render <NavMenuModal /> */}
          {/* ----------------------------------------------------------- */}
          {this.props.uiState.isModalActive ? <NavMenuModal /> : <></>}
        {/* <Scape /> */}
        
        {/* ------------------------------------------------------------- */}
        {/* Push the ui to the right if the side nav bar is extended */}
        {/* ------------------------------------------------------------- */}
        <main className ="main-layout" style={this.props.uiState.isSideNavExtended && this.state.windowWidth > 900 ? {"margin-left":"21vw"}:{"margin-left":"12vw"}}>
          <Tools />
          {/* ----------------------------------------------------------- */}
          {/* If the screen width is below 1010px breakpoint, set the workspace 
          and livecode components to sit on top of each other */}
          {/* ----------------------------------------------------------- */}
          {this.state.windowWidth < 1010 
          ?
            <div className = "display-and-code-block">
              <Workspace />
              <LiveCode />
            </div>
            :
            <>
              <Workspace />
              <LiveCode />
            </>
          }
        </main>
         
      </div>
    )
  }
}

export default connect(mapStateToProps,null)(App);