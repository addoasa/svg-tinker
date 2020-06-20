import * as types from "../actionTypesVariableNames/actionTypeVariables";

//   x // number: x is a px value that sets the 'left' property of the rectangle. Imagine margin-left or using left on an element thats been set to position: absolute. 
//   y // number: x is a px value that sets the 'top' property of the rectangle. Imagine margin-top or using top on an element thats been set to position: absolute. 
//   rx // number: rx is a value that acts similar to border radius. It will round the corners of the rectangle. Determines how round the top and bottom sides will be 
//   ry // number: ry is a value that acts similar to border radius. It will round the corners of the rectangle. Determines how round the right and left sides will be 
//   // ** You can make some pretty unique looking stuff by playing around with rx and ry together
//   width // number: width is set to determine how wide the rectangle will be
//   height // number: height is set to determine how high the rectangle will span
const initialState = {
	activeRectangleSVGs: [ 
		{
			x:100,
			y:100,
			rx:0,
			ry:0,
			width:50,
			height:100,
		}
	]
};

function rectangleReducer(state=initialState, action){
	
	let activeRectangleSVGs = state.activeRectangleSVGs.slice();

	switch(action.type){

	// --------------------------------------------------------------------------    
	// ADDING AND REMOVING SVG RECTANGLE
	// --------------------------------------------------------------------------    

  case types.ADD_RECTANGLE: 
  
		const newRectangle = {
			x:100,
			y:100,
			rx:0,
			ry:0,
			width:50,
			height:100,
		};
			// ...push this new SVG object into clone of array of SVG objects
		activeRectangleSVGs.push(newRectangle);
		// ***Possible future feature with this action could be allowing the user to specify the dimensions of a new shape by utilizing a payload
		return {
			...state,
			activeRectangleSVGs,
		};
		//return the new state

	// --------------------------------------------------------- 
     


	// --------------------------------------------------------------------------  
	// *NOTE* DUE TO REFACTORING, ALL ACTIONS BELOW ARE NO LONGER BEING USED. 
	//  THE USE_SLIDER ACTION IN THE MASTER REDUCER IS BEING USED INSTEAD   
	// --------------------------------------------------------------------------   
	//SETTING RANGES OF RECTANGLE cx, cy and r VALUES
	// Use the class_id from the payload to find the index of the circle in the
	// activeRectangleSVGs array. 
	// With that information we can now manipulate the x, y and radius values 
	// // --------------------------------------------------------------------------    

	// case types.SET_RECTANGLE_X:

	// 	activeRectangleSVGs[action.payload.classId].x = action.payload.x;

	// 	return {
	// 		...state,
	// 		activeRectangleSVGs,
	// 	};

	// // ---------------------------------------------------------    
 
	// case types.SET_RECTANGLE_Y:

	// 	activeRectangleSVGs[action.payload.classId].y = action.payload.y;

	// 	return {
	// 		...state,
	// 		activeRectangleSVGs,
	// 	};

	// // ---------------------------------------------------------      
 
	// case types.SET_RECTANGLE_HEIGHT:

	// 	activeRectangleSVGs[action.payload.classId].height = action.payload.height;

	// 	return{
	// 		...state,
	// 		activeRectangleSVGs,
	// 	};

	// // ---------------------------------------------------------      
 
	// case types.SET_RECTANGLE_WIDTH:

	// 	activeRectangleSVGs[action.payload.classId].width = action.payload.width;

	// 	return{
	// 		...state,
	// 		activeRectangleSVGs,
	// 	};

	// // ---------------------------------------------------------      
 
	// case types.SET_RECTANGLE_RX:

	// 	activeRectangleSVGs[action.payload.classId].rx = action.payload.rx;

	// 	return{
	// 		...state,
	// 		activeRectangleSVGs,
	// 	};

	// // ---------------------------------------------------------      
 
	// case types.SET_RECTANGLE_RY:

	// 	activeRectangleSVGs[action.payload.classId].ry = action.payload.ry;

	// 	return{
	// 		...state,
	// 		activeRectangleSVGs,
	// 	};

	// ---------------------------------------------------------      

	default:
		return state;
  
  //if no match actiontypes then return state anyway
	}
}
export default rectangleReducer;