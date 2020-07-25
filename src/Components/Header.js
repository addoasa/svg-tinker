import React from "react";

class Header extends React.Component{
  constructor(){
    super()
  }

  render(){
    return(
      <div className="header">
        <div>
          <span>SVG TINKER v 0.1.15
            <a className= "github-link" href="https://github.com/addoasa/svg-tinker">
              <i className="fab fa-github"></i>
            </a>
          </span> 
        </div>
      </div>
    )
  }
}

export default Header;