import * as types from "../actionTypesVariableNames/actionTypeVariables";
//imported the actiontype variables so that we can recieve errors

//set the initial state 
const initialState = {
	currentLetter: "A",
	//Initialized the default size of the workarea
	workspaceHeight:400,
	workspaceWidth:700,
	//Currently, every shape created will be initialized with 4 corners (each with an x position and a y position)
	activeSVGs: [ 
		{
			sliderX0:275,
			sliderY1:175,
			sliderX2:225,
			sliderY3:175,
			sliderX4:275,
			sliderY5:175,
			// sliderX6:225,
			// sliderY7:175,
		}
	]

};

// create reducer function
function pathReducer(state=initialState, action){
	// this is where all of my logic for changing state will go
	// golden rule is to never directly alter that initial state above.
	// so we make a copy of the items in state
	// For arrays, we use slice() because slice() will return a new array containing the elements of the old array
	let workspaceHeight = state.workspaceHeight;
	let workspaceWidth = state.workspaceWidth;
	let activeSVGs = state.activeSVGs.slice();

	//then set conditionals of how i want to change state based on the action type i pick
	//Often people seem to use switch statements here
	//check if the action object's type property equals a specific value
	switch(action.type){
	case types.ADD_SVG: //checking if the passed in action.type = the value of the ADD_SVG variable from the actionTypesVAriable file. In this case that literally equals "ADD_SVG"
		// if action type is ADD_SVG, create a new SVG object with values...
		const newSVG = {
			sliderX0:275,
			sliderY1:175,
			sliderX2:225,
			sliderY3:175,
			sliderX4:275,
			sliderY5:175,
		};
		// ...push this new SVG object into clone of array of SVG objects
		activeSVGs.push(newSVG);
		// console.log(state.activeSVGs)
		// ***Possible future feature with this action could be allowing the user to specify the dimensions of a new shape by utilizing a payload
		return {
			...state,
			activeSVGs,
		};
		//return the new state
    
		// ---------------------------------------------------------    
		// Logic for adding verticies
		// ---------------------------------------------------------    
	case types.ADD_VERTICES: 
		// we have access to the specific object we want to add vertices to through the classid in the payload
		// console.log(activeSVGs[action.payload]);
		// turn the unique state object at that specific classid into an array inorder to find the length
		// We do this so we know how many vertices already exist on this specific shape/object
		const turnObjToArr = [];
		for(let key in activeSVGs[action.payload]){
			turnObjToArr.push(key);
			// console.log(key)
		}
		// create a unique name for the keys we will be adding to this specific shape/object(ex: sliderX4 or sliderY9)
		let newVertice = "slider";
		if(turnObjToArr.length % 2 === 0){ 
			// if there are an even number of sliders...(which there should always be)... 
			// ... add a new pair to the specific shape/object in state at that classid
			newVertice= newVertice + "X" + turnObjToArr.length;
			activeSVGs[action.payload][newVertice] = 300;
			newVertice = "slider";
			newVertice= newVertice + "Y" + (turnObjToArr.length + 1);
			activeSVGs[action.payload][newVertice] = 300;
		}
		return {
			...state,
			activeSVGs,
		};
		// ---------------------------------------------------------   
   
	case types.REMOVE_VERTICES: 
		// Delete the specified verticies
    
		delete activeSVGs[action.payload.classId][action.payload.xToDelete];
		delete activeSVGs[action.payload.classId][action.payload.yToDelete];

		// then rebuild the object to fix order
		const makeObjToArr = [];
		for(let key in activeSVGs[action.payload.classId]){
			makeObjToArr.push(activeSVGs[action.payload.classId][key]);
		}
		//build new obj using the same naming convention
		const newObj = {};
		let newSlider ="";
		for(let i = 0; i < makeObjToArr.length; i+=2){
			if(makeObjToArr.length % 2 === 0){ 
				newSlider = "sliderX"+i;
				newObj[newSlider] = makeObjToArr[i];
				newSlider = "sliderY"+(i+1);
				newObj[newSlider] = makeObjToArr[i+1];
			}
		}
		activeSVGs[action.payload.classId] = newObj;
		return {
			...state,
			activeSVGs,
		};
    
		// --------------------------------------------------------- 
     
	case types.REMOVE_SVG:
		// The payload of this action is the class id of a shape. The class_id is acting like an index for this array of SVG objects in state. This ensures that I am only deleting the shape I want 
		activeSVGs.splice(action.payload.classId, 1); // Remove one item from activeSVG array with the index specified in the payload
		// console.log({ activeSVGs });
		// console.log(action.payload.classId, "payload");
		return {
			...state,
			activeSVGs,
		};

		// --------------------------------------------------------------------------    
		// SETTING WORKSPACE DIMENSIONS
		// Set the height & width of the work area to what is provided to us from 
		// the user's payload. 
		// --------------------------------------------------------------------------        
	case types.SET_HEIGHT:
		workspaceHeight = action.payload;
		console.log(action.payload);
		return {
			...state,
			workspaceHeight,
		};

		// ---------------------------------------------------------    

	case types.SET_WIDTH:
		workspaceWidth = action.payload;
		console.log(action.payload);
		return {
			...state,
			workspaceWidth,
		};

		// --------------------------------------------------------------------------    
		//SETTING RANGES
		// Use the class_id from the payload to find the index of the shape in the
		// activeSVGs array. 
		// With that information we can now manipulate x and y positioning of that 
		// specific shape's vertices
		// --------------------------------------------------------------------------    
	case types.SET_X:
		// find the specific index i activeSVGs array and change its value
		activeSVGs[action.payload.classId][action.payload.sliderId] = action.payload.value;
		// console.log(action.payload.classId, "classId");
		console.log(action.payload.sliderId, "sliderid");
		// console.log(action.payload.value, "vaLx");
		// console.log(state.activeSVGs);
		return {
			...state,
			activeSVGs,
		};

		// ---------------------------------------------------------    
 
	case types.SET_Y:
		activeSVGs[action.payload.classId][action.payload.sliderId] = action.payload.value;
		// console.log(action.payload.classId, "classId");
		console.log(action.payload.sliderId, "sliderid");
		// console.log(action.payload.value, "vaLy");

		// console.log(state.activeSVGs);
		return {
			...state,
			activeSVGs,
		};

		// ---------------------------------------------------------      

	default:
		return state;
  
  //if no match actiontypes then return state anyway
	}
}
export default pathReducer;