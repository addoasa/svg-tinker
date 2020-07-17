import React from "react";
import MenuItem from "./MenuItem";
import { connect } from "react-redux";

const mapStateToProps = (store)=>({
	uiState: store.uiState,
});

class MenuList extends React.Component{
	constructor(){
		super();
	}

	render(){
        let listOfItems;
        
        switch(this.props.currentSideNavMenuType){
		case "add shapes": 
			listOfItems = this.props.uiState.sideNavMenusAndContents.addShapeMenuList.map((item,index)=>{
				return <MenuItem key={`add shapes menu item ${index}`} currentSideNavMenuType = {this.props.currentSideNavMenuType} svgTypeToAdd = {item} spinFast ={this.props.spinFast}/>;
			});
                
			console.log(this.props.currentSideNavMenuType)
        }
        
		return(
			<>
			<div className = "extended-sidenavbar-menu">
			{this.props.windowWidth < 900 ? <button className="close-menu-btn" onClick={this.props.minimizeSideNav}>X</button> : <></>}
				<h2>{this.props.currentSideNavMenuType}</h2>
				<div className ="list-of-items">{listOfItems}</div>
			</div>
			</>
		);
	}
}

export default connect(mapStateToProps, null)(MenuList);