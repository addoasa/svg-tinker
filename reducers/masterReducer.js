import * as types from "../actionTypesVariableNames/actionTypeVariables";

const initialState = {
  masterSVGArray:[{a:"s"}],
}

function masterReducer(state=initialState, action){
  let masterSVGArray = state.masterSVGArray.slice();
  switch(action.type){
    case types.INSERT_INTO_MASTER:
      masterSVGArray.push({
        svgType:action.payload.svgType,
        svgData:action.payload.SVG,
      });
      return{
        ...state,
        masterSVGArray
      }
    case types.REMOVE_FROM_MASTER:
      // The payload of this action is the class id of a shape. The class_id is acting like an index for this array of SVG objects in state. This ensures that I am only deleting the shape I want 
		masterSVGArray.splice(action.payload.classId, 1); // Remove one item from activeSVG array with the index specified in the payload
		// console.log({ masterSVGArray });
		// console.log(action.payload.classId, "payload");
		return {
			...state,
			masterSVGArray,
		};
    default:
    return state;
  // --------------------------------------------------------------------------    
	// ADDING AND REMOVING PATH VERTICES
	// --------------------------------------------------------------------------    

	case types.ADD_VERTICES: 
  // we have access to the specific object we want to add vertices to through the classid that was sent here from the payload
  // console.log(masterSVGArray[action.payload]);
  // turn the unique state object at that specific classid into an array inorder to find the length
  // We do this so we know how many vertices already exist on this specific shape/object
  
  const turnObjToArr = [];
  for(let key in masterSVGArray[action.payload].svgData){
    turnObjToArr.push(key);
    // console.log(key)
  }
  
  // create a unique name for the keys we will be adding to this specific shape/object(ex: sliderX4 or sliderY9)
  
  let newVertice = "slider";
  if(turnObjToArr.length % 2 === 0){ 
    // if there are an even number of sliders...(which there should always be)... 
    // ... add a new pair to the specific shape/object in state at that classid
    newVertice= newVertice + "X" + turnObjToArr.length;
    masterSVGArray[action.payload].svgData[newVertice] = 300;
    newVertice = "slider";
    newVertice= newVertice + "Y" + (turnObjToArr.length + 1);
    masterSVGArray[action.payload].svgData[newVertice] = 300;
  }
  return {
    ...state,
    masterSVGArray,
  };
// ---------------------------------------------------------   
 
case types.REMOVE_VERTICES: 
  // Step 1) Delete the specified verticies
  // xToDelete and yToDelete are the vertice key names passed from the payload
  
  delete masterSVGArray[action.payload.classId].svgData[action.payload.xToDelete];
  delete masterSVGArray[action.payload.classId].svgData[action.payload.yToDelete];

  // Step 2) Rebuild the svg object to fix the order of its vertices
  // Ex: in this obj { 1:a, 2:b, 3:c, 4:d, 5:e } ... if I delete key 2... im left with { 1:a, 3:c, 4:d, 5:e } which is a problem
  // The solution here is to rebuild { 1:a, 3:c, 4:d, 5:e } as ... { 1:a, 2:c, 3:d, 4:e }
  
  // Do this by storing the vertice values of this specific svg object into an array...
  
  const makeObjToArr = [];
  for(let key in masterSVGArray[action.payload.classId].svgData){
    makeObjToArr.push(masterSVGArray[action.payload.classId].svgData[key]);
  }
  
  // and then build new obj using the same naming convention (ex: pairs of sliderX1: 300, sliderY2:400)

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
  masterSVGArray[action.payload.classId].svgData = newObj;
  return {
    ...state,
    masterSVGArray,
  };
  
      
  }
}
export default masterReducer;