import React from "react";
import '../styles/SideNav.scss'
import { connect } from 'react-redux';
// ISSUE: Unable to load local images and assets. Problem is likely due to webpack.
// Until that issue is solved, assets will be stored on a cloudinary's cloud.
// const img = require("../../public/assets/logotext.png");

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
          <div className="nav-item-content">
            <div className ="logo">
              <img className = "logo-text" alt="This is the text part of the SVG Tinker logo." src="https://res.cloudinary.com/ddz7dotz5/image/upload/v1580222275/svgtinker/logotext.png" />
              <img className = "logo-image" alt="This is the rotating gear logo mark that is part of the SVG Tinker logo." src="https://res.cloudinary.com/ddz7dotz5/image/upload/v1580222094/svgtinker/gear.png" />
            </div>
          </div>
        </div>
        <div className="nav-item" >
          <div className="nav-item-content">
            {/* <h1>logo</h1>
            <p>New </p> */}
          </div>
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