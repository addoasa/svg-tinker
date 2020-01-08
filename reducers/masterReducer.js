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
    default:
    return state;
    
      
  }
}
export default masterReducer;