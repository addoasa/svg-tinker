import * as types from '../actionTypesVariableNames/actionTypeVariables';
//imported the actiontype variables so that we can recieve errors

const initialState = {
  currentLetter: 'A',
  workspaceHeight:200,
  workspaceWidth:200,
  
  activeSVGs: [ 
    {
      range1x:50,
      range1y:50,
      range2x:100,
      range2y:50,
      range3x:50,
      range3y:100,
      range4x:100,
      range4y:100,
    }
  ]

}
//set the starting state 

//then here I create my first reducer function
function testReducer(state=initialState, action){
  //this is where all of my logic for changing state will go
  //golden rule is to never directly alter that initial state above.
  //so we make a copy of the item in state
  let currentLetter = state.currentLetter;
  let workspaceHeight = state.workspaceHeight;
  let workspaceWidth = state.workspaceWidth;
  let activeSVGs = state.activeSVGs.slice();
  // let range1x = state.range1x;
  // let range1y = state.range1y;
  // let range2x = state.range2x;
  // let range2y = state.range2y;
  // let range3x = state.range3x;
  // let range3y = state.range3y;
  // let range4x = state.range4x;
  // let range4y = state.range4y;

  //then set conditionals of how i want to change state based on the action type i pick
  //Often people seem to use switch statements here
  //check if the action object's type property equals a specific value
  switch(action.type){
    case types.ADD_SVG: //checking if the passed in action.type = the value of the ADD_LETTER variable from the actionTypesVAriable file. In this case that literally equals "ADD_LETTER"
    const newSVG = {
      range1x:50,
      range1y:50,
      range2x:100,
      range2y:50,
      range3x:50,
      range3y:100,
      range4x:100,
      range4y:100,
    }
    activeSVGs.push(newSVG)
    console.log(state.activeSVGs)

    //if the action type is ADD_LETTER the change the state of currentLetter to "A"
    return {
      ...state,
      activeSVGs,
    };
    //return the new state
// --------------------------------------------------------------------------    
    case types.SET_HEIGHT:
      workspaceHeight = action.payload;
    console.log(action.payload)
      return {
        ...state,
        workspaceHeight,
      };

// --------------------------------------------------------------------------    

    case types.SET_WIDTH:
      workspaceWidth = action.payload;
    console.log(action.payload)
      return {
        ...state,
        workspaceWidth,
      };

// --------------------------------------------------------------------------    

    case types.SET_RANGE1X:
      
    activeSVGs[action.payload.classId].range1x = action.payload.range1x;
    console.log(action.payload.classId)
    console.log(state.activeSVGs)
      return {
        ...state,
        activeSVGs,
      };

// --------------------------------------------------------------------------    
 
    case types.SET_RANGE1Y:
    activeSVGs[action.payload.classId].range1y = action.payload.range1y;
    console.log(action.payload.classId)
    console.log(state.activeSVGs)
      return {
        ...state,
        activeSVGs,
      };

// --------------------------------------------------------------------------    
 
    case types.SET_RANGE2X:
    activeSVGs[action.payload.classId].range2x = action.payload.range2x;
    console.log(action.payload.classId)
    console.log(state.activeSVGs)
      return {
        ...state,
        activeSVGs,
      };

// --------------------------------------------------------------------------    
 
    case types.SET_RANGE2Y:
    activeSVGs[action.payload.classId].range2y = action.payload.range2y;
    console.log(action.payload.classId)
    console.log(state.activeSVGs)
      return {
        ...state,
        activeSVGs,
      };
// --------------------------------------------------------------------------    
 
    case types.SET_RANGE3X:
    activeSVGs[action.payload.classId].range3x = action.payload.range3x;
    console.log(action.payload.classId)
    console.log(state.activeSVGs)
      return {
        ...state,
        activeSVGs,
      };

// --------------------------------------------------------------------------    
 
    case types.SET_RANGE3Y:
    activeSVGs[action.payload.classId].range3y = action.payload.range3y;
    console.log(action.payload.classId)
    console.log(state.activeSVGs)
      return {
        ...state,
        activeSVGs,
      };

// --------------------------------------------------------------------------    
 
    case types.SET_RANGE4X:
    activeSVGs[action.payload.classId].range4x = action.payload.range4x;
    console.log(action.payload.classId)
    console.log(state.activeSVGs)
      return {
        ...state,
        activeSVGs,
      };

// --------------------------------------------------------------------------    
 
    case types.SET_RANGE4Y:
    activeSVGs[action.payload.classId].range4y = action.payload.range4y;
    console.log(action.payload.classId)
    console.log(state.activeSVGs)
      return {
        ...state,
        activeSVGs,
      };

// --------------------------------------------------------------------------    

    default:
      return state;
  
  //if no match actiontypes then return state anyway
  }
};
export default testReducer;