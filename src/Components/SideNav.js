import React from "react";
import "../styles/SideNav.scss";
import MenuList from "./MenuList";
import { connect } from "react-redux";
// ISSUE: Unable to load local images and assets. Problem is likely due to webpack.
// Until that issue is solved, assets will be stored on a cloudinary's cloud.
// const img = require("../../public/assets/logotext.png");

class SideNav extends React.Component{
	constructor(){
		super();
		this.state= {
			isSideNavExtended:false,
			currentSideNavMenuType:"",
		};
		this.extendSideNav= this.extendSideNav.bind(this);
		this.minimizeSideNav= this.minimizeSideNav.bind(this);
	}

	// handleClick(event){
	// 	this.props.removeSVG(event.target.value, event.target.className);
	// }

	extendSideNav(event){
		const logoGear = document.querySelector(".logo-image");
		logoGear.classList.add(".logo-image-quickspin");
		const selectedSideNavItem = event.currentTarget.id;
		console.log(event.target.id); 
		this.setState((state,props)=>{
			return(
				{
					isSideNavExtended: true,
					currentSideNavMenuType: selectedSideNavItem,
				}
			);
		});
		event.target.style = {"animation":"rotatelogo 1s"};
		console.log(this.state.isSideNavExtended, "Goober");
		console.log(this.state.selectedSideNavItem, "Goober");
	}

	minimizeSideNav(){
		if(this.state.isSideNavExtended){
			this.setState(
				{
					isSideNavExtended: false,
					currentSideNavMenuType: "",
				}
			);
		}
	}

	render(){

		return(
			<>
				<nav className="side-navbar" onMouseLeave={this.minimizeSideNav} style={this.state.isSideNavExtended ? {"width":"20vw","display":"flex"} : {"width":"7vw","display":"block"} }>
					<div className="love" >
						<div className="nav-item" >
							<div className = "nav-logo-container" >
								<div className ="logo">
									<img className = "logo-text" alt="This is the text part of the SVG Tinker logo." src="https://res.cloudinary.com/ddz7dotz5/image/upload/v1580222275/svgtinker/logotext.png" />
									<img className = "logo-image" alt="This is the rotating gear logo mark that is part of the SVG Tinker logo." src="https://res.cloudinary.com/ddz7dotz5/image/upload/v1580222094/svgtinker/gear.png" />
								</div>
							</div>
						</div>
						<hr></hr>
						<div className="nav-item">
							<div className="nav-item-content" id="new project" onClick={this.extendSideNav}>
						    	<svg viewBox="0 0 32 32"  fill="none"  strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
									<path d="M2 26 L30 26 30 7 14 7 10 4 2 4 Z M30 12 L2 12" />
								</svg>            
								{/* <p className = "nav-item-text" >New Project </p> */}
							</div>
						</div>
						<hr></hr>
						<div className="nav-item" >
							<div className="nav-item-content" id="save/export" onClick={this.extendSideNav} >
								<svg viewBox="0 0 32 32"  fill="none"  strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
									<path d="M28 22 L28 30 4 30 4 22 M16 4 L16 24 M8 12 L16 4 24 12" />
								</svg>
								{/* <p className = "nav-item-text" >Save/ Export</p> */}
							</div>
						</div>
						<hr></hr>
						<div className="nav-item" >
							<div className="nav-item-content" id="load/import" onClick={this.extendSideNav}>
								<svg  viewBox="0 0 32 32" fill="none"  strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
									<path d="M28 22 L28 30 4 30 4 22 M16 4 L16 24 M8 16 L16 24 24 16" />
								</svg>
								{/* <p className = "nav-item-text" >Load/ Import </p> */}
							</div>
						</div>
						<hr></hr>
						<div className="nav-item">
							<div className="nav-item-content" id="add shapes" onClick={this.extendSideNav}>
								<svg  viewBox="0 0 32 32"  fill="none"  strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
									<path d="M16 2 L16 30 M2 16 L30 16" />
								</svg>
								{/* <p className = "nav-item-text" >Add Shape</p> */}
							</div>
						</div>
						<hr></hr>
						<div className="nav-item" >
							<div className="nav-item-content" id="transform" onClick={this.extendSideNav}>
								<svg viewBox="0 0 20 20"  fill="none"  strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25">
									<path d=" M19 0 L0 17 L19 17 Z"/>
								</svg>
								{/* <p className = "nav-item-text" >Transform </p> */}
							</div>
						</div>
						<hr></hr>
						<div className="nav-item settings-nav"  >
							<div className="nav-item-content" id="settings menu" onClick={this.extendSideNav}>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
									<circle cx="7" cy="16" r="2" fill="white"/>
									<circle cx="16" cy="16" r="2" fill="white"/>
									<circle cx="25" cy="16" r="2" fill="white"/>
								</svg>
								{/* <p className = "nav-item-text" >Settings</p> */}
							</div>
						</div>
					</div>
					{this.state.isSideNavExtended ? <MenuList currentSideNavMenuType={this.state.currentSideNavMenuType} /> : <></>}
				</nav>
			</>
		);
	}
}

export default SideNav;