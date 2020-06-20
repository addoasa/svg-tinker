import * as types from "../actionTypesVariableNames/actionTypeVariables";

//   x1 // number: x1 is used to set the x coordinate of the first point
//   y1 // number: y1 is used to set the y coordinate of the first point 
//   x2 // number: x2 is used to set the x coordinate of the second  point
//   y2 // number: y2 is used to set the y coordinate of the  second point 

const initialState = {
	activeLineSVGs: [ 
		{
			x1:100,
			y1:100,
			x2:50,
			y2:100
		}
	]
};

function lineReducer(state=initialState, action){
	
	let activeLineSVGs = state.activeLineSVGs.slice();

	switch(action.type){

	// --------------------------------------------------------------------------    
	// ADDING AND REMOVING SVG LINE
	// --------------------------------------------------------------------------    

  case types.ADD_LINE: 
  
		const newLine = {
			x1:100,
			y1:100,
			x2:50,
			y2:100
		};
			// ...push this new SVG object into clone of array of SVG objects
		activeLineSVGs.push(newLine);
		// ***Possible future feature with this action could be allowing the user to specify the dimensions of a new shape by utilizing a payload
		return {
			...state,
			activeLineSVGs,
		};
		//return the new state

	// --------------------------------------------------------- 
     


	// --------------------------------------------------------------------------    
	// *NOTE* DUE TO REFACTORING, ALL ACTIONS BELOW ARE NO LONGER BEING USED. 
	//  THE USE_SLIDER ACTION IN THE MASTER REDUCER IS BEING USED INSTEAD   
	// -------------------------------------------------------------------------- 
	//SETTING RANGES OF LINE cx, cy and r VALUES
	// Use the class_id from the payload to find the index of the circle in the
	// activeLineSVGs array. 
	// With that information we can now manipulate the x, y and radius values 
	// --------------------------------------------------------------------------    

	// case types.SET_LINE_X1:

	// 	activeLineSVGs[action.payload.classId].x1 = action.payload.x1;

	// 	return {
	// 		...state,
	// 		activeLineSVGs,
	// 	};

	// // ---------------------------------------------------------    
 
	// case types.SET_LINE_Y1:

	// 	activeLineSVGs[action.payload.classId].y1 = action.payload.y1;

	// 	return {
	// 		...state,
	// 		activeLineSVGs,
	// 	};

	// // ---------------------------------------------------------      
 
	// case types.SET_LINE_X2:

	// 	activeLineSVGs[action.payload.classId].x2 = action.payload.x2;

	// 	return{
	// 		...state,
	// 		activeLineSVGs,
	// 	};

	// // ---------------------------------------------------------      
 
	// case types.SET_LINE_Y2:

	// 	activeLineSVGs[action.payload.classId].y2 = action.payload.y2;

	// 	return{
	// 		...state,
	// 		activeLineSVGs,
	// 	};

	// ---------------------------------------------------------      

	default:
		return state;
  
  //if no match actiontypes then return state anyway
	}
}
export default lineReducer;