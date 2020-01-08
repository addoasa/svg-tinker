import * as types from "../actionTypesVariableNames/actionTypeVariables";

//set the initial state 
const initialState = {
	activeCircleSVGs: [ 
		{
      xAxis:100,
      yAxis:100,
      radius:50,
		}
	]

};

function circleReducer(state=initialState, action){
	
	let activeCircleSVGs = state.activeCircleSVGs.slice();

	switch(action.type){

	// --------------------------------------------------------------------------    
	// ADDING AND REMOVING SVG CIRCLES
	// --------------------------------------------------------------------------    

  case types.ADD_CIRCLE: 
  
		const newCircle = {
      xAxis:100,
      yAxis:100,
      radius:50,
		};
			// ...push this new SVG object into clone of array of SVG objects
		activeCircleSVGs.push(newCircle);
		// ***Possible future feature with this action could be allowing the user to specify the dimensions of a new shape by utilizing a payload
		return {
			...state,
			activeCircleSVGs,
		};
		//return the new state

	// --------------------------------------------------------- 
     
	case types.REMOVE_CIRCLE:
		// The payload of this action is the class id of a shape. The class_id is acting like an index for this array of SVG objects in state. This ensures that I am only deleting the shape I want 
		activeCircleSVGs.splice(action.payload.classId, 1); // Remove one item from activeSVG array with the index specified in the payload

		return {
			...state,
			activeCircleSVGs,
		};
    
	

	// --------------------------------------------------------------------------    
	//SETTING RANGES OF CIRCLE cx, cy and r VALUES
	// Use the class_id from the payload to find the index of the circle in the
	// activeCircleSVGs array. 
	// With that information we can now manipulate the x, y and radius values 
	// --------------------------------------------------------------------------    

	case types.SET_CIRCLE_X:

		activeCircleSVGs[action.payload.classId].xAxis = action.payload.xValue;

		return {
			...state,
			activeCircleSVGs,
		};

	// ---------------------------------------------------------    
 
	case types.SET_CIRCLE_Y:

		activeCircleSVGs[action.payload.classId].yAxis = action.payload.yValue;

		return {
			...state,
			activeCircleSVGs,
		};

	// ---------------------------------------------------------      
 
	case types.SET_CIRCLE_RADIUS:

		activeCircleSVGs[action.payload.classId].radius = action.payload.radiusValue;

		return{
			...state,
			activeCircleSVGs,
		};

	// ---------------------------------------------------------      

	default:
		return state;
  
  //if no match actiontypes then return state anyway
	}
}
export default circleReducer;