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
        <img className="logo-img" src= 'https://svgtinkerassets.s3.amazonaws.com/svgtinkerbannerlogolarge.png' />
        {/* <i class="fas fa-cogs"></i> */}
        </div>
      </div>
    )
  }
}

export default Header;