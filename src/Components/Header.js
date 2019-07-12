import React from "react";
import '../styles/Header.css'
import { connect } from 'react-redux';

// const something = require('../../public/assets/logo2.png');


class Header extends React.Component{
  constructor(){
    super()
  }

  handleClick(event){
    this.props.removeSVG(event.target.value, event.target.className)
  }
 
  render(){
    return(
      <div className="header">
        <div className="logo">
          <span id="SVGtitle">SVG</span><span id="tinkertitle">-Tinker</span>
        {/* <img src={require('../../public/assets/2.png')} /> */}
        <i class="fas fa-cogs"></i>
        </div>
      </div>
    )
  }
}

export default Header;