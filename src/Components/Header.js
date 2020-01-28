import React from "react";
import '../styles/Header.scss'

class Header extends React.Component{
  constructor(){
    super()
  }

  render(){
    return(
      <div className="header">
        <div>
          <h1>SVG TINKER v 0.1.9</h1>
        </div>
      </div>
    )
  }
}

export default Header;