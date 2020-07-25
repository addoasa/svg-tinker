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
		
		// When the user clicks on a nav menu icon, we check which item they clicked
        switch(this.props.currentSideNavMenuType){
			
			// If the user clicked the new project icon...
			case "new project": 
			// render a <MenuItem /> for each item in the newProjectMenuList array in state
			listOfItems = this.props.uiState.sideNavMenusAndContents.newProjectMenuList.map((item,index)=>{
				return <MenuItem key={`new project menu item ${index}`} currentSideNavMenuType = {this.props.currentSideNavMenuType} listItemToAdd = {item} spinFast ={this.props.spinFast}/>;
			});
			break;
			case "save/export": 
			// render a <MenuItem /> for each item in the exportMenuList array in state
			listOfItems = this.props.uiState.sideNavMenusAndContents.exportMenuList.map((item,index)=>{
				return <MenuItem key={`save/export menu item ${index}`} currentSideNavMenuType = {this.props.currentSideNavMenuType} listItemToAdd = {item} spinFast ={this.props.spinFast}/>;
			});
			break;
			case "load/import": 
			// render a <MenuItem /> for each item in the importMenuList array in state
			listOfItems = this.props.uiState.sideNavMenusAndContents.importMenuList.map((item,index)=>{
				return <MenuItem key={`load/import menu item ${index}`} currentSideNavMenuType = {this.props.currentSideNavMenuType} listItemToAdd = {item} spinFast ={this.props.spinFast}/>;
			});
			break;
			case "add shapes": 
			// render a <MenuItem /> for each item in the addShapeMenuList array in state
			listOfItems = this.props.uiState.sideNavMenusAndContents.addShapeMenuList.map((item,index)=>{
				return <MenuItem key={`add shapes menu item ${index}`} currentSideNavMenuType = {this.props.currentSideNavMenuType} listItemToAdd = {item} spinFast ={this.props.spinFast}/>;
			});
			break;
			case "transform": 
			// render a <MenuItem /> for each item in the transformMenuList array in state
			listOfItems = this.props.uiState.sideNavMenusAndContents.transformMenuList.map((item,index)=>{
				return <MenuItem key={`tranform menu item ${index}`} currentSideNavMenuType = {this.props.currentSideNavMenuType} listItemToAdd = {item} spinFast ={this.props.spinFast}/>;
			});
			break;
			case "settings menu": 
			// render a <MenuItem /> for each item in the settingsMenuList array in state
			listOfItems = this.props.uiState.sideNavMenusAndContents.settingsMenuList.map((item,index)=>{
				return <MenuItem key={`settings menu item ${index}`} currentSideNavMenuType = {this.props.currentSideNavMenuType} listItemToAdd = {item} spinFast ={this.props.spinFast}/>;
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