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
          <a className= "github-link" href="https://github.com/addoasa/svg-tinker">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    )
  }
}

export default Header;