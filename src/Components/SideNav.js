import React from "react";
import '../styles/SideNav.scss'
import { connect } from 'react-redux';
const img = require("../../public/assets/logotext.png");

class SideNav extends React.Component{
  constructor(){
    super()
  }

  handleClick(event){
    this.props.removeSVG(event.target.value, event.target.className)
  }
 
  render(){
    return(
      <nav className="side-navbar">
        <div className="nav-item" >
          {/* <h1>Logo</h1> */}
          <div className="nav-item-content">
            <img src={img} />
          </div>
        </div>
        <div className="nav-item" >
          {/* <h1>New </h1> */}
          <div className="nav-item-content"></div>
        </div>
        <div className="nav-item" >
          {/* <h1>Save</h1> */}
          <div className="nav-item-content"></div>
        </div>
        <div className="nav-item" >
          {/* <h1>Load</h1> */}
          <div className="nav-item-content"></div>
        </div>
        <div className="nav-item" >
          {/* <h1>Add</h1> */}
          <div className="nav-item-content"></div>
        </div>
        <div className="nav-item" >
          {/* <h1>Tra</h1> */}
          <div className="nav-item-content"></div>
        </div>
        <div className="nav-item" >
          {/* <h1>Set</h1> */}
          <div className="nav-item-content"></div>
        </div>
      </nav>
    )
  }
}

export default SideNav;