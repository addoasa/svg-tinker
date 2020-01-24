import * as types from "../actionTypesVariableNames/actionTypeVariables";
{/* <ellipse cx="240" cy="50" rx="220" ry="30" style="fill:yellow" /> // This ellipse will overlap the second one */}

const initialState = {
	activeEllipseSVGs: [ 
		{
      xAxis:100,
      yAxis:100,
      rWidth:50,
      rHeight:100
		}
	]
};

function ellipseReducer(state=initialState, action){
	
	let activeEllipseSVGs = state.activeEllipseSVGs.slice();

	switch(action.type){

	// --------------------------------------------------------------------------    
	// ADDING AND REMOVING SVG ELLIPSE
	// --------------------------------------------------------------------------    

  case types.ADD_ELLIPSE: 
  
		const newEllipse = {
      xAxis:100,
      yAxis:100,
      rWidth:50,
      rHeight:100,
		};
			// ...push this new SVG object into clone of array of SVG objects
		activeEllipseSVGs.push(newEllipse);
		// ***Possible future feature with this action could be allowing the user to specify the dimensions of a new shape by utilizing a payload
		return {
			...state,
			activeEllipseSVGs,
		};
		//return the new state

	// --------------------------------------------------------- 
     


	// --------------------------------------------------------------------------    
	//SETTING RANGES OF ELLIPSE cx, cy and r VALUES
	// Use the class_id from the payload to find the index of the circle in the
	// activeEllipseSVGs array. 
	// With that information we can now manipulate the x, y and radius values 
	// --------------------------------------------------------------------------    

	case types.SET_ELLIPSE_X:

		activeEllipseSVGs[action.payload.classId].xAxis = action.payload.xValue;

		return {
			...state,
			activeEllipseSVGs,
		};

	// ---------------------------------------------------------    
 
	case types.SET_ELLIPSE_Y:

		activeEllipseSVGs[action.payload.classId].yAxis = action.payload.yValue;

		return {
			...state,
			activeEllipseSVGs,
		};

	// ---------------------------------------------------------      
 
	case types.SET_ELLIPSE_HEIGHT:

		activeEllipseSVGs[action.payload.classId].radius = action.payload.rHeight;

		return{
			...state,
			activeEllipseSVGs,
		};

	// ---------------------------------------------------------      
 
	case types.SET_ELLIPSE_WIDTH:

		activeEllipseSVGs[action.payload.classId].radius = action.payload.rWidth;

		return{
			...state,
			activeEllipseSVGs,
		};

	// ---------------------------------------------------------      

	default:
		return state;
  
  //if no match actiontypes then return state anyway
	}
}
export default ellipseReducer;