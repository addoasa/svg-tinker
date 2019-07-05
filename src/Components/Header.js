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
        <img src={require('../../assets/2.png')} />
        </div>
        {/* <i class="fas fa-cogs"></i> */}
      </div>
    )
  }
}

export default Header;