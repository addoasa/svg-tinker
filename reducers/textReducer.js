import * as types from "../actionTypesVariableNames/actionTypeVariables";
// x // number : used to set the x coordinates of the text on the svg
// y // number : used to set the y coordinates of the text on the svg
const initialState = {
	activeTextSVGs: [ 
		{
			x:100,
			y:100,
			text:""
		}
	]
};

function textReducer(state=initialState, action){
	
	let activeTextSVGs = state.activeTextSVGs.slice();

	switch(action.type){

	// --------------------------------------------------------------------------    
	// ADDING SVG TEXT
	// --------------------------------------------------------------------------    

	case types.ADD_TEXT: 
	
	const newText = {
		x:100,
		y:100,
		text:""
	};
	// ...push this new SVG object into clone of array of SVG objects
	activeTextSVGs.push(newText);
	// ***Possible future feature with this action could be allowing the user to specify the dimensions of a new shape by utilizing a payload
	return {
		...state,
		activeTextSVGs,
	};
	//return the new state     


	// --------------------------------------------------------------------------    
	// *NOTE* DUE TO REFACTORING, ALL ACTIONS BELOW ARE NO LONGER BEING USED. 
	//  THE USE_SLIDER ACTION IN THE MASTER REDUCER IS BEING USED INSTEAD   
	// --------------------------------------------------------------------------
	//SETTING RANGES OF TEXT cx, cy and r VALUES
	// Use the class_id from the payload to find the index of the circle in the
	// activeTextSVGs array. 
	// With that information we can now manipulate the x, y and radius values 
	// --------------------------------------------------------------------------    

	// case types.SET_TEXT_X:

	// 	activeTextSVGs[action.payload.classId].x = action.payload.x;

	// 	return {
	// 		...state,
	// 		activeTextSVGs,
	// 	};

	// // ---------------------------------------------------------    
 
	// case types.SET_TEXT_Y:

	// 	activeTextSVGs[action.payload.classId].y = action.payload.y;

	// 	return {
	// 		...state,
	// 		activeTextSVGs,
	// 	};

	// // ---------------------------------------------------------      
 
	// case types.SET_TEXT:

	// 	activeTextSVGs[action.payload.classId].text = action.payload.text;

	// 	return{
	// 		...state,
	// 		activeTextSVGs,
	// 	};


	default:
		return state;
  
  //if no match actiontypes then return state anyway
	}
}
export default textReducer;