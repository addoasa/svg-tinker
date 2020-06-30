import React from "react";
import "../styles/SideNav.scss";
import MenuList from "./MenuList";
import { toggleSideNavBar, setCurrentSideNavMenuType } from "../../actions";
import { connect } from "react-redux";
// ISSUE: Unable to load local images and assets. Problem is likely due to webpack.
// Until that issue is solved, assets will be stored on a cloudinary's cloud.
// const img = require("../../public/assets/logotext.png");

const mapStateToProps = (store)=>({
	uiState:store.uiState,
});

const mapDispatchToProps = (dispatch)=>({
	toggleSideNavBar: ()=> dispatch(toggleSideNavBar()),
	setCurrentSideNavMenuType: (menuType)=> dispatch(setCurrentSideNavMenuType(menuType)),
});

class SideNav extends React.Component{
	// This state wil need to be moved to redux
	constructor(){
		super();

		this.extendSideNav= this.extendSideNav.bind(this);
		this.minimizeSideNav= this.minimizeSideNav.bind(this);
		this.spinFast= this.spinFast.bind(this);
	}

	//-----------------------------------------
	//  Methods to expand and minimize the sidebar
	//-----------------------------------------

	extendSideNav(event){
		
		const selectedSideNavItem = event.currentTarget.id;
		console.log(event.target.id, "extended sidenav"); 
		
		if(!this.props.uiState.isSideNavExtended){
			this.props.toggleSideNavBar();
		}
		this.props.setCurrentSideNavMenuType(selectedSideNavItem);
	}

	minimizeSideNav(){
		if(this.props.uiState.isSideNavExtended){
			this.props.toggleSideNavBar();
			this.props.setCurrentSideNavMenuType(" ");
		}
	}
	//-----------------------------------------

	spinFast(event){
		if(this.props.windowWidth > 900){
			document.querySelector(".logo-image").id = "logo-image-quickspin";
			setTimeout(()=>{
				console.log("beads");
				document.querySelector(".logo-image").id = "";
			},1);
		}
			
		
	}
	render(){
		
		//---------------------------------------------------------------------------------------------
		// Clicking on any of the nav items below will tell redux to toggle the status of the sidenav bar 
		// to be expanded. This onClick event will also notify the redux store of which nav item was 
		// selected (in order to display the correct menu on the now expanded nav menu aka <MenuList />) 	
		//---------------------------------------------------------------------------------------------

		//---------------------------------------------------------------------------------------------
		// * Note * This component could probably be  refactored to be dynamic... probably using a 
		// <NavItem /> instead of listing them here
		//---------------------------------------------------------------------------------------------

		return(
			<>
				{/* <nav className="side-navbar" onMouseLeave={this.minimizeSideNav} style={this.props.uiState.isSideNavExtended ? {"width":"20vw","display":"flex"} : {"display":"block"} }> */}
				<nav id={this.props.windowWidth < 900 ? "side-navbar-horizontal" : "side-navbar-vertical"} className={this.props.uiState.isSideNavExtended ? "extended-sidenavbar" : "side-navbar" } onMouseLeave={this.minimizeSideNav}>
					<div className={this.props.windowWidth < 900 ? "side-navbar-items-horizontal" : "side-navbar-items-vertical"} >
						
						{/* ---------------------------------------------------------- */}
						
						{/* Hide the gear logo if the screen width is less than 900px */}
						{this.props.windowWidth > 900 
							?
							<div className="nav-item" >
								<div className = "nav-logo-container" >
									<div className ="logo">
										<img className = "logo-text" alt="This is the text part of the SVG Tinker logo." src="https://res.cloudinary.com/ddz7dotz5/image/upload/v1580222275/svgtinker/logotext.png" />
										<img className = "logo-image" onClick={this.spinFast} alt="This is the rotating gear logo mark that is part of the SVG Tinker logo." src="https://res.cloudinary.com/ddz7dotz5/image/upload/v1580222094/svgtinker/gear.png" />
									</div>
								</div>
							</div>
							: 
							<></>}

						{/* ---------------------------------------------------------- */}

						<div className="nav-item">
							<div className="nav-item-content" id="new project" onClick={this.extendSideNav}>
						    	<svg viewBox="0 0 32 32"  fill="none"  strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
									<path d="M2 26 L30 26 30 7 14 7 10 4 2 4 Z M30 12 L2 12" />
								</svg>            
								{/* <p className = "nav-item-text" >New Project </p> */}
							</div>
						</div>

						{/* ---------------------------------------------------------- */}

						<div className="nav-item" >
							<div className="nav-item-content" id="save/export" onClick={this.extendSideNav} >
								<svg viewBox="0 0 32 32"  fill="none"  strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
									<path d="M28 22 L28 30 4 30 4 22 M16 4 L16 24 M8 12 L16 4 24 12" />
								</svg>
								{/* <p className = "nav-item-text" >Save/ Export</p> */}
							</div>
						</div>

						{/* ---------------------------------------------------------- */}

						<div className="nav-item" >
							<div className="nav-item-content" id="load/import" onClick={this.extendSideNav}>
								<svg  viewBox="0 0 32 32" fill="none"  strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
									<path d="M28 22 L28 30 4 30 4 22 M16 4 L16 24 M8 16 L16 24 24 16" />
								</svg>
								{/* <p className = "nav-item-text" >Load/ Import </p> */}
							</div>
						</div>
						
						{/* ---------------------------------------------------------- */}

						<div className="nav-item">
							<div className="nav-item-content" id="add shapes" onClick={this.extendSideNav}>
								<svg  viewBox="0 0 32 32"  fill="none"  strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
									<path d="M16 2 L16 30 M2 16 L30 16" />
								</svg>
								{/* <p className = "nav-item-text" >Add Shape</p> */}
							</div>
						</div>
						
						{/* ---------------------------------------------------------- */}

						<div className="nav-item" >
							<div className="nav-item-content" id="transform" onClick={this.extendSideNav}>
								<svg viewBox="0 0 20 20"  fill="none"  strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25">
									<path d=" M19 0 L0 17 L19 17 Z"/>
								</svg>
								{/* <p className = "nav-item-text" >Transform </p> */}
							</div>
						</div>
						
						{/* ---------------------------------------------------------- */}

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

						{/* ---------------------------------------------------------- */}

					</div>
					{/* If user clicks a nav item, display the <MenuList /> with the appropriate content */}
					{this.props.uiState.isSideNavExtended ? <MenuList currentSideNavMenuType={this.props.uiState.currentSideNavMenuType} spinFast={this.spinFast} windowWidth={this.props.windowWidth} minimizeSideNav={this.minimizeSideNav}/> : <></>}
				</nav>
			</>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SideNav);