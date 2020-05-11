import React from "react";
import MenuItem from "./MenuItem";
import "../styles/MenuList.scss";

class MenuList extends React.Component{
	constructor(){
        super();
        this.state={
            newProjectMenuList:[],
            exportMenuList:[],
            importMenuList:[],
            addMenuList:["Path", "Circle", "Rectangle", "Line", "Ellipse", "Text"],
            transformMenuList:[],
            settingsMenuList:[],

        }
        
	}

	render(){
        const listOfItems = this.state.addMenuList.map((item,index)=>{
            return <MenuItem currentSideNavMenuType = {this.props.currentSideNavMenuType} svgTypeToAdd = {item}/>;
        });
        
        console.log(this.props.currentSideNavMenuType)
		return(
            <div className = "extended-sidenavbar-menu">
                <h2>{this.props.currentSideNavMenuType}</h2>
                <div className ="list-of-items">{listOfItems}</div>
            </div>
		);
	}
}

export default MenuList;