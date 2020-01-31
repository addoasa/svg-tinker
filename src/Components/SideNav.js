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
					<div className = "nav-logo-container" >
						<div className ="logo">
							<img className = "logo-text" alt="This is the text part of the SVG Tinker logo." src="https://res.cloudinary.com/ddz7dotz5/image/upload/v1580222275/svgtinker/logotext.png" />
							<img className = "logo-image" alt="This is the rotating gear logo mark that is part of the SVG Tinker logo." src="https://res.cloudinary.com/ddz7dotz5/image/upload/v1580222094/svgtinker/gear.png" />
						</div>
					</div>
				</div>
				<hr></hr>
				<div className="nav-item" >
					<div className="nav-item-content">
						<svg id="i-folder" viewBox="0 0 32 32"  fill="none"  stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
							<path d="M2 26 L30 26 30 7 14 7 10 4 2 4 Z M30 12 L2 12" />
						</svg>            
						<p className = "nav-item-text" >New Project </p>
					</div>
				</div>
				<hr></hr>
				<div className="nav-item" >
					<div className="nav-item-content">
            <svg id="i-export"  viewBox="0 0 32 32"  fill="none"  stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                <path d="M28 22 L28 30 4 30 4 22 M16 4 L16 24 M8 12 L16 4 24 12" />
            </svg>
            <p className = "nav-item-text" >Save/ Export</p>
					</div>
				</div>
				<hr></hr>
				<div className="nav-item" >
					<div className="nav-item-content">
						<svg id="i-import"  viewBox="0 0 32 32" fill="none"  stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
							<path d="M28 22 L28 30 4 30 4 22 M16 4 L16 24 M8 16 L16 24 24 16" />
						</svg>
            <p className = "nav-item-text" >Load/ Import </p>
					</div>
				</div>
				<hr></hr>
				<div className="nav-item" >
					<div className="nav-item-content">
            <svg id="i-plus"   viewBox="0 0 32 32"  fill="none"  stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                <path d="M16 2 L16 30 M2 16 L30 16" />
            </svg>
            <p className = "nav-item-text" >Add Shape</p>
					</div>
				</div>
				<hr></hr>
				<div className="nav-item" >
					<div className="nav-item-content">
          	<svg id="i-transform" viewBox="0 0 20 20"  fill="none"  stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25">
							<path d=" M19 0 L0 17 L19 17 Z"/>
						</svg>
            <p className = "nav-item-text" >Transform </p>
          </div>
				</div>
				<hr></hr>
				<div className="nav-item" >
					<div className="nav-item-content">
						<svg id="i-ellipsis-horizontal" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"    stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
							<circle cx="7" cy="16" r="2" fill="white"/>
							<circle cx="16" cy="16" r="2" fill="white"/>
							<circle cx="25" cy="16" r="2" fill="white"/>
						</svg>
            <p className = "nav-item-text" >Settings</p>
					</div>
				</div>
			</nav>
		)
	}
}

export default SideNav;