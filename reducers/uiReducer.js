import * as types from "../actionTypesVariableNames/actionTypeVariables.js";

const initialUIState = {
	isSideNavExtended:false,
	currentSideNavMenuType:"",
	sideNavMenusAndContents:{
		newProjectMenuList:["New Empty Project", "New Preset Project"],
		exportMenuList:["Quicksave","Save Project","Sync Projects","Export As"],
		importMenuList:["Load Project", "Load Project From File", "Import Preset Shape"],
		addShapeMenuList:["Path", "Circle", "Rectangle", "Line", "Ellipse", "Text"],
		transformMenuList:["Translate", "Scale"],
		settingsMenuList:[],
	},
	isModalActive:false,
	currentModalType:"",
};

function uiReducer(state=initialUIState, action){
	let isSideNavExtended = state.isSideNavExtended;
    let currentSideNavMenuType = state.currentSideNavMenuType;
    // Inorder to adequately clone the sideNavMenusAndContents object you stringify the object 
    //with JSON.stringify and then parse that string back into an object using JSON.parse
	const sideNavMenusAndContents = JSON.parse(JSON.stringify(state.sideNavMenusAndContents));

	switch(action.type){
	// --------------------------------------------------------------------------    
	// SIDE NAVBAR STATE LOGIC
	// --------------------------------------------------------------------------    

	case types.TOGGLE_SIDENAVBAR: {
                    
		if(!isSideNavExtended) isSideNavExtended = true;
		else if(isSideNavExtended) isSideNavExtended = false;
                    
		return{
			...state,
			isSideNavExtended,    
		};
	}

                
	case types.SET_CURRENT_SIDE_NAV_MENU_TYPE: {
		currentSideNavMenuType = action.payload;
		return{
			...state,
			currentSideNavMenuType,
		};
	}
	default:
		return state;
	}
	// --------------------------------------------------------------------------
}

export default uiReducer;