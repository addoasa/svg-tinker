import React from "react";
import '../styles/Header.css'
import { connect } from 'react-redux';


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
          {/* <span id="SVGtitle">SVG</span><span id="tinkertitle">-Tinker</span> */}
        <img className="logo-img" src= 'https://svgtinkerassets.s3.amazonaws.com/svgtinkerbannerlogolargewhite2.png' />
        <p>Currently in Alpha (version 0.2.0)</p>
        {/* <i class="fas fa-cogs"></i> */}
        </div>
      </div>
    )
  }
}

export default Header;