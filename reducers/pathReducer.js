import * as types from "../actionTypesVariableNames/actionTypeVariables";
//imported the actiontype variables so that we can recieve errors

//set the initial state 
const initialState = {
	currentLetter: "A",
	//Initialized the default size of the workarea
	workspaceHeight:300,
	workspaceWidth:700,
	//Currently, every shape created will be initialized with 4 corners (each with an x position and a y position)
	activePathSVGs: [ 
		{
			sliderX0:150,
			sliderY1:100,
			sliderX2:100,
			sliderY3:200,
			sliderX4:250,
			sliderY5:200,
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
	let activePathSVGs = state.activePathSVGs.slice();

	//then set conditionals of how i want to change state based on the action type i pick
	//Often people seem to use switch statements here
	//check if the action object's type property equals a specific value
	switch(action.type){

	// --------------------------------------------------------------------------    
	// ADDING AND REMOVING SVG PATHS
	// --------------------------------------------------------------------------    

	case types.ADD_PATH: //checking if the passed in action.type = the value of the ADD_PATH variable from the actionTypesVAriable file. In this case that literally equals "ADD_PATH"
		// if action type is ADD_PATH, create a new SVG object with values...
		const newSVG = {
			sliderX0:275,
			sliderY1:175,
			sliderX2:225,
			sliderY3:100,
			sliderX4:275,
			sliderY5:200,

		};
			// ...push this new SVG object into clone of array of SVG objects
		activePathSVGs.push(newSVG);
		// console.log(state.activePathSVGs)
		// ***Possible future feature with this action could be allowing the user to specify the dimensions of a new shape by utilizing a payload
		return {
			...state,
			activePathSVGs,
		};
		//return the new state

	// --------------------------------------------------------- 
     
	case types.REMOVE_SVG:
		// The payload of this action is the class id of a shape. The class_id is acting like an index for this array of SVG objects in state. This ensures that I am only deleting the shape I want 
		activePathSVGs.splice(action.payload.indexToDelete, 1); // Remove one item from activeSVG array with the index specified in the payload
		// console.log({ activePathSVGs });
		// console.log(action.payload.classId, "payload");
		return {
			...state,
			activePathSVGs,
		};
    
	// // --------------------------------------------------------------------------    
	// // ADDING AND REMOVING PATH VERTICES
	// // --------------------------------------------------------------------------    

	// case types.ADD_VERTICES: 
	// 	// we have access to the specific object we want to add vertices to through the classid that was sent here from the payload
	// 	// console.log(activePathSVGs[action.payload]);
	// 	// turn the unique state object at that specific classid into an array inorder to find the length
	// 	// We do this so we know how many vertices already exist on this specific shape/object
		
	// 	const turnObjToArr = [];
	// 	for(let key in activePathSVGs[action.payload]){
	// 		turnObjToArr.push(key);
	// 		// console.log(key)
	// 	}
		
	// 	// create a unique name for the keys we will be adding to this specific shape/object(ex: sliderX4 or sliderY9)
		
	// 	let newVertice = "slider";
	// 	if(turnObjToArr.length % 2 === 0){ 
	// 		// if there are an even number of sliders...(which there should always be)... 
	// 		// ... add a new pair to the specific shape/object in state at that classid
	// 		newVertice= newVertice + "X" + turnObjToArr.length;
	// 		activePathSVGs[action.payload][newVertice] = 300;
	// 		newVertice = "slider";
	// 		newVertice= newVertice + "Y" + (turnObjToArr.length + 1);
	// 		activePathSVGs[action.payload][newVertice] = 300;
	// 	}
	// 	return {
	// 		...state,
	// 		activePathSVGs,
	// 	};
	// // ---------------------------------------------------------   
   
	// case types.REMOVE_VERTICES: 
	// 	// Step 1) Delete the specified verticies
	// 	// xToDelete and yToDelete are the vertice key names passed from the payload
		
	// 	delete activePathSVGs[action.payload.classId][action.payload.xToDelete];
	// 	delete activePathSVGs[action.payload.classId][action.payload.yToDelete];

	// 	// Step 2) Rebuild the svg object to fix the order of its vertices
	// 	// Ex: in this obj { 1:a, 2:b, 3:c, 4:d, 5:e } ... if I delete key 2... im left with { 1:a, 3:c, 4:d, 5:e } which is a problem
	// 	// The solution here is to rebuild { 1:a, 3:c, 4:d, 5:e } as ... { 1:a, 2:c, 3:d, 4:e }
		
	// 	// Do this by storing the vertice values of this specific svg object into an array...
		
	// 	const makeObjToArr = [];
	// 	for(let key in activePathSVGs[action.payload.classId]){
	// 		makeObjToArr.push(activePathSVGs[action.payload.classId][key]);
	// 	}
		
	// 	// and then build new obj using the same naming convention (ex: pairs of sliderX1: 300, sliderY2:400)

	// 	const newObj = {};
	// 	let newSlider ="";
	// 	for(let i = 0; i < makeObjToArr.length; i+=2){
	// 		if(makeObjToArr.length % 2 === 0){ 
	// 			newSlider = "sliderX"+i;
	// 			newObj[newSlider] = makeObjToArr[i];
	// 			newSlider = "sliderY"+(i+1);
	// 			newObj[newSlider] = makeObjToArr[i+1];
	// 		}
	// 	}
	// 	activePathSVGs[action.payload.classId] = newObj;
	// 	return {
	// 		...state,
	// 		activePathSVGs,
	// 	};
    
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

	// // --------------------------------------------------------------------------    
	// //SETTING RANGES OF VERTICE VALUES
	// // Use the class_id from the payload to find the index of the shape in the
	// // activePathSVGs array. 
	// // With that information we can now manipulate x and y positioning of that 
	// // specific shape's vertices
	// // --------------------------------------------------------------------------    

	// case types.SET_X_PATH_VERTICE:
	// 	// find the specific index in activePathSVGs array and change its value

	// 	activePathSVGs[action.payload.classId][action.payload.sliderId] = action.payload.value;
	// 	// console.log(action.payload.classId, "classId");
	// 	console.log(action.payload.sliderId, "sliderid");
	// 	// console.log(action.payload.value, "vaLx");
	// 	// console.log(state.activePathSVGs);
	// 	return {
	// 		...state,
	// 		activePathSVGs,
	// 	};

	// // ---------------------------------------------------------    
 
	// case types.SET_Y_PATH_VERTICE:

	// 	activePathSVGs[action.payload.classId][action.payload.sliderId] = action.payload.value;
	// 	// console.log(action.payload.classId, "classId");
	// 	console.log(action.payload.sliderId, "sliderid");
	// 	// console.log(action.payload.value, "vaLy");

	// 	// console.log(state.activePathSVGs);
	// 	return {
	// 		...state,
	// 		activePathSVGs,
	// 	};

	// // ---------------------------------------------------------      

	default:
		return state;
  
  //if no match actiontypes then return state anyway
	}
}
export default pathReducer;