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
		// console.log({ activePathSVGs });
		// console.log(action.payload.classId, "payload");
		return {
			...state,
			masterSVGArray,
		};
    default:
    return state;
    
      
  }
}
export default masterReducer;